import type { Metadata } from "next";

import { site } from "@/content/site";

/** Absolute URL for a path - canonical tags and JSON-LD both need absolute URLs. */
export function absoluteUrl(path = "/"): string {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetaInput = {
  title: string;
  description: string;
  /** Path relative to the site root, e.g. "/program". Sets the canonical URL. */
  path: string;
  /** Overrides the generated OG image. */
  image?: string;
  /** Set for pages that should stay out of the index (thank-you pages, etc.). */
  noIndex?: boolean;
};

/**
 * Builds per-page metadata: title, description, canonical, Open Graph and
 * Twitter cards. Every page uses this so nothing ships without a canonical URL.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  // The generated card at src/app/opengraph-image.tsx, unless a page overrides it.
  const ogImage = image ?? absoluteUrl("/opengraph-image");

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      siteName: site.name,
      locale: site.locale,
      url,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? { index: false, follow: true }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}
