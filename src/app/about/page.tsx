import type { Metadata } from "next";

import { CheckIcon, iconMap } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { PageHero } from "@/components/page-hero";
import { AboutBlock } from "@/components/sections/about-block";
import { Ecosystem } from "@/components/sections/ecosystem";
import { Button, Container, Eyebrow, Panel, SectionHeading } from "@/components/ui";
import {
  aboutLead,
  commitments,
  commitmentsBackground,
  future,
  purpose,
  vision,
  whatWeDo,
} from "@/content/about";
import { site } from "@/content/site";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Us",
  description:
    "CELIS College is a professional education and skills-development institution building industry-ready professionals in Biomedical Engineering and Healthcare Technology.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About CELIS College"
        title={<>Empowering Professionals.<br />Advancing Healthcare Technology.</>}
        image="/images/celis-instrument-room.jpg"
        imageAlt="Medical laboratory instruments inside the CELIS College technical facility"
        highlights={["Practical learning", "Industry relevance", "Professional responsibility"]}
        primaryCta={{ href: "/program", label: "Explore our program" }}
        body={<p>{aboutLead[0]}</p>}
      />

      <AboutBlock showCta={false} />

      <Panel>
        <Container className="px-0 sm:px-0 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <SectionHeading eyebrow="Why we exist" title={purpose.title} />
              <div className="mt-6 space-y-4">
                {purpose.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Button href="/program" className="mt-8">
                See our courses
              </Button>
            </div>

            <Media
              src={purpose.image}
              alt={purpose.imageAlt}
              accent="from-sky-200 via-blue-100 to-indigo-200"
              className="aspect-[4/3] w-full rounded-[var(--radius-card)] shadow-[var(--shadow-glass)]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </Container>
      </Panel>

      <Panel background={whatWeDo.background}>
        <Container className="px-0 sm:px-0 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-14">
            <div>
              <SectionHeading
                eyebrow="Who we teach"
                title={whatWeDo.title}
                body={whatWeDo.intro}
              />
              <p className="mt-6 text-base leading-relaxed text-body">
                {whatWeDo.closing}
              </p>
            </div>

            <ul className="glass grid gap-3 rounded-[var(--radius-card)] p-7">
              {whatWeDo.audience.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-body">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Panel>

      <Panel>
        <Container className="px-0 sm:px-0 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <Eyebrow>Looking ahead</Eyebrow>
              <h2 className="mt-3 text-3xl leading-tight text-balance sm:text-4xl">
                {vision.title}
              </h2>
              <div className="mt-6 space-y-4">
                {vision.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Image sits left on desktop so the page alternates sides. */}
            <Media
              src={vision.image}
              alt={vision.imageAlt}
              accent="from-sky-200 via-blue-100 to-indigo-200"
              className="aspect-[4/3] w-full rounded-[var(--radius-card)] shadow-[var(--shadow-glass)] lg:order-first"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </Container>
      </Panel>

      <Panel background={commitmentsBackground}>
        <Container className="px-0 sm:px-0 lg:px-0">
          <SectionHeading
            eyebrow="Our Commitment"
            title="What we hold ourselves to"
            align="center"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((commitment) => {
              const Icon = iconMap[commitment.icon];
              return (
                <li
                  key={commitment.title}
                  className="glass rounded-[var(--radius-card)] p-6"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-surface-blue text-brand">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <h3 className="mt-5 text-base font-semibold">{commitment.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {commitment.body}
                  </p>
                </li>
              );
            })}
          </ul>
        </Container>
      </Panel>

      <Panel>
        <Container className="px-0 sm:px-0 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div>
              <SectionHeading eyebrow="Our journey" title={future.title} />
              <div className="mt-6 space-y-4">
                {future.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              <p className="mt-8 font-display text-xl text-ink">{site.tagline}</p>
              <p className="mt-2 text-sm text-body">
                {site.name} — {site.strapline}
              </p>
            </div>

            <Media
              src={future.image}
              alt={future.imageAlt}
              accent="from-slate-200 via-sky-100 to-blue-200"
              className="aspect-[4/3] w-full rounded-[var(--radius-card)] shadow-[var(--shadow-glass)]"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
          </div>
        </Container>
      </Panel>

      <Ecosystem
        image="/images/celis-instrument-rack.jpg"
        imageAlt="Instrument racks holding laboratory equipment in the CELIS College training room"
      />
      <JsonLd data={breadcrumbSchema([{ name: "About Us", path: "/about" }])} />
    </>
  );
}
