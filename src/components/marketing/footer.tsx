import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { SITE } from "@/lib/utils";

const COLS = [
  {
    title: "Products & Solutions",
    links: [
      { href: "/products/dispatch", label: "Dispatch" },
      { href: "/products/online-booking", label: "Online Booking" },
      { href: "/products/three-in-one-app", label: "3 Roles in 1 App" },
      { href: "/products/sms-notifications", label: "SMS Notifications" },
      { href: "/products/payments", label: "Payments" },
      { href: "/products/affiliate-network", label: "Affiliate Network" },
    ],
  },
  {
    title: "Learn More",
    links: [
      { href: "/pricing", label: "Pricing" },
      { href: "/blog", label: "Blog" },
      { href: "/webinars", label: "Webinars" },
      { href: "/about", label: "About" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/careers", label: "Careers" },
      { href: "/partners", label: "Partners" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Need Help",
    links: [
      { href: "/contact?topic=demo", label: "Request Demo" },
      { href: "/get-started", label: "Sign Up" },
      { href: "/signin", label: "Log In" },
      { href: "/help", label: "Support" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-slate-200/80 dark:border-white/10 bg-slate-50/60 dark:bg-slate-950">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              The all-in-one platform to run your limo, black car, and ground transportation
              business — from anywhere, at any time.
            </p>
            <p className="mt-6 text-xs text-muted-foreground">
              Provided by{" "}
              <span className="font-semibold text-foreground">{SITE.company}</span>.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-200/80 dark:border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Exaltis. All rights reserved. Provided by{" "}
            <span className="font-medium text-foreground">{SITE.company}</span>.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground">Privacy</Link>
            <Link href="/terms" className="hover:text-foreground">Terms</Link>
            <Link href="/security" className="hover:text-foreground">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
