import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  tone = "default",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "primary" | "success" | "warn";
}) {
  const tones: Record<string, string> = {
    default:
      "bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-white/10",
    primary:
      "bg-primary-50 dark:bg-primary-950/40 text-primary-700 dark:text-primary-300 border-primary-200 dark:border-primary-900/60",
    success:
      "bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-900/40",
    warn: "bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-900/40",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
