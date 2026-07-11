export type Client = {
  name: string;
  industry: string;
};

export const clients: Client[] = [
  { name: "Arrival Logistics Group", industry: "Logistics" },
  { name: "Clean Home Kuwait", industry: "Home Services" },
  { name: "The Dining Lounge Group", industry: "Hospitality" },
];

export type TrustStat = {
  label: string;
  value: string;
};

export const trustStats: TrustStat[] = [
  { label: "Industries served", value: "6+" },
  { label: "Countries", value: "3" },
  { label: "Repeat client rate", value: "100%" },
  { label: "Avg. project rating", value: "5.0" },
];
