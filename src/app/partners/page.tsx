import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaSection } from "@/components/marketing/cta";
import { Container, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Handshake, Globe2, PlugZap, BadgeCheck } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Partners",
  description:
    "Affiliate, technology, and referral partnerships for Exaltis — the all-in-one platform for limo and black car operators.",
  path: "/partners",
});

const TRACKS = [
  { icon: Handshake, t: "Affiliate partners", d: "Join the largest verified livery network. Send and receive jobs in-platform." },
  { icon: Globe2, t: "Regional resellers", d: "Bring Exaltis to operators in your region with our reseller program." },
  { icon: PlugZap, t: "Technology partners", d: "Build on the Exaltis API and ship integrations our customers want." },
  { icon: BadgeCheck, t: "Referral partners", d: "Refer operators and earn recurring revenue per signup." },
];

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title={<>Grow with the <span className="gradient-text">Exaltis ecosystem</span>.</>}
        description="Four ways to partner — pick the one that matches your business."
      />

      <section className="section">
        <Container>
          <SectionHeader eyebrow="Partner tracks" title="How we work together" />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TRACKS.map((p) => (
              <div key={p.t} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-semibold">{p.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild variant="primary" size="lg">
              <Link href="/contact?topic=partnership">Become a partner</Link>
            </Button>
          </div>
        </Container>
      </section>

      <CtaSection />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Partners", url: "/partners" }])} />
    </>
  );
}
