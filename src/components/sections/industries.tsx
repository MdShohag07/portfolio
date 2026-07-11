"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiCloud, FiCoffee, FiDollarSign, FiHeart, FiHome, FiShoppingCart, FiTruck } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Text } from "@/components/ui/typography";
import { fadeUp, loopRevealViewport, staggerContainer } from "@/lib/motion";
import { industries } from "@/lib/data/industries";
import type { Industry } from "@/lib/data/industries";

const ICONS: Record<Industry["icon"], React.ComponentType<{ size?: number; className?: string }>> = {
  heart: FiHeart,
  cart: FiShoppingCart,
  cloud: FiCloud,
  home: FiHome,
  coffee: FiCoffee,
  dollar: FiDollarSign,
  truck: FiTruck,
  book: FiBookOpen,
};

export function Industries() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Industries We Serve</Eyebrow>
        <H2 className="mt-4 max-w-xl">Different domain, same rigor.</H2>

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {industries.map((industry) => {
            const Icon = ICONS[industry.icon];
            return (
              <motion.div key={industry.name} variants={fadeUp}>
                <GlassPanel className="flex items-center gap-3 p-5" tilt={false}>
                  <Icon className="shrink-0 text-cyber-soft" size={18} />
                  <Text className="text-foreground">{industry.name}</Text>
                </GlassPanel>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
