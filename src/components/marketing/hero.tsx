import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1.15fr]">
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

          <AdminPortalScreenshot />
        </div>
      </Container>
    </section>
  );
}

function AdminPortalScreenshot() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-[44px] bg-gradient-to-br from-primary-500/20 via-fuchsia-500/10 to-cyan-500/15 blur-3xl" />
      <Image
        src="/screenshots/admin-portal.png"
        alt="Exaltis Admin Portal — Bookings Management dashboard"
        width={1600}
        height={875}
        priority
        sizes="(max-width: 1024px) 100vw, 58vw"
        className="block h-auto w-full rounded-xl border border-slate-200/80 dark:border-white/10 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.35)]"
      />
    </div>
  );
}
