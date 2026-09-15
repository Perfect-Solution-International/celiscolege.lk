import Link from "next/link";

import { ArrowRightIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { Logo } from "@/components/logo";
import { Container } from "@/components/ui";
import { primaryNav } from "@/content/navigation";
import { levels } from "@/content/program";
import { site } from "@/content/site";

export function SiteFooter() {
  const { address } = site.contact;

  return (
    <footer className="px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
      <div className="relative overflow-hidden rounded-[var(--radius-panel)] bg-[#061b3e] text-white shadow-[var(--shadow-panel)]">
        <div aria-hidden className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-brand/25 blur-3xl" />
        <div aria-hidden className="absolute -bottom-44 left-1/4 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl" />

        <Container className="relative py-8 sm:py-10 lg:py-12">
          <div className="flex flex-col gap-6 rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-sky-300">
                Begin your professional pathway
              </p>
              <h2 className="mt-3 font-display text-2xl leading-tight text-white sm:text-3xl">
                Ready to build your future in healthcare technology?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-blue-100/70">
                Ask about eligibility, the Standard and Advanced levels, practical learning, or professional certification.
              </p>
            </div>
            <Link href="/contact#enquiry" className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-sky-100">
              Apply or enquire
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid gap-10 py-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1fr_1.2fr] lg:gap-12">
            <div>
              <div className="inline-flex rounded-2xl bg-white p-3 shadow-xl">
                <Logo />
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-blue-100/70">
                Professional, practical education in Biomedical Engineering, Healthcare Technology, and Medical Laboratory Instrument Service.
              </p>
              <p className="mt-5 font-display text-lg text-sky-300">{site.tagline}</p>
            </div>

            <FooterColumn title="Explore">
              <ul className="space-y-3">
                {primaryNav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-sm text-blue-100/70 transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>

            <FooterColumn title="Program pathway">
              <ul className="space-y-3">
                {levels.map((level) => (
                  <li key={level.slug}>
                    <Link href={`/program#${level.slug}`} className="text-sm leading-relaxed text-blue-100/70 transition-colors hover:text-white">
                      {level.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/program#certificate" className="text-sm text-blue-100/70 transition-colors hover:text-white">
                    Professional Certification
                  </Link>
                </li>
              </ul>
            </FooterColumn>

            <FooterColumn title="Contact CELIS">
              <ul className="space-y-4 text-sm text-blue-100/70">
                {site.contact.phones.map((phone) => (
                  <li key={phone.dial}>
                    <a href={`tel:${phone.dial}`} className="flex items-start gap-3 transition-colors hover:text-white">
                      <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                      <span><span className="block text-[0.62rem] uppercase tracking-[0.15em] text-white/45">{phone.label}</span>{phone.display}</span>
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${site.contact.email}`} className="flex items-start gap-3 break-all transition-colors hover:text-white">
                    <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                    {site.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sky-300" />
                  <span>{address.street}<br />{address.locality}, {address.countryName}</span>
                </li>
              </ul>
            </FooterColumn>
          </div>

          <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-blue-100/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} {site.name}. All Rights Reserved.</p>
            <p className="uppercase tracking-[0.18em]">{site.motto}</p>
          </div>
        </Container>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-white">{title}</h2>
      {children}
    </div>
  );
}
