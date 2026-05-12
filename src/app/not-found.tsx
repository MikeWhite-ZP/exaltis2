import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-600">
            404
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">
            We couldn't find that page.
          </h1>
          <p className="mt-4 text-muted-foreground">
            It may have moved, or the link might be wrong. Let's get you back on the road.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild variant="primary" size="lg">
              <Link href="/">Back home</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact support</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
