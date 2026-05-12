import type { Metadata } from "next";
import { SITE, absoluteUrl } from "./utils";

type SeoArgs = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image = "/og/default.svg",
  keywords = [],
  noIndex = false,
}: SeoArgs = {}): Metadata {
  const fullTitle = title
    ? `${title} · ${SITE.name}`
    : `${SITE.name} — AI-Native Limo & Chauffeur SaaS Platform`;
  const desc =
    description ||
    "Exaltis is the AI-native operations and growth platform for limousine, chauffeur, airport transfer, and executive transportation companies. Built by Uion Solutions LLC.";
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(SITE.url),
    title: fullTitle,
    description: desc,
    keywords: [
      "limo software",
      "limousine SaaS",
      "chauffeur dispatch software",
      "airport transfer platform",
      "executive transportation software",
      "fleet management SaaS",
      "AI dispatch",
      "black car software",
      "Exaltis",
      "Uion Solutions",
      ...keywords,
    ],
    alternates: { canonical: url },
    applicationName: SITE.name,
    authors: [{ name: SITE.company, url: SITE.url }],
    creator: SITE.company,
    publisher: SITE.company,
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-snippet": -1,
            "max-image-preview": "large",
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      title: fullTitle,
      description: desc,
      url,
      locale: "en_US",
      images: [{ url: absoluteUrl(image), width: 1200, height: 630, alt: SITE.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [absoluteUrl(image)],
      site: SITE.twitter,
      creator: SITE.twitter,
    },
    category: "technology",
  };
}
