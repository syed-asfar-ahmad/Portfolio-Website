'use client'

import { useCallback, useState } from 'react'
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaChevronLeft, FaChevronRight, FaLinkedin } from 'react-icons/fa'
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
    quote:
      'I have worked with Asfar, and it was an amazing experience. He is a talented and hardworking developer who consistently delivers quality work. His dedication and creativity made our collaboration smooth and enjoyable. I would highly recommend him to any team.',
    name: 'Zahida Bibi',
    title: 'Associate Software Quality Assurance Engineer @ TxLabz',
    linkedinUrl: 'https://www.linkedin.com/in/zahida-bibi/',
    image: '/images/logos/ZAHIDA.png',
  },
  {
    quote:
      "I worked with Asfar Ahmad Bukhari and I highly recommend him. He's a very talented software engineer with great skills and a strong work ethic. Would definitely work with him again.",
    name: 'Ammara Mehmood',
    title: 'Software Engineer @ TxLabz',
    linkedinUrl: 'https://www.linkedin.com/in/ammara-mehmood-696232218/',
    image: '/images/logos/AMMARA.png',
  },
  {
    quote:
      'I had the pleasure of working with Asfar while I was handling QA and they were leading backend development. I highly recommend them for their strong technical expertise and problem-solving skills. They consistently delivered clean, scalable backend solutions and were always responsive to QA feedback.',
    name: 'Fatima Mujahid',
    title: 'Software Quality Assurance Engineer @ TxLabz',
    linkedinUrl: 'https://www.linkedin.com/in/fatimamujahid31/',
    image: '/images/logos/FATIMA.png',
  },
  {
    quote:
      "I had the pleasure of working with Syed Asfar as the Director of Graphic Design at IEEE RAS. Asfar is in charge of Marketing and Registrations, and I can confidently say that he is a highly skilled and dedicated professional. Asfar's expertise in marketing and registrations is evident in his ability to successfully promote and manage events for our society. He consistently exceeded our expectations in terms of event attendance and engagement. Furthermore, Asfar's excellent communication skills and attention to detail make him a valuable asset to our team. I highly recommend Asfar for any marketing or registration role. He will be a valuable asset to any organization, and I am confident that he will continue to excel in his future endeavors.",
    name: 'Sameer Faisal',
    title: 'Former President @ IEEE RAS COMSATS Lahore Chapter',
    linkedinUrl: 'https://www.linkedin.com/in/imrtls00/',
    image: '/images/logos/SAMEER.png',
  },
  {
    quote:
      'I strongly endorse Asfar Ahmad. Our participation in the same Summer School three years ago, along with collaborative efforts within ACM and GDSC, demonstrated his exceptional skills and dedication. He is undoubtedly a valuable asset to any team.',
    name: 'Khansa Rahim',
    title: 'Former GDSC Lead @ COMSATS Lahore Chapter',
    linkedinUrl: 'https://www.linkedin.com/in/khansarahim/',
    image: '/images/logos/KHANSA.jpg',
  },
  {
    quote:
      "I wholeheartedly recommend Asfar because he works really hard and always puts in his best effort. He's dedicated, determined, and goes the extra mile to get things done. Asfar's commitment and work ethic make him a valuable addition to any team or project.",
    name: 'Anam Shahzad',
    title: 'Former Vice President (Non-Academics) @ AICP',
    linkedinUrl: 'https://www.linkedin.com/in/anam-shahzad-khan/',
    image: '/images/logos/ANAM.jpg',
  },
]

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

function quoteTypography(quote: string) {
  if (quote.length > 500) {
    return 'text-[13px] leading-[1.65] sm:text-sm md:text-base md:leading-[1.75]'
  }
  if (quote.length > 320) {
    return 'text-sm leading-[1.7] sm:text-base md:text-lg lg:text-xl md:leading-[1.7]'
  }
  if (quote.length > 180) {
    return 'text-[15px] leading-[1.7] sm:text-lg md:text-xl lg:text-2xl md:leading-[1.65]'
  }
  return 'text-base leading-[1.65] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl xl:leading-[1.45]'
}

