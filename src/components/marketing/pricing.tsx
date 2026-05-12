import Link from "next/link";
import { Check } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { PLANS, SETUP_FEE } from "@/data/pricing";

export function PricingSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      className={cn("section", !standalone && "bg-slate-50/60 dark:bg-slate-950/40")}
    >
      <Container>
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Simple plans that <span className="gradient-text">scale with you</span>.
            </>
          }
          description="Three tiers, one clear path. Switch any time, no long-term contracts."
        />

        <p className="mt-6 text-center text-xs text-muted-foreground">
          All plans require a one-time {formatCurrencyExact(SETUP_FEE)} setup fee.
          Enterprise gets 75% off.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className={cn(
                "relative flex flex-col rounded-2xl border bg-white dark:bg-slate-900/60 p-7 transition-all",
                plan.highlight
                  ? "border-primary-300 dark:border-primary-700 shadow-[0_30px_80px_-30px_rgba(63,92,255,0.45)] lg:scale-[1.03]"
                  : "border-slate-200/80 dark:border-white/10",
              )}
            >
              {plan.highlight ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge tone="primary">Most popular</Badge>
                </span>
              ) : null}

              <h3 className="text-lg font-semibold">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.tagline}</p>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-semibold tracking-tight">
                  {formatCurrencyExact(plan.monthly)}
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                + one-time {formatCurrencyExact(SETUP_FEE)} setup fee
              </p>

              <Button
                asChild
                variant={plan.highlight ? "primary" : "outline"}
                size="lg"
                className="mt-7"
              >
                <Link href={plan.ctaHref}>{plan.cta}</Link>
              </Button>

              <ul className="mt-7 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-muted-foreground">
          No long-term contracts. Cancel any time. Provided by Uion Solutions LLC.
        </p>
      </Container>
    </section>
  );
}

function formatCurrencyExact(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: n % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(n);
}
