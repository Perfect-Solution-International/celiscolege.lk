import Link from "next/link";

import { ArrowRightIcon, iconMap } from "@/components/icons";
import { Container, Panel } from "@/components/ui";
import { homeClosing } from "@/content/home";

/** Career development and professional certification, introduced side by side. */
export function CareerCertification() {
  const { career, certification } = homeClosing;
  const CareerIcon = iconMap[career.icon];
  const CertificateIcon = iconMap[certification.icon];

  return (
    <Panel>
      <Container className="px-0 sm:px-0 lg:px-0">
        <div className="grid gap-4 lg:grid-cols-2">
          <article className="glass flex flex-col rounded-[var(--radius-card)] p-8">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-surface-blue text-brand">
              <CareerIcon className="h-6 w-6" aria-hidden />
            </span>
            <p className="eyebrow mt-6">{career.eyebrow}</p>
            <h2 className="mt-3 text-2xl leading-snug">{career.title}</h2>
            <p className="mt-4 text-base leading-relaxed text-body">{career.body}</p>
            <Link
              href={career.cta.href}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand"
            >
              {career.cta.label}
              <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </article>

          <article className="flex flex-col rounded-[var(--radius-card)] bg-gradient-to-br from-brand to-[#062a6b] p-8 text-white shadow-[var(--shadow-pill)]">
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
              <CertificateIcon className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/70">
              {certification.eyebrow}
            </p>
            <h2 className="mt-3 font-display text-2xl leading-snug text-white">
              {certification.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/85">
              {certification.body}
            </p>
            <Link
              href={certification.cta.href}
              className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              {certification.cta.label}
              <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </article>
        </div>
      </Container>
    </Panel>
  );
}
