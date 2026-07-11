"use client";

import { motion } from "framer-motion";
import { FiCpu, FiHeadphones, FiLayers, FiSearch, FiShield, FiTarget, FiZap } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, loopRevealViewport, staggerContainer } from "@/lib/motion";
import { differentiators } from "@/lib/data/differentiators";
import type { Differentiator } from "@/lib/data/differentiators";

const ICONS: Record<Differentiator["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  target: FiTarget,
  zap: FiZap,
  shield: FiShield,
  cpu: FiCpu,
  search: FiSearch,
  layers: FiLayers,
  headphones: FiHeadphones,
};

export function WhyChoose() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Why Choose NOVARA</Eyebrow>
        <H2 className="mt-4 max-w-xl">Most agencies get you 80% there.</H2>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {differentiators.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div key={item.title} variants={fadeUp}>
                <GlassPanel className="h-full p-6" tilt={false}>
                  <div className="flex h-11 w-11 items-center justify-center rounded-(--radius-md) border border-glass-border-strong bg-glass shadow-[var(--glow-electric)]">
                    <Icon className="text-electric-soft" size={20} />
                  </div>
                  <Text className="mt-5 text-foreground">{item.title}</Text>
                  <Muted className="mt-2">{item.description}</Muted>
                </GlassPanel>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
