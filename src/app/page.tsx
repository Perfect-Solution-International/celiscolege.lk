import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { AboutBlock } from "@/components/sections/about-block";
import { CareerCertification } from "@/components/sections/career-certification";
import { Ecosystem } from "@/components/sections/ecosystem";
import { FocusAreas } from "@/components/sections/focus-areas";
import { Hero } from "@/components/sections/hero";
import { InstrumentsSection } from "@/components/sections/instruments-section";
import { Pathway } from "@/components/sections/pathway";
import { Pillars } from "@/components/sections/pillars";
import { Principles } from "@/components/sections/principles";
import { site } from "@/content/site";
import { programSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: `${site.name} | ${site.subtitle}`,
    description: site.description,
    path: "/",
  }),
  // `absolute` stops the layout's "%s | CELIS College" template being appended.
  title: { absolute: `${site.name} | ${site.subtitle}` },
};

export default function HomePage() {
  return (
    <>
      {/* Introduction */}
      <Hero />
      <Pillars />
      <AboutBlock background="/images/bg-lab-biotech-specialist.jpg" />

      {/* Healthcare technology, biomedical engineering, instruments, learning */}
      <FocusAreas background="/images/bg-medical-tech-network.jpg" />

      {/* The flagship program: Standard and Advanced */}
      <Pathway background="/images/bg-genetic-research-dna.jpg" />
      <InstrumentsSection background="/images/bg-analytical-chemistry-lab.jpg" />

      {/* How we teach, then where it leads */}
      <Principles
        title="Learn. Practice. Build."
        background="/images/bg-smart-laboratory.jpg"
      />
      <CareerCertification />

      <Ecosystem />
      <JsonLd data={programSchema()} />
    </>
  );
}
