import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { SiteNav } from "@/components/nav/site-nav";
import { Footer } from "@/components/layout/footer";
import { Starfield } from "@/components/backgrounds/starfield";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, H2, Lead } from "@/components/ui/typography";
import { PricingCalculator } from "@/components/pricing/pricing-calculator";
import { FaqAccordion } from "@/components/pricing/faq-accordion";
import { faqs } from "@/lib/data/pricing";

export const metadata: Metadata = pageMetadata({
  title: "Pricing",
  description: "An interactive estimate calculator for software, AI, and product builds.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="relative">
        <div className="fixed inset-0 -z-10">
          <Starfield />
        </div>

        <Section className="pb-0">
          <Container>
            <Eyebrow>Pricing</Eyebrow>
            <Display className="mt-6 max-w-3xl">Build your estimate.</Display>
            <Lead className="mt-6 max-w-xl">
              No hidden tiers, no &ldquo;contact us for pricing.&rdquo; Pick a project type, a
              tier, and the add-ons you need — see the range instantly.
            </Lead>
          </Container>
        </Section>

        <Section>
          <Container>
            <PricingCalculator />
          </Container>
        </Section>

        <Section className="border-t border-glass-border">
          <Container>
            <Eyebrow>FAQ</Eyebrow>
            <H2 className="mt-4 max-w-xl">Questions worth answering upfront.</H2>
            <div className="mt-12">
              <FaqAccordion faqs={faqs} />
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}
