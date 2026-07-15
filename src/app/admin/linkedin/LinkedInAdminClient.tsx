"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type Status = {
  connected: boolean;
  hasEnvToken: boolean;
  hasOAuthToken: boolean;
  organizationId: string | null;
  expiresAt: number | null;
  scope: string | null;
  configuredScopes?: string;
  feedSource: string;
  postCount: number;
  clientIdConfigured: boolean;
  clientSecretConfigured: boolean;
};

export default function LinkedInAdminClient() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<Status | null>(null);
  const connected = searchParams.get("connected") === "1";
  const error = searchParams.get("error");

  useEffect(() => {
    fetch("/api/linkedin/status", { cache: "no-store" })
      .then((res) => res.json())
      .then(setStatus)
      .catch(() => setStatus(null));
  }, [connected]);

  return (
    <main className="mx-auto w-full max-w-[760px] flex-1 px-4 py-12 sm:px-6">
      <Link
        href="/"
        className="text-[13px] font-medium text-[#6b7280] hover:text-[#1F6BFF]"
      >
        ← Back to Home
      </Link>

      <h1 className="mt-6 text-[32px] font-bold tracking-[-0.03em] text-[#111827]">
        Connect LinkedIn
      </h1>
      <p className="mt-3 text-[15px] leading-[1.7] text-[#6b7280]">
        The homepage LinkedIn section already works with RSS. Official API sync
        needs Community Management approval. OpenID Connect only confirms app
        login.
      </p>

      {connected && (
        <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-[14px] text-emerald-800">
          LinkedIn OAuth connected. Homepage still uses RSS until Community
          Management API is approved.
        </div>
      )}

      {error && (
        <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
          <p>{error}</p>
          <Link
            href="/admin/linkedin"
            className="mt-3 inline-flex text-[13px] font-semibold underline"
          >
            Clear error and try again
          </Link>
        </div>
      )}

      <section className="mt-8 rounded-[24px] border border-[#eee] bg-white p-6">
        <h2 className="text-[18px] font-bold text-[#111827]">
          For the live website (joblabs.us)
        </h2>
        <p className="mt-3 text-[14px] leading-[1.7] text-[#4b5563]">
          LinkedIn posts can already show on your live domain through RSS. Add
          this env var on hosting (Vercel / your server):
        </p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-[#F5F5F5] p-3 text-[12px] text-[#374151]">
          {`LINKEDIN_RSS_URL=https://rss.app/feeds/BIFCrF3ZJJi7Q97Y.xml`}
        </pre>
        <p className="mt-3 text-[14px] leading-[1.7] text-[#4b5563]">
          That alone is enough for the homepage LinkedIn section on production.
          Community Management approval is only needed if you want official API
          sync with less RSS delay.
        </p>

        <h2 className="mt-8 text-[18px] font-bold text-[#111827]">
          Optional: OAuth connect
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-[14px] leading-[1.7] text-[#4b5563]">
          <li>
            Enable <strong>Sign In with LinkedIn using OpenID Connect</strong> on
            Products.
          </li>
          <li>
            Open this clean page (no error in URL):{" "}
            <Link href="/admin/linkedin" className="font-semibold text-[#0A66C2]">
              /admin/linkedin
            </Link>
          </li>
          <li>Click Connect LinkedIn below.</li>
          <li>
            Later, after Community Management is approved, set:
            <pre className="mt-2 overflow-x-auto rounded-xl bg-[#F5F5F5] p-3 text-[12px] text-[#374151]">
              {`LINKEDIN_SCOPES=openid profile r_organization_social`}
            </pre>
          </li>
        </ol>

        <a
          href="/api/linkedin/connect"
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#0A66C2] px-6 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          Connect LinkedIn
        </a>
      </section>

      <section className="mt-6 rounded-[24px] border border-[#eee] bg-white p-6">
        <h2 className="text-[18px] font-bold text-[#111827]">Current status</h2>
        {!status ? (
          <p className="mt-3 text-[14px] text-[#6b7280]">Checking…</p>
        ) : (
          <ul className="mt-4 space-y-2 text-[14px] text-[#4b5563]">
            <li>
              Configured scopes:{" "}
              <strong>{status.configuredScopes || "openid profile"}</strong>
            </li>
            <li>
              LinkedIn connected:{" "}
              <strong>{status.connected ? "Yes" : "No"}</strong>
            </li>
            <li>
              Homepage feed source: <strong>{status.feedSource}</strong>
            </li>
            <li>
              Posts currently loaded: <strong>{status.postCount}</strong>
            </li>
          </ul>
        )}
      </section>
    </main>
  );
}
