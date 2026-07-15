import type { InstagramPost } from "@/types/instagram";

export const INSTAGRAM_PROFILE_URL = "https://www.instagram.com/job_labs.us/";

export const INSTAGRAM_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1611162618071-b39a2ec15501?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
] as const;

export function instagramFallbackImage(index: number) {
  return INSTAGRAM_FALLBACK_IMAGES[index % INSTAGRAM_FALLBACK_IMAGES.length];
}

export const fallbackInstagramPosts: InstagramPost[] = [
  {
    id: "ig-fallback-1",
    caption:
      "Follow JobLabs on Instagram for career tips, hiring updates, and placement success stories.",
    url: INSTAGRAM_PROFILE_URL,
    publishedAt: "Recently",
    image: INSTAGRAM_FALLBACK_IMAGES[0],
  },
  {
    id: "ig-fallback-2",
    caption:
      "New openings, resume tips, and interview guidance — straight from the JobLabs team.",
    url: INSTAGRAM_PROFILE_URL,
    publishedAt: "Recently",
    image: INSTAGRAM_FALLBACK_IMAGES[1],
  },
  {
    id: "ig-fallback-3",
    caption:
      "We help professionals get noticed and hired. Follow @job_labs.us for daily career support.",
    url: INSTAGRAM_PROFILE_URL,
    publishedAt: "Recently",
    image: INSTAGRAM_FALLBACK_IMAGES[2],
  },
];

export function withInstagramFallbackImages(
  posts: InstagramPost[],
): InstagramPost[] {
  return posts.map((post, index) => ({
    ...post,
    image: post.image || instagramFallbackImage(index),
  }));
}
