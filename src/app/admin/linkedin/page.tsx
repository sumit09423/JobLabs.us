import { Suspense } from "react";
import LinkedInAdminPage from "./LinkedInAdminClient";

export const metadata = {
  title: "Connect LinkedIn | JobLabs",
  description: "Connect the JobLabs LinkedIn company page to sync latest posts.",
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
      <LinkedInAdminPage />
    </Suspense>
  );
}
