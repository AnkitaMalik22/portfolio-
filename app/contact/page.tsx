'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Layout from '../components/layout'
import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import * as THREE from 'three'
import GlassCard from '../components/glass-card'

const experiences = [
  {
    title: 'B.Tech in Computer Science',
    organization: 'XYZ University',
    duration: '2012 - 2016',
    description: 'Graduated with honors. Specialized in Machine Learning and Web Technologies.',
  },
  {
    title: 'Junior Developer',
    organization: 'StartUp Ventures',
    duration: 'Jun 2016 - Feb 2018',
    description: 'Assisted in the development of a social media analytics tool. Gained extensive experience in React and Node.js.',
  },
  {
    title: 'Full Stack Developer',
    organization: 'Digital Solutions Ltd.',
    duration: 'Mar 2018 - Dec 2020',
    description: 'Developed and maintained multiple client projects. Introduced automated testing, reducing bug reports by 30%.',
  },
  {
    title: 'Senior Full Stack Developer',
    organization: 'Tech Innovators Inc.',
    duration: 'Jan 2021 - Present',
    description: 'Leading development of scalable web applications using MERN stack. Implemented microservices architecture, improving system efficiency by 40%.',
  },
]

function ExperienceScene() {
  const points = experiences.map((_, index) => {
    const t = index / (experiences.length - 1)
    const x = THREE.MathUtils.lerp(-4, 4, t)
    const y = Math.sin(t * Math.PI) * 1.5
    return new THREE.Vector3(x, y, 0)
  })

  return (
    <>
      {experiences.map((exp, index) => (
        <group key={index} position={points[index].toArray()}>
          <Text
            position={[0, 0.5, 0]}
            fontSize={0.3}
            color="white"
            anchorX="center"
            anchorY="bottom"
            maxWidth={2}
          >
            {exp.title}
          </Text>
          <Text
            position={[0, 0, 0]}
            fontSize={0.2}
            color="cyan"
            anchorX="center"
            anchorY="top"
            maxWidth={2}
          >
            {exp.organization}
          </Text>
        </group>
      ))}
    </>
  )
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -300])

  return (
    <Layout>
      <div ref={containerRef} className="min-h-screen">
        <div className="container mx-auto px-4 py-32">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center text-cyan-400 mb-12"
          >
            My Journey
          </motion.h1>
          <motion.div className="h-[600px] mb-12" style={{ y }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <ambientLight intensity={0.5} />
              <ExperienceScene />
            </Canvas>
          </motion.div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <GlassCard key={index} delay={index * 0.1}>
                <h2 className="text-2xl font-semibold text-white mb-2">{exp.title}</h2>
                <h3 className="text-xl text-cyan-400 mb-2">{exp.organization}</h3>
                <p className="text-gray-400 mb-4">{exp.duration}</p>
                <p className="text-gray-300">{exp.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

