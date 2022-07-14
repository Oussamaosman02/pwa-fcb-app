import React from "react";
import { Canvas } from "@react-three/fiber";
import ModelE from "./Scene";
import ModelP from "./Scene2";

export default function ThreeScene() {
  return (
    <Canvas
    style={{
      position:"absolute",
      top: "-7vh"
    }}
    shadows={true}
    camera={{ position: [0, 1.5,0 ], fov: 90 }}
    >
      <spotLight
        position={[0, 20,0]}
        castShadow
        shadow-mapSize={[1024, 1024]}
      >
        <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />
      </spotLight>
      <ModelE position={[0, 0, 0]} scale={.02}/>
      <ModelP position={[0, 0, .145]} scale={2.03}/>
    </Canvas>
  );
}
