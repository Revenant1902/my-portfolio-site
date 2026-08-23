import { ExternalLink, Github, Code2, FileCode, Cpu } from 'lucide-react'
import { useState, useEffect } from 'react'
import { projects } from '../data/projects'

export default function Projects() {
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Projects</h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Real projects built to solve actual problems — not tutorial clones or portfolio fillers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isDark={isDark} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
            More projects in progress — including a job-vetting framework write-up and n8n automation workflows.
          </p>
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
  isDark: boolean
}

function ProjectCard({ project, isDark }: ProjectCardProps) {
  return (
    <div className="card">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Project Info */}
        <div className="md:col-span-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ProjectIcon title={project.title} />
                <h3 className={`text-2xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>{project.title}</h3>
              </div>
              <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{project.tagline}</p>
            </div>
          </div>

          <p className={`mb-6 leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Key Features</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li key={index} className={`flex items-start gap-2 text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="text-accent-teal mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 text-xs font-medium rounded-full ${isDark ? 'bg-dark-700 text-gray-300 border border-dark-600' : 'bg-gray-100 text-gray-700 border border-gray-200'}`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links & Actions */}
        <div className="md:col-span-1">
          <div className={`rounded-lg p-4 space-y-3 ${isDark ? 'bg-dark-900' : 'bg-gray-50'}`}>
            <h4 className={`text-sm font-semibold mb-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>Links</h4>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${isDark ? 'bg-dark-700 hover:bg-dark-600' : 'bg-gray-100 hover:bg-gray-200'}`}
              >
                <ExternalLink size={18} className="text-accent-teal" />
                <div>
                  <div className={`text-sm font-medium transition-colors ${isDark ? 'text-gray-200 group-hover:text-accent-teal' : 'text-gray-800 group-hover:text-accent-teal'}`}>
                    Live Demo
                  </div>
                  <div className={`text-xs truncate max-w-[180px] ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {new URL(project.liveUrl).hostname}
                  </div>
                </div>
              </a>
            )}

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${isDark ? 'bg-dark-700 hover:bg-dark-600' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              <Github size={18} className={isDark ? 'text-gray-400' : 'text-gray-600'} />
              <div>
                <div className={`text-sm font-medium transition-colors ${isDark ? 'text-gray-200 group-hover:text-white' : 'text-gray-800 group-hover:text-gray-900'}`}>
                  View Source
                </div>
                <div className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                  GitHub Repository
                </div>
              </div>
            </a>
          </div>

          {project.highlight && (
            <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 border border-accent-teal/20">
              <p className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                <span className="text-accent-teal font-medium">Featured Project</span> — Highlights key engineering decisions and real problem-solving.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function ProjectIcon({ title }: { title: string }) {
  if (title.toLowerCase().includes('tally')) {
    return <Cpu size={24} className="text-accent-teal" />
  }
  if (title.toLowerCase().includes('cyber')) {
    return <FileCode size={24} className="text-accent-teal" />
  }
  return <Code2 size={24} className="text-accent-teal" />
}
