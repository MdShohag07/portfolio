import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("relative py-(--spacing-section)", className)}
      {...props}
    >
      {children}
    </section>
  );
}
