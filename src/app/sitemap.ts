import type { MetadataRoute } from "next";

import { primaryNav } from "@/content/navigation";
import { absoluteUrl } from "@/lib/seo";

/**
 * Served at /sitemap.xml. Built from the navigation, so adding a page to
 * `primaryNav` puts it in the sitemap automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const priorities: Record<string, number> = {
    "/": 1,
    "/program": 0.9,
    "/contact": 0.8,
    "/learning-experience": 0.8,
    "/about": 0.7,
  };

  return primaryNav.map((item) => ({
    url: absoluteUrl(item.href),
    lastModified: now,
    changeFrequency: item.href === "/" ? "weekly" : "monthly",
    priority: priorities[item.href] ?? 0.6,
  }));
}
