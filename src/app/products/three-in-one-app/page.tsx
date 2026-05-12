import { buildMetadata } from "@/lib/seo";
import { ProductTemplate } from "@/components/marketing/product-template";
import { PRODUCTS } from "@/data/features";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const PRODUCT = PRODUCTS.find((p) => p.id === "three-in-one-app")!;

export const metadata = buildMetadata({
  title: "3 Roles in 1 App — Passenger, Driver, Dispatcher",
  description:
    "One white-labeled mobile app that signs in as a rider, a chauffeur, or a back-office dispatcher — same install, three experiences.",
  path: PRODUCT.href,
});

export default function ThreeInOneAppPage() {
  return (
    <>
      <ProductTemplate
        product={PRODUCT}
        longCopy={
          <>
            <h3>One install, three experiences</h3>
            <p>
              Your customers, your chauffeurs, and your back-office dispatchers all use
              the same native iOS and Android app — but each gets the experience that
              fits their role. One brand, one app store listing, three workflows.
            </p>
            <p>
              The chauffeur side is offline-capable so service never breaks in a dead
              zone. The dispatcher side runs the full operations cockpit on a tablet for
              the field. The passenger side handles live tracking, repeat booking, and
              card-on-file checkout.
            </p>
          </>
        }
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "3 Roles in 1 App", url: "/products/three-in-one-app" },
        ])}
      />
    </>
  );
}
