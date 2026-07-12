"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import "./digital-core-material";
import type { PointerState } from "@/hooks/use-pointer-ref";

type DigitalCoreMaterialImpl = THREE.ShaderMaterial & {
  uTime: number;
  uAmplitude: number;
};

export function DigitalCore({
  pointer,
  scrollProgress,
  reducedMotion = false,
}: {
  pointer: React.RefObject<PointerState>;
  scrollProgress: React.RefObject<number>;
  reducedMotion?: boolean;
}) {
  const group = useRef<THREE.Group>(null);
  const material = useRef<DigitalCoreMaterialImpl>(null);
  const wireframe = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (material.current) {
      material.current.uTime += reducedMotion ? 0 : delta;
    }

    const g = group.current;
    if (!g) return;

    const idleSpeed = reducedMotion ? 0 : 0.12;
    g.rotation.y += idleSpeed * delta;

    const px = pointer.current?.x ?? 0;
    const py = pointer.current?.y ?? 0;
    const targetX = reducedMotion ? 0 : py * 0.18;
    const targetZ = reducedMotion ? 0 : -px * 0.18;
    g.rotation.x += (targetX - g.rotation.x) * 0.04;
    g.rotation.z += (targetZ - g.rotation.z) * 0.04;

    const progress = scrollProgress.current ?? 0;
    const scale = 1 - progress * 0.25;
    g.scale.setScalar(scale);

    if (wireframe.current) {
      wireframe.current.rotation.y -= idleSpeed * 0.6 * delta;
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.4, 24]} />
        <digitalCoreMaterial ref={material} uAmplitude={0.22} uFrequency={1.6} />
      </mesh>
      <mesh ref={wireframe} scale={1.35}>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshBasicMaterial color="#ff2b7d" wireframe transparent opacity={0.1} />
      </mesh>
    </group>
  );
}
