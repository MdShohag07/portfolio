"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { services } from "@/lib/data/services";

const CATEGORIES = ["Engineering", "AI", "Design & Growth"] as const;

export function ServicesGrid() {
  return (
    <Section>
      <Container>
        <Eyebrow>What We Do</Eyebrow>
        <H2 className="mt-4 max-w-2xl">Every service, an animated module.</H2>

        <div className="mt-14 space-y-16">
          {CATEGORIES.map((category) => (
            <div key={category}>
              <Muted className="uppercase tracking-[0.2em]">{category}</Muted>
              <motion.div
                variants={staggerContainer(0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={revealViewport}
                className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {services
                  .filter((service) => service.category === category)
                  .map((service) => (
                    <motion.div key={service.name} variants={fadeUp}>
                      <GlassPanel className="h-full p-6">
                        <Text className="text-(length:--text-h3) font-medium text-foreground">
                          {service.name}
                        </Text>
                        <Muted className="mt-2">{service.description}</Muted>
                      </GlassPanel>
                    </motion.div>
                  ))}
              </motion.div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
