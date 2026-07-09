import { cn } from "@/lib/utils";

/**
 * Slow-drifting aurora + fog blobs behind the hero. Pure CSS (blurred
 * radial gradients + keyframe drift) so it's cheap, works everywhere,
 * and freezes automatically under prefers-reduced-motion (see globals.css).
 */
export function Atmosphere({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute left-[8%] top-[-10%] h-[60vh] w-[60vh] animate-aurora-drift-1 rounded-full bg-electric/18 blur-[120px]" />
      <div className="absolute right-[5%] top-[10%] h-[55vh] w-[55vh] animate-aurora-drift-2 rounded-full bg-cyber/16 blur-[130px]" />
      <div className="absolute bottom-[-15%] left-[30%] h-[50vh] w-[70vh] animate-aurora-drift-3 rounded-full bg-electric-soft/10 blur-[140px]" />
      <div className="absolute inset-0 animate-fog-drift bg-[radial-gradient(ellipse_at_50%_100%,rgba(139,92,246,0.08),transparent_60%)]" />
    </div>
  );
}
