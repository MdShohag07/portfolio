export type ConceptProject = {
  name: string;
  category: string;
  summary: string;
  gradient: string;
};

// Concept pieces shown alongside the three real case studies in the
// homepage gallery — illustrative capability showcases, not client work.
// They route to /work rather than a fabricated case-study page.
export const conceptProjects: ConceptProject[] = [
  {
    name: "Healthcare Portal",
    category: "Healthcare · Web App",
    summary: "Patient scheduling and records access for a multi-clinic network.",
    gradient: "from-electric/35 via-cyber-soft/15 to-transparent",
  },
  {
    name: "Fintech Dashboard",
    category: "Finance · SaaS",
    summary: "Real-time portfolio analytics for a boutique trading desk.",
    gradient: "from-cyber/35 via-electric-soft/15 to-transparent",
  },
  {
    name: "EduTrack",
    category: "Education · SaaS",
    summary: "Cohort-based learning platform with live progress tracking.",
    gradient: "from-electric-soft/30 via-cyber-soft/20 to-transparent",
  },
  {
    name: "PropertyPulse",
    category: "Real Estate · Web App",
    summary: "Listing and CRM platform built for a regional brokerage.",
    gradient: "from-cyber-soft/30 via-electric/20 to-transparent",
  },
  {
    name: "StyleSync",
    category: "E-commerce · AI",
    summary: "AI-driven styling recommendations for a fashion retailer.",
    gradient: "from-electric/30 via-cyber/25 to-transparent",
  },
  {
    name: "LogiChain",
    category: "Logistics · AI Automation",
    summary: "Autonomous routing agent for a regional freight network.",
    gradient: "from-cyber/30 via-electric-soft/20 to-transparent",
  },
  {
    name: "FitForge",
    category: "Health & Fitness · Mobile App",
    summary: "Adaptive coaching plans that adjust to daily performance.",
    gradient: "from-electric-soft/25 via-cyber/20 to-transparent",
  },
];
