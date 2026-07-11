import type { Metadata } from "next";
import { pageMetadata } from "@/lib/metadata";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Display, Eyebrow, Lead } from "@/components/ui/typography";
import { FeaturedPost } from "@/components/blog/featured-post";
import { PostCard } from "@/components/blog/post-card";
import { posts } from "@/lib/data/posts";

export const metadata: Metadata = pageMetadata({
  title: "Blog",
  description: "Notes on building software, AI automation, and running a small studio.",
  path: "/blog",
});

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <Section className="pb-0">
        <Container>
          <Eyebrow>Journal</Eyebrow>
          <Display className="mt-6 max-w-3xl">Notes from the studio.</Display>
          <Lead className="mt-6 max-w-xl">
            How we build, what breaks, and what we&apos;d do differently next time.
          </Lead>
        </Container>
      </Section>

      <Section>
        <Container>
          <FeaturedPost post={featured} />
        </Container>
      </Section>

      <Section className="border-t border-glass-border pt-16">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {rest.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
