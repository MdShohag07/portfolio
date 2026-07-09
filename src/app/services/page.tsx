import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PlaceholderPage
      eyebrow="Phase 4 · Services"
      title="Every service, an animated module."
      description="Software, AI automation, brand, and enterprise services — built out in the next phase."
    />
  );
}
