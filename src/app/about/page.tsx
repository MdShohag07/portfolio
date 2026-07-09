import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PlaceholderPage
      eyebrow="Phase 4 · About"
      title="Mission, vision, journey."
      description="The NOVARA story — coming together in the supporting pages phase."
    />
  );
}
