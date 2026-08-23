import { Mail, Github, Linkedin, Download, MapPin, Send } from 'lucide-react'
import { useState, useEffect } from 'react'
import { personalInfo } from '../data/content'

export default function Contact() {
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
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Get In Touch</h1>
          <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            Always open to opportunities in AI QA, automation, and B2B sales roles.
            Feel free to reach out if you'd like to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            <h2 className={`subsection-heading ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Contact</h2>

            <a
              href="mailto:nillmw02@gmail.com"
              className="card flex items-center gap-4 hover:border-accent-teal transition-colors group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors ${isDark ? 'bg-dark-700' : 'bg-gray-100'}`}>
                <Mail className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className={`font-medium transition-colors ${isDark ? 'text-gray-200 group-hover:text-accent-teal' : 'text-gray-800 group-hover:text-accent-teal'}`}>Email</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{personalInfo.email}</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/abir-islam-nill"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:border-accent-teal transition-colors group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors ${isDark ? 'bg-dark-700' : 'bg-gray-100'}`}>
                <Linkedin className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className={`font-medium transition-colors ${isDark ? 'text-gray-200 group-hover:text-accent-teal' : 'text-gray-800 group-hover:text-accent-teal'}`}>LinkedIn</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>linkedin.com/in/abir-islam-nill</div>
              </div>
            </a>

            <a
              href="https://github.com/Revenant1902"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:border-accent-teal transition-colors group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors ${isDark ? 'bg-dark-700' : 'bg-gray-100'}`}>
                <Github className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className={`font-medium transition-colors ${isDark ? 'text-gray-200 group-hover:text-accent-teal' : 'text-gray-800 group-hover:text-accent-teal'}`}>GitHub</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>github.com/Revenant1902</div>
              </div>
            </a>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h2 className={`subsection-heading ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Quick Actions</h2>

            <a
              href="/resume.pdf"
              download
              className="card flex items-center gap-4 hover:border-accent-teal transition-colors group"
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors ${isDark ? 'bg-dark-700' : 'bg-gray-100'}`}>
                <Download className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className={`font-medium transition-colors ${isDark ? 'text-gray-200 group-hover:text-accent-teal' : 'text-gray-800 group-hover:text-accent-teal'}`}>Download Resume</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>PDF • Updated August 2026</div>
              </div>
            </a>

            <div className="card flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? 'bg-dark-700' : 'bg-gray-100'}`}>
                <MapPin className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Location</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>{personalInfo.location}</div>
              </div>
            </div>

            <div className="card flex items-center gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${isDark ? 'bg-dark-700' : 'bg-gray-100'}`}>
                <Send className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className={`font-medium ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>Availability</div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Always glad to hear what you're building — and explore where I can contribute</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-lg bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 border border-accent-teal/20">
            <h3 className={`text-xl font-semibold mb-3 ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>Let's Connect</h3>
            <p className={`mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Whether you have a role that fits my background, want to discuss a project,
              or just want to say hello — I'd love to hear from you.
            </p>
            <a
              href="mailto:nillmw02@gmail.com"
              className="btn-primary"
            >
              Send an Email <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
