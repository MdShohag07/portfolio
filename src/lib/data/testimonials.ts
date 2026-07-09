export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "They rebuilt our dispatch workflow in six weeks and it just worked. No hand-holding, no scope creep — they understood the problem faster than we could explain it.",
    name: "Faisal Al-Rashid",
    role: "Ops Lead, Arrival Logistics Group",
  },
  {
    quote:
      "Every other agency quoted us a template. NOVARA asked why we were still taking bookings over WhatsApp — then built the thing that made that question obsolete.",
    name: "Mariam Al-Sabah",
    role: "Founder, Clean Home Kuwait",
  },
  {
    quote:
      "The brand and the booking system shipped together, on time, and our guests noticed immediately. Direct reservations paid for the project in under four months.",
    name: "Omar Haddad",
    role: "Group Director, The Dining Lounge",
  },
];
