export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  client: string;
  role: string;
  timeline: string;
  summary: string;
  gradient: string;
  stack: string[];
  problem: string;
  solution: string;
  result: string;
  metrics: { label: string; value: string }[];
  process: { phase: string; description: string }[];
};

// Placeholder case studies — real media/copy swap in once the client
// supplies it. Structure and narrative shape are the real deliverable
// for Phase 3; the words themselves are illustrative.
export const projects: Project[] = [
  {
    slug: "arrival-pro",
    name: "Arrival Pro",
    category: "Chrome Extension",
    year: "2025",
    client: "Arrival Logistics Group",
    role: "Product design & engineering",
    timeline: "6 weeks",
    summary: "A productivity extension that automates arrival workflows for logistics teams.",
    gradient: "from-electric/40 via-electric-soft/20 to-transparent",
    stack: ["React", "TypeScript", "Chrome MV3", "Node", "PostgreSQL"],
    problem:
      "Dispatch teams were manually copying arrival data between four disconnected systems, losing roughly two hours a day to re-entry and transcription errors.",
    solution:
      "We built a Chrome extension that reads context from the active tab, auto-fills arrival records across every connected system, and flags mismatches before they become disputes.",
    result:
      "Dispatch teams cut manual entry time by 78% in the first month, with data-entry disputes dropping to near zero.",
    metrics: [
      { label: "Manual entry time saved", value: "78%" },
      { label: "Active daily users", value: "1,200+" },
      { label: "Install-to-activation", value: "94%" },
    ],
    process: [
      { phase: "Discovery", description: "Shadowed dispatch teams to map the real workflow, not the documented one." },
      { phase: "Prototype", description: "Clickable extension prototype tested against live tab contexts within a week." },
      { phase: "Build", description: "MV3 extension with a background sync service and conflict detection." },
      { phase: "Launch", description: "Rolled out to three regional teams, then company-wide over four weeks." },
    ],
  },
  {
    slug: "clean-home-kuwait",
    name: "Clean Home Kuwait",
    category: "Web Application",
    year: "2024",
    client: "Clean Home Kuwait",
    role: "Full-stack product build",
    timeline: "10 weeks",
    summary: "A booking and dispatch platform for an on-demand home services company.",
    gradient: "from-cyber/40 via-cyber-soft/20 to-transparent",
    stack: ["Next.js", "PostgreSQL", "Stripe", "Twilio", "Tailwind"],
    problem:
      "Bookings were taken over WhatsApp and phone calls, with no way to track technician availability, leading to double-bookings and no-shows during peak demand.",
    solution:
      "We designed and built a booking platform with real-time technician availability, automated SMS confirmations, and a dispatcher dashboard for same-day rescheduling.",
    result:
      "Double-bookings dropped to zero and the team scaled from 8 to 30 technicians without adding dispatch headcount.",
    metrics: [
      { label: "Double-bookings", value: "0" },
      { label: "Technicians scaled", value: "8 → 30" },
      { label: "Avg. booking time", value: "-64%" },
    ],
    process: [
      { phase: "Discovery", description: "Mapped the existing WhatsApp-driven booking flow end to end." },
      { phase: "Design", description: "Dispatcher-first dashboard design, customer booking flow second." },
      { phase: "Build", description: "Real-time availability engine with Twilio-driven confirmations." },
      { phase: "Launch", description: "Phased rollout alongside the existing WhatsApp flow, then full cutover." },
    ],
  },
  {
    slug: "the-dining-lounge",
    name: "The Dining Lounge",
    category: "Brand & Web",
    year: "2024",
    client: "The Dining Lounge Group",
    role: "Brand identity & web build",
    timeline: "8 weeks",
    summary: "Full brand identity and reservation experience for a hospitality group.",
    gradient: "from-electric-soft/30 via-cyber/25 to-transparent",
    stack: ["Next.js", "Sanity CMS", "Framer Motion", "Tailwind"],
    problem:
      "Three restaurant concepts under one group shared no visual identity and relied on third-party reservation apps that took a cut of every booking.",
    solution:
      "A cohesive brand system across all three concepts, paired with a direct-booking web experience that replaced third-party reservation fees entirely.",
    result:
      "Direct reservations now account for 85% of bookings, saving the group an estimated $60k a year in platform fees.",
    metrics: [
      { label: "Direct bookings", value: "85%" },
      { label: "Platform fees saved", value: "$60k/yr" },
      { label: "Concepts unified", value: "3" },
    ],
    process: [
      { phase: "Research", description: "Audited all three concepts' existing brand assets and guest feedback." },
      { phase: "Identity", description: "Unified visual system flexible enough for three distinct dining concepts." },
      { phase: "Build", description: "CMS-driven site with a direct reservation flow and table management." },
      { phase: "Launch", description: "Migrated guests off third-party apps over a single tasting-season." },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
