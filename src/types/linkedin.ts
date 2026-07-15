export type LinkedInPost = {
  id: string;
  text: string;
  url: string;
  publishedAt: string;
  image?: string;
};

export type LinkedInPostsResponse = {
  posts: LinkedInPost[];
  source: "linkedin-api" | "rss" | "fallback";
};
