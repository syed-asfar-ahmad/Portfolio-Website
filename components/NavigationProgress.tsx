'use client'

import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { usePathname } from 'next/navigation'

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
    <div
      className={`fixed top-0 left-0 right-0 z-[9999] h-0.5 bg-[#00ABFB] pointer-events-none transition-opacity duration-150 ${
        visible ? 'opacity-100 animate-nprogress' : 'opacity-0'
      }`}
      role="progressbar"
      aria-hidden
    />
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
