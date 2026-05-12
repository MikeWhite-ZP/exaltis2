import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const metadata = buildMetadata({
  title: "Sign in",
  description: "Sign in to your Exaltis workspace.",
  path: "/signin",
  noIndex: true,
});

export default function SignInPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-10 text-center">
          <div className="flex justify-center"><Logo /></div>
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">Welcome back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your Exaltis workspace.
          </p>
          <form className="mt-8 space-y-3 text-left">
            <label className="text-sm font-medium" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900/40"
              placeholder="you@company.com"
            />
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Send magic link
            </Button>
          </form>
          <p className="mt-6 text-xs text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/get-started" className="font-medium text-foreground hover:underline">
              Start free
            </Link>
          </p>
        </div>
      </Container>
    </section>
  );
}
