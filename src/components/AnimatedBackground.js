
"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { ShaderPlane } from "./ShaderPlane"; // assuming you extracted ShaderPlane
// or keep ShaderPlane inline

export default function AnimatedBackground() {
  const [eventElement, setEventElement] = useState(null);

  useEffect(() => {
    const el = document.getElementById("Home");
    if (el) setEventElement(el);
  }, []);

  if (!eventElement) return null;

  return (
    <Canvas eventSource={eventElement} eventPrefix="client">
      <ShaderPlane />
    </Canvas>
  );
}
