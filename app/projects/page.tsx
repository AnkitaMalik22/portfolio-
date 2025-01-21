'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Layout from '../components/layout'
import GlassCard from '../components/glass-card'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    link: 'https://github.com/ankitamalik/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    technologies: ['React', 'GraphQL', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/ankitamalik/task-management-app',
  },
  {
    id: 3,
    title: 'Weather Forecast Dashboard',
    description: 'An interactive weather dashboard with data visualization.',
    technologies: ['React', 'D3.js', 'Node.js', 'Express'],
    link: 'https://github.com/ankitamalik/weather-forecast-dashboard',
  },
]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const technologies = ['All', ...new Set(projects.flatMap(p => p.technologies))]

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.technologies.includes(filter))

  return (
    <Layout>
      <div className="container mx-auto px-4 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          My Projects
        </motion.h1>
        <div className="flex justify-center mb-8">
          {technologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(tech)}
              className={`mx-2 px-4 py-2 rounded-full ${
                filter === tech
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
        <AnimatePresence>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <GlassCard key={project.id} className="flex flex-col">
                <h2 className="text-2xl font-semibold text-white mb-4">{project.title}</h2>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  View Project
                </a>
              </GlassCard>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </Layout>
  )
}

