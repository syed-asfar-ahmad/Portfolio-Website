'use client'

import { motion } from 'framer-motion'
import { useSyncExternalStore } from 'react'

const spin = { duration: 1.15, repeat: Infinity, ease: 'linear' as const }
const spinReverse = { duration: 1.75, repeat: Infinity, ease: 'linear' as const }

function subscribeToTheme(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })
  return () => observer.disconnect()
}

function getThemeSnapshot() {
  return document.documentElement.classList.contains('dark')
}

function getThemeServerSnapshot() {
  return true
}

export default function PageLoader() {
  const isDark = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getThemeServerSnapshot)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden backdrop-blur-xl ${
        isDark ? 'bg-black/95' : 'bg-white/95'
      }`}
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className={`absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl ${
            isDark ? 'bg-[#00ABFB]/12' : 'bg-[#00ABFB]/18'
          }`}
        />
        <motion.div
          className={`absolute left-[20%] top-[28%] h-32 w-32 rounded-full blur-2xl ${
            isDark ? 'bg-[#00ABFB]/8' : 'bg-[#00ABFB]/14'
          }`}
          animate={{ opacity: [0.35, 0.7, 0.35], scale: [1, 1.08, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className={`absolute bottom-[24%] right-[18%] h-28 w-28 rounded-full blur-2xl ${
            isDark ? 'bg-[#00ABFB]/6' : 'bg-[#00ABFB]/10'
          }`}
          animate={{ opacity: [0.25, 0.55, 0.25], scale: [1.05, 1, 1.05] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}
        />
      </div>

      <div className="relative flex flex-col items-center gap-9">
        <div className="relative h-[76px] w-[76px]">
          <motion.span
            className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-[#00ABFB] border-r-[#00ABFB]/25 shadow-[0_0_20px_rgba(0,171,251,0.15)]"
            animate={{ rotate: 360 }}
            transition={spin}
          />
          <motion.span
            className="absolute inset-[11px] rounded-full border-[2px] border-transparent border-b-[#00ABFB]/90 border-l-[#00ABFB]/20"
            animate={{ rotate: -360 }}
            transition={spinReverse}
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="block h-2.5 w-2.5 rounded-full bg-[#00ABFB] shadow-[0_0_18px_rgba(0,171,251,0.85)]"
              animate={{ scale: [1, 1.4, 1], opacity: [0.55, 1, 0.55] }}
              transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </div>

        <motion.p
          className={`font-dancing text-2xl font-medium sm:text-3xl ${
            isDark ? 'text-gray-100' : 'text-gray-800'
          }`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.35 }}
        >
          Syed Asfar Ahmad Bukhari
        </motion.p>
      </div>
    </motion.div>
  )
}
