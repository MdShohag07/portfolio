"use client";

import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { spring } from "@/lib/motion";

/**
 * Tracks pointer position relative to an element's center and returns
 * spring-smoothed motion values, clamped by `strength`. Used to give
 * buttons, cards, and cursors a "magnetic" pull toward the pointer.
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.35) {
  const ref = useRef<T>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring.magnetic);
  const springY = useSpring(y, spring.magnetic);

  const onPointerMove = (event: React.PointerEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const onPointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, x: springX, y: springY, onPointerMove, onPointerLeave };
}
