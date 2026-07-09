"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { fibonacciSphere } from "@/lib/fibonacci-sphere";
import { techStack } from "@/lib/data/tech-stack";

const RADIUS = 2.6;

export function TechSphere({ reducedMotion = false }: { reducedMotion?: boolean }) {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => fibonacciSphere(techStack.length, RADIUS), []);

  useFrame((_, delta) => {
    if (reducedMotion || !group.current) return;
    group.current.rotation.y += 0.08 * delta;
  });

  return (
    <group>
      <group ref={group}>
        <mesh>
          <sphereGeometry args={[RADIUS - 0.35, 32, 32]} />
          <meshBasicMaterial color="#0e0f13" transparent opacity={0.5} />
        </mesh>
        <mesh>
          <sphereGeometry args={[RADIUS - 0.34, 24, 24]} />
          <meshBasicMaterial color="#6fa8ff" wireframe transparent opacity={0.1} />
        </mesh>

        {techStack.map((tech, i) => (
          <Html
            key={tech}
            position={points[i]}
            center
            occlude
            distanceFactor={7}
            className="pointer-events-none select-none"
          >
            <span className="whitespace-nowrap rounded-(--radius-full) border border-glass-border-strong bg-glass-strong px-3 py-1.5 text-(length:--text-small) text-foreground backdrop-blur-md">
              {tech}
            </span>
          </Html>
        ))}
      </group>

      {!reducedMotion && (
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          rotateSpeed={0.5}
          autoRotate={false}
        />
      )}
    </group>
  );
}
