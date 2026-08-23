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
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/abir-photo.jpg"
            alt=""
            className="w-full h-full object-cover object-top opacity-20"
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 via-dark-900/60 to-dark-900" />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/70 via-transparent to-dark-900/70" />
          {/* Subtle blue-ash gradient accent */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/5 via-transparent to-accent-teal/5" />
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 text-sm font-medium text-accent-teal bg-accent-teal/10 rounded-full border border-accent-teal/20">
              {personalInfo.title}
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            {heroContent.headline}
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
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
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-gray-400">
            {proofStrip.map((item, index) => (
              <div key={item} className="flex items-center gap-4">
                <span className="text-sm font-medium">{item}</span>
                {index < proofStrip.length - 1 && (
                  <span className="hidden sm:inline text-gray-600">•</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-800/50 via-dark-800 to-dark-800/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue/5 via-transparent to-accent-teal/5" />

        <div className="relative max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-100 mb-2">By The Numbers</h2>
            <p className="text-gray-400">Combined impact across technical and sales roles</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6">
            {metrics.map((metric, index) => (
              <div key={metric.label} className="card text-center group hover:shadow-xl hover:shadow-accent-teal/10">
                <div className={`text-3xl sm:text-4xl font-bold mb-2 transition-colors ${
                  index % 2 === 0 ? 'text-accent-teal' : 'text-accent-blue'
                }`}>
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-gray-200 mb-1">
                  {metric.label}
                </div>
                {metric.description && (
                  <div className="text-xs text-gray-400">
                    {metric.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-teal/5 rounded-full blur-3xl" />

        <div className="max-w-6xl mx-auto relative">
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
                className="card group cursor-pointer hover:shadow-xl hover:shadow-accent-teal/5"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-100 group-hover:text-accent-teal transition-colors">
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
                      className="px-3 py-1 text-xs font-medium bg-dark-700 text-gray-300 rounded-full border border-dark-600"
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/10 via-accent-blue/10 to-accent-teal/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent" />

        <div className="relative max-w-6xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-gray-100">
            Let's Build Something Together
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
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
