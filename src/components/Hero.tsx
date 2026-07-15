import Image from "next/image";

const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face",
];

const sizes = [
  "h-11 w-11 sm:h-12 sm:w-12 md:h-14 md:w-14",
  "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16",
  "h-10 w-10 sm:h-12 sm:w-12 md:h-[52px] md:w-[52px]",
  "h-[52px] w-[52px] sm:h-[58px] sm:w-[58px] md:h-16 md:w-16",
  "h-11 w-11 sm:h-[50px] sm:w-[50px] md:h-14 md:w-14",
];

const offsets = ["pt-1", "pt-2", "pt-0", "pt-3", "pt-0", "pt-2"];

function AvatarTrack({
  items,
  ariaHidden = false,
}: {
  items: string[];
  ariaHidden?: boolean;
}) {
  return (
    <div
      className="flex shrink-0 items-end gap-3 pr-3 sm:gap-4 sm:pr-4"
      aria-hidden={ariaHidden || undefined}
    >
      {items.map((src, index) => (
        <div
          key={`${src}-${index}`}
          className={`shrink-0 ${offsets[index % offsets.length]}`}
        >
          <div
            className={`relative overflow-hidden rounded-full border-[3px] border-white/90 ${sizes[index % sizes.length]}`}
          >
            <Image
              src={src}
              alt={ariaHidden ? "" : "Job seeker"}
              fill
              sizes="96px"
              className="object-cover"
              priority={!ariaHidden && index < 4}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function AvatarMarquee({
  items,
  duration,
  reverse = false,
}: {
  items: string[];
  duration: string;
  reverse?: boolean;
}) {
  return (
    <div className="overflow-hidden">
      <div
        className={`hero-marquee flex w-max items-end ${reverse ? "hero-marquee-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        <AvatarTrack items={items} />
        <AvatarTrack items={items} ariaHidden />
      </div>
    </div>
  );
}

export default function Hero() {
  const rowOne = avatars.slice(0, 10);
  const rowTwo = avatars.slice(8);

  return (
    <section className="w-full bg-white px-4 pb-14 pt-2 sm:px-6 sm:pb-16 lg:px-10">
      <div className="relative mx-auto max-w-[1200px]">
        <div
          className="relative overflow-hidden rounded-[28px] px-0 pb-16 pt-8 text-center sm:rounded-[36px] sm:pb-20 sm:pt-10"
          style={{
            background:
              "linear-gradient(135deg, #6f4f96 0%, #7a4ca8 18%, #9b4f8c 42%, #d46658 68%, #ef8a4a 100%)",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-soft-light"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
              backgroundSize: "180px 180px",
            }}
            aria-hidden
          />

          <div
            className="jl-page-enter relative z-10 mx-auto max-w-[640px] px-5 sm:px-10"
            style={{ animationDelay: "120ms" }}
          >
            <h1 className="text-[28px] font-bold leading-[1.1] tracking-[-0.03em] text-white sm:text-[38px] md:text-[44px]">
              Find jobs in USA
            </h1>
            <p className="mx-auto mt-3 max-w-[480px] text-[14px] leading-[1.5] text-white/85 sm:text-[16px]">
              When you&apos;re searching for a job, there are a few things you
              can do to get the most out of your search
            </p>
          </div>

          <div
            className="jl-page-enter relative z-10 mt-6 pt-3 pb-4 sm:mt-8 sm:pt-4 sm:pb-5"
            style={{ animationDelay: "280ms" }}
          >
            <div className="flex flex-col gap-3 sm:gap-4">
              <AvatarMarquee items={rowOne} duration="40s" />
              <AvatarMarquee items={rowTwo} duration="48s" reverse />
            </div>

            <p className="mt-4 text-[12px] font-medium tracking-[-0.01em] text-white/80 sm:mt-5 sm:text-[13px]">
              Join thousands of people growing their careers
            </p>
          </div>
        </div>

        <div
          className="jl-page-enter absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 translate-y-1/2 items-center justify-center"
          style={{ animationDelay: "450ms" }}
        >
          <a
            href="/signup"
            className="inline-flex h-14 min-w-[360px] items-center justify-center rounded-full bg-black px-16 text-[16px] font-semibold !text-white shadow-[0_12px_40px_rgba(0,0,0,0.12)] transition-opacity hover:opacity-90 sm:h-16 sm:min-w-[420px] sm:px-20 sm:text-[18px]"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
