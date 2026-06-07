'use client'

import { useRef } from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { basePath } from '@/utils/constants'

type EducationItem = {
  degree: string
  institution: string
  period: string
  location: string
  logo: string
  isLatest?: boolean
}

const academicData: EducationItem[] = [
  {
    degree: 'Bachelor of Software Engineering',
    institution: 'COMSATS University Lahore Campus',
    period: 'February 2021 - January 2025',
    location: 'Lahore',
    logo: '/images/logos/COMSATS.png',
    isLatest: true,
  },
  {
    degree: 'FSc Pre-Engineering',
    institution: 'Punjab Group of Colleges',
    period: 'August 2018 - March 2020',
    location: 'Lahore',
    logo: '/images/logos/PGC.png',
  },
  {
    degree: 'Matriculation',
    institution: 'Hashmat Memorial School',
    period: 'April 2016 - March 2018',
    location: 'Lahore',
    logo: '/images/logos/HASHMAT.png',
  },
]

const certificationsData: EducationItem[] = [
  {
    degree: 'Artificial Intelligence & Machine Learning',
    institution: 'NAVTTC (Superior Gold Campus)',
    period: 'June 2023 - September 2023',
    location: 'Lahore',
    logo: '/images/logos/NAVTTC.png',
  },
  {
    degree: 'Advanced Frontend Web Development',
    institution: 'PNY Trainings',
    period: 'June 2022 - August 2022',
    location: 'Lahore',
    logo: '/images/logos/PNY.png',
  },
]

function parseYears(period: string) {
  const years = period.match(/\d{4}/g)
  if (!years?.length) return { start: '', end: '' }
  return {
    start: years[0],
    end: years[years.length - 1],
  }
}

