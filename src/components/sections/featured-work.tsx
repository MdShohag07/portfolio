"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
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

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link href={`/work/${project.slug}`} data-cursor="interactive" className="block h-full">
                <GlassPanel className="h-full">
                  <div
                    className={cn(
                      "aspect-[4/3] w-full bg-gradient-to-br",
                      project.gradient
                    )}
                  />
                  <div className="p-6">
                    <Muted className="uppercase tracking-[0.2em]">
                      {project.category} · {project.year}
                    </Muted>
                    <Text className="mt-2 text-(length:--text-h3) font-medium text-foreground">
                      {project.name}
                    </Text>
                    <Text className="mt-3">{project.summary}</Text>
                  </div>
                </GlassPanel>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
