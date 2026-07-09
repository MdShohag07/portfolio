export type ComparisonRow = {
  label: string;
  normal: string;
  novara: string;
};

export const comparison: ComparisonRow[] = [
  { label: "Timeline", normal: "\"We'll see\"", novara: "Fixed, tracked weekly" },
  { label: "Communication", normal: "Monthly status calls", novara: "Async updates, every build" },
  { label: "Design & engineering", normal: "Handed off between teams", novara: "One team, start to finish" },
  { label: "Code ownership", normal: "Locked to their platform", novara: "You own every line" },
  { label: "Post-launch", normal: "Extra invoice for every fix", novara: "Built to need less fixing" },
];
