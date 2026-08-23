import { Briefcase, Calendar, MapPin, CheckCircle } from 'lucide-react'
import { useState, useEffect } from 'react'
import { experiences, getTechnicalExperiences, getSalesExperiences } from '../data/experience'

export default function Experience() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const checkDark = () => {
      setIsDark(document.body.classList.contains('dark'))
    }
    checkDark()
    const observer = new MutationObserver(checkDark)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  const technicalExp = getTechnicalExperiences()
  const salesExp = getSalesExperiences()

  return (
    <div className="animate-fade-in py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative gradients */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Experience</h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            A dual-track career spanning AI/technical work and B2B sales — each reinforcing the other.
          </p>
        </div>

        {/* Technical/AI Experience */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent-teal/10 flex items-center justify-center">
              <Briefcase className="text-accent-teal" size={20} />
            </div>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Technical & AI</h2>
          </div>

          <div className="space-y-6">
            {technicalExp.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} isDark={isDark} />
            ))}
          </div>
        </div>

        {/* Sales/BD Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
              <Briefcase className="text-accent-blue" size={20} />
            </div>
            <h2 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Sales & Business Development</h2>
          </div>

          <div className="space-y-6">
            {salesExp.map((exp) => (
              <ExperienceCard key={exp.id} experience={exp} isDark={isDark} />
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 card bg-gradient-to-r from-accent-teal/5 to-accent-blue/5">
          <h3 className={`text-lg font-semibold mb-6 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Combined Impact</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-accent-teal">~3,000</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Outbound Calls</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-blue">1,300+</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Leads Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-teal">450+</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Appointments Booked</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-accent-blue">~$15M</div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Funding Facilitated</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ExperienceCardProps {
  experience: typeof experiences[0]
  isDark: boolean
}

function ExperienceCard({ experience, isDark }: ExperienceCardProps) {
  return (
    <div className="card">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
        <div>
          <h3 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {experience.role}
          </h3>
          <p className="text-accent-teal font-medium">{experience.company}</p>
        </div>
        <div className={`flex flex-col sm:items-end gap-1 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>

      <ul className="space-y-2 mb-4">
        {experience.description.map((item, index) => (
          <li key={index} className={`flex items-start gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <CheckCircle size={16} className="text-accent-teal flex-shrink-0 mt-0.5" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {experience.skills && (
        <div className="flex flex-wrap gap-2 mb-3">
          {experience.skills.map((skill) => (
            <span
              key={skill}
              className={`px-3 py-1 text-xs font-medium rounded-full ${isDark ? 'bg-dark-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      {experience.metrics && (
        <div className={`pt-3 border-t ${isDark ? 'border-dark-700' : 'border-gray-200'}`}>
          <div className="flex flex-wrap gap-3">
            {experience.metrics.map((metric, index) => (
              <div key={index} className="text-sm">
                <span className="text-accent-teal font-semibold">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
