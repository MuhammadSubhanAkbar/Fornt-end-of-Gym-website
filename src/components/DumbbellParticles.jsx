import { useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import ParticleSystem from './ParticleSystem'

const createDumbbellGeometry = () => {
  const shape = new THREE.BufferGeometry()
  const positions = []
  const segments = 1000

  for (let i = 0; i < segments; i++) {
    // Sphere 1
    const radius1 = 1
    const theta1 = Math.random() * Math.PI * 2
    const phi1 = Math.acos(2 * Math.random() - 1)
    const x1 = radius1 * Math.sin(phi1) * Math.cos(theta1) - 3
    const y1 = radius1 * Math.sin(phi1) * Math.sin(theta1)
    const z1 = radius1 * Math.cos(phi1)
    positions.push(x1, y1, z1)

    // Sphere 2
    const radius2 = 1
    const theta2 = Math.random() * Math.PI * 2
    const phi2 = Math.acos(2 * Math.random() - 1)
    const x2 = radius2 * Math.sin(phi2) * Math.cos(theta2) + 3
    const y2 = radius2 * Math.sin(phi2) * Math.sin(theta2)
    const z2 = radius2 * Math.cos(phi2)
    positions.push(x2, y2, z2)

    // Bar
    const t = Math.random()
    const barX = THREE.MathUtils.lerp(-3, 3, t)
    const barY = (Math.random() - 0.5) * 0.5
    const barZ = (Math.random() - 0.5) * 0.5
    positions.push(barX, barY, barZ)
  }

  shape.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  return shape
}

const DumbbellParticles = ({ active, scatter }) => {
  const dumbbellGeometry = useMemo(() => createDumbbellGeometry(), [])

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
      <ambientLight intensity={.5} />
      <pointLight position={[10, 10, 10]} />
      <ParticleSystem 
        count={5000} 
        shape={dumbbellGeometry} 
        scatter={scatter} 
      />
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  )
}

export default DumbbellParticles
