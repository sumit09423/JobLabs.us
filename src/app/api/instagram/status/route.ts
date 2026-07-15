import { getInstagramPosts } from "@/lib/instagram";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const posts = await getInstagramPosts();
  return NextResponse.json({
    feedSource: posts.source,
    postCount: posts.posts.length,
    hasAccessToken: Boolean(process.env.INSTAGRAM_ACCESS_TOKEN?.trim()),
    hasUserId: Boolean(process.env.INSTAGRAM_USER_ID?.trim()),
    hasRssUrl: Boolean(process.env.INSTAGRAM_RSS_URL?.trim()),
    profileUrl: "https://www.instagram.com/job_labs.us/",
  });
}
