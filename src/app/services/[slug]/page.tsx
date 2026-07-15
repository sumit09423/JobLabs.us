import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { coreServices, getServiceBySlug } from "@/data/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return coreServices.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Services | JobLabs" };

  return {
    title: `${service.title} | JobLabs`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) notFound();

  const related = coreServices.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main className="w-full flex-1 bg-white">
      <section className="mx-auto max-w-[980px] px-4 pb-10 pt-10 sm:px-6 sm:pt-14 lg:px-10">
        <Reveal direction="up">
          <Link
            href="/services"
            className="text-[13px] font-medium text-[#6b7280] transition-colors hover:text-[#1F6BFF]"
          >
            ← Back to Our Services
          </Link>
          <p className="mt-6 text-[12px] font-semibold tracking-[0.14em] text-[#9ca3af] uppercase">
            Service
          </p>
          <h1 className="mt-3 max-w-[760px] text-[34px] font-bold leading-[1.15] tracking-[-0.035em] text-[#111827] sm:text-[44px] md:text-[52px]">
            {service.title}
          </h1>
          <p className="mt-5 max-w-[680px] text-[16px] leading-[1.75] text-[#6b7280] sm:text-[17px]">
            {service.intro}
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
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-6">
          <Reveal direction="up" delay={80}>
            <article className="h-full rounded-[28px] bg-[#F5F5F5] p-6 sm:p-8">
              <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#111827]">
                What we cover
              </h2>
              <ul className="mt-5 space-y-3">
                {service.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-[1.6] text-[#4b5563]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F6BFF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal direction="up" delay={140}>
            <article className="h-full rounded-[28px] border border-[#eee] bg-white p-6 sm:p-8">
              <h2 className="text-[22px] font-bold tracking-[-0.02em] text-[#111827]">
                What you gain
              </h2>
              <ul className="mt-5 space-y-3">
                {service.outcomes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[15px] leading-[1.6] text-[#4b5563]"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#081B4B]" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#F5F5F5] px-4 py-14 sm:px-6 sm:py-16 lg:px-10">
        <div className="mx-auto max-w-[980px]">
          <Reveal direction="up">
            <h2 className="text-[28px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[32px]">
              Related services
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80} direction="up">
                <Link
                  href={`/services/${item.slug}`}
                  className="block h-full rounded-[24px] bg-white p-5 transition-shadow hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] sm:p-6"
                >
                  <h3 className="text-[17px] font-bold tracking-[-0.02em] text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[#6b7280]">
                    {item.shortDescription}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
