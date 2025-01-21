'use client'

import { motion } from 'framer-motion'
import Layout from '../components/layout'

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components.',
    date: '2023-05-15',
  },
  {
    id: 2,
    title: 'Building Scalable Node.js Applications',
    excerpt: 'Discover best practices for creating scalable and maintainable Node.js applications.',
    date: '2023-06-02',
  },
  {
    id: 3,
    title: 'Introduction to GraphQL',
    excerpt: 'Explore the basics of GraphQL and how it can improve your API development process.',
    date: '2023-06-20',
  },
]

export default function Blog() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          Blog
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6"
            >
              <h2 className="text-2xl font-semibold text-white mb-4">{post.title}</h2>
              <p className="text-gray-300 mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 text-sm">{post.date}</span>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

