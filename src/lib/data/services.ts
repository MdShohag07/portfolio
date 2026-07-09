export type Service = {
  name: string;
  description: string;
};

export const services: Service[] = [
  { name: "Web Applications", description: "Full-stack products built for scale." },
  { name: "Mobile Apps", description: "Native-feel experiences, cross-platform." },
  { name: "AI Automation", description: "Agents and pipelines that do the work." },
  { name: "Chrome Extensions", description: "Browser-native tools people install." },
  { name: "Custom SaaS", description: "From zero to a billable product." },
  { name: "Brand & UI/UX", description: "Identity systems and interface design." },
];
