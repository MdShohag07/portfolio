"use client";

import { useEffect, useRef } from "react";

export type PointerState = { x: number; y: number };

/**
 * Tracks normalized pointer position (-1..1, y-up) in a ref rather than
 * state, so 3D scenes can read it every frame inside useFrame without
 * forcing a React re-render on every mouse move.
 */
export function usePointerRef() {
  const pointer = useRef<PointerState>({ x: 0, y: 0 });

  useEffect(() => {
    function onMove(event: PointerEvent) {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    }
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return pointer;
}
