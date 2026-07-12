"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 260;

function buildShell(innerRadius: number, outerRadius: number) {
  const positions = new Float32Array(COUNT * 3);
  const colors = new Float32Array(COUNT * 3);
  const electric = new THREE.Color("#f4e409");
  const cyber = new THREE.Color("#ff2b7d");

  for (let i = 0; i < COUNT; i++) {
    const radius = innerRadius + Math.random() * (outerRadius - innerRadius);
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    const c = electric.clone().lerp(cyber, Math.random());
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  return { positions, colors };
}

export function CoreParticles({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const points = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => buildShell(1.9, 3.4), []);

  useFrame((_, delta) => {
    if (reducedMotion || !points.current) return;
    points.current.rotation.y += 0.015 * delta;
    points.current.rotation.x += 0.006 * delta;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
