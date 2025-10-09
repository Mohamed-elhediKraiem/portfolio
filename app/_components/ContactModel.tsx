"use client";

import { useEffect } from "react";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export const ContactModel = () => {
  const { scene, animations } = useGLTF("/models/robot_dancing.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions) {
      // Essaie de jouer la première animation disponible
      const firstAction = Object.values(actions)[0];
      if (firstAction) {
        firstAction.reset().fadeIn(0.5).play();
      }
    }
  }, [actions]);

  return <primitive object={scene} scale={1} position={[0, -1, 0]} />;
};

useGLTF.preload("/models/robot_dancing.glb");

export const ContactModelCanvas = () => {
  return (
    <div className="relative w-[500px] h-[500px] overflow-visible">
      <Canvas
        camera={{ position: [0, 1.5, 4] }}
        style={{ overflow: "visible" }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        <ContactModel />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1.2} />
      </Canvas>
    </div>
  );
};
