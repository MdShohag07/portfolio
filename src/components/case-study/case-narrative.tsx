"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";

export function CaseNarrative({ label, body }: { label: string; body: string }) {
  return (
    <Section className="py-16">
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-6 lg:grid-cols-[220px_1fr]"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>{label}</Eyebrow>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-(length:--text-h2) font-medium leading-[1.15] tracking-[-0.02em] text-foreground"
          >
            {body}
          </motion.p>
        </motion.div>
      </Container>
    </Section>
  );
}
