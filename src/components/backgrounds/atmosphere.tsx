import { cn } from "@/lib/utils";

/**
 * Slow-drifting aurora + fog blobs behind the hero. Pure CSS (blurred
 * radial gradients + keyframe drift) so it's cheap, works everywhere,
 * and freezes automatically under prefers-reduced-motion (see globals.css).
 */
export function Atmosphere({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* Blur filters are GPU-expensive over large areas — much smaller
          radius + area on phones, full size from sm: up. */}
      <div className="absolute left-[8%] top-[-10%] h-[30vh] w-[30vh] animate-aurora-drift-1 rounded-full bg-neon-yellow/12 blur-[40px] sm:h-[60vh] sm:w-[60vh] sm:blur-[120px]" />
      <div className="absolute right-[5%] top-[10%] h-[28vh] w-[28vh] animate-aurora-drift-2 rounded-full bg-neon-pink/14 blur-[45px] sm:h-[55vh] sm:w-[55vh] sm:blur-[130px]" />
      <div className="absolute bottom-[-15%] left-[30%] h-[25vh] w-[35vh] animate-aurora-drift-3 rounded-full bg-neon-pink/8 blur-[45px] sm:h-[50vh] sm:w-[70vh] sm:blur-[140px]" />
      <div className="absolute inset-0 animate-fog-drift bg-[radial-gradient(ellipse_at_50%_100%,rgba(255,43,125,0.06),transparent_60%)]" />
    </div>
  );
}
