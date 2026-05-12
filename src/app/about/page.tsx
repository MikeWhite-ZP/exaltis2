import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaSection } from "@/components/marketing/cta";
import { Container, SectionHeader } from "@/components/ui/container";
import { SITE } from "@/lib/utils";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "About Exaltis",
  description:
    "Exaltis is an AI-native SaaS platform for the global ground transportation industry, built and provided by Uion Solutions LLC.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Exaltis"
        title={<>We are building the <span className="gradient-text">operating system</span> for ground transportation.</>}
        description="Exaltis is a SaaS platform purpose-built for limousine, chauffeur, airport transfer, executive transportation, shuttle, and fleet operators. We replace patchwork legacy software with one elegant, AI-native product."
      />

      <section className="section">
        <Container>
          <div className="mx-auto max-w-3xl space-y-8 text-lg leading-relaxed text-muted-foreground">
            <p>
              The ground transportation industry runs on software designed in another era. For
              the last fifteen years, operators have stitched together a dispatch tool, a
              second booking site, a third spreadsheet, a fourth driver app, a fifth billing
              system — and somehow made it work.
            </p>
            <p>
              We did not believe it had to stay that way. So in 2023, a small group of
              operators, dispatchers, and engineers got together at{" "}
              <span className="font-semibold text-foreground">{SITE.company}</span> and asked
              one question: what would the operating system for a modern ground transportation
              company look like if you designed it from scratch, with AI at the center?
            </p>
            <p>
              <span className="font-semibold text-foreground">Exaltis</span> is the answer.
              One product. AI-native. Map-first. Beautiful. Built for the next decade — and
              for the operators who refuse to settle.
            </p>
          </div>

          <SectionHeader
            eyebrow="What we believe"
            title="Operating principles"
            className="mt-24"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: "Operators first", d: "Every decision is judged by whether it helps real operators run faster, safer, and more profitably." },
              { t: "AI must be explainable", d: "Our AI surfaces reasons, not just answers. Dispatchers stay in control — always." },
              { t: "Speed is a feature", d: "If it's not fast, it's broken. We measure quote latency, dispatch latency, and load time obsessively." },
              { t: "Open beats closed", d: "Open API, open data export, no walled gardens. Your data, your platform, your terms." },
              { t: "Enterprise without enterprise pain", d: "SOC 2, SSO, and procurement-grade controls — without months-long sales cycles." },
              { t: "Hire for craft", d: "We hire designers, engineers, and operators who care about details most people will never notice." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6">
                <h3 className="text-lg font-semibold">{b.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-10">
            <h2 className="text-2xl font-semibold">Provided by Uion Solutions LLC</h2>
            <p className="mt-3 text-muted-foreground">
              Exaltis is a SaaS product designed, built, and operated by Uion Solutions LLC —
              a software company focused on AI-native enterprise platforms for the
              transportation industry. We are a privately held, customer-funded company.
            </p>
          </div>
        </Container>
      </section>

      <CtaSection />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])} />
    </>
  );
}
