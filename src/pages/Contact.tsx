import { Mail, Github, Linkedin, Download, MapPin, Send } from 'lucide-react'
import { personalInfo } from '../data/content'

export default function Contact() {
  return (
    <div className="animate-fade-in py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="section-heading">Get In Touch</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Currently open to opportunities in AI QA, automation, and B2B sales roles.
            Feel free to reach out if you'd like to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Methods */}
          <div className="space-y-4">
            <h2 className="subsection-heading">Contact</h2>

            <a
              href="mailto:nillmw02@gmail.com"
              className="card flex items-center gap-4 hover:border-accent-teal transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors">
                <Mail className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-200">Email</div>
                <div className="text-sm text-gray-400">{personalInfo.email}</div>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/abir-islam-nill"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:border-accent-teal transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors">
                <Linkedin className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-200">LinkedIn</div>
                <div className="text-sm text-gray-400">linkedin.com/in/abir-islam-nill</div>
              </div>
            </a>

            <a
              href="https://github.com/Revenant1902"
              target="_blank"
              rel="noopener noreferrer"
              className="card flex items-center gap-4 hover:border-accent-teal transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors">
                <Github className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-200">GitHub</div>
                <div className="text-sm text-gray-400">github.com/Revenant1902</div>
              </div>
            </a>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <h2 className="subsection-heading">Quick Actions</h2>

            <a
              href="/resume.pdf"
              download
              className="card flex items-center gap-4 hover:border-accent-teal transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center group-hover:bg-accent-teal/10 transition-colors">
                <Download className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-200">Download Resume</div>
                <div className="text-sm text-gray-400">PDF • Updated August 2026</div>
              </div>
            </a>

            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center">
                <MapPin className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-200">Location</div>
                <div className="text-sm text-gray-400">{personalInfo.location}</div>
              </div>
            </div>

            <div className="card flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-dark-700 flex items-center justify-center">
                <Send className="text-accent-teal" size={24} />
              </div>
              <div>
                <div className="font-medium text-gray-200">Availability</div>
                <div className="text-sm text-gray-400">Open to remote opportunities</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="p-8 rounded-lg bg-gradient-to-r from-accent-teal/10 to-accent-blue/10 border border-accent-teal/20">
            <h3 className="text-xl font-semibold mb-3">Let's Connect</h3>
            <p className="text-gray-400 mb-6">
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
