'use client'

import React, { useEffect, useState } from 'react'
import Header from './header'
import Footer from './footer'
import Chat from './chat'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'

const DynamicStars = dynamic(() => import('./stars'), { ssr: false })
const DynamicInteractiveParticles = dynamic(() => import('./interactive-particles'), { ssr: false })

export default function Layout({ children }: { children: React.ReactNode }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      <DynamicStars />
      <DynamicInteractiveParticles />
      <motion.div
        className="absolute inset-0 pointer-events-none z-20"
        animate={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none z-30" />
      <Header />
      <main className="flex-grow relative z-40">{children}</main>
      <Footer />
      <Chat />
    </div>
  )
}

