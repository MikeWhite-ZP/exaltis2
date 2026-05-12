import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { FaqSection } from "@/components/marketing/faq";
import { CtaSection } from "@/components/marketing/cta";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Answers to the most common questions about Exaltis pricing, features, migration, AI dispatch, security, and support.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Frequently asked questions"
        description="Everything operators want to know before they switch to Exaltis."
      />
      <FaqSection />
      <CtaSection />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }])} />
    </>
  );
}
