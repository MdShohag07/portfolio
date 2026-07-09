import { cn } from "@/lib/utils";

type Props<T extends React.ElementType> = React.ComponentPropsWithoutRef<T> & {
  as?: T;
};

/** Small uppercase tracked label used to introduce a section — "the tell" of this design system. */
export function Eyebrow({ className, children, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-(length:--text-micro) font-medium uppercase tracking-[0.24em] text-muted",
        "before:h-px before:w-6 before:bg-gradient-to-r before:from-electric before:to-cyber",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

/** The hero-scale statement type. One per page, at most. */
export function Display({ className, children, ...props }: React.ComponentProps<"h1">) {
  return (
    <h1
      className={cn(
        "text-(length:--text-display) font-semibold leading-[0.95] tracking-[-0.04em] text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H1({ as, className, children, ...props }: Props<"h1" | "h2">) {
  const Comp = as ?? "h1";
  return (
    <Comp
      className={cn(
        "text-(length:--text-h1) font-semibold leading-[1] tracking-[-0.03em] text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function H2({ as, className, children, ...props }: Props<"h2" | "h3">) {
  const Comp = as ?? "h2";
  return (
    <Comp
      className={cn(
        "text-(length:--text-h2) font-semibold leading-[1.05] tracking-[-0.02em] text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function H3({ as, className, children, ...props }: Props<"h3" | "h4">) {
  const Comp = as ?? "h3";
  return (
    <Comp
      className={cn(
        "text-(length:--text-h3) font-medium leading-[1.15] tracking-[-0.01em] text-foreground",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function Lead({ className, children, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      className={cn("text-(length:--text-body-lg) leading-relaxed text-silver", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Text({ className, children, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-(length:--text-body) leading-relaxed text-silver", className)} {...props}>
      {children}
    </p>
  );
}

export function Muted({ className, children, ...props }: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-(length:--text-small) leading-relaxed text-muted", className)} {...props}>
      {children}
    </p>
  );
}
