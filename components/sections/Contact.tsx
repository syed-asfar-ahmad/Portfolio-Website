'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaPaperPlane } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import toast from 'react-hot-toast'
import AnimatedBackground from '@/components/ui/AnimatedBackground'

type ContactProps = { showSectionHeader?: boolean; skipBackground?: boolean }

const Contact = ({ showSectionHeader = true, skipBackground = false }: ContactProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    const serviceId = 'service_nbyy4sk'
    const templateId = 'template_zsij0se'
    const publicKey = 'UKNH39WyPpWGZDLtN'
    try {
      await emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }, publicKey)
      toast.success("Message sent! I'll get back to you soon.", { duration: 4000 })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ASubject: ${formData.subject}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`
      const mailtoLink = `mailto:contact@syedasfar.com?subject=${encodeURIComponent(`Contact: ${formData.subject}`)}&body=${emailBody}`
      toast.error('Sending failed. Opening email client.')
      window.open(mailtoLink, '_blank')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactItems = [
    { icon: FaEnvelope, label: 'Email', value: 'contact@syedasfar.com', href: 'mailto:contact@syedasfar.com' },
    { icon: FaPhone, label: 'Phone', value: '+92 318 4318539', href: 'tel:+923184318539' },
    { icon: FaMapMarkerAlt, label: 'Location', value: 'Lahore, Pakistan', href: undefined },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/syed-asfar-ahmad-bukhari/', label: 'LinkedIn', iconClass: 'text-[#0A66C2]' },
    { icon: FaGithub, href: 'https://github.com/syed-asfar-ahmad', label: 'GitHub', iconClass: 'text-[#181717] dark:text-gray-200' },
    { icon: FaWhatsapp, href: 'https://wa.me/923184318539', label: 'WhatsApp', iconClass: 'text-[#25D366]' },
  ]

  return (
    <section id="contact" className={`relative pb-20 md:pb-28 overflow-hidden ${skipBackground ? 'bg-transparent' : 'bg-white dark:bg-black'} ${showSectionHeader ? 'pt-8 md:pt-12' : 'pt-2 md:pt-4'}`}>
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
            <div className="text-center mb-12 md:mb-16">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 }}
                className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00ABFB] mb-3"
              >
                Contact
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.25 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight mb-4"
              >
                Get In Touch
              </motion.h2>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={inView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="origin-center h-0.5 w-16 mx-auto mb-5 rounded-full bg-[#00ABFB]"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-md mx-auto"
              >
                Have a project in mind? Drop a message and I&apos;ll get back soon.
              </motion.p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="lg:col-span-3"
            >
              <div className="relative rounded-2xl border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-white dark:bg-gray-950/90 shadow-md overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#00ABFB]" />
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                    <FaPaperPlane className="w-5 h-5 text-[#00ABFB]" />
                    Send a message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name <span className="text-red-500">*</span></label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ABFB]/50 focus:border-[#00ABFB] transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email <span className="text-red-500">*</span></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ABFB]/50 focus:border-[#00ABFB] transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Subject <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ABFB]/50 focus:border-[#00ABFB] transition-colors"
                        placeholder="What's this about?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message <span className="text-red-500">*</span></label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#00ABFB]/50 focus:border-[#00ABFB] transition-colors resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-[#00ABFB] hover:bg-[#0090d4] focus:outline-none focus:ring-2 focus:ring-[#00ABFB] focus:ring-offset-2 dark:focus:ring-offset-gray-950 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send message'}
                    </motion.button>
                  </form>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="relative rounded-2xl border border-[#00ABFB]/30 dark:border-[#00ABFB]/25 bg-white dark:bg-gray-950/90 shadow-md overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#00ABFB]" />
                <div className="p-6">
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-5">Contact & connect</h4>
                  <ul className="space-y-4 mb-6">
                    {contactItems.map(({ icon: Icon, label, value, href }) => (
                      <li key={label} className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#00ABFB]/10 text-[#00ABFB]">
                          <Icon className="w-4 h-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">{label}</p>
                          {href ? (
                            <a href={href} className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#00ABFB] transition-colors break-all">
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{value}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">Follow</p>
                  <div className="flex gap-3">
                    {socialLinks.map(({ icon: Icon, href, label, iconClass }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 transition-colors hover:opacity-90"
                        aria-label={label}
                      >
                        <Icon className={`w-5 h-5 ${iconClass}`} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
