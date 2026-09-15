import Link from "next/link";

import { ArrowRightIcon, CertificateIcon, DocumentIcon, GearIcon } from "@/components/icons";
import { ArrowBadge, Button, Container, Eyebrow, Panel } from "@/components/ui";
import { certificate, levels, program } from "@/content/program";

const levelIcons = [DocumentIcon, GearIcon];

/** The two-level pathway graphic ending in the certificate card. */
export function Pathway({ showCta = true }: { showCta?: boolean }) {
  return (
    <Panel>
      <Container className="px-0 sm:px-0 lg:px-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Eyebrow>{program.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight text-balance sm:text-4xl">
              {program.title}
            </h2>
            <p className="mt-3 text-base text-body">{program.subtitle}</p>
          </div>
          {showCta ? (
            <Button href={program.cta.href} variant="ghost">
              {program.cta.label}
            </Button>
          ) : null}
        </div>

        <ol className="mt-10 grid items-stretch gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1.15fr]">
          {levels.map((level, index) => {
            const Icon = levelIcons[index] ?? DocumentIcon;
            return (
              <li key={level.slug} className="contents">
                <Link
                  href={`/program#${level.slug}`}
                  className="group glass flex items-center gap-4 rounded-[var(--radius-card)] p-5 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="font-display text-3xl font-semibold text-ink/80">
                    {level.number}
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-surface-blue to-white text-brand ring-1 ring-white">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold leading-snug text-ink">
                      {level.title}
                    </span>
                    <span className="mt-1 block text-xs text-body">
                      {level.strapline}
                    </span>
                  </span>
                  <ArrowBadge className="ml-auto h-8 w-8" label={level.title} />
                </Link>

                <span
                  aria-hidden
                  className="hidden items-center justify-center text-brand lg:flex"
                >
                  <ArrowRightIcon className="h-5 w-5" />
                </span>
              </li>
            );
          })}

          <li>
            <Link
              href="/program#certificate"
              className="group flex h-full items-center gap-4 rounded-[var(--radius-card)] bg-gradient-to-br from-brand to-[#062a6b] p-5 text-white shadow-[var(--shadow-pill)] transition-transform duration-200 hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <CertificateIcon className="h-5 w-5" aria-hidden />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-[0.16em] text-white/70">
                  {certificate.issuer}
                </span>
                <span className="mt-1 block font-display text-base leading-snug">
                  {certificate.title}
                </span>
                <span className="mt-1 block text-xs text-white/75">
                  {certificate.strapline}
                </span>
              </span>
              <ArrowRightIcon className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </li>
        </ol>
      </Container>
    </Panel>
  );
}
