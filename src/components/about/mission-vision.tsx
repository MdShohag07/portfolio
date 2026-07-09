"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";

const BLOCKS = [
  {
    label: "Mission",
    body: "Build software that earns its place in someone's day — fast, reliable, and considered enough that it doesn't need explaining.",
  },
  {
    label: "Vision",
    body: "A studio small enough to stay senior on every project, and disciplined enough that clients never have to choose between speed and quality.",
  },
];

export function MissionVision() {
  return (
    <Section>
      <Container>
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-12 lg:grid-cols-2"
        >
          {BLOCKS.map((block) => (
            <motion.div key={block.label} variants={fadeUp}>
              <Eyebrow>{block.label}</Eyebrow>
              <Text className="mt-6 text-(length:--text-h2) font-medium leading-[1.15] tracking-[-0.02em] text-foreground">
                {block.body}
              </Text>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
