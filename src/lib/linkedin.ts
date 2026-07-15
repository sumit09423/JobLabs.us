import { fallbackLinkedInPosts, withLinkedInFallbackImages } from "@/data/linkedin-posts";
import {
  getValidAccessToken,
  readLinkedInToken,
} from "@/lib/linkedin-auth";
import type { LinkedInPost, LinkedInPostsResponse } from "@/types/linkedin";

const LINKEDIN_API_VERSION = "202506";
const COMPANY_PAGE_URL = "https://www.linkedin.com/company/joblabs-us";
const DEFAULT_RSS_URL = "https://rss.app/feeds/BIFCrF3ZJJi7Q97Y.xml";
const MAX_POSTS = 30;

type LinkedInApiPost = {
  id?: string;
  commentary?: string;
  publishedAt?: number;
  createdAt?: number;
  content?: {
    media?: {
      id?: string;
    };
    article?: {
      title?: string;
      description?: string;
      thumbnail?: string;
    };
    multiImage?: {
      images?: Array<{
        altText?: string;
        url?: string;
      }>;
    };
  };
};

function formatDate(timestamp?: number | string): string {
  if (!timestamp) return "Recently";
  const date =
    typeof timestamp === "number" ? new Date(timestamp) : new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "Recently";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function postUrlFromId(id?: string): string {
  if (!id) return COMPANY_PAGE_URL;
  return `https://www.linkedin.com/feed/update/${encodeURIComponent(id)}`;
}

function extractImage(post: LinkedInApiPost): string | undefined {
  const images = post.content?.multiImage?.images;
  if (images?.[0]?.url) return images[0].url;
  if (post.content?.article?.thumbnail) return post.content.article.thumbnail;
  return undefined;
}

function mapApiPost(post: LinkedInApiPost): LinkedInPost | null {
  const text = post.commentary?.trim();
  if (!text) return null;

  return {
    id: post.id ?? crypto.randomUUID(),
    text,
    url: postUrlFromId(post.id),
    publishedAt: formatDate(post.publishedAt ?? post.createdAt),
    image: extractImage(post),
  };
}

function decodeEntities(value: string): string {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function stripHtml(value: string): string {
  return decodeEntities(
    value
      .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
      .replace(/<br\s*\/?>/gi, "\n")
      .replace(/<\/p>/gi, "\n")
      .replace(/<[^>]+>/g, " ")
      .replace(/\s+/g, " ")
      .trim(),
  );
}

function normalizeImageUrl(url?: string): string | undefined {
  if (!url) return undefined;
  const decoded = decodeEntities(url.trim());
  if (!decoded.startsWith("http")) return undefined;
  // LinkedIn CDN returns 403 when query params remain HTML-encoded (&amp;).
  return decoded;
}

function extractImageFromHtml(value: string): string | undefined {
  const decoded = decodeEntities(
    value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1"),
  );
  const match = decoded.match(/<img[^>]+src=["']([^"']+)["']/i);
  return normalizeImageUrl(match?.[1]);
}

function tagValue(block: string, tag: string): string | undefined {
  const match = block.match(
    new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, "i"),
  );
  return match?.[1] ? stripHtml(match[1]) : undefined;
}

function attributeValue(
  block: string,
  tag: string,
  attribute: string,
): string | undefined {
  const match = block.match(
    new RegExp(`<${tag}[^>]*${attribute}=["']([^"']+)["'][^>]*/?>`, "i"),
  );
  return match?.[1];
}

async function linkedInFetch(path: string, token: string) {
  const response = await fetch(`https://api.linkedin.com/rest/${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Linkedin-Version": LINKEDIN_API_VERSION,
      "X-Restli-Protocol-Version": "2.0.0",
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`LinkedIn API error: ${response.status}`);
  }

  return response.json();
}

async function resolveOrganizationId(
  token: string,
  organizationId?: string,
  vanityName?: string,
): Promise<string | null> {
  if (organizationId) return organizationId;

  const vanity = vanityName ?? "joblabs-us";
  const data = await linkedInFetch(
    `organizations?q=vanityName&vanityName=${encodeURIComponent(vanity)}`,
    token,
  );

  const elements = data.elements as Array<{ id?: number | string }> | undefined;
  const id = elements?.[0]?.id;
  return id ? String(id) : null;
}

async function fetchPostsFromLinkedInApi(): Promise<LinkedInPost[]> {
  const token = await getValidAccessToken();
  if (!token) return [];

  const stored = await readLinkedInToken();
  const organizationId = await resolveOrganizationId(
    token,
    process.env.LINKEDIN_ORGANIZATION_ID?.trim() || stored?.organizationId,
    process.env.LINKEDIN_VANITY_NAME?.trim(),
  );

  if (!organizationId) return [];

  const author = encodeURIComponent(`urn:li:organization:${organizationId}`);
  const posts: LinkedInPost[] = [];
  let start = 0;
  const pageSize = 50;

  while (posts.length < MAX_POSTS) {
    const data = await linkedInFetch(
      `posts?q=author&author=${author}&count=${pageSize}&start=${start}&sortBy=CREATED`,
      token,
    );

    const elements = (data.elements as LinkedInApiPost[] | undefined) ?? [];
    if (elements.length === 0) break;

    for (const element of elements) {
      const mapped = mapApiPost(element);
      if (mapped) posts.push(mapped);
      if (posts.length >= MAX_POSTS) break;
    }

    if (elements.length < pageSize) break;
    start += pageSize;
  }

  return posts;
}

async function fetchPostsFromRss(): Promise<LinkedInPost[]> {
  const rssUrl =
    process.env.LINKEDIN_RSS_URL?.trim() || DEFAULT_RSS_URL;
  if (!rssUrl) return [];

  const response = await fetch(rssUrl, {
    cache: "no-store",
    headers: {
      Accept: "application/rss+xml, application/xml, text/xml, */*",
      "User-Agent":
        "Mozilla/5.0 (compatible; JobLabsBot/1.0; +https://joblabs.us)",
    },
  });
  if (!response.ok) {
    throw new Error(`LinkedIn RSS error: ${response.status}`);
  }

  const xml = await response.text();
  const itemBlocks = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map(
    (match) => match[1],
  );

  const entryBlocks =
    itemBlocks.length > 0
      ? itemBlocks
      : [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/gi)].map(
          (match) => match[1],
        );

  const posts: LinkedInPost[] = [];

  for (const [index, block] of entryBlocks.entries()) {
    const rawDescription =
      block.match(/<description[^>]*>([\s\S]*?)<\/description>/i)?.[1] ??
      block.match(
        /<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i,
      )?.[1] ??
      "";
    const title = tagValue(block, "title");
    const description = stripHtml(rawDescription);
    const text = description || title;
    if (!text) continue;

    const link =
      tagValue(block, "link") ??
      attributeValue(block, "link", "href") ??
      COMPANY_PAGE_URL;
    const publishedAt = formatDate(
      tagValue(block, "pubDate") ??
        tagValue(block, "published") ??
        tagValue(block, "updated"),
    );
    const image =
      extractImageFromHtml(rawDescription) ??
      normalizeImageUrl(attributeValue(block, "enclosure", "url")) ??
      normalizeImageUrl(attributeValue(block, "media:content", "url")) ??
      normalizeImageUrl(attributeValue(block, "media:thumbnail", "url"));

    posts.push({
      id: tagValue(block, "guid") ?? `${link}-${index}`,
      text,
      url: link,
      publishedAt,
      image,
    });

    if (posts.length >= MAX_POSTS) break;
  }

  return posts;
}

export async function getLinkedInPosts(): Promise<LinkedInPostsResponse> {
  try {
    const apiPosts = await fetchPostsFromLinkedInApi();
    if (apiPosts.length > 0) {
      return {
        posts: withLinkedInFallbackImages(apiPosts),
        source: "linkedin-api",
      };
    }
  } catch (error) {
    console.error("Failed to fetch LinkedIn API posts:", error);
  }

  try {
    const rssPosts = await fetchPostsFromRss();
    if (rssPosts.length > 0) {
      return {
        posts: withLinkedInFallbackImages(rssPosts),
        source: "rss",
      };
    }
  } catch (error) {
    console.error("Failed to fetch LinkedIn RSS posts:", error);
  }

  return {
    posts: fallbackLinkedInPosts,
    source: "fallback",
  };
}
