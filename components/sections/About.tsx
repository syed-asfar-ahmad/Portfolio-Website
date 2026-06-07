'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { basePath } from '@/utils/constants'

const aboutParagraphs = [
  'I am a Full Stack Developer with a background in Software Engineering and professional experience building modern web applications. I work across both frontend and backend, focusing on reliable, well structured solutions that are easy to use and scale effectively.',
  'Through real world projects, I have gained strong experience in designing complete application workflows, managing data efficiently, and implementing features that support collaboration and system reliability. I enjoy turning complex requirements into practical, well organized solutions.',
  'I am committed to continuous improvement and believe in writing clear, maintainable code that supports long term growth. My goal is to build meaningful digital products while refining my technical skills and professional approach.',
]

type AboutProps = { skipBackground?: boolean }

const About = ({ skipBackground = false }: AboutProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 })
  const reduceMotion = useReducedMotion()

  return (
    <section
      id="about"
      className={`relative overflow-hidden pb-14 sm:pb-16 md:pb-20 ${
        skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'
      } pt-2 sm:pt-4`}
    >
      {!skipBackground && <AnimatedBackground />}

      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-[#00ABFB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#45c8ff]/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-6 text-center sm:mb-10 md:mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#00ABFB] sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
            >
              About
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mx-auto max-w-4xl text-[1.65rem] font-extrabold leading-[1.2] tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl"
            >
              A little{' '}
              <span className="animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent">
                about me
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-gray-500 dark:text-gray-300 sm:mt-5 sm:max-w-2xl sm:text-base"
            >
              Full Stack Developer focused on clean code and scalable web applications.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-xl border border-gray-200/70 bg-white/75 shadow-[0_24px_60px_-36px_rgba(0,171,251,0.35)] backdrop-blur-xl dark:border-zinc-700/70 dark:bg-zinc-900/70 sm:rounded-[1.75rem]"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00ABFB]/10 blur-3xl transition-transform duration-700 group-hover:scale-110" />

            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/11] lg:aspect-auto lg:min-h-[26rem]">
                <Image
                  src={`${basePath}/images/logos/ABOUT.jpg`}
                  alt="Syed Asfar Ahmad Bukhari"
                  fill
                  className="object-cover object-[70%_38%] transition-transform duration-700 group-hover:scale-[1.03] sm:object-[68%_36%] lg:object-[65%_34%]"
                  sizes="(max-width: 1024px) 100vw, 540px"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-black/10" />
              </div>

              <div className="relative flex flex-col justify-center p-4 sm:p-6 md:p-8 lg:p-9">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB] sm:text-[11px]">
                  Profile
                </p>
                <h2 className="mt-2 text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-[1.65rem]">
                  Syed Asfar Ahmad Bukhari
                </h2>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer · Full Stack Developer
                </p>

                <div className="my-5 h-px bg-gradient-to-r from-[#00ABFB]/35 via-gray-200/80 to-transparent dark:via-zinc-700/80 sm:my-6" />

                <div className="space-y-4 sm:space-y-5">
                  {aboutParagraphs.map((paragraph, index) => (
                    <motion.p
                      key={paragraph.slice(0, 24)}
                      initial={{ opacity: 0, y: reduceMotion ? 0 : 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: 0.45,
                        delay: 0.28 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-[13px] leading-[1.8] text-gray-600 dark:text-gray-300 sm:text-[15px] sm:leading-[1.85]"
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
