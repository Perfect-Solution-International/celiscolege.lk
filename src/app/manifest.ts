import type { MetadataRoute } from "next";

import { site } from "@/content/site";

/** Served at /manifest.webmanifest - controls the installed-app appearance. */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} - ${site.subtitle}`,
    short_name: site.name,
    description: site.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6fbff",
    theme_color: "#0a2a5e",
    icons: [{ src: "/logo.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
