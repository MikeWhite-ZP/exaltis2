import { buildMetadata } from "@/lib/seo";
import { ProductTemplate } from "@/components/marketing/product-template";
import { PRODUCTS } from "@/data/features";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const PRODUCT = PRODUCTS.find((p) => p.id === "payments")!;

export const metadata = buildMetadata({
  title: "Payments — Authorize, capture, refund, reconcile",
  description:
    "Authorize, capture, refund, and reconcile in one click. Card-on-file, ACH, and corporate billing with industry-leading processing rates.",
  path: PRODUCT.href,
});

export default function PaymentsPage() {
  return (
    <>
      <ProductTemplate
        product={PRODUCT}
        longCopy={
          <>
            <h3>The money side of the business, simplified</h3>
            <p>
              Authorize cards on quote, capture on trip start, and reconcile against the
              closeout — all in one click. Refunds, partial refunds, and chargebacks are
              handled in-app with full audit trails.
            </p>
            <p>
              Card-on-file and ACH speed repeat bookings. Corporate billing supports
              net-terms invoicing and cost-center splits. QuickBooks-ready exports close
              the loop with your accountant.
            </p>
          </>
        }
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Payments", url: "/products/payments" },
        ])}
      />
    </>
  );
}
