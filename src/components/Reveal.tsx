"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade" | "scale";
  once?: boolean;
  as?: "div" | "section" | "article" | "header" | "span";
};

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const style = {
    transitionDelay: `${delay}ms`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref as never}
      style={style}
      className={`jl-reveal jl-reveal-${direction} ${visible ? "jl-reveal-visible" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
