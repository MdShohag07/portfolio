"use client";

import { useFrame } from "@react-three/fiber";
import type { PointerState } from "@/hooks/use-pointer-ref";

/**
 * Cinematic camera: a gentle parallax tilt toward the cursor, plus a slow
 * dolly-in as the hero scrolls out of view, so the core feels like it's
 * being flown past rather than sitting static behind the copy.
 */
export function CameraRig({
  pointer,
  scrollProgress,
  reducedMotion = false,
}: {
  pointer: React.RefObject<PointerState>;
  scrollProgress: React.RefObject<number>;
  reducedMotion?: boolean;
}) {
  useFrame((state) => {
    const progress = scrollProgress.current ?? 0;
    const px = reducedMotion ? 0 : pointer.current?.x ?? 0;
    const py = reducedMotion ? 0 : pointer.current?.y ?? 0;

    const targetX = px * 0.6;
    const targetY = py * 0.35;
    const targetZ = 6 - progress * 1.6;

    state.camera.position.x += (targetX - state.camera.position.x) * 0.03;
    state.camera.position.y += (targetY - state.camera.position.y) * 0.03;
    state.camera.position.z += (targetZ - state.camera.position.z) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}
