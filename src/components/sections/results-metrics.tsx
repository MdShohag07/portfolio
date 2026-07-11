"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiActivity, FiClock, FiGlobe, FiRepeat, FiTrendingUp, FiZap } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted } from "@/components/ui/typography";
import { AnimatedNumber } from "@/components/ui/animated-number";
import { fadeUp, loopRevealViewport, staggerContainer } from "@/lib/motion";
import { metrics } from "@/lib/data/metrics";
import type { Metric } from "@/lib/data/metrics";

const ICONS = [FiTrendingUp, FiClock, FiActivity, FiRepeat, FiGlobe, FiZap];

function CountUpStat({ metric, icon: Icon }: { metric: Metric; icon: React.ComponentType<{ size?: number; className?: string }> }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });

  return (
    <div ref={ref}>
      <GlassPanel className="h-full p-6" tilt={false}>
        <Icon className="text-cyber-soft" size={18} />
        <div className="mt-4 flex items-baseline gap-0.5">
          <AnimatedNumber
            value={inView ? metric.value : 0}
            className="text-(length:--text-h3) font-semibold text-foreground"
          />
          <span className="text-(length:--text-h3) font-semibold text-foreground">{metric.suffix}</span>
        </div>
        <Muted className="mt-1">{metric.label}</Muted>
      </GlassPanel>
    </div>
  );
}

export function ResultsMetrics() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>Results &amp; Metrics</Eyebrow>
        <H2 className="mt-4 max-w-xl">Numbers, not adjectives.</H2>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-6"
        >
          {metrics.map((metric, index) => (
            <motion.div key={metric.label} variants={fadeUp}>
              <CountUpStat metric={metric} icon={ICONS[index % ICONS.length]} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
