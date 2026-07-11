import { SiteNav } from "@/components/nav/site-nav";
import { Hero } from "@/components/hero/hero";
import { Starfield } from "@/components/backgrounds/starfield";
import { TrustedBy } from "@/components/sections/trusted-by";
import { FeaturedWork } from "@/components/sections/featured-work";
import { CapabilitiesStrip } from "@/components/sections/capabilities-strip";
import { WhyChoose } from "@/components/sections/why-choose";
import { ProcessFlowSection } from "@/components/sections/process-flow";
import { TechStackSection } from "@/components/services/tech-stack-section";
import { ResultsMetrics } from "@/components/sections/results-metrics";
import { TestimonialsSection } from "@/components/services/testimonials-section";
import { EngagementModels } from "@/components/sections/engagement-models";
import { Industries } from "@/components/sections/industries";
import { InsightsPreview } from "@/components/sections/insights-preview";
import { FaqSection } from "@/components/sections/faq-section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="relative">
        <Hero />

        <div className="relative">
          <div className="fixed inset-0 -z-10">
            <Starfield />
          </div>

          <TrustedBy />
          <FeaturedWork />
          <CapabilitiesStrip />
          <WhyChoose />
          <ProcessFlowSection />
          <TechStackSection />
          <ResultsMetrics />
          <TestimonialsSection />
          <EngagementModels />
          <Industries />
          <InsightsPreview />
          <FaqSection />
          <ClosingCta />
        </div>
      </main>
      <Footer />
    </>
  );
}
