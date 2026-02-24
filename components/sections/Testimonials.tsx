'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaQuoteLeft, FaLinkedin } from 'react-icons/fa'
import Image from 'next/image'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { basePath } from '@/utils/constants'

type TestimonialItem = {
  quote: string
  name: string
  title: string
  linkedinUrl: string
  image?: string
}

const testimonials: TestimonialItem[] = [
  {
    quote: "I worked with Asfar Ahmad Bukhari and I highly recommend him. He's a very talented software engineer with great skills and a strong work ethic. Would definitely work with him again.",
    name: 'Ammara Mehmood',
    title: 'Software Engineer @ TxLabz',
    linkedinUrl: 'https://www.linkedin.com/in/ammara-mehmood-696232218/',
    image: '/images/logos/AMMARA.png',
  },
  {
    quote: 'I had the pleasure of working with Asfar while I was handling QA and they were leading backend development. I highly recommend them for their strong technical expertise and problem-solving skills. They consistently delivered clean, scalable backend solutions and were always responsive to QA feedback.',
    name: 'Fatima Mujahid',
    title: 'Software Quality Assurance Engineer @ TxLabz',
    linkedinUrl: 'https://www.linkedin.com/in/fatimamujahid31/',
  },
  {
    quote: "I had the pleasure of working with Syed Asfar as the Director of Graphic Design at IEEE RAS. Asfar is in charge of Marketing and Registrations, and I can confidently say that he is a highly skilled and dedicated professional. Asfar's expertise in marketing and registrations is evident in his ability to successfully promote and manage events for our society. He consistently exceeded our expectations in terms of event attendance and engagement. Furthermore, Asfar's excellent communication skills and attention to detail make him a valuable asset to our team. I highly recommend Asfar for any marketing or registration role. He will be a valuable asset to any organization, and I am confident that he will continue to excel in his future endeavors.",
    name: 'Sameer Faisal',
    title: 'Former President IEEE RAS COMSATS Lahore Chapter',
    linkedinUrl: 'https://www.linkedin.com/in/imrtls00/',
    image: '/images/logos/SAMEER.png',
  },
  {
    quote: "I strongly endorse Asfar Ahmad. Our participation in the same Summer School three years ago, along with collaborative efforts within ACM and GDSC, demonstrated his exceptional skills and dedication. He is undoubtedly a valuable asset to any team.",
    name: 'Khansa Rahim',
    title: 'Former GDSC Lead COMSATS Lahore Chapter',
    linkedinUrl: 'https://www.linkedin.com/in/khansarahim/',
    image: '/images/logos/KHANSA.jpg',
  },
  {
    quote: "I wholeheartedly recommend Asfar because he works really hard and always puts in his best effort. He's dedicated, determined, and goes the extra mile to get things done. Asfar's commitment and work ethic make him a valuable addition to any team or project.",
    name: 'Anam Shahzad',
    title: 'Former AICP Vice President (Non-Academics)',
    linkedinUrl: 'https://www.linkedin.com/in/anam-shahzad-khan/',
    image: '/images/logos/ANAM.jpg',
  },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

type TestimonialsProps = {
  showSectionHeader?: boolean
  skipBackground?: boolean
}

const Testimonials = ({ showSectionHeader = true, skipBackground = false }: TestimonialsProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  })

  return (
    <section id="testimonials" className={`relative pb-20 md:pb-28 overflow-hidden ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'} ${showSectionHeader ? 'pt-8 md:pt-12' : 'pt-2 md:pt-4'}`}>
      {!skipBackground && <AnimatedBackground />}
      <div className="container mx-auto px-4 sm:px-5 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {showSectionHeader && (
            <div className="text-center mb-14 md:mb-20">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-xs font-semibold uppercase tracking-[0.28em] text-[#00ABFB] mb-3"
              >
                Reviews
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
              >
                Testimonials
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="origin-center h-0.5 w-20 mx-auto mb-5 rounded-full bg-[#00ABFB]"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="text-gray-500 dark:text-gray-300 text-sm md:text-base max-w-lg mx-auto"
              >
                What people say about working with me
              </motion.p>
            </div>
          )}

          {/* Testimonial cards */}
          <div className="grid gap-6 md:gap-8 lg:grid-cols-1">
            {testimonials.map((item, i) => (
              <motion.article
                key={item.name}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                className="group"
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-white dark:bg-gray-950/90 shadow-md transition-all duration-300 group-hover:border-[#00ABFB]/50 dark:group-hover:border-[#00ABFB]/40 group-hover:shadow-xl group-hover:shadow-[#00ABFB]/10 dark:group-hover:shadow-[#00ABFB]/5">
                  {/* Left accent bar - thori moti blue line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00ABFB] rounded-l-2xl" aria-hidden />
                  {/* Decorative circle */}
                  <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#00ABFB]/5 pointer-events-none" aria-hidden />

                  <div className="relative pl-6 md:pl-8 pr-6 md:pr-8 py-6 md:py-10">
                    {/* Quote icon - decorative */}
                    <div className="absolute top-6 right-6 md:top-8 md:right-8 opacity-10 dark:opacity-20">
                      <FaQuoteLeft className="w-16 h-16 md:w-20 md:h-20 text-[#00ABFB]" aria-hidden />
                    </div>

                    <blockquote className="relative text-gray-700 dark:text-gray-200 leading-relaxed text-base md:text-lg mb-8 italic text-justify" style={{ fontFamily: 'Lora, Georgia, serif' }}>
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>

                    {/* Author row */}
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex items-center gap-4">
                        <div className="relative h-12 w-12 md:h-14 md:w-14 shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-[#00ABFB] to-[#0090d4] shadow-lg shadow-[#00ABFB]/25">
                          {item.image ? (
                            <Image
                              src={`${basePath}${item.image}`}
                              alt={item.name}
                              fill
                              sizes="56px"
                              className="object-cover"
                            />
                          ) : (
                            <span className="flex h-full w-full items-center justify-center text-white font-semibold text-sm md:text-base">
                              {getInitials(item.name)}
                            </span>
                          )}
                        </div>
                        <div>
                          <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 flex-wrap">
                            {item.name}
                            {item.linkedinUrl && (
                              <a
                                href={item.linkedinUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex md:hidden h-8 w-8 items-center justify-center rounded-full bg-[#0A66C2] text-white hover:bg-[#004182] transition-colors"
                                aria-label="LinkedIn"
                              >
                                <FaLinkedin className="w-4 h-4" />
                              </a>
                            )}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.title}
                          </p>
                        </div>
                      </div>
                      {item.linkedinUrl && (
                        <a
                          href={item.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hidden md:inline-flex ml-auto items-center gap-2 rounded-full bg-[#0A66C2] text-white px-4 py-2.5 text-sm font-medium shadow-sm hover:bg-[#004182] hover:scale-105 hover:shadow-md active:scale-100 transition-all duration-200"
                        >
                          <FaLinkedin className="w-4 h-4 shrink-0 text-white" />
                          LinkedIn
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
