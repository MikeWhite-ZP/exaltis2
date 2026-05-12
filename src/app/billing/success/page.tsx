import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

export const metadata = buildMetadata({
  title: "Welcome aboard",
  description: "Your subscription is active.",
  path: "/billing/success",
  noIndex: true,
});

export default function BillingSuccessPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-10 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-500" />
          <h1 className="mt-5 text-3xl font-semibold tracking-tight">You're in.</h1>
          <p className="mt-3 text-muted-foreground">
            Your Exaltis subscription is active. We just emailed you a receipt and a link
            to your new workspace.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild variant="primary" size="lg">
              <Link href="/signin">Sign in to workspace</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact?topic=onboarding">Book onboarding</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
