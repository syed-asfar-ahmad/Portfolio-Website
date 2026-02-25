'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
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

const professionalData: ExperienceCard[] = [
  {
    title: 'Associate Software Engineer',
    company: 'BugMonks',
    period: 'February 2026 - Present',
    location: 'Lahore',
    description: 'Working as an Associate Software Engineer, building and maintaining scalable web applications with a strong focus on full-stack delivery, performance, and clean development practices.',
    logo: '/images/logos/BUGMONKS.png',
    isCurrent: true,
  },
  {
    title: 'Associate Software Engineer',
    company: 'TxLabz',
    period: 'October 2025 - February 2026',
    location: 'Lahore',
    description: 'Worked as an Associate Software Engineer, developed and maintained enterprise-level applications using modern full-stack technologies and engineering best practices.',
    logo: '/images/logos/TXLABZ.png',
  },
  {
    title: 'MERN Intern',
    company: 'TxLabz',
    period: 'June 2025 - September 2025',
    location: 'Lahore',
    description: 'Completed MERN stack internship, developed full-stack web applications using MongoDB, Express.js, React, and Node.js technologies.',
    logo: '/images/logos/TXLABZ.png',
  },
  {
    title: 'IT Intern',
    company: 'Pak Elektron Limited (PEL)',
    period: 'July 2024 - August 2024',
    location: 'Lahore',
    description: 'Completed project-based IT internship at Pak Elektron Limited, where I developed a MERN stack project and gained practical experience in software development.',
    logo: '/images/logos/PEL.png',
  },
]

const volunteerData: ExperienceCard[] = [
  {
    title: 'Social Media Manager',
    company: 'Volunteers Leading Governance (VLG)',
    period: 'Jan 2024 - August 2024',
    location: 'Lahore',
    description: "Managed VLG's Facebook and Instagram accounts. Posted content, handled inbox queries, and managed comments sections for local government services.",
    logo: '/images/logos/VLG.png',
  },
  {
    title: 'Complaints Representative',
    company: 'Volunteers Leading Governance (VLG)',
    period: 'May 2023 - January 2024',
    location: 'Lahore',
    description: 'Served as local complaints representative for VLG - logged and forwarded public complaints (sanitation, water, municipal services), tracked resolutions, and coordinated with relevant authorities.',
    logo: '/images/logos/VLG.png',
  },
  {
    title: 'Zakat Campaign Fundraiser',
    company: 'Shaukat Khanum Memorial Cancer Hospital & Research Centre (SKMCH&RC)',
    period: 'Mar 2023 - May 2023',
    location: 'Lahore',
    description: "Led university team of 20+ volunteers for Shaukat Khanum Hospital's Zakat campaign. Distributed flyers, raised awareness about cancer treatment, and collected funds for cancer patients.",
    logo: '/images/logos/SKMCH.png',
  },
  {
    title: 'Digital Campaign Volunteer',
    company: 'Alkhidmat Foundation',
    period: 'Jul 2022 - Nov 2022',
    location: 'Online',
    description: 'Participated in digital campaigns for flood - affected communities and Palestine relief efforts. Helped collect funds through online platforms and social media awareness campaigns.',
    logo: '/images/logos/ALKHIDMAT.png',
  },
  {
    title: 'Zakat Campaign Fundraiser',
    company: 'Shaukat Khanum Memorial Cancer Hospital & Research Centre (SKMCH&RC)',
    period: 'Mar 2022 - May 2022',
    location: 'Lahore',
    description: "Participated in Zakat fundraising campaign for Shaukat Khanum Hospital. Distributed awareness flyers and collected funds to support cancer patients' treatment and care.",
    logo: '/images/logos/SKMCH.png',
  },
  {
    title: 'Fundraising Volunteer',
    company: 'Kaavish Foundation',
    period: 'Nov 2021 - Apr 2022',
    location: 'Lahore',
    description: 'Organized fundraising campaigns for various causes including medical camps in Lahore. Collected funds for different causes like Iftari distribution during Ramadan, wedding assistance, school fees support, and other community needs.',
    logo: '/images/logos/KAAVISH.png',
  },
  {
    title: 'TCF Baghbaan Fundraiser',
    company: 'The Citizens Foundation (TCF)',
    period: 'Sep 2021 - Dec 2021',
    location: 'Online',
    description: 'Collected funds from friends, relatives, and community members for TCF Baghbaan campaign. Raised money to support TCF schools so underprivileged children could receive quality education.',
    logo: '/images/logos/TCF.png',
  },
]

