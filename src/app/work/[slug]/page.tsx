import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteNav } from "@/components/nav/site-nav";
import { Footer } from "@/components/layout/footer";
import { Starfield } from "@/components/backgrounds/starfield";
import { CaseHero } from "@/components/case-study/case-hero";
import { CaseMeta } from "@/components/case-study/case-meta";
import { CaseNarrative } from "@/components/case-study/case-narrative";
import { CaseGallery } from "@/components/case-study/case-gallery";
import { CaseTimeline } from "@/components/case-study/case-timeline";
import { CaseMetrics } from "@/components/case-study/case-metrics";
import { CaseNextProject } from "@/components/case-study/case-next-project";
import { getProject, projects } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <SiteNav />
      <main className="relative">
        <div className="fixed inset-0 -z-10">
          <Starfield />
        </div>

        <CaseHero project={project} />
        <CaseMeta project={project} />
        <CaseNarrative label="The Problem" body={project.problem} />
        <CaseNarrative label="The Solution" body={project.solution} />
        <CaseGallery project={project} />
        <CaseTimeline project={project} />
        <CaseMetrics project={project} />
        <CaseNextProject project={nextProject} />
      </main>
      <Footer />
    </>
  );
}
