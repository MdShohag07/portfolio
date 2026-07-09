"use client";

import { useEffect, useRef } from "react";
import { useLenis } from "lenis/react";

/**
 * Tracks how far a section has scrolled past the top of the viewport,
 * as a 0..1 ref (0 = section top at viewport top, 1 = section fully
 * scrolled past). Works with Lenis when mounted, and falls back to a
 * native scroll listener when smooth scroll is disabled (reduced motion).
 */
export function useScrollProgressRef<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const progress = useRef(0);

  function measure() {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    progress.current = Math.min(1, Math.max(0, -rect.top / rect.height));
  }

  useLenis(measure);

  useEffect(() => {
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return { ref, progress };
}
