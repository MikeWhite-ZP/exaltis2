import { TRUSTED_BY } from "@/data/testimonials";
import { Container } from "@/components/ui/container";

export function TrustedBy() {
  return (
    <section className="border-y border-slate-200/80 dark:border-white/10 bg-white/40 dark:bg-slate-950/40 py-12">
      <Container>
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
          Trusted by operators and partners worldwide
        </p>
        <div className="mt-6 grid grid-cols-2 items-center gap-x-8 gap-y-4 sm:grid-cols-3 lg:grid-cols-6">
          {TRUSTED_BY.map((name) => (
            <div
              key={name}
              className="text-center text-lg font-semibold tracking-tight text-muted-foreground/70"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
