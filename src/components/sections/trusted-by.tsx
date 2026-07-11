"use client";

import { motion } from "framer-motion";
import { FiAward, FiGlobe, FiRepeat, FiStar } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, loopRevealViewport, staggerContainer } from "@/lib/motion";
import { clients, trustStats } from "@/lib/data/social-proof";

const STAT_ICONS = [FiGlobe, FiRepeat, FiStar, FiAward];

export function TrustedBy() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Trusted By</Eyebrow>
        <H2 className="mt-4 max-w-xl">Teams who bet on us early.</H2>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          {clients.map((client) => (
            <motion.div
              key={client.name}
              variants={fadeUp}
              className="flex items-center gap-3 rounded-(--radius-full) border border-glass-border bg-glass px-5 py-3"
            >
              <Text className="text-foreground">{client.name}</Text>
              <Muted className="uppercase tracking-[0.2em]">{client.industry}</Muted>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustStats.map((stat, index) => {
            const Icon = STAT_ICONS[index % STAT_ICONS.length];
            return (
              <motion.div key={stat.label} variants={fadeUp}>
                <GlassPanel className="h-full p-6" tilt={false}>
                  <Icon className="text-electric-soft" size={20} />
                  <Text className="mt-4 text-(length:--text-h3) font-semibold text-foreground">
                    {stat.value}
                  </Text>
                  <Muted className="mt-1">{stat.label}</Muted>
                </GlassPanel>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
