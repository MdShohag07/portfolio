"use client";

import dynamic from "next/dynamic";

const TechSphereScene = dynamic(
  () => import("./tech-sphere-scene").then((mod) => mod.TechSphereScene),
  { ssr: false, loading: () => null }
);

export { TechSphereScene as TechSphereSceneLazy };
