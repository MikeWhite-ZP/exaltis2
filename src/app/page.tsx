import { Hero } from "@/components/marketing/hero";
import { TrustedBy } from "@/components/marketing/trusted-by";
import {
  ProductsGrid,
  SolutionsSplit,
  GrowRevenue,
} from "@/components/marketing/feature-grid";
import { CompareTable } from "@/components/marketing/compare-table";
import { PassengerAppSection } from "@/components/marketing/passenger-app";
import { Testimonials } from "@/components/marketing/testimonials";
import { PricingSection } from "@/components/marketing/pricing";
import { FaqSection } from "@/components/marketing/faq";
import { CtaSection } from "@/components/marketing/cta";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "All-in-one limo & black car management software",
  description:
    "Exaltis is the all-in-one platform to run your limo, black car, and ground transportation business — dispatch, booking, driver app, payments and more, from anywhere. Provided by Uion Solutions LLC.",
  path: "/",
  keywords: [
    "limo software",
    "black car software",
    "livery dispatch",
    "online booking limo",
    "limo affiliate network",
    "executive sedan software",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <ProductsGrid />
      <SolutionsSplit />
      <GrowRevenue />
      <PassengerAppSection />
      <CompareTable />
      <Testimonials />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}
