import Link from "next/link";
import { CircularGallery } from "@/components/ui/circular-gallery";
import type { CircularGalleryItem } from "@/components/ui/circular-gallery";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { projects } from "@/lib/data/projects";
import { conceptProjects } from "@/lib/data/concept-projects";

export function FeaturedWork() {
  const total = projects.length + conceptProjects.length;
  const label = (n: number) => `${String(n).padStart(2, "0")}/${String(total).padStart(2, "0")}`;

  const caseStudyItems: CircularGalleryItem[] = projects.map((project, i) => ({
    id: project.slug,
    index: label(i + 1),
    title: project.name,
    subtitle: `${project.category} · ${project.year}`,
    summary: project.summary,
    gradient: project.gradient,
    href: `/work/${project.slug}`,
  }));

  const conceptItems: CircularGalleryItem[] = conceptProjects.map((concept, i) => ({
    id: concept.name,
    index: label(projects.length + i + 1),
    title: concept.name,
    subtitle: concept.category,
    summary: concept.summary,
    gradient: concept.gradient,
    href: "/work",
    concept: true,
  }));

  const items = [...caseStudyItems, ...conceptItems];

  return (
    <Section className="border-t border-glass-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Featured Case Studies</Eyebrow>
            <H2 className="mt-4 max-w-xl">Projects that speak for themselves.</H2>
          </div>
          <Link
            href="/work"
            data-cursor="interactive"
            className="text-(length:--text-small) text-silver transition-colors hover:text-foreground"
          >
            View all work →
          </Link>
        </div>
      </Container>

      <CircularGallery items={items} />
    </Section>
  );
}
