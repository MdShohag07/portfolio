"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, H3, Muted, Text } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { fadeUp, loopRevealViewport, staggerContainer } from "@/lib/motion";
import { tiers } from "@/lib/data/pricing";
import { cn } from "@/lib/utils";

export function EngagementModels() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Engagement Models</Eyebrow>
            <H2 className="mt-4 max-w-xl">Pick a starting point, not a final price.</H2>
          </div>
          <Link
            href="/pricing"
            data-cursor="interactive"
            className="text-(length:--text-small) text-silver transition-colors hover:text-foreground"
          >
            Build your estimate →
          </Link>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {tiers.map((tier, index) => (
            <motion.div key={tier.id} variants={fadeUp}>
              <GlassPanel
                className={cn("h-full p-8", index === 1 && "border-electric-soft/40")}
                tilt={false}
              >
                {index === 1 && (
                  <span className="inline-flex items-center rounded-(--radius-full) border border-electric-soft/40 bg-electric/10 px-3 py-1 text-(length:--text-micro) uppercase tracking-[0.2em] text-electric-soft">
                    Most Chosen
                  </span>
                )}
                <H3 className={cn("text-foreground", index === 1 ? "mt-4" : "mt-0")}>{tier.label}</H3>
                <div className="mt-3 flex items-baseline gap-1">
                  <Text className="text-(length:--text-h3) font-semibold text-foreground">
                    {tier.startingAt}
                  </Text>
                  {tier.startingAt !== "Custom" && <Muted>starting</Muted>}
                </div>
                <Muted className="mt-3">{tier.description}</Muted>

                <div className="mt-6 flex items-start gap-2 border-t border-glass-border pt-6">
                  <FiCheck className="mt-0.5 shrink-0 text-electric-soft" size={16} />
                  <Text className="text-silver">{tier.bestFor}</Text>
                </div>

                <Link href="/pricing" data-cursor="interactive" className="mt-8 block">
                  <Button variant={index === 1 ? "primary" : "secondary"} className="w-full">
                    Explore {tier.label}
                  </Button>
                </Link>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
