import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2", className)}>
      <span className="relative grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-primary-500 via-primary-600 to-accent text-white shadow-[0_10px_30px_-10px_rgba(63,92,255,0.6)]">
        <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
          <path
            d="M3 12c4 0 6-9 9-9s2 6 5 7 4 0 4 2-3 2-4 3-4 8-6 8-3-6-5-7-3-1-3-2-2-2 0-2z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-[17px] font-semibold tracking-tight">Exaltis</span>
    </span>
  );
}
