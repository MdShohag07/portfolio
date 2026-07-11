"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiAward,
  FiBox,
  FiCode,
  FiCpu,
  FiEdit3,
  FiGlobe,
  FiLayers,
  FiSearch,
  FiServer,
  FiShield,
  FiSmartphone,
  FiTrendingUp,
} from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { fadeUp, loopRevealViewport, staggerContainer } from "@/lib/motion";
import { homepageServices } from "@/lib/data/services";
import type { Service } from "@/lib/data/services";

const ICONS: Record<Service["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  code: FiCode,
  globe: FiGlobe,
  smartphone: FiSmartphone,
  box: FiBox,
  layers: FiLayers,
  shield: FiShield,
  cpu: FiCpu,
  server: FiServer,
  award: FiAward,
  edit: FiEdit3,
  search: FiSearch,
  trending: FiTrendingUp,
};

export function CapabilitiesStrip() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>What We Do</Eyebrow>
        <H2 className="mt-4 max-w-xl">Premium offerings, not a checklist.</H2>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {homepageServices.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <motion.div key={service.name} variants={fadeUp}>
                <GlassPanel className="h-full p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-(--radius-md) border border-glass-border-strong bg-glass">
                    <Icon className="text-electric-soft" size={20} />
                  </div>

                  <Text className="mt-5 text-(length:--text-h3) font-medium text-foreground">
                    {service.name}
                  </Text>
                  <Muted className="mt-2">{service.description}</Muted>

                  <div className="mt-5 space-y-2 border-t border-glass-border pt-4">
                    <div>
                      <Muted className="uppercase tracking-[0.2em] text-faint">For</Muted>
                      <Muted className="mt-1 text-silver">{service.audience}</Muted>
                    </div>
                    <div>
                      <Muted className="uppercase tracking-[0.2em] text-faint">Outcome</Muted>
                      <Muted className="mt-1 text-silver">{service.outcome}</Muted>
                    </div>
                  </div>
                </GlassPanel>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-10">
          <Link href="/services" data-cursor="interactive">
            <Button variant="secondary">Explore All Services</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
