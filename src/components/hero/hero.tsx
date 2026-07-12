"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Starfield } from "@/components/backgrounds/starfield";
import { Atmosphere } from "@/components/backgrounds/atmosphere";
import { HeroSceneLazy } from "@/components/three/hero-scene-loader";
import { OrbitingPanels } from "./orbiting-panels";
import { ScrollIndicator } from "./scroll-indicator";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Display, Eyebrow } from "@/components/ui/typography";
import { LiveDot } from "@/components/ui/hud";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useScrollProgressRef } from "@/hooks/use-scroll-progress-ref";
import { useViewportPointer } from "@/hooks/use-viewport-pointer";
import { useMediaQuery } from "@/hooks/use-media-query";

export function Hero() {
  const { ref, progress } = useScrollProgressRef<HTMLElement>();
  const pointer = useViewportPointer();
  // The 3D core stays on every device — just rendered at a lighter quality
  // tier on phones (see hero-scene.tsx) instead of being swapped out.
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <section ref={ref} className="relative flex min-h-svh items-center overflow-hidden bg-void">
      <div className="absolute inset-0">
        <Starfield />
      </div>
      <Atmosphere />
      <div className="absolute inset-0">
        <HeroSceneLazy scrollProgress={progress} isMobile={isMobile} />
      </div>
      <OrbitingPanels pointer={pointer} />

      <Container className="relative z-10">
        <motion.div
          variants={staggerContainer(0.12, 0.15)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mx-auto justify-center before:hidden">
              <LiveDot className="bg-neon-pink" glow="shadow-[var(--glow-pink)]" />
              Digital Engineering Studio
            </Eyebrow>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Display className="glitch-hover mt-6 animate-glitch bg-gradient-to-b from-foreground to-silver bg-clip-text text-transparent">
              NOVARA
            </Display>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-(length:--text-h3) font-medium tracking-[-0.01em] text-silver"
          >
            Engineering the Future.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact" data-cursor="interactive">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-neon-yellow to-neon-pink text-void shadow-[var(--glow-yellow)] hover:shadow-[var(--glow-pink)]"
              >
                Start a Project
              </Button>
            </Link>
            <Link href="/work" data-cursor="interactive">
              <Button variant="secondary" className="hover:border-neon-pink/60">
                Explore Our Work
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
