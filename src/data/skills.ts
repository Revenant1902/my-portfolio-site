import { Code2, Brain, TrendingUp } from 'lucide-react'
import type { SkillCategory } from '../types'

export const skillCategories: SkillCategory[] = [
  {
    category: 'Technical & Security',
    icon: Code2,
    skills: [
      { name: 'React 19 + TypeScript', level: 'moderate' },
      { name: 'Vite Build Tool', level: 'moderate' },
      { name: 'Python', level: 'strong' },
      { name: 'JavaScript/TypeScript', level: 'moderate' },
      { name: 'Bash Scripting', level: 'strong' },
      { name: 'Linux Fundamentals', level: 'moderate' },
      { name: 'Networking (OSI, TCP/IP)', level: 'moderate' },
      { name: 'Git & GitHub', level: 'moderate' },
      { name: 'OSINT Research', level: 'moderate' }
    ]
  },
  {
    category: 'AI & Automation',
    icon: Brain,
    skills: [
      { name: 'AI Model Evaluation', level: 'strong' },
      { name: 'Quality Assurance', level: 'strong' },
      { name: 'Claude Code', level: 'strong' },
      { name: 'ChatGPT/Claude', level: 'strong' },
      { name: 'n8n Workflow Automation', level: 'moderate' },
      { name: 'Docker', level: 'moderate' },
      { name: 'GA4 & Google Tag Manager', level: 'learning' }
    ]
  },
  {
    category: 'Sales & Outreach',
    icon: TrendingUp,
    skills: [
      { name: 'Cold Calling', level: 'strong' },
      { name: 'Appointment Setting', level: 'strong' },
      { name: 'Lead Qualification', level: 'strong' },
      { name: 'Objection Handling', level: 'strong' },
      { name: 'CRM Management (GoHighLevel)', level: 'strong' },
      { name: 'Apollo.io Lead Sourcing', level: 'moderate' },
      { name: 'Client Relationship Management', level: 'moderate' }
    ]
  }
]

export const getLevelColor = (level: string): string => {
  switch (level) {
    case 'strong':
      return 'bg-accent-teal'
    case 'moderate':
      return 'bg-accent-blue'
    case 'learning':
      return 'bg-gray-500'
    default:
      return 'bg-gray-500'
  }
}

export const getLevelLabel = (level: string): string => {
  switch (level) {
    case 'strong':
      return 'Strong'
    case 'moderate':
      return 'Moderate'
    case 'learning':
      return 'Learning'
    default:
      return level
  }
}
