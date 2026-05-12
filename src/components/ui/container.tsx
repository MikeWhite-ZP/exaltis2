import * as React from "react";
import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("container mx-auto max-w-7xl px-6 lg:px-8", className)}
      {...props}
    />
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? <span className="eyebrow mb-5">{eyebrow}</span> : null}
      <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
          {description}
        </p>
      ) : null}
    </div>
  );
}
