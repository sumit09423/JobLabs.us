import { NextRequest, NextResponse } from "next/server";
import {
  consumeOAuthState,
  exchangeCodeForToken,
  writeLinkedInToken,
} from "@/lib/linkedin-auth";

export const dynamic = "force-dynamic";

const LINKEDIN_API_VERSION = "202506";

async function resolveOrganizationId(accessToken: string) {
  const configured = process.env.LINKEDIN_ORGANIZATION_ID?.trim();
  if (configured) return configured;

  const vanity = process.env.LINKEDIN_VANITY_NAME?.trim() || "joblabs-us";

  try {
    const vanityRes = await fetch(
      `https://api.linkedin.com/rest/organizations?q=vanityName&vanityName=${encodeURIComponent(vanity)}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Linkedin-Version": LINKEDIN_API_VERSION,
          "X-Restli-Protocol-Version": "2.0.0",
        },
        cache: "no-store",
      },
    );
    if (vanityRes.ok) {
      const data = await vanityRes.json();
      const id = data.elements?.[0]?.id;
      if (id) return String(id);
    }
  } catch (error) {
    console.error("Vanity org lookup failed:", error);
  }

  try {
    const aclRes = await fetch(
      "https://api.linkedin.com/rest/organizationAcls?q=roleAssignee&role=ADMINISTRATOR&state=APPROVED&count=10",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Linkedin-Version": LINKEDIN_API_VERSION,
          "X-Restli-Protocol-Version": "2.0.0",
        },
        cache: "no-store",
      },
    );
    if (aclRes.ok) {
      const data = await aclRes.json();
      const orgUrn = data.elements?.[0]?.organization as string | undefined;
      const id = orgUrn?.split(":").pop();
      if (id) return id;
    }
  } catch (error) {
    console.error("Organization ACL lookup failed:", error);
  }

  return undefined;
}

export async function GET(request: NextRequest) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");
  const error = request.nextUrl.searchParams.get("error");
  const errorDescription = request.nextUrl.searchParams.get("error_description");
  const cookieState = request.cookies.get("linkedin_oauth_state")?.value;

  const redirectWithError = (message: string) => {
    const response = NextResponse.redirect(
      new URL(`/admin/linkedin?error=${encodeURIComponent(message)}`, siteUrl),
    );
    response.cookies.delete("linkedin_oauth_state");
    return response;
  };

  if (error) {
    const description = (errorDescription || "").toLowerCase();
    const friendly =
      error === "invalid_scope_error" || description.includes("scope")
        ? "LinkedIn rejected the OAuth scopes. Enable “Sign In with LinkedIn using OpenID Connect” on Products (for openid/profile). Company posts also need Community Management API. Then open /admin/linkedin (clear the error from the URL) and click Connect again."
        : errorDescription || error;
    await consumeOAuthState(state);
    return redirectWithError(friendly);
  }

  if (!code) {
    return redirectWithError(
      "LinkedIn did not return an authorization code. Open /admin/linkedin and click Connect LinkedIn again.",
    );
  }

  const fileStateValid = await consumeOAuthState(state);
  const cookieStateValid = Boolean(
    state && cookieState && state === cookieState,
  );

  if (!fileStateValid && !cookieStateValid) {
    return redirectWithError(
      "OAuth session expired or was interrupted. Open http://localhost:3000/admin/linkedin and click Connect LinkedIn again.",
    );
  }

  try {
    const token = await exchangeCodeForToken(code);
    const organizationId = await resolveOrganizationId(token.accessToken);
    await writeLinkedInToken({
      ...token,
      organizationId,
    });

    const response = NextResponse.redirect(
      new URL("/admin/linkedin?connected=1", siteUrl),
    );
    response.cookies.delete("linkedin_oauth_state");
    return response;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Failed to connect LinkedIn";
    return redirectWithError(message);
  }
}
