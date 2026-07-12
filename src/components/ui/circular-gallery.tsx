"use client";

import { useCallback, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useLenis } from "lenis/react";
import { FiArrowUpRight } from "react-icons/fi";
import { CircuitTrace, CornerBrackets, LiveDot } from "@/components/ui/hud";
import { spring } from "@/lib/motion";
import { cn } from "@/lib/utils";

export type CircularGalleryItem = {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  summary: string;
  gradient: string;
  href: string;
  concept?: boolean;
};

const RADIUS = 480;
const AUTO_ROTATE_SPEED = 0.045; // deg per frame (~2.7deg/s at 60fps)
const SCROLL_SENSITIVITY = 0.12; // deg of spin per px scrolled
const TRACK_VH = 220;

function CardFace({
  item,
  face,
}: {
  item: CircularGalleryItem;
  face: "front" | "back";
}) {
  if (face === "back") {
    return (
      <div
        className="absolute inset-0 overflow-hidden rounded-(--radius-lg) border border-glass-border-strong bg-graphite"
        style={{ transform: "rotateY(180deg)" }}
      >
        <CornerBrackets color="border-neon-pink/50" />
        <CircuitTrace gradient="from-neon-yellow via-neon-pink" />
        <span
          aria-hidden
          className="stripe-hazard pointer-events-none absolute -top-1 right-4 h-2 w-8 rotate-45 opacity-50"
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,43,125,0.4) 0px, transparent 1px, transparent 28px), repeating-linear-gradient(90deg, rgba(255,43,125,0.4) 0px, transparent 1px, transparent 28px)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-neon-yellow/40 font-semibold text-neon-yellow shadow-[var(--glow-yellow)]">
            N
          </span>
          <span className="font-mono text-(length:--text-micro) uppercase tracking-[0.3em] text-faint">
            Archive {item.index}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden rounded-(--radius-lg) border border-glass-border-strong bg-void">
      <CornerBrackets color="border-neon-pink/50" />
      <CircuitTrace gradient="from-neon-yellow via-neon-pink" />
      <span
        aria-hidden
        className="stripe-hazard pointer-events-none absolute -top-1 right-4 h-2 w-8 rotate-45 opacity-50"
      />

      <div className={cn("relative h-full w-full bg-void bg-gradient-to-br", item.gradient)}>
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-void/10" />

        <span
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-neon-yellow/25 to-transparent animate-scan"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
          <div className="flex items-center gap-2">
            <LiveDot
              className={item.concept ? "bg-neon-pink" : "bg-neon-yellow"}
              glow={item.concept ? "shadow-[var(--glow-pink)]" : "shadow-[var(--glow-yellow)]"}
            />
            <span
              className={cn(
                "font-mono text-(length:--text-micro) uppercase tracking-[0.2em]",
                item.concept ? "text-neon-pink" : "text-neon-yellow"
              )}
            >
              {item.subtitle}
            </span>
          </div>
          <span className="font-mono text-(length:--text-micro) text-silver/70">{item.index}</span>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="text-(length:--text-h3) font-semibold leading-[1.05] tracking-[-0.02em] text-foreground">
            {item.title}
          </h3>
          <p className="mt-2 text-(length:--text-small) leading-relaxed text-silver/80">{item.summary}</p>

          <div
            className={cn(
              "mt-4 inline-flex items-center gap-1.5 font-mono text-(length:--text-micro) uppercase tracking-[0.2em]",
              item.concept ? "text-neon-pink" : "text-neon-yellow"
            )}
          >
            {item.concept ? "View Work" : "View Case Study"}
            <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GalleryCard({
  item,
  itemAngle,
  rotation,
}: {
  item: CircularGalleryItem;
  itemAngle: number;
  rotation: import("framer-motion").MotionValue<number>;
}) {
  const transform = useTransform(rotation, (r) => {
    const world = itemAngle + r;
    const normalized = Math.abs(((world % 360) + 540) % 360 - 180);
    const scale = 0.86 + (1 - normalized / 180) * 0.14;
    return `rotateY(${world}deg) translateZ(${RADIUS}px) scale(${scale})`;
  });
  const opacity = useTransform(rotation, (r) => {
    const world = ((itemAngle + r) % 360 + 360) % 360;
    const normalized = world > 180 ? 360 - world : world;
    return Math.max(0.3, 1 - normalized / 180);
  });
  const boxShadow = useTransform(rotation, (r) => {
    const world = ((itemAngle + r) % 360 + 360) % 360;
    const normalized = world > 180 ? 360 - world : world;
    const focus = Math.max(0, 1 - normalized / 90);
    return `0 0 ${focus * 50}px -6px rgba(255,43,125,${focus * 0.6})`;
  });

  // backface-visibility is unreliable across browsers once you're a few
  // levels deep in nested preserve-3d + perspective — instead of trusting
  // the GPU to cull the reversed face, compute which face is camera-facing
  // in JS and cross-fade opacity between them (a short ramp around the 90°
  // edge avoids a hard pop).
  const frontOpacity = useTransform(rotation, (r) => {
    const world = ((itemAngle + r) % 360 + 360) % 360;
    const normalized = world > 180 ? 360 - world : world;
    const rampStart = 84;
    const rampEnd = 96;
    if (normalized <= rampStart) return 1;
    if (normalized >= rampEnd) return 0;
    return 1 - (normalized - rampStart) / (rampEnd - rampStart);
  });
  const backOpacity = useTransform(frontOpacity, (f) => 1 - f);

  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 -ml-[115px] -mt-[144px] h-[288px] w-[230px] sm:-ml-[140px] sm:-mt-[175px] sm:h-[350px] sm:w-[280px]">
      <motion.div style={{ transform, opacity, transformStyle: "preserve-3d" }} className="relative h-full w-full">
        <Link
          href={item.href}
          data-cursor="interactive"
          className="group relative block h-full w-full"
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ boxShadow, borderRadius: "var(--radius-lg)", transformStyle: "preserve-3d" }}
          >
            <motion.div className="absolute inset-0" style={{ opacity: frontOpacity, transformStyle: "preserve-3d" }}>
              <CardFace item={item} face="front" />
            </motion.div>
            <motion.div className="absolute inset-0" style={{ opacity: backOpacity, transformStyle: "preserve-3d" }}>
              <CardFace item={item} face="back" />
            </motion.div>
          </motion.div>
        </Link>
      </motion.div>
    </div>
  );
}

