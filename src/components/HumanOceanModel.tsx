import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

function Model() {
  const { nodes, materials } = useGLTF('/human_model.glb');

  return (
    <group>
      <mesh geometry={nodes.body.geometry} material={materials.skin}>
        <meshStandardMaterial color="#88ccff" transparent opacity={0.8} />
      </mesh>
    </group>
  );
}

export function HumanOceanModel() {
  return (
    <div className="h-[600px] w-full bg-gradient-to-b from-blue-900 to-blue-600 rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white">
        <h3 className="text-2xl font-bold mb-2">Explorer les Connexions</h3>
        <p>Tournez le modèle pour découvrir les parallèles entre le corps humain et l'océan</p>
      </div>
    </div>
  );
}