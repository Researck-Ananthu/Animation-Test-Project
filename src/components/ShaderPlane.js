import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { WaveMaterial } from "./WaveMaterial";
import { easing } from "maath";

export function ShaderPlane() {
  const ref = useRef(null);
  const { viewport, size } = useThree();

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.time += delta;
    easing.damp2(ref.current.pointer, state.pointer, 0.2, delta);
    ref.current.resolution.set(
      size.width * viewport.dpr,
      size.height * viewport.dpr
    );
  });

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry />
      <waveMaterial
        ref={ref}
        key={WaveMaterial.key}
        resolution={[size.width * viewport.dpr, size.height * viewport.dpr]}
      />
    </mesh>
  );
}
