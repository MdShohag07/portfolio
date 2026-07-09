import { SiteNav } from "@/components/nav/site-nav";
import { Hero } from "@/components/hero/hero";
import { AgencyIntro } from "@/components/sections/agency-intro";
import { FeaturedWork } from "@/components/sections/featured-work";
import { CapabilitiesStrip } from "@/components/sections/capabilities-strip";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <AgencyIntro />
        <FeaturedWork />
        <CapabilitiesStrip />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
