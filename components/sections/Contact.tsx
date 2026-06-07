'use client'

import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import Image from 'next/image'
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaCheck,
} from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import AnimatedBackground from '@/components/ui/AnimatedBackground'
import { basePath } from '@/utils/constants'

type ContactProps = { showSectionHeader?: boolean; skipBackground?: boolean }

const contactDetails = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'contact@syedasfar.com',
    href: 'mailto:contact@syedasfar.com',
  },
  {
    icon: FaPhone,
    label: 'Phone',
    value: '+92 318 4318539',
    href: 'tel:+923184318539',
  },
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Lahore, Pakistan · GMT+5',
    href: undefined,
  },
]

const socialLinks = [
  {
    icon: FaLinkedin,
    href: 'https://www.linkedin.com/in/syed-asfar-ahmad-bukhari/',
    label: 'LinkedIn',
    className:
      'border-[#0A66C2]/25 bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white',
  },
  {
    icon: FaGithub,
    href: 'https://github.com/syed-asfar-ahmad',
    label: 'GitHub',
    className:
      'border-gray-300/60 bg-gray-100/80 text-gray-800 hover:bg-[#24292e] hover:text-white dark:border-zinc-600/60 dark:bg-zinc-800/80 dark:text-gray-100',
  },
  {
    icon: FaWhatsapp,
    href: 'https://wa.me/923184318539',
    label: 'WhatsApp',
    className:
      'border-[#25D366]/25 bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-white',
  },
]

