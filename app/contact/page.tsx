import Contact from '@/components/sections/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ContactHero from '@/components/sections/ContactHero'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Header />
      <div className="relative">
        <AnimatedBackground />
        <div className="relative z-10">
          <ContactHero skipBackground />
          <Contact showSectionHeader={false} skipBackground />
        </div>
      </div>
      <Footer />
    </main>
  )
}
