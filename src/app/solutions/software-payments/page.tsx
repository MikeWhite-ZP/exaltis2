import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { ProductsGrid, GrowRevenue } from "@/components/marketing/feature-grid";
import { CompareTable } from "@/components/marketing/compare-table";
import { PricingSection } from "@/components/marketing/pricing";
import { CtaSection } from "@/components/marketing/cta";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Software & Payments — Complete operating system for livery",
  description:
    "The complete operating system for your business — dispatch, booking, accounting, and integrated card processing with industry-leading rates.",
  path: "/solutions/software-payments",
});

export default function SoftwarePaymentsSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Software & Payments"
        title={
          <>
            The complete <span className="gradient-text">operating system</span> for your livery business.
          </>
        }
        description="Dispatch, booking, the driver app, SMS, and integrated card processing — built to work as one product, priced to scale with your fleet."
      />
      <ProductsGrid />
      <GrowRevenue />
      <CompareTable />
      <PricingSection standalone />
      <CtaSection />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "Software & Payments", url: "/solutions/software-payments" },
        ])}
      />
    </>
  );
}
