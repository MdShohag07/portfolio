"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitRings } from "./orbit-rings";
import { CoreParticles } from "./core-particles";
import { useMediaQuery } from "@/hooks/use-media-query";

/** A quieter version of the hero scene — rings and particles only, no core — for secondary pages. */
export function AmbientScene() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[4, 3, 4]} intensity={25} color="#6fa8ff" />
      <OrbitRings reducedMotion={reducedMotion} />
      <CoreParticles reducedMotion={reducedMotion} />
    </Canvas>
  );
}
