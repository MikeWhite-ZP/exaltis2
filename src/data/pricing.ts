export type Plan = {
  id: "core" | "core-plus" | "enterprise";
  name: string;
  tagline: string;
  monthly: number;
  highlight?: boolean;
  cta: string;
  ctaHref: string;
  features: string[];
};

// Real exaltis.org pricing — one-time $199.99 setup fee, monthly thereafter,
// no long-term contracts.
export const SETUP_FEE = 199.99;

export const PLANS: Plan[] = [
  {
    id: "core",
    name: "Core",
    tagline: "The back-office essentials with PWA access for every role.",
    monthly: 129.99,
    cta: "Start with Core",
    ctaHref: "/get-started?plan=core",
    features: [
      "Unlimited Drivers",
      "Unlimited Dispatchers",
      "PWA apps for Driver, Passenger, Dispatcher & Admin",
      "Flexible admin-end design with 7-language & dark / light theme support",
      "Admin access page (no branded public-facing site)",
      "Email support",
    ],
  },
  {
    id: "core-plus",
    name: "Core +",
    tagline: "A branded public front end, native apps, and the affiliate network.",
    monthly: 229.99,
    highlight: true,
    cta: "Start with Core +",
    ctaHref: "/get-started?plan=core-plus",
    features: [
      "Everything in Core",
      "Flexible front-end design with 7-language & dark / light theme support",
      "Online booking portal",
      "iOS & Android multi-tenant Exaltis native app",
      "Affiliate network access",
      "Twilio + Android SMS ability",
      "Email & priority support",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "For growing fleets that need branding, reporting, and priority support.",
    monthly: 399,
    cta: "Start with Enterprise",
    ctaHref: "/get-started?plan=enterprise",
    features: [
      "Everything in Core +",
      "Advanced reporting (coming soon)",
      "White Label your own logo",
      "3-in-1 users app",
      "WhatsApp phone & chat support",
      "Priority feature queue",
      "75% discounted setup fee",
    ],
  },
];

// Plan-by-plan capability matrix (mirrors the marketed tiers on exaltis.org)
export const COMPARE_MATRIX = [
  {
    group: "Core platform",
    rows: [
      { name: "Unlimited Drivers", core: true, "core-plus": true, enterprise: true },
      { name: "Unlimited Dispatchers", core: true, "core-plus": true, enterprise: true },
      { name: "Admin PWA", core: true, "core-plus": true, enterprise: true },
      { name: "Driver, Passenger, Dispatcher PWA", core: true, "core-plus": true, enterprise: true },
      { name: "7-language & dark/light theme", core: "Admin", "core-plus": "Admin + Front-end", enterprise: "All surfaces" },
    ],
  },
  {
    group: "Public-facing & native apps",
    rows: [
      { name: "Branded online booking portal", core: false, "core-plus": true, enterprise: true },
      { name: "iOS & Android native (multi-tenant Exaltis app)", core: false, "core-plus": true, enterprise: true },
      { name: "3-in-1 users app (your own white-labeled native app)", core: false, "core-plus": false, enterprise: true },
      { name: "White Label your own logo", core: false, "core-plus": false, enterprise: true },
    ],
  },
  {
    group: "Network & messaging",
    rows: [
      { name: "Affiliate network access", core: false, "core-plus": true, enterprise: true },
      { name: "Twilio + Android SMS", core: false, "core-plus": true, enterprise: true },
    ],
  },
  {
    group: "Reporting & support",
    rows: [
      { name: "Advanced reporting", core: false, "core-plus": false, enterprise: "Coming soon" },
      { name: "Email support", core: true, "core-plus": true, enterprise: true },
      { name: "Priority support", core: false, "core-plus": true, enterprise: true },
      { name: "WhatsApp phone & chat", core: false, "core-plus": false, enterprise: true },
      { name: "Priority feature queue", core: false, "core-plus": false, enterprise: true },
      { name: "Setup fee", core: "$199.99 one-time", "core-plus": "$199.99 one-time", enterprise: "75% discounted" },
    ],
  },
];
