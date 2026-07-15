import { NextResponse } from "next/server";
import { getLinkedInAuthUrl, saveOAuthState } from "@/lib/linkedin-auth";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const state = crypto.randomUUID();
    await saveOAuthState(state);
    const url = getLinkedInAuthUrl(state);
    const response = NextResponse.redirect(url);
    response.cookies.set("linkedin_oauth_state", state, {
      httpOnly: true,
      sameSite: "lax",
      secure: false,
      path: "/",
      maxAge: 60 * 30,
    });
    return response;
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "LinkedIn connect failed";
    return NextResponse.redirect(
      new URL(
        `/admin/linkedin?error=${encodeURIComponent(message)}`,
        process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
      ),
    );
  }
}
