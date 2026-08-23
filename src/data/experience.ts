import type { Experience } from '../types'

export const experiences: Experience[] = [
  {
    id: 'rws-group',
    company: 'RWS Group',
    role: 'AI Quality Assurance & Evaluation Specialist',
    type: 'technical',
    location: 'Remote (UK-headquartered)',
    period: 'June 2026 – Present',
    description: [
      'Evaluate and compare AI model outputs across multiple response variations to identify quality gaps, inconsistencies, and misalignment in accuracy, tone, and intent',
      'Conduct speech-to-speech (S2S) evaluation — audio output quality, naturalness, fidelity against benchmarks',
      'Perform structured data annotation, tagging, and transcription tasks (Bengali locale)',
      'Apply detailed evaluation guidelines and qualification standards consistently across ad-hoc task assignments',
      'Operate independently within a distributed remote QA workflow'
    ],
    skills: ['AI Evaluation', 'Quality Assurance', 'Data Annotation', 'Bengali Transcription'],
    metrics: ['97% QA task accuracy']
  },
  {
    id: 'metro-hospitality',
    company: 'Metro Hospitality',
    role: 'Business Development Associate',
    type: 'sales',
    location: 'Remote (Arizona, US)',
    period: 'March 2026 – May 2026',
    description: [
      'Outbound prospecting to property managers, Airbnb hosts, and commercial operators for Guest Services, HVAC, plumbing, and security solutions',
      'Used Apollo.io to source, segment, and qualify leads across hospitality, real estate, commercial property',
      'Engaged decision-makers directly, overcoming gatekeepers and objections to schedule discovery calls',
      'Maintained and optimized structured outreach pipeline with consistent follow-up',
      'Refined scripts and objection-handling strategies based on real call outcomes'
    ],
    skills: ['Cold Calling', 'Lead Generation', 'Apollo.io', 'CRM Management'],
    metrics: ['Multi-vertical outreach across hospitality, security, and HVAC']
  },
  {
    id: 'vortex-infosys',
    company: 'Vortex Infosys',
    role: 'US SMB Financing Specialist',
    type: 'sales',
    location: 'Remote',
    period: 'November 2025 – February 2026',
    description: [
      'Worked directly with US small business owners to identify funding needs and provide financing solutions',
      'Pre-qualified leads by revenue, credit score, and business performance',
      'Coordinated with US direct lenders for deal submission and funding',
      'Maintained CRM accuracy, managed active pipelines, and hit call/approval/funding targets'
    ],
    skills: ['MCA/SBA Financing', 'Lead Qualification', 'CRM Management', 'Pipeline Management'],
    metrics: ['~$15M aggregate financing volume facilitated']
  }
]

export const getTechnicalExperiences = () => experiences.filter(e => e.type === 'technical')
export const getSalesExperiences = () => experiences.filter(e => e.type === 'sales')
