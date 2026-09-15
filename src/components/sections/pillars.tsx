import Link from "next/link";

import { iconMap } from "@/components/icons";
import { ArrowBadge, Container } from "@/components/ui";
import { pillars, pillarsCta } from "@/content/home";

/** The four capability pills that sit just under the hero. */
export function Pillars() {
  return (
    <Container className="relative z-10 -mt-8 pb-4 sm:-mt-10">
      <div className="glass-strong flex flex-col gap-4 rounded-[var(--radius-panel)] p-4 lg:flex-row lg:items-center">
        <ul className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar) => {
            const Icon = iconMap[pillar.icon];
            return (
              <li
                key={pillar.title}
                className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-surface-blue to-white text-brand ring-1 ring-white">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="text-sm font-semibold leading-snug text-ink">
                  {pillar.title}
                </span>
              </li>
            );
          })}
        </ul>

        <Link
          href={pillarsCta.href}
          className="group flex items-center gap-4 rounded-2xl bg-gradient-to-br from-surface-blue to-white px-5 py-4 ring-1 ring-white lg:max-w-xs"
        >
          <span className="font-display text-sm leading-snug text-ink">
            {pillarsCta.title}
          </span>
          <ArrowBadge className="ml-auto" label={pillarsCta.title} />
        </Link>
      </div>
    </Container>
  );
}