function AuthorAvatar({
  item,
  size = 'md',
}: {
  item: TestimonialItem
  size?: 'sm' | 'md' | 'lg'
}) {
  const sizes = {
    sm: 'h-10 w-10',
    md: 'h-12 w-12 sm:h-14 sm:w-14',
    lg: 'h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20',
  }

  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-full border border-[#00ABFB]/25 bg-white dark:bg-zinc-950 ${sizes[size]}`}
    >
      {item.image ? (
        <Image
          src={`${basePath}${item.image}`}
          alt={item.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      ) : (
        <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#00ABFB] to-[#0090d4] text-xs font-bold text-white sm:text-sm">
          {getInitials(item.name)}
        </span>
      )}
    </div>
  )
}

function TestimonialListButton({
  item,
  index,
  isActive,
  onSelect,
}: {
  item: TestimonialItem
  index: number
  isActive: boolean
  onSelect: (index: number) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className={`group flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition-all duration-300 sm:px-4 sm:py-3.5 ${
        isActive
          ? 'border-[#00ABFB]/40 bg-[#00ABFB]/10 shadow-[0_12px_40px_-24px_rgba(0,171,251,0.55)]'
          : 'border-transparent bg-white/40 hover:border-gray-200/70 hover:bg-white/70 dark:bg-zinc-900/30 dark:hover:border-zinc-700 dark:hover:bg-zinc-900/60'
      }`}
    >
      <AuthorAvatar item={item} size="sm" />
      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-sm font-semibold ${
            isActive ? 'text-[#00ABFB]' : 'text-gray-900 dark:text-white'
          }`}
        >
          {item.name}
        </p>
        <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-gray-500 dark:text-gray-400">
          {item.title}
        </p>
      </div>
      <span
        className={`text-[10px] font-bold tabular-nums ${
          isActive ? 'text-[#00ABFB]' : 'text-gray-300 dark:text-zinc-600'
        }`}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </button>
  )
}

function MobileTestimonialPicker({
  activeIndex,
  onSelect,
}: {
  activeIndex: number
  onSelect: (index: number) => void
}) {
  return (
    <div className="mt-4">
      <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB]">
        All testimonials
      </p>
      <div className="-mx-1 flex gap-2.5 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {testimonials.map((item, index) => {
          const isActive = index === activeIndex
          return (
            <button
              key={item.name}
              type="button"
              onClick={() => onSelect(index)}
              className={`flex w-[5.5rem] shrink-0 flex-col items-center gap-2 rounded-2xl border px-2 py-3 transition-all active:scale-[0.97] ${
                isActive
                  ? 'border-[#00ABFB]/45 bg-[#00ABFB]/10 shadow-[0_8px_24px_-14px_rgba(0,171,251,0.55)]'
                  : 'border-gray-200/70 bg-white/70 dark:border-zinc-700/70 dark:bg-zinc-900/50'
              }`}
            >
              <AuthorAvatar item={item} size="sm" />
              <span
                className={`w-full truncate text-center text-[10px] font-semibold leading-tight ${
                  isActive ? 'text-[#00ABFB]' : 'text-gray-800 dark:text-gray-200'
                }`}
              >
                {item.name.split(' ')[0]}
              </span>
              <span
                className={`text-[9px] font-bold tabular-nums ${
                  isActive ? 'text-[#00ABFB]' : 'text-gray-400 dark:text-zinc-500'
                }`}
              >
                {String(index + 1).padStart(2, '0')}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function SpotlightPanel({
  item,
  index,
  total,
  onPrev,
  onNext,
}: {
  item: TestimonialItem
  index: number
  total: number
  onPrev: () => void
  onNext: () => void
}) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={item.name}
        initial={{ opacity: 0, y: reduceMotion ? 0 : 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: reduceMotion ? 0 : -20 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-gray-200/60 bg-gradient-to-br from-white via-slate-50/80 to-[#00ABFB]/[0.08] p-4 shadow-[0_24px_60px_-40px_rgba(0,171,251,0.4)] dark:border-zinc-700/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-[#00ABFB]/10 sm:rounded-[1.75rem] sm:p-6 sm:shadow-[0_40px_100px_-50px_rgba(0,171,251,0.45)] md:p-10 lg:min-h-[min(72vh,680px)] lg:rounded-[2rem] lg:p-12"
      >
        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#00ABFB]/15 blur-3xl lg:-right-20 lg:-top-20 lg:h-56 lg:w-56" />
        <div className="pointer-events-none absolute -bottom-20 -left-12 h-32 w-32 rounded-full bg-[#45c8ff]/10 blur-3xl lg:-bottom-24 lg:-left-16 lg:h-48 lg:w-48" />
        <span
          className="pointer-events-none absolute left-3 top-1 select-none font-serif text-[4.5rem] leading-none text-[#00ABFB]/[0.12] sm:left-4 sm:top-2 sm:text-[7rem] md:text-[9rem] lg:text-[11rem]"
          aria-hidden
        >
          &ldquo;
        </span>

        <div className="relative">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB] sm:mb-4 sm:text-[11px] sm:tracking-[0.32em] lg:mb-6">
            Testimonial · {String(index + 1).padStart(2, '0')}
          </p>
          <blockquote
            className={`relative max-w-4xl font-medium text-gray-800 dark:text-gray-100 ${quoteTypography(item.quote)}`}
            style={{ fontFamily: 'Lora, Georgia, serif' }}
          >
            {item.quote}
          </blockquote>
        </div>

        <div className="relative mt-5 border-t border-gray-200/70 pt-4 dark:border-zinc-700/60 sm:mt-8 sm:pt-6 lg:mt-10 lg:pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
            <div className="flex min-w-0 items-center gap-3 sm:gap-4">
              <AuthorAvatar item={item} size="lg" />
              <div className="min-w-0">
                <p className="text-base font-bold text-gray-900 dark:text-white sm:text-lg lg:text-xl">
                  {item.name}
                </p>
                <p className="mt-0.5 max-w-md text-xs leading-snug text-gray-500 dark:text-gray-400 sm:text-sm lg:text-base">
                  {item.title}
                </p>
              </div>
            </div>

            <a
              href={item.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-full shrink-0 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-[#0A66C2]/30 bg-[#0A66C2] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#004182] sm:w-auto sm:px-5"
            >
              <FaLinkedin className="h-4 w-4 shrink-0" />
              LinkedIn Profile
            </a>
          </div>

          <div className="mt-4 flex items-center justify-between gap-3 sm:mt-6 lg:mt-8">
            <div className="flex min-w-0 flex-1 items-center gap-1.5 overflow-x-auto pb-0.5 sm:gap-2">
              {testimonials.map((_, dotIndex) => (
                <span
                  key={dotIndex}
                  className={`h-1.5 shrink-0 rounded-full transition-all duration-300 ${
                    dotIndex === index ? 'w-6 bg-[#00ABFB] sm:w-8' : 'w-1.5 bg-gray-300 dark:bg-zinc-600'
                  }`}
                />
              ))}
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <span className="text-[11px] font-medium tabular-nums text-gray-400 dark:text-gray-500 sm:text-xs lg:hidden">
                {String(index + 1).padStart(2, '0')}/{String(total).padStart(2, '0')}
              </span>
              <span className="hidden text-xs font-medium tabular-nums text-gray-400 dark:text-gray-500 lg:inline">
                {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={onPrev}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200/80 bg-white/80 text-gray-700 transition-colors hover:border-[#00ABFB]/40 hover:text-[#00ABFB] dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-gray-200"
                aria-label="Previous testimonial"
              >
                <FaChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                onClick={onNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200/80 bg-white/80 text-gray-700 transition-colors hover:border-[#00ABFB]/40 hover:text-[#00ABFB] dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-gray-200"
                aria-label="Next testimonial"
              >
                <FaChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

type TestimonialsProps = {
  showSectionHeader?: boolean
  skipBackground?: boolean
}

const Testimonials = ({ showSectionHeader = true, skipBackground = false }: TestimonialsProps) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.06 })
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = testimonials[activeIndex]

  const goTo = useCallback((index: number) => {
    setActiveIndex((index + testimonials.length) % testimonials.length)
  }, [])

  const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])
  const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])

  return (
    <section
      id="testimonials"
      className={`relative overflow-hidden pt-4 pb-12 sm:pt-6 sm:pb-16 md:pb-20 ${
        skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'
      }`}
    >
      {!skipBackground && <AnimatedBackground />}

      <div className="pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-[#00ABFB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-32 h-96 w-96 rounded-full bg-[#00ABFB]/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          {!showSectionHeader ? (
            <div className="mb-6 text-center sm:mb-10 md:mb-14">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB] sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
              >
                Testimonials
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="mx-auto max-w-4xl text-[1.5rem] font-extrabold leading-[1.15] tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
              >
                What people say about{' '}
                <span className="animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent">
                  working with me
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-3 max-w-2xl px-1 text-sm leading-relaxed text-gray-500 dark:text-gray-300 sm:mt-5 sm:px-0 md:text-base"
              >
                Feedback from colleagues, engineers, and team leads I have worked with.
              </motion.p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-center sm:mb-10 md:mb-12"
            >
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB]">
                Recommendations
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
                What people say about working with me
              </h2>
            </motion.div>
          )}

          <div className="lg:hidden">
            <SpotlightPanel
              item={activeItem}
              index={activeIndex}
              total={testimonials.length}
              onPrev={goPrev}
              onNext={goNext}
            />
            <MobileTestimonialPicker activeIndex={activeIndex} onSelect={setActiveIndex} />
          </div>

          <div className="hidden items-start gap-6 lg:grid lg:grid-cols-[minmax(260px,320px)_1fr] lg:gap-8 xl:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="self-start"
            >
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-[#00ABFB]">
                All testimonials
              </p>
              <ul className="space-y-2">
                {testimonials.map((item, index) => (
                  <li key={item.name}>
                    <TestimonialListButton
                      item={item}
                      index={index}
                      isActive={index === activeIndex}
                      onSelect={setActiveIndex}
                    />
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.22 }}
            >
              <SpotlightPanel
                item={activeItem}
                index={activeIndex}
                total={testimonials.length}
                onPrev={goPrev}
                onNext={goNext}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
