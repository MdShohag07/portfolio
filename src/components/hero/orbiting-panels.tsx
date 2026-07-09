"use client";

import { motion, useTransform, type MotionValue } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Muted, Text } from "@/components/ui/typography";
import { fadeUp, transition } from "@/lib/motion";
import { cn } from "@/lib/utils";

type PointerMotion = { x: MotionValue<number>; y: MotionValue<number> };

function useParallax({ x, y }: PointerMotion, strength: number) {
  return {
    x: useTransform(x, [-1, 1], [-strength, strength]),
    y: useTransform(y, [-1, 1], [-strength, strength]),
  };
}

function OrbitSlot({
  className,
  style,
  pointer,
  strength,
  delay,
  float,
  children,
}: {
  className: string;
  style?: React.CSSProperties;
  pointer: PointerMotion;
  strength: number;
  delay: number;
  float: string;
  children: React.ReactNode;
}) {
  const parallax = useParallax(pointer, strength);

  return (
    <motion.div
      variants={fadeUp}
      transition={{ ...transition.reveal, delay }}
      style={{ ...style, x: parallax.x, y: parallax.y }}
      className={cn("absolute hidden xl:block", className)}
    >
      <motion.div className={float} style={{ "--orbit-x": "0px", "--orbit-y": "0px" } as React.CSSProperties}>
        {children}
      </motion.div>
    </motion.div>
  );
}

export function OrbitingPanels({ pointer }: { pointer: PointerMotion }) {
  return (
    <>
      <OrbitSlot
        className="left-[6%] top-[22%] w-56"
        pointer={pointer}
        strength={14}
        delay={0.9}
        float="animate-orbit-float"
      >
        <GlassPanel className="p-4" tilt={false}>
          <Muted className="uppercase tracking-[0.2em]">Featured Work</Muted>
          <Text className="mt-1 text-foreground">Arrival Pro</Text>
          <Muted className="mt-0.5">Chrome Extension · 2025</Muted>
        </GlassPanel>
      </OrbitSlot>

      <OrbitSlot
        className="right-[7%] top-[16%] w-48"
        pointer={pointer}
        strength={18}
        delay={1.05}
        float="animate-orbit-float [animation-delay:-2.6s]"
      >
        <GlassPanel className="p-4" tilt={false}>
          <div className="flex items-baseline gap-1">
            <Text className="text-(length:--text-h3) font-semibold text-foreground">99.9%</Text>
          </div>
          <Muted className="mt-0.5">Uptime across shipped products</Muted>
        </GlassPanel>
      </OrbitSlot>

      <OrbitSlot
        className="right-[10%] bottom-[20%] w-52"
        pointer={pointer}
        strength={12}
        delay={1.2}
        float="animate-orbit-float [animation-delay:-4.4s]"
      >
        <GlassPanel className="p-4" tilt={false}>
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-electric-soft shadow-[var(--glow-electric)]" />
            <Muted className="uppercase tracking-[0.2em]">System Status</Muted>
          </div>
          <div className="mt-3 flex items-end gap-1">
            {[6, 10, 5, 12, 8, 14, 7].map((h, i) => (
              <span
                key={i}
                className="w-1 rounded-full bg-gradient-to-t from-electric to-cyber-soft"
                style={{ height: `${h * 2}px` }}
              />
            ))}
          </div>
          <Text className="mt-2 text-foreground">Online</Text>
        </GlassPanel>
      </OrbitSlot>

      <OrbitSlot
        className="left-[9%] bottom-[16%] w-44"
        pointer={pointer}
        strength={16}
        delay={1.35}
        float="animate-orbit-float [animation-delay:-1.2s]"
      >
        <GlassPanel className="p-4" tilt={false}>
          <Muted className="uppercase tracking-[0.2em]">Stack</Muted>
          <Text className="mt-1 text-foreground">Next.js · R3F · AI</Text>
        </GlassPanel>
      </OrbitSlot>
    </>
  );
}
