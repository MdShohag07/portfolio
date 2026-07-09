"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer, transition } from "@/lib/motion";
import { workflow } from "@/lib/data/workflow";

export function WorkflowTimeline() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Workflow</Eyebrow>
        <H2 className="mt-4 max-w-xl">Nine steps, no surprises.</H2>

        <div className="relative mt-16">
          <motion.div
            aria-hidden
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={revealViewport}
            transition={{ ...transition.reveal, duration: 1.2 }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-electric via-cyber to-transparent sm:block"
          />

          <motion.ol
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="space-y-10"
          >
            {workflow.map((step, index) => (
              <motion.li
                key={step.phase}
                variants={fadeUp}
                className="relative flex flex-col gap-2 pl-0 sm:flex-row sm:items-baseline sm:gap-8 sm:pl-8"
              >
                <span className="absolute left-0 top-1.5 hidden h-[15px] w-[15px] items-center justify-center rounded-full border border-glass-border-strong bg-void sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric-soft shadow-[var(--glow-electric)]" />
                </span>
                <Muted className="w-24 shrink-0 font-mono">
                  {String(index + 1).padStart(2, "0")}
                </Muted>
                <div>
                  <Text className="text-foreground">{step.phase}</Text>
                  <Muted className="mt-1">{step.description}</Muted>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </Container>
    </Section>
  );
}
