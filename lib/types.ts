// Type definitions for the portfolio website

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github?: string
  live?: string
  featured: boolean
}

export interface Experience {
  id: string
  title: string
  company: string
  period: string
  description: string
  achievements: string[]
}

export interface Education {
  id: string
  degree: string
  institution: string
  period: string
  location: string
  gpa: string
  description: string
  achievements: string[]
  courses: string[]
}

export interface Volunteer {
  id: string
  title: string
  organization: string
  period: string
  location: string
  description: string
  impact: string[]
  skills: string[]
  hours: string
}

export interface Ambassador {
  id: string
  title: string
  organization: string
  period: string
  location: string
  description: string
  responsibilities: string[]
  achievements: string[]
  skills: string[]
  impact: string
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavItem {
  name: string
  href: string
}

export interface AnimationVariants {
  hidden: {
    opacity: number
    x?: number
    y?: number
  }
  visible: {
    opacity: number
    x?: number
    y?: number
    transition?: {
      delayChildren?: number
      staggerChildren?: number
    }
  }
}
