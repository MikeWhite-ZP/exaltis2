import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { CtaSection } from "@/components/marketing/cta";
import { getAllPosts, getAllPostSlugs, getPostBySlug, renderMarkdown } from "@/lib/blog";
import { JsonLd, articleSchema, breadcrumbSchema } from "@/lib/schema";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return buildMetadata({ noIndex: true });
  return buildMetadata({
    title: post.seoTitle || post.title,
    description: post.seoDesc || post.excerpt,
    path: `/blog/${post.slug}`,
    image: post.coverImage,
    keywords: post.tags,
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();
  const html = renderMarkdown(post.content);
  const related = getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <>
      <article className="pt-12 sm:pt-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav className="mb-8 text-sm text-muted-foreground">
              <Link href="/blog" className="hover:text-foreground">← All articles</Link>
            </nav>
            <div className="flex flex-wrap items-center gap-2">
              {post.category ? <Badge tone="primary">{post.category}</Badge> : null}
              <span className="text-xs text-muted-foreground">
                {post.publishedAt} · {post.readingTime} min read
              </span>
            </div>
            <h1 className="mt-5 text-balance text-4xl sm:text-5xl font-semibold tracking-tight">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>
            <div className="mt-8 aspect-[16/8] rounded-3xl bg-gradient-to-br from-primary-100 via-cyan-100 to-fuchsia-100 dark:from-primary-950 dark:via-cyan-950 dark:to-fuchsia-950" />
            <div
              className="prose prose-slate mt-12 max-w-none dark:prose-invert [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_p]:mt-5 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_li]:mt-2 [&_li]:text-muted-foreground [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ol]:mt-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_strong]:text-foreground"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div className="mt-14 border-t border-slate-200/80 dark:border-white/10 pt-8 text-sm text-muted-foreground">
              Written by {post.authorName || "Exaltis Editorial"}. Exaltis is provided by Uion
              Solutions LLC.
            </div>
          </div>
        </Container>
      </article>

      {related.length ? (
        <section className="section">
          <Container>
            <h2 className="text-2xl font-semibold tracking-tight">Related reading</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-6 transition hover:-translate-y-0.5 hover:border-primary-300"
                >
                  {p.category ? <Badge tone="primary">{p.category}</Badge> : null}
                  <h3 className="mt-3 font-semibold leading-tight">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CtaSection />

      <JsonLd
        data={articleSchema({
          title: post.title,
          description: post.excerpt,
          slug: post.slug,
          authorName: post.authorName,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
          image: post.coverImage,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
    </>
  );
}
