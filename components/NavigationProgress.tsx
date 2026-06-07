'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

type NavigationProgressContextType = {
  startNavigation: () => void
}

const NavigationProgressContext = createContext<NavigationProgressContextType | null>(null)

export function useNavigationProgress() {
  const ctx = useContext(NavigationProgressContext)
  if (!ctx) return { startNavigation: () => {} }
  return ctx
}

function ProgressBar({ visible }: { visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="pointer-events-none fixed inset-x-0 top-0 z-[9999] h-[3px] overflow-hidden bg-[#00ABFB]/10 dark:bg-[#00ABFB]/15"
          role="progressbar"
          aria-hidden
        >
          <motion.div
            className="absolute inset-y-0 left-0 w-[35%] rounded-full bg-gradient-to-r from-[#00ABFB]/20 via-[#00ABFB] to-[#00ABFB]/20 shadow-[0_0_16px_rgba(0,171,251,0.55)]"
            initial={{ x: '-100%' }}
            animate={{ x: '320%' }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function NavigationProgressProvider({ children }: { children: React.ReactNode }) {
  const [isNavigating, setIsNavigating] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(true)
  }, [])

  const startNavigation = useCallback(() => {
    setIsNavigating(true)
  }, [])

  useEffect(() => {
    setIsNavigating(false)
  }, [pathname])

  const progressBar = <ProgressBar visible={isNavigating} />

  return (
    <NavigationProgressContext.Provider value={{ startNavigation }}>
      {children}
      {mounted && typeof document !== 'undefined' && createPortal(progressBar, document.body)}
    </NavigationProgressContext.Provider>
  )
}
