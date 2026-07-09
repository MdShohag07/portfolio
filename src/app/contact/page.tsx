import type { Metadata } from "next";
import { PlaceholderPage } from "@/components/layout/placeholder-page";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PlaceholderPage
      eyebrow="Phase 4 · Contact"
      title="A 3D contact experience."
      description="Interactive form, live validation, and booking — built in the supporting pages phase."
    />
  );
}
