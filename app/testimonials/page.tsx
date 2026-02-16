import Testimonials from '@/components/sections/Testimonials'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import TestimonialsHero from '@/components/sections/TestimonialsHero'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <TestimonialsHero skipBackground />
          <Testimonials showSectionHeader={false} skipBackground />
        </div>
      </div>
      <Footer />
    </main>
  )
}
