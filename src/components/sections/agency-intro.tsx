"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";

const TAGS = ["Software Engineering", "AI Automation", "Product Design", "Brand"];

export function AgencyIntro() {
  return (
    <Section>
      <Container>
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
        >
          <motion.div variants={fadeUp}>
            <Eyebrow>Who We Are</Eyebrow>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-8 max-w-4xl text-(length:--text-h1) font-medium leading-[1.05] tracking-[-0.02em] text-foreground"
          >
            We&apos;re a small studio that engineers ideas most teams would call{" "}
            <span className="bg-gradient-to-r from-electric-soft to-cyber-soft bg-clip-text text-transparent">
              impossible on the timeline
            </span>{" "}
            — software, AI, and interfaces built with more care than the brief asked for.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-3">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-(--radius-full) border border-glass-border bg-glass px-4 py-2 text-(length:--text-small) text-silver"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
