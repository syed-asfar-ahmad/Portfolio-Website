'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaCode, FaTools } from 'react-icons/fa'
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

type SkillsProps = { skipBackground?: boolean }

const Skills = ({ skipBackground = false }: SkillsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  })

  const skillCategories = [
    {
      title: 'Full Stack',
      subtitle: 'Frontend & Backend',
      icon: FaCode,
      skills: [
        { name: 'HTML5', icon: SiHtml5 },
        { name: 'CSS3', icon: SiCss3 },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'React', icon: SiReact },
        { name: 'Bootstrap', icon: SiBootstrap },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
      ],
    },
    {
      title: 'Tools',
      subtitle: 'Development & API',
      icon: FaTools,
      skills: [
        { name: 'Git', icon: SiGit },
        { name: 'Postman', icon: SiPostman },
      ],
    },
  ]

  const brandColors: Record<string, string> = {
    'HTML5': '#E34F26',
    'CSS3': '#1572B6',
    'JavaScript': '#F7DF1E',
    'React': '#61DAFB',
    'Bootstrap': '#7952B3',
    'Tailwind CSS': '#06B6D4',
    'Node.js': '#339933',
    'Express': '#000000',
    'Next.js': '#000000',
    'MongoDB': '#47A248',
    'PostgreSQL': '#336791',
    'Git': '#F05032',
    'Postman': '#FF6C37',
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  }

  return (
    <section id="skills" className={`relative pt-6 pb-20 md:pb-28 overflow-hidden ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'}`}>
      {!skipBackground && <AnimatedBackground />}
      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header – minimal typography + accent line */}
          <div className="text-center mb-12 md:mb-16">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ABFB] mb-3"
            >
              Tech stack
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.28 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
            >
              Skills
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
              Tools and technologies I use to build
            </motion.p>
          </div>

          {/* Categories */}
          <div className="space-y-10 md:space-y-14">
            {skillCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 32 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + categoryIndex * 0.15 }}
                  className="relative"
                >
                  {/* Section label */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border">
                      <CategoryIcon className="w-5 h-5 text-[#00ABFB]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-gray-500 dark:text-gray-200">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skill cards grid */}
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4"
                  >
                    {category.skills.map((skill, index) => {
                      const Icon = skill.icon
                      const color = brandColors[skill.name] ?? '#6b7280'
                      return (
                        <motion.div
                          key={skill.name}
                          variants={itemVariants}
                          whileHover={{ y: -6, scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative"
                        >
                          <div
                            className="relative h-full rounded-2xl border border-[#00ABFB]/40 dark:border-[#00ABFB]/35 bg-white dark:bg-dark-card/80 p-4 md:p-5 transition-all duration-300 overflow-hidden hover:border-[#00ABFB]/60 dark:hover:border-[#00ABFB]/50 hover:shadow-lg hover:shadow-[#00ABFB]/10 dark:hover:shadow-[#00ABFB]/5"
                          >
                            {/* Hover glow */}
                            <div
                              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                              style={{
                                background: `radial-gradient(circle at 50% 0%, rgba(0,171,251,0.06) 0%, transparent 60%)`,
                              }}
                            />
                            <div className="relative flex flex-col items-center justify-center text-center">
                              <div
                                className="w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                                style={{ color }}
                              >
                                <Icon className="w-7 h-7 md:w-8 md:h-8" />
                              </div>
                              <span className="text-sm font-medium text-gray-700 dark:text-gray-100 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                                {skill.name}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
