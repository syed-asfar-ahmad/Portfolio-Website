import Education from '@/components/sections/Education'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="relative">
        <AnimatedBackground />
        <div className="relative z-10 pt-24">
          <Education skipBackground />
        </div>
      </div>
      <Footer />
    </main>
  )
}
