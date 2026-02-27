'use client'

import { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 260)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={handleScrollTop}
      aria-label="Scroll to top"
      className={`fixed right-3 bottom-5 sm:right-5 sm:bottom-6 z-[60] h-11 w-11 sm:h-12 sm:w-12 rounded-full border border-[#00ABFB]/35 bg-[#00ABFB] text-white shadow-lg shadow-[#00ABFB]/30 transition-all duration-300 hover:bg-[#0090d4] hover:scale-105 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <FaArrowUp className="mx-auto h-4 w-4 sm:h-5 sm:w-5" />
    </button>
  )
}
