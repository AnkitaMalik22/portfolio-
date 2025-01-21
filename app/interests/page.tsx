'use client'

import { motion } from 'framer-motion'
import Layout from '../components/layout'
import Image from 'next/image'

const interests = [
  {
    name: 'Coding Challenges',
    description: 'I love solving complex coding problems and participating in hackathons.',
    meme: '/memes/coding-challenge.jpg'
  },
  {
    name: 'Open Source Contribution',
    description: 'Contributing to open source projects and giving back to the community.',
    meme: '/memes/open-source.jpg'
  },
  {
    name: 'Tech Meetups',
    description: 'Attending and sometimes speaking at local tech meetups and conferences.',
    meme: '/memes/tech-meetup.jpg'
  },
  {
    name: 'Sci-Fi Books',
    description: 'Reading science fiction novels, especially those related to technology and AI.',
    meme: '/memes/scifi-books.jpg'
  }
]

export default function Interests() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-32">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-cyan-400 mb-12"
        >
          My Interests
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <motion.div
              key={interest.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500/20 transition-shadow"
            >
              <Image
                src={interest.meme || "/placeholder.svg"}
                alt={`${interest.name} meme`}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-white mb-4">{interest.name}</h2>
                <p className="text-gray-300">{interest.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

