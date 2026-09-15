/**
 * JSON-LD structured data.
 *
 * This is what lets Google show the college as an entity, the program as a
 * course, and the questions on /contact as an FAQ. Everything is built from
 * the content files, so updating content updates the structured data.
 *
 * Nothing here is invented: fields with no confirmed value (geo coordinates,
 * founding date, fees) are omitted rather than guessed.
 */

import { faqs } from "@/content/faqs";
import { certificate, levels, program } from "@/content/program";
import { site } from "@/content/site";
import { absoluteUrl } from "@/lib/seo";

const ORGANIZATION_ID = `${site.url}/#organization`;
const WEBSITE_ID = `${site.url}/#website`;

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.contact.address.street,
  addressLocality: site.contact.address.locality,
  addressRegion: site.contact.address.region,
  ...(site.contact.address.postalCode
    ? { postalCode: site.contact.address.postalCode }
    : {}),
  addressCountry: site.contact.address.country,
};

export function organizationSchema() {
  const geo = site.contact.geo;

  return {
    "@context": "https://schema.org",
    "@type": ["CollegeOrUniversity", "EducationalOrganization"],
    "@id": ORGANIZATION_ID,
    name: site.name,
    legalName: site.legalName,
    alternateName: site.subtitle,
    description: site.description,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/celis-college-logo.png"),
    image: absoluteUrl("/opengraph-image"),
    slogan: site.tagline,
    email: site.contact.email,
    telephone: site.contact.phones.map((phone) => phone.dial),
    address: postalAddress,
    ...(geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: geo.latitude,
            longitude: geo.longitude,
          },
        }
      : {}),
    areaServed: { "@type": "Country", name: "Sri Lanka" },
    sameAs: Object.values(site.social).filter(Boolean),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "admissions",
        email: site.contact.admissionsEmail,
        telephone: site.contact.phones[0]?.dial,
        areaServed: "LK",
        availableLanguage: ["en", "si"],
      },
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: absoluteUrl("/"),
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

/** The whole program as one Course, with each level as a course instance. */
export function programSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.title,
    description: program.summary,
    url: absoluteUrl("/program"),
    provider: { "@id": ORGANIZATION_ID },
    inLanguage: "en",
    educationalCredentialAwarded: `${certificate.issuer} ${certificate.title}`,
    occupationalCategory: "Biomedical Equipment Technician",
    teaches: levels.flatMap((level) => level.topics),
    hasCourseInstance: levels.map((level) => ({
      "@type": "CourseInstance",
      name: level.title,
      description: level.intro,
      courseMode: "onsite",
      location: {
        "@type": "Place",
        name: site.name,
        address: postalAddress,
      },
    })),
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Breadcrumbs give Google the path shown above a search result. */
export function breadcrumbSchema(trail: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...trail].map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
