import type { LucideIcon } from 'lucide-react'

interface Experience {
  id: string
  company: string
  role: string
  type: 'technical' | 'sales'
  location: string
  period: string
  description: string[]
  skills?: string[]
  metrics?: string[]
}

interface Project {
  id: string
  title: string
  tagline: string
  description: string
  liveUrl?: string
  repoUrl: string
  techStack: string[]
  features: string[]
  highlight?: boolean
}

interface Skill {
  name: string
  level: 'strong' | 'moderate' | 'learning'
}

interface SkillCategory {
  category: string
  icon: LucideIcon
  skills: Skill[]
}

interface Metric {
  value: string
  label: string
  description?: string
}

interface SocialLink {
  name: string
  url: string
  icon: string
}

export type { Experience, Project, Skill, SkillCategory, Metric, SocialLink }
