"use client";

import dynamic from "next/dynamic";

const AmbientScene = dynamic(() => import("./ambient-scene").then((mod) => mod.AmbientScene), {
  ssr: false,
  loading: () => null,
});

export { AmbientScene as AmbientSceneLazy };
