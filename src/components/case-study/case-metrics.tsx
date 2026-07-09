"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Eyebrow, Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import type { Project } from "@/lib/data/projects";

export function CaseMetrics({ project }: { project: Project }) {
  return (
    <Section className="py-16">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>The Result</Eyebrow>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-3xl text-(length:--text-h2) font-medium leading-[1.15] tracking-[-0.02em] text-foreground"
          >
            {project.result}
          </motion.p>

          <motion.div
            variants={staggerContainer(0.08)}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {project.metrics.map((metric) => (
              <motion.div key={metric.label} variants={fadeUp}>
                <GlassPanel className="h-full p-6" tilt={false}>
                  <Text className="text-(length:--text-h2) font-semibold text-foreground">
                    {metric.value}
                  </Text>
                  <Muted className="mt-2">{metric.label}</Muted>
                </GlassPanel>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
