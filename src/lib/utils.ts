import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const SITE = {
  name: "Exaltis",
  legalName: "Exaltis",
  company: "Uion Solutions LLC",
  domain: "exaltis.org",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://exaltis.org",
  tagline:
    "AI-native operations platform for limousine, chauffeur, and executive transportation companies.",
  supportEmail: "hello@exaltis.org",
  twitter: "@exaltis",
};

export function absoluteUrl(path = "/") {
  return `${SITE.url.replace(/\/$/, "")}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatCurrency(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
