import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1440px] px-(--spacing-gutter)", className)}
      {...props}
    >
      {children}
    </div>
  );
}
