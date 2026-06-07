'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { FaDownload, FaMoon, FaSun, FaTimes } from 'react-icons/fa'
import { useTheme } from '@/components/ThemeProvider'
import { useNavigationProgress } from '@/components/NavigationProgress'
import { basePath, LOGO_SRC } from '@/utils/constants'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
  { name: 'Education', href: '/education' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

const name = 'Syed Asfar Ahmad Bukhari'

const glassShell =
  'rounded-2xl border border-gray-200/70 bg-white/75 shadow-[0_24px_60px_-36px_rgba(0,171,251,0.35)] backdrop-blur-xl dark:border-zinc-700/70 dark:bg-zinc-900/75 sm:rounded-[1.75rem]'

const normalizePath = (path: string) => {
  if (!path) return '/'

  let normalized = path

  if (basePath && normalized.startsWith(basePath)) {
    normalized = normalized.slice(basePath.length) || '/'
  }

  normalized = normalized.replace(/\/+$/, '')
  return normalized || '/'
}

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="relative flex h-10 w-[4.35rem] shrink-0 items-center rounded-full border border-gray-200/70 bg-gray-100/90 p-1 shadow-inner transition-colors hover:border-[#00ABFB]/35 dark:border-zinc-700/70 dark:bg-zinc-900/90"
    >
      <motion.span
        animate={{ left: isDark ? 'calc(100% - 2.25rem)' : '0.25rem' }}
        transition={{ type: 'spring', stiffness: 520, damping: 34 }}
        className={`absolute top-1 h-8 w-8 rounded-full shadow-[0_4px_14px_-4px_rgba(0,0,0,0.25)] ${
          isDark
            ? 'bg-gradient-to-br from-[#1e3a5f] to-[#0f172a] ring-1 ring-[#45c8ff]/30'
            : 'bg-gradient-to-br from-amber-300 to-amber-500 ring-1 ring-amber-200/80'
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-2.5">
        <FaSun
          className={`h-3.5 w-3.5 transition-colors ${
            !isDark ? 'text-white drop-shadow-sm' : 'text-amber-500/70'
          }`}
        />
        <FaMoon
          className={`h-3.5 w-3.5 transition-colors ${
            isDark ? 'text-[#45c8ff] drop-shadow-[0_0_6px_rgba(69,200,255,0.55)]' : 'text-gray-400'
          }`}
        />
      </span>
    </button>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { startNavigation } = useNavigationProgress()

  const isRouteActive = (href: string) => normalizePath(pathname) === normalizePath(href)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const toggleMenu = () => setIsMenuOpen((open) => !open)
  const closeMenu = () => setIsMenuOpen(false)
  const resumeHref = `${basePath}/images/Resume/Syed Asfar Ahmad Bukhari - Resume.pdf`

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4 md:px-6"
      >
        <div
          className={`pointer-events-auto mx-auto flex w-full max-w-[min(100%,92rem)] items-center justify-between gap-3 px-3 py-2.5 transition-shadow duration-500 sm:gap-5 sm:px-5 sm:py-3 lg:px-6 ${glassShell} ${
            scrolled ? 'shadow-[0_28px_70px_-32px_rgba(0,171,251,0.45)]' : ''
          }`}
        >
          <Link
            href="/"
            onClick={startNavigation}
            className="group flex shrink-0 items-center gap-2.5 sm:gap-3"
          >
            <div className="relative shrink-0">
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-tr from-[#00ABFB] to-[#45c8ff] opacity-40 blur-sm transition-opacity group-hover:opacity-70" />
              <Image
                src={LOGO_SRC}
                alt={name}
                width={44}
                height={44}
                priority
                className="relative h-10 w-10 rounded-full object-cover ring-2 ring-white/80 dark:ring-zinc-800/80 sm:h-11 sm:w-11"
              />
            </div>
            <span className="relative hidden min-w-0 pb-1 xl:block">
              <span className="block whitespace-nowrap font-dancing text-xl font-medium text-gray-900 transition-colors duration-200 group-hover:text-[#00ABFB] dark:text-white lg:text-2xl">
                {name}
              </span>
              <span
                className="absolute bottom-0 left-0 h-0.5 w-1/3 rounded-full bg-gray-700 animate-nameLineRun transition-colors duration-200 group-hover:bg-[#00ABFB] dark:bg-gray-400"
                aria-hidden
              />
            </span>
          </Link>

          <nav className="hidden min-w-0 flex-1 justify-center px-2 xl:flex" aria-label="Main navigation">
            <div className="rounded-full border border-gray-200/70 bg-gray-100/50 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] backdrop-blur-md dark:border-zinc-700/70 dark:bg-zinc-900/45 dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <ul className="flex items-center gap-0.5">
                {navItems.map((item) => {
                  const isActive = isRouteActive(item.href)

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={startNavigation}
                        className={`relative flex items-center justify-center whitespace-nowrap rounded-full px-2.5 py-2 text-[11px] font-semibold leading-none transition-colors lg:px-3 lg:text-[12px] xl:px-3.5 xl:py-2.5 xl:text-[13px] ${
                          isActive
                            ? 'text-gray-900 dark:text-white'
                            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                        }`}
                      >
                        {isActive ? (
                          <motion.span
                            layoutId="header-nav-surface"
                            className="absolute inset-0 rounded-full bg-white shadow-[0_6px_24px_-10px_rgba(0,171,251,0.45)] ring-1 ring-[#00ABFB]/20 dark:bg-zinc-800 dark:ring-[#00ABFB]/30"
                            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                          />
                        ) : null}
                        <span className="relative z-10">{item.name}</span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <ThemeToggleButton />

            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-10 items-center gap-2 rounded-xl bg-[#00ABFB] px-4 text-xs font-semibold text-white shadow-[0_16px_40px_-20px_rgba(0,171,251,0.65)] transition-all hover:bg-[#0098e0] active:scale-[0.98] xl:inline-flex xl:h-11 xl:px-5 xl:text-sm"
            >
              <FaDownload className="h-3.5 w-3.5" />
              Resume
            </a>

            <button
              type="button"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className={`relative flex h-10 w-10 items-center justify-center rounded-xl border transition-all xl:hidden ${
                isMenuOpen
                  ? 'border-[#00ABFB]/40 bg-[#00ABFB]/10 text-[#00ABFB] dark:text-[#45c8ff]'
                  : 'border-gray-200/60 bg-white/50 text-gray-800 hover:border-[#00ABFB]/35 hover:text-[#00ABFB] dark:border-zinc-700/60 dark:bg-zinc-800/50 dark:text-gray-100 dark:hover:text-[#45c8ff]'
              }`}
            >
              <AnimatePresence mode="wait" initial={false}>
                {isMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex flex-col items-center justify-center gap-[5px]"
                  >
                    <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                    <span className="block h-[2px] w-[18px] rounded-full bg-current" />
                    <span className="block h-[2px] w-3 rounded-full bg-current" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex flex-col xl:hidden"
          >
            <div className="absolute inset-0 bg-white dark:bg-[#0a0a0a]" />
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  'radial-gradient(65% 50% at 15% 10%, rgba(0,171,251,0.18), transparent 70%), radial-gradient(55% 45% at 85% 15%, rgba(69,200,255,0.12), transparent 72%), radial-gradient(50% 40% at 50% 95%, rgba(0,171,251,0.1), transparent 75%)',
              }}
            />

            <motion.div
              initial={{ y: '8%' }}
              animate={{ y: 0 }}
              exit={{ y: '8%' }}
              transition={{ type: 'spring', stiffness: 380, damping: 38 }}
              className="relative flex h-[100dvh] flex-col"
            >
              <div className="flex items-center justify-between px-4 pb-2 pt-[max(0.75rem,env(safe-area-inset-top))] sm:px-6">
                <div className="flex min-w-0 items-center gap-3">
                  <Image
                    src={LOGO_SRC}
                    alt={name}
                    width={52}
                    height={52}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[#00ABFB]/25 sm:h-14 sm:w-14"
                  />
                  <p className="font-dancing text-lg font-medium leading-tight text-gray-900 dark:text-white sm:text-2xl">
                    {name}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeMenu}
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-gray-200/80 bg-white/70 text-gray-700 shadow-sm backdrop-blur-sm transition-colors hover:border-[#00ABFB]/40 hover:text-[#00ABFB] dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-gray-200"
                  aria-label="Close menu"
                >
                  <FaTimes className="h-5 w-5" />
                </button>
              </div>

              <nav
                className="flex flex-1 flex-col justify-center px-4 sm:px-6"
                aria-label="Mobile navigation"
              >
                <ul className="grid grid-cols-2 gap-2.5 sm:gap-3">
                  {navItems.map((item, index) => {
                    const isActive = isRouteActive(item.href)
                    return (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, y: 16, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                          delay: 0.035 * index,
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => {
                            startNavigation()
                            closeMenu()
                          }}
                          className={`flex min-h-[4.25rem] flex-col items-center justify-center rounded-2xl border px-2 py-3 text-center transition-all active:scale-[0.97] sm:min-h-[4.75rem] ${
                            isActive
                              ? 'border-[#00ABFB]/45 bg-[#00ABFB]/12 shadow-[0_12px_32px_-18px_rgba(0,171,251,0.45)] dark:bg-[#00ABFB]/16'
                              : 'border-gray-200/70 bg-white/70 hover:border-[#00ABFB]/30 dark:border-zinc-800/80 dark:bg-zinc-900/70'
                          }`}
                        >
                          <span
                            className={`text-[15px] font-bold leading-tight sm:text-base ${
                              isActive
                                ? 'animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent'
                                : 'text-gray-900 dark:text-white'
                            }`}
                          >
                            {item.name}
                          </span>
                        </Link>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>

              <div className="px-4 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-3 sm:px-6">
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-[#00ABFB] text-sm font-semibold text-white shadow-[0_16px_40px_-20px_rgba(0,171,251,0.65)] transition-colors hover:bg-[#0098e0] active:scale-[0.98]"
                >
                  <FaDownload className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
