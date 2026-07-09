"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H1 } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

export function CaseNextProject({ project }: { project: Project }) {
  return (
    <Section className="border-t border-glass-border py-24">
      <Container>
        <Link href={`/work/${project.slug}`} data-cursor="interactive" className="group block">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
          >
            <motion.div variants={fadeUp}>
              <Eyebrow>Next Project</Eyebrow>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center justify-between gap-6"
            >
              <H1 className="transition-colors group-hover:text-electric-soft">{project.name}</H1>
              <span
                className={cn(
                  "hidden h-24 w-24 shrink-0 rounded-(--radius-lg) bg-gradient-to-br sm:block",
                  "transition-transform duration-500 ease-(--ease-out) group-hover:scale-105",
                  project.gradient
                )}
              />
            </motion.div>
          </motion.div>
        </Link>
      </Container>
    </Section>
  );
}
