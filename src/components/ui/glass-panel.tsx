"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { spring } from "@/lib/motion";

type GlassPanelProps = Omit<
  React.ComponentProps<"div">,
  "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
> & {
  /** Enables the pointer-driven 3D tilt + light sweep. Disable for dense content panels. */
  tilt?: boolean;
};

/**
 * The base "material" of the interface: a translucent, blurred surface
 * with a hairline border and a light that reacts to the pointer — the
 * glassmorphism + depth primitive every card/panel is built from.
 */
export function GlassPanel({ className, children, tilt = true, ...props }: GlassPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), spring.soft);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), spring.soft);
  const glowX = useTransform(px, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(py, [0, 1], ["0%", "100%"]);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(320px circle at ${gx} ${gy}, rgba(111,168,255,0.14), transparent 65%)`
  );

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || !tilt) return;
    const rect = el.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width);
    py.set((event.clientY - rect.top) / rect.height);
  };

  const onPointerLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={tilt ? { rotateX, rotateY, transformPerspective: 900 } : undefined}
      className={cn(
        "group relative overflow-hidden rounded-(--radius-lg) border border-glass-border bg-glass backdrop-blur-xl",
        className
      )}
      {...props}
    >
      {tilt && (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
      )}
      <div className="pointer-events-none absolute inset-0 rounded-(--radius-lg) ring-1 ring-inset ring-white/[0.04]" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
