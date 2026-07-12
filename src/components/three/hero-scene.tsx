"use client";

import { Canvas } from "@react-three/fiber";
import { DigitalCore } from "./digital-core";
import { OrbitRings } from "./orbit-rings";
import { CoreParticles } from "./core-particles";
import { CameraRig } from "./camera-rig";
import { usePointerRef } from "@/hooks/use-pointer-ref";
import type { PointerState } from "@/hooks/use-pointer-ref";
import { useMediaQuery } from "@/hooks/use-media-query";

export function HeroScene({
  scrollProgress,
  isMobile = false,
}: {
  scrollProgress: React.RefObject<number>;
  isMobile?: boolean;
}) {
  const pointer = usePointerRef();
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return (
    <Canvas
      dpr={isMobile ? [1, 1] : [1, 1.75]}
      gl={{
        antialias: !isMobile,
        alpha: true,
        powerPreference: isMobile ? "low-power" : "high-performance",
      }}
      camera={{ position: [0, 0, 6], fov: 45 }}
      className="!absolute inset-0"
    >
      <fog attach="fog" args={["#030304", 5, 11]} />
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={40} color="#f4e409" />
      <pointLight position={[-4, -2, -3]} intensity={25} color="#ff2b7d" />

      <DigitalCore
        pointer={pointer as React.RefObject<PointerState>}
        scrollProgress={scrollProgress}
        reducedMotion={reducedMotion}
        isMobile={isMobile}
      />
      <OrbitRings reducedMotion={reducedMotion} isMobile={isMobile} />
      <CoreParticles reducedMotion={reducedMotion} isMobile={isMobile} />
      <CameraRig pointer={pointer as React.RefObject<PointerState>} scrollProgress={scrollProgress} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
