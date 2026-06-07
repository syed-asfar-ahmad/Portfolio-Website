'use client'

import { useRef, useState } from 'react'
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  FaCalendarAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { basePath } from '@/utils/constants'

type ExperienceCard = {
  title: string
  company: string
  period: string
  location: string
  description: string
  logo: string
  isCurrent?: boolean
}

type TabId = 'professional' | 'volunteer' | 'ambassador'

const professionalData: ExperienceCard[] = [
  // {
  //   title: 'Associate Software Engineer',
  //   company: 'GenvoAI',
  //   period: 'April 2026 - Present',
  //   location: 'Remote',
  //   description:
  //     'Working as an Associate Software Engineer, building and maintaining scalable web applications. Also supporting AI and machine learning work, including image generation and AI models.',
  //   logo: '/images/logos/GENVOAI.png',
  //   isCurrent: true,
  // },
  {
    title: 'Associate Software Engineer',
    company: 'BugMonks',
    period: 'February 2026 - April 2026',
    location: 'Lahore',
    description:
      'Worked as an Associate Software Engineer, building and maintaining scalable web applications with a strong focus on full-stack delivery, performance, and clean development practices.',
    logo: '/images/logos/BUGMONKS.png',
  },
  {
    title: 'Associate Software Engineer',
    company: 'TxLabz',
    period: 'October 2025 - February 2026',
    location: 'Lahore',
    description:
      'Worked as an Associate Software Engineer, developed and maintained enterprise-level applications using modern full-stack technologies and engineering best practices.',
    logo: '/images/logos/TXLABZ.png',
  },
  {
    title: 'MERN Intern',
    company: 'TxLabz',
    period: 'June 2025 - September 2025',
    location: 'Lahore',
    description:
      'Completed MERN stack internship, developed full-stack web applications using MongoDB, Express.js, React, and Node.js technologies.',
    logo: '/images/logos/TXLABZ.png',
  },
  {
    title: 'IT Intern',
    company: 'Pak Elektron Limited (PEL)',
    period: 'July 2024 - August 2024',
    location: 'Lahore',
    description:
      'Completed project-based IT internship at Pak Elektron Limited, where I developed a MERN stack project and gained practical experience in software development.',
    logo: '/images/logos/PEL.png',
  },
]

const volunteerData: ExperienceCard[] = [
  {
    title: 'Social Media Manager',
    company: 'Volunteers Leading Governance (VLG)',
    period: 'Jan 2024 - August 2024',
    location: 'Lahore',
    description:
      "Managed VLG's Facebook and Instagram accounts. Posted content, handled inbox queries, and managed comments sections for local government services.",
    logo: '/images/logos/VLG.png',
  },
  {
    title: 'Complaints Representative',
    company: 'Volunteers Leading Governance (VLG)',
    period: 'May 2023 - January 2024',
    location: 'Lahore',
    description:
      'Served as local complaints representative for VLG, logged and forwarded public complaints (sanitation, water, municipal services), tracked resolutions, and coordinated with relevant authorities.',
    logo: '/images/logos/VLG.png',
  },
  {
    title: 'Zakat Campaign Fundraiser',
    company: 'Shaukat Khanum Memorial Cancer Hospital & Research Centre (SKMCH&RC)',
    period: 'Mar 2023 - May 2023',
    location: 'Lahore',
    description:
      "Led university team of 20+ volunteers for Shaukat Khanum Hospital's Zakat campaign. Distributed flyers, raised awareness about cancer treatment, and collected funds for cancer patients.",
    logo: '/images/logos/SKMCH.png',
  },
  {
    title: 'Digital Campaign Volunteer',
    company: 'Alkhidmat Foundation',
    period: 'Jul 2022 - Nov 2022',
    location: 'Online',
    description:
      'Participated in digital campaigns for flood-affected communities and Palestine relief efforts. Helped collect funds through online platforms and social media awareness campaigns.',
    logo: '/images/logos/ALKHIDMAT.png',
  },
  {
    title: 'Zakat Campaign Fundraiser',
    company: 'Shaukat Khanum Memorial Cancer Hospital & Research Centre (SKMCH&RC)',
    period: 'Mar 2022 - May 2022',
    location: 'Lahore',
    description:
      "Participated in Zakat fundraising campaign for Shaukat Khanum Hospital. Distributed awareness flyers and collected funds to support cancer patients' treatment and care.",
    logo: '/images/logos/SKMCH.png',
  },
  {
    title: 'Fundraising Volunteer',
    company: 'Kaavish Foundation',
    period: 'Nov 2021 - Apr 2022',
    location: 'Lahore',
    description:
      'Organized fundraising campaigns for various causes including medical camps in Lahore. Collected funds for different causes like Iftari distribution during Ramadan, wedding assistance, school fees support, and other community needs.',
    logo: '/images/logos/KAAVISH.png',
  },
  {
    title: 'TCF Baghbaan Fundraiser',
    company: 'The Citizens Foundation (TCF)',
    period: 'Sep 2021 - Dec 2021',
    location: 'Online',
    description:
      'Collected funds from friends, relatives, and community members for TCF Baghbaan campaign. Raised money to support TCF schools so underprivileged children could receive quality education.',
    logo: '/images/logos/TCF.png',
  },
]

