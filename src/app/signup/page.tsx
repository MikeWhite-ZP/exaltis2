import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";

export const metadata = buildMetadata({
  title: "Create your Exaltis workspace",
  description: "Create your Exaltis workspace and start your 14-day free trial.",
  path: "/signup",
  noIndex: true,
});

export default function SignUpPage() {
  return (
    <section className="py-24">
      <Container>
        <div className="mx-auto max-w-md rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-10">
          <Logo />
          <h1 className="mt-6 text-2xl font-semibold tracking-tight">
            Create your workspace
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            14-day free trial. No credit card required.
          </p>
          <form className="mt-8 space-y-4">
            <Field name="name" label="Your name" required />
            <Field name="company" label="Company" required />
            <Field name="email" label="Work email" type="email" required />
            <Field name="fleetSize" label="Fleet size (vehicles)" />
            <Button type="submit" variant="primary" size="lg" className="w-full">
              Create workspace
            </Button>
          </form>
          <p className="mt-6 text-xs text-muted-foreground">
            Already a customer?{" "}
            <Link href="/signin" className="font-medium text-foreground hover:underline">
              Sign in
            </Link>
            . Exaltis is provided by Uion Solutions LLC.
          </p>
        </div>
      </Container>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900/40"
      />
    </div>
  );
}
