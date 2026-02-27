'use client'

export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-gray-900">
      <p className="font-dancing text-2xl sm:text-3xl font-medium text-gray-800 dark:text-gray-100 mb-8">
        Syed Asfar Ahmad Bukhari
      </p>
      <div className="w-48 h-1 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full w-1/3 rounded-full bg-[#00ABFB] animate-loaderBar"
        />
      </div>
      <div className="flex gap-1.5 mt-6">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-[#00ABFB] animate-loaderDot"
            style={{ animationDelay: `${i * 0.15}s` }}
          />
        ))}
      </div>
    </div>
  )
}
