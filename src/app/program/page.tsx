import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon, CertificateIcon, CheckIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Pathway } from "@/components/sections/pathway";
import { Principles } from "@/components/sections/principles";
import { Button, Container, Eyebrow, Panel, SectionHeading } from "@/components/ui";
import {
  admissionFacts,
  certificate,
  coursesIntro,
  learningPhilosophy,
  levels,
  pathClosing,
  program,
} from "@/content/program";
import { site } from "@/content/site";
import { breadcrumbSchema, programSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Our Courses",
  description: program.metaDescription,
  path: "/program",
});

export default function ProgramPage() {
  return (
    <>
      <PageHero
        eyebrow={coursesIntro.eyebrow}
        title={coursesIntro.title}
        image="/images/celis-analyzer-bench.jpg"
        imageAlt="Medical laboratory analyzers arranged on the CELIS College training bench"
        highlights={["Standard level", "Advanced level", "Professional certificate"]}
        primaryCta={{ href: "/contact#enquiry", label: "Apply or enquire" }}
        secondaryCta={{ href: "/learning-experience", label: "See how you will learn" }}
        body={<p>{coursesIntro.paragraphs[2]}</p>}
      />

      <Pathway showCta={false} />

      {admissionFacts.length ? (
        <Panel>
          <Container className="px-0 sm:px-0 lg:px-0">
            <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {admissionFacts.map((fact) => (
                <div key={fact.label} className="glass rounded-2xl px-5 py-4">
                  <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
                    {fact.label}
                  </dt>
                  <dd className="mt-1 text-sm font-semibold text-ink">{fact.value}</dd>
                  {fact.note ? (
                    <p className="mt-0.5 text-xs text-body">{fact.note}</p>
                  ) : null}
                </div>
              ))}
            </dl>
          </Container>
        </Panel>
      ) : null}

      {levels.map((level) => (
        <Panel key={level.slug} id={level.slug}>
          <Container className="px-0 sm:px-0 lg:px-0">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-14">
              <div>
                <p className="font-display text-5xl font-semibold text-brand/25">
                  {level.number}
                </p>
                <h2 className="mt-3 text-3xl leading-tight sm:text-[2.1rem]">
                  {level.title}
                </h2>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand">
                  {level.strapline}
                </p>
                <p className="mt-5 text-base leading-relaxed text-body">
                  {level.intro}
                </p>
                <p className="mt-4 text-base leading-relaxed text-body">
                  {level.closing}
                </p>
              </div>

              <div className="glass rounded-[var(--radius-card)] p-6 sm:p-8">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  {level.topicsLabel}
                </h3>
                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {level.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-start gap-2.5 text-sm text-body"
                    >
                      <CheckIcon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand"
                        aria-hidden
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Container>
        </Panel>
      ))}

      <Panel id="certificate">
        <Container className="px-0 sm:px-0 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="rounded-[var(--radius-card)] bg-gradient-to-br from-brand to-[#062a6b] p-8 text-white shadow-[var(--shadow-pill)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25">
                <CertificateIcon className="h-6 w-6" aria-hidden />
              </span>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-white/70">
                {certificate.issuer}
              </p>
              <h2 className="mt-2 font-display text-2xl text-white">
                {certificate.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/85">
                {certificate.body}
              </p>
            </div>

            <div>
              <SectionHeading
                eyebrow="Service Professional Certification"
                title="One complete professional learning pathway"
                body={certificate.note}
              />
              <Button href="/contact#enquiry" className="mt-8">
                Talk to us about joining
              </Button>
            </div>
          </div>
        </Container>
      </Panel>

      <Panel background="/images/bg-ai-virus-research.jpg">
        <Container className="px-0 sm:px-0 lg:px-0">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-14">
            <div>
              <Eyebrow>{learningPhilosophy.eyebrow}</Eyebrow>
              <h2 className="mt-3 text-3xl leading-tight text-balance sm:text-[2.1rem]">
                {learningPhilosophy.title}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-body">
                {learningPhilosophy.intro}
              </p>
              <p className="mt-4 text-base leading-relaxed text-body">
                {learningPhilosophy.closing}
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {learningPhilosophy.questions.map((question) => (
                <li
                  key={question}
                  className="glass rounded-[var(--radius-card)] px-5 py-5 font-display text-base leading-snug text-ink"
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Panel>

      <Principles background="/images/bg-cardio-heartbeat.jpg" />

      <section className="px-3 pb-6 sm:px-4">
        <Container>
          <Link
            href="/contact#enquiry"
            className="group glass-strong flex flex-col gap-6 rounded-[var(--radius-panel)] px-8 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between"
          >
            <div className="max-w-2xl">
              <p className="eyebrow">{pathClosing.eyebrow}</p>
              <p className="mt-4 text-base leading-relaxed text-body">
                {pathClosing.body}
              </p>
              <p className="mt-4 font-display text-lg text-ink">
                {site.tagline}{" "}
                <span className="text-body">{pathClosing.sign}</span>
              </p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-gradient-to-r from-brand to-brand-dark px-6 py-3 text-sm font-semibold text-white">
              Start the conversation
              <ArrowRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </span>
          </Link>
        </Container>
      </section>

      <JsonLd
        data={[
          programSchema(),
          breadcrumbSchema([{ name: "Our Courses", path: "/program" }]),
        ]}
      />
    </>
  );
}
