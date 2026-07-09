"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";
import { spring } from "@/lib/motion";

/**
 * Same normalized (-1..1) pointer tracking as usePointerRef, but exposed
 * as spring-smoothed Framer Motion values for driving DOM parallax
 * (motion values update outside React render, so this is cheap even
 * with many consumers).
 */
export function useViewportPointer() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, spring.soft);
  const springY = useSpring(y, spring.soft);

  useEffect(() => {
    function onMove(event: PointerEvent) {
      x.set((event.clientX / window.innerWidth) * 2 - 1);
      y.set((event.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return { x: springX, y: springY };
}
