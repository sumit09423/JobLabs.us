import Link from "next/link";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";
import { coreServices } from "@/data/services";

const serviceIcons: Record<string, ReactNode> = {
  "job-placement": (
    <path
      d="M4 7h16v12H4V7zm4 12v2m8-2v2M9 7V5h6v2"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  recruitment: (
    <>
      <path
        d="M9 11a3 3 0 100-6 3 3 0 000 6zM16 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
        stroke="currentColor"
        strokeWidth="1.7"
      />
      <path
        d="M3 20a6 6 0 0112 0M14 20a5 5 0 017 0"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </>
  ),
  "talent-acquisition": (
    <path
      d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.8 7.1 18.2l.9-5.5-4-3.9L9.5 8 12 3z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  ),
  "background-verification": (
    <path
      d="M12 3l8 3v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3zM9 12l2 2 4-4"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "it-training": (
    <path
      d="M4 5h16v10H4V5zm2 14h12M9 19v-2m6 2v-2M8 9l2 2-2 2m8-4l-2 2 2 2"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  "accounting-taxes": (
    <path
      d="M4 5h16v14H4V5zm4 4h8M8 13h5M8 17h3"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

export default function StaffingServices() {
  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-[1100px]">
        <div className="mx-auto max-w-[640px] text-center">
          <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#081B4B] sm:text-[40px]">
            We provide our best services
          </h2>
          <p className="mt-4 text-[15px] leading-[1.6] text-[#6b7280] sm:text-[16px]">
            JobLabs delivers staffing, recruiting, verification, training, and
            payroll support that helps companies hire confidently and
            professionals build lasting careers.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {coreServices.map((service, index) => (
            <Reveal key={service.slug} delay={index * 90} direction="up">
              <Link
                href={`/services/${service.slug}`}
                className="group block text-left"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center text-[#1F6BFF]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-7 w-7"
                    aria-hidden
                  >
                    {serviceIcons[service.slug]}
                  </svg>
                </div>
                <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#111827] transition-colors group-hover:text-[#1F6BFF]">
                  {service.title}
                </h3>
                <p className="mt-2 text-[14px] leading-[1.6] text-[#6b7280]">
                  {service.shortDescription}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
