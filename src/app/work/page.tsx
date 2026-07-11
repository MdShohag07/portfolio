import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { SiteNav } from "@/components/nav/site-nav";
import { Footer } from "@/components/layout/footer";
import { Starfield } from "@/components/backgrounds/starfield";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, Lead } from "@/components/ui/typography";
import { WorkIndexList } from "@/components/work/work-index-list";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = pageMetadata({
  title: "Work",
  description: "Selected NOVARA case studies — software, AI, and product builds.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <SiteNav />
      <main id="main-content" className="relative">
        <div className="fixed inset-0 -z-10">
          <Starfield />
        </div>

        <Section className="pb-16">
          <Container>
            <Eyebrow>Selected Work</Eyebrow>
            <Display className="mt-6 max-w-3xl">Every project, its own story.</Display>
            <Lead className="mt-6 max-w-xl">
              A handful of the products we&apos;ve shipped — the problem, what we built, and what
              happened after launch.
            </Lead>
          </Container>
        </Section>

        <WorkIndexList projects={projects} />
      </main>
      <Footer />
    </>
  );
}
