import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { ContactForm } from "@/components/marketing/contact-form";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Contact Exaltis Sales & Support",
  description:
    "Talk to a product specialist, request a demo, or get sales help. We typically reply within 2 business hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title={<>Let's <span className="gradient-text">talk transportation</span>.</>}
        description="Whether you want a demo, a migration plan, or a procurement-ready quote — we'd love to hear from you."
      />
      <section className="section">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
            <ContactForm />
            <div className="space-y-6">
              <InfoCard title="Sales" body="For fleets of any size — schedule a 20-minute call and walk away with a tailored migration plan." email="sales@exaltis.org" />
              <InfoCard title="Support" body="Existing customers: 24/7 support on Professional and Enterprise, 12/5 on Starter." email="support@exaltis.org" />
              <InfoCard title="Partnerships" body="Affiliate networks, OEMs, and integration partners — let's build together." email="partners@exaltis.org" />
              <InfoCard title="Press" body="For press, analyst, and speaking inquiries." email="press@exaltis.org" />
            </div>
          </div>
        </Container>
      </section>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])} />
    </>
  );
}

function InfoCard({ title, body, email }: { title: string; body: string; email: string }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{body}</p>
      <a href={`mailto:${email}`} className="mt-3 inline-block text-sm font-medium text-primary-600 hover:underline">
        {email}
      </a>
    </div>
  );
}
