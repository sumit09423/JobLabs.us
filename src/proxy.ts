import { NextRequest, NextResponse } from "next/server";

const LOCAL_HOSTS = new Set(["localhost", "127.0.0.1", "[::1]"]);

const PROTECTED_PREFIXES = [
  "/admin",
  "/api/linkedin/connect",
  "/api/linkedin/callback",
  "/api/linkedin/status",
  "/api/instagram/status",
];

function isLocalhost(request: NextRequest) {
  const hostHeader = request.headers.get("host") || "";
  const hostname = hostHeader.split(":")[0]?.toLowerCase() || "";
  return LOCAL_HOSTS.has(hostname);
}

function isProtectedPath(pathname: string) {
  return PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (!isProtectedPath(pathname)) {
    return NextResponse.next();
  }

  if (isLocalhost(request)) {
    return NextResponse.next();
  }

  return new NextResponse("Not Found", { status: 404 });
}

export const config = {
  matcher: [
    "/admin/:path*",
    "/api/linkedin/connect",
    "/api/linkedin/callback",
    "/api/linkedin/status",
    "/api/instagram/status",
  ],
};
