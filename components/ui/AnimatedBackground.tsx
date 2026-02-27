'use client'

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-gradient-to-b from-[#00ABFB]/8 via-transparent to-[#00ABFB]/6 dark:from-[#00ABFB]/12 dark:via-transparent dark:to-[#00ABFB]/8" />

      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(70% 52% at 12% 18%, rgba(0,171,251,0.24), transparent 70%), radial-gradient(62% 48% at 88% 14%, rgba(0,171,251,0.16), transparent 72%), radial-gradient(56% 42% at 50% 88%, rgba(90,90,90,0.12), transparent 75%), radial-gradient(65% 50% at 18% 92%, rgba(0,171,251,0.16), transparent 74%), radial-gradient(55% 44% at 85% 90%, rgba(0,171,251,0.13), transparent 75%)',
        }}
      />

      <div
        className="absolute -left-[18%] -top-[10%] w-[62%] h-[58%] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,171,251,0.28), rgba(0,171,251,0.02) 68%, transparent 78%)',
          animation: 'floatAcross 30s ease-in-out infinite',
        }}
      />
      <div
        className="absolute -right-[20%] top-[22%] w-[60%] h-[54%] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(0,171,251,0.20), rgba(0,171,251,0.02) 70%, transparent 80%)',
          animation: 'floatAcrossReverse 34s ease-in-out infinite',
        }}
      />
      <div
        className="absolute left-[24%] bottom-[-22%] w-[52%] h-[56%] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(120,120,120,0.14), rgba(120,120,120,0.02) 68%, transparent 78%)',
          animation: 'drift 22s ease-in-out infinite',
        }}
      />

      {Array.from({ length: 22 }).map((_, i) => (
        <div
          key={`dust-${i}`}
          className="absolute rounded-full bg-[#00ABFB]/35 dark:bg-[#00ABFB]/30"
          style={{
            width: i % 4 === 0 ? '4px' : '3px',
            height: i % 4 === 0 ? '4px' : '3px',
            left: `${4 + (i * 9) % 92}%`,
            top: `${4 + (i * 13) % 92}%`,
            boxShadow: '0 0 10px rgba(0,171,251,0.35)',
            animation: `floatUp ${10 + (i % 4)}s ease-in-out infinite`,
            animationDelay: `${-i * 0.7}s`,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.08)_100%)] dark:bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.22)_100%)]" />
    </div>
  )
}
