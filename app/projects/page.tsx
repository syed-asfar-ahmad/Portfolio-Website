import Projects from '@/components/sections/Projects'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="relative">
        <AnimatedBackground />
        <div className="relative z-10 pt-24">
          <Projects skipBackground />
        </div>
      </div>
      <Footer />
    </main>
  )
}
