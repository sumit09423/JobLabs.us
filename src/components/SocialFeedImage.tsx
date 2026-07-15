"use client";

import { useState } from "react";

type SocialFeedImageProps = {
  src?: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
};

export default function SocialFeedImage({
  src,
  fallbackSrc,
  alt,
  className = "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105",
}: SocialFeedImageProps) {
  const initial = (src || fallbackSrc).replace(/&amp;/g, "&");
  const [currentSrc, setCurrentSrc] = useState(initial);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      loading="lazy"
      referrerPolicy="no-referrer"
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
