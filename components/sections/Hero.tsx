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
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
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
          // Typing
          if (charIndex < currentText.length) {
            setDisplayText(currentText.substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Finished typing, wait then start deleting
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            setDisplayText(currentText.substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false)
            setTextIndex((textIndex + 1) % texts.length)
          }
        }
      }, isDeleting ? 50 : 100)

      return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, textIndex, texts])

    return (
      <span>
        {displayText}
        <span className="ml-1 text-gray-400 dark:text-gray-400 animate-pulse">|</span>
      </span>
    )
  }

  return (
    <section id="home" className={`relative min-h-screen flex items-center pt-24 overflow-hidden ${skipBackground ? 'bg-transparent' : 'bg-gray-50 dark:bg-black'}`}>
      {!skipBackground && <AnimatedBackground />}
      <div className="container mx-auto px-3 sm:px-4 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
            {/* Left: Heading */}
            <div className="text-left">
              <motion.p variants={itemVariants} className="uppercase tracking-widest text-sm mb-2">
                <span className="text-gray-700 dark:text-gray-100 animate-pulse">
                  Hey there!
                </span>
              </motion.p>
              <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
                I'm <span className="text-gray-900 dark:text-white">Syed Asfar Ahmad Bukhari</span>
                <br />
                <span className="text-gray-800 dark:text-gray-100 text-3xl md:text-4xl">
                  <TypeText texts={["Software Engineer", "Full Stack Developer"]} />
                </span>
              </motion.h1>
              <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-200 text-lg mb-6 max-w-xl">
                Full Stack Developer crafting scalable web solutions with modern technologies. Passionate about clean code, user experience, and innovative software engineering practices.
              </motion.p>
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                <Link href="/projects" className="group relative px-6 py-3 rounded-xl bg-[#00ABFB] text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[#0099e0] transform hover:-translate-y-0.5 transition-all duration-200">
                  <span className="relative z-10">See my work</span>
                </Link>
                <div className="flex items-center gap-3">
                  <a href="https://github.com/syed-asfar-ahmad" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#24292e] text-white hover:bg-[#333] transform hover:scale-110 transition-all duration-200 shadow-md" aria-label="GitHub">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href="https://linkedin.com/in/syed-asfar-ahmad-bukhari" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transform hover:scale-110 transition-all duration-200 shadow-md" aria-label="LinkedIn">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href="mailto:syedasfar27@gmail.com" className="p-3 rounded-full bg-[#EA4335] text-white hover:bg-[#d93025] transform hover:scale-110 transition-all duration-200 shadow-md" aria-label="Email">
                    <FaEnvelope className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Right: Image with gradient blob */}
            <motion.div variants={itemVariants} className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
              <div className="absolute inset-0 rounded-[40%] bg-gray-400 dark:bg-gray-600 blur-2xl opacity-30"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-xl">
                <Image src={`${basePath}/images/logos/PROFILE.png`} alt="Profile photo" fill className="object-cover object-top" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Floating circular Hire Me badge - section direct child, bottom-right of viewport */}
      <div className="hidden md:block absolute right-6 bottom-10 z-10">
        <div className="relative w-32 h-32">
          <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]">
            <defs>
              <path id="hireMeCircle" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
            </defs>
            <text className="fill-gray-800 dark:fill-gray-200 text-[20px] tracking-[3px]">
              <textPath href="#hireMeCircle" startOffset="0%" textLength="500" lengthAdjust="spacingAndGlyphs">
                Software Engineer • Full Stack Developer •
              </textPath>
            </text>
          </svg>
          <Link href="/contact" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-black dark:bg-dark-card text-white flex items-center justify-center text-sm font-semibold shadow hover:bg-gray-900 dark:hover:bg-zinc-600 transition-colors duration-200">
            Hire Me
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
