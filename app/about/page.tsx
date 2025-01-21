'use client'

import { motion } from 'framer-motion'
import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-8"
        >
          About Me
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">My Journey</h2>
            <p className="text-gray-300 mb-4">
              I'm Ankita Malik, a passionate Full Stack Developer with a love for creating
              innovative web solutions. My journey in the world of programming began during
              my college years, and since then, I've been on an exciting path of continuous
              learning and growth.
            </p>
            <p className="text-gray-300">
              With expertise in the MERN stack and a keen eye for UI/UX design, I strive to
              build applications that not only function flawlessly but also provide an
              exceptional user experience.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-4">Education</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>B.Tech in Computer Science, XYZ University (20XX-20XX)</li>
              <li>Full Stack Web Development Bootcamp, ABC Coding Academy (20XX)</li>
            </ul>
            <h2 className="text-2xl font-semibold text-white mt-6 mb-4">Hobbies</h2>
            <ul className="list-disc list-inside text-gray-300">
              <li>Reading tech blogs and staying updated with the latest trends</li>
              <li>Contributing to open-source projects</li>
              <li>Hiking and exploring nature</li>
              <li>Photography</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </Layout>
  )
}

