import Skills from '@/components/sections/Skills'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="relative">
        <AnimatedBackground />
        <div className="relative z-10 pt-24">
          <Skills skipBackground />
        </div>
      </div>
      <Footer />
    </main>
  )
}
