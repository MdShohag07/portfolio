"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { spring } from "@/lib/motion";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Replaces the system cursor with a Cyberpunk 2077-style HUD reticle: a
 * slow-scanning ring around a center dot that snaps into a target-lock
 * bracket over anything tagged data-cursor="interactive" (see Button).
 * Every stroke carries a dark halo (not a blend mode) so it stays legible
 * over both the void background and the site's own neon accents.
 * Disabled entirely on touch devices and under prefers-reduced-motion.
 */
export function CustomCursor() {
  const isTouch = useMediaQuery("(pointer: coarse)");
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const enabled = !isTouch && !prefersReducedMotion;

  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, spring.snappy);
  const springY = useSpring(y, spring.snappy);

  useEffect(() => {
    if (!enabled) return;

    document.documentElement.classList.add("has-custom-cursor");

    function onMove(event: PointerEvent) {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement;
      setHovering(Boolean(target.closest('[data-cursor="interactive"]')));
    }

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  const haloStroke = "drop-shadow(0 0 1px rgba(3,4,4,0.9)) drop-shadow(0 0 2px rgba(3,4,4,0.7))";

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999]"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      {/* Scanning outer ring — a single tick sweeps continuously, like a radar. */}
      <motion.div
        animate={{ width: hovering ? 52 : 22, height: hovering ? 52 : 22, rotate: 360 }}
        transition={{
          width: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
          height: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
          rotate: { duration: 6, ease: "linear", repeat: Infinity },
        }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          border: `1px solid ${hovering ? "var(--color-neon-yellow)" : "var(--color-neon-pink)"}`,
          boxShadow: `0 0 0 1px rgba(3,4,4,0.85), 0 0 10px 1px ${
            hovering ? "rgba(244,228,9,0.5)" : "rgba(255,43,125,0.5)"
          }`,
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
      >
        <span
          className="absolute left-1/2 top-0 h-1.5 w-px -translate-x-1/2 bg-neon-pink"
          style={{ filter: haloStroke }}
        />
      </motion.div>

      {/* Target-lock brackets — snap in over interactive elements. */}
      <motion.div
        animate={{ opacity: hovering ? 1 : 0, scale: hovering ? 1 : 0.6 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2"
      >
        {[
          "left-0 top-0 border-l border-t",
          "right-0 top-0 border-r border-t",
          "left-0 bottom-0 border-l border-b",
          "right-0 bottom-0 border-r border-b",
        ].map((pos) => (
          <span
            key={pos}
            className={`absolute h-2 w-2 ${pos}`}
            style={{ borderColor: "var(--color-neon-yellow)", filter: haloStroke }}
          />
        ))}
      </motion.div>

      {/* Center dot */}
      <motion.div
        animate={{
          width: hovering ? 3 : 4,
          height: hovering ? 3 : 4,
          backgroundColor: hovering ? "var(--color-neon-pink)" : "var(--color-neon-yellow)",
        }}
        transition={{ duration: 0.2 }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ filter: haloStroke }}
      />
    </motion.div>
  );
}
