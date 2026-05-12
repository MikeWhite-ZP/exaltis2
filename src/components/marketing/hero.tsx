import Link from "next/link";
import {
  ArrowRight,
  Play,
  Phone,
  MapPin,
  Plane,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HEADLINE_STATS } from "@/data/testimonials";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[720px] bg-radial-fade" />
        <div className="absolute inset-x-0 top-0 h-[720px] grid-bg mask-fade-b opacity-60" />
        <div className="absolute left-1/2 top-32 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-primary-500/20 blur-[120px]" />
      </div>

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
              All The Livery Software You Need
            </span>

            <h1 className="mt-7 text-balance text-4xl sm:text-6xl lg:text-[64px] font-semibold tracking-tight leading-[1.04]">
              Run your black car business{" "}
              <span className="gradient-text">from anywhere</span>, anytime.
            </h1>

            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Exaltis brings dispatch, online booking, payments, the driver app, and your
              affiliate network into one platform — purpose-built for limo, executive sedan,
              and ground transportation operators.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild variant="primary" size="xl">
                <Link href="/get-started">
                  Get Started Now <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link href="/contact?topic=demo">
                  <Play className="h-4 w-4" /> Watch Video
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-end gap-x-10 gap-y-4">
              {HEADLINE_STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <DispatchPeek />
        </div>
      </Container>
    </section>
  );
}

function DispatchPeek() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-[40px] bg-gradient-to-br from-primary-500/20 via-fuchsia-500/10 to-cyan-500/15 blur-3xl" />

      {/* Dispatcher window */}
      <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-slate-950 text-white shadow-[0_30px_100px_-30px_rgba(15,23,42,0.5)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <div className="ml-4 flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-xs text-white/70">
            exaltis.org / dispatch
          </div>
          <div className="ml-auto flex items-center gap-2 text-[11px] text-white/60">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live trip
          </div>
        </div>

        <div className="p-5">
          {/* Trip detail card matching exaltis.org hero hint */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-white/50">
              <span className="font-mono">RES-10421</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-300">
                <span className="h-1 w-1 rounded-full bg-emerald-400" /> ETA 23 min
              </span>
            </div>
            <div className="mt-3 text-base font-semibold">
              JFK Airport → Midtown · The Mark
            </div>
            <div className="mt-1 text-sm text-white/60">
              Wed 7:00 AM · Acme Travel · 2 pax · SUV
            </div>

            <ul className="mt-4 space-y-2 text-[12px]">
              <li className="flex items-center gap-2 text-white/80">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-primary-500/20 text-primary-300">
                  <MapPin className="h-3 w-3" />
                </span>
                Pickup · JFK T4 · curb 2A
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-cyan-500/20 text-cyan-300">
                  <Plane className="h-3 w-3" />
                </span>
                Flight DL402 · landed 06:34 · gate B22
              </li>
              <li className="flex items-center gap-2 text-white/80">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-violet-500/20 text-violet-300">
                  <Phone className="h-3 w-3" />
                </span>
                Driver · M. Reyes · 4.97★
              </li>
            </ul>
          </div>

          {/* Mini status board */}
          <div className="mt-4 grid grid-cols-5 gap-2 text-[10px] uppercase tracking-wider text-white/60">
            {[
              { l: "Unassigned", n: 2, c: "bg-amber-400" },
              { l: "Dispatched", n: 6, c: "bg-primary-400" },
              { l: "En route", n: 4, c: "bg-cyan-400" },
              { l: "POB", n: 3, c: "bg-violet-400" },
              { l: "Closed", n: 8, c: "bg-emerald-400" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-lg border border-white/10 bg-white/[0.03] p-2"
              >
                <div className="flex items-center gap-1.5">
                  <span className={`h-1.5 w-1.5 rounded-full ${s.c}`} />
                  <span>{s.l}</span>
                </div>
                <div className="mt-1 text-base font-semibold text-white">{s.n}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
