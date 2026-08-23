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
    highlight: false
  },
  {
    id: 'claude-omniroute-setup',
    title: 'Claude Code + OmniRoute Setup',
    tagline: 'Multi-model routing configuration for AI-assisted development on Windows',
    description: 'A documented, repeatable setup guide for running Claude Code through an OmniRoute proxy on Windows via Git Bash. Routing Claude Code through OmniRoute unlocks multi-model routing flexibility, custom model aliasing, and unified key management across upstream AI providers — including OpenRouter, Agent Router, Veo AI, OpenCode, and Kiro AI.',
    repoUrl: 'https://github.com/Revenant1902/claude_omniroute-setup',
    techStack: ['Node.js', 'Git Bash', 'OmniRoute Proxy', 'Environment Variables', 'VS Code'],
    features: [
      'Multi-model routing across upstream providers (OpenRouter, Agent Router, Veo AI, OpenCode, Kiro AI)',
      'Environment variable configuration in .bashrc — base URL, API keys, and model aliases',
      'Custom model aliasing (CLAUDE_MODEL) mapped to OmniRoute endpoints',
      'Terminal troubleshooting matrix — documented issues, root causes, and fixes',
      'VS Code integrated-terminal standardization to Git Bash for consistent profile loading'
    ],
    highlight: true
  }
]

export const getFeaturedProjects = () => projects.filter(p => p.highlight)
