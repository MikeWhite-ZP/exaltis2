import { Check, X } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui/container";
import { COMPARE_LIMO_ANYWHERE } from "@/data/features";

export function CompareTable() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Why operators switch"
          title={
            <>
              Exaltis vs.{" "}
              <span className="gradient-text">legacy limo software</span>
            </>
          }
          description="Built in the AI era, not retrofitted into it. Here's how Exaltis compares to the legacy stack most operators are stuck on."
        />

        <div className="mt-14 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40">
          <table className="w-full text-sm">
            <thead className="bg-slate-50/80 dark:bg-slate-950/40 text-left">
              <tr>
                <th className="px-6 py-4 font-medium">Capability</th>
                <th className="px-6 py-4 font-medium text-primary-700 dark:text-primary-300">
                  Exaltis
                </th>
                <th className="px-6 py-4 font-medium text-muted-foreground">
                  Legacy limo software
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/80 dark:divide-white/5">
              {COMPARE_LIMO_ANYWHERE.map((row) => (
                <tr key={row.feature}>
                  <td className="px-6 py-4 font-medium">{row.feature}</td>
                  <td className="px-6 py-4">
                    <Cell value={row.exaltis} />
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <Cell value={row.legacy} muted />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

function Cell({ value, muted = false }: { value: boolean | string; muted?: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400">
        <Check className="h-4 w-4" /> Included
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center gap-2 text-rose-500/80">
        <X className="h-4 w-4" /> Not available
      </span>
    );
  }
  return <span className={muted ? "" : "text-foreground"}>{value}</span>;
}
