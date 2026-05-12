import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Container, SectionHeader } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaSection } from "@/components/marketing/cta";
import { PRODUCTS, type Product } from "@/data/features";

export function ProductTemplate({
  product,
  longCopy,
}: {
  product: Product;
  longCopy: React.ReactNode;
}) {
  const others = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 5);

  return (
    <>
      <PageHero
        eyebrow={product.name}
        title={<>{product.short}.</>}
        description={product.description}
      >
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild variant="primary" size="xl">
            <Link href="/get-started">
              Get started <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="xl">
            <Link href="/contact?topic=demo">Request a demo</Link>
          </Button>
        </div>
      </PageHero>

      <section className="section">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-8">
              <h3 className="text-lg font-semibold">What's included</h3>
              <ul className="mt-6 space-y-4">
                {product.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500/15 text-emerald-600">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm leading-relaxed text-muted-foreground">
                      {b}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="prose prose-slate max-w-none dark:prose-invert [&_h3]:text-xl [&_h3]:font-semibold [&_p]:text-muted-foreground [&_p]:leading-relaxed">
              {longCopy}
            </div>
          </div>
        </Container>
      </section>

      <section className="section bg-slate-50/60 dark:bg-slate-950/40">
        <Container>
          <SectionHeader
            eyebrow="The platform"
            title={
              <>
                One product is a feature.{" "}
                <span className="gradient-text">All six together</span> are a platform.
              </>
            }
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((p) => (
              <Link
                key={p.id}
                href={p.href}
                className="group rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-5 transition hover:-translate-y-0.5 hover:border-primary-300"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300">
                  <p.icon className="h-4.5 w-4.5" />
                </div>
                <div className="mt-3 text-sm font-semibold">{p.name}</div>
                <div className="mt-1 text-xs text-muted-foreground">{p.short}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  );
}
