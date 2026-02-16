'use client'

/**
 * Animated background: moving grid, floating shapes, drifting particles.
 * Real animations only – project colors (gray + #00ABFB).
 */
export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Moving grid */}
      <div
        className="absolute inset-0 opacity-[0.08] dark:opacity-[0.05] text-gray-500 dark:text-gray-500"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Floating circles – move across screen */}
      <div className="absolute top-[20%] w-20 h-20 rounded-full border-2 border-gray-400/60 dark:border-gray-500/25" style={{ animation: 'floatAcross 18s ease-in-out infinite' }} />
      <div className="absolute top-[50%] w-14 h-14 rounded-full border-2 border-[#00ABFB]/50 dark:border-[#00ABFB]/30" style={{ animation: 'floatAcrossReverse 22s ease-in-out infinite', animationDelay: '-4s' }} />
      <div className="absolute top-[75%] w-16 h-16 rounded-full border-2 border-gray-400/55 dark:border-gray-500/22" style={{ animation: 'floatAcross 20s ease-in-out infinite', animationDelay: '-8s' }} />
      <div className="absolute top-[12%] w-12 h-12 rounded-full border-2 border-gray-400/50 dark:border-gray-500/20" style={{ animation: 'floatAcrossReverse 24s ease-in-out infinite', animationDelay: '-2s' }} />
      <div className="absolute top-[65%] w-16 h-16 rounded-full border-2 border-[#00ABFB]/40 dark:border-[#00ABFB]/25" style={{ animation: 'floatAcross 19s ease-in-out infinite', animationDelay: '-6s' }} />

      {/* Floating dots – drift upward */}
      <div className="absolute top-[22%] right-[25%] w-2.5 h-2.5 rounded-full bg-gray-500/70 dark:bg-gray-400/35" style={{ animation: 'floatUp 14s ease-in-out infinite' }} />
      <div className="absolute top-[60%] left-[20%] w-2 h-2 rounded-full bg-[#00ABFB]/60 dark:bg-[#00ABFB]/35" style={{ animation: 'floatUp 12s ease-in-out infinite', animationDelay: '-3s' }} />
      <div className="absolute top-[85%] right-[35%] w-3 h-3 rounded-full bg-gray-500/65 dark:bg-gray-500/30" style={{ animation: 'floatUp 11s ease-in-out infinite', animationDelay: '-5s' }} />
      <div className="absolute top-[8%] left-[40%] w-2 h-2 rounded-full bg-gray-500/60 dark:bg-gray-400/25" style={{ animation: 'floatUp 15s ease-in-out infinite', animationDelay: '-1s' }} />
      <div className="absolute top-[40%] right-[10%] w-2.5 h-2.5 rounded-full bg-[#00ABFB]/50 dark:bg-[#00ABFB]/28" style={{ animation: 'floatUp 13s ease-in-out infinite', animationDelay: '-7s' }} />

      {/* Floating squares – diagonal drift + rotate */}
      <div className="absolute top-[28%] left-[45%] w-5 h-5 rounded-md border-2 border-gray-400/50 dark:border-gray-500/22" style={{ animation: 'floatDiagonal 16s linear infinite' }} />
      <div className="absolute top-[58%] right-[45%] w-4 h-4 rounded border-2 border-[#00ABFB]/45 dark:border-[#00ABFB]/25" style={{ animation: 'floatDiagonal 14s linear infinite', animationDelay: '-4s' }} />
      <div className="absolute top-[72%] left-[55%] w-5 h-5 rounded-md border-2 border-gray-400/48 dark:border-gray-500/20" style={{ animation: 'floatDiagonal 18s linear infinite', animationDelay: '-6s' }} />

      {/* Pulse rings – expand/contract */}
      <div className="absolute top-[45%] left-[50%] w-28 h-28 rounded-full border-2 border-gray-400/40 dark:border-gray-500/18" style={{ animation: 'pulseRing 6s ease-in-out infinite', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute top-[25%] right-[20%] w-16 h-16 rounded-full border-2 border-gray-400/35 dark:border-gray-500/15" style={{ animation: 'pulseRing 7s ease-in-out infinite', animationDelay: '-2s', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute bottom-[30%] left-[25%] w-20 h-20 rounded-full border-2 border-[#00ABFB]/35 dark:border-[#00ABFB]/15" style={{ animation: 'pulseRing 5.5s ease-in-out infinite', animationDelay: '-1s', transform: 'translate(-50%, -50%)' }} />

      {/* Drifting particles */}
      {[...Array(16)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-gray-500/50 dark:bg-gray-400/25"
          style={{
            left: `${8 + (i * 5) % 85}%`,
            top: `${10 + (i * 6) % 85}%`,
            animation: 'drift 5s ease-in-out infinite',
            animationDelay: `${-(i * 0.2)}s`,
          }}
        />
      ))}

      {/* Spinning dashed circles */}
      <div className="absolute top-[38%] left-[28%] w-12 h-12 rounded-full border-2 border-dashed border-gray-400/45 dark:border-gray-500/18" style={{ animation: 'spinSlow 22s linear infinite', transform: 'translate(-50%, -50%)' }} />
      <div className="absolute top-[62%] right-[28%] w-10 h-10 rounded-full border-2 border-dashed border-[#00ABFB]/40 dark:border-[#00ABFB]/18" style={{ animation: 'spinSlow 26s linear infinite reverse', animationDelay: '-5s', transform: 'translate(-50%, -50%)' }} />
    </div>
  )
}
