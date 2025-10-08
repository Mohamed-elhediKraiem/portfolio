"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export const ContactModel = () => {
  const { scene } = useGLTF("/models/carl.glb"); // 📁 ton fichier 3D
  return <primitive object={scene} scale={10} position={[0, -1, 0]} />;
};

// Optionnel — précharger le modèle pour éviter le flash au chargement
useGLTF.preload("/models/carl.glb");

export const ContactModelCanvas = () => {
  return (
    <div className="w-[400px] h-[400px]">
      <Canvas camera={{ position: [0, 1.5, 4] }}>
        <ambientLight intensity={1.2} />
        <directionalLight position={[3, 3, 3]} intensity={1.5} />
        <ContactModel />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};
