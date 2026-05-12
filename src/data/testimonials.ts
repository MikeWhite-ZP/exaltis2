export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

// Testimonials match the real exaltis.org "What operators say" section.
export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "We migrated our entire dispatch operation to Exaltis in two weekends. Our drivers picked up the app the same day, and our reservations team stopped chasing emails.",
    author: "Daniela Vargas",
    role: "COO",
    company: "Northshore Executive Sedan",
  },
  {
    quote:
      "The affiliate network alone paid for the platform in our first quarter. We're farming work in from cities we couldn't even quote before.",
    author: "Marcus Reyes",
    role: "Owner",
    company: "Reyes Black Car Group",
  },
  {
    quote:
      "The passenger app is the first time our riders have stopped asking us to 'just send a Lyft.' That tells you everything.",
    author: "Anika Patel",
    role: "VP Operations",
    company: "Patel Worldwide Chauffeur",
  },
];

// Trust-by names match the real exaltis.org logo strip.
export const TRUSTED_BY = [
  "Granspan",
  "Gridd Up",
  "HQ Worldwide",
  "NLA",
  "LMC Group",
  "ChauffeurLink",
];

// Headline stats — match the real numbers shown above the trust bar.
export const HEADLINE_STATS = [
  { value: "2,500+", label: "Operators" },
  { value: "60M+", label: "Trips dispatched" },
  { value: "99.99%", label: "Platform uptime" },
];
