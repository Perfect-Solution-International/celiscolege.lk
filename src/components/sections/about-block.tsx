import { iconMap } from "@/components/icons";
import { Button, Container, Panel, SectionHeading } from "@/components/ui";
import { aboutIntro, aboutPillars } from "@/content/about";

/** "About CELIS" - intro on the left, four value cards on the right. */
export function AboutBlock({
  showCta = true,
  background,
}: {
  showCta?: boolean;
  background?: string;
}) {
  return (
    <Panel background={background}>
      <Container className="px-0 sm:px-0 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-14">
          <div>
            <SectionHeading
              eyebrow={aboutIntro.eyebrow}
              title={aboutIntro.title}
              secondLine={aboutIntro.titleSecondLine}
              body={aboutIntro.body}
            />
            {showCta ? (
              <Button
                href={aboutIntro.cta.href}
                variant="ghost"
                className="mt-8"
              >
                {aboutIntro.cta.label}
              </Button>
            ) : null}
          </div>

          <ul className="grid gap-4 sm:grid-cols-2">
            {aboutPillars.map((pillar) => {
              const Icon = iconMap[pillar.icon];
              return (
                <li
                  key={pillar.title}
                  className="glass rounded-[var(--radius-card)] p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-surface-blue text-brand">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {pillar.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </Panel>
  );
}
