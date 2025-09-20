'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

const footerLinks = {
  Services: [
    { name: 'Google Ads', href: '#services' },
    { name: 'TikTok Ads', href: '#services' },
    { name: 'Meta Ads', href: '#services' },
    { name: 'Website Development', href: '#services' },
  ],
  Company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Team', href: '#about' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  Resources: [
    { name: 'Blog', href: '#' },
    { name: 'Guides', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Support', href: '#contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR', href: '#' },
  ]
}

const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/kiumedia',
    icon: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/21921ed2-ce48-4348-bc46-7af7d1837f0e.png'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/kiumedia',
    icon: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c04db368-d2ce-4e96-b417-2d96f217acec.png'
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/kiumedia',
    icon: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1c71ed9b-b8d5-440c-bc1e-dec47306f901.png'
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/kiumedia',
    icon: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4d6be825-e65d-414c-bba2-ccc00bb543b2.png'
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@kiumedia',
    icon: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/b010717f-3106-4083-857f-9c2501b4b914.png'
  }
]

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    if (sectionId.startsWith('#')) {
      const element = document.getElementById(sectionId.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-black border-t border-gray-800">
      {/* Newsletter section */}
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Stay Updated with Digital Marketing Trends
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get exclusive insights, tips, and strategies delivered to your inbox. 
              Join 10,000+ marketers who trust our expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              />
              <Button variant="gradient" size="lg" className="sm:px-8">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4c8e42db-9cad-4bf9-8cfe-c8c468615a5e.png"
                alt="Kiu Media Logo"
                className="h-10 w-10 rounded-lg"
              />
              <span className="text-2xl font-bold text-white gradient-text">Kiu Media</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm">
              Leading digital marketing agency specializing in Google Ads, TikTok Ads, 
              Meta advertising, and modern website development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <img src={social.icon} alt={social.name} className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            <div>
              <h5 className="text-white font-medium mb-2">Email Us</h5>
              <a
                href="mailto:hello@kiumedia.com"
                className="text-gray-400 hover:text-white transition-colors"
              >
                hello@kiumedia.com
              </a>
            </div>
            <div>
              <h5 className="text-white font-medium mb-2">Call Us</h5>
              <a
                href="tel:+15551234567"
                className="text-gray-400 hover:text-white transition-colors"
              >
                +1 (555) 123-4567
              </a>
            </div>
            <div>
              <h5 className="text-white font-medium mb-2">Visit Us</h5>
              <p className="text-gray-400">
                123 Marketing Street<br />
                Digital City, DC 12345
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0"
          >
            <p className="text-gray-400 text-sm">
              © 2024 Kiu Media. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>Made with ❤️ for growing businesses</span>
            </div>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-sm">Back to top</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5-5m0 0l5 5m-5-5v12" />
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}