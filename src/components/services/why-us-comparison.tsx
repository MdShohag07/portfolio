"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { comparison } from "@/lib/data/comparison";

export function WhyUsComparison() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Why Us</Eyebrow>
        <H2 className="mt-4 max-w-xl">Most agencies. Then us.</H2>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-14 overflow-hidden rounded-(--radius-lg) border border-glass-border"
        >
          <div className="grid grid-cols-3 gap-4 border-b border-glass-border bg-glass px-6 py-4">
            <Muted className="uppercase tracking-[0.2em]"> </Muted>
            <Muted className="uppercase tracking-[0.2em]">Normal Agency</Muted>
            <Muted className="uppercase tracking-[0.2em] text-electric-soft">NOVARA</Muted>
          </div>
          {comparison.map((row) => (
            <motion.div
              key={row.label}
              variants={fadeUp}
              className="grid grid-cols-3 gap-4 border-b border-glass-border px-6 py-5 last:border-b-0"
            >
              <Text className="text-foreground">{row.label}</Text>
              <Muted>{row.normal}</Muted>
              <Text className="text-electric-soft">{row.novara}</Text>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
