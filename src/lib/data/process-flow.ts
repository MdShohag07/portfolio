export type ProcessStep = {
  icon: "compass" | "map" | "edit" | "code" | "check" | "play" | "trending";
  phase: string;
  description: string;
};

export const processFlow: ProcessStep[] = [
  { icon: "compass", phase: "Discovery", description: "Understand the real problem, not just the request." },
  { icon: "map", phase: "Strategy", description: "Scope, timeline, and architecture locked before we build." },
  { icon: "edit", phase: "UX/UI", description: "Interface design reviewed with you at every step." },
  { icon: "code", phase: "Development", description: "Production-grade build, shipped in reviewable increments." },
  { icon: "check", phase: "QA", description: "Functional, performance, and accessibility passes." },
  { icon: "play", phase: "Launch", description: "Zero-downtime deployment with monitoring in place." },
  { icon: "trending", phase: "Growth", description: "Iteration and support once it's live in the real world." },
];
