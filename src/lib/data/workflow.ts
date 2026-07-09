export type WorkflowStep = {
  phase: string;
  description: string;
};

export const workflow: WorkflowStep[] = [
  { phase: "Discovery", description: "Understand the real problem, not just the request." },
  { phase: "Research", description: "Competitive landscape, user needs, technical constraints." },
  { phase: "Planning", description: "Scope, timeline, and architecture locked before we build." },
  { phase: "Design", description: "Interface and system design, reviewed with you at each step." },
  { phase: "Prototype", description: "Clickable prototypes to de-risk direction before code." },
  { phase: "Development", description: "Production-grade build, shipped in reviewable increments." },
  { phase: "Testing", description: "Functional, performance, and accessibility passes." },
  { phase: "Deployment", description: "Zero-downtime launch with monitoring in place." },
  { phase: "Maintenance", description: "Ongoing support once it's live in the real world." },
];
