"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Status = {
  feedSource: string;
  postCount: number;
  hasAccessToken: boolean;
  hasUserId: boolean;
  hasRssUrl: boolean;
  profileUrl: string;
};

export default function InstagramAdminClient() {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    fetch("/api/instagram/status", { cache: "no-store" })
      .then((res) => res.json())
      .then(setStatus)
      .catch(() => setStatus(null));
  }, []);

  const apiReady = Boolean(status?.hasAccessToken && status?.hasUserId);

  return (
    <main className="mx-auto w-full max-w-[760px] flex-1 px-4 py-12 sm:px-6">
      <Link
        href="/"
        className="text-[13px] font-medium text-[#6b7280] hover:text-[#1F6BFF]"
      >
        ← Back to Home
      </Link>

      <h1 className="mt-6 text-[32px] font-bold tracking-[-0.03em] text-[#111827]">
        Instagram Auto Sync
      </h1>
      <p className="mt-3 text-[15px] leading-[1.7] text-[#6b7280]">
        RSS is unreliable for Instagram because Meta blocks automatic scraping.
        For true auto-updates whenever you post, use the official Instagram
        Graph API.
      </p>

      <section className="mt-8 rounded-[24px] border border-[#eee] bg-white p-6">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Why RSS is failing you
        </h2>
        <p className="mt-3 text-[14px] leading-[1.7] text-[#4b5563]">
          Tools like rss.app cannot reliably watch Instagram in real time. Often
          you must refresh or recreate the feed manually. That is a Meta/platform
          limitation, not a JobLabs bug.
        </p>
      </section>

      <section className="mt-6 rounded-[24px] border border-[#eee] bg-white p-6">
        <h2 className="text-[18px] font-bold text-[#111827]">
          Correct setup (automatic forever)
        </h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-[14px] leading-[1.7] text-[#4b5563]">
          <li>
            On Instagram, switch{" "}
            <a
              href="https://www.instagram.com/job_labs.us/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#E1306C]"
            >
              @job_labs.us
            </a>{" "}
            to a <strong>Professional</strong> account (Business or Creator).
          </li>
          <li>
            Connect it to a <strong>Facebook Page</strong> (Settings → Accounts
            Center / Professional dashboard → Facebook Page).
          </li>
          <li>
            Open{" "}
            <a
              href="https://developers.facebook.com/apps/"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-[#0A66C2]"
            >
              Meta for Developers
            </a>{" "}
            → create an app → add <strong>Instagram</strong> / Graph API product.
          </li>
          <li>
            Generate a long-lived Page token with access to the Instagram Business
            account, then find your Instagram{" "}
            <strong>Business Account ID</strong>.
          </li>
          <li>
            Put these in <code>.env.local</code> and restart{" "}
            <code>npm run dev</code>:
            <pre className="mt-2 overflow-x-auto rounded-xl bg-[#F5F5F5] p-3 text-[12px] text-[#374151]">
              {`INSTAGRAM_ACCESS_TOKEN=your_long_lived_token
INSTAGRAM_USER_ID=your_instagram_business_account_id`}
            </pre>
          </li>
        </ol>

        <div className="mt-6 rounded-2xl bg-[#FFF7ED] px-4 py-3 text-[13px] leading-[1.6] text-[#9A3412]">
          After this is set, new Instagram posts appear on the homepage
          automatically (site refreshes every minute). No need to recreate
          anything on rss.app.
        </div>
      </section>

      <section className="mt-6 rounded-[24px] border border-[#eee] bg-white p-6">
        <h2 className="text-[18px] font-bold text-[#111827]">Current status</h2>
        {!status ? (
          <p className="mt-3 text-[14px] text-[#6b7280]">Checking…</p>
        ) : (
          <ul className="mt-4 space-y-2 text-[14px] text-[#4b5563]">
            <li>
              Graph API token set:{" "}
              <strong>{status.hasAccessToken ? "Yes" : "No"}</strong>
            </li>
            <li>
              Instagram User ID set:{" "}
              <strong>{status.hasUserId ? "Yes" : "No"}</strong>
            </li>
            <li>
              API ready: <strong>{apiReady ? "Yes" : "No"}</strong>
            </li>
            <li>
              RSS URL set: <strong>{status.hasRssUrl ? "Yes" : "No"}</strong>
            </li>
            <li>
              Homepage feed source: <strong>{status.feedSource}</strong>
            </li>
            <li>
              Posts loaded: <strong>{status.postCount}</strong>
            </li>
          </ul>
        )}
      </section>
    </main>
  );
}
