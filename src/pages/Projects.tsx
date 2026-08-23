import { ExternalLink, Github, Code2, FileCode, Cpu } from 'lucide-react'
import { projects } from '../data/projects'

export default function Projects() {
  return (
    <div className="animate-fade-in py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Projects</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Real projects built to solve actual problems — not tutorial clones or portfolio fillers.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Note */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500">
            More projects in progress — including a job-vetting framework write-up and n8n automation workflows.
          </p>
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: typeof projects[0]
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Project Info */}
        <div className="md:col-span-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <ProjectIcon title={project.title} />
                <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
              </div>
              <p className="text-gray-400">{project.tagline}</p>
            </div>
          </div>

          <p className="text-gray-400 mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features</h4>
            <ul className="grid sm:grid-cols-2 gap-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                  <span className="text-accent-teal mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-dark-700 text-gray-300 rounded-full border border-dark-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Links & Actions */}
        <div className="md:col-span-1">
          <div className="bg-dark-900 rounded-lg p-4 space-y-3">
            <h4 className="text-sm font-semibold text-gray-300 mb-3">Links</h4>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors group"
              >
                <ExternalLink size={18} className="text-accent-teal" />
                <div>
                  <div className="text-sm font-medium text-gray-200 group-hover:text-accent-teal transition-colors">
                    Live Demo
                  </div>
                  <div className="text-xs text-gray-500 truncate max-w-[180px]">
                    {new URL(project.liveUrl).hostname}
                  </div>
                </div>
              </a>
            )}

            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-3 rounded-lg bg-dark-700 hover:bg-dark-600 transition-colors group"
            >
              <Github size={18} className="text-gray-400" />
              <div>
                <div className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                  View Source
                </div>
                <div className="text-xs text-gray-500">
                  GitHub Repository
                </div>
              </div>
            </a>
          </div>

          {project.highlight && (
            <div className="mt-4 p-3 rounded-lg bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 border border-accent-teal/20">
              <p className="text-xs text-gray-400">
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
