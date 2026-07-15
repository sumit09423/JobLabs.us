"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { fallbackLinkedInPosts } from "@/data/linkedin-posts";
import type { LinkedInPost, LinkedInPostsResponse } from "@/types/linkedin";

const REFRESH_MS = 60 * 1000;

function LinkedInIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export default function LinkedInFeed() {
  const [posts, setPosts] = useState<LinkedInPost[]>(fallbackLinkedInPosts);
  const [loading, setLoading] = useState(true);
  const [source, setSource] = useState<LinkedInPostsResponse["source"]>("fallback");

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        const response = await fetch("/api/linkedin-posts", {
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Failed to load LinkedIn posts");
        const data = (await response.json()) as LinkedInPostsResponse;
        if (cancelled) return;
        setPosts(data.posts);
        setSource(data.source);
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setPosts(fallbackLinkedInPosts);
          setSource("fallback");
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    loadPosts();
    const interval = window.setInterval(loadPosts, REFRESH_MS);
    return () => {
      cancelled = true;
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="w-full bg-[#F5F5F5] px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal direction="up">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#6b7280] uppercase">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#0A66C2] text-white">
                  <LinkedInIcon />
                </span>
                LinkedIn Updates
              </p>
              <h2 className="mt-3 text-[32px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[40px]">
                Latest from <span className="text-[#0A66C2]">JobLabs</span>
              </h2>
              <p className="mt-2 text-[14px] text-[#6b7280]">
                {source === "linkedin-api"
                  ? "Live from LinkedIn API — new posts appear automatically."
                  : source === "rss"
                    ? "Synced from LinkedIn via RSS."
                    : "Latest LinkedIn updates from JobLabs."}
              </p>
            </div>
            <Link
              href="https://www.linkedin.com/company/joblabs-us"
              target="_blank"
              rel="noreferrer"
              className="text-[14px] font-semibold text-[#0A66C2] transition-opacity hover:opacity-80"
            >
              View all on LinkedIn →
            </Link>
          </div>
        </Reveal>

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-[360px] animate-pulse rounded-[24px] bg-white/80"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {posts.map((post, index) => (
              <Reveal key={post.id} delay={Math.min(index, 5) * 80} direction="up">
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.05)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
                >
                  {post.image ? (
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#f3f4f6]">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={post.image.replace(/&amp;/g, "&")}
                        alt="LinkedIn post preview"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ) : (
                    <div className="flex aspect-[16/10] items-center justify-center bg-[#E8F1FF] px-6">
                      <span className="text-center text-[15px] font-semibold leading-snug text-[#081B4B]">
                        JobLabs on LinkedIn
                      </span>
                    </div>
                  )}

                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-center gap-2 text-[12px] text-[#6b7280]">
                      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#0A66C2] text-white">
                        <LinkedInIcon />
                      </span>
                      <span>JobLabs</span>
                      <span>·</span>
                      <span>{post.publishedAt}</span>
                    </div>
                    <p className="mt-4 line-clamp-4 flex-1 text-[15px] leading-[1.65] text-[#374151]">
                      {post.text}
                    </p>
                    <span className="mt-5 text-[13px] font-semibold text-[#0A66C2] group-hover:underline">
                      Read on LinkedIn →
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
