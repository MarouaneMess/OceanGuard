import { Canvas } from '@react-three/fiber'
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment,
  Stars 
} from '@react-three/drei'
import { Ocean } from './Ocean'
import { HumanBody } from './HumanBody'
import { Suspense } from 'react'

export function Ocean3DScene() {
  return (
    <div className="h-[80vh] w-full relative">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} />
        
        <Suspense fallback={null}>
          <Ocean />
          <HumanBody />
        </Suspense>

        <OrbitControls 
          enableZoom={true}
          maxPolarAngle={Math.PI * 0.65}
          minPolarAngle={Math.PI * 0.15}
        />
      </Canvas>

      <div className="absolute bottom-4 left-4 text-white bg-black/50 p-4 rounded-lg">
        <h3 className="text-lg font-bold mb-2">Contrôles:</h3>
        <ul className="text-sm">
          <li>• Clic gauche + déplacer: Rotation</li>
          <li>• Molette: Zoom</li>
          <li>• Clic droit + déplacer: Déplacement</li>
        </ul>
      </div>
    </div>
  )
}
