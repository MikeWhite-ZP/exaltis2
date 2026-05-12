import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaSection } from "@/components/marketing/cta";
import { Container, SectionHeader } from "@/components/ui/container";
import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Careers at Exaltis",
  description:
    "Help us build the operating system for the global ground transportation industry. Hiring across engineering, design, sales, and customer success.",
  path: "/careers",
});

const ROLES = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", location: "Remote · Americas/EU" },
  { title: "Staff Product Designer", team: "Design", location: "Remote · Worldwide" },
  { title: "Founding AE — East Coast", team: "Sales", location: "New York, NY" },
  { title: "Implementation Architect", team: "Customer Success", location: "Remote · Americas" },
  { title: "Site Reliability Engineer", team: "Infra", location: "Remote · Worldwide" },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Build the <span className="gradient-text">operating system</span> for ground transportation.</>}
        description="We are a small, senior team building software that real operators rely on every minute of every day. Join us."
      />
      <section className="section">
        <Container>
          <SectionHeader eyebrow="Open roles" title="We're hiring across the board" />
          <ul className="mx-auto mt-10 max-w-3xl divide-y divide-slate-200/80 dark:divide-white/10 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40">
            {ROLES.map((r) => (
              <li key={r.title} className="flex items-center justify-between gap-6 px-6 py-5">
                <div>
                  <div className="font-semibold">{r.title}</div>
                  <div className="text-sm text-muted-foreground">
                    {r.team} · {r.location}
                  </div>
                </div>
                <Link
                  href={`/contact?topic=careers&role=${encodeURIComponent(r.title)}`}
                  className="text-sm font-medium text-primary-600 hover:underline"
                >
                  Apply →
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
      <CtaSection />
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Careers", url: "/careers" }])} />
    </>
  );
}
