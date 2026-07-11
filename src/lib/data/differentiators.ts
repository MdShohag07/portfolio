export type Differentiator = {
  icon: "target" | "zap" | "shield" | "cpu" | "search" | "layers" | "headphones";
  title: string;
  description: string;
};

export const differentiators: Differentiator[] = [
  {
    icon: "target",
    title: "Pixel-perfect design",
    description: "Every interface reviewed against the original design at every breakpoint — no approximations.",
  },
  {
    icon: "zap",
    title: "Fast delivery",
    description: "Fixed timelines, tracked weekly. We build in reviewable increments so nothing ships as a surprise.",
  },
  {
    icon: "shield",
    title: "Future-proof architecture",
    description: "Code built to outlast the next framework cycle — typed, tested, and documented as we go.",
  },
  {
    icon: "cpu",
    title: "AI-first workflows",
    description: "Agents and automation built into the product itself, not bolted on as a demo feature.",
  },
  {
    icon: "search",
    title: "SEO optimized",
    description: "Structured data, Core Web Vitals, and semantic markup shipped by default, not as a phase two.",
  },
  {
    icon: "layers",
    title: "Scalable code",
    description: "Architecture that handles 10x the load without a rewrite — we plan for growth from day one.",
  },
  {
    icon: "headphones",
    title: "Dedicated support",
    description: "Direct access to the team that built it — no ticket queue between you and an answer.",
  },
];
