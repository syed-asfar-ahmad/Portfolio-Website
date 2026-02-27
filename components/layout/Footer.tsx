'use client'

import Link from 'next/link'
import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-gray-700/80">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-950 dark:from-gray-950 dark:to-black dark:shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.4)]" />
      <div className="relative">
        <div className="container mx-auto px-6 pt-12 pb-8 md:pt-14 md:pb-10">
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
            <Link
              href="/"
              className="font-dancing text-2xl md:text-3xl font-medium text-white dark:text-white hover:text-[#00ABFB] transition-colors duration-200 mb-1"
            >
              Syed Asfar Ahmad Bukhari
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              Full Stack Developer · Building Digital Products
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/syed-asfar-ahmad"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 dark:bg-white/5 border border-gray-700 dark:border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white hover:bg-white/10 transition-all duration-200"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/syed-asfar-ahmad-bukhari/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 dark:bg-white/5 border border-gray-700 dark:border-gray-700 text-gray-400 hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 dark:border-gray-700/60">
          <div className="container mx-auto px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-1 text-center text-sm text-gray-500 dark:text-gray-400">
              <span>
                &copy; {currentYear} Syed Asfar Ahmad Bukhari. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
