"use client";

import { useState, type FormEvent } from "react";

const WHATSAPP_NUMBER = "917859943475";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const subject = String(data.get("subject") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      "Hello JobLabs,",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${subject}`,
      "",
      "Message:",
      message,
    ].join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-[28px] bg-[#F3F4F6] px-8 py-10 text-center sm:rounded-[32px]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-7 w-7"
            aria-hidden
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </div>
        <h3 className="mt-5 text-[24px] font-bold tracking-[-0.03em] text-[#111827]">
          Opening WhatsApp
        </h3>
        <p className="mt-3 max-w-[320px] text-[15px] leading-[1.6] text-[#6b7280]">
          Your details are ready in WhatsApp. Send the message there and our
          team will reply shortly.
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
        Tell us about your hiring needs or career goals. Clicking send opens
        WhatsApp with your details ready to share.
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
        className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-[#25D366] px-7 text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
      >
        Send on WhatsApp
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
          aria-hidden
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>
    </form>
  );
}
