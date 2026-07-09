"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { homepageServices } from "@/lib/data/services";

export function CapabilitiesStrip() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>What We Do</Eyebrow>
        <H2 className="mt-4 max-w-xl">Every capability, one team.</H2>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {homepageServices.map((service) => (
            <motion.div key={service.name} variants={fadeUp}>
              <GlassPanel className="h-full p-6" tilt={false}>
                <Text className="text-foreground">{service.name}</Text>
                <Muted className="mt-1">{service.description}</Muted>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <Link href="/services" data-cursor="interactive">
            <Button variant="secondary">Explore Services</Button>
          </Link>
        </div>
      </Container>
    </Section>
  );
}
