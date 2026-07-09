"use client";

import { ReactLenis } from "lenis/react";
import { useMediaQuery } from "@/hooks/use-media-query";

/**
 * Global buttery smooth scroll. Falls back to native scrolling under
 * prefers-reduced-motion so the site stays fully usable and accessible.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  if (prefersReducedMotion) return <>{children}</>;

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.4,
      }}
    >
      {children}
    </ReactLenis>
  );
}