const ambassadorData: ExperienceCard[] = [
  {
    title: "CodinGuru4.0 Ambassador",
    company: "Lahore University of Management Sciences (LUMS)",
    period: "Jan 2022 - Feb 2022",
    location: "Lahore",
    description:
      "Facilitated team registrations from my university to compete in CodinGuru competitions and coordinated participation details.",
    logo: "/images/logos/CONDINGURU.jpg",
  },
  {
    title: "SOFTEC'22 Ambassador",
    company: "FAST Lahore",
    period: "Jan 2022 - Mar 2022",
    location: "Lahore",
    description:
      "Drove registrations from my university for SOFTEC competitions, guiding teams through event categories and sign-ups.",
    logo: "/images/logos/SOFTEC.png",
  },
  {
    title: "GDSC Ambassador",
    company: "Punjab University College of Information Technology (PUCIT)",
    period: "Oct 2021 - Aug 2022",
    location: "Lahore",
    description:
      "Marketed GDSC online events (webinars, tech talks, workshops) within my university to boost student participation.",
    logo: "/images/logos/GDSC.png",
  },
]

const tabs: { id: TabId; label: string; subtitle: string }[] = [
  {
    id: 'professional',
    label: 'Professional',
    subtitle: 'Software engineering roles and internships',
  },
  {
    id: 'volunteer',
    label: 'Volunteer',
    subtitle: 'Volunteer and fundraising work',
  },
  {
    id: 'ambassador',
    label: 'Ambassador',
    subtitle: 'Campus ambassador and community roles',
  },
]

const tabData: Record<TabId, ExperienceCard[]> = {
  professional: professionalData,
  volunteer: volunteerData,
  ambassador: ambassadorData,
}

function hasLargeLogo(company: string) {
  return company.includes('TxLabz') || company.includes('VLG') || company.includes('BugMonks')
}

