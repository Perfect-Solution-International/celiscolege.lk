import { InstrumentRail } from "@/components/sections/instrument-rail";
import { Button, Container, Eyebrow, Panel } from "@/components/ui";
import { instruments, instrumentsSection } from "@/content/instruments";

export function InstrumentsSection() {
  return (
    <Panel>
      <Container className="px-0 sm:px-0 lg:px-0">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{instrumentsSection.eyebrow}</Eyebrow>
            <h2 className="mt-3 text-3xl leading-tight sm:text-4xl">
              {instrumentsSection.title}
            </h2>
          </div>
          <Button href={instrumentsSection.cta.href} variant="ghost">
            {instrumentsSection.cta.label}
          </Button>
        </div>

        <InstrumentRail instruments={instruments} />
      </Container>
    </Panel>
  );
}
