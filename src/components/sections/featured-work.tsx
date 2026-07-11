"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, H3, Muted, Text } from "@/components/ui/typography";
import { fadeUp, loopRevealViewport, staggerContainer } from "@/lib/motion";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedWork() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Featured Case Studies</Eyebrow>
            <H2 className="mt-4 max-w-xl">Projects that speak for themselves.</H2>
          </div>
          <Link
            href="/work"
            data-cursor="interactive"
            className="text-(length:--text-small) text-silver transition-colors hover:text-foreground"
          >
            View all work →
          </Link>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.slug}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={loopRevealViewport}
            >
              <Link href={`/work/${project.slug}`} data-cursor="interactive" className="block">
                <GlassPanel className="overflow-hidden" tilt={false}>
                  <div
                    className={cn(
                      "grid gap-0 lg:grid-cols-2",
                      index % 2 === 1 && "lg:[&>*:first-child]:order-2"
                    )}
                  >
                    <div
                      className={cn(
                        "aspect-[4/3] w-full bg-gradient-to-br lg:aspect-auto lg:min-h-[420px]",
                        project.gradient
                      )}
                    />

                    <div className="flex flex-col p-8 lg:p-12">
                      <div className="flex items-center justify-between gap-4">
                        <Muted className="uppercase tracking-[0.2em]">
                          {project.category} · {project.year}
                        </Muted>
                        <FiArrowUpRight
                          className="shrink-0 text-electric-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                          size={20}
                        />
                      </div>

                      <H3 className="mt-3 text-foreground">{project.name}</H3>
                      <Text className="mt-3">{project.summary}</Text>

                      <motion.div
                        variants={staggerContainer(0.06)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={loopRevealViewport}
                        className="mt-8 space-y-5"
                      >
                        <motion.div variants={fadeUp}>
                          <Muted className="uppercase tracking-[0.2em] text-electric-soft">Problem</Muted>
                          <Text className="mt-1.5">{project.problem}</Text>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                          <Muted className="uppercase tracking-[0.2em] text-electric-soft">Solution</Muted>
                          <Text className="mt-1.5">{project.solution}</Text>
                        </motion.div>
                        <motion.div variants={fadeUp}>
                          <Muted className="uppercase tracking-[0.2em] text-electric-soft">Result</Muted>
                          <Text className="mt-1.5">{project.result}</Text>
                        </motion.div>
                      </motion.div>

                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-(--radius-full) border border-glass-border bg-glass px-3 py-1 text-(length:--text-micro) text-silver"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </GlassPanel>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
