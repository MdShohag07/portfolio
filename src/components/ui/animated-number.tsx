"use client";

import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, useMotionValueEvent } from "framer-motion";
import { spring } from "@/lib/motion";

export function AnimatedNumber({
  value,
  format = (n) => Math.round(n).toLocaleString("en-US"),
  className,
}: {
  value: number;
  format?: (n: number) => string;
  className?: string;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(value);
  const springValue = useSpring(motionValue, spring.soft);

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  useMotionValueEvent(springValue, "change", (latest) => {
    if (spanRef.current) spanRef.current.textContent = format(latest);
  });

  return (
    <span ref={spanRef} className={className}>
      {format(value)}
    </span>
  );
}
