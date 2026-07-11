"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiAward, FiGlobe, FiRepeat, FiStar } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, loopRevealViewport, staggerContainer, transition } from "@/lib/motion";
import { clients, trustStats } from "@/lib/data/social-proof";
import type { TrustStat } from "@/lib/data/social-proof";

const STAT_ICONS = [FiGlobe, FiRepeat, FiStar, FiAward];

function LiveDot() {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-electric-soft opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-electric-soft shadow-[var(--glow-electric)]" />
    </span>
  );
}

function CornerBrackets() {
  return (
    <>
      <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t border-electric-soft/50 transition-colors duration-300 group-hover:border-electric-soft" />
      <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 border-r border-t border-electric-soft/50 transition-colors duration-300 group-hover:border-electric-soft" />
      <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l border-electric-soft/50 transition-colors duration-300 group-hover:border-electric-soft" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r border-electric-soft/50 transition-colors duration-300 group-hover:border-electric-soft" />
    </>
  );
}

function CircuitTrace() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-electric via-cyber to-transparent opacity-70"
    />
  );
}

function ClientCard({ client, index }: { client: (typeof clients)[number]; index: number }) {
  return (
    <GlassPanel className="relative h-full p-6" tilt>
      <CornerBrackets />
      <CircuitTrace />

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <LiveDot />
          <span className="font-mono text-(length:--text-micro) uppercase tracking-[0.2em] text-electric-soft">
            Verified Client
          </span>
        </div>
        <span className="font-mono text-(length:--text-micro) text-faint">
          {String(index + 1).padStart(2, "0")}/{String(clients.length).padStart(2, "0")}
        </span>
      </div>

      <Text className="mt-5 text-(length:--text-h3) font-medium text-foreground">{client.name}</Text>

      <div className="mt-4 inline-flex items-center gap-2 rounded-(--radius-full) border border-glass-border-strong bg-glass px-3 py-1">
        <span className="font-mono text-(length:--text-micro) uppercase tracking-[0.2em] text-silver">
          {client.industry}
        </span>
      </div>
    </GlassPanel>
  );
}

function StatCard({ stat, icon: Icon, index }: { stat: TrustStat; icon: React.ComponentType<{ size?: number; className?: string }>; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref}>
      <GlassPanel className="relative h-full p-6" tilt>
        <CornerBrackets />
        <CircuitTrace />

        <div className="flex items-center justify-between">
          <span className="flex h-10 w-10 items-center justify-center rounded-(--radius-md) border border-glass-border-strong bg-glass shadow-[var(--glow-electric)] [clip-path:polygon(15%_0,100%_0,100%_85%,85%_100%,0_100%,0_15%)]">
            <Icon className="text-electric-soft" size={18} />
          </span>
          <span className="font-mono text-(length:--text-micro) text-faint">
            STAT_{String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-5 flex items-baseline gap-0.5">
          <AnimatedNumber
            value={inView ? stat.value : 0}
            format={(n) => n.toFixed(stat.decimals ?? 0)}
            className="text-(length:--text-h3) font-semibold text-foreground"
          />
          {stat.suffix && (
            <span className="text-(length:--text-h3) font-semibold text-foreground">{stat.suffix}</span>
          )}
        </div>
        <Muted className="mt-1">{stat.label}</Muted>

        <div className="mt-4 h-px w-full overflow-hidden bg-glass-border">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={loopRevealViewport}
            transition={{ ...transition.reveal, duration: 1, delay: index * 0.08 }}
            style={{ transformOrigin: "left" }}
            className="h-full w-full bg-gradient-to-r from-electric to-cyber-soft"
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
            <Eyebrow>Trusted By</Eyebrow>
            <H2 className="mt-4 max-w-xl">Teams who bet on us early.</H2>
          </div>
          <div className="flex items-center gap-2 rounded-(--radius-full) border border-glass-border bg-glass px-4 py-2">
            <LiveDot />
            <span className="font-mono text-(length:--text-micro) uppercase tracking-[0.2em] text-silver">
              Active Client Network
            </span>
          </div>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-10 grid gap-4 sm:grid-cols-3"
        >
          {clients.map((client, index) => (
            <motion.div key={client.name} variants={fadeUp}>
              <ClientCard client={client} index={index} />
            </motion.div>
          ))}
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
