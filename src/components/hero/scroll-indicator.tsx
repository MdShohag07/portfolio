import { Muted } from "@/components/ui/typography";

export function ScrollIndicator() {
  return (
    <div className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3">
      <Muted className="uppercase tracking-[0.3em]">Scroll</Muted>
      <div className="relative h-10 w-6 rounded-full border border-glass-border-strong">
        <span className="absolute left-1/2 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-electric-soft animate-scroll-hint" />
      </div>
    </div>
  );
}
