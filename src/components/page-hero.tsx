import type { ReactNode } from "react";

import { Media } from "@/components/media";
import { Reveal } from "@/components/reveal";
import { Button, Container } from "@/components/ui";

export function PageHero({
  eyebrow,
  title,
  body,
  image,
  imageAlt,
  highlights = [],
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  image: string;
  imageAlt: string;
  highlights?: readonly string[];
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
}) {
  return (
    <section className="px-3 pt-2 sm:px-4">
      <div className="relative overflow-hidden rounded-[var(--radius-panel)] bg-[#071f48] shadow-[var(--shadow-panel)]">
        <div aria-hidden className="absolute -left-24 -top-40 h-96 w-96 rounded-full bg-brand/30 blur-3xl" />
        <Container className="relative grid gap-6 py-6 sm:py-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center lg:gap-10 lg:py-8">
          <Reveal className="py-2 sm:py-3">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-sky-300">
              {eyebrow}
            </p>
            <h1 className="mt-4 max-w-2xl font-display text-3xl leading-[1.06] tracking-tight text-white text-balance sm:text-4xl lg:text-[2.85rem]">
              {title}
            </h1>
            <div className="mt-4 max-w-2xl text-sm leading-6 text-blue-100/80 sm:text-[0.95rem]">
              {body}
            </div>

            {highlights.length ? (
              <ul className="mt-5 flex flex-wrap gap-2">
                {highlights.map((highlight) => (
                  <li key={highlight} className="rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-medium text-white/85 backdrop-blur-sm">
                    {highlight}
                  </li>
                ))}
              </ul>
            ) : null}

            {primaryCta || secondaryCta ? (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {primaryCta ? (
                  <Button href={primaryCta.href} className="justify-center bg-white text-ink hover:bg-surface-blue">
                    {primaryCta.label}
                  </Button>
                ) : null}
                {secondaryCta ? (
                  <Button href={secondaryCta.href} variant="ghost" className="justify-center border-white/25 bg-white/10 text-white hover:border-white/40 hover:bg-white/15">
                    {secondaryCta.label}
                  </Button>
                ) : null}
              </div>
            ) : null}
          </Reveal>

          <Reveal delay={150}>
            <Media
              src={image}
              alt={imageAlt}
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="aspect-[16/10] w-full rounded-[1.25rem] ring-1 ring-white/15 lg:h-72 lg:aspect-auto"
            >
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-[#071f48]/45 via-transparent to-transparent" />
            </Media>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
