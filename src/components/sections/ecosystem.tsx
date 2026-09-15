import Link from "next/link";

import { iconMap } from "@/components/icons";
import { Media } from "@/components/media";
import { ArrowBadge, Button, Container, EdgeLabel } from "@/components/ui";
import { ecosystem } from "@/content/home";

/** Full-bleed mission section with the stats bar sitting over the image. */
export function Ecosystem() {
  return (
    <section className="px-3 py-3 sm:px-4 sm:py-4">
      <div className="relative overflow-hidden rounded-[var(--radius-panel)] shadow-[var(--shadow-panel)]">
        <Media
          src={ecosystem.image}
          alt={ecosystem.imageAlt}
          sizes="100vw"
          accent="from-slate-200 via-sky-100 to-blue-200"
          className="absolute inset-0"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-white/92 via-white/70 to-white/20"
        />

        <Container className="relative py-16 sm:py-20 lg:py-24">
          <div className="flex items-start justify-between gap-10">
            <div className="max-w-xl">
              <h2 className="font-display text-2xl uppercase leading-[1.35] tracking-[0.08em] text-ink sm:text-[1.75rem]">
                {ecosystem.title}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-body">
                {ecosystem.body}
              </p>
              <Button href={ecosystem.cta.href} className="mt-8">
                {ecosystem.cta.label}
              </Button>
            </div>

            <EdgeLabel
              lines={ecosystem.sideLabel}
              className="hidden text-right lg:block"
            />
          </div>

          <div className="mt-14 flex flex-col gap-4 lg:flex-row lg:items-stretch lg:justify-between">
            <ul className="glass-strong grid flex-1 grid-cols-2 gap-x-6 gap-y-5 rounded-[var(--radius-card)] px-6 py-5 sm:grid-cols-4 lg:max-w-2xl">
              {ecosystem.stats.map((stat) => {
                const Icon = iconMap[stat.icon as keyof typeof iconMap];
                return (
                  <li key={stat.label}>
                    <div className="flex items-center gap-2 text-brand">
                      {Icon ? <Icon className="h-4 w-4" aria-hidden /> : null}
                      <span className="font-display text-xl font-semibold text-ink">
                        {stat.value}
                      </span>
                    </div>
                    <p className="mt-1 text-xs leading-snug text-body">{stat.label}</p>
                  </li>
                );
              })}
            </ul>

            <Link
              href={ecosystem.closing.href}
              className="group glass-strong flex items-center gap-5 rounded-[var(--radius-card)] px-6 py-5 lg:max-w-xs"
            >
              <span className="font-display text-lg leading-snug text-ink">
                {ecosystem.closing.title}
              </span>
              <ArrowBadge className="ml-auto h-10 w-10" label={ecosystem.closing.title} />
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
