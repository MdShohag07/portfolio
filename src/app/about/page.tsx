import type { Metadata } from "next";
import { SiteNav } from "@/components/nav/site-nav";
import { Footer } from "@/components/layout/footer";
import { Starfield } from "@/components/backgrounds/starfield";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, Lead } from "@/components/ui/typography";
import { MissionVision } from "@/components/about/mission-vision";
import { JourneyTimeline } from "@/components/about/journey-timeline";
import { ClosingCta } from "@/components/sections/closing-cta";

export const metadata: Metadata = {
  title: "About",
  description: "The NOVARA studio — mission, vision, and how we got here.",
};

export default function AboutPage() {
  return (
    <>
      <SiteNav />
      <main className="relative">
        <div className="fixed inset-0 -z-10">
          <Starfield />
        </div>

        <Section className="pb-0">
          <Container>
            <Eyebrow>About</Eyebrow>
            <Display className="mt-6 max-w-3xl">A small studio, on purpose.</Display>
            <Lead className="mt-6 max-w-xl">
              We stayed small so every project still gets senior attention — no account managers
              between you and the people building your product.
            </Lead>
          </Container>
        </Section>

        <MissionVision />
        <JourneyTimeline />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
