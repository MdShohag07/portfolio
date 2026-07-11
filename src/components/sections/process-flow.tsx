"use client";

import { motion } from "framer-motion";
import { FiCheck, FiCode, FiCompass, FiEdit3, FiMap, FiPlay, FiTrendingUp } from "react-icons/fi";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, loopRevealViewport, staggerContainer, transition } from "@/lib/motion";
import { processFlow } from "@/lib/data/process-flow";
import type { ProcessStep } from "@/lib/data/process-flow";

const ICONS: Record<ProcessStep["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  compass: FiCompass,
  map: FiMap,
  edit: FiEdit3,
  code: FiCode,
  check: FiCheck,
  play: FiPlay,
  trending: FiTrendingUp,
};

export function ProcessFlowSection() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Our Process</Eyebrow>
        <H2 className="mt-4 max-w-xl">Seven steps, zero surprises.</H2>

        <div className="relative mt-20">
          <motion.div
            aria-hidden
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={loopRevealViewport}
            transition={{ ...transition.reveal, duration: 1.4 }}
            style={{ transformOrigin: "left" }}
            className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-electric via-cyber to-cyber-soft/30 lg:block"
          />

          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={loopRevealViewport}
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-7 lg:gap-4"
          >
            {processFlow.map((step, index) => {
              const Icon = ICONS[step.icon];
              return (
                <motion.div key={step.phase} variants={fadeUp} className="relative flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-glass-border-strong bg-void shadow-[var(--glow-electric)]">
                    <Icon className="text-electric-soft" size={18} />
                  </span>
                  <Muted className="mt-4 font-mono">{String(index + 1).padStart(2, "0")}</Muted>
                  <Text className="mt-1 text-foreground">{step.phase}</Text>
                  <Muted className="mt-1.5">{step.description}</Muted>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
