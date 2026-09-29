import type { Metadata } from "next";

import { JsonLd } from "@/components/json-ld";
import { Media } from "@/components/media";
import { PageHero } from "@/components/page-hero";
import { Principles } from "@/components/sections/principles";
import { Container, Eyebrow, Panel, SectionHeading } from "@/components/ui";
import { experienceIntro, gallery } from "@/content/experience";
import { instruments, instrumentsSection } from "@/content/instruments";
import { learningPhilosophy } from "@/content/program";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const experienceAreas = [
  {
    title: "Practical Learning",
    body: "Connect technical theory with real instruments, service examples, maintenance situations, and practical applications instead of memorising concepts alone.",
  },
  {
    title: "Technical Problem-Solving",
    body: "Build a systematic approach: identify symptoms, consider possible causes, diagnose the fault, select a safe solution, and verify equipment performance.",
  },
  {
    title: "Maintenance Skills",
    body: "Develop knowledge of preventive and corrective maintenance, service procedures, equipment verification, documentation, and root-cause analysis.",
  },
  {
    title: "Professional Skills",
    body: "Strengthen technical thinking, professional communication, documentation, safety awareness, accountability, ethics, and career confidence.",
  },
  {
    title: "Professional Responsibility",
    body: "Understand why biomedical equipment service demands accuracy, reliability, safety, and ethical responsibility because the equipment supports patient care.",
  },
  {
    title: "Continuous Learning",
    body: "Stay curious and adaptable as healthcare technologies, instrument systems, service methods, and professional expectations continue to evolve.",
  },
] as const;

export const metadata: Metadata = pageMetadata({
  title: "Learning Experience",
  description:
    "How learning works at CELIS College: understanding how medical laboratory instruments work, how faults occur, and how they are diagnosed and safely restored.",
  path: "/learning-experience",
});

export default function LearningExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow={experienceIntro.eyebrow}
        title={<>{experienceIntro.title}<br />{experienceIntro.titleSecondLine}</>}
        image="/images/celis-training-lab.jpg"
        imageAlt="CELIS College practical training room with analyzers and service tools"
        highlights={["Learn", "Practice", "Build"]}
        primaryCta={{ href: "/contact#enquiry", label: "Start your journey" }}
        body={<p>{experienceIntro.body}</p>}
      />

      <Panel>
        <Container className="px-0 sm:px-0 lg:px-0">
          <SectionHeading
            eyebrow="Inside the training room"
            title="Where the learning happens"
            align="center"
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {gallery.map((shot) => (
              <li key={shot.alt} className="glass overflow-hidden rounded-[var(--radius-card)]">
                <Media
                  src={shot.image}
                  alt={shot.alt}
                  accent="from-sky-200 via-blue-100 to-indigo-200"
                  className="aspect-[4/3] w-full"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <p className="px-5 py-4 text-sm text-body">{shot.caption}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Panel>

      <Panel>
        <Container className="px-0 sm:px-0 lg:px-0">
          <SectionHeading
            eyebrow="From knowledge to capability"
            title="Build technical skill and professional confidence"
            body="The CELIS learning journey supports beginners and existing technical professionals as they progress from foundational understanding to advanced technical capability."
            align="center"
          />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {experienceAreas.map((area, index) => (
              <li key={area.title} className="glass rounded-[var(--radius-card)] p-6">
                <span className="text-xs font-semibold tracking-[0.18em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-lg">{area.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-body">{area.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Panel>

      <Panel>
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

      <Panel>
        <Container className="px-0 sm:px-0 lg:px-0">
          <SectionHeading
            eyebrow={instrumentsSection.eyebrow}
            title="The instruments you will work on"
            body={instrumentsSection.intro}
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {instruments.map((instrument) => (
              <li
                key={instrument.slug}
                id={instrument.slug}
                className="glass flex scroll-mt-32 flex-col overflow-hidden rounded-[var(--radius-card)]"
              >
                <Media
                  src={instrument.image}
                  alt={instrument.imageAlt}
                  accent={instrument.accent}
                  className="aspect-[16/10] w-full"
                  sizes="(min-width: 1280px) 22vw, (min-width: 768px) 45vw, 100vw"
                />
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-sm font-semibold leading-snug">
                    {instrument.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">
                    {instrument.summary}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </Panel>

      <Principles
        title="Three principles behind every session"
        cta={{ href: "/contact#enquiry", label: "Ask us about joining" }}
      />

      <JsonLd
        data={breadcrumbSchema([
          { name: "Learning Experience", path: "/learning-experience" },
        ])}
      />
    </>
  );
}
