import type { Project } from '../types'

export const projects: Project[] = [
  {
    id: 'tally',
    title: 'Tally',
    tagline: 'A focused counter app built for tracking daily productivity metrics',
    description: 'A fast, focused counter app built specifically to track calls made, appointments booked, and RWS tasks completed each day. Built as a personal tool, not a public product; other counter apps on the market were bloated with ads, so I built a minimal one for my own use.',
    liveUrl: 'https://tally-revenant.vercel.app/',
    repoUrl: 'https://github.com/Revenant1902/tally',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Lucide Icons'],
    features: [
      'Schema-versioned local storage layer for future-proof data migrations',
      'Error boundary implementation for resilient user experience',
      'Unlimited named counters with color tagging',
      'One-tap increment/decrement with digit-roll animation',
      'Per-counter history tracking'
    ],
    highlight: true
  },
  {
    id: 'cybersec-learning-log',
    title: 'Cybersecurity Learning Log',
    tagline: 'Structured public documentation of my PEH coursework journey',
    description: 'A structured, ongoing public documentation of my cybersecurity/ethical hacking learning journey through TCM Security\'s Practical Ethical Hacking (PEH) course. Directly backs up networking and Linux skills claims with real, public, checkable evidence.',
    repoUrl: 'https://github.com/Revenant1902/cybersec-learning-log',
    techStack: ['Markdown', 'Bash', 'Python', 'Networking'],
    features: [
      'Networking fundamentals (IP/MAC addressing, TCP/UDP, subnetting, OSI model)',
      'Linux fundamentals (file system, users/privileges, common commands)',
      'Bash scripting exercises',
      'Python fundamentals (in progress)',
      'TryHackMe/HTB hands-on practice planned'
    ],
    highlight: true
  },
  {
    id: 'claude-omniroute-setup',
    title: 'Claude Code + OpenRouter Setup',
    tagline: 'Technical configuration guide for AI-assisted development',
    description: 'Hands-on configuration of Claude Code running through OpenRouter on PowerShell — real technical setup involving API key configuration, environment variables, Git integration, and command-line work. Directly matches named tool requirements in job postings.',
    repoUrl: 'https://github.com/Revenant1902/claude_omniroute-setup',
    techStack: ['PowerShell', 'OpenRouter API', 'Git', 'Environment Variables'],
    features: [
      'API key configuration and management',
      'Environment variable setup',
      'Git integration for version control',
      'Step-by-step troubleshooting documentation'
    ]
  }
]

export const getFeaturedProjects = () => projects.filter(p => p.highlight)
