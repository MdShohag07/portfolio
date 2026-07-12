import Link from "next/link";
import { CircularGallery } from "@/components/ui/circular-gallery";
import type { CircularGalleryItem } from "@/components/ui/circular-gallery";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { projects } from "@/lib/data/projects";
import { conceptProjects } from "@/lib/data/concept-projects";

// Local to the homepage gallery only — the shared `gradient` field on
// project/concept data still drives /work and the case-study pages, which
// haven't been moved to the cyberpunk palette yet.
const CYBERPUNK_GRADIENTS = [
  "from-neon-yellow/35 via-neon-pink/15 to-transparent",
  "from-neon-pink/35 via-neon-yellow/15 to-transparent",
  "from-neon-yellow/25 via-neon-pink/25 to-transparent",
];

export function FeaturedWork() {
  const total = projects.length + conceptProjects.length;
  const label = (n: number) => `${String(n).padStart(2, "0")}/${String(total).padStart(2, "0")}`;

  const caseStudyItems: CircularGalleryItem[] = projects.map((project, i) => ({
    id: project.slug,
    index: label(i + 1),
    title: project.name,
    subtitle: `${project.category} · ${project.year}`,
    summary: project.summary,
    gradient: CYBERPUNK_GRADIENTS[i % CYBERPUNK_GRADIENTS.length],
    href: `/work/${project.slug}`,
  }));

  const conceptItems: CircularGalleryItem[] = conceptProjects.map((concept, i) => ({
    id: concept.name,
    index: label(projects.length + i + 1),
    title: concept.name,
    subtitle: concept.category,
    summary: concept.summary,
    gradient: CYBERPUNK_GRADIENTS[(projects.length + i) % CYBERPUNK_GRADIENTS.length],
    href: "/work",
    concept: true,
  }));

  const items = [...caseStudyItems, ...conceptItems];

  return (
    <Section className="border-t border-glass-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="before:from-neon-yellow before:to-neon-pink">Featured Case Studies</Eyebrow>
            <H2 className="mt-4 max-w-xl">Projects that speak for themselves.</H2>
          </div>
          <Link
            href="/work"
            data-cursor="interactive"
            className="text-(length:--text-small) text-silver transition-colors hover:text-neon-pink"
          >
            View all work →
          </Link>
        </div>
      </Container>

      <CircularGallery items={items} />
    </Section>
  );
}
