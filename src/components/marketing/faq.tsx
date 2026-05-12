import { Container, SectionHeader } from "@/components/ui/container";
import { FAQS } from "@/data/faq";
import { JsonLd, faqSchema } from "@/lib/schema";

export function FaqSection({ items = FAQS, withSchema = true }: { items?: typeof FAQS; withSchema?: boolean }) {
  return (
    <section className="section">
      <Container>
        <SectionHeader
          eyebrow="Frequently asked"
          title="What operators ask before they switch"
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200/80 dark:divide-white/10 rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40">
          {items.map((q) => (
            <details
              key={q.question}
              className="group px-6 py-5 [&[open]>summary>svg]:rotate-45"
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none">
                <span className="text-base font-semibold leading-tight">{q.question}</span>
                <svg
                  viewBox="0 0 24 24"
                  className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-transform"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{q.answer}</p>
            </details>
          ))}
        </div>
      </Container>
      {withSchema ? <JsonLd data={faqSchema(items)} /> : null}
    </section>
  );
}
