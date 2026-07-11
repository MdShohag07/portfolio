import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#030304",
          backgroundImage:
            "radial-gradient(circle at 30% 20%, rgba(47,124,255,0.35), transparent 55%), radial-gradient(circle at 75% 75%, rgba(139,92,246,0.32), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 128,
            fontWeight: 700,
            letterSpacing: -4,
            color: "#f3f4f6",
            display: "flex",
          }}
        >
          NOVARA
        </div>
        <div style={{ fontSize: 34, color: "#c8ccd4", marginTop: 20, display: "flex" }}>
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