function ConnectLinks() {
  return (
    <div>
      <p className="mb-2.5 text-[10px] font-semibold uppercase tracking-[0.24em] text-gray-400 dark:text-gray-500 sm:mb-3 sm:text-[11px] sm:tracking-[0.28em]">
        Connect
      </p>
      <div className="grid grid-cols-3 gap-2">
        {socialLinks.map(({ icon: Icon, href, label, className }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex min-w-0 flex-col items-center justify-center gap-1 rounded-xl border px-1 py-3 text-center transition-all active:scale-[0.97] sm:gap-1.5 sm:px-2 sm:py-3.5 ${className}`}
          >
            <Icon className="h-[18px] w-[18px] shrink-0" />
            <span className="truncate text-[10px] font-semibold sm:text-[11px]">{label}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

const inputClassName =
  'w-full min-h-[48px] rounded-xl border border-gray-200/80 bg-white/80 px-4 py-3 text-base text-gray-900 outline-none transition-all placeholder:text-gray-400 focus:border-[#00ABFB]/50 focus:bg-white focus:ring-2 focus:ring-[#00ABFB]/20 dark:border-zinc-700/70 dark:bg-zinc-900/60 dark:text-white dark:placeholder:text-zinc-500 dark:focus:border-[#00ABFB]/40 dark:focus:bg-zinc-900/80 sm:rounded-2xl sm:py-3.5 sm:text-[15px]'

type SubmitStatus = 'idle' | 'sending' | 'success'

function SendMessageButton({
  status,
  reduceMotion,
}: {
  status: SubmitStatus
  reduceMotion: boolean | null
}) {
  const isBusy = status !== 'idle'

  return (
    <motion.button
      type="submit"
      disabled={isBusy}
      whileTap={!isBusy && !reduceMotion ? { scale: 0.985 } : undefined}
      className={`relative inline-flex h-12 w-full items-center justify-center rounded-xl text-base font-semibold text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#00ABFB] focus:ring-offset-2 disabled:cursor-not-allowed dark:focus:ring-offset-zinc-950 sm:h-[3.25rem] sm:rounded-2xl sm:text-[15px] ${
        status === 'success'
          ? 'bg-emerald-500'
          : status === 'sending'
            ? 'bg-[#0098e0]'
            : 'bg-[#00ABFB] hover:bg-[#0098e0]'
      }`}
    >
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.span
            key="idle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            Send Message
          </motion.span>
        )}

        {status === 'sending' && (
          <motion.span
            key="sending"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-2.5"
          >
            <motion.span
              className="h-4 w-4 rounded-full border-2 border-white/25 border-t-white"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ repeat: Infinity, duration: 0.65, ease: 'linear' }}
            />
            Sending...
          </motion.span>
        )}

        {status === 'success' && (
          <motion.span
            key="success"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-2"
          >
            <FaCheck className="h-4 w-4" />
            Sent
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

function ContactSidebar({ inView }: { inView: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.aside
      initial={{ opacity: 0, y: reduceMotion ? 0 : 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="space-y-4 lg:sticky lg:top-28 lg:self-start lg:space-y-5"
    >
      <div className="overflow-hidden rounded-xl border border-gray-200/70 bg-white/90 dark:border-zinc-700/60 dark:bg-zinc-950/90 lg:hidden">
        <div className="flex items-center gap-3 border-b border-gray-100 px-4 py-3.5 dark:border-zinc-800">
          <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-[#00ABFB]/25">
            <Image
              src={`${basePath}/images/logos/PROFILE.png`}
              alt="Syed Asfar Ahmad Bukhari"
              fill
              sizes="44px"
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-gray-900 dark:text-white">
              Syed Asfar Ahmad Bukhari
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">Software Engineer</p>
          </div>
        </div>

        <ul className="divide-y divide-gray-100 dark:divide-zinc-800">
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <li key={label}>
              {href ? (
                <a
                  href={href}
                  className="flex min-h-[52px] items-center gap-3 px-4 py-3 active:bg-gray-50 dark:active:bg-zinc-900/80"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00ABFB]/10 text-[#00ABFB]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {label}
                    </p>
                    <p className="mt-0.5 truncate text-sm font-medium text-gray-900 dark:text-white">
                      {value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex min-h-[52px] items-center gap-3 px-4 py-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00ABFB]/10 text-[#00ABFB]">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-white">
                      {value}
                    </p>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative hidden overflow-hidden rounded-[1.75rem] border border-gray-200/60 bg-gradient-to-br from-white via-slate-50/90 to-[#00ABFB]/[0.06] p-6 shadow-[0_24px_60px_-40px_rgba(0,171,251,0.35)] dark:border-zinc-700/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-[#00ABFB]/10 lg:block">
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00ABFB]/15 blur-3xl" />

        <div className="relative flex items-center gap-4">
          <div className="relative h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-full border-2 border-[#00ABFB]/30 shadow-[0_8px_24px_-12px_rgba(0,171,251,0.45)]">
            <Image
              src={`${basePath}/images/logos/PROFILE.png`}
              alt="Syed Asfar Ahmad Bukhari"
              fill
              sizes="72px"
              className="object-cover object-top"
            />
          </div>
          <div className="min-w-0">
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              Syed Asfar Ahmad Bukhari
            </p>
            <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
              Software Engineer
            </p>
          </div>
        </div>

        <ul className="relative mt-6 space-y-3.5">
          {contactDetails.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#00ABFB]/20 bg-[#00ABFB]/10 text-[#00ABFB]">
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="mt-0.5 block break-all text-sm font-medium text-gray-900 transition-colors hover:text-[#00ABFB] dark:text-white"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm font-medium text-gray-900 dark:text-white">
                    {value}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <ConnectLinks />
    </motion.aside>
  )
}

function ContactFormPanel({
  inView,
  formData,
  submitStatus,
  onChange,
  onSubmit,
}: {
  inView: boolean
  formData: { name: string; email: string; subject: string; message: string }
  submitStatus: SubmitStatus
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onSubmit: (e: React.FormEvent) => void
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: reduceMotion ? 0 : 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div className="relative overflow-hidden rounded-xl border border-gray-200/60 bg-white/95 shadow-[0_16px_40px_-32px_rgba(0,171,251,0.35)] dark:border-zinc-700/50 dark:bg-zinc-950/95 sm:rounded-[1.75rem] lg:shadow-[0_28px_70px_-42px_rgba(0,171,251,0.35)]">
        <div className="pointer-events-none absolute -right-16 -top-16 hidden h-44 w-44 rounded-full bg-[#00ABFB]/10 blur-3xl lg:block" />
        <div className="relative p-4 sm:p-7 md:p-8">
          <div className="mb-4 sm:mb-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#00ABFB] sm:text-[11px] sm:tracking-[0.28em]">
              Send a message
            </p>
            <h3 className="mt-1.5 text-lg font-bold text-gray-900 dark:text-white sm:mt-2 sm:text-2xl">
              Tell me about your project
            </h3>
            <p className="mt-2 hidden text-sm leading-relaxed text-gray-500 dark:text-gray-400 sm:block">
              Share a few details and I&apos;ll get back to you with a clear reply.
            </p>
          </div>

          <form onSubmit={onSubmit} className="space-y-3.5 sm:space-y-5">
            <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300 sm:mb-2"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    required
                    autoComplete="name"
                    className={inputClassName}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300 sm:mb-2"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    required
                    autoComplete="email"
                    inputMode="email"
                    className={inputClassName}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300 sm:mb-2"
                >
                  Subject <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={onChange}
                  required
                  className={inputClassName}
                  placeholder="What would you like to discuss?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300 sm:mb-2"
                >
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  required
                  rows={4}
                  className={`${inputClassName} min-h-[7.5rem] resize-none sm:min-h-[8.5rem]`}
                  placeholder="Project goals, timeline, budget, or anything else helpful..."
                />
              </div>

              <SendMessageButton status={submitStatus} reduceMotion={reduceMotion} />
            </form>
          </div>
        </div>
    </motion.div>
  )
}

const Contact = ({ showSectionHeader = true, skipBackground = false }: ContactProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.06,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitStatus('sending')
    const serviceId = 'service_nbyy4sk'
    const templateId = 'template_zsij0se'
    const publicKey = 'UKNH39WyPpWGZDLtN'
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey,
      )
      toast.success("Message sent! I'll get back to you soon.", { duration: 4000 })
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitStatus('success')
      window.setTimeout(() => setSubmitStatus('idle'), 1800)
    } catch {
      const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
      const mailtoLink = `mailto:contact@syedasfar.com?subject=${encodeURIComponent(`Contact: ${formData.subject}`)}&body=${emailBody}`
      toast.error('Sending failed. Opening email client.')
      window.open(mailtoLink, '_blank')
      setSubmitStatus('idle')
    }
  }

  return (
    <section
      id="contact"
      className={`relative overflow-hidden pb-14 sm:pb-16 md:pb-20 ${
        skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'
      } ${showSectionHeader ? 'pt-8 md:pt-12' : 'pt-2 sm:pt-4'}`}
    >
      {!skipBackground && <AnimatedBackground />}

      <div className="pointer-events-none absolute -left-32 top-16 h-96 w-96 rounded-full bg-[#00ABFB]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-[#45c8ff]/8 blur-3xl" />

      <div className="container relative z-10 mx-auto px-3 sm:px-4 md:px-5">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 36 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-6xl"
        >
          {!showSectionHeader ? (
            <div className="mb-5 text-center sm:mb-10 md:mb-12">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.1 }}
                className="mb-2 text-[10px] font-semibold uppercase tracking-[0.26em] text-[#00ABFB] sm:mb-4 sm:text-xs sm:tracking-[0.35em]"
              >
                Contact
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: 0.18 }}
                className="mx-auto max-w-4xl text-[1.65rem] font-extrabold leading-[1.2] tracking-tight text-gray-900 dark:text-white sm:text-3xl md:text-5xl lg:text-6xl"
              >
                Let&apos;s{' '}
                <span className="animate-gradient-flow bg-gradient-to-r from-[#00ABFB] via-[#45c8ff] to-[#00ABFB] bg-[length:200%_auto] bg-clip-text text-transparent">
                  work together
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.3 }}
                className="mx-auto mt-2 max-w-sm text-[13px] leading-relaxed text-gray-500 dark:text-gray-300 sm:mt-5 sm:max-w-2xl sm:text-base md:text-base"
              >
                Send a message or reach out directly.
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
                Contact
              </p>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white sm:text-2xl md:text-3xl">
                Get in touch
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-sm text-gray-500 dark:text-gray-400">
                Send a message and I&apos;ll reply as soon as I can.
              </p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 items-start gap-4 sm:gap-6 lg:grid-cols-[minmax(280px,340px)_1fr] lg:gap-8 xl:gap-10">
            <div className="order-2 lg:order-1">
              <ContactSidebar inView={inView} />
            </div>

            <div className="order-1 lg:order-2">
              <ContactFormPanel
                inView={inView}
                formData={formData}
                submitStatus={submitStatus}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
