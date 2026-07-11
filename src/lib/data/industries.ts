export type Industry = {
  icon: "heart" | "cart" | "cloud" | "home" | "coffee" | "dollar" | "truck" | "book";
  name: string;
};

export const industries: Industry[] = [
  { icon: "heart", name: "Healthcare" },
  { icon: "cart", name: "E-commerce" },
  { icon: "cloud", name: "SaaS" },
  { icon: "home", name: "Real Estate" },
  { icon: "coffee", name: "Restaurants" },
  { icon: "dollar", name: "Finance" },
  { icon: "truck", name: "Logistics" },
  { icon: "book", name: "Education" },
];
