"use client";

import { motion } from "framer-motion";
import { GlassPanel } from "@/components/ui/glass-panel";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2, Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { testimonials } from "@/lib/data/testimonials";

const OFFSETS = ["lg:mt-0", "lg:mt-10", "lg:mt-4"];

export function TestimonialsSection() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <Eyebrow>What Clients Say</Eyebrow>
        <H2 className="mt-4 max-w-xl">Don&apos;t take our word for it.</H2>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="mt-14 grid gap-6 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={testimonial.name} variants={fadeUp} className={cn(OFFSETS[index])}>
              <GlassPanel className="h-full p-7">
                <Text className="text-foreground">&ldquo;{testimonial.quote}&rdquo;</Text>
                <div className="mt-6">
                  <Text className="text-foreground">{testimonial.name}</Text>
                  <Muted className="mt-0.5">{testimonial.role}</Muted>
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
