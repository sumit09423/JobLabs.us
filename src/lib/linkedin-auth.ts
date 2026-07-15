import { promises as fs } from "fs";
import path from "path";

export type LinkedInTokenStore = {
  accessToken: string;
  refreshToken?: string;
  expiresAt?: number;
  scope?: string;
  organizationId?: string;
  updatedAt: string;
};

const TOKEN_FILE = path.join(process.cwd(), ".linkedin-token.json");
const STATE_FILE = path.join(process.cwd(), ".linkedin-oauth-state.json");

export function getLinkedInRedirectUri() {
  const base =
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    "http://localhost:3000";
  return `${base}/api/linkedin/callback`;
}

export function getConfiguredScopes() {
  return (process.env.LINKEDIN_SCOPES?.trim() || "openid profile")
    .split(/[\s,]+/)
    .filter(Boolean)
    .join(" ");
}

export function getLinkedInAuthUrl(state: string) {
  const clientId = process.env.LINKEDIN_CLIENT_ID?.trim();
  if (!clientId) {
    throw new Error("Missing LINKEDIN_CLIENT_ID");
  }

  const params = new URLSearchParams({
    response_type: "code",
    client_id: clientId,
    redirect_uri: getLinkedInRedirectUri(),
    state,
    scope: getConfiguredScopes(),
  });

  return `https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`;
}

export async function saveOAuthState(state: string) {
  await fs.writeFile(
    STATE_FILE,
    JSON.stringify({ state, createdAt: Date.now() }),
    "utf8",
  );
}

export async function consumeOAuthState(state: string | null): Promise<boolean> {
  if (!state) return false;
  try {
    const raw = await fs.readFile(STATE_FILE, "utf8");
    const parsed = JSON.parse(raw) as { state?: string; createdAt?: number };
    await fs.unlink(STATE_FILE).catch(() => undefined);
    if (!parsed.state || parsed.state !== state) return false;
    // Expire after 30 minutes
    if (parsed.createdAt && Date.now() - parsed.createdAt > 30 * 60 * 1000) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

export async function readLinkedInToken(): Promise<LinkedInTokenStore | null> {
  try {
    const raw = await fs.readFile(TOKEN_FILE, "utf8");
    return JSON.parse(raw) as LinkedInTokenStore;
  } catch {
    return null;
  }
}

export async function writeLinkedInToken(token: LinkedInTokenStore) {
  await fs.writeFile(TOKEN_FILE, JSON.stringify(token, null, 2), "utf8");
}

export async function exchangeCodeForToken(code: string) {
  const clientId = process.env.LINKEDIN_CLIENT_ID?.trim();
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET?.trim();
  if (!clientId || !clientSecret) {
    throw new Error("Missing LINKEDIN_CLIENT_ID or LINKEDIN_CLIENT_SECRET");
  }

  const body = new URLSearchParams({
    grant_type: "authorization_code",
    code,
    redirect_uri: getLinkedInRedirectUri(),
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Token exchange failed: ${response.status} ${errorText}`);
  }

  const data = (await response.json()) as {
    access_token: string;
    expires_in?: number;
    refresh_token?: string;
    scope?: string;
  };

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token,
    expiresAt: data.expires_in
      ? Date.now() + data.expires_in * 1000
      : undefined,
    scope: data.scope,
    updatedAt: new Date().toISOString(),
  } satisfies LinkedInTokenStore;
}

export async function refreshLinkedInToken(refreshToken: string) {
  const clientId = process.env.LINKEDIN_CLIENT_ID?.trim();
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET?.trim();
  if (!clientId || !clientSecret) {
    throw new Error("Missing LINKEDIN_CLIENT_ID or LINKEDIN_CLIENT_SECRET");
  }

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
  });

  const response = await fetch("https://www.linkedin.com/oauth/v2/accessToken", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
    cache: "no-store",
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Token refresh failed: ${response.status} ${errorText}`);
  }

  const data = (await response.json()) as {
    access_token: string;
    expires_in?: number;
    refresh_token?: string;
    scope?: string;
  };

  return {
    accessToken: data.access_token,
    refreshToken: data.refresh_token || refreshToken,
    expiresAt: data.expires_in
      ? Date.now() + data.expires_in * 1000
      : undefined,
    scope: data.scope,
    updatedAt: new Date().toISOString(),
  } satisfies LinkedInTokenStore;
}

export async function getValidAccessToken(): Promise<string | null> {
  const envToken = process.env.LINKEDIN_ACCESS_TOKEN?.trim();
  if (envToken) return envToken;

  const stored = await readLinkedInToken();
  if (!stored?.accessToken) return null;

  const needsRefresh =
    stored.expiresAt && stored.expiresAt < Date.now() + 60_000;

  if (needsRefresh && stored.refreshToken) {
    try {
      const refreshed = await refreshLinkedInToken(stored.refreshToken);
      const next = {
        ...stored,
        ...refreshed,
        organizationId: stored.organizationId,
      };
      await writeLinkedInToken(next);
      return next.accessToken;
    } catch (error) {
      console.error("LinkedIn token refresh failed:", error);
    }
  }

  return stored.accessToken;
}
