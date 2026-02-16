'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaCalendarAlt, FaUniversity } from 'react-icons/fa'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { basePath } from '@/utils/constants'

type EducationProps = { skipBackground?: boolean }

const Education = ({ skipBackground = false }: EducationProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const educationData = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'COMSATS University Lahore Campus',
      period: 'February 2021 - January 2025',
      location: 'Lahore',
      status: 'Completed',
      logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/COMSATS.png`
    },
    {
      degree: 'FSc Pre-Engineering',
      institution: 'Punjab Group of Colleges',
      period: 'August 2018 - March 2020',
      location: 'Lahore',
      status: 'Completed',
      logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/PGC.png`
    },
    {
      degree: 'Matriculation',
      institution: 'Hashmat Memorial School',
      period: 'April 2016 - March 2018',
      location: 'Lahore',
      status: 'Completed',
      logo: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/logos/HASHMAT.png`
    }
  ]

  return (
    <section id="education" className={`relative pt-6 pb-12 mb-16 overflow-hidden ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'}`}>
      {!skipBackground && <AnimatedBackground />}
      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ABFB] mb-3"
            >
              Education
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Education
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="origin-center h-0.5 w-16 mx-auto mb-5 rounded-full bg-[#00ABFB]"
            />
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="text-gray-500 dark:text-gray-200 text-sm md:text-base max-w-md mx-auto"
            >
              My academic journey through the years
            </motion.p>
          </div>

          {/* Education Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="group relative h-full"
                whileHover={{ y: -8 }}
              >
                <div className="h-full rounded-2xl border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-white dark:bg-dark-card p-6 sm:p-7 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#00ABFB]" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#00ABFB]/5 pointer-events-none" aria-hidden />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="relative w-14 h-14 shrink-0">
                        <Image
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300">
                        {edu.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-[#00ABFB] dark:group-hover:text-[#00ABFB]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 flex items-center gap-1.5">
                      <FaUniversity className="w-3.5 h-3.5 text-[#00ABFB]/80 shrink-0" />
                      {edu.institution}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 dark:text-gray-400 text-sm mt-auto">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="w-3.5 h-3.5 text-[#00ABFB]/80" />
                        {edu.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#00ABFB]/80" />
                        {edu.location}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Certifications
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-200">
                Professional certifications and training programs
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* AI & ML Certification */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="group relative h-full"
                whileHover={{ y: -8 }}
              >
                <div className="h-full rounded-2xl border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-white dark:bg-dark-card p-6 sm:p-7 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#00ABFB]" aria-hidden />
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#00ABFB]/5 pointer-events-none" aria-hidden />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="relative w-14 h-14 shrink-0">
                        <Image src={`${basePath}/images/logos/NAVTTC.png`} alt="NAVTTC" fill className="object-contain" />
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300">
                        Completed
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-[#00ABFB] dark:group-hover:text-[#00ABFB]">
                      Artificial Intelligence & Machine Learning
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 flex items-center gap-1.5">
                      <FaUniversity className="w-3.5 h-3.5 text-[#00ABFB]/80 shrink-0" />
                      NAVTTC (Superior Gold Campus)
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 dark:text-gray-400 text-sm mt-auto">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="w-3.5 h-3.5 text-[#00ABFB]/80" />
                        June 2023 - September 2023
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#00ABFB]/80" />
                        Lahore
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Frontend Development Certification */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.68 }}
                className="group relative h-full"
                whileHover={{ y: -8 }}
              >
                <div className="h-full rounded-2xl border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-white dark:bg-dark-card p-6 sm:p-7 shadow-md relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#00ABFB]" />
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#00ABFB]/5 pointer-events-none" aria-hidden />

                  <div className="relative flex flex-col h-full">
                    <div className="flex items-start justify-between gap-3 mb-5">
                      <div className="relative w-14 h-14 shrink-0">
                        <Image src={`${basePath}/images/logos/PNY.png`} alt="PNY Trainings" fill className="object-contain" />
                      </div>
                      <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300">
                        Completed
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300 group-hover:text-[#00ABFB] dark:group-hover:text-[#00ABFB]">
                      Advance Frontend Web Development
                    </h3>
                    <p className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 flex items-center gap-1.5">
                      <FaUniversity className="w-3.5 h-3.5 text-[#00ABFB]/80 shrink-0" />
                      PNY Trainings
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 dark:text-gray-400 text-sm mt-auto">
                      <span className="flex items-center gap-1.5">
                        <FaCalendarAlt className="w-3.5 h-3.5 text-[#00ABFB]/80" />
                        June 2022 - August 2022
                      </span>
                      <span className="flex items-center gap-1.5">
                        <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#00ABFB]/80" />
                        Lahore
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
