import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Reveal from "@/components/Reveal";
import SocialLinks from "@/components/SocialLinks";

const contactInfo = [
  {
    title: "Call Center",
    content: (
      <>
        <a href="tel:+917859943475" className="block hover:text-[#1F6BFF]">
          +91 78599 43475
        </a>
        <a
          href="https://wa.me/917859943475"
          target="_blank"
          rel="noreferrer"
          className="block hover:text-[#1F6BFF]"
        >
          WhatsApp
        </a>
      </>
    ),
  },
  {
    title: "Our Location",
    content: (
      <p>
        1200 Main Street, Suite 400
        <br />
        Dallas, TX 75202
      </p>
    ),
  },
  {
    title: "Email",
    content: (
      <a href="mailto:support@joblabs.us" className="block hover:text-[#1F6BFF]">
        support@joblabs.us
      </a>
    ),
  },
  {
    title: "Social Network",
    content: <SocialLinks className="mt-1 gap-2.5" />,
  },
];

export const metadata = {
  title: "Contact Us | JobLabs",
  description:
    "Get in touch with JobLabs for staffing, recruitment, and career placement support.",
};

export default function ContactUsPage() {
  return (
    <main className="w-full flex-1 bg-white">
      <section className="px-4 pt-4 sm:px-6 sm:pt-6 lg:px-10">
        <Reveal direction="up">
          <div className="relative mx-auto h-[280px] max-w-[1200px] overflow-hidden rounded-[28px] sm:h-[360px] sm:rounded-[36px] lg:h-[420px]">
            <Image
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1800&q=80"
              alt="Abstract contacts backdrop"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/35 to-black/20" />

            <div className="absolute inset-0 flex items-center px-8 sm:px-12 lg:px-16">
              <div>
                <span
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-full"
                  style={{
                    background:
                      "linear-gradient(160deg, #7c3aed 0%, #a855f7 35%, #f59e0b 100%)",
                  }}
                  aria-hidden
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2.2"
                    className="h-5 w-5"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="M16.5 16.5L20 20" strokeLinecap="round" />
                  </svg>
                </span>
                <h1 className="text-[42px] font-bold tracking-[-0.04em] text-white sm:text-[56px] lg:text-[64px]">
                  Contact Us
                </h1>
              </div>
            </div>

            <p
              aria-hidden
              className="pointer-events-none absolute top-1/2 right-6 hidden -translate-y-1/2 rotate-180 text-[48px] font-light tracking-[0.08em] text-white/25 [writing-mode:vertical-rl] lg:right-10 lg:block lg:text-[64px]"
            >
              Contact Us
            </p>

            <div className="absolute right-5 bottom-5 sm:right-7 sm:bottom-7">
              <nav
                aria-label="Breadcrumb"
                className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-[#111827] shadow-sm"
              >
                <Link href="/" className="hover:text-[#1F6BFF]">
                  Home
                </Link>
                <span className="text-[#9ca3af]">/</span>
                <span>Contact Us</span>
              </nav>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-16">
          <Reveal direction="up">
            <div>
              <p className="text-[13px] font-medium tracking-[0.08em] text-[#6b7280]">
                / get in touch /
              </p>
              <h2 className="mt-4 max-w-[520px] text-[32px] font-bold leading-[1.15] tracking-[-0.035em] text-[#111827] sm:text-[40px] lg:text-[44px]">
                We are always ready to help you and answer your questions
              </h2>
              <p className="mt-5 max-w-[480px] text-[15px] leading-[1.7] text-[#6b7280] sm:text-[16px]">
                Whether you are hiring for critical roles or looking for your
                next placement, JobLabs is here to guide you with clear next
                steps and responsive support.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10">
                {contactInfo.map((item) => (
                  <div key={item.title}>
                    <h3 className="text-[18px] font-bold tracking-[-0.02em] text-[#111827]">
                      {item.title}
                    </h3>
                    <div className="mt-3 text-[14px] leading-[1.7] text-[#6b7280]">
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-10 sm:px-6 sm:pb-12 lg:px-10">
        <Reveal direction="up">
          <div className="relative mx-auto h-[340px] max-w-[1200px] overflow-hidden rounded-[28px] sm:h-[420px] sm:rounded-[36px] lg:h-[480px]">
            <iframe
              title="JobLabs office location"
              src="https://maps.google.com/maps?q=1200%20Main%20Street%20Dallas%20TX%2075202&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="h-full w-full border-0 grayscale contrast-[1.05]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

            <div className="absolute top-5 left-5 max-w-[280px] rounded-2xl bg-white p-4 shadow-[0_12px_40px_rgba(0,0,0,0.12)] sm:top-6 sm:left-6 sm:p-5">
              <p className="text-[15px] font-bold text-[#111827]">
                JobLabs Dallas
              </p>
              <p className="mt-1 text-[13px] leading-[1.55] text-[#6b7280]">
                1200 Main Street, Suite 400
                <br />
                Dallas, TX 75202
              </p>
              <div className="mt-3 flex items-center gap-2 text-[12px] text-[#6b7280]">
                <span className="font-semibold text-[#111827]">4.9</span>
                <span className="tracking-tight text-[#f59e0b]">★★★★★</span>
                <span>128 reviews</span>
              </div>
              <a
                href="https://maps.google.com/?q=1200+Main+Street+Dallas+TX+75202"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-[13px] font-semibold text-[#1F6BFF] hover:opacity-80"
              >
                View larger map →
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
