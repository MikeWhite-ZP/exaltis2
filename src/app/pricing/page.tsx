import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { PricingSection } from "@/components/marketing/pricing";
import { FaqSection } from "@/components/marketing/faq";
import { CtaSection } from "@/components/marketing/cta";
import { Container, SectionHeader } from "@/components/ui/container";
import { COMPARE_MATRIX } from "@/data/pricing";
import { Check, X } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Pricing — Simple plans that scale with you",
  description:
    "Core $129.99/mo. Core+ $229.99/mo. Enterprise $399/mo. One-time $199.99 setup fee. No long-term contracts. Switch any time.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Simple plans that <span className="gradient-text">scale with you</span>.
          </>
        }
        description="Three tiers, one clear path. Switch any time, no long-term contracts. All plans include a one-time $199.99 setup fee."
      />
      <PricingSection standalone />

      <section className="section bg-slate-50/60 dark:bg-slate-950/40">
        <Container>
          <SectionHeader
            eyebrow="Compare plans"
            title="Every capability, side by side"
          />
          <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40">
            <table className="w-full min-w-[800px] text-sm">
              <thead className="bg-slate-50/80 dark:bg-slate-950/40">
                <tr className="text-left">
                  <th className="px-6 py-4 font-medium">Capability</th>
                  <th className="px-6 py-4 font-medium">Core</th>
                  <th className="px-6 py-4 font-medium text-primary-700 dark:text-primary-300">
                    Core +
                  </th>
                  <th className="px-6 py-4 font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_MATRIX.flatMap((g) => [
                  <tr
                    key={`group-${g.group}`}
                    className="bg-slate-50/50 dark:bg-slate-950/30"
                  >
                    <td
                      colSpan={4}
                      className="px-6 py-3 text-xs uppercase tracking-wider font-semibold text-muted-foreground"
                    >
                      {g.group}
                    </td>
                  </tr>,
                  ...g.rows.map((row) => (
                    <tr
                      key={`${g.group}-${row.name}`}
                      className="border-t border-slate-200/60 dark:border-white/5"
                    >
                      <td className="px-6 py-4 font-medium">{row.name}</td>
                      <td className="px-6 py-4">
                        <Cell value={row.core} />
                      </td>
                      <td className="px-6 py-4">
                        <Cell value={row["core-plus"]} />
                      </td>
                      <td className="px-6 py-4">
                        <Cell value={row.enterprise} />
                      </td>
                    </tr>
                  )),
                ])}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <FaqSection />
      <CtaSection />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/pricing" },
        ])}
      />
    </>
  );
}

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <Check className="h-4 w-4 text-emerald-500" />;
  if (value === false) return <X className="h-4 w-4 text-muted-foreground/50" />;
  return <span className="text-sm">{value}</span>;
}
