import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Get started with Exaltis",
  description:
    "Get started with Exaltis. See a 2-hour tailored demo, get a free migration plan, and run your business from anywhere — usually live in two weekends.",
  path: "/get-started",
});

const STEPS = [
  "Book a 2-hour tailored demo with a real product specialist",
  "Get a free migration plan from your current system",
  "Import drivers, vehicles, customers, and rate structures",
  "Run real reservations inside a guided sandbox",
  "Cut over — most operators are live in two weekends",
];

export default function GetStartedPage() {
  return (
    <>
      <PageHero
        eyebrow="Get Started"
        title={
          <>
            Live in <span className="gradient-text">two weekends</span>. From anywhere.
          </>
        }
        description="See Exaltis in a 2-hour demo tailored to your fleet, and walk away with a free migration plan."
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="primary" size="xl">
            <Link href="/contact?topic=demo">Request a demo</Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link href="/pricing">See pricing</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-10">
            <h2 className="text-2xl font-semibold">What happens next</h2>
            <ol className="mt-6 space-y-4">
              {STEPS.map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary-600 text-sm font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="pt-1.5 text-base">{s}</span>
                </li>
              ))}
            </ol>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 text-sm">
              {[
                "Unlimited drivers and dispatchers",
                "Branded online booking",
                "iOS & Android native apps",
                "Integrated payments",
                "Affiliate network",
                "US-based human support",
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-muted-foreground">
                  <Check className="h-4 w-4 text-emerald-500" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Get started", url: "/get-started" },
        ])}
      />
    </>
  );
}
