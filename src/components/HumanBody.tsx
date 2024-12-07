import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

export function HumanBody() {
  const groupRef = useRef<THREE.Group>(null)
  const bodyRef = useRef<THREE.Mesh>(null)

  // Animation de respiration
  const { scale } = useSpring({
    from: { scale: 1 },
    to: { scale: 1.05 },
    config: { duration: 2000 },
    loop: { reverse: true }
  })

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Rotation douce
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <group ref={groupRef} position={[0, 1, 0]}>
      {/* Torse */}
      <animated.mesh
        ref={bodyRef}
        position={[0, 0, 0]}
        scale={scale}
      >
        <cylinderGeometry args={[0.5, 0.4, 1.2, 32]} />
        <meshPhysicalMaterial 
          color="#3a86ff"
          metalness={0.2}
          roughness={0.8}
          transparent
          opacity={0.9}
        />
      </animated.mesh>

      {/* Tête */}
      <group position={[0, 0.9, 0]}>
        <mesh>
          <sphereGeometry args={[0.25, 32, 32]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        
        {/* Yeux */}
        <mesh position={[0.08, 0.05, 0.2]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-0.08, 0.05, 0.2]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Bras */}
      <group position={[0.6, 0.2, 0]}>
        <mesh>
          <capsuleGeometry args={[0.12, 0.8, 8, 16]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Main droite */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>

      <group position={[-0.6, 0.2, 0]}>
        <mesh>
          <capsuleGeometry args={[0.12, 0.8, 8, 16]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Main gauche */}
        <mesh position={[0, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>

      {/* Jambes */}
      <group position={[0.25, -0.8, 0]}>
        <mesh>
          <capsuleGeometry args={[0.15, 1, 8, 16]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Pied droit */}
        <mesh position={[0, -0.6, 0.1]}>
          <boxGeometry args={[0.2, 0.1, 0.3]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>

      <group position={[-0.25, -0.8, 0]}>
        <mesh>
          <capsuleGeometry args={[0.15, 1, 8, 16]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Pied gauche */}
        <mesh position={[0, -0.6, 0.1]}>
          <boxGeometry args={[0.2, 0.1, 0.3]} />
          <meshPhysicalMaterial 
            color="#3a86ff"
            metalness={0.2}
            roughness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
      </group>

      {/* Effet de brillance */}
      <pointLight
        position={[0, 0, 2]}
        intensity={0.5}
        color="#3a86ff"
      />
    </group>
  )
} 