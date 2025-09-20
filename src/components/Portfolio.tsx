'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const caseStudies = [
  {
    title: 'E-commerce Fashion Brand',
    category: 'Google Ads + Meta Ads',
    results: {
      roi: '320%',
      conversions: '+450%',
      revenue: '$2.1M'
    },
    description: 'Complete digital transformation for a fashion startup, scaling from $10K to $2.1M in annual revenue through strategic Google and Meta advertising campaigns.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fa066d65-b328-4ac8-a5d8-d6676a5dee3f.png',
    challenge: 'Low brand awareness and high customer acquisition costs',
    solution: 'Multi-platform advertising strategy with compelling creative content',
    duration: '12 months'
  },
  {
    title: 'SaaS Platform Launch',
    category: 'TikTok Ads + Website Development',
    results: {
      users: '50K+',
      engagement: '+280%',
      conversions: '+185%'
    },
    description: 'Launched a B2B SaaS platform targeting millennials and Gen Z professionals through innovative TikTok advertising and a conversion-optimized website.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/fbd9df44-8f8d-48ee-aeaf-b471877cfac0.png',
    challenge: 'Reaching professional audience on TikTok platform',
    solution: 'Educational content strategy with professional storytelling',
    duration: '8 months'
  },
  {
    title: 'Local Restaurant Chain',
    category: 'Meta Ads + Local SEO',
    results: {
      footTraffic: '+190%',
      orders: '+240%',
      locations: '15 new stores'
    },
    description: 'Helped a local restaurant chain expand from 3 to 18 locations through targeted local advertising and community engagement strategies.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/48d9cd0e-f03f-4e91-8bba-c084b5e7fe36.png',
    challenge: 'Competing with national franchise chains',
    solution: 'Hyper-local targeting with community-focused messaging',
    duration: '18 months'
  },
  {
    title: 'Tech Startup MVP',
    category: 'Full-Stack Development + Google Ads',
    results: {
      users: '25K+',
      funding: '$1.2M',
      growth: '+340%'
    },
    description: 'Built and launched a complete tech platform from concept to Series A funding, including MVP development and user acquisition campaigns.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dfb4f4a5-e512-4f14-8270-c9e4d3e9ec08.png',
    challenge: 'Validating product-market fit while scaling',
    solution: 'Iterative development with performance marketing validation',
    duration: '15 months'
  }
]

const testimonials = [
  {
    name: 'Jennifer Martinez',
    role: 'CEO, StyleHub Fashion',
    company: 'E-commerce',
    quote: 'Kiu Media transformed our business completely. Their strategic approach to Google and Meta ads helped us scale from a small startup to a million-dollar brand.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e392795a-deb6-4db9-a1db-8cfc95c19f9e.png',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Founder, TaskFlow SaaS',
    company: 'Technology',
    quote: 'The team\'s expertise in TikTok advertising was game-changing for us. They helped us reach our target audience in ways we never thought possible.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/4f515435-2b85-4d8e-b6f7-4a11e9c4c14f.png',
    rating: 5
  },
  {
    name: 'Sarah Williams',
    role: 'Marketing Director, FreshBites',
    company: 'Food & Beverage',
    quote: 'Working with Kiu Media was the best decision we made for our expansion. Their local marketing strategies drove incredible growth.',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d462aede-6d5d-44af-b270-0848203964fd.png',
    rating: 5
  }
]

export default function Portfolio() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="portfolio" className="py-20 lg:py-32 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-white/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-r from-white/5 to-transparent rounded-full blur-3xl"></div>
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
            📈 Success Stories
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Portfolio & Case Studies
            <br />
            <span className="gradient-text bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Real Results, Real Growth
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve exceptional 
            growth through strategic digital marketing and innovative solutions.
          </p>
        </motion.div>

        {/* Case studies */}
        <div className="grid gap-12 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 border border-gray-700 text-gray-300 text-sm font-medium mb-4">
                  {study.category}
                </div>
                
                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                  {study.title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {Object.entries(study.results).map(([key, value]) => (
                    <div key={key} className="text-center bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm border border-gray-800">
                      <div className="text-2xl font-bold text-white mb-1">{value}</div>
                      <div className="text-sm text-gray-400 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex">
                    <span className="text-gray-400 w-20 text-sm">Challenge:</span>
                    <span className="text-gray-300 text-sm">{study.challenge}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-20 text-sm">Solution:</span>
                    <span className="text-gray-300 text-sm">{study.solution}</span>
                  </div>
                  <div className="flex">
                    <span className="text-gray-400 w-20 text-sm">Duration:</span>
                    <span className="text-gray-300 text-sm">{study.duration}</span>
                  </div>
                </div>

                <Button
                  variant="outline"
                  size="lg"
                  onClick={scrollToContact}
                  className="hover:bg-white hover:text-black transition-all duration-300"
                >
                  Start Your Success Story
                </Button>
              </div>

              {/* Image */}
              <motion.div
                className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            What Our Clients Say
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders 
            say about working with Kiu Media.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full hover:shadow-2xl transition-all duration-500 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-600">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <CardTitle className="text-lg text-white">{testimonial.name}</CardTitle>
                      <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      <p className="text-gray-500 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Rating stars */}
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <blockquote className="text-gray-300 italic leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}