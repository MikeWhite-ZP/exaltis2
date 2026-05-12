import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaSection } from "@/components/marketing/cta";
import { Button } from "@/components/ui/button";
import { Container, SectionHeader } from "@/components/ui/container";
import { ArrowRight, Globe2, Star, Repeat, BookCheck } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Affiliate Network — Verified livery network worldwide",
  description:
    "Send and receive jobs across thousands of trusted affiliates worldwide. Verified, rated, and integrated — no spreadsheets, no email chains.",
  path: "/solutions/affiliate-network",
});

const VALUE = [
  { icon: Globe2, t: "Thousands of verified affiliates", d: "Coverage in every major city worldwide." },
  { icon: Repeat, t: "Farm-in & farm-out, in-platform", d: "One click, full trip lifecycle, no separate channel." },
  { icon: Star, t: "Ratings and payment history", d: "Pick the right affiliate for every ride." },
  { icon: BookCheck, t: "Automated commission", d: "Commission and reconciliation handled for you." },
];

export default function AffiliateNetworkSolutionPage() {
  return (
    <>
      <PageHero
        eyebrow="Affiliate Network"
        title={
          <>
            Send and receive jobs across the <span className="gradient-text">largest verified livery network</span> in the industry.
          </>
        }
        description="Without leaving Exaltis. Verified, rated, and integrated — no spreadsheets, no email chains."
      >
        <Button asChild variant="primary" size="xl">
          <Link href="/contact?topic=affiliate">
            Join the network <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </PageHero>

      <section className="section">
        <Container>
          <SectionHeader eyebrow="Why operators join" title="A network built for operators, not aggregators" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {VALUE.map((v) => (
              <div
                key={v.t}
                className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
          { name: "Affiliate Network", url: "/solutions/affiliate-network" },
        ])}
      />
    </>
  );
}