function TimelineCard({
  item,
  index,
  inView,
  isLast,
}: {
  item: ExperienceCard
  index: number
  inView: boolean
  isLast: boolean
}) {
  const reduceMotion = useReducedMotion()
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, active: false })
  const largeLogo = hasLargeLogo(item.company)

  return (
    <motion.li
      initial={{ opacity: 0, x: reduceMotion ? 0 : -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.12 + index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`relative pl-10 sm:pl-14 md:pl-20 ${isLast ? '' : 'pb-8 sm:pb-10 md:pb-14'}`}
    >
      <div className="absolute left-0 top-1 flex flex-col items-center">
        <motion.span
          className={`relative z-10 flex h-9 w-9 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-xl sm:rounded-2xl border shadow-lg ${
            item.isCurrent
              ? 'border-[#00ABFB]/60 bg-[#00ABFB]/15 shadow-[#00ABFB]/25'
              : 'border-gray-200/80 bg-white dark:border-zinc-700 dark:bg-zinc-900 shadow-black/5 dark:shadow-black/30'
          }`}
          whileHover={reduceMotion ? undefined : { scale: 1.08 }}
          transition={{ type: 'spring', stiffness: 320, damping: 20 }}
        >
          <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-[#00ABFB]">
            {String(index + 1).padStart(2, '0')}
          </span>
          {item.isCurrent ? (
            <span className="absolute -right-1 -top-1 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00ABFB] opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-[#00ABFB]" />
            </span>
          ) : null}
        </motion.span>
      </div>

      <motion.article
        className="group relative"
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect()
          setSpotlight({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
            active: true,
          })
        }}
        onMouseLeave={() => setSpotlight((prev) => ({ ...prev, active: false }))}
        whileHover={reduceMotion ? undefined : { y: -6 }}
        transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      >
        <div className="pointer-events-none absolute -inset-px rounded-[1.35rem] bg-gradient-to-br from-[#00ABFB]/70 via-[#00ABFB]/20 to-transparent opacity-0 blur-[1px] transition-opacity duration-500 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-2xl sm:rounded-[1.35rem] border border-gray-200/70 bg-white/75 shadow-[0_16px_40px_-24px_rgba(0,0,0,0.22)] backdrop-blur-xl dark:border-zinc-700/70 dark:bg-zinc-900/70 dark:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.65)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 hidden sm:block"
            style={{
              background: spotlight.active
                ? `radial-gradient(520px circle at ${spotlight.x}px ${spotlight.y}px, rgba(0,171,251,0.14), transparent 42%)`
                : undefined,
            }}
          />
          <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 sm:-right-16 sm:-top-16 sm:h-40 sm:w-40 rounded-full bg-[#00ABFB]/10 blur-3xl transition-transform duration-700 group-hover:scale-125" />

          <div className="relative p-4 sm:p-6 md:p-8">
            <div className="mb-4 sm:mb-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-4">
              <div className="flex min-w-0 items-start gap-3 sm:gap-4">
                <div
                  className={`relative shrink-0 overflow-hidden rounded-xl sm:rounded-2xl border border-[#00ABFB]/20 bg-white p-1.5 sm:p-2 shadow-inner dark:bg-zinc-950/80 ${
                    largeLogo ? 'h-14 w-14 sm:h-16 sm:w-16 md:h-[4.5rem] md:w-[4.5rem]' : 'h-12 w-12 sm:h-14 sm:w-14'
                  }`}
                >
                  <Image
                    src={`${basePath}${item.logo}`}
                    alt={`${item.company} logo`}
                    fill
                    className="object-contain p-1 sm:p-1.5"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#00ABFB] dark:text-white sm:text-lg md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-1 break-words text-sm font-medium leading-snug text-gray-600 dark:text-gray-300">
                    {item.company}
                  </p>
                </div>
              </div>

              {item.isCurrent ? (
                <span className="inline-flex w-fit items-center gap-2 rounded-full border border-[#00ABFB]/30 bg-[#00ABFB]/10 px-3 py-1 text-[11px] font-semibold text-[#00ABFB] sm:text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#00ABFB] animate-pulse" />
                  Current Role
                </span>
              ) : null}
            </div>

            <div className="mb-4 sm:mb-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-2.5">
              <span className="inline-flex w-full items-center gap-2 rounded-xl border border-gray-200/80 bg-gray-50/80 px-3 py-2 text-xs font-medium text-gray-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-gray-300 sm:w-auto sm:rounded-full sm:py-1.5">
                <FaCalendarAlt className="shrink-0 text-[#00ABFB]" />
                <span className="break-words">{item.period}</span>
              </span>
              <span className="inline-flex w-full items-center gap-2 rounded-xl border border-gray-200/80 bg-gray-50/80 px-3 py-2 text-xs font-medium text-gray-600 dark:border-zinc-700 dark:bg-zinc-800/70 dark:text-gray-300 sm:w-auto sm:rounded-full sm:py-1.5">
                <FaMapMarkerAlt className="shrink-0 text-[#00ABFB]" />
                {item.location}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 sm:text-[15px] text-left sm:text-justify">
              {item.description}
            </p>
          </div>
        </div>
      </motion.article>
    </motion.li>
  )
}