export function CircularGallery({ items }: { items: CircularGalleryItem[] }) {
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, spring.soft);
  const inViewRef = useRef(false);
  const prevScrollY = useRef(0);
  const rafRef = useRef<number | null>(null);

  const measure = useCallback(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const delta = window.scrollY - prevScrollY.current;
    prevScrollY.current = window.scrollY;
    if (delta !== 0) {
      rotation.set(rotation.get() + delta * SCROLL_SENSITIVITY);
    }
    const rect = el.getBoundingClientRect();
    inViewRef.current = rect.top < window.innerHeight && rect.bottom > 0;
  }, [rotation]);

  useLenis(measure);

  useEffect(() => {
    prevScrollY.current = window.scrollY;
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    measure();
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  // Continuous ambient spin — always running while the gallery is on
  // screen, independent of scroll state, so it never looks static.
  useEffect(() => {
    function tick() {
      if (inViewRef.current) {
        rotation.set(rotation.get() + AUTO_ROTATE_SPEED);
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [rotation]);

  const anglePerItem = 360 / items.length;

  // Nested CSS 3D transforms (preserve-3d + perspective) don't reliably
  // hit-test through to deeply nested descendants in every browser — a
  // click resolves to this flat ancestor instead of the rotated card. The
  // <Link> per card still covers keyboard/SEO; this covers the mouse case
  // by computing which card is front-and-center from the same rotation value.
  function handleRingClick() {
    const normalized = ((smoothRotation.get() % 360) + 360) % 360;
    const index = Math.round((360 - normalized) / anglePerItem) % items.length;
    router.push(items[index].href);
  }

  return (
    <div ref={wrapperRef} className="relative" style={{ height: `${TRACK_VH}vh` }}>
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <div className="relative flex h-[78%] w-[80%] items-center justify-center overflow-hidden rounded-(--radius-lg) border border-glass-border">
          <div
            aria-hidden
            className="pointer-events-none absolute h-[500px] w-full max-w-[900px] rounded-full bg-[radial-gradient(ellipse,rgba(244,228,9,0.12),rgba(255,43,125,0.1)_45%,transparent_75%)] blur-2xl"
          />

          <div className="pointer-events-none absolute top-6 left-0 right-0 z-10 flex items-center justify-center gap-3 font-mono text-(length:--text-micro) uppercase tracking-[0.3em] text-faint">
            <LiveDot className="bg-neon-yellow" glow="shadow-[var(--glow-yellow)]" />
            Scroll To Rotate Archive
          </div>

          <div className="relative h-full w-full" style={{ perspective: "1800px" }}>
            <div
              role="button"
              tabIndex={-1}
              aria-hidden
              onClick={handleRingClick}
              data-cursor="interactive"
              className="absolute inset-0 cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              {items.map((item, index) => (
                <GalleryCard key={item.id} item={item} itemAngle={index * anglePerItem} rotation={smoothRotation} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
