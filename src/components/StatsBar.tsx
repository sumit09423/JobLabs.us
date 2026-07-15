"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  detail?: string;
};

const stats: Stat[] = [
  { value: 25, suffix: "K+", label: "Successful Placements" },
  { value: 500, suffix: "+", label: "Hiring Partners" },
  { value: 15, suffix: "+", label: "Years Experience" },
  {
    value: 120,
    suffix: "+",
    detail: "across US markets",
    label: "Cities Covered",
  },
  { value: 24, suffix: "/7", label: "Candidate Support" },
];

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(target * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return count;
}

function StatItem({
  stat,
  active,
  showDivider,
}: {
  stat: Stat;
  active: boolean;
  showDivider: boolean;
}) {
  const count = useCountUp(stat.value, active);

  return (
    <div
      className={`flex flex-1 flex-col items-center justify-center px-3 py-6 text-center sm:px-4 ${
        showDivider ? "border-b border-[#e5e7eb] sm:border-b-0 sm:border-r" : ""
      }`}
    >
      <p className="flex items-baseline justify-center gap-1.5 text-[28px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[34px] md:text-[40px]">
        <span>
          {stat.prefix}
          {count}
          {stat.suffix}
        </span>
        {stat.detail ? (
          <span className="max-w-[72px] text-left text-[10px] font-semibold leading-tight text-[#111827] sm:text-[11px]">
            {stat.detail}
          </span>
        ) : null}
      </p>
      <p className="mt-2 text-[12px] font-medium text-[#6b7280] sm:text-[13px]">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-10"
    >
      <div className="mx-auto flex max-w-[1100px] flex-col sm:flex-row">
        {stats.map((stat, index) => (
          <StatItem
            key={stat.label}
            stat={stat}
            active={active}
            showDivider={index < stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
