'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { basePath } from '@/utils/constants'

type HeroProps = { skipBackground?: boolean }

const Hero = ({ skipBackground = false }: HeroProps) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  const TypeText = ({ texts }: { texts: string[] }) => {
    const [displayText, setDisplayText] = useState('')
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
      const currentText = texts[textIndex]

      const timeout = setTimeout(() => {
        if (!isDeleting) {
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setTextIndex((textIndex + 1) % texts.length)
          }
        }
      }, isDeleting ? 50 : 100)

      return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, textIndex, texts])

    return (
      <span className="animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent">
        {displayText}
        <span className="ml-1 text-[#00ABFB] animate-pulse">|</span>
      </span>
    )
  }

  return (
    <section
      id="home"
      className={`relative flex min-h-screen items-center overflow-hidden pt-24 pb-10 lg:pb-0 ${
        skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'
      }`}
    >
      {!skipBackground && <AnimatedBackground />}

      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#00ABFB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-[#45c8ff]/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-6xl"
        >
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="text-left">
              <motion.p
                variants={itemVariants}
                className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#00ABFB] sm:mb-3 sm:text-xs sm:tracking-[0.35em]"
              >
                Hey there!
              </motion.p>

              <motion.h1
                variants={itemVariants}
                className="mb-4 text-[2rem] font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
              >
                <span className="text-gray-900 dark:text-white">I&apos;m </span>
                <span className="text-gray-900 dark:text-white">Syed Asfar Ahmad Bukhari</span>
                <br />
                <span className="mt-2 block text-2xl font-bold sm:text-3xl md:text-4xl">
                  <TypeText texts={['Software Engineer', 'Full Stack Developer']} />
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mb-6 max-w-xl text-[13px] leading-relaxed text-gray-500 dark:text-gray-300 sm:text-base"
              >
                Full Stack Developer crafting scalable web solutions with modern technologies.
                Passionate about clean code, user experience, and innovative software engineering
                practices.
              </motion.p>

              <motion.div variants={itemVariants} className="mb-6 flex items-center gap-4">
                <Link
                  href="/projects"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-[#00ABFB] px-6 text-sm font-semibold text-white shadow-[0_16px_40px_-20px_rgba(0,171,251,0.65)] transition-colors hover:bg-[#0098e0] sm:h-12 sm:text-[15px]"
                >
                  See my work
                </Link>
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <a
                    href="https://github.com/syed-asfar-ahmad"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#24292e] text-white shadow-md transition-transform hover:scale-105 sm:h-11 sm:w-11"
                    aria-label="GitHub"
                  >
                    <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/syed-asfar-ahmad-bukhari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A66C2] text-white shadow-md transition-transform hover:scale-105 sm:h-11 sm:w-11"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                  <a
                    href="mailto:contact@syedasfar.com"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EA4335] text-white shadow-md transition-transform hover:scale-105 sm:h-11 sm:w-11"
                    aria-label="Email"
                  >
                    <FaEnvelope className="h-4 w-4 sm:h-5 sm:w-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative mx-auto h-64 w-64 sm:h-80 sm:w-80"
            >
              <div className="absolute inset-0 rounded-[40%] bg-[#00ABFB]/20 blur-2xl" />
              <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-[#00ABFB]/30 shadow-[0_8px_32px_-12px_rgba(0,171,251,0.5)] dark:border-[#00ABFB]/25">
                <Image
                  src={`${basePath}/images/logos/PROFILE.png`}
                  alt="Profile photo"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 right-4 z-10 hidden md:block lg:right-6">
        <div className="relative h-32 w-32">
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 h-full w-full animate-[spin_10s_linear_infinite]"
          >
            <defs>
              <path
                id="hireMeCircle"
                d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
              />
            </defs>
            <text className="fill-gray-500 text-[20px] tracking-[3px] dark:fill-gray-400">
              <textPath
                href="#hireMeCircle"
                startOffset="0%"
                textLength="500"
                lengthAdjust="spacingAndGlyphs"
              >
                Software Engineer • Full Stack Developer •
              </textPath>
            </text>
          </svg>
          <Link
            href="/contact"
            className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#00ABFB] text-sm font-semibold text-white shadow-[0_12px_32px_-12px_rgba(0,171,251,0.65)] transition-colors hover:bg-[#0098e0]"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
