import { buildMetadata } from "@/lib/seo";
import { ProductTemplate } from "@/components/marketing/product-template";
import { PRODUCTS } from "@/data/features";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const PRODUCT = PRODUCTS.find((p) => p.id === "dispatch")!;

export const metadata = buildMetadata({
  title: "Dispatch — Drag-and-drop livery dispatch console",
  description:
    "Real-time, drag-and-drop assignment. Live driver locations, automated alerts, and a full trip lifecycle — built for the way dispatchers actually work.",
  path: PRODUCT.href,
});

export default function DispatchPage() {
  return (
    <>
      <ProductTemplate
        product={PRODUCT}
        longCopy={
          <>
            <h3>Built for the way dispatchers actually work</h3>
            <p>
              Reservations flow into an Unassigned queue, get dragged onto a chauffeur or a
              farm-out partner, and move through the trip lifecycle automatically:
              Dispatched → En route → On location → POB → Done.
            </p>
            <p>
              Live driver locations and ETAs update on the same screen — no second tab,
              no separate map. SLA-risk alerts surface trips that need attention before
              the customer ever feels it.
            </p>
            <p>
              Signed manifests, run sheets, and closeouts flow back into Payments and the
              accounting export, so the trip is done when the trip is done.
            </p>
          </>
        }
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Dispatch", url: "/products/dispatch" },
        ])}
      />
    </>
  );
}
