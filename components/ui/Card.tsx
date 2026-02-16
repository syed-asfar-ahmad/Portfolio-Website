import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

const Card = ({ children, className = '', hover = true, delay = 0 }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`bg-white rounded-lg shadow-lg ${hover ? 'hover:shadow-xl' : ''} transition-shadow duration-300 ${className}`}
      whileHover={hover ? { y: -5 } : {}}
    >
      {children}
    </motion.div>
  )
}

export default Card
