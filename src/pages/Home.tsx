import { ArrowRight, Download, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { heroContent, personalInfo, proofStrip } from '../data/content'
import { metrics } from '../data/metrics'
import { getFeaturedProjects } from '../data/projects'

export default function Home() {
  const featuredProjects = getFeaturedProjects()

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium text-accent-teal bg-accent-teal/10 rounded-full border border-accent-teal/20">
              {personalInfo.title}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {heroContent.headline}
          </h1>

          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            {heroContent.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link to="/projects" className="btn-primary">
              View My Work <ArrowRight size={20} />
            </Link>
            <a href="/resume.pdf" download className="btn-secondary">
              Download Resume <Download size={20} />
            </a>
          </div>

          {/* Proof Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-500">
            {proofStrip.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-sm font-medium">{item}</span>
                {index < proofStrip.length - 1 && (
                  <span className="hidden sm:inline text-dark-600">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="card text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-gray-300 mb-1">
                  {metric.label}
                </div>
                {metric.description && (
                  <div className="text-xs text-gray-500">
                    {metric.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-heading">Featured Projects</h2>
            <Link to="/projects" className="text-accent-teal hover:text-accent-blue transition-colors flex items-center gap-2">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project) => (
              <a
                key={project.id}
                href={project.liveUrl || project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="card group cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-accent-teal transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-400">{project.tagline}</p>
                  </div>
                  <ExternalLink size={20} className="text-gray-500 group-hover:text-accent-teal transition-colors" />
                </div>

                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-dark-700 text-gray-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent-teal/10 to-accent-blue/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Let's Build Something Together
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Currently open to opportunities in AI QA, automation, and B2B sales roles.
            Feel free to reach out if you'd like to connect.
          </p>
          <Link to="/contact" className="btn-primary">
            Get In Touch <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
