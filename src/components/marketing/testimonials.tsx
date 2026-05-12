import { Container, SectionHeader } from "@/components/ui/container";
import { TESTIMONIALS } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="What operators say"
          title={
            <>
              Trusted by the operators who <span className="gradient-text">run the industry</span>.
            </>
          }
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.author}
              className="relative flex flex-col rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-7"
            >
              <svg
                aria-hidden
                className="h-7 w-7 text-primary-200 dark:text-primary-900/60"
                viewBox="0 0 64 64"
                fill="currentColor"
              >
                <path d="M14 26c0-7.732 6.268-14 14-14v6c-4.418 0-8 3.582-8 8v2h8v16H14V26zM34 26c0-7.732 6.268-14 14-14v6c-4.418 0-8 3.582-8 8v2h8v16H34V26z" />
              </svg>
              <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-slate-200/80 dark:border-white/10 pt-4">
                <div className="font-semibold">{t.author}</div>
                <div className="text-sm text-muted-foreground">
                  {t.role} · {t.company}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
