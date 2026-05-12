import { Container } from "@/components/ui/container";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <section className="pt-12 pb-24 sm:pt-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-semibold tracking-tight">{title}</h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: {updated}</p>
          <div className="prose prose-slate dark:prose-invert mt-10 max-w-none [&_h2]:mt-12 [&_h2]:text-2xl [&_h2]:font-semibold [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_p]:mt-4 [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_li]:mt-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mt-3">
            {children}
          </div>
        </div>
      </Container>
    </section>
  );
}
