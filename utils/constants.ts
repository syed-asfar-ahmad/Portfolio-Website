export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export const SITE_CONFIG = {
  name: 'Syed Asfar Ahmad Bukhari',
  title: 'Syed Asfar Ahmad Bukhari - Portfolio',
  description: 'Web Developer & Data Scientist based in Pakistan',
  url: 'https://asfar-portfolio.com',
  ogImage: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/og-image.jpg`,
  links: {
    github: 'https://github.com/asfar-bukhari',
    linkedin: 'https://linkedin.com/in/asfar-bukhari',
    twitter: 'https://twitter.com/asfar_bukhari',
    email: 'mailto:syed.asfar.bukhari@gmail.com',
  },
}

export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'Skills', href: '/skills' },
  { name: 'Qualification', href: '/education' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Projects', href: '/projects' },
  { name: 'Testimonial', href: '/testimonial' },
  { name: 'Contact', href: '/contact' },
]

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }
}

export const CONTACT_FORM = {
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'subject', label: 'Subject', type: 'text', required: true },
    { name: 'message', label: 'Message', type: 'textarea', required: true },
  ]
}
