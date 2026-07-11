"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PostCard } from "@/components/blog/post-card";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow, H2 } from "@/components/ui/typography";
import { fadeUp, loopRevealViewport, staggerContainer } from "@/lib/motion";
import { posts } from "@/lib/data/posts";

export function InsightsPreview() {
  return (
    <Section className="border-t border-glass-border">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Latest Insights</Eyebrow>
            <H2 className="mt-4 max-w-xl">Notes from the studio.</H2>
          </div>
          <Link
            href="/blog"
            data-cursor="interactive"
            className="text-(length:--text-small) text-silver transition-colors hover:text-foreground"
          >
            Read the blog →
          </Link>
        </div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={loopRevealViewport}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {posts.slice(0, 3).map((post) => (
            <motion.div key={post.slug} variants={fadeUp}>
              <PostCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}
