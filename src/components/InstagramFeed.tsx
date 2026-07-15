"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import {
  fallbackInstagramPosts,
  INSTAGRAM_PROFILE_URL,
} from "@/data/instagram-posts";
import type {
  InstagramPost,
  InstagramPostsResponse,
} from "@/types/instagram";

const REFRESH_MS = 60 * 1000;

function InstagramIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>(fallbackInstagramPosts);
  const [loading, setLoading] = useState(true);
  const [source, setSource] =
    useState<InstagramPostsResponse["source"]>("fallback");

  useEffect(() => {
    let cancelled = false;

    async function loadPosts() {
      try {
        const response = await fetch("/api/instagram-posts", {
          cache: "no-store",
        });
        if (!response.ok) throw new Error("Failed to load Instagram posts");
        const data = (await response.json()) as InstagramPostsResponse;
        if (cancelled) return;
        setPosts(data.posts);
        setSource(data.source);
      } catch (error) {
        console.error(error);
        if (!cancelled) {
          setPosts(fallbackInstagramPosts);
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
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal direction="up">
          <div className="mb-10 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.14em] text-[#6b7280] uppercase">
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-md text-white"
                  style={{
                    background:
                      "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                  }}
                >
                  <InstagramIcon />
                </span>
                Instagram
              </p>
              <h2 className="mt-3 text-[32px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[40px]">
                Latest on{" "}
                <span className="bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] bg-clip-text text-transparent">
                  Instagram
                </span>
              </h2>
              <p className="mt-2 text-[14px] text-[#6b7280]">
                {source === "instagram-api"
                  ? "Live from Instagram Graph API — new posts appear automatically."
                  : source === "rss"
                    ? "Synced from Instagram via RSS."
                    : "Latest Instagram updates from @job_labs.us."}
              </p>
            </div>
            <Link
              href={INSTAGRAM_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="text-[14px] font-semibold text-[#E1306C] transition-opacity hover:opacity-80"
            >
              Follow @job_labs.us →
            </Link>
          </div>
        </Reveal>

        {loading ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square animate-pulse rounded-[24px] bg-[#f3f4f6]"
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {posts.map((post, index) => (
              <Reveal
                key={post.id}
                delay={Math.min(index, 5) * 80}
                direction="up"
              >
                <a
                  href={post.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-[#eee] bg-white shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)]"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#f3f4f6]">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt="Instagram post"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        unoptimized={
                          !post.image.includes("images.unsplash.com")
                        }
                      />
                    ) : (
                      <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#f09433]/20 via-[#dc2743]/15 to-[#bc1888]/20 px-6">
                        <span className="text-center text-[15px] font-semibold text-[#111827]">
                          @job_labs.us
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[12px] text-[#9ca3af]">
                      {post.publishedAt}
                    </p>
                    <p className="mt-2 line-clamp-3 flex-1 text-[14px] leading-[1.6] text-[#374151]">
                      {post.caption}
                    </p>
                    <span className="mt-4 text-[13px] font-semibold text-[#E1306C] group-hover:underline">
                      View on Instagram →
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
