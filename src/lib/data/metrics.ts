export type Metric = {
  label: string;
  value: number;
  suffix?: string;
};

export const metrics: Metric[] = [
  { label: "Projects shipped", value: 40, suffix: "+" },
  { label: "Years engineering", value: 3, suffix: "" },
  { label: "Avg. Lighthouse score", value: 98, suffix: "" },
  { label: "Client retention", value: 100, suffix: "%" },
  { label: "Countries served", value: 3, suffix: "" },
  { label: "Avg. weeks to launch", value: 8, suffix: "" },
];
