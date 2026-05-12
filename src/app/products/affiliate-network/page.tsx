import { buildMetadata } from "@/lib/seo";
import { ProductTemplate } from "@/components/marketing/product-template";
import { PRODUCTS } from "@/data/features";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const PRODUCT = PRODUCTS.find((p) => p.id === "affiliate-network")!;

export const metadata = buildMetadata({
  title: "Affiliate Network — Farm-out & farm-in jobs",
  description:
    "Farm work in and out across the largest verified livery network in the industry — without leaving Exaltis. Verified, rated, integrated.",
  path: PRODUCT.href,
});

export default function AffiliateNetworkPage() {
  return (
    <>
      <ProductTemplate
        product={PRODUCT}
        longCopy={
          <>
            <h3>Farm-in, farm-out, no spreadsheets</h3>
            <p>
              Pricing rides in cities you don't cover — and then sending them by email —
              is a tax on growth. The Exaltis Affiliate Network turns that into a
              one-click farm-out, complete with rate confirmation, vehicle class
              matching, and chauffeur acceptance, in-platform.
            </p>
            <p>
              The flow works both ways: affiliates send rides into your queue at the
              rates you've agreed, the trip lifecycle is shared, and commission and
              reconciliation are automated. Every affiliate is verified, rated, and
              auditable.
            </p>
          </>
        }
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Affiliate Network", url: "/products/affiliate-network" },
        ])}
      />
    </>
  );
}
