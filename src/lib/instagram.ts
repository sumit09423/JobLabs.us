import {
  fallbackInstagramPosts,
  INSTAGRAM_PROFILE_URL,
} from "@/data/instagram-posts";
import type {
  InstagramPost,
  InstagramPostsResponse,
} from "@/types/instagram";

const MAX_POSTS = 30;

function formatDate(timestamp?: number | string): string {
  if (!timestamp) return "Recently";
  const date =
    typeof timestamp === "number"
      ? new Date(timestamp * (timestamp < 1e12 ? 1000 : 1))
      : new Date(timestamp);
  if (Number.isNaN(date.getTime())) return "Recently";
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
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

function extractImageFromHtml(value: string): string | undefined {
  const decoded = decodeEntities(
    value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1"),
  );
  const match = decoded.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match?.[1];
}

async function fetchPostsFromInstagramApi(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN?.trim();
  const userId = process.env.INSTAGRAM_USER_ID?.trim();
  if (!token || !userId) return [];

  const fields =
    "id,caption,media_type,media_url,permalink,thumbnail_url,timestamp";
  const response = await fetch(
    `https://graph.facebook.com/v21.0/${userId}/media?fields=${fields}&limit=${MAX_POSTS}&access_token=${encodeURIComponent(token)}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error(`Instagram API error: ${response.status}`);
  }

  const data = (await response.json()) as {
    data?: Array<{
      id?: string;
      caption?: string;
      media_type?: string;
      media_url?: string;
      thumbnail_url?: string;
      permalink?: string;
      timestamp?: string;
    }>;
  };

  return (data.data ?? [])
    .map((item) => {
      const caption = item.caption?.trim();
      if (!caption && !item.media_url && !item.thumbnail_url) return null;
      return {
        id: item.id ?? crypto.randomUUID(),
        caption: caption || "View this post on Instagram",
        url: item.permalink || INSTAGRAM_PROFILE_URL,
        publishedAt: formatDate(item.timestamp),
        image: item.thumbnail_url || item.media_url,
      } satisfies InstagramPost;
    })
    .filter((post): post is InstagramPost => post !== null)
    .slice(0, MAX_POSTS);
}

async function fetchPostsFromRss(): Promise<InstagramPost[]> {
  const rssUrl = process.env.INSTAGRAM_RSS_URL?.trim();
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
    throw new Error(`Instagram RSS error: ${response.status}`);
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

  return entryBlocks
    .map((block, index) => {
      const rawDescription =
        block.match(/<description[^>]*>([\s\S]*?)<\/description>/i)?.[1] ??
        block.match(
          /<content:encoded[^>]*>([\s\S]*?)<\/content:encoded>/i,
        )?.[1] ??
        "";
      const title = tagValue(block, "title");
      const caption = stripHtml(rawDescription) || title;
      if (!caption) return null;

      const link =
        tagValue(block, "link") ??
        attributeValue(block, "link", "href") ??
        INSTAGRAM_PROFILE_URL;

      return {
        id: tagValue(block, "guid") ?? `${link}-${index}`,
        caption,
        url: link,
        publishedAt: formatDate(
          tagValue(block, "pubDate") ??
            tagValue(block, "published") ??
            tagValue(block, "updated"),
        ),
        image:
          attributeValue(block, "enclosure", "url") ??
          attributeValue(block, "media:content", "url") ??
          attributeValue(block, "media:thumbnail", "url") ??
          extractImageFromHtml(rawDescription),
      } satisfies InstagramPost;
    })
    .filter((post): post is InstagramPost => post !== null)
    .slice(0, MAX_POSTS);
}

export async function getInstagramPosts(): Promise<InstagramPostsResponse> {
  try {
    const apiPosts = await fetchPostsFromInstagramApi();
    if (apiPosts.length > 0) {
      return { posts: apiPosts, source: "instagram-api" };
    }
  } catch (error) {
    console.error("Failed to fetch Instagram API posts:", error);
  }

  try {
    const rssPosts = await fetchPostsFromRss();
    if (rssPosts.length > 0) {
      return { posts: rssPosts, source: "rss" };
    }
  } catch (error) {
    console.error("Failed to fetch Instagram RSS posts:", error);
  }

  return {
    posts: fallbackInstagramPosts,
    source: "fallback",
  };
}
