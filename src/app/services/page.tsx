import Link from "next/link";
import Reveal from "@/components/Reveal";
import ServicesTestimonials from "@/components/ServicesTestimonials";
import { coreServices, itStaffingServices } from "@/data/services";

export const metadata = {
  title: "Our Services | JobLabs",
  description:
    "JobLabs services for job placement, recruitment, talent acquisition, background verification, IT training, accounting, and IT staffing solutions.",
};

export default function ServicesPage() {
  return (
    <main className="w-full flex-1 bg-[#FAFAFA]">
      <section className="mx-auto max-w-[1100px] px-4 pt-12 pb-6 sm:px-6 sm:pt-16 lg:px-10">
        <Reveal direction="up">
          <div className="mx-auto max-w-[720px] text-center">
            <span className="inline-flex rounded-full bg-[#ececec] px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#6b7280] uppercase">
              Our Services
            </span>
            <h1 className="mt-5 text-[32px] font-bold tracking-[-0.04em] text-[#111827] sm:text-[42px] lg:text-[48px]">
              Services that move careers and teams forward
            </h1>
            <p className="mt-5 text-[15px] leading-[1.75] text-[#6b7280] sm:text-[16px]">
              At JobLabs, we support professionals and companies with placement,
              staffing, verification, training, and payroll solutions designed
              for clarity and speed.
            </p>
            <Link
              href="/contacts"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-[#081B4B] px-6 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Talk to our team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="h-4 w-4"
                aria-hidden
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 pb-8 sm:px-6 lg:px-10">
        <Reveal direction="up">
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[28px]">
            Core services
          </h2>
          <p className="mt-2 max-w-[640px] text-[15px] leading-[1.65] text-[#6b7280]">
            Explore our main offerings for candidates and hiring teams.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80} direction="up">
              <Link
                href={`/services/${service.slug}`}
                className="flex h-full flex-col rounded-[28px] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] sm:rounded-[32px] sm:p-7"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#081B4B] text-[12px] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[18px] font-bold tracking-[-0.02em] text-[#111827] sm:text-[20px]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-[#6b7280] sm:text-[15px]">
                  {service.shortDescription}
                </p>
                <span className="mt-5 text-[13px] font-semibold text-[#1F6BFF]">
                  Learn more →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1100px] px-4 pb-10 sm:px-6 sm:pb-14 lg:px-10">
        <Reveal direction="up">
          <h2 className="text-[24px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[28px]">
            IT Staffing Solutions
          </h2>
          <p className="mt-2 max-w-[640px] text-[15px] leading-[1.65] text-[#6b7280]">
            Flexible hiring models for contract, contract-to-hire, permanent,
            remote, and leadership roles.
          </p>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {itStaffingServices.map((service, index) => (
            <Reveal key={service.title} delay={(index % 3) * 80} direction="up">
              <article className="flex h-full flex-col rounded-[28px] bg-[#F0F0F0] p-6 sm:rounded-[32px] sm:p-7">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#111827] text-[12px] font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-[18px] font-bold tracking-[-0.02em] text-[#111827] sm:text-[20px]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-[14px] leading-[1.7] text-[#6b7280] sm:text-[15px]">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ServicesTestimonials />
    </main>
  );
}
