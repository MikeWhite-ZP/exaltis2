import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Search, BookOpen, MessageCircle, Phone } from "lucide-react";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Help Center",
  description: "Guides, walkthroughs, and answers for Exaltis operators.",
  path: "/help",
});

const TOPICS = [
  { t: "Getting Started", d: "Workspace setup, importing your fleet, your first trip." },
  { t: "Dispatch", d: "Drag-and-drop, statuses, run sheets, closeouts." },
  { t: "Online Booking", d: "Embedding the portal, branding, language packs." },
  { t: "3-in-1 App", d: "Installing for drivers, dispatchers, and passengers." },
  { t: "SMS Notifications", d: "Twilio setup, Android SMS, templates by trip type." },
  { t: "Payments", d: "Authorize, capture, refund, QuickBooks export." },
  { t: "Affiliate Network", d: "Joining, farming jobs, ratings, commission settings." },
  { t: "Account & Billing", d: "Plan changes, invoices, seat management." },
];

export default function HelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Help Center"
        title={<>Answers, fast. <span className="gradient-text">Humans behind them.</span></>}
        description="Search the docs, or chat with a real person — onboarding is included with every plan."
      >
        <div className="mx-auto mt-2 flex max-w-xl items-center gap-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900 p-2 text-left">
          <Search className="ml-2 h-4 w-4 text-muted-foreground" />
          <input
            type="search"
            placeholder="Search guides — e.g. 'farm-out a trip'"
            className="w-full bg-transparent text-sm focus:outline-none"
          />
          <Button size="sm" variant="primary">Search</Button>
        </div>
      </PageHero>

      <section className="section">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TOPICS.map((t) => (
              <div key={t.t} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300">
                  <BookOpen className="h-4.5 w-4.5" />
                </div>
                <h3 className="mt-3 font-semibold">{t.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6">
              <MessageCircle className="h-5 w-5 text-primary-600" />
              <h3 className="mt-3 font-semibold">Chat with support</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                US-based humans on chat. Included with every plan.
              </p>
              <Button asChild variant="outline" size="sm" className="mt-4">
                <Link href="/contact?topic=support">Start a chat</Link>
              </Button>
            </div>
            <div className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6">
              <Phone className="h-5 w-5 text-primary-600" />
              <h3 className="mt-3 font-semibold">Talk to a human</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Enterprise plans include WhatsApp phone and chat support.
              </p>
              <a
                href="tel:+18005551234"
                className="mt-4 inline-flex text-sm font-medium text-primary-600 hover:underline"
              >
                1-800-555-1234
              </a>
            </div>
          </div>
        </Container>
      </section>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Help", url: "/help" }])} />
    </>
  );
}
