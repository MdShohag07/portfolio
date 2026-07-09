"use client";

import { Canvas } from "@react-three/fiber";
import { TechSphere } from "./tech-sphere";
import { useMediaQuery } from "@/hooks/use-media-query";

export function TechSphereScene() {
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <Canvas
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0, 6.5], fov: 45 }}
      className="!absolute inset-0"
      data-cursor="interactive"
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[4, 3, 4]} intensity={30} color="#6fa8ff" />
      <TechSphere reducedMotion={reducedMotion} />
    </Canvas>
  );
}
