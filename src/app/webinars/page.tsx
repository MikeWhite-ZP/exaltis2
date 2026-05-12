import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Container, SectionHeader } from "@/components/ui/container";
import { CtaSection } from "@/components/marketing/cta";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Video } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Webinars",
  description: "Live and on-demand webinars for limo, black car, and ground transportation operators.",
  path: "/webinars",
});

const UPCOMING = [
  { t: "Migrating from Limo Anywhere in two weekends", date: "May 22, 2026", time: "1:00 PM ET", host: "Daniela Vargas (Northshore Executive)" },
  { t: "Mastering the Affiliate Network: farm-in playbook", date: "Jun 5, 2026", time: "2:00 PM ET", host: "Marcus Reyes (Reyes Black Car Group)" },
  { t: "Closing the books faster with Exaltis Payments", date: "Jun 19, 2026", time: "1:00 PM ET", host: "Exaltis Product" },
];

const ON_DEMAND = [
  { t: "Inside the new Exaltis dispatch board", len: "32 min" },
  { t: "Branded online booking — embed in 10 minutes", len: "18 min" },
  { t: "Passenger app: stop sending your customers to Lyft", len: "26 min" },
  { t: "Setting up SMS notifications for every trip type", len: "21 min" },
];

export default function WebinarsPage() {
  return (
    <>
      <PageHero
        eyebrow="Webinars"
        title={<>Learn from operators who <span className="gradient-text">run the industry</span>.</>}
        description="Live sessions with real operators, plus an on-demand library of product deep-dives."
      />

      <section className="section">
        <Container>
          <SectionHeader eyebrow="Upcoming live sessions" title="Save your seat" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {UPCOMING.map((w) => (
              <div key={w.t} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6">
                <Badge tone="primary">Live</Badge>
                <h3 className="mt-3 text-lg font-semibold leading-tight">{w.t}</h3>
                <div className="mt-3 space-y-1 text-sm text-muted-foreground">
                  <div className="inline-flex items-center gap-2"><Calendar className="h-4 w-4" />{w.date}</div>
                  <div className="inline-flex items-center gap-2"><Clock className="h-4 w-4" />{w.time}</div>
                </div>
                <div className="mt-3 text-xs text-muted-foreground">Hosted by {w.host}</div>
                <Link href="/contact?topic=webinar" className="mt-5 inline-flex text-sm font-medium text-primary-600 hover:underline">
                  Reserve a seat →
                </Link>
              </div>
            ))}
          </div>

          <SectionHeader eyebrow="On demand" title="Library" className="mt-24" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {ON_DEMAND.map((v) => (
              <Link key={v.t} href="/contact?topic=webinar" className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-5 transition hover:border-primary-300">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300">
                    <Video className="h-4 w-4" />
                  </span>
                  <div>
                    <div className="font-semibold leading-tight">{v.t}</div>
                    <div className="text-xs text-muted-foreground">{v.len}</div>
                  </div>
                </div>
                <span className="text-sm text-primary-600">Watch →</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Webinars", url: "/webinars" }])} />
    </>
  );
}
