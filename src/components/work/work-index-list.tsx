"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

export function WorkIndexList({ projects }: { projects: Project[] }) {
  return (
    <div className="divide-y divide-glass-border border-t border-glass-border">
      {projects.map((project, index) => (
        <Section key={project.slug} className="py-20">
          <Container>
            <Link href={`/work/${project.slug}`} data-cursor="interactive" className="group block">
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                className={cn(
                  "grid items-center gap-10 lg:grid-cols-2",
                  index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                )}
              >
                <motion.div
                  variants={fadeUp}
                  className={cn(
                    "aspect-[16/10] w-full overflow-hidden rounded-(--radius-lg) border border-glass-border bg-gradient-to-br transition-transform duration-500 ease-(--ease-out) group-hover:scale-[1.02]",
                    project.gradient
                  )}
                />

                <div>
                  <motion.div variants={fadeUp}>
                    <Muted className="uppercase tracking-[0.2em]">
                      {String(index + 1).padStart(2, "0")} · {project.category} · {project.year}
                    </Muted>
                  </motion.div>
                  <motion.h2
                    variants={fadeUp}
                    className="mt-4 text-(length:--text-h1) font-semibold leading-[1] tracking-[-0.02em] text-foreground transition-colors group-hover:text-electric-soft"
                  >
                    {project.name}
                  </motion.h2>
                  <motion.div variants={fadeUp}>
                    <Text className="mt-4 max-w-md">{project.summary}</Text>
                  </motion.div>
                  <motion.div
                    variants={fadeUp}
                    className="mt-6 inline-flex items-center gap-2 text-(length:--text-small) text-silver transition-colors group-hover:text-foreground"
                  >
                    View case study
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </motion.div>
                </div>
              </motion.div>
            </Link>
          </Container>
        </Section>
      ))}
    </div>
  );
}
