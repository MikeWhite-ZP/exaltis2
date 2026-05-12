import { Container } from "@/components/ui/container";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-12 sm:pb-24 sm:pt-20">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[420px] bg-radial-fade" />
        <div className="absolute inset-x-0 top-0 h-[420px] grid-bg mask-fade-b opacity-50" />
      </div>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h1 className="mt-6 text-balance text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            {title}
          </h1>
          {description ? (
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          {children ? <div className="mt-8">{children}</div> : null}
        </div>
      </Container>
    </section>
  );
}
