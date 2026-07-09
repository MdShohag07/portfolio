"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { spring } from "@/lib/motion";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Replaces the system cursor with a small ring that glides toward the
 * pointer on a spring and swells around anything tagged
 * data-cursor="interactive" (see Button). Disabled entirely on touch
 * devices and under prefers-reduced-motion.
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

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[999] mix-blend-difference"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        animate={{
          width: hovering ? 48 : 16,
          height: hovering ? 48 : 16,
          opacity: hovering ? 0.9 : 1,
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-full bg-white"
      />
    </motion.div>
  );
}
