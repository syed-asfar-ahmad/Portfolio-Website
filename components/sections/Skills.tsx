'use client'

import { useState } from 'react'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiPostman,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

type SkillsProps = { skipBackground?: boolean }

type SkillItem = {
  name: string
  icon: IconType
  color: string
  darkIcon?: boolean
}

type SkillCategory = {
  id: 'fullstack' | 'tools'
  label: string
  subtitle: string
  skills: SkillItem[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'fullstack',
    label: 'Full Stack',
    subtitle: 'Frontend and backend technologies',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss3, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', darkIcon: true },
      { name: 'React', icon: SiReact, color: '#61DAFB', darkIcon: true },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#000000', darkIcon: true },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000', darkIcon: true },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    subtitle: 'Development and API tools',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
]

function SkillCard({
  skill,
  index,
  reduceMotion,
}: {
  skill: SkillItem
  index: number
  reduceMotion: boolean | null
}) {
  const Icon = skill.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        delay: reduceMotion ? 0 : index * 0.04,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileTap={reduceMotion ? undefined : { scale: 0.96 }}
      className="group"
    >
      <div className="relative h-full overflow-hidden rounded-xl border border-gray-200/65 bg-white/75 p-2.5 backdrop-blur-xl transition-all duration-300 hover:border-[#00ABFB]/35 hover:shadow-[0_14px_36px_-22px_rgba(0,171,251,0.45)] dark:border-zinc-700/55 dark:bg-zinc-900/55 sm:rounded-2xl sm:p-3.5 md:p-4">
        <div
          className="absolute inset-x-0 top-0 h-[2px] opacity-90"
          style={{ backgroundColor: skill.color }}
        />
        <div className="flex flex-col items-center justify-center gap-2 pt-2 text-center sm:gap-2.5 sm:pt-2.5">
          <div
            className="flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11 md:h-12 md:w-12"
            style={{ backgroundColor: `${skill.color}1a` }}
          >
            <Icon
              className={`h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem] md:h-6 md:w-6 ${
                skill.darkIcon
                  ? 'text-gray-900 dark:text-white'
                  : ''
              }`}
              style={skill.darkIcon ? undefined : { color: skill.color }}
            />
          </div>
          <span className="text-[10px] font-semibold leading-tight text-gray-700 dark:text-gray-200 sm:text-[11px] md:text-xs">
            {skill.name}
          </span>
        </div>
      </div>
    </motion.div>
  )
}

const Skills = ({ skipBackground = false }: SkillsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.06,
  })
  const [activeTab, setActiveTab] = useState<SkillCategory['id']>('fullstack')
  const reduceMotion = useReducedMotion()

  const activeCategory =
    skillCategories.find((category) => category.id === activeTab) ?? skillCategories[0]

  return (
    <section
      id="skills"
      className={`relative overflow-hidden pb-14 sm:pb-16 md:pb-20 ${
        skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'
      } pt-2 sm:pt-4`}
    >
      {!skipBackground && <AnimatedBackground />}

      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#00ABFB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-24 h-96 w-96 rounded-full bg-[#45c8ff]/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          <div className="mb-5 text-center sm:mb-10 md:mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#00ABFB] sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
            >
              Skills
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mx-auto max-w-4xl text-[1.65rem] font-extrabold leading-[1.2] tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl"
            >
              Technologies I{' '}
              <span className="animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent">
                work with
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-gray-500 dark:text-gray-300 sm:mt-5 sm:max-w-2xl sm:text-base"
            >
              Languages, frameworks, and tools I use to build web applications.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="mb-5 sm:mb-8"
          >
            <div className="mx-auto w-full max-w-xs sm:max-w-sm">
              <div className="rounded-full border border-gray-200/70 bg-gray-100/50 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-zinc-700/70 dark:bg-zinc-900/45 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="grid grid-cols-2 gap-0.5">
                  {skillCategories.map((category) => {
                    const isActive = activeTab === category.id
                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setActiveTab(category.id)}
                        className={`relative flex min-h-[2.5rem] items-center justify-center rounded-full px-3 py-2 text-center text-xs font-semibold transition-colors sm:min-h-[2.75rem] sm:text-sm ${
                          isActive
                            ? 'text-gray-900 dark:text-white'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="skills-tab-surface"
                            className="absolute inset-0 rounded-full bg-white shadow-[0_6px_24px_-10px_rgba(0,171,251,0.45)] ring-1 ring-[#00ABFB]/20 dark:bg-zinc-800 dark:ring-[#00ABFB]/30"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        ) : null}
                        <span className="relative z-10">{category.label}</span>
                      </button>
                    )
                  })}
                </div>
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: reduceMotion ? 0 : 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: reduceMotion ? 0 : -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative overflow-hidden rounded-xl border border-gray-200/60 bg-gradient-to-br from-white via-slate-50/80 to-[#00ABFB]/[0.05] p-3 shadow-[0_24px_60px_-40px_rgba(0,171,251,0.35)] dark:border-zinc-700/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-[#00ABFB]/10 sm:rounded-[1.75rem] sm:p-5 md:p-7"
            >
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#00ABFB]/12 blur-3xl sm:-right-16 sm:-top-16 sm:h-40 sm:w-40" />

              <div className="relative mb-4 sm:mb-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#00ABFB] sm:text-[11px] sm:tracking-[0.28em]">
                  {activeCategory.label}
                </p>
                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 sm:text-sm">
                  {activeCategory.subtitle}
                </p>
              </div>

              <div
                className={`relative grid gap-2 sm:gap-3 md:gap-4 ${
                  activeCategory.id === 'tools'
                    ? 'grid-cols-2 sm:max-w-md'
                    : 'grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6'
                }`}
              >
                {activeCategory.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    skill={skill}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
