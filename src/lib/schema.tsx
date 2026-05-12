import { SITE, absoluteUrl } from "./utils";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    legalName: `${SITE.name} — provided by ${SITE.company}`,
    url: SITE.url,
    logo: absoluteUrl("/og/logo.svg"),
    sameAs: [
      "https://www.linkedin.com/company/exaltis",
      "https://x.com/exaltis",
      "https://github.com/exaltis",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: SITE.supportEmail,
        availableLanguage: ["en"],
        areaServed: "Worldwide",
      },
    ],
    parentOrganization: {
      "@type": "Organization",
      name: SITE.company,
    },
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    operatingSystem: "Web, iOS, Android",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Transportation Management Software",
    description: SITE.tagline,
    url: SITE.url,
    provider: { "@type": "Organization", name: SITE.company },
    offers: [
      {
        "@type": "Offer",
        name: "Starter",
        price: "149",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "149",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Professional",
        price: "399",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "399",
          priceCurrency: "USD",
          unitText: "MONTH",
        },
      },
      {
        "@type": "Offer",
        name: "Enterprise",
        price: "0",
        priceCurrency: "USD",
        description: "Custom pricing for fleets over 50 vehicles",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "412",
      bestRating: "5",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    publisher: { "@type": "Organization", name: SITE.company },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.url),
    })),
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export function articleSchema(p: {
  title: string;
  description: string;
  slug: string;
  authorName?: string;
  publishedAt?: string;
  updatedAt?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title,
    description: p.description,
    image: absoluteUrl(p.image || "/og/default.svg"),
    author: { "@type": "Person", name: p.authorName || "Exaltis Editorial" },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
      logo: { "@type": "ImageObject", url: absoluteUrl("/og/logo.svg") },
    },
    datePublished: p.publishedAt,
    dateModified: p.updatedAt || p.publishedAt,
    mainEntityOfPage: absoluteUrl(`/blog/${p.slug}`),
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
