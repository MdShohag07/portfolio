"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiGlobe, FiRepeat, FiStar } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { CornerBrackets, LiveDot } from "@/components/ui/hud";
import { Eyebrow, H2, Muted } from "@/components/ui/typography";
import { fadeUp, loopRevealViewport, staggerContainer, transition } from "@/lib/motion";
import { clients, trustStats } from "@/lib/data/social-proof";
import type { TrustStat } from "@/lib/data/social-proof";

const STAT_ICONS = [FiGlobe, FiRepeat, FiStar, FiAward];

function ClientRow({ client, index }: { client: (typeof clients)[number]; index: number }) {
  return (
    <div className="group/row flex items-center justify-between gap-4 border-b border-glass-border py-4 transition-colors duration-300 last:border-b-0 hover:border-neon-pink/40">
      <div className="flex items-center gap-3">
        <span className="font-mono text-(length:--text-micro) text-neon-pink/70">
          C_{String(index + 1).padStart(2, "0")}
        </span>
        <span className="text-(length:--text-body) font-medium text-foreground transition-transform duration-300 group-hover/row:translate-x-1">
          {client.name}
        </span>
      </div>
      <span className="rounded-(--radius-full) border border-glass-border-strong bg-glass px-3 py-1 font-mono text-(length:--text-micro) uppercase tracking-[0.2em] text-neon-yellow/80">
        {client.industry}
      </span>
    </div>
  );
}

function StatCard({ stat, icon: Icon, index }: { stat: TrustStat; icon: React.ComponentType<{ size?: number; className?: string }>; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref}>
      <GlassPanel className="relative h-full p-6" tilt>
        <CornerBrackets color="border-neon-pink/50" />
        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-neon-yellow via-neon-pink to-transparent opacity-70"
        />
        <span
          aria-hidden
          className="stripe-hazard pointer-events-none absolute -top-1 right-4 h-2 w-8 rotate-45 opacity-60"
        />

        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-(--radius-md) border border-glass-border-strong bg-glass shadow-[var(--glow-pink)] [clip-path:polygon(15%_0,100%_0,100%_85%,85%_100%,0_100%,0_15%)]">
            <Icon className="text-neon-yellow" size={18} />
          </span>
          <span className="font-mono text-(length:--text-micro) text-neon-pink/60">
            STAT_{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-5 flex items-baseline gap-0.5">
          <AnimatedNumber
            value={inView ? stat.value : 0}
            format={(n) => n.toFixed(stat.decimals ?? 0)}
            className="glitch-hover text-(length:--text-h3) font-semibold text-neon-yellow"
          />
          {stat.suffix && (
            <span className="glitch-hover text-(length:--text-h3) font-semibold text-neon-yellow">{stat.suffix}</span>
          )}
        </div>
        <Muted className="mt-1 font-mono uppercase tracking-[0.1em] text-silver/80">// {stat.label}</Muted>

        <div className="mt-4 h-px w-full overflow-hidden bg-glass-border">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={loopRevealViewport}
            transition={{ ...transition.reveal, duration: 1, delay: index * 0.08 }}
            style={{ transformOrigin: "left" }}
            className="h-full w-full bg-gradient-to-r from-neon-yellow to-neon-pink"
          />
        </div>
      </GlassPanel>
    </div>
  );
}

export function TrustedBy() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Eyebrow className="before:from-neon-yellow before:to-neon-pink">Trusted By</Eyebrow>
            <H2 className="mt-4 max-w-xl">Teams who bet on us early.</H2>
          </div>
          <div className="flex items-center gap-2 rounded-(--radius-full) border border-glass-border bg-glass px-4 py-2">
            <LiveDot className="bg-neon-pink" glow="shadow-[var(--glow-pink)]" />
            <span className="font-mono text-(length:--text-micro) uppercase tracking-[0.2em] text-silver">
              Active Client Network
            </span>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          variants={fadeUp}
          className="mt-10"
        >
          <GlassPanel className="p-6" tilt={false}>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-neon-yellow via-neon-pink to-transparent opacity-70"
            />
            <div className="flex items-center gap-2 pb-4">
              <LiveDot className="bg-neon-yellow" glow="shadow-[var(--glow-yellow)]" />
              <span className="font-mono text-(length:--text-micro) uppercase tracking-[0.24em] text-neon-yellow/80">
                // Verified Clients
              </span>
            </div>
            {clients.map((client, index) => (
              <ClientRow key={client.name} client={client} index={index} />
            ))}
          </GlassPanel>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {trustStats.map((stat, index) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCard stat={stat} icon={STAT_ICONS[index % STAT_ICONS.length]} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
