"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  depth: number; // 0 (far) -> 1 (near) — drives parallax + cursor push strength
  twinklePhase: number;
  twinkleSpeed: number;
};

const STAR_DENSITY = 1 / 9000; // stars per px^2, tuned for a sparse deep-space feel
const MAX_STARS = 420;
const MAX_STARS_MOBILE = 120; // phones: fewer stars + a capped DPR (see resize())
const MOBILE_BREAKPOINT = 768;

/**
 * Full-viewport canvas starfield. Stars drift almost imperceptibly and
 * nudge away from the cursor (nearer stars move more), giving the void
 * background a sense of depth without competing with foreground content.
 */
export function Starfield({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let stars: Star[] = [];
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    const pointer = { x: -9999, y: -9999 };

    function resize() {
      const el = canvasRef.current;
      if (!el) return;
      width = el.clientWidth;
      height = el.clientHeight;
      const isMobile = width < MOBILE_BREAKPOINT;
      dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2);
      el.width = width * dpr;
      el.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const maxStars = isMobile ? MAX_STARS_MOBILE : MAX_STARS;
      const count = Math.min(maxStars, Math.floor(width * height * STAR_DENSITY));
      stars = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          baseX: x,
          baseY: y,
          radius: Math.random() * 1.2 + 0.3,
          depth: Math.random(),
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleSpeed: 0.4 + Math.random() * 0.6,
        };
      });
    }

    function onPointerMove(event: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    }

    function onPointerLeave() {
      pointer.x = -9999;
      pointer.y = -9999;
    }

    let raf = 0;
    let last = performance.now();

    function draw(now: number) {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      ctx!.clearRect(0, 0, width, height);

      for (const star of stars) {
        if (!prefersReducedMotion) {
          const dx = star.baseX - pointer.x;
          const dy = star.baseY - pointer.y;
          const dist = Math.hypot(dx, dy);
          const pushRadius = 140;
          if (dist < pushRadius) {
            const force = (1 - dist / pushRadius) * 18 * (0.3 + star.depth);
            const angle = Math.atan2(dy, dx);
            const targetX = star.baseX + Math.cos(angle) * force;
            const targetY = star.baseY + Math.sin(angle) * force;
            star.x += (targetX - star.x) * 0.12;
            star.y += (targetY - star.y) * 0.12;
          } else {
            star.x += (star.baseX - star.x) * 0.05;
            star.y += (star.baseY - star.y) * 0.05;
          }
          star.twinklePhase += star.twinkleSpeed * dt;
        }

        const twinkle = prefersReducedMotion
          ? 0.7
          : 0.55 + Math.sin(star.twinklePhase) * 0.35;
        ctx!.beginPath();
        ctx!.fillStyle = `rgba(240, 244, 255, ${Math.max(0, twinkle) * (0.4 + star.depth * 0.6)})`;
        ctx!.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    resize();
    raf = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className ?? "pointer-events-none absolute inset-0 h-full w-full"}
    />
  );
}
