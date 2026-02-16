import Hero from '@/components/sections/Hero'
import Header from '@/components/layout/Header'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <Hero skipBackground />
        </div>
      </div>
    </main>
  )
}
