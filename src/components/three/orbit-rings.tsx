"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const RINGS = [
  { radius: 2.1, tube: 0.006, rotation: [Math.PI / 2.4, 0, 0.3] as const, speed: 0.05, color: "#f4e409" },
  { radius: 2.5, tube: 0.005, rotation: [Math.PI / 1.8, 0.4, -0.2] as const, speed: -0.035, color: "#ff2b7d" },
  { radius: 2.9, tube: 0.004, rotation: [Math.PI / 3, -0.3, 0.5] as const, speed: 0.025, color: "#f4e409" },
];

export function OrbitRings({
  reducedMotion = false,
  isMobile = false,
}: {
  reducedMotion?: boolean;
  isMobile?: boolean;
}) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const radialSegments = isMobile ? 48 : 128;

  useFrame((_, delta) => {
    if (reducedMotion) return;
    refs.current.forEach((mesh, i) => {
      if (!mesh) return;
      mesh.rotation.z += RINGS[i].speed * delta;
    });
  });

  return (
    <group>
      {RINGS.map((ring, i) => (
        <mesh
          key={ring.radius}
          ref={(node) => {
            refs.current[i] = node;
          }}
          rotation={ring.rotation}
        >
          <torusGeometry args={[ring.radius, ring.tube, 8, radialSegments]} />
          <meshBasicMaterial color={ring.color} transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}
