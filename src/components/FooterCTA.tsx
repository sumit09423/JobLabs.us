import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function FooterCTA() {
  return (
    <section
      className="w-full px-4 pb-8 pt-16 sm:px-6 sm:pb-10 sm:pt-20 lg:px-10"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #DCEBFF 45%, #E8F1FF 100%)",
      }}
    >
      <Reveal direction="up">
        <div className="mx-auto max-w-[720px] text-center">
          <h2 className="text-[32px] font-bold tracking-[-0.03em] text-[#081B4B] sm:text-[42px]">
            Ready to Take Control of Your Career?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] leading-[1.6] text-[#6b7280] sm:text-[16px]">
            Get expert support for job placement, recruiting, verification,
            training, and payroll — all through one trusted staffing partner.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contacts"
              className="inline-flex h-12 min-w-[140px] items-center justify-center rounded-full bg-[#1F6BFF] px-7 text-[15px] font-semibold !text-white transition-opacity hover:opacity-90"
            >
              Start Now
            </Link>
            <Link
              href="/contacts"
              className="inline-flex h-12 min-w-[140px] items-center justify-center rounded-full border border-[#d1d5db] bg-white px-7 text-[15px] font-semibold text-[#081B4B] transition-colors hover:bg-[#f9fafb]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
