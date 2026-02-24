'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa'
import KW from 'country-flag-icons/react/3x2/KW'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { basePath } from '@/utils/constants'

const aboutParagraphs = [
  'I am a Full Stack Developer with a background in Software Engineering and professional experience building modern web applications. I work across both frontend and backend, focusing on creating reliable, well structured solutions that are easy to use and scale effectively.',
  'Through my work on real world projects, I have gained strong experience in designing complete application workflows, managing data efficiently, and implementing features that support collaboration and system reliability. I enjoy translating complex requirements into practical, well organized solutions that align with business and user needs.',
  'I am committed to continuous improvement and believe in writing clear, maintainable code that supports long term growth. My goal is to build meaningful digital products while constantly refining my technical skills and professional approach.',
]

const mentor = {
  name: 'Fatmah Shah',
  who: 'PRINCE2® & CTFL Certified · Business Analysis & Software Implementation Consultant · Senior Support Officer at Advanced Technology Company',
  description: 'A trusted guide who has always been there showing the way when it mattered most and helping me grow. Grateful for her support and wisdom.',
  linkedinUrl: 'https://www.linkedin.com/in/fatmah-shah-4a5391196/',
}

type AboutProps = { skipBackground?: boolean }

const About = ({ skipBackground = false }: AboutProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.06,
  })

  return (
    <section id="about" className={`relative pt-6 pb-20 md:pb-28 overflow-hidden min-h-screen ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'}`}>
      {!skipBackground && <AnimatedBackground />}
      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Compact header */}
          <div className="text-center mb-8 md:mb-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ABFB] mb-2"
            >
              About
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight mb-3"
            >
              About Me
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="origin-center h-0.5 w-12 mx-auto mb-3 rounded-full bg-[#00ABFB]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-gray-500 dark:text-gray-200 text-sm"
            >
              Software Engineer
            </motion.p>
          </div>

          {/* Side-by-side: Image (left) + About me (right) — above the fold */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-8 lg:gap-12 items-start mb-12 md:mb-16"
          >
            {/* Left: profile */}
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative w-full max-w-[340px] p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 shadow-[0_8px_30px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:border-[#00ABFB]/50 dark:hover:border-[#00ABFB]/40">
                {/* Inner accent line – thin */}
                <div className="absolute inset-3 sm:inset-4 rounded-xl border border-[#00ABFB]/40 pointer-events-none" aria-hidden />
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-50 dark:bg-zinc-900/50">
                  <Image
                    src={`${basePath}/images/logos/ABOUT.jpg`}
                    alt="About"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 340px, 520px"
                    priority
                    quality={100}
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Right: About me content — grounded card */}
            <div className="rounded-2xl border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-gray-50/80 dark:bg-dark-card/80 p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#00ABFB]/50 dark:hover:border-[#00ABFB]/40">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00ABFB] mb-4">
                About me
              </p>
              <div className="space-y-4">
                {aboutParagraphs.map((para, j) => (
                  <p
                    key={j}
                    className="text-gray-700 dark:text-gray-100 text-sm md:text-base leading-relaxed text-justify"
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>

          {/*
            Mentor section is temporarily hidden.
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="rounded-2xl border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-gray-50/80 dark:bg-dark-card/80 p-6 md:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#00ABFB]/50 dark:hover:border-[#00ABFB]/40">
              <p className="text-xs font-semibold uppercase tracking-widest text-[#00ABFB] mb-3">
                Meet my mentor
              </p>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-1 flex flex-wrap items-center gap-2">
                {mentor.name}
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-100">
                  <FaMapMarkerAlt className="w-3 h-3" />
                  Kuwait
                  <span className="inline-block w-4 h-3 rounded overflow-hidden">
                    <KW title="Kuwait" className="w-full h-full block" />
                  </span>
                </span>
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-200 mb-3">
                {mentor.who}
              </p>
              <p className="text-gray-700 dark:text-gray-100 italic text-sm md:text-base mb-4 text-justify">
                &ldquo;{mentor.description}&rdquo;
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={mentor.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0A66C2] text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-[#004182] hover:scale-105 hover:shadow-md active:scale-100 transition-all duration-200"
                >
                  <FaLinkedin className="w-4 h-4 shrink-0 text-white" />
                  LinkedIn
                </a>
              </div>
              </div>
            </motion.div>
          */}
        </motion.div>
      </div>
    </section>
  )
}

export default About
