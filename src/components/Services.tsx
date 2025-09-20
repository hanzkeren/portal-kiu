'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Google Ads Mastery 🎯',
    description: 'Turn Google searches into cash flow. Our Google Ads ninjas create campaigns so profitable, your competitors will wonder what hit them.',
    features: ['Smart Bidding AI', 'Conversion Tracking Pro', 'Ad Extensions Mastery', 'Negative Keywords Magic', 'Quality Score Hacks', 'Competitor Domination'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f6e21a0-43a8-4af5-bb24-d74533172d84.png',
    gradient: 'from-blue-600 to-blue-800',
    roi: '250% Avg ROAS',
    price: 'Starting at $2,000/mo',
    highlight: '🔥 Most Popular'
  },
  {
    title: 'TikTok Viral Factory 🚀',
    description: 'Create content that breaks the internet and bank accounts. We turn trending sounds into trending sales with surgical precision.',
    features: ['Viral Strategy Blueprint', 'Trend Hijacking Tactics', 'Influencer Network Access', 'UGC Campaign Magic', 'Sound Optimization', 'Algorithm Manipulation'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e10731fe-6a06-45fc-b43b-d8d4a86bce47.png',
    gradient: 'from-pink-600 to-purple-700',
    roi: '400% Engagement Boost',
    price: 'Starting at $1,500/mo',
    highlight: '⚡ Fastest Growing'
  },
  {
    title: 'Meta Money Machine 💰',
    description: 'Transform Facebook & Instagram scrolling into serious revenue streams. Our Meta ads are so good, Zuckerberg would hire us.',
    features: ['Pixel Perfect Setup', 'Dynamic Product Ads', 'AI Lookalike Audiences', 'Video Creative Lab', 'Retargeting Funnels', 'iOS 14.5 Bulletproof'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53cefc2f-3981-4650-9cd7-a3350cf468c5.png',
    gradient: 'from-blue-500 to-purple-600',
    roi: '320% Revenue Boost',
    price: 'Starting at $1,800/mo',
    highlight: '💎 Premium Choice'
  },
  {
    title: 'Conversion Website Lab 🧪',
    description: 'Build websites that sell while you sleep. Every pixel optimized for conversions, every click tracked to maximize profits.',
    features: ['A/B Testing Laboratory', 'Conversion Rate Surgery', 'Lightning Speed Optimization', 'Mobile-First Mastery', 'Analytics Deep Dive', 'Heat Mapping Intelligence'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80cfb59b-caac-48d2-8a03-de67a8bd8bc4.png',
    gradient: 'from-green-600 to-teal-700',
    roi: '180% Conversion Rate',
    price: 'Starting at $5,000',
    highlight: '🎖️ Award Winner'
  },
]

export default function Services() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="services" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-white/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-l from-white/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-gray-900/50 backdrop-blur-sm border border-gray-700 text-gray-300 text-sm font-medium mb-6"
          >
            🚀 Our Core Services
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Revenue-Generating
            </span>
            <br />
            <span className="gradient-text bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Marketing Solutions
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            🎯 <strong className="text-yellow-400">Stop wasting money on ads that don't convert.</strong> 
            Our battle-tested strategies have generated over <strong className="text-green-400">$50M in revenue</strong> 
            for clients who were tired of mediocre results.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-gray-800 hover:border-gray-600 bg-gradient-to-br from-gray-900/80 to-gray-800/50 relative overflow-hidden">
                {/* Highlight badge */}
                {service.highlight && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-black text-xs font-bold rounded-full">
                      {service.highlight}
                    </span>
                  </div>
                )}

                <CardHeader>
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors mb-2">
                    {service.title}
                  </CardTitle>

                  {/* ROI and Price */}
                  <div className="flex justify-between items-center mb-4">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-semibold rounded-full border border-green-500/30">
                      {service.roi}
                    </span>
                    <span className="text-gray-400 text-sm font-medium">
                      {service.price}
                    </span>
                  </div>
                  
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <span className="mr-2">⚡</span>
                      Power Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col space-y-3">
                    <Button
                      variant="gradient"
                      size="lg"
                      onClick={scrollToContact}
                      className="w-full transform hover:scale-105 transition-all duration-300"
                    >
                      🚀 Get Started Now
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={scrollToContact}
                      className="w-full text-gray-400 hover:text-white"
                    >
                      📞 Free Strategy Call
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl p-8 lg:p-12 backdrop-blur-sm border border-gray-700"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
            💸 <span className="text-red-400">Stop Bleeding Money</span> on Failed Ads
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            🎯 <strong>FREE 30-minute audit</strong> reveals exactly why your current ads suck and how we'll 
            <span className="text-green-400 font-bold"> 3x your revenue in 90 days</span> (or you don't pay).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              size="xl"
              onClick={scrollToContact}
              className="transform hover:scale-105 transition-all duration-300 animate-pulse"
            >
              🔥 Get FREE $2,000 Audit (Limited Time)
            </Button>
            <Button
              variant="outline"
              size="xl"
              onClick={() => {
                const element = document.getElementById('portfolio')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
            >
              📊 See $50M+ Results
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}