"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/data/projects";

export function CaseGallery({ project }: { project: Project }) {
  return (
    <Section className="py-16">
      <Container>
        <Eyebrow>Product</Eyebrow>
        <H2 className="mt-4 max-w-xl">Desktop &amp; mobile.</H2>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-14 grid gap-8 lg:grid-cols-[1fr_320px]"
        >
          {/* Desktop frame */}
          <motion.div variants={fadeUp} className="overflow-hidden rounded-(--radius-lg) border border-glass-border bg-graphite">
            <div className="flex items-center gap-1.5 border-b border-glass-border px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-faint" />
              <span className="h-2.5 w-2.5 rounded-full bg-faint" />
              <span className="h-2.5 w-2.5 rounded-full bg-faint" />
            </div>
            <div className={cn("aspect-[16/10] w-full bg-gradient-to-br", project.gradient)} />
          </motion.div>

          {/* Mobile frame */}
          <motion.div
            variants={fadeUp}
            className="mx-auto w-full max-w-[260px] overflow-hidden rounded-[2rem] border border-glass-border-strong bg-graphite p-2"
          >
            <div className={cn("aspect-[9/19] w-full rounded-[1.5rem] bg-gradient-to-b", project.gradient)} />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}
