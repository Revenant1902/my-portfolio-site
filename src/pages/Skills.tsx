import { useState, useEffect } from 'react'
import { skillCategories, getLevelColor, getLevelLabel } from '../data/skills'

export default function Skills() {
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

  return (
    <div className="animate-fade-in py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Decorative gradients */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Skills</h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Honest assessment of proficiency levels — I'd rather under-promise and over-deliver.
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-teal" />
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Strong</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-blue" />
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500" />
            <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Learning</span>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-dark-700' : 'bg-gray-100'}`}>
                  <category.icon size={20} className="text-accent-teal" />
                </div>
                <h2 className={`text-xl font-semibold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{category.category}</h2>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`} />
                      <span className={`text-xs w-16 text-right ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                        {getLevelLabel(skill.level)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Platforms */}
        <div className="mt-16">
          <h2 className={`subsection-heading text-center mb-8 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Tools & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GoHighLevel', 'Vicidial', 'RingCentral', 'Apollo.io',
              'ChatGPT', 'Claude', 'Claude Code', 'n8n', 'Docker',
              'Git', 'GitHub', 'VS Code', 'Vite',
              'Notion', 'Obsidian', 'Canva', 'Google Sheets'
            ].map((tool) => (
              <span
                key={tool}
                className={`px-4 py-2 text-sm rounded-lg border transition-colors hover:border-accent-teal ${
                  isDark
                    ? 'bg-dark-800 text-gray-300 border-dark-700'
                    : 'bg-white text-gray-700 border-gray-200'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Note */}
        <div className="mt-16 text-center">
          <div className={`inline-block p-6 rounded-lg max-w-2xl ${isDark ? 'bg-dark-800 border border-dark-700' : 'bg-white border border-gray-200'}`}>
            <p className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              <span className="text-accent-teal font-medium">Actively Expanding:</span> GA4 & Google Tag Manager
              certifications, deeper n8n workflow automation, and Practical Ethical Hacking coursework
              (Python fundamentals, passive recon). Skills marked as "Learning" represent active development
              areas, not idle interest.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
