export type Service = {
  name: string;
  description: string;
  category: "Engineering" | "AI" | "Design & Growth";
  icon: "code" | "globe" | "smartphone" | "box" | "layers" | "shield" | "cpu" | "server" | "award" | "edit" | "search" | "trending";
  audience: string;
  outcome: string;
};

export const services: Service[] = [
  {
    name: "Software Development",
    description: "Full-stack products built for scale.",
    category: "Engineering",
    icon: "code",
    audience: "Founders and teams building a core product",
    outcome: "A production system you can hand to any engineer",
  },
  {
    name: "Web Applications",
    description: "Fast, accessible, production-grade web apps.",
    category: "Engineering",
    icon: "globe",
    audience: "Businesses replacing spreadsheets or legacy portals",
    outcome: "A fast, accessible app your team actually wants to use",
  },
  {
    name: "Mobile Apps",
    description: "Native-feel experiences, cross-platform.",
    category: "Engineering",
    icon: "smartphone",
    audience: "Products that need to live on a home screen",
    outcome: "One codebase shipping to iOS and Android alike",
  },
  {
    name: "Chrome Extensions",
    description: "Browser-native tools people install.",
    category: "Engineering",
    icon: "box",
    audience: "Workflows that live inside the browser tab",
    outcome: "A tool with zero install friction and direct page access",
  },
  {
    name: "Custom SaaS",
    description: "From zero to a billable product.",
    category: "Engineering",
    icon: "layers",
    audience: "Founders turning an idea into a subscription business",
    outcome: "A billable, multi-tenant product ready for your first customer",
  },
  {
    name: "Enterprise Solutions",
    description: "Internal tools and systems that scale with headcount.",
    category: "Engineering",
    icon: "shield",
    audience: "Teams outgrowing manual processes and spreadsheets",
    outcome: "Internal systems that scale with headcount, not against it",
  },
  {
    name: "AI Automation",
    description: "Agents and pipelines that do the work.",
    category: "AI",
    icon: "cpu",
    audience: "Teams drowning in repetitive, rules-based work",
    outcome: "Agents and pipelines that do the work while you sleep",
  },
  {
    name: "Cloud & DevOps",
    description: "Infrastructure that doesn't page you at 3am.",
    category: "AI",
    icon: "server",
    audience: "Products outgrowing a single server or manual deploys",
    outcome: "Infrastructure that scales quietly and never pages you at 3am",
  },
  {
    name: "Brand Identity",
    description: "Visual systems with a point of view.",
    category: "Design & Growth",
    icon: "award",
    audience: "Companies that look like everyone else in their category",
    outcome: "A visual system with a point of view, built to scale across every surface",
  },
  {
    name: "UI/UX Design",
    description: "Interfaces engineered as much as designed.",
    category: "Design & Growth",
    icon: "edit",
    audience: "Products where usability is the actual differentiator",
    outcome: "Interfaces engineered for conversion, not just aesthetics",
  },
  {
    name: "SEO",
    description: "Technical and content SEO that compounds.",
    category: "Design & Growth",
    icon: "search",
    audience: "Sites relying on paid traffic that should be organic",
    outcome: "Technical and content SEO that compounds month over month",
  },
  {
    name: "Digital Marketing",
    description: "Growth systems tied to actual revenue.",
    category: "Design & Growth",
    icon: "trending",
    audience: "Teams that need growth tied to revenue, not vanity metrics",
    outcome: "Growth systems tied to pipeline and revenue, not impressions",
  },
];

const HOMEPAGE_SERVICE_NAMES = [
  "Software Development",
  "AI Automation",
  "Mobile Apps",
  "Custom SaaS",
  "UI/UX Design",
  "Digital Marketing",
];

export const homepageServices = HOMEPAGE_SERVICE_NAMES.map(
  (name) => services.find((service) => service.name === name)!
);
