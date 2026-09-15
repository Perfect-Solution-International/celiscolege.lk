import Link from "next/link";

import { iconMap } from "@/components/icons";
import { ArrowBadge, Container, Panel, SectionHeading } from "@/components/ui";
import { focusAreas } from "@/content/home";

/** The four subject introductions: healthcare technology through to learning. */
export function FocusAreas() {
  return (
    <Panel>
      <Container className="px-0 sm:px-0 lg:px-0">
        <SectionHeading
          eyebrow={focusAreas.eyebrow}
          title={focusAreas.title}
          align="center"
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {focusAreas.areas.map((area) => {
            const Icon = iconMap[area.icon];
            return (
              <li key={area.title}>
                <Link
                  href={area.href}
                  className="group glass flex h-full flex-col rounded-[var(--radius-card)] p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-surface-blue text-brand">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{area.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{area.body}</p>
                  <ArrowBadge className="mt-6 h-8 w-8" label={area.title} />
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </Panel>
  );
}
