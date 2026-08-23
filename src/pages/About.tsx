import { GraduationCap, Award, Users, BookOpen } from 'lucide-react'
import { aboutContent, personalInfo } from '../data/content'

const timeline = [
  {
    year: '2023',
    title: 'Started CSE at BRAC University',
    description: 'Began formal Computer Science education while exploring AI and automation.',
    icon: GraduationCap
  },
  {
    year: '2025',
    title: 'US SMB Financing Specialist',
    description: 'Worked directly with US business owners on financing solutions, generating leads and coordinating with lenders.',
    icon: Users
  },
  {
    year: '2026',
    title: 'AI Quality Assurance Specialist',
    description: 'Joined RWS Group to evaluate AI model outputs and conduct speech-to-speech assessments.',
    icon: Award
  },
  {
    year: 'Present',
    title: 'Building Technical Foundation',
    description: 'Deepening skills in cybersecurity, automation tools (n8n, Claude Code), and modern web development.',
    icon: BookOpen
  }
]

const extracurriculars = [
  {
    role: 'Secretary of HR',
    organization: 'BRAC University Leadership Development Forum',
    period: '2023 – Present'
  },
  {
    role: 'Apprentice, HR',
    organization: 'Robotics Club of BRAC University (ROBU)',
    period: '2024 – Present'
  },
  {
    role: 'Admission Management Coordinator',
    organization: 'BRAC University Admission Office',
    period: 'Present'
  },
  {
    role: 'Former Organizing Secretary',
    organization: 'Kushtia Zilla School Debating Club',
    period: '2018 – 2020'
  }
]

const awards = [
  {
    title: "The Duke of Edinburgh's Award",
    level: 'Bronze Level',
    year: ''
  }
]

export default function About() {
  return (
    <div className="animate-fade-in py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">About Me</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            {aboutContent.positioning}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Photo and Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="card p-0 overflow-hidden mb-6">
                <img
                  src="/images/abir-photo.jpg.jpg"
                  alt={personalInfo.name}
                  className="w-full aspect-square object-cover"
                />
              </div>

              <div className="card">
                <h3 className="font-semibold mb-4">Quick Info</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-500">Location</span>
                    <p className="text-gray-300">{personalInfo.location}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Education</span>
                    <p className="text-gray-300">{personalInfo.degree}</p>
                    <p className="text-gray-400">{personalInfo.university} • {personalInfo.universityPeriod}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Focus</span>
                    <p className="text-gray-300">AI QA, Automation, Cybersecurity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Bio */}
            <div>
              <h2 className="subsection-heading">Background</h2>
              <div className="prose prose-invert max-w-none">
                {aboutContent.longBio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-400 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Journey Timeline */}
            <div>
              <h2 className="subsection-heading">My Journey</h2>
              <div className="space-y-6">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-dark-700 flex items-center justify-center">
                        <item.icon size={20} className="text-accent-teal" />
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-dark-700 mt-2" />
                      )}
                    </div>
                    <div className="flex-1 pb-6">
                      <div className="text-sm text-accent-teal font-medium mb-1">
                        {item.year}
                      </div>
                      <h3 className="font-semibold text-gray-200 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Extracurriculars */}
            <div>
              <h2 className="subsection-heading">Extracurriculars</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {extracurriculars.map((item, index) => (
                  <div key={index} className="card">
                    <h3 className="font-medium text-gray-200">{item.role}</h3>
                    <p className="text-sm text-gray-400">{item.organization}</p>
                    <p className="text-xs text-gray-500 mt-1">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards */}
            <div>
              <h2 className="subsection-heading">Awards</h2>
              <div className="flex gap-4">
                {awards.map((award, index) => (
                  <div key={index} className="card flex items-center gap-3">
                    <Award className="text-accent-teal" size={24} />
                    <div>
                      <h3 className="font-medium text-gray-200">{award.title}</h3>
                      <p className="text-sm text-gray-400">{award.level}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
