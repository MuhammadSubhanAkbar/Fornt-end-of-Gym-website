import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const ParticleSystem = ({ count, shape, scatter, color = '#FF5E1A' }) => {
  const particlesRef = useRef()
  const [targetPositions, setTargetPositions] = useState([])
  const [originalPositions, setOriginalPositions] = useState([])

  // Initialize particle positions
  useEffect(() => {
    if (!shape || !shape.attributes || !shape.attributes.position) return

    const originalPos = []
    const targetPos = []
    const shapePositions = shape.attributes.position.array

    for (let i = 0; i < count; i++) {
      // Random original (scattered) positions
      const radius = 5 * Math.random()
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      originalPos.push(x, y, z)

      // Dumbbell shape target positions
      const index = Math.floor(Math.random() * (shapePositions.length / 3)) * 3
      targetPos.push(
        shapePositions[index] || 0,
        shapePositions[index + 1] || 0,
        shapePositions[index + 2] || 0
      )
    }

    setOriginalPositions(originalPos)
    setTargetPositions(targetPos)

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(originalPos, 3))
    if (particlesRef.current) {
      particlesRef.current.geometry = geometry
    }
  }, [count, shape])

  // Animate particles every frame
  useFrame(() => {
    if (
      !particlesRef.current ||
      !particlesRef.current.geometry ||
      !particlesRef.current.geometry.attributes.position
    ) return

    const geometry = particlesRef.current.geometry
    const positions = geometry.attributes.position.array
    const speed = 0.05

    const from = scatter ? targetPositions : originalPositions
    const to = scatter ? originalPositions : targetPositions

    for (let i = 0; i < positions.length; i += 3) {
      positions[i]     += (to[i]     - positions[i])     * speed
      positions[i + 1] += (to[i + 1] - positions[i + 1]) * speed
      positions[i + 2] += (to[i + 2] - positions[i + 2]) * speed
    }

    geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry />
      <pointsMaterial
        color={color}
        size={.1}
        sizeAttenuation
        transparent
        opacity={8}
      />
    </points>
  )
}

export default ParticleSystem
