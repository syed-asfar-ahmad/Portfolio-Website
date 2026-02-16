'use client'

import { motion } from 'framer-motion'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

type TestimonialsHeroProps = { skipBackground?: boolean }

export default function TestimonialsHero({ skipBackground }: TestimonialsHeroProps) {
  return (
    <section className={`relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'}`}>
      {!skipBackground && <AnimatedBackground />}
      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ABFB] mb-3"
          >
            Kind Words
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
          >
            Testimonials
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="origin-center h-0.5 w-16 mx-auto mb-5 rounded-full bg-[#00ABFB]"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-md mx-auto"
          >
            What colleagues and leads say about working with me
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
