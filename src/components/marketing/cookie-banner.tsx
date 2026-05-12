"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const KEY = "exaltis.cookies.v1";

export function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {}
  }, []);

  if (!show) return null;

  const persist = (value: "all" | "essential") => {
    try {
      localStorage.setItem(KEY, value);
    } catch {}
    setShow(false);
  };

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 p-5 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <p className="text-sm leading-relaxed">
          We use cookies to deliver the Exaltis SaaS experience, measure performance, and
          improve our product. Read our{" "}
          <Link href="/cookies" className="font-medium underline">
            Cookie Policy
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="font-medium underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button variant="outline" size="sm" onClick={() => persist("essential")}>
            Essential only
          </Button>
          <Button variant="primary" size="sm" onClick={() => persist("all")}>
            Accept all
          </Button>
        </div>
      </div>
    </div>
  );
}
