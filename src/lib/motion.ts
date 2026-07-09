import type { Transition, Variants } from "framer-motion";

/**
 * Motion principles
 * -----------------
 * Every animation on this site draws from this single palette of curves
 * and durations so the whole experience reads as one coherent motion
 * language instead of a pile of one-off tweens.
 */

export const ease = {
  // Expo-out "reveal" — the default for anything entering the screen.
  out: [0.16, 1, 0.3, 1],
  // Symmetric glide — section-to-section and layout transforms.
  inOut: [0.65, 0, 0.35, 1],
  // Snappy micro-interactions — hover, press, toggles.
  snap: [0.34, 1.56, 0.64, 1],
} as const;

export const duration = {
  micro: 0.15,
  fast: 0.25,
  base: 0.45,
  slow: 0.8,
  cinematic: 1.4,
} as const;

export const spring = {
  soft: { type: "spring", stiffness: 220, damping: 26, mass: 0.9 },
  snappy: { type: "spring", stiffness: 380, damping: 28, mass: 0.7 },
  magnetic: { type: "spring", stiffness: 150, damping: 15, mass: 0.4 },
} as const satisfies Record<string, Transition>;

export const transition = {
  reveal: { duration: duration.slow, ease: ease.out } as Transition,
  glide: { duration: duration.base, ease: ease.inOut } as Transition,
  micro: { duration: duration.micro, ease: ease.out } as Transition,
} as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transition.reveal,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: transition.reveal },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transition.reveal,
  },
};

export const staggerContainer = (stagger = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

/** Shared viewport config for scroll-triggered reveals. */
export const revealViewport = { once: true, margin: "-10% 0px -10% 0px" };
