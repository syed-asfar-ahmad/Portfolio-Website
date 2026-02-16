'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaRocket, FaCalendarAlt, FaMapMarkerAlt, FaUniversity } from 'react-icons/fa'
import Image from 'next/image'
import { basePath } from '@/utils/constants'

const Ambassador = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const ambassadorData = [
    {
      title: "CodinGuru4.0 Ambassador",
      organization: "Lahore University of Management Sciences (LUMS)",
      organizationShort: "LUMS",
      period: "Jan 2022 - Feb 2022",
      location: "Lahore",
      logo: "/images/logos/CONDINGURU.jpg",
      blurb: "Facilitated team registrations from my university to compete in CodinGuru competitions and coordinated participation details."
    },
    {
      title: "SOFTEC'22 Ambassador",
      organization: "FAST Lahore",
      organizationShort: "FAST Lahore",
      period: "Jan 2022 - Mar 2022",
      location: "Lahore",
      logo: "/images/logos/SOFTEC.png",
      blurb: "Drove registrations from my university for SOFTEC competitions, guiding teams through event categories and sign‑ups."
    },
    {
      title: "GDSC Ambassador",
      organization: "Punjab University College of Information Technology (PUCIT)",
      organizationShort: "PUCIT",
      period: "Oct 2021 - Aug 2022",
      location: "Lahore",
      logo: "/images/logos/GDSC.png",
      blurb: "Marketed GDSC online events (webinars, tech talks, workshops) within my university to boost student participation."
    }
  ]

  return (
    <section id="ambassador" className="pt-6 pb-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4 sm:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gray-800 rounded-full mb-6 shadow-lg"
            >
              <FaRocket className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Ambassador
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-gray-600 dark:text-gray-200 max-w-2xl mx-auto leading-relaxed"
            >
              My contributions
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute left-4 sm:left-8 top-2 sm:top-3 bottom-0 w-0.5 bg-gray-600"></div>
            {ambassadorData.map((ambassador, index) => (
              <motion.div
                key={ambassador.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative mb-8 sm:mb-10 last:mb-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 sm:left-8 w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 dark:bg-gray-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-800 shadow-lg z-10 -translate-x-1/2"></div>

                {/* Card */}
                <div
                  className="relative ml-8 sm:ml-24 group bg-white/80 dark:bg-dark-card/80 backdrop-blur rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-dark-border overflow-hidden"
                >
                  {/* Accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gray-600 dark:bg-gray-500"></div>

                  <div className="flex items-start gap-3 sm:gap-5">
                    {/* Logo */}
                    <div className="w-10 h-10 sm:w-14 sm:h-14 relative flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Image
                        src={`${basePath}${ambassador.logo}`}
                        alt={`${ambassador.organization} logo`}
                        fill
                        className="object-contain"
                      />
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 break-words">
                          {ambassador.title}
                        </h3>
                        <span className="px-2 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100 self-start whitespace-nowrap">
                          {ambassador.period}
                        </span>
                      </div>

                      <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-500 dark:text-gray-200">
                        <div className="flex items-center gap-2">
                          <FaMapMarkerAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-200 flex-shrink-0" />
                          <span>{ambassador.location}</span>
                        </div>
                        <div className="mt-1 text-gray-600 dark:text-gray-200 flex items-center gap-2">
                          <FaUniversity className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 dark:text-gray-200 flex-shrink-0" />
                          <span className="truncate sm:hidden">{(ambassador as any).organizationShort || ambassador.organization}</span>
                          <span className="hidden sm:inline truncate">{ambassador.organization}</span>
                        </div>
                      </div>

                      {ambassador.blurb && (
                        <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-200 leading-relaxed">
                          {ambassador.blurb}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary removed per request */}
        </motion.div>
      </div>
    </section>
  )
}

export default Ambassador
