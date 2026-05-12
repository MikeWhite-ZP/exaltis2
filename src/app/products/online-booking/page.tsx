import { buildMetadata } from "@/lib/seo";
import { ProductTemplate } from "@/components/marketing/product-template";
import { PRODUCTS } from "@/data/features";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const PRODUCT = PRODUCTS.find((p) => p.id === "online-booking")!;

export const metadata = buildMetadata({
  title: "Online Booking — Branded reservation portal",
  description:
    "A branded reservation portal that quotes, books, and collects payment 24/7 — embed on any website with a single snippet.",
  path: PRODUCT.href,
});

export default function OnlineBookingPage() {
  return (
    <>
      <ProductTemplate
        product={PRODUCT}
        longCopy={
          <>
            <h3>Turn missed calls into confirmed trips</h3>
            <p>
              A 24/7 branded reservation portal that lives on your own domain and your own
              brand — colors, logo, splash screen. Customers quote, book, and pay without
              ever leaving your world.
            </p>
            <p>
              Embed it on any website with a single snippet. Card-on-file and corporate
              billing are built in. Seven languages and dark/light theme support are
              included so every customer feels at home.
            </p>
          </>
        }
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Online Booking", url: "/products/online-booking" },
        ])}
      />
    </>
  );
}
