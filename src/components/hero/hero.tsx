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
import { fadeUp, staggerContainer } from "@/lib/motion";
import { useScrollProgressRef } from "@/hooks/use-scroll-progress-ref";
import { useViewportPointer } from "@/hooks/use-viewport-pointer";

export function Hero() {
  const { ref, progress } = useScrollProgressRef<HTMLElement>();
  const pointer = useViewportPointer();

  return (
    <section ref={ref} className="relative flex min-h-svh items-center overflow-hidden bg-void">
      <div className="absolute inset-0">
        <Starfield />
      </div>
      <Atmosphere />
      <div className="absolute inset-0">
        <HeroSceneLazy scrollProgress={progress} />
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
              Digital Engineering Studio
            </Eyebrow>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Display className="mt-6 bg-gradient-to-b from-foreground to-silver bg-clip-text text-transparent">
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
              <Button variant="primary">Start a Project</Button>
            </Link>
            <Link href="/work" data-cursor="interactive">
              <Button variant="secondary">Explore Our Work</Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
