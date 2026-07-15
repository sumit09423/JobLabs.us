"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-[28px] bg-[#F3F4F6] px-8 py-10 text-center sm:rounded-[32px]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#081B4B] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            className="h-6 w-6"
            aria-hidden
          >
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-5 text-[24px] font-bold tracking-[-0.03em] text-[#111827]">
          Message sent
        </h3>
        <p className="mt-3 max-w-[320px] text-[15px] leading-[1.6] text-[#6b7280]">
          Thanks for reaching out. A JobLabs teammate will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 inline-flex h-11 items-center justify-center rounded-full bg-[#081B4B] px-6 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] bg-[#F3F4F6] px-6 py-8 sm:rounded-[32px] sm:px-8 sm:py-10"
    >
      <h3 className="text-[28px] font-bold tracking-[-0.03em] text-[#111827] sm:text-[32px]">
        Get In Touch
      </h3>
      <p className="mt-3 max-w-[360px] text-[14px] leading-[1.65] text-[#6b7280]">
        Tell us about your hiring needs or career goals and we will connect you
        with the right JobLabs specialist.
      </p>

      <div className="mt-8 space-y-7">
        <label className="block">
          <span className="sr-only">Full Name</span>
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full border-0 border-b border-[#d1d5db] bg-transparent pb-3 text-[15px] text-[#111827] outline-none placeholder:text-[#9ca3af] focus:border-[#081B4B]"
          />
        </label>

        <label className="block">
          <span className="sr-only">Email</span>
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full border-0 border-b border-[#d1d5db] bg-transparent pb-3 text-[15px] text-[#111827] outline-none placeholder:text-[#9ca3af] focus:border-[#081B4B]"
          />
        </label>

        <label className="block">
          <span className="sr-only">Subject</span>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className="w-full border-0 border-b border-[#d1d5db] bg-transparent pb-3 text-[15px] text-[#111827] outline-none placeholder:text-[#9ca3af] focus:border-[#081B4B]"
          />
        </label>

        <label className="block">
          <span className="sr-only">Message</span>
          <textarea
            name="message"
            required
            rows={3}
            placeholder="Message"
            className="w-full resize-none border-0 border-b border-[#d1d5db] bg-transparent pb-3 text-[15px] text-[#111827] outline-none placeholder:text-[#9ca3af] focus:border-[#081B4B]"
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-[#081B4B] px-7 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Send a message
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
}
