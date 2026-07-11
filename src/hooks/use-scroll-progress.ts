"use client";

import { useCallback, useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";
import { useLenis } from "lenis/react";

/**
 * Same measurement as useScrollProgressRef, but exposed as a reactive
 * Framer Motion value — for driving CSS/transform props via useTransform
 * instead of an imperative R3F frame loop.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const progress = useMotionValue(0);

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    progress.set(Math.min(1, Math.max(0, -rect.top / rect.height)));
  }, [progress]);

  useLenis(measure);

  useEffect(() => {
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return { ref, progress };
}
