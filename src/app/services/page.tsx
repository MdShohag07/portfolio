import type { Metadata } from "next";
import { SiteNav } from "@/components/nav/site-nav";
import { Footer } from "@/components/layout/footer";
import { Starfield } from "@/components/backgrounds/starfield";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, Lead } from "@/components/ui/typography";
import { ServicesGrid } from "@/components/services/services-grid";
import { WorkflowTimeline } from "@/components/services/workflow-timeline";
import { TechStackSection } from "@/components/services/tech-stack-section";
import { WhyUsComparison } from "@/components/services/why-us-comparison";
import { TestimonialsSection } from "@/components/services/testimonials-section";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata: Metadata = {
  title: "Services",
  description: "Software, AI, and design services — engineered as one connected team.",
};

export default function ServicesPage() {
  return (
    <>
      <SiteNav />
      <main className="relative">
        <div className="fixed inset-0 -z-10">
          <Starfield />
        </div>

        <Section className="pb-0">
          <Container>
            <Eyebrow>Services</Eyebrow>
            <Display className="mt-6 max-w-3xl">
              Everything you need, none of the handoffs.
            </Display>
            <Lead className="mt-6 max-w-xl">
              One team covers strategy, design, and engineering — so nothing gets lost in
              translation between departments that have never met.
            </Lead>
          </Container>
        </Section>

        <ServicesGrid />
        <WorkflowTimeline />
        <TechStackSection />
        <WhyUsComparison />
        <TestimonialsSection />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
