import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

export function Ocean() {
  const meshRef = useRef<THREE.Mesh>(null)
  const waterGeometryRef = useRef<THREE.PlaneGeometry>(null)

  useFrame(({ clock }) => {
    if (!waterGeometryRef.current || !meshRef.current) return
    
    const positions = waterGeometryRef.current.attributes.position.array as Float32Array
    const time = clock.getElapsedTime() * 0.5

    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const z = positions[i + 2]
      positions[i + 1] = Math.sin(x * 0.5 + time) * 0.3 + 
                        Math.cos(z * 0.5 + time) * 0.3
    }

    waterGeometryRef.current.attributes.position.needsUpdate = true
  })

  return (
    <mesh 
      ref={meshRef} 
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -2, 0]}
    >
      <planeGeometry 
        ref={waterGeometryRef}
        args={[20, 20, 50, 50]} 
      />
      <meshStandardMaterial 
        color="#006994"
        metalness={0.8}
        roughness={0.2}
        transparent
        opacity={0.8}
      />
    </mesh>
  )
}
