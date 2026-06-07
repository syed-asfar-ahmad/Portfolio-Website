'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

type TestimonialsHeroProps = { skipBackground?: boolean }

export default function TestimonialsHero({ skipBackground }: TestimonialsHeroProps) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.12 })

  return (
    <section
      className={`relative overflow-hidden pb-6 pt-4 sm:pb-8 md:pb-10 ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'}`}
    >
      {!skipBackground && <AnimatedBackground />}

      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#00ABFB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-[#00ABFB]/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl text-center"
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB] sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
          >
            Testimonials
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mx-auto max-w-4xl text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
          >
            What people say about{' '}
            <span className="animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent">
              working with me
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.45, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl px-1 text-sm leading-relaxed text-gray-500 dark:text-gray-300 sm:mt-5 sm:px-0 md:text-base"
          >
            Recommendations from colleagues, engineers, and leaders I have worked with.
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
