import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { getAllPosts } from "@/lib/blog";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";

export const metadata = buildMetadata({
  title: "Blog · Ground Transportation Insights",
  description:
    "Operator playbooks, AI dispatch deep-dives, and growth strategies for limo, chauffeur, airport transfer, and executive transportation companies.",
  path: "/blog",
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const featured = posts[0];
  const rest = posts.slice(1);

  return (
    <>
      <PageHero
        eyebrow="Exaltis insights"
        title={<>Operator playbooks & <span className="gradient-text">industry intel</span>.</>}
        description="Deep-dives, growth playbooks, and migration guides for serious ground transportation operators."
      />
      <section className="section">
        <Container>
          {featured ? (
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-8 transition hover:-translate-y-0.5 hover:border-primary-300 lg:grid-cols-[1.2fr_1fr] lg:items-center"
            >
              <div>
                {featured.category ? <Badge tone="primary">{featured.category}</Badge> : null}
                <h2 className="mt-4 text-3xl font-semibold tracking-tight">{featured.title}</h2>
                <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
                <div className="mt-5 text-xs text-muted-foreground">
                  {featured.authorName} · {featured.readingTime} min read
                </div>
              </div>
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-gradient-to-br from-primary-100 via-cyan-100 to-fuchsia-100 dark:from-primary-950 dark:via-cyan-950 dark:to-fuchsia-950" />
            </Link>
          ) : null}

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6 transition hover:-translate-y-0.5 hover:border-primary-300"
              >
                <div className="aspect-[5/3] rounded-xl bg-gradient-to-br from-primary-100 via-cyan-100 to-fuchsia-100 dark:from-primary-950 dark:via-cyan-950 dark:to-fuchsia-950" />
                <div className="mt-5 flex items-center gap-2">
                  {p.category ? <Badge tone="primary">{p.category}</Badge> : null}
                  <span className="text-xs text-muted-foreground">{p.readingTime} min read</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <JsonLd data={breadcrumbSchema([{ name: "Home", url: "/" }, { name: "Blog", url: "/blog" }])} />
    </>
  );
}
