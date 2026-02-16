'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaDownload, FaMoon, FaSun } from 'react-icons/fa'
import { useTheme } from '@/components/ThemeProvider'
import { useNavigationProgress } from '@/components/NavigationProgress'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { theme, toggleTheme } = useTheme()
  const { startNavigation } = useNavigationProgress()

  const navItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'SKILLS', href: '/skills' },
    { name: 'PROJECTS', href: '/projects' },
    { name: 'EXPERIENCE', href: '/experience' },
    { name: 'EDUCATION', href: '/education' },
    { name: 'TESTIMONIALS', href: '/testimonials' },
    { name: 'CONTACT', href: '/contact' },
  ]

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const name = 'Syed Asfar Ahmad Bukhari'

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-black shadow-lg dark:shadow-black/30 transition-all duration-300"
      >
        <nav className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between w-full gap-4">
            {/* Extreme left: Logo / Name */}
            <Link href="/" onClick={startNavigation} className="flex-shrink-0 flex items-center group relative pb-1">
              <span className="font-dancing text-gray-900 dark:text-white text-xl sm:text-2xl font-medium transition-colors duration-200 group-hover:text-[#00ABFB]">
                {name}
              </span>
              <span
                className="absolute bottom-0 left-0 w-1/3 h-0.5 bg-gray-700 dark:bg-gray-400 group-hover:bg-[#00ABFB] rounded-full animate-nameLineRun transition-colors duration-200"
                aria-hidden
              />
            </Link>

            {/* Center: Desktop Navigation */}
            <div className="hidden lg:flex flex-1 justify-center items-center space-x-1 min-w-0">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href
                return (
                  <div key={item.name} className="flex items-center flex-shrink-0">
                    <Link
                      href={item.href}
                      onClick={startNavigation}
                      className={`px-3 py-2.5 font-medium text-xs uppercase tracking-wider rounded-lg transition-all duration-200 ${
                        isActive
                          ? 'text-[#00ABFB] bg-[#00ABFB]/10 dark:bg-[#00ABFB]/15'
                          : 'text-gray-600 dark:text-white hover:text-[#00ABFB] hover:bg-gray-100 dark:hover:bg-dark-card'
                      }`}
                    >
                      {item.name}
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="w-px h-4 bg-gray-300 dark:bg-gray-600 mx-1" />
                    )}
                  </div>
                )
              })}
            </div>

            {/* Extreme right: Theme + Resume */}
            <div className="hidden lg:flex flex-shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-100 dark:bg-dark-card hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <FaSun className="w-4 h-4 text-gray-700 dark:text-white" />
                ) : (
                  <FaMoon className="w-4 h-4 text-gray-700" />
                )}
              </button>
              <a 
                href="/images/Resume/Syed Asfar Ahmad Bukhari - Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-3 py-2 bg-gray-800 dark:bg-dark-card text-white font-medium rounded-lg hover:bg-gray-900 dark:hover:bg-zinc-600 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <FaDownload className="w-3 h-3" />
                <span className="text-xs">Resume</span>
              </a>
            </div>

            {/* Mobile: Theme + Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#00ABFB]/10 dark:hover:bg-[#00ABFB]/20 transition-colors"
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? (
                  <FaSun className="w-4 h-4 text-amber-500" />
                ) : (
                  <FaMoon className="w-4 h-4 text-gray-600" />
                )}
              </button>
              <button
                onClick={toggleMobileMenu}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-[#00ABFB]/10 dark:hover:bg-[#00ABFB]/20 transition-colors duration-200"
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <FaTimes className="w-5 h-5 text-gray-700 dark:text-white" />
                    </motion.div>
                  ) : (
                    <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                      <FaBars className="w-5 h-5 text-gray-700 dark:text-white" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay + Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/30 dark:bg-black/50 backdrop-blur-sm lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden
            />
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-[4.25rem] left-4 right-4 z-50 rounded-2xl bg-white dark:bg-gray-900 shadow-xl dark:shadow-black/50 border border-gray-200 dark:border-gray-800 overflow-hidden lg:hidden"
            >
              <div className="max-h-[calc(100vh-6rem)] overflow-y-auto py-3">
                <div className="px-3 space-y-0.5">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => { startNavigation(); setIsMobileMenuOpen(false) }}
                        className={`flex items-center px-4 py-3.5 rounded-xl text-sm font-medium uppercase tracking-wider transition-all duration-200 ${
                          isActive
                            ? 'text-[#00ABFB] bg-[#00ABFB]/10 dark:bg-[#00ABFB]/20'
                            : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-[#00ABFB]'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )
                  })}
                </div>
                <div className="mx-3 mt-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                  <a
                    href="/images/Resume/Syed Asfar Ahmad Bukhari - Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3.5 rounded-xl bg-[#00ABFB] text-white font-medium text-sm hover:bg-[#0090d4] active:scale-[0.98] transition-all duration-200"
                  >
                    <FaDownload className="w-4 h-4 shrink-0" />
                    Resume
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
