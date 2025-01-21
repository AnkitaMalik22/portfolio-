'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import * as THREE from 'three'
import { Canvas, useFrame } from '@react-three/fiber'
import { Line, Text } from '@react-three/drei'

function CurvedLine({ start, end, text }: { start: [number, number, number], end: [number, number, number], text: string }) {
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    new THREE.Vector3((start[0] + end[0]) / 2, (start[1] + end[1]) / 2, 5),
    new THREE.Vector3(...end)
  )

  const points = curve.getPoints(50)

  return (
    <>
      <Line points={points} color="cyan" lineWidth={2} />
      <Text
        position={curve.getPoint(0.5).toArray()}
        fontSize={0.5}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </>
  )
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <group ref={groupRef}>
      <CurvedLine start={[-5, -2, 0]} end={[5, 2, 0]} text="Home" />
      <CurvedLine start={[-4, -1.5, 0]} end={[4, 1.5, 0]} text="About" />
      <CurvedLine start={[-3, -1, 0]} end={[3, 1, 0]} text="Skills" />
      <CurvedLine start={[-2, -0.5, 0]} end={[2, 0.5, 0]} text="Projects" />
      <CurvedLine start={[-1, 0, 0]} end={[1, 0, 0]} text="Contact" />
    </group>
  )
}

export default function CurvedRoute() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.5])

  return (
    <div ref={containerRef} className="h-screen w-full">
      <motion.div
        className="w-full h-full"
        style={{ scale }}
      >
        <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <Scene />
        </Canvas>
      </motion.div>
    </div>
  )
}

