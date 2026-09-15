import { ImageResponse } from "next/og";

import { site } from "@/content/site";

/**
 * The social share card, generated at build time. This is the image people see
 * when the site is pasted into WhatsApp, Facebook or LinkedIn.
 */
export const alt = `${site.name} - ${site.subtitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #f6fbff 0%, #e2eefc 45%, #cfe3fb 100%)",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 74,
              borderRadius: "12px 12px 32px 32px",
              background: "linear-gradient(160deg, #1b5fbe, #0a2a5e)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 40, color: "#0a2a5e", letterSpacing: 1 }}>
              {site.name.toUpperCase()}
            </span>
            <span style={{ fontSize: 22, color: "#47617f", marginTop: 6 }}>
              {site.subtitle}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ fontSize: 68, color: "#0a2a5e", lineHeight: 1.1 }}>
            Shaping Healthcare
          </span>
          <span style={{ fontSize: 68, color: "#1668d8", lineHeight: 1.1 }}>
            Through Technology
          </span>
          <span style={{ fontSize: 28, color: "#47617f", marginTop: 24 }}>
            {site.tagline}
          </span>
        </div>

        <span
          style={{
            fontSize: 20,
            color: "#7590ae",
            letterSpacing: 4,
            textTransform: "uppercase",
          }}
        >
          {site.url.replace(/^https?:\/\//, "")}
        </span>
      </div>
    ),
    size,
  );
}
