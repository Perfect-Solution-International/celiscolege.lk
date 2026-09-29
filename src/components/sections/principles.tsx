import { iconMap } from "@/components/icons";
import { Button, Container, Panel, SectionHeading } from "@/components/ui";
import { principles } from "@/content/program";

/**
 * "Learn. Practice. Build." - the three principles behind the pathway.
 * Shared by the home page, /program and /learning-experience, so the wording
 * only ever lives in one place.
 */
export function Principles({
  title = "Our learning pathway is built around three principles",
  cta,
  background,
}: {
  title?: string;
  cta?: { href: string; label: string };
  background?: string;
}) {
  return (
    <Panel background={background}>
      <Container className="px-0 sm:px-0 lg:px-0">
        <SectionHeading
          eyebrow="Learn. Practice. Build."
          title={title}
          align="center"
        />

        <ul className="mt-10 grid gap-4 lg:grid-cols-3">
          {principles.map((principle) => {
            const Icon = iconMap[principle.icon];
            return (
              <li key={principle.key} className="glass rounded-[var(--radius-card)] p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-surface-blue text-brand">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-lg tracking-[0.12em]">
                  {principle.key}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-body">
                  {principle.body}
                </p>
              </li>
            );
          })}
        </ul>

        {cta ? (
          <div className="mt-10 text-center">
            <Button href={cta.href}>{cta.label}</Button>
          </div>
        ) : null}
      </Container>
    </Panel>
  );
}
