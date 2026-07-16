"use client";

import Link from "next/link";

const people = [
  {
    name: "Arjun R.",
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    top: "10%",
    left: "8%",
    delay: "0s",
  },
  {
    name: "Meera S.",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    top: "16%",
    left: "38%",
    delay: "0.4s",
  },
  {
    name: "Karthik V.",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    top: "12%",
    left: "68%",
    delay: "0.8s",
  },
  {
    name: "Ananya K.",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    top: "34%",
    left: "18%",
    delay: "0.2s",
  },
  {
    name: "Suresh P.",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    top: "38%",
    left: "52%",
    delay: "0.6s",
  },
  {
    name: "Divya N.",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    top: "36%",
    left: "78%",
    delay: "1s",
  },
  {
    name: "Rahul M.",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    top: "58%",
    left: "10%",
    delay: "0.3s",
  },
  {
    name: "Lakshmi T.",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    top: "62%",
    left: "42%",
    delay: "0.7s",
  },
  {
    name: "Vishnu A.",
    src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
    top: "56%",
    left: "70%",
    delay: "1.1s",
  },
  {
    name: "Priya R.",
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face",
    top: "78%",
    left: "28%",
    delay: "0.5s",
  },
  {
    name: "Sanjay D.",
    src: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=100&h=100&fit=crop&crop=face",
    top: "80%",
    left: "58%",
    delay: "0.9s",
  },
  {
    name: "Kavya L.",
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop&crop=face",
    top: "74%",
    left: "82%",
    delay: "1.2s",
  },
];

export default function TrustBanner() {
  return (
    <section className="w-full bg-white px-4 pb-16 sm:px-6 sm:pb-20 lg:px-10">
      <style
        dangerouslySetInnerHTML={{
          __html: `
@keyframes jl-trust-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-14px); }
}
@keyframes jl-trust-pulse {
  0% { transform: scale(1); opacity: 0.7; }
  100% { transform: scale(1.85); opacity: 0; }
}
@keyframes jl-trust-map {
  0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  50% { transform: translate(-12px, 8px) scale(1.05); opacity: 0.45; }
}
.jl-trust-map { animation: jl-trust-map 7s ease-in-out infinite; }
.jl-trust-person {
  animation: jl-trust-float 3s ease-in-out infinite;
  will-change: transform;
}
.jl-trust-ring {
  position: absolute;
  inset: -6px;
  border-radius: 9999px;
  border: 2px solid rgba(255,255,255,0.9);
  animation: jl-trust-pulse 2.2s ease-out infinite;
}
`,
        }}
      />

      <div className="mx-auto flex max-w-[1100px] flex-col overflow-hidden rounded-[28px] bg-[#1F6BFF] lg:flex-row">
        <div className="flex flex-1 flex-col justify-center px-8 py-12 sm:px-10 sm:py-14 lg:px-12">
          <h2 className="max-w-[420px] text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[40px]">
            Over 340k people already trust in us
          </h2>
          <p className="mt-4 max-w-[380px] text-[15px] leading-[1.6] text-white/85">
            Employers and job seekers rely on JobLabs for placement,
            recruiting, verification, training, and payroll support.
          </p>
          <Link
            href="/contacts"
            className="mt-8 inline-flex h-12 w-fit items-center justify-center rounded-md bg-white px-6 text-[15px] font-semibold text-[#081B4B] transition-opacity hover:opacity-90"
          >
            Stay with us
          </Link>
        </div>

        <div className="relative min-h-[320px] flex-1 overflow-hidden px-4 pb-8 pt-6 sm:min-h-[380px] lg:min-h-[420px]">
          <svg
            viewBox="0 0 600 360"
            className="jl-trust-map absolute inset-0 h-full w-full"
            aria-hidden
          >
            <g fill="#ffffff">
              {Array.from({ length: 360 }).map((_, i) => {
                const col = i % 24;
                const row = Math.floor(i / 24);
                const x = 18 + col * 24 + (row % 2) * 12;
                const y = 16 + row * 22;
                const r = (i + row) % 7 === 0 ? 2.4 : 1.5;
                return <circle key={i} cx={x} cy={y} r={r} />;
              })}
            </g>
          </svg>

          {people.map((person) => (
            <div
              key={person.name}
              className="jl-trust-person absolute z-10 flex items-center gap-2"
              style={{
                top: person.top,
                left: person.left,
                animationDelay: person.delay,
              }}
            >
              <span className="relative inline-flex">
                <span
                  className="jl-trust-ring"
                  style={{ animationDelay: person.delay }}
                  aria-hidden
                />
                <img
                  src={person.src}
                  alt={person.name}
                  width={40}
                  height={40}
                  className="relative z-[1] h-9 w-9 rounded-full border-2 border-white object-cover shadow-md sm:h-10 sm:w-10"
                />
              </span>
              <span className="rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold whitespace-nowrap text-[#081B4B] shadow-sm">
                {person.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
