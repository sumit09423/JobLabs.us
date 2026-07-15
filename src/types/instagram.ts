export type InstagramPost = {
  id: string;
  caption: string;
  url: string;
  publishedAt: string;
  image?: string;
};

export type InstagramPostsResponse = {
  posts: InstagramPost[];
  source: "instagram-api" | "rss" | "fallback";
};
