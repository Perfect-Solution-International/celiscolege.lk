/**
 * Single source of truth for the institute's identity.
 * Feeds the header, footer, contact page, JSON-LD and page metadata.
 * Edit this file when details change - no component changes needed.
 */

export const site = {
  name: "CELIS College",
  legalName: "Celis College (Pvt) Ltd",
  subtitle: "Institute of Biomedical Engineering Technology",
  strapline: "Developing Professionals for the Future of Healthcare Technology",
  tagline: "Learn. Practice. Build Your Career.",
  motto: "A Healthier Tomorrow Together",
  quote: "Technology in Skilled Hands Saves Lives.",

  /**
   * Used for canonical URLs, sitemap.xml, robots.txt and Open Graph tags.
   * Override per-environment with NEXT_PUBLIC_SITE_URL.
   */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://celiscollege.lk",
  locale: "en_LK",

  /** 150-160 characters: the default <meta name="description"> for the site. */
  description:
    "CELIS College, Panadura - professional education in Medical Laboratory Instruments and Biomedical Engineering Equipment Service in Sri Lanka.",

  contact: {
    /**
     * NOTE: supplied as "info@celiscollage.lk" (collage, not college), while the
     * website domain is celiscollege.lk. Confirm which is correct before launch.
     */
    email: "info@celiscollage.lk",
    admissionsEmail: "info@celiscollage.lk",

    /** `display` is what visitors see; `dial` is what tel: links use. */
    phones: [
      { label: "Office", display: "038 22 57 657", dial: "+94382257657" },
      { label: "Mobile", display: "074 415 4431", dial: "+94744154431" },
    ],

    /** Digits only, international format. Set to "" to hide the WhatsApp link. */
    whatsapp: "94744154431",

    address: {
      street: "494, Galle Road",
      locality: "Nalluruwa, Panadura",
      region: "Western Province",
      /** Panadura postal code - fill in to complete the structured data. */
      postalCode: "",
      country: "LK",
      countryName: "Sri Lanka",
    },

    /**
     * Optional. Right-click the campus pin in Google Maps to copy the exact
     * coordinates, then fill these in - it helps local search results.
     * While null, map links fall back to searching the address above.
     */
    geo: null as { latitude: number; longitude: number } | null,

    /** Confirm these before launch - they are shown on the contact page. */
    openingHours: [
      { days: "Monday - Friday", hours: "8:30 AM - 5:30 PM" },
      { days: "Saturday", hours: "8:30 AM - 1:00 PM" },
      { days: "Sunday", hours: "Closed" },
    ],
  },

  /** Add the real profile URLs; empty entries are hidden automatically. */
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
    youtube: "",
  },

  /** Optional - a YouTube/Vimeo URL for the "Watch Video" button. */
  introVideoUrl: "",
} as const;

/** The number shown first in the header, footer and contact cards. */
export const primaryPhone = site.contact.phones[0];

export type Site = typeof site;
