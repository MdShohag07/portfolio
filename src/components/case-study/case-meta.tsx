"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Muted, Text } from "@/components/ui/typography";
import { fadeUp, revealViewport, staggerContainer } from "@/lib/motion";
import type { Project } from "@/lib/data/projects";

export function CaseMeta({ project }: { project: Project }) {
  const fields = [
    { label: "Client", value: project.client },
    { label: "Role", value: project.role },
    { label: "Timeline", value: project.timeline },
    { label: "Stack", value: project.stack.join(", ") },
  ];

  return (
    <Section className="py-16">
      <Container>
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={revealViewport}
          className="grid gap-8 border-y border-glass-border py-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {fields.map((field) => (
            <motion.div key={field.label} variants={fadeUp}>
              <Muted className="uppercase tracking-[0.2em]">{field.label}</Muted>
              <Text className="mt-2 text-foreground">{field.value}</Text>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
