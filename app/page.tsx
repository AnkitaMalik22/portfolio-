'use client'

import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Layout from './components/layout'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import GlassCard from './components/glass-card'

const FloatingTech = ({ tech, index }: { tech: string; index: number }) => {
  const y = useTransform(
    useScroll().scrollYProgress,
    [0, 1],
    [0, Math.random() * 100 - 50]
  )

  return (
    <motion.div
      className="px-4 py-2 backdrop-blur-md bg-white/10 rounded-full border border-white/20 text-cyan-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      style={{ y }}
      whileHover={{ scale: 1.1, boxShadow: '0 0 15px rgba(34,211,238,0.4)' }}
    >
      {tech}
    </motion.div>
  )
}

const SkillCard = ({ skill, description, index }: { skill: string; description: string; index: number }) => (
  <GlassCard>
    <h3 className="text-xl font-semibold text-cyan-400 mb-2">{skill}</h3>
    <p className="text-gray-300">{description}</p>
  </GlassCard>
)

export default function Home() {
  const skills = [
    { skill: "Frontend Development", description: "Expertise in React, Next.js, and modern CSS frameworks like Tailwind." },
    { skill: "Backend Development", description: "Proficient in Node.js, Express, and database management with MongoDB." },
    { skill: "Full Stack Integration", description: "Seamlessly connecting frontend and backend for robust web applications." },
    { skill: "UI/UX Design", description: "Creating intuitive and visually appealing user interfaces and experiences." },
    { skill: "API Development", description: "Designing and implementing RESTful APIs for efficient data handling." },
    { skill: "Performance Optimization", description: "Enhancing web application speed and efficiency for better user experience." }
  ]

  return (
    <Layout>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="relative w-full z-10">
          <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-3xl text-center">
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <div className="text-cyan-400 text-lg font-mono mb-4">Hello World! I'm</div>
                <h1 className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-6xl md:text-8xl font-extrabold text-transparent pb-4">
                  Ankita Malik
                </h1>
                <div className="text-2xl md:text-4xl font-bold text-gray-200 mt-4">
                  <TypeAnimation
                    sequence={[
                      'Full Stack Developer',
                      2000,
                      'MERN Stack Expert',
                      2000,
                      'UI/UX Enthusiast',
                      2000,
                    ]}
                    wrapper="span"
                    repeat={Infinity}
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 justify-center mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript', 'Next.js'].map((tech, index) => (
                  <FloatingTech key={tech} tech={tech} index={index} />
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="backdrop-blur-lg bg-white/10 p-6 rounded-lg border border-white/20 shadow-xl"
              >
                <p className="text-lg text-gray-300 leading-relaxed">
                  Passionate about building innovative web solutions with modern technologies. 
                  I specialize in turning complex problems into elegant, user-friendly interfaces.
                  Let's create something amazing together!
                </p>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-4 justify-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-cyan-500 text-cyan-400 rounded-full font-semibold hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-shadow"
                >
                  Contact Me
                </motion.a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-32">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-cyan-400 mb-12"
        >
          My Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={skill.skill} skill={skill.skill} description={skill.description} index={index} />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-32">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-cyan-400 mb-8"
        >
          Special Thanks
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-300 mb-8"
        >
          I'd like to express my gratitude to the following YouTubers who have inspired and educated me throughout my journey:
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Traversy Media', 'The Net Ninja', 'Web Dev Simplified', 'Fireship', 'Academind', 'Ben Awad'].map((youtuber, index) => (
            <GlassCard key={youtuber} className="text-center">
              <h3 className="text-xl font-semibold text-white mb-2">{youtuber}</h3>
              <p className="text-gray-400">Thank you for your amazing content!</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Layout>
  )
}

