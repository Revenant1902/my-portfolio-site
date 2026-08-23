import { skillCategories, getLevelColor, getLevelLabel } from '../data/skills'

export default function Skills() {
  return (
    <div className="animate-fade-in py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Skills</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Honest assessment of proficiency levels — I'd rather under-promise and over-deliver.
          </p>
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mb-12">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-teal" />
            <span className="text-sm text-gray-400">Strong</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent-blue" />
            <span className="text-sm text-gray-400">Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-gray-500" />
            <span className="text-sm text-gray-400">Learning</span>
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-dark-700 flex items-center justify-center">
                  <category.icon size={20} className="text-accent-teal" />
                </div>
                <h2 className="text-xl font-semibold">{category.category}</h2>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-300">{skill.name}</span>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${getLevelColor(skill.level)}`} />
                      <span className="text-xs text-gray-500 w-16 text-right">
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
          <h2 className="subsection-heading text-center mb-8">Tools & Platforms</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'GoHighLevel', 'Vicidial', 'RingCentral', 'Apollo.io',
              'ChatGPT', 'Claude', 'Claude Code', 'n8n',
              'Git', 'GitHub', 'VS Code', 'Vite',
              'Notion', 'Canva', 'CapCut', 'Google Sheets'
            ].map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-sm bg-dark-800 text-gray-300 rounded-lg border border-dark-700 hover:border-accent-teal transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Learning Note */}
        <div className="mt-16 text-center">
          <div className="inline-block p-6 rounded-lg bg-dark-800 border border-dark-700 max-w-2xl">
            <p className="text-sm text-gray-400 leading-relaxed">
              <span className="text-accent-teal font-medium">Currently Learning:</span> n8n workflow automation,
              Practical Ethical Hacking (networking fundamentals, Linux, Python), and GA4/Google Tag Manager.
              Skills marked as "Learning" represent active development areas, not idle interest.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
