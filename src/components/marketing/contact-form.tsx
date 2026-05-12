"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-3xl border border-slate-200/80 dark:border-white/10 bg-white dark:bg-slate-900/40 p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field name="name" label="Full name" required />
        <Field name="email" label="Work email" type="email" required />
        <Field name="company" label="Company" />
        <Field name="phone" label="Phone" type="tel" />
      </div>
      <Field name="fleetSize" label="Fleet size (vehicles)" />
      <div>
        <label className="text-sm font-medium" htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="mt-1 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900/40"
          placeholder="Tell us a bit about your operation and what you're hoping to solve."
        />
      </div>

      <input type="hidden" name="source" value="exaltis-website" />

      {status === "success" ? (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-sm text-emerald-700">
          Thanks — we'll be in touch within two business hours.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="rounded-xl border border-rose-200 bg-rose-50/60 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      ) : null}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Get in touch"}
      </Button>
      <p className="text-xs text-muted-foreground">
        By submitting, you agree to our{" "}
        <a href="/privacy" className="underline">Privacy Policy</a>. Provided by Uion Solutions LLC.
      </p>
    </form>
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
      <label className="text-sm font-medium" htmlFor={name}>{label}{required ? " *" : ""}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className={cn(
          "mt-1 w-full rounded-xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-900 px-4 py-3 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 dark:focus:ring-primary-900/40",
        )}
      />
    </div>
  );
}
