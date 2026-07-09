import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <PlaceholderPage
      eyebrow="Phase 3 · Case Studies"
      title="Every project, its own cinematic section."
      description="Case studies with full interaction, media, and process breakdowns land here next."
    />
  );
}
