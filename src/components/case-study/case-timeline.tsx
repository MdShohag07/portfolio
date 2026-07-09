"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import type { Project } from "@/lib/data/projects";

export function CaseTimeline({ project }: { project: Project }) {
  return (
    <Section className="border-t border-glass-border py-20">
      <Container>
        <Eyebrow>Process</Eyebrow>
        <H2 className="mt-4 max-w-xl">How it came together.</H2>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div
            aria-hidden
            className="absolute left-0 right-0 top-3 hidden h-px bg-gradient-to-r from-electric/40 via-cyber/40 to-transparent lg:block"
          />
          {project.process.map((step, index) => (
            <motion.div key={step.phase} variants={fadeUp} className="relative">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-electric-soft shadow-[var(--glow-electric)]" />
                <Muted className="uppercase tracking-[0.2em]">
                  {String(index + 1).padStart(2, "0")}
                </Muted>
              </div>
              <Text className="mt-4 text-foreground">{step.phase}</Text>
              <Muted className="mt-2">{step.description}</Muted>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
