import type { LinkedInPost } from "@/types/linkedin";

export const LINKEDIN_FALLBACK_IMAGES = [
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
] as const;

export function linkedInFallbackImage(index: number) {
  return LINKEDIN_FALLBACK_IMAGES[index % LINKEDIN_FALLBACK_IMAGES.length];
}

export const fallbackLinkedInPosts: LinkedInPost[] = [
  {
    id: "fallback-1",
    text: "Your success is our mission. At JobLabs, we help professionals stand out with ATS-ready resumes, LinkedIn branding, and interview preparation.",
    url: "https://www.linkedin.com/company/joblabs-us",
    publishedAt: "Jan 12, 2026",
    image: LINKEDIN_FALLBACK_IMAGES[0],
  },
  {
    id: "fallback-2",
    text: "Hiring IT talent should not slow your business down. From contract staffing to permanent placement, JobLabs connects you with interview-ready professionals.",
    url: "https://www.linkedin.com/company/joblabs-us",
    publishedAt: "Jan 8, 2026",
    image: LINKEDIN_FALLBACK_IMAGES[1],
  },
  {
    id: "fallback-3",
    text: "Career moves feel clearer with the right partner. JobLabs supports candidates through verification, training, and placement until the offer is accepted.",
    url: "https://www.linkedin.com/company/joblabs-us",
    publishedAt: "Jan 3, 2026",
    image: LINKEDIN_FALLBACK_IMAGES[2],
  },
];

export function withLinkedInFallbackImages(posts: LinkedInPost[]): LinkedInPost[] {
  return posts.map((post, index) => ({
    ...post,
    image: post.image || linkedInFallbackImage(index),
  }));
}
