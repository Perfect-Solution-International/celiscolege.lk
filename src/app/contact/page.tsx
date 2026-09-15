import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { ClockIcon, MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { JsonLd } from "@/components/json-ld";
import { PageHero } from "@/components/page-hero";
import { Container, Panel, SectionHeading } from "@/components/ui";
import { faqs } from "@/content/faqs";
import { site } from "@/content/site";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Admissions",
  description:
    "Contact CELIS College at 494 Galle Road, Nalluruwa, Panadura about the Biomedical Engineering Service Professional Program. Call 038 22 57 657 or 074 415 4431.",
  path: "/contact",
});

const { address, geo } = site.contact;
const mapQuery = encodeURIComponent(
  `${site.legalName}, ${address.street}, ${address.locality}, ${address.countryName}`,
);
/** Exact coordinates when we have them, otherwise a search for the address. */
const mapLink = geo
  ? `https://www.google.com/maps/search/?api=1&query=${geo.latitude},${geo.longitude}`
  : `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact & Apply"
        title="Start your path in healthcare technology."
        image="/images/unsplash-home-hero.jpg"
        imageAlt="Laboratory professional working with technical equipment in a modern facility"
        highlights={["Program applications", "Course information", "Eligibility guidance"]}
        primaryCta={{ href: "#enquiry", label: "Apply or send an enquiry" }}
        body={<p>Ask about the Service Professional Program, entry requirements, learning pathway, certification, or what the practical training covers. Our team is ready to guide your next step.</p>}
      />

      <Panel id="enquiry">
        <Container className="px-0 sm:px-0 lg:px-0">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
            <ContactForm />

            <div className="space-y-4">
              {site.contact.phones.map((phone) => (
                <ContactCard
                  key={phone.dial}
                  Icon={PhoneIcon}
                  label={phone.label}
                  value={phone.display}
                  href={`tel:${phone.dial}`}
                />
              ))}
              <ContactCard
                Icon={MailIcon}
                label="Email us"
                value={site.contact.admissionsEmail}
                href={`mailto:${site.contact.admissionsEmail}`}
              />
              {site.contact.whatsapp ? (
                <ContactCard
                  Icon={PhoneIcon}
                  label="WhatsApp"
                  value="Message us on WhatsApp"
                  href={`https://wa.me/${site.contact.whatsapp}`}
                  external
                />
              ) : null}
              <ContactCard
                Icon={PinIcon}
                label="Visit"
                value={`${address.street}, ${address.locality}, ${address.countryName}`}
                href={mapLink}
                external
              />

              <div className="glass rounded-[var(--radius-card)] p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-surface-blue text-brand">
                    <ClockIcon className="h-5 w-5" aria-hidden />
                  </span>
                  <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                    Opening hours
                  </h2>
                </div>
                <dl className="mt-4 space-y-2">
                  {site.contact.openingHours.map((slot) => (
                    <div key={slot.days} className="flex justify-between gap-4 text-sm">
                      <dt className="text-body">{slot.days}</dt>
                      <dd className="font-medium text-ink">{slot.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Panel>

      <Panel>
        <Container className="px-0 sm:px-0 lg:px-0">
          <div className="overflow-hidden rounded-[var(--radius-card)] shadow-[var(--shadow-glass)]">
            <iframe
              title={`Map showing ${site.name}`}
              src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[380px] w-full border-0"
            />
          </div>
        </Container>
      </Panel>

      <Panel>
        <Container className="px-0 sm:px-0 lg:px-0">
          <SectionHeading
            eyebrow="Questions"
            title="Before you apply"
            align="center"
          />
          <div className="mx-auto mt-10 max-w-3xl space-y-3">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="glass group rounded-[var(--radius-card)] px-6 py-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-ink">
                  {faq.question}
                  <span
                    aria-hidden
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-blue text-brand transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-body">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Panel>

      <JsonLd
        data={[faqSchema(), breadcrumbSchema([{ name: "Contact", path: "/contact" }])]}
      />
    </>
  );
}

function ContactCard({
  Icon,
  label,
  value,
  href,
  external = false,
}: {
  Icon: (props: React.SVGProps<SVGSVGElement>) => React.ReactElement;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className="glass flex items-start gap-4 rounded-[var(--radius-card)] p-5 transition-transform duration-200 hover:-translate-y-0.5"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-surface-blue text-brand">
        <Icon className="h-5 w-5" aria-hidden />
      </span>
      <span>
        <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted">
          {label}
        </span>
        <span className="mt-1 block text-sm font-medium text-ink">{value}</span>
      </span>
    </a>
  );
}
