"use client";

import Image from "next/image";
import { useRef } from "react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "JobLabs filled our open engineering roles faster than any partner we have used. The candidates were interview-ready from day one.",
    name: "Emma Torres",
    title: "Hiring Manager, SaaS",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their placement support felt personal. From resume polish to final offers, every step was clear and practical.",
    name: "Daniel Park",
    title: "Software Engineer",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "We needed flexible staffing without lowering quality. JobLabs delivered reliable talent and kept communication tight.",
    name: "Sofia Rahman",
    title: "People Ops Lead",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Background verification and IT readiness made onboarding much smoother for our team. Highly recommend.",
    name: "Marcus Chen",
    title: "Director of Engineering",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "JobLabs helped me switch careers with confidence. Training plus interview coaching made a real difference.",
    name: "Ananya Iyer",
    title: "Cloud Analyst",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  },
];

export default function ServicesTestimonials() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: -1 | 1) {
    const node = scrollerRef.current;
    if (!node) return;
    const amount = Math.min(340, node.clientWidth * 0.85);
    node.scrollBy({ left: direction * amount, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-6 sm:px-6 sm:pb-20 lg:px-10">
      <Reveal direction="up">
        <div className="text-center">
          <span className="inline-flex rounded-full bg-[#ececec] px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#6b7280] uppercase">
            Testimonials
          </span>
          <h2 className="mt-5 text-[32px] font-bold tracking-[-0.035em] text-[#111827] sm:text-[40px]">
            What our clients say
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-[15px] leading-[1.65] text-[#6b7280]">
            Hear from hiring leaders and professionals who trust JobLabs for
            placement, staffing, and career moves.
          </p>
        </div>
      </Reveal>

      <div
        ref={scrollerRef}
        className="mt-10 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((item, index) => (
          <Reveal
            key={item.name}
            delay={index * 60}
            direction="up"
            className="w-[280px] shrink-0 snap-start sm:w-[300px]"
          >
            <article className="flex h-full min-h-[280px] flex-col justify-between rounded-[28px] bg-[#F0F0F0] p-6 sm:p-7">
              <p className="text-[15px] leading-[1.7] text-[#374151]">
                “{item.quote}”
              </p>
              <div className="mt-8 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] font-bold text-[#111827]">
                    {item.name}
                  </p>
                  <p className="text-[12px] text-[#6b7280]">{item.title}</p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-3">
        <button
          type="button"
          aria-label="Previous testimonials"
          onClick={() => scrollByCard(-1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            aria-hidden
          >
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Next testimonials"
          onClick={() => scrollByCard(1)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#111827] transition-colors hover:bg-[#111827] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
            aria-hidden
          >
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </section>
  );
}
