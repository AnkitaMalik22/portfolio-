import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`backdrop-blur-lg bg-white/10 rounded-lg p-6 border border-white/20 shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 ${className}`}
    >
      {children}
    </motion.div>
  )
}

