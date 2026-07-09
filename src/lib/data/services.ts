export type Service = {
  name: string;
  description: string;
  category: "Engineering" | "AI" | "Design & Growth";
};

export const services: Service[] = [
  { name: "Software Development", description: "Full-stack products built for scale.", category: "Engineering" },
  { name: "Web Applications", description: "Fast, accessible, production-grade web apps.", category: "Engineering" },
  { name: "Mobile Apps", description: "Native-feel experiences, cross-platform.", category: "Engineering" },
  { name: "Chrome Extensions", description: "Browser-native tools people install.", category: "Engineering" },
  { name: "Custom SaaS", description: "From zero to a billable product.", category: "Engineering" },
  { name: "Enterprise Solutions", description: "Internal tools and systems that scale with headcount.", category: "Engineering" },
  { name: "AI Automation", description: "Agents and pipelines that do the work.", category: "AI" },
  { name: "Cloud & DevOps", description: "Infrastructure that doesn't page you at 3am.", category: "AI" },
  { name: "Brand Identity", description: "Visual systems with a point of view.", category: "Design & Growth" },
  { name: "UI/UX Design", description: "Interfaces engineered as much as designed.", category: "Design & Growth" },
  { name: "SEO", description: "Technical and content SEO that compounds.", category: "Design & Growth" },
  { name: "Digital Marketing", description: "Growth systems tied to actual revenue.", category: "Design & Growth" },
];

export const homepageServices = services.slice(0, 6);
