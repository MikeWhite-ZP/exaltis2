import { buildMetadata } from "@/lib/seo";
import { ProductTemplate } from "@/components/marketing/product-template";
import { PRODUCTS } from "@/data/features";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

const PRODUCT = PRODUCTS.find((p) => p.id === "sms-notifications")!;

export const metadata = buildMetadata({
  title: "SMS Notifications — Two-way alerts and reply handling",
  description:
    "Two-way SMS that keeps riders, drivers, and dispatchers in sync — pickup confirmations, en-route alerts, arrival pings, and reply handling, all from one inbox.",
  path: PRODUCT.href,
});

export default function SmsNotificationsPage() {
  return (
    <>
      <ProductTemplate
        product={PRODUCT}
        longCopy={
          <>
            <h3>Communication that closes the loop</h3>
            <p>
              Every reservation triggers the right messages at the right time. Pickup
              confirmations, en-route pings, and arrival alerts go to the rider. Trip
              assignments and route changes go to the driver. Status updates land back in
              the dispatcher's inbox — threaded by trip.
            </p>
            <p>
              When customers reply, replies route to the dispatcher, not into a black
              hole. Twilio and Android SMS are supported. Templates are configurable per
              trip type and per language.
            </p>
          </>
        }
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "SMS Notifications", url: "/products/sms-notifications" },
        ])}
      />
    </>
  );
}
