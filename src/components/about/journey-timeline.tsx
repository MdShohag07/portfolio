"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { journey } from "@/lib/data/journey";

const OFFSETS = ["lg:mt-0", "lg:mt-8", "lg:mt-0", "lg:mt-8"];

export function JourneyTimeline() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Journey</Eyebrow>
        <H2 className="mt-4 max-w-xl">Two years, three shipped platforms.</H2>

        <div className="relative mt-16">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-3 hidden h-px bg-gradient-to-r from-electric/50 via-cyber/50 to-transparent lg:block"
          />
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            className="grid gap-10 lg:grid-cols-4"
          >
            {journey.map((milestone, index) => {
              const isCurrent = index === journey.length - 1;
              return (
                <motion.div
                  key={milestone.year}
                  variants={fadeUp}
                  className={cn("relative", OFFSETS[index])}
                >
                  <div className="flex items-center gap-3">
                    <span className="relative flex h-3 w-3 items-center justify-center">
                      {isCurrent && (
                        <span className="absolute h-3 w-3 animate-ping rounded-full bg-electric-soft/60" />
                      )}
                      <span className="h-1.5 w-1.5 rounded-full bg-electric-soft shadow-[var(--glow-electric)]" />
                    </span>
                    <Muted className="uppercase tracking-[0.2em]">{milestone.year}</Muted>
                  </div>
                  <Text className="mt-4 text-(length:--text-h3) font-medium text-foreground">
                    {milestone.title}
                  </Text>
                  <Muted className="mt-2">{milestone.description}</Muted>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
