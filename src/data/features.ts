import {
  LayoutGrid,
  Globe,
  Smartphone,
  MessageSquare,
  CreditCard,
  Share2,
  type LucideIcon,
} from "lucide-react";

export type Product = {
  id:
    | "dispatch"
    | "online-booking"
    | "three-in-one-app"
    | "sms-notifications"
    | "payments"
    | "affiliate-network";
  icon: LucideIcon;
  name: string;
  short: string;
  description: string;
  href: string;
  bullets: string[];
};

// The six products marketed on exaltis.org
export const PRODUCTS: Product[] = [
  {
    id: "dispatch",
    icon: LayoutGrid,
    name: "Dispatch",
    short: "Real-time, drag-and-drop assignment",
    description:
      "Drag-and-drop assignment, live driver locations, automated alerts, and a full trip lifecycle — built for the way dispatchers actually work.",
    href: "/products/dispatch",
    bullets: [
      "Drag-and-drop trip assignment",
      "Live driver locations on map",
      "Automated en-route, arrival, and SLA alerts",
      "Full reservation → quote → confirmed → dispatched → POB → closed lifecycle",
      "Run sheets, manifests, and signed closeouts",
    ],
  },
  {
    id: "online-booking",
    icon: Globe,
    name: "Online Booking",
    short: "Branded reservation portal",
    description:
      "A branded reservation portal that quotes, books, and collects payment 24/7 — embed on any website with a single snippet.",
    href: "/products/online-booking",
    bullets: [
      "Quote, book, and collect payment 24/7",
      "Embed on your website with a single snippet",
      "Your colors, logo, splash screen",
      "7 languages, dark/light theme",
      "Card-on-file and corporate billing built in",
    ],
  },
  {
    id: "three-in-one-app",
    icon: Smartphone,
    name: "3 Roles in 1 App",
    short: "Passenger, Driver, Dispatcher",
    description:
      "One white-labeled mobile app that signs in as a rider, a chauffeur, or a back-office dispatcher — same install, three experiences.",
    href: "/products/three-in-one-app",
    bullets: [
      "iOS & Android, native",
      "Sign in as Passenger, Driver, or Dispatcher",
      "Your branding, your domain, your app stores",
      "Offline-capable for chauffeurs",
      "Push, SMS, and in-app messaging",
    ],
  },
  {
    id: "sms-notifications",
    icon: MessageSquare,
    name: "SMS Notifications",
    short: "Two-way alerts and reply handling",
    description:
      "Two-way SMS that keeps riders, drivers, and dispatchers in sync — pickup confirmations, en-route alerts, arrival pings, and reply handling, all from one inbox.",
    href: "/products/sms-notifications",
    bullets: [
      "Pickup, en-route, and arrival pings",
      "Two-way replies, threaded by trip",
      "Twilio + Android SMS support",
      "Templates by trip type and language",
      "Audit log for every message sent",
    ],
  },
  {
    id: "payments",
    icon: CreditCard,
    name: "Payments",
    short: "Authorize, capture, reconcile",
    description:
      "Authorize, capture, refund, and reconcile in one click. Card-on-file, ACH, and corporate billing with industry-leading processing rates.",
    href: "/products/payments",
    bullets: [
      "One-click authorize, capture, refund",
      "Card-on-file & ACH",
      "Corporate billing and net-terms invoicing",
      "Signature capture and audit trails",
      "QuickBooks-ready exports",
    ],
  },
  {
    id: "affiliate-network",
    icon: Share2,
    name: "Affiliate Network",
    short: "Farm-out & farm-in jobs",
    description:
      "Farm work in and out across the largest verified livery network in the industry — without leaving Exaltis. Verified, rated, integrated.",
    href: "/products/affiliate-network",
    bullets: [
      "Thousands of verified affiliates worldwide",
      "Send and receive jobs in-platform",
      "Ratings, performance, and payment history",
      "No spreadsheets, no email chains",
      "Built-in commission and reconciliation",
    ],
  },
];

// Two-solution split (Software & Payments / Affiliate Network)
export const SOLUTIONS = [
  {
    id: "software-payments",
    title: "Software & Payments",
    description:
      "The complete operating system for your business — dispatch, booking, accounting, and integrated card processing with industry-leading rates.",
    cta: "Explore software",
    href: "/solutions/software-payments",
  },
  {
    id: "affiliate-network",
    title: "Affiliate Network",
    description:
      "Send and receive jobs across thousands of trusted affiliates worldwide. Verified, rated, and integrated — no spreadsheets, no email chains.",
    cta: "Join the network",
    href: "/solutions/affiliate-network",
  },
] as const;

// "Grow Your Revenue" — 6 outcome benefits from the real site
export const GROW_REVENUE = [
  {
    title: "Capture more reservations",
    description:
      "A 24/7 online booking portal turns missed calls into confirmed trips.",
  },
  {
    title: "Save dispatcher hours",
    description:
      "Auto-assignment and smart alerts cut manual coordination by up to 40%.",
  },
  {
    title: "Cut chargebacks",
    description:
      "Card-on-file, signature capture, and audit trails reduce disputes.",
  },
  {
    title: "Delight your riders",
    description:
      "Branded apps, real-time tracking, and proactive ETA alerts.",
  },
  {
    title: "Close the books faster",
    description:
      "QuickBooks-ready exports, automated invoicing, and reconciliation.",
  },
  {
    title: "Real human support",
    description:
      "US-based experts on chat and phone — onboarding included.",
  },
] as const;

export const COMPARE_LIMO_ANYWHERE = [
  { feature: "Drag-and-drop dispatch with live driver pins", exaltis: true, legacy: "Dated UI" },
  { feature: "Branded online booking embeddable in one snippet", exaltis: true, legacy: false },
  { feature: "One native app for Passenger, Driver, and Dispatcher", exaltis: true, legacy: "Three separate apps" },
  { feature: "Two-way SMS with reply handling, in one inbox", exaltis: true, legacy: "Outbound only" },
  { feature: "Industry-leading integrated card processing", exaltis: true, legacy: "Add-on" },
  { feature: "Affiliate network — farm-in/farm-out in-platform", exaltis: true, legacy: false },
  { feature: "7-language admin & front-end, dark/light theme", exaltis: true, legacy: false },
  { feature: "Migration in two weekends, free migration plan", exaltis: true, legacy: false },
  { feature: "No long-term contracts, transparent pricing", exaltis: true, legacy: false },
];
