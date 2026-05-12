import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary-300/40 bg-gradient-to-br from-primary-600 via-primary-700 to-slate-950 px-8 py-16 text-white sm:px-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, rgba(34,211,238,0.4), transparent 40%), radial-gradient(circle at 80% 70%, rgba(139,92,246,0.4), transparent 45%)",
            }}
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
                Ready to run your business{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-300 bg-clip-text text-transparent">
                  from anywhere?
                </span>
              </h2>
              <p className="mt-4 max-w-xl text-base sm:text-lg text-white/80">
                See Exaltis in a 2-hour demo tailored to your fleet — and get a free
                migration plan from your current system.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-white/85">
                <Phone className="h-4 w-4" />
                <a href="tel:+18005551234" className="font-medium underline-offset-4 hover:underline">
                  1-800-555-1234
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Button
                asChild
                size="xl"
                variant="default"
                className="bg-white text-slate-950 hover:bg-slate-100"
              >
                <Link href="/contact?topic=demo">
                  Request a demo <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="xl"
                variant="outline"
                className="border-white/20 bg-white/10 text-white hover:bg-white/15"
              >
                <Link href="/get-started">Start now</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
