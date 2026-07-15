"use client";

import { useRef, useState } from "react";

const stories = [
  {
    name: "Arjun Reddy",
    role: "Software Engineer",
    company: "Microsoft",
    logo: "/logos/microsoft.svg",
    time: "1 week ago",
    rating: 5,
    quote:
      "JobLabs guided me from resume prep to final offers. I landed a full-time role at Microsoft within weeks and felt supported at every step.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Sravani Devi",
    role: "Data Analyst",
    company: "Amazon",
    logo: "/logos/amazon.svg",
    time: "2 weeks ago",
    rating: 5,
    quote:
      "Their talent acquisition team understood my strengths and matched me with the right openings. Today I am growing as a Data Analyst at Amazon.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Venkatesh Rao",
    role: "Cloud Engineer",
    company: "Google",
    logo: "/logos/google.svg",
    time: "3 weeks ago",
    rating: 5,
    quote:
      "From IT training to interview coaching, JobLabs prepared me for real tech interviews. I am now working as a Cloud Engineer at Google.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Lakshmi Priya",
    role: "HR Specialist",
    company: "IBM",
    logo: "/logos/ibm.svg",
    time: "1 month ago",
    rating: 5,
    quote:
      "I wanted a meaningful career move, and JobLabs delivered. Background checks were smooth and placement support was completely transparent.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Sai Teja",
    role: "Full Stack Developer",
    company: "Meta",
    logo: "/logos/meta.svg",
    time: "1 month ago",
    rating: 5,
    quote:
      "The team treated my job search like a partnership. With their coaching and staffing support, I secured a Full Stack role at Meta.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=face",
  },
  {
    name: "Anusha Kalluri",
    role: "Business Analyst",
    company: "Accenture",
    logo: "/logos/accenture.svg",
    time: "2 months ago",
    rating: 5,
    quote:
      "JobLabs connected me with companies that truly matched my skills. I am proud to start my Business Analyst journey at Accenture.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="mt-4 flex gap-0.5 text-[#1F6BFF]" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-current" aria-hidden>
          <path d="M10 1.5l2.5 5.1 5.6.8-4 3.9.9 5.5L10 14.5 5 16.8l.9-5.5-4-3.9 5.6-.8L10 1.5z" />
        </svg>
      ))}
    </div>
  );
}

export default function SuccessStories() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollByCard = (direction: -1 | 1) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const card = scroller.querySelector<HTMLElement>("[data-story-card]");
    const amount = (card?.offsetWidth ?? 320) + 20;
    scroller.scrollBy({ left: direction * amount, behavior: "smooth" });
    setIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return 0;
      if (next > stories.length - 1) return stories.length - 1;
      return next;
    });
  };

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="text-center">
          <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[40px]">
            Success stories, careers with confidence
          </h2>
          <p className="mt-3 text-[15px] text-[#6b7280]">
            <span className="font-semibold text-[#111827]">4.8/5</span>
            <span className="mx-2 text-[#1F6BFF]">★</span>
            Based on candidate placements at top companies
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[64px] leading-none text-[#d1d5db]">“</p>
              <p className="mt-2 text-[22px] font-bold leading-snug tracking-[-0.02em] text-[#111827]">
                What our candidates are saying
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Previous story"
                onClick={() => scrollByCard(-1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] text-[#111827] transition-colors hover:bg-[#f9fafb]"
              >
                ←
              </button>
              <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-[#e5e7eb]">
                <div
                  className="h-full rounded-full bg-[#1F6BFF] transition-all duration-300"
                  style={{
                    width: `${((index + 1) / stories.length) * 100}%`,
                  }}
                />
              </div>
              <button
                type="button"
                aria-label="Next story"
                onClick={() => scrollByCard(1)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] text-[#111827] transition-colors hover:bg-[#f9fafb]"
              >
                →
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {stories.map((story) => (
              <article
                key={story.name}
                data-story-card
                className="w-[300px] shrink-0 snap-start sm:w-[320px]"
              >
                <div className="relative rounded-2xl border border-[#eee] bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <p className="text-[14px] leading-[1.65] text-[#374151]">
                    {story.quote}
                  </p>
                  <Stars count={story.rating} />
                  <div className="mt-4 flex items-center gap-2 border-t border-[#f3f4f6] pt-4">
                    <img
                      src={story.logo}
                      alt={story.company}
                      width={20}
                      height={20}
                      className="h-5 w-5 brightness-0 opacity-60"
                    />
                    <span className="text-[12px] font-semibold text-[#6b7280]">
                      Placed at {story.company}
                    </span>
                  </div>
                  <span className="absolute -bottom-2 left-8 h-4 w-4 rotate-45 border-b border-r border-[#eee] bg-white" />
                </div>

                <div className="mt-5 flex items-center gap-3 pl-1">
                  <img
                    src={story.avatar}
                    alt={story.name}
                    width={44}
                    height={44}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-[14px] font-bold text-[#111827]">
                      {story.name}
                    </p>
                    <p className="text-[12px] text-[#6b7280]">
                      {story.role} · {story.time}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
