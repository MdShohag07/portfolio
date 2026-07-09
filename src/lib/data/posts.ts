export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  gradient: string;
  featured?: boolean;
};

// Metadata for the index/listing pages. Post bodies live as real MDX
// files at src/app/blog/[slug]/page.mdx.
export const posts: Post[] = [
  {
    slug: "why-we-build-fast",
    title: "Why we build fast (and what we refuse to skip)",
    excerpt:
      "Speed is a design constraint, not a corner-cutting excuse. Here's what stays non-negotiable no matter the timeline.",
    category: "Process",
    date: "2026-05-12",
    readTime: "6 min read",
    gradient: "from-electric/40 via-electric-soft/20 to-transparent",
    featured: true,
  },
  {
    slug: "chrome-extensions-are-underrated",
    title: "Chrome extensions are the most underrated product surface",
    excerpt:
      "No app store review, no install friction, direct access to the page context. Why we keep reaching for MV3.",
    category: "Engineering",
    date: "2026-03-02",
    readTime: "5 min read",
    gradient: "from-cyber/40 via-cyber-soft/20 to-transparent",
  },
  {
    slug: "ai-agents-in-production",
    title: "What actually breaks when you put AI agents in production",
    excerpt:
      "Demos are easy. Here's what we've learned shipping agent-driven automation that has to work every time.",
    category: "AI",
    date: "2026-01-18",
    readTime: "8 min read",
    gradient: "from-electric-soft/30 via-cyber/25 to-transparent",
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
