import { cn } from "@/lib/utils";
import { Muted } from "@/components/ui/typography";

export const fieldClasses = cn(
  "w-full rounded-(--radius-md) border bg-glass px-4 py-3 text-(length:--text-body) text-foreground",
  "placeholder:text-faint outline-none transition-colors focus:border-electric-soft/70",
  "border-glass-border"
);

export function FieldWrapper({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-(length:--text-small) text-silver">
        {label}
      </label>
      {children}
      {error && (
        <Muted id={`${htmlFor}-error`} role="alert" className="mt-1.5 text-danger">
          {error}
        </Muted>
      )}
    </div>
  );
}
