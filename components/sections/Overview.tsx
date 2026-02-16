'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { FaArrowRight, FaBriefcase, FaGraduationCap } from 'react-icons/fa'

const Overview = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const sections = [
    {
      title: 'Work Experience',
      description: 'Professional journey, volunteer work & ambassador roles',
      icon: FaBriefcase,
      href: '/experience',
      color: 'from-gray-600 to-gray-700'
    },
    {
      title: 'Education',
      description: 'Academic background and achievements',
      icon: FaGraduationCap,
      href: '/education',
      color: 'from-gray-600 to-gray-700'
    }
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-5">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Explore More</h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm">Jump into detailed pages</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sections.map((section) => (
            <motion.div key={section.title} whileHover={{ y: -6 }} className="group rounded-2xl border border-gray-100 dark:border-dark-border bg-white dark:bg-dark-card p-6 shadow hover:shadow-lg transition">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center text-white mb-3`}>
                <section.icon className="w-5 h-5" />
              </div>
              <div className="text-base font-semibold text-gray-900 dark:text-white mb-1">{section.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">{section.description}</div>
              <Link href={section.href} className="text-gray-700 dark:text-gray-100 text-sm font-medium inline-flex items-center gap-1 hover:text-gray-900 dark:hover:text-white">
                View more <FaArrowRight className="w-3 h-3" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Overview
