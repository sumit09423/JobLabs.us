import { Suspense } from "react";
import InstagramAdminClient from "./InstagramAdminClient";

export const metadata = {
  title: "Instagram Auto Sync | JobLabs",
  description: "Connect Instagram Graph API for automatic homepage posts.",
};

export default function Page() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto w-full max-w-[760px] flex-1 px-4 py-12">
          <p className="text-[14px] text-[#6b7280]">Loading…</p>
        </main>
      }
    >
      <InstagramAdminClient />
    </Suspense>
  );
}
