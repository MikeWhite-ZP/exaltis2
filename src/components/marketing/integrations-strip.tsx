import Link from "next/link";
import { Container, SectionHeader } from "@/components/ui/container";
import { INTEGRATIONS } from "@/data/integrations";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function IntegrationsStrip() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Plays well with everyone"
          title={
            <>
              Connect the tools that{" "}
              <span className="gradient-text">already run your business</span>
            </>
          }
          description="From Stripe and QuickBooks to Salesforce and Snowflake — Exaltis fits the stack you already love. Pre-built, supported, and battle-tested."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {INTEGRATIONS.slice(0, 12).map((i) => (
            <div
              key={i.name}
              className="group rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-5 text-center transition hover:-translate-y-0.5 hover:border-primary-300 dark:hover:border-primary-700"
            >
              <div className="mx-auto grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary-50 to-white dark:from-primary-950/40 dark:to-slate-900 text-primary-700 dark:text-primary-300 ring-1 ring-primary-100 dark:ring-primary-900/30 font-semibold">
                {i.name.charAt(0)}
              </div>
              <div className="mt-3 text-sm font-medium">{i.name}</div>
              <div className="mt-1 text-[11px] text-muted-foreground">{i.category}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/integrations">
              Browse all integrations <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
