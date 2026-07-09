export type Project = {
  slug: string;
  name: string;
  category: string;
  year: string;
  description: string;
  gradient: string;
};

// Placeholder case studies — real media/copy lands in Phase 3.
export const projects: Project[] = [
  {
    slug: "arrival-pro",
    name: "Arrival Pro",
    category: "Chrome Extension",
    year: "2025",
    description: "A productivity extension that automates arrival workflows for logistics teams.",
    gradient: "from-electric/40 via-electric-soft/20 to-transparent",
  },
  {
    slug: "clean-home-kuwait",
    name: "Clean Home Kuwait",
    category: "Web Application",
    year: "2024",
    description: "A booking and dispatch platform for an on-demand home services company.",
    gradient: "from-cyber/40 via-cyber-soft/20 to-transparent",
  },
  {
    slug: "the-dining-lounge",
    name: "The Dining Lounge",
    category: "Brand & Web",
    year: "2024",
    description: "Full brand identity and reservation experience for a hospitality group.",
    gradient: "from-electric-soft/30 via-cyber/25 to-transparent",
  },
];
