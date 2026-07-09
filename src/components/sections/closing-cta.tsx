"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Eyebrow, H1 } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";

export function ClosingCta() {
  return (
    <Section className="relative overflow-hidden border-t border-glass-border">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[50vh] w-[50vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,124,255,0.16),transparent_70%)]"
      />
      <Container className="relative text-center">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mx-auto max-w-3xl"
        >
          <motion.div variants={fadeUp}>
            <Eyebrow className="mx-auto justify-center before:hidden">Start a Project</Eyebrow>
          </motion.div>
          <motion.div variants={fadeUp}>
            <H1 className="mt-6">Let&apos;s build something that doesn&apos;t look like anything else.</H1>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Link href="/contact" data-cursor="interactive">
              <Button variant="primary">Start a Project</Button>
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
