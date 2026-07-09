"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, Lead } from "@/components/ui/typography";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

export function CaseHero({ project }: { project: Project }) {
  return (
    <Section className="pt-40 pb-0">
      <Container>
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <Eyebrow>
              {project.category} · {project.year}
            </Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Display className="mt-6">{project.name}</Display>
          </motion.div>
          <motion.div variants={fadeUp}>
            <Lead className="mt-6 max-w-xl">{project.summary}</Lead>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className={cn(
            "mt-16 aspect-[16/9] w-full overflow-hidden rounded-(--radius-lg) border border-glass-border bg-gradient-to-br",
            project.gradient
          )}
        />
      </Container>
    </Section>
  );
}
