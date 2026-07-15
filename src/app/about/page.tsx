import Image from "next/image";
import Reveal from "@/components/Reveal";

export const metadata = {
  title: "About Us | JobLabs",
  description:
    "Learn how JobLabs helps candidates and companies with clear staffing, placement, and recruitment support.",
};

const principles = [
  {
    title: "Clarity",
    description:
      "Roles, processes, and next steps stay organized so candidates and hiring teams always know what matters now.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden
      >
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Adaptability",
    description:
      "Hiring plans change — we adjust staffing models, timelines, and candidate pipelines without losing quality.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          d="M4 12a8 8 0 0 1 13.5-5.8M20 4v5h-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 12a8 8 0 0 1-13.5 5.8M4 20v-5h5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Focus",
    description:
      "Training, verification, and placement work together so every move takes you closer to the right outcome.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          d="M12 3l1.5 5.2L19 9l-4.2 3.5L16 18l-4-2.7L8 18l1.2-5.5L5 9l5.5-.8L12 3z"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Career Coach",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Arjun Reddy",
    role: "Talent Advisor",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Meera Kalluri",
    role: "Recruiting Lead",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Suresh Naidu",
    role: "Placement Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full flex-1 bg-white">
      <section className="px-0">
        <Reveal direction="fade">
          <div className="relative h-[320px] overflow-hidden rounded-b-[36px] sm:h-[400px] sm:rounded-b-[48px] lg:h-[460px] lg:rounded-b-[56px]">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
              alt="Modern office interior"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex items-center justify-center px-6">
              <h1 className="text-center text-[48px] font-bold tracking-[-0.04em] text-white sm:text-[64px] lg:text-[72px]">
                About Us
              </h1>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-12 lg:px-10">
        <Reveal direction="up">
          <div className="mx-auto max-w-[1100px] rounded-[32px] bg-[#F5F5F5] px-6 py-10 sm:rounded-[40px] sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <span className="inline-flex rounded-full bg-white px-4 py-1.5 text-[13px] font-medium text-[#6b7280] shadow-sm">
              Principles
            </span>

            <h2 className="mt-8 max-w-[820px] text-[28px] font-bold leading-[1.2] tracking-[-0.035em] text-[#111827] sm:text-[36px] lg:text-[42px]">
              JobLabs is built on a simple idea:{" "}
              <span className="text-[#9ca3af]">hiring should feel clear</span>
              , not overwhelming. We focus on how real careers and teams grow.
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-3 sm:gap-5">
              {principles.map((item, index) => (
                <Reveal key={item.title} delay={index * 100} direction="up">
                  <article className="h-full rounded-[24px] bg-white p-6 sm:rounded-[28px] sm:p-7">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#111827] text-white">
                      {item.icon}
                    </div>
                    <h3 className="mt-5 text-[20px] font-bold tracking-[-0.02em] text-[#111827]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-[1.65] text-[#6b7280] sm:text-[15px]">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 pb-16 pt-4 sm:px-6 sm:pb-20 sm:pt-6 lg:px-10">
        <Reveal direction="up">
          <span className="inline-flex rounded-full border border-[#e5e7eb] bg-white px-4 py-1.5 text-[13px] font-medium text-[#6b7280]">
            Our Team
          </span>
          <h2 className="mt-6 max-w-[640px] text-[28px] font-bold leading-[1.2] tracking-[-0.035em] text-[#111827] sm:text-[36px] lg:text-[40px]">
            People building clarity into every placement decision
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {team.map((member, index) => (
            <Reveal key={member.name} delay={index * 80} direction="up">
              <figure>
                <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] bg-[#f3f4f6] sm:rounded-[28px]">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <figcaption className="mt-4 px-1">
                  <p className="text-[15px] font-bold tracking-[-0.02em] text-[#111827] sm:text-[16px]">
                    {member.name}
                  </p>
                  <p className="mt-0.5 text-[13px] text-[#6b7280]">
                    {member.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
