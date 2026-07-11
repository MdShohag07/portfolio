export type ProjectType = {
  id: string;
  label: string;
  base: number;
  description: string;
};

export type Tier = {
  id: string;
  label: string;
  multiplier: number;
  description: string;
  startingAt: string;
  bestFor: string;
};

export type AddOn = {
  id: string;
  label: string;
  price: number;
  description: string;
};

export const projectTypes: ProjectType[] = [
  { id: "website", label: "Marketing Website", base: 8000, description: "Brand site, content, and CMS." },
  { id: "webapp", label: "Web Application", base: 22000, description: "Full-stack product with auth and data." },
  { id: "mobile", label: "Mobile App", base: 28000, description: "Native-feel, cross-platform." },
  { id: "ai", label: "AI Automation", base: 18000, description: "Agents, pipelines, and integrations." },
];

export const tiers: Tier[] = [
  {
    id: "starter",
    label: "Starter",
    multiplier: 1,
    description: "Core scope, single platform.",
    startingAt: "$8,000",
    bestFor: "A focused first version, shipped fast.",
  },
  {
    id: "growth",
    label: "Growth",
    multiplier: 1.6,
    description: "Expanded scope, integrations included.",
    startingAt: "$13,000",
    bestFor: "Scaling a validated product with more moving parts.",
  },
  {
    id: "enterprise",
    label: "Enterprise",
    multiplier: 2.4,
    description: "Compliance, scale, dedicated support.",
    startingAt: "Custom",
    bestFor: "Complex requirements and a dedicated team.",
  },
];

export const addOns: AddOn[] = [
  { id: "seo", label: "SEO & Content", price: 3500, description: "Technical SEO and launch content." },
  { id: "brand", label: "Brand Identity", price: 6000, description: "Logo, visual system, guidelines." },
  { id: "maintenance", label: "Ongoing Maintenance", price: 1500, description: "Monthly retainer, first 3 months." },
  { id: "rush", label: "Rush Delivery", price: 5000, description: "Compressed timeline, priority team." },
];

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "How accurate is the calculator?",
    answer:
      "It's a starting range based on typical scope for each project type. Every quote is refined after a scoping call once we understand your actual requirements.",
  },
  {
    question: "Do you work on fixed price or hourly?",
    answer:
      "Fixed price by default, scoped in phases. We only move to time-and-materials for genuinely open-ended, exploratory work.",
  },
  {
    question: "What's not included in the estimate?",
    answer:
      "Third-party costs — hosting, API usage (e.g. OpenAI/Anthropic tokens), app store fees, and paid licenses — are billed separately at cost.",
  },
  {
    question: "Can we start smaller and expand later?",
    answer:
      "Yes — most engagements start with a Starter-tier core and expand into Growth once the first version is live and validated.",
  },
  {
    question: "What if we already have a design system?",
    answer:
      "We'll build on it rather than replace it. That usually reduces the estimate, since design system time is already accounted for.",
  },
];
