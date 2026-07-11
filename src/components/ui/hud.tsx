/**
 * Sci-fi HUD chrome shared by any panel that wants the "terminal readout"
 * treatment — corner brackets, a live status ping, a circuit-trace edge.
 */

export function LiveDot({ className = "bg-electric-soft" }: { className?: string }) {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${className}`} />
      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full shadow-[var(--glow-electric)] ${className}`} />
    </span>
  );
}

export function CornerBrackets({ color = "border-electric-soft/50" }: { color?: string }) {
  return (
    <>
      <span className={`pointer-events-none absolute -left-px -top-px h-3 w-3 border-l border-t ${color} transition-colors duration-300 group-hover:border-electric-soft`} />
      <span className={`pointer-events-none absolute -right-px -top-px h-3 w-3 border-r border-t ${color} transition-colors duration-300 group-hover:border-electric-soft`} />
      <span className={`pointer-events-none absolute -bottom-px -left-px h-3 w-3 border-b border-l ${color} transition-colors duration-300 group-hover:border-electric-soft`} />
      <span className={`pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b border-r ${color} transition-colors duration-300 group-hover:border-electric-soft`} />
    </>
  );
}

export function CircuitTrace({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-electric via-cyber to-transparent opacity-70 ${className}`}
    />
  );
}
