import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { coreServices } from "@/data/services";

const columns = [
  {
    title: "Services",
    links: [
      { href: "/services", label: "Our Services" },
      ...coreServices.map((service) => ({
        href: `/services/${service.slug}`,
        label: service.title,
      })),
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/contacts", label: "Contact Us" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full px-4 pb-8 sm:px-6 lg:px-10"
      style={{
        background:
          "linear-gradient(180deg, #E8F1FF 0%, #DCEBFF 100%)",
      }}
    >
      <div className="mx-auto max-w-[1100px] rounded-t-[28px] bg-white px-6 py-12 shadow-[0_-8px_40px_rgba(8,27,75,0.04)] sm:rounded-t-[36px] sm:px-10 sm:py-14">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
          <div className="max-w-[340px] shrink-0">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full"
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
                  className="h-4 w-4"
                >
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="M16.5 16.5L20 20" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-[22px] font-bold tracking-[-0.03em]">
                <span className="text-[#081B4B]">Job</span>
                <span className="text-[#1F6BFF]">Labs</span>
              </span>
            </Link>

            <p className="mt-6 text-[14px] font-medium text-[#111827]">
              Sign up to receive career tips.
            </p>

            <form className="mt-3 flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-[#f9fafb] p-1.5 pl-4">
              <label htmlFor="footer-email" className="sr-only">
                Enter your email
              </label>
              <input
                id="footer-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent text-[14px] text-[#111827] outline-none placeholder:text-[#9ca3af]"
              />
              <button
                type="submit"
                className="inline-flex h-9 shrink-0 items-center justify-center rounded-full bg-[#081B4B] px-4 text-[13px] font-semibold !text-white transition-opacity hover:opacity-90"
              >
                Submit
              </button>
            </form>

            <p className="mt-3 text-[11px] leading-[1.5] text-[#9ca3af]">
              By subscribing you agree to our Privacy Policy and provide consent
              to receive updates from our company.
            </p>

            <p className="mt-6 text-[14px] font-bold text-[#111827]">
              Follow us
            </p>
            <SocialLinks
              className="mt-3 gap-2.5"
              buttonClassName="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e7eb] bg-white text-[#111827] transition-colors hover:border-[#081B4B] hover:bg-[#081B4B] hover:text-white"
            />
          </div>

          <div className="grid flex-1 grid-cols-1 gap-10 sm:grid-cols-2">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-[14px] font-bold text-[#111827]">
                  {column.title}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-[#6b7280] transition-colors hover:text-[#1F6BFF]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-[#eef0f3] pt-6 text-center">
          <p className="text-[13px] text-[#9ca3af]">
            © {new Date().getFullYear()} JobLabs, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
