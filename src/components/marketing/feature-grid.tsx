import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui/container";
import { PRODUCTS, SOLUTIONS, GROW_REVENUE } from "@/data/features";

export function ProductsGrid() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Powerful Products"
          title={
            <>
              One platform. <span className="gradient-text">Every part</span> of your
              operation.
            </>
          }
          description="Six products that work as one — designed specifically for limo, livery, and ground transportation operators of every size."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-7 transition-all hover:-translate-y-0.5 hover:border-primary-300 dark:hover:border-primary-700 hover:shadow-2xl"
            >
              <div className="flex items-start justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-primary-50 to-white dark:from-primary-950/40 dark:to-slate-900 text-primary-700 dark:text-primary-300 ring-1 ring-primary-100 dark:ring-primary-900/30">
                  <p.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <div className="absolute -bottom-12 -right-12 h-40 w-40 rounded-full bg-primary-500/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function SolutionsSplit() {
  return (
    <section className="section bg-slate-50/60 dark:bg-slate-950/40">
      <Container>
        <SectionHeader
          eyebrow="Solutions"
          title={
            <>
              Built for two sides of the <span className="gradient-text">industry</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {SOLUTIONS.map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="group relative overflow-hidden rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-10 transition hover:-translate-y-0.5 hover:border-primary-300"
            >
              <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-primary-500/10 blur-3xl" />
              <h3 className="text-2xl font-semibold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{s.description}</p>
              <div className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-primary-600 dark:text-primary-300">
                {s.cta}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function GrowRevenue() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Grow Your Revenue"
          title={
            <>
              Built to make <span className="gradient-text">every operator</span> more
              profitable.
            </>
          }
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROW_REVENUE.map((b, i) => (
            <div
              key={b.title}
              className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-300">
                0{i + 1}
              </div>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
