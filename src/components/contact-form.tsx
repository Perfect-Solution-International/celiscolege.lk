"use client";

import { useState } from "react";

import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { cn } from "@/components/ui";
import { levels } from "@/content/program";

type Status = "idle" | "sending" | "sent" | "error";

const inputClass =
  "w-full rounded-2xl border border-line bg-white/80 px-4 py-3 text-sm text-ink placeholder:text-muted focus:border-brand focus:outline-none";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = (await response.json()) as { ok?: boolean; error?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.error ?? "Something went wrong. Please try again.");
      }

      form.reset();
      setStatus("sent");
    } catch (submissionError) {
      setStatus("error");
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Something went wrong. Please try again.",
      );
    }
  }

  if (status === "sent") {
    return (
      <div className="glass-strong rounded-[var(--radius-card)] p-8 text-center">
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-brand-dark text-white">
          <CheckIcon className="h-6 w-6" aria-hidden />
        </span>
        <h3 className="mt-5 text-xl">Thank you - your enquiry is with us.</h3>
        <p className="mt-3 text-sm text-body">
          We will get back to you. If it is urgent, please call one of the numbers
          listed beside this form.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="glass-strong rounded-[var(--radius-card)] p-6 sm:p-8">
      <h2 className="text-xl">Admissions & Enquiries</h2>
      <p className="mt-2 text-sm text-body">
        Tell us which level you are interested in and we will get back to you with
        the details and next steps.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </Field>

        <Field label="Email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </Field>

        <Field label="Phone" htmlFor="phone">
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="07X XXX XXXX"
          />
        </Field>

        <Field label="Interested in" htmlFor="interest">
          <select id="interest" name="interest" className={inputClass} defaultValue="">
            <option value="">Select a level</option>
            {levels.map((level) => (
              <option key={level.slug} value={level.title}>
                {level.title}
              </option>
            ))}
            <option value="Full pathway">Full pathway (both levels)</option>
            <option value="General enquiry">General enquiry</option>
          </select>
        </Field>

        <Field label="Educational background" htmlFor="education">
          <input
            id="education"
            name="education"
            className={inputClass}
            placeholder="Your highest qualification"
          />
        </Field>

        <Field label="Professional background" htmlFor="profession">
          <input
            id="profession"
            name="profession"
            className={inputClass}
            placeholder="Current role or field"
          />
        </Field>

        <Field label="Previous technical experience" htmlFor="experience" className="sm:col-span-2">
          <textarea
            id="experience"
            name="experience"
            rows={3}
            className={cn(inputClass, "resize-y")}
            placeholder="Tell us about any electrical, electronic, biomedical, laboratory, or service experience."
          />
        </Field>

        <Field label="Why would you like to join?" htmlFor="message" className="sm:col-span-2">
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={cn(inputClass, "resize-y")}
            placeholder="Share your career goal or ask for course, eligibility, pathway, or certification details."
          />
        </Field>
      </div>

      {/* Honeypot: real people never see this, bots fill it in. */}
      <div aria-hidden className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      {error ? (
        <p role="alert" className="mt-5 rounded-2xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending"}
        className="group mt-6 inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-3 text-sm font-semibold text-white shadow-[var(--shadow-pill)] transition-opacity disabled:opacity-60"
      >
        {status === "sending" ? "Sending..." : "Send enquiry"}
        <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </button>

      <p className="mt-4 text-xs text-muted">
        We use your details only to answer your enquiry.
      </p>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.12em] text-ink"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
