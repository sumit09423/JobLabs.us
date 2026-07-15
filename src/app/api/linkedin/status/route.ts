import {
  getConfiguredScopes,
  getValidAccessToken,
  readLinkedInToken,
} from "@/lib/linkedin-auth";
import { getLinkedInPosts } from "@/lib/linkedin";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const token = await readLinkedInToken();
  const accessToken = await getValidAccessToken();
  const posts = await getLinkedInPosts();

  return NextResponse.json({
    connected: Boolean(accessToken),
    hasEnvToken: Boolean(process.env.LINKEDIN_ACCESS_TOKEN?.trim()),
    hasOAuthToken: Boolean(token?.accessToken),
    organizationId:
      token?.organizationId || process.env.LINKEDIN_ORGANIZATION_ID || null,
    expiresAt: token?.expiresAt || null,
    scope: token?.scope || null,
    configuredScopes: getConfiguredScopes(),
    feedSource: posts.source,
    postCount: posts.posts.length,
    clientIdConfigured: Boolean(process.env.LINKEDIN_CLIENT_ID?.trim()),
    clientSecretConfigured: Boolean(process.env.LINKEDIN_CLIENT_SECRET?.trim()),
  });
}
