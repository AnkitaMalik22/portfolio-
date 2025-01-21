'use client'

import { motion } from 'framer-motion'
import Layout from '../components/layout'
import Image from 'next/image'

const skillCategories = [
  {
    name: 'Frontend',
    skills: [
      { name: 'React', level: 90, description: 'Expert in building complex UIs with React, including hooks, context, and advanced patterns.' },
      { name: 'Next.js', level: 85, description: 'Proficient in server-side rendering, static site generation, and API routes with Next.js.' },
      { name: 'TypeScript', level: 80, description: 'Strong typing skills, interfaces, and advanced TypeScript features for robust frontends.' },
      { name: 'CSS/Sass', level: 85, description: 'Advanced styling with CSS-in-JS, Sass, and responsive design principles.' },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 85, description: 'Experienced in building scalable server-side applications and RESTful APIs with Node.js.' },
      { name: 'Express', level: 80, description: 'Proficient in creating robust web applications and APIs using Express.js framework.' },
      { name: 'MongoDB', level: 75, description: 'Skilled in designing and implementing MongoDB databases, including aggregation pipelines.' },
      { name: 'GraphQL', level: 70, description: 'Competent in designing and implementing GraphQL APIs for efficient data fetching.' },
    ]
  },
  {
    name: 'Full Stack',
    skills: [
      { name: 'MERN Stack', level: 85, description: 'Experienced in full-stack development using MongoDB, Express, React, and Node.js.' },
      { name: 'Docker', level: 70, description: 'Proficient in containerizing applications and managing multi-container environments.' },
      { name: 'CI/CD', level: 75, description: 'Skilled in setting up continuous integration and deployment pipelines for efficient development.' },
      { name: 'AWS', level: 65, description: 'Familiar with various AWS services for deploying and scaling web applications.' },
    ]
  }
]

export default function Skills() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          My Skills
        </motion.h1>
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold text-white mb-8">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">{skill.name}</h3>
                  <div className="relative pt-1 mb-4">
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
                      ></motion.div>
                    </div>
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-cyan-200 bg-cyan-900">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Layout>
  )
}

