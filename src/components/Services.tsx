import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function Services() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <Reveal direction="up">
          <div className="mx-auto max-w-[720px] text-center">
            <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-[#081B4B] sm:text-[42px] md:text-[48px]">
              Everything you need to land your next role
            </h2>
            <p className="mx-auto mt-4 max-w-[540px] text-[15px] leading-[1.6] text-[#2B2B2B]/75 sm:text-[17px]">
              From daily job updates to ATS-ready resumes and career coaching —
              JobLabs helps you grow, apply smarter, and get hired faster.
            </p>
            <Link
              href="/signup"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-[#081B4B] px-8 text-[15px] font-semibold !text-white transition-opacity hover:opacity-90"
            >
              Explore services
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-16 md:grid-cols-12 md:grid-rows-[220px_160px_200px] md:gap-5">
          {/* Col 1 top - image */}
          <Reveal
            as="article"
            delay={80}
            direction="up"
            className="relative min-h-[260px] overflow-hidden rounded-[32px] md:col-span-2 md:row-span-2 md:min-h-0"
          >
            <Image
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&h=1200&fit=crop"
              alt="Professionals collaborating"
              fill
              sizes="(max-width: 768px) 100vw, 18vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <p className="absolute bottom-5 left-4 right-4 text-[20px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[22px]">
              Be the reason your career moves forward.
            </p>
          </Reveal>

          {/* Col 2 - tall image */}
          <article className="relative min-h-[320px] overflow-hidden rounded-[32px] md:col-span-2 md:row-span-3 md:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1400&fit=crop"
              alt="Career mentor"
              fill
              sizes="(max-width: 768px) 100vw, 18vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute bottom-5 left-4 right-4 text-white">
              <p className="text-[40px] font-bold leading-none tracking-[-0.04em] sm:text-[48px]">
                200+
              </p>
              <p className="mt-2 text-[14px] leading-snug text-white/90">
                Daily job openings across top US companies
              </p>
            </div>
          </article>

          {/* Center - solid */}
          <article className="flex min-h-[240px] flex-col justify-between rounded-[32px] bg-[#6B86FF] p-6 text-white md:col-span-4 md:row-span-2 md:min-h-0 md:p-8">
            <p className="max-w-[300px] text-[24px] font-semibold leading-tight tracking-[-0.02em] sm:text-[28px]">
              Join thousands building better careers every day
            </p>
            <Link
              href="/signup"
              className="mt-8 inline-flex h-11 w-fit items-center justify-center rounded-full bg-[#081B4B] px-6 text-[14px] font-semibold !text-white transition-opacity hover:opacity-90"
            >
              Join community
            </Link>
          </article>

          {/* Col 4 - tall image */}
          <article className="relative min-h-[320px] overflow-hidden rounded-[32px] md:col-span-2 md:row-span-3 md:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=1400&fit=crop"
              alt="Team working together"
              fill
              sizes="(max-width: 768px) 100vw, 18vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <p className="absolute bottom-5 left-4 right-4 text-[20px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[22px]">
              Inspire growth. Land the role.
            </p>
          </article>

          {/* Col 5 top - navy */}
          <article className="relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[32px] bg-[#081B4B] p-6 text-white md:col-span-2 md:row-span-2 md:min-h-0">
            <div>
              <p className="text-[48px] font-bold leading-none tracking-[-0.04em] sm:text-[56px]">
                One
              </p>
              <div className="mt-3 space-y-1 text-[15px] font-medium leading-snug text-white/90">
                <p>Resume</p>
                <p>Interview</p>
                <p>Offer</p>
              </div>
            </div>
            <svg
              className="mt-6 h-8 w-full text-[#2E7DFF]"
              viewBox="0 0 200 40"
              fill="none"
              aria-hidden
            >
              <path
                d="M4 28C40 8 70 36 100 18C130 2 160 30 196 12"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </article>

          {/* Col 1 bottom - blue stat */}
          <article className="flex min-h-[140px] items-end rounded-[32px] bg-[#1F6BFF] p-5 text-white md:col-span-2 md:row-span-1 md:min-h-0">
            <p className="text-[14px] leading-snug">
              <span className="block text-[32px] font-bold tracking-[-0.03em]">
                85%
              </span>
              of members improve interview call rates
            </p>
          </article>

          {/* Bottom center-ish image spanning */}
          <article className="relative min-h-[180px] overflow-hidden rounded-[32px] md:col-span-4 md:row-span-1 md:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=600&fit=crop"
              alt="Working on resume"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <p className="absolute bottom-4 left-5 right-5 text-[18px] font-semibold tracking-[-0.02em] text-white">
              ATS-friendly resume guidance
            </p>
          </article>

          {/* Col 5 bottom - image */}
          <article className="relative min-h-[160px] overflow-hidden rounded-[32px] md:col-span-2 md:row-span-1 md:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
              alt="Career tips"
              fill
              sizes="(max-width: 768px) 100vw, 18vw"
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
            <p className="absolute bottom-4 left-4 right-4 text-[15px] font-semibold leading-tight text-white">
              Career tips & job hacks
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
