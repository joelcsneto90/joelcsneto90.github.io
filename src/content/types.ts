export type Lang = 'pt' | 'en'

// Strings in `results` may mark highlights with **double asterisks**.
export interface Job {
  role: string
  company: string
  url?: string
  period: string
  location: string
  summary?: string
  responsibilities?: string[]
  results: string[]
  stack: string[]
}

export interface Project {
  name: string
  description: string
  stack: string[]
  links: { label: string; url: string }[]
}

export interface Content {
  meta: { title: string; description: string }
  nav: { about: string; ai: string; resume: string; projects: string; contact: string }
  ui: {
    toDark: string
    toLight: string
    otherLang: string
    otherLangLabel: string
    responsibilities: string
    results: string
    downloadResume: string
  }
  hero: { greeting: string; role: string; tagline: string; stack: string; cloud: string; ctaJourney: string }
  about: { paragraphs: string[] }
  ai: {
    title: string
    subtitle: string
    intro: string
    practices: { title: string; text: string }[]
    repoLabel: string
    footnote: string
  }
  resume: {
    title: string
    subtitle: string
    intro: string
    jobs: Job[]
    projectsTitle: string
    projects: Project[]
    skillsTitle: string
    skills: { group: string; items: string[] }[]
    educationTitle: string
    education: { title: string; school: string; year: string }[]
    certificationsTitle: string
    certifications: { code: string; name: string }[]
    languagesTitle: string
    languages: { name: string; level: string }[]
  }
  contact: { title: string; text: string }
}