const ambassadorData: ExperienceCard[] = [
  {
    title: "CodinGuru4.0 Ambassador",
    company: "Lahore University of Management Sciences (LUMS)",
    period: "Jan 2022 - Feb 2022",
    location: "Lahore",
    description: "Facilitated team registrations from my university to compete in CodinGuru competitions and coordinated participation details.",
    logo: "/images/logos/CONDINGURU.jpg",
  },
  {
    title: "SOFTEC'22 Ambassador",
    company: "FAST Lahore",
    period: "Jan 2022 - Mar 2022",
    location: "Lahore",
    description: "Drove registrations from my university for SOFTEC competitions, guiding teams through event categories and sign‑ups.",
    logo: "/images/logos/SOFTEC.png",
  },
  {
    title: "GDSC Ambassador",
    company: "Punjab University College of Information Technology (PUCIT)",
    period: "Oct 2021 - Aug 2022",
    location: "Lahore",
    description: "Marketed GDSC online events (webinars, tech talks, workshops) within my university to boost student participation.",
    logo: "/images/logos/GDSC.png",
  },
]

function ExperienceCardBlock({
  item,
  index,
  inView,
}: {
  item: ExperienceCard
  index: number
  inView: boolean
}) {
  const hasLargeLogo = item.company.includes('TxLabz') || item.company.includes('VLG') || item.company.includes('BugMonks')

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.15 + index * 0.06 }}
      className="group relative h-full"
      whileHover={{ y: -8 }}
    >
      <div className="h-full rounded-2xl border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-white dark:bg-dark-card p-6 sm:p-7 shadow-md relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[#00ABFB]" aria-hidden />
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#00ABFB]/5 pointer-events-none" aria-hidden />

        <div className="relative flex flex-col h-full">
          <div className="flex items-start justify-between gap-3 mb-5">
            <div className={`relative ${hasLargeLogo ? 'w-16 h-16 sm:w-[4.25rem] sm:h-[4.25rem]' : 'w-14 h-14'} shrink-0`}>
              <Image
                src={`${basePath}${item.logo}`}
                alt={`${item.company} logo`}
                fill
                className="object-contain"
              />
            </div>
            {item.isCurrent ? (
              <span className="shrink-0 px-2.5 py-1 rounded-full text-xs font-semibold transition-colors duration-300 bg-[#00ABFB]/15 text-[#00ABFB] dark:bg-[#00ABFB]/20">
                Current
              </span>
            ) : null}
          </div>

          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300 group-hover:text-[#00ABFB] dark:group-hover:text-[#00ABFB]">
            {item.title}
          </h3>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-200 mb-4">
            {item.company}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-gray-500 dark:text-gray-300 text-sm mb-4">
            <span className="flex items-center gap-1.5">
              <FaCalendarAlt className="w-3.5 h-3.5 text-[#00ABFB]/80" />
              {item.period}
            </span>
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt className="w-3.5 h-3.5 text-[#00ABFB]/80" />
              {item.location}
            </span>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-200 leading-relaxed mt-auto text-justify">
            {item.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function ExperienceSectionHeader({
  label,
  title,
  subtitle,
  inView,
}: {
  label: string
  title: string
  subtitle: string
  inView: boolean
}) {
  return (
    <div className="text-center mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ABFB] mb-3"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.45, delay: 0.28 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
      >
        {title}
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
        {subtitle}
      </motion.p>
    </div>
  )
}

type ExperienceProps = { skipBackground?: boolean }

const Experience = ({ skipBackground = false }: ExperienceProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  })

  return (
    <section id="experience" className={`relative pt-6 pb-16 overflow-hidden ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'}`}>
      {!skipBackground && <AnimatedBackground />}
      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Professional Experience */}
          <div className="text-center mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ABFB] mb-3"
            >
              Experience
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Professional Experience
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
              Building innovative solutions and growing through real - world challenges
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            {professionalData.map((exp, index) => (
              <ExperienceCardBlock key={`pro-${exp.title}-${exp.period}`} item={exp} index={index} inView={inView} />
            ))}
          </div>

          {/* Volunteer Work */}
          <ExperienceSectionHeader
            label="Experience"
            title="Volunteer Work"
            subtitle="Making a positive impact through community service and social work"
            inView={inView}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {volunteerData.map((item, index) => (
              <ExperienceCardBlock key={`vol-${item.title}-${item.period}`} item={item} index={index} inView={inView} />
            ))}
          </div>

          {/* Ambassador */}
          <ExperienceSectionHeader
            label="Experience"
            title="Ambassador Roles"
            subtitle="Leadership in tech communities"
            inView={inView}
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ambassadorData.map((item, index) => (
              <ExperienceCardBlock key={`amb-${item.title}-${item.period}`} item={item} index={index} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
