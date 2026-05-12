"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PRODUCTS_AND_SOLUTIONS = [
  { href: "/products/dispatch", label: "Dispatch", desc: "Real-time, drag-and-drop assignment" },
  { href: "/products/online-booking", label: "Online Booking", desc: "Branded reservation portal" },
  { href: "/products/three-in-one-app", label: "3 Roles in 1 App", desc: "Passenger, Driver, Dispatcher — one app" },
  { href: "/products/sms-notifications", label: "SMS Notifications", desc: "Two-way alerts and reply handling" },
  { href: "/products/payments", label: "Payments", desc: "Authorize, capture, reconcile" },
  { href: "/products/affiliate-network", label: "Affiliate Network", desc: "Farm-out & farm-in jobs" },
];

const RESOURCES = [
  { href: "/blog", label: "Blog" },
  { href: "/help", label: "Help Center" },
  { href: "/webinars", label: "Webinars" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-background/70 backdrop-blur-xl">
        <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          <div className="flex items-center gap-10">
            <Link href="/" aria-label="Exaltis home">
              <Logo />
            </Link>
            <nav className="hidden items-center gap-1 text-sm lg:flex">
              <DropdownNav label="Products & Solutions" items={PRODUCTS_AND_SOLUTIONS} />
              <Link href="/pricing" className={navLinkClass}>
                Pricing
              </Link>
              <DropdownNav
                label="Resources"
                items={RESOURCES.map((r) => ({ ...r, desc: "" }))}
              />
              <Link href="/about" className={navLinkClass}>
                About
              </Link>
            </nav>
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/signin"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Log In
            </Link>
            <Button asChild variant="primary" size="sm">
              <Link href="/contact?topic=demo">Request Demo</Link>
            </Button>
          </div>
          <button
            aria-label="Toggle menu"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 dark:border-white/10"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="lg:hidden border-b border-white/10 bg-background/95 backdrop-blur-xl">
          <div className="container mx-auto max-w-7xl space-y-4 px-6 py-6 text-sm">
            <MobileGroup title="Products & Solutions" items={PRODUCTS_AND_SOLUTIONS} />
            <Link className="block py-2" href="/pricing" onClick={() => setOpen(false)}>
              Pricing
            </Link>
            <MobileGroup
              title="Resources"
              items={RESOURCES.map((r) => ({ ...r, desc: "" }))}
            />
            <Link className="block py-2" href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <div className="flex gap-3 pt-4">
              <Button asChild variant="outline" size="md" className="flex-1">
                <Link href="/signin">Log In</Link>
              </Button>
              <Button asChild variant="primary" size="md" className="flex-1">
                <Link href="/contact?topic=demo">Request Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

const navLinkClass =
  "rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-slate-100/70 dark:hover:bg-white/5";

function DropdownNav({
  label,
  items,
}: {
  label: string;
  items: { href: string; label: string; desc?: string }[];
}) {
  return (
    <div className="group relative">
      <button className={cn(navLinkClass, "inline-flex items-center gap-1")}>
        {label}
        <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
      </button>
      <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="w-[440px] rounded-2xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-950 shadow-2xl">
          <ul className="grid grid-cols-1 gap-1 p-3">
            {items.map((it) => (
              <li key={it.href}>
                <Link
                  href={it.href}
                  className="block rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-white/5"
                >
                  <div className="text-sm font-medium text-foreground">{it.label}</div>
                  {it.desc ? (
                    <div className="text-xs text-muted-foreground mt-0.5">{it.desc}</div>
                  ) : null}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function MobileGroup({
  title,
  items,
}: {
  title: string;
  items: { href: string; label: string }[];
}) {
  return (
    <details className="rounded-xl border border-slate-200 dark:border-white/10 px-4 py-3" open>
      <summary className="cursor-pointer font-medium">{title}</summary>
      <ul className="mt-2 space-y-1">
        {items.map((it) => (
          <li key={it.href}>
            <Link className="block rounded-lg px-2 py-1.5 text-muted-foreground" href={it.href}>
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </details>
  );
}