function AcademicRow({
  item,
  index,
  isLast,
}: {
  item: EducationItem
  index: number
  isLast: boolean
}) {
  const reduceMotion = useReducedMotion()
  const [inView] = useInView({ triggerOnce: true, threshold: 0.2 })
  const years = parseYears(item.period)
  const reverse = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${isLast ? '' : 'pb-12 sm:pb-16 md:pb-20'}`}
    >
      <div
        className={`group relative overflow-hidden rounded-[1.75rem] border border-gray-200/50 bg-white/40 p-5 backdrop-blur-2xl transition-all duration-500 dark:border-zinc-700/40 dark:bg-zinc-900/40 sm:p-7 md:p-9 ${
          reverse ? 'md:ml-8 lg:ml-16' : 'md:mr-8 lg:mr-16'
        } hover:border-[#00ABFB]/35 hover:shadow-[0_30px_80px_-40px_rgba(0,171,251,0.45)]`}
      >
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#00ABFB]/[0.07] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative grid grid-cols-1 gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-8 lg:gap-12">
          <div className="flex items-center gap-4 md:flex-col md:items-start md:gap-2">
            <p className="text-[clamp(2rem,6vw,3.75rem)] font-light leading-none tracking-tight text-[#00ABFB]">
              {years.start}
            </p>
            <div className="hidden h-px w-12 bg-[#00ABFB]/40 md:block" />
            <p className="text-sm font-medium tracking-widest text-gray-400 dark:text-gray-500 md:text-base">
              {years.end}
            </p>
          </div>

          <div className="min-w-0">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-[#00ABFB]/20 bg-white p-2.5 shadow-[0_8px_30px_-12px_rgba(0,171,251,0.35)] dark:bg-zinc-950 sm:h-[4.5rem] sm:w-[4.5rem]">
                <Image
                  src={`${basePath}${item.logo}`}
                  alt={`${item.institution} logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>
              {item.isLatest ? (
                <span className="rounded-full border border-[#00ABFB]/30 bg-[#00ABFB]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#00ABFB]">
                  Latest Degree
                </span>
              ) : null}
            </div>

            <h3 className="text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[#00ABFB] dark:text-white sm:text-2xl md:text-3xl">
              {item.degree}
            </h3>
            <p className="mt-2 text-base font-medium text-gray-600 dark:text-gray-300 md:text-lg">
              {item.institution}
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-2.5">
              <span className="inline-flex w-full items-center gap-2 rounded-xl border border-gray-200/80 bg-gray-50/80 px-3 py-2 text-xs font-medium text-gray-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-gray-300 sm:w-auto sm:rounded-full sm:py-1.5">
                <FaCalendarAlt className="shrink-0 text-[#00ABFB]" />
                <span className="break-words">{item.period}</span>
              </span>
              <span className="inline-flex w-full items-center gap-2 rounded-xl border border-gray-200/80 bg-gray-50/80 px-3 py-2 text-xs font-medium text-gray-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-gray-300 sm:w-auto sm:rounded-full sm:py-1.5">
                <FaMapMarkerAlt className="shrink-0 text-[#00ABFB]" />
                {item.location}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

function CertificationCard({
  item,
  index,
}: {
  item: EducationItem
  index: number
}) {
  const reduceMotion = useReducedMotion()
  const [inView] = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <motion.article
      initial={{ opacity: 0, x: reduceMotion ? 0 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative mx-auto w-full max-w-[520px] md:mx-0 md:max-w-[560px]"
    >
      <div className="relative overflow-hidden rounded-[1.75rem] p-[1px]">
        <div className="absolute inset-[-60%] animate-border-glow bg-[conic-gradient(from_0deg,transparent_0_280deg,#00ABFB_320deg,#45c8ff_360deg)]" />
        <div className="relative overflow-hidden rounded-[1.72rem] bg-white/90 p-6 backdrop-blur-2xl dark:bg-zinc-950/95 sm:p-8">
          <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#00ABFB]/15 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
            <div className="relative mx-auto h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-[#00ABFB]/20 bg-white p-3 dark:bg-zinc-900 sm:mx-0 sm:h-24 sm:w-24">
              <Image
                src={`${basePath}${item.logo}`}
                alt={`${item.institution} logo`}
                fill
                className="object-contain p-1"
              />
            </div>

            <div className="min-w-0 flex-1 text-center sm:text-left">
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB]">
                Certification {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="text-lg font-bold leading-snug text-gray-900 dark:text-white sm:text-xl md:text-2xl">
                {item.degree}
              </h3>
              <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-300 sm:text-base">
                {item.institution}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-zinc-800 dark:text-gray-300">
                  <FaCalendarAlt className="text-[#00ABFB]" />
                  {item.period}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600 dark:bg-zinc-800 dark:text-gray-300">
                  <FaMapMarkerAlt className="text-[#00ABFB]" />
                  {item.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

type EducationProps = { skipBackground?: boolean }

const Education = ({ skipBackground = false }: EducationProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.04 })
  const academicRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: academicRef,
    offset: ['start 0.75', 'end 0.35'],
  })

  const lineScale = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 80,
    damping: 26,
  })

  return (
    <section
      id="education"
      className={`relative overflow-hidden pt-4 pb-12 sm:pt-6 sm:pb-16 md:pb-20 ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'}`}
    >
      {!skipBackground && <AnimatedBackground />}

      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#00ABFB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-[#00ABFB]/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-8 text-center sm:mb-10 md:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB] sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
            >
              Education
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mx-auto max-w-4xl text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              My education and{' '}
              <span className="animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent">
                certifications
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mx-auto mt-4 max-w-2xl px-1 text-sm leading-relaxed text-gray-500 dark:text-gray-300 sm:mt-5 sm:px-0 md:text-base"
            >
              Degrees and training programs I have completed.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mb-6 text-center sm:mb-8 md:mb-10"
          >
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB]">
              Academic
            </p>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
              Formal education timeline
            </h2>
            <p className="mx-auto mt-2 max-w-2xl px-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:px-0 md:text-base">
              Schools and universities I attended
            </p>
          </motion.div>

          <div ref={academicRef} className="relative pl-4 sm:pl-6 md:pl-8">
            <div className="absolute bottom-0 left-0 top-0 w-px bg-gray-200 dark:bg-zinc-800" />
            <motion.div
              className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-[#00ABFB] via-[#00ABFB]/60 to-transparent"
              style={{ height: '100%', scaleY: reduceMotion ? 1 : lineScale }}
            />

            <div className="relative space-y-0">
              {academicData.map((item, index) => (
                <div key={item.degree} className="relative">
                  <span className="absolute -left-4 top-8 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[#00ABFB] bg-white dark:bg-black sm:-left-6 sm:top-10 md:-left-8">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00ABFB]" />
                  </span>
                  <AcademicRow
                    item={item}
                    index={index}
                    isLast={index === academicData.length - 1}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 sm:mt-20 md:mt-24">
            <div
              className="mx-auto mb-10 h-px max-w-md bg-gradient-to-r from-transparent via-[#00ABFB]/35 to-transparent sm:mb-12 md:mb-14"
              aria-hidden
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="mb-6 text-center sm:mb-8 md:mb-10"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB]">
                Certifications
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
                Training and certification programs
              </h2>
              <p className="mx-auto mt-2 max-w-2xl px-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:px-0 md:text-base">
                Additional courses and certifications
              </p>
            </motion.div>

            <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-center md:gap-8">
              {certificationsData.map((item, index) => (
                <CertificationCard key={item.degree} item={item} index={index} />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
