import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100",
        primary:
          "bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-[0_8px_30px_rgba(63,92,255,0.35)] hover:shadow-[0_10px_40px_rgba(63,92,255,0.55)] hover:-translate-y-0.5",
        outline:
          "border border-slate-200 dark:border-white/15 bg-white/60 dark:bg-white/5 text-foreground hover:bg-white dark:hover:bg-white/10 backdrop-blur",
        ghost: "hover:bg-slate-100 dark:hover:bg-white/5",
        link: "text-primary-600 underline-offset-4 hover:underline",
        glow: "relative bg-slate-900 text-white before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-primary-500 before:to-accent before:blur-xl before:opacity-60",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-11 px-6",
        lg: "h-12 px-7 text-base",
        xl: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "default", size: "md" },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  asChild?: boolean;
  children?: React.ReactNode;
};

export type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className">;

export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  ({ className, variant, size, asChild, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size, className }));

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(child.props.className, classes),
        ref,
        ...props,
      } as any);
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={classes}
        {...props}
      >
        {children}
      </button>
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };
