"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SocialLinks from "@/components/SocialLinks";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Our Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const contactsActive = isActivePath(pathname, "/contacts");

  return (
    <header className="jl-page-enter sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between px-6 lg:px-10">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={() => setOpen(false)}
        >
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
              className="h-7 w-7"
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

        <div className="hidden items-center gap-5 xl:gap-6 lg:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActivePath(pathname, link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    className={`inline-flex h-10 items-center rounded-full px-4 text-[15px] font-bold tracking-[-0.02em] transition-colors ${
                      active
                        ? "bg-[#081B4B] text-white"
                        : "text-[#2B2B2B] hover:bg-[#f1f1f3] hover:text-[#081B4B]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <SocialLinks
            buttonClassName="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f1f1f3] text-[#111827] transition-colors hover:bg-[#081B4B] hover:text-white"
          />

          <Link
            href="/contacts"
            aria-current={contactsActive ? "page" : undefined}
            className={`inline-flex h-10 items-center justify-center rounded-full px-5 text-[15px] font-bold tracking-[-0.02em] transition-colors ${
              contactsActive
                ? "bg-[#081B4B] text-white"
                : "bg-[#f1f1f3] text-black hover:bg-[#e8e8eb]"
            }`}
          >
            Contacts
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f1f1f3] text-black lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
              aria-hidden
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {open && (
        <div className="bg-white px-6 pb-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((page) => {
              const active = isActivePath(pathname, page.href);
              return (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-xl px-3 py-3 text-[17px] font-bold tracking-[-0.02em] ${
                      active
                        ? "bg-[#081B4B] text-white"
                        : "text-black hover:bg-[#f1f1f3]"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {page.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contacts"
            aria-current={contactsActive ? "page" : undefined}
            className={`mt-3 inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-[15px] font-bold transition-colors ${
              contactsActive
                ? "bg-[#081B4B] text-white"
                : "bg-[#f1f1f3] text-black"
            }`}
            onClick={() => setOpen(false)}
          >
            Contacts
          </Link>
          <SocialLinks className="mt-4 justify-center" />
        </div>
      )}
    </header>
  );
}
