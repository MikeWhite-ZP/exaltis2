import Link from "next/link";
import { ArrowRight, MapPin, Bell, CreditCard, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

const FEATURES = [
  {
    icon: Sparkles,
    title: "Branded with your identity",
    text: "Your colors, your logo, your splash screen. Your customers stay in your world.",
  },
  {
    icon: MapPin,
    title: "Live tracking",
    text: "Riders see their driver on a map and get accurate ETA updates.",
  },
  {
    icon: Bell,
    title: "Smart notifications",
    text: "Pickup, en-route, and arrival alerts via SMS and push.",
  },
  {
    icon: CreditCard,
    title: "Card-on-file checkout",
    text: "Repeat bookings in two taps with stored payment methods.",
  },
];

export function PassengerAppSection() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <PassengerPhoneMockup />

          <div>
            <span className="eyebrow">Passenger Web App</span>
            <h2 className="mt-6 text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              A booking experience your{" "}
              <span className="gradient-text">riders will actually love</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Give your customers the experience they expect from a modern ground
              transportation provider — without ever sending them to a competitor's app.
            </p>

            <ul className="mt-9 space-y-4">
              {FEATURES.map((f) => (
                <li key={f.title} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300">
                    <f.icon className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <div className="font-semibold">{f.title}</div>
                    <div className="text-sm text-muted-foreground">{f.text}</div>
                  </div>
                </li>
              ))}
            </ul>

            <Button asChild variant="primary" size="lg" className="mt-9">
              <Link href="/products/online-booking">
                Tour the passenger app <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PassengerPhoneMockup() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="absolute -inset-10 -z-10 rounded-[64px] bg-gradient-to-br from-primary-500/20 via-fuchsia-500/15 to-cyan-500/15 blur-3xl" />
      <div className="rounded-[40px] border-[10px] border-slate-900 bg-slate-950 p-1 shadow-2xl">
        <div className="rounded-[30px] bg-white overflow-hidden">
          {/* notch */}
          <div className="relative h-7 bg-slate-950">
            <span className="absolute left-1/2 top-2 h-3 w-24 -translate-x-1/2 rounded-full bg-slate-800" />
          </div>

          {/* status / brand */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-500 px-5 pt-6 pb-10 text-white">
            <div className="flex items-center justify-between text-[10px] uppercase tracking-wider opacity-80">
              <span>Northshore Executive</span>
              <span>9:41</span>
            </div>
            <div className="mt-6">
              <div className="text-[11px] uppercase tracking-wider opacity-80">
                Welcome back
              </div>
              <div className="text-2xl font-semibold tracking-tight">Daniela V.</div>
            </div>
          </div>

          {/* booking card */}
          <div className="-mt-7 px-4">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-lg">
              <div className="text-[10px] font-medium uppercase tracking-wider text-primary-600">
                Next ride
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                JFK → The Mark Hotel
              </div>
              <div className="text-xs text-slate-500">
                Wed, Jun 12 · 7:00 AM · SUV
              </div>

              <div className="mt-4 rounded-xl bg-slate-50 p-3">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-slate-500">
                  <span>Driver en route</span>
                  <span className="text-emerald-600">ETA 8m</span>
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-full bg-primary-100 text-primary-700 text-xs font-semibold">
                    MR
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">
                      M. Reyes
                    </div>
                    <div className="text-[10px] text-slate-500">SUV · NY-4421</div>
                  </div>
                </div>
              </div>

              <button className="mt-4 w-full rounded-full bg-slate-900 py-2.5 text-xs font-semibold text-white">
                Track ride
              </button>
            </div>

            {/* quick actions */}
            <div className="mt-3 grid grid-cols-2 gap-2 pb-6 text-[11px]">
              <button className="rounded-xl border border-slate-200 bg-white p-3 text-left">
                <div className="text-slate-500">Repeat</div>
                <div className="font-semibold text-slate-900">Last airport ride</div>
              </button>
              <button className="rounded-xl border border-slate-200 bg-white p-3 text-left">
                <div className="text-slate-500">Quote</div>
                <div className="font-semibold text-slate-900">New booking</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
