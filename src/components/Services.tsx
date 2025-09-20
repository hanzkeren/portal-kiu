'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    title: 'Google Ads',
    description: 'Drive targeted traffic and maximize ROI with our expert Google Ads management. From search campaigns to display networks, we optimize every click.',
    features: ['Search Campaigns', 'Display Advertising', 'Shopping Ads', 'Performance Max', 'Keyword Research', 'Bid Optimization'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7f6e21a0-43a8-4af5-bb24-d74533172d84.png',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    title: 'TikTok Ads',
    description: 'Capture the attention of Gen Z and millennials with engaging TikTok advertising campaigns that convert viewers into customers.',
    features: ['In-Feed Ads', 'Brand Takeover', 'TopView Campaigns', 'Spark Ads', 'Creative Strategy', 'Trend Analysis'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e10731fe-6a06-45fc-b43b-d8d4a86bce47.png',
    gradient: 'from-pink-600 to-purple-700',
  },
  {
    title: 'Meta Ads',
    description: 'Leverage the power of Facebook and Instagram to reach your ideal audience with precision targeting and compelling creative content.',
    features: ['Facebook Ads', 'Instagram Campaigns', 'Audience Targeting', 'Lookalike Audiences', 'Creative Testing', 'Retargeting'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/53cefc2f-3981-4650-9cd7-a3350cf468c5.png',
    gradient: 'from-blue-500 to-purple-600',
  },
  {
    title: 'Website Development',
    description: 'Build modern, responsive websites that convert visitors into customers. From landing pages to full e-commerce solutions.',
    features: ['Responsive Design', 'E-commerce Sites', 'Landing Pages', 'SEO Optimization', 'Performance Optimization', 'CMS Integration'],
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/80cfb59b-caac-48d2-8a03-de67a8bd8bc4.png',
    gradient: 'from-green-600 to-teal-700',
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
            Digital Marketing Solutions
            <br />
            <span className="gradient-text bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              That Drive Results
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We specialize in cutting-edge digital marketing strategies that help businesses 
            scale their online presence and achieve measurable growth.
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
              <Card className="h-full hover:shadow-2xl transition-all duration-500 border-gray-800 hover:border-gray-600 bg-gradient-to-br from-gray-900/80 to-gray-800/50">
                <CardHeader>
                  <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-white group-hover:text-gray-100 transition-colors">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="lg"
                    onClick={scrollToContact}
                    className="w-full group-hover:bg-white group-hover:text-black transition-all duration-300"
                  >
                    Learn More
                  </Button>
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
            Ready to Scale Your Business?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our digital marketing expertise can help you achieve your growth goals. 
            Get a free consultation and strategy session with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="gradient"
              size="xl"
              onClick={scrollToContact}
              className="transform hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
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
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}