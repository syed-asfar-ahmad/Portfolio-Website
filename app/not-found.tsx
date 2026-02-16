'use client'

import Link from 'next/link'
import { FaHome, FaEnvelope } from 'react-icons/fa'
import Header from '@/components/layout/Header'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-12 px-4 overflow-hidden">
        <AnimatedBackground />

        <div className="relative z-10 text-center max-w-xl mx-auto">
          <div className="relative mb-2">
            <span
              className="inline-block text-[clamp(6rem,18vw,12rem)] font-bold tracking-tighter leading-none text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-600 dark:from-gray-200 dark:to-gray-500"
              style={{
                WebkitTextStroke: '1px rgba(0, 171, 251, 0.15)',
              }}
              aria-hidden
            >
              404
            </span>
          </div>

          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 mb-2 font-semibold">
            Oops! This page went missing
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-10 max-w-sm mx-auto leading-relaxed">
            Maybe it went for a coffee break, took a wrong turn, or is just camera shy. No worries - let&apos;s get you back.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#00ABFB] text-white font-semibold shadow-lg shadow-[#00ABFB]/25 hover:shadow-[#00ABFB]/40 transition-shadow duration-300"
            >
              <FaHome className="w-4 h-4" aria-hidden />
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-[#00ABFB] hover:text-[#00ABFB] dark:hover:border-[#00ABFB] dark:hover:text-[#00ABFB] transition-colors duration-300"
            >
              <FaEnvelope className="w-4 h-4" aria-hidden />
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