type ExperienceProps = { skipBackground?: boolean }

const Experience = ({ skipBackground = false }: ExperienceProps) => {
  const [activeTab, setActiveTab] = useState<TabId>('professional')
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 })
  const timelineRef = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 0.8', 'end 0.4'],
  })

  const lineScale = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 90,
    damping: 28,
  })

  const activeItems = tabData[activeTab]
  const activeTabMeta = tabs.find((tab) => tab.id === activeTab)!

  return (
    <section
      id="experience"
      className={`relative overflow-hidden pt-4 pb-12 sm:pt-6 sm:pb-16 md:pb-20 ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'}`}
    >
      {!skipBackground && <AnimatedBackground />}

      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#00ABFB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-[#00ABFB]/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-8 text-center sm:mb-10 md:mb-14">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB] sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
            >
              Experience
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
              className="mx-auto max-w-4xl text-[1.65rem] font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
            >
              My{' '}
              <span className="animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent">
                work experience
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.35 }}
              className="mx-auto mt-4 max-w-2xl px-1 text-sm leading-relaxed text-gray-500 dark:text-gray-300 sm:mt-5 sm:px-0 md:text-base"
            >
              Software engineering roles, volunteer work, and ambassador positions.
            </motion.p>
          </div>

          <div className="mb-6 sm:mb-10 md:mb-12">
            <div className="mx-auto w-full max-w-md sm:max-w-xl md:max-w-2xl">
              <div className="rounded-full border border-gray-200/70 bg-gray-100/50 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-zinc-700/70 dark:bg-zinc-900/45 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="grid grid-cols-3 gap-0.5 sm:flex sm:gap-0">
                  {tabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex min-h-[2.25rem] items-center justify-center rounded-full px-2 py-1.5 text-center text-[11px] font-semibold leading-tight transition-colors sm:min-h-[2.75rem] sm:flex-1 sm:px-4 sm:py-2 sm:text-sm ${
                          isActive
                            ? 'text-gray-900 dark:text-white'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="experience-tab-surface"
                            className="absolute inset-0 rounded-full bg-white shadow-[0_6px_24px_-10px_rgba(0,171,251,0.45)] ring-1 ring-[#00ABFB]/20 dark:bg-zinc-800 dark:ring-[#00ABFB]/30"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        ) : null}
                        <span className="relative z-10">{tab.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6 text-center sm:mb-8 md:mb-10">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
                  {activeTabMeta.label} timeline
                </h2>
                <p className="mx-auto mt-2 max-w-2xl px-1 text-sm leading-relaxed text-gray-500 dark:text-gray-300 sm:px-0 md:text-base">
                  {activeTabMeta.subtitle}
                </p>
              </div>

              <div ref={timelineRef} className="relative">
                <div className="absolute bottom-0 left-[1.05rem] top-0 w-px bg-gray-200 dark:bg-zinc-800 sm:left-[1.35rem] md:left-[1.45rem]" />
                <motion.div
                  className="absolute left-[1.05rem] top-0 w-px origin-top bg-gradient-to-b from-[#00ABFB] via-[#00ABFB]/70 to-[#00ABFB]/20 sm:left-[1.35rem] md:left-[1.45rem]"
                  style={{ scaleY: reduceMotion ? 1 : lineScale, height: '100%' }}
                />

                <ul className="relative">
                  {activeItems.map((item, index) => (
                    <TimelineCard
                      key={`${activeTab}-${item.title}-${item.period}`}
                      item={item}
                      index={index}
                      inView={inView}
                      isLast={index === activeItems.length - 1}
                    />
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
