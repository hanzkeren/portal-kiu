'use client'

import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card'

const stats = [
  { number: '500+', label: 'Happy Clients', description: 'Businesses we\'ve helped grow' },
  { number: '98%', label: 'Success Rate', description: 'Campaign performance average' },
  { number: '$50M+', label: 'Ad Spend Managed', description: 'Across all platforms' },
  { number: '5+', label: 'Years Experience', description: 'In digital marketing' },
]

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'Founder & CEO',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/62f18790-2c6c-4266-8327-e511c980e698.png',
    description: 'Former Google Ads specialist with 8+ years of experience in performance marketing.'
  },
  {
    name: 'Marcus Johnson',
    role: 'Head of Strategy',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/5200c675-842e-4c7d-bc20-249dc61072db.png',
    description: 'Ex-Meta advertising expert specializing in social media campaign optimization.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ba28d9a1-1bc9-4cf3-a4d8-f55d7d3411fc.png',
    description: 'Award-winning creative strategist with expertise in TikTok and viral content.'
  },
]

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-white/3 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-to-l from-white/3 to-transparent rounded-full blur-3xl"
        />
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
            🌟 About Kiu Media
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Driving Digital Success
            <br />
            <span className="gradient-text bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Since Day One
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're a team of passionate digital marketing experts dedicated to helping businesses 
            thrive in the digital landscape. Our data-driven approach and creative strategies 
            deliver measurable results that exceed expectations.
          </p>
        </motion.div>

        {/* Story section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
              Our Story & Mission
            </h3>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Founded with a vision to democratize digital marketing, Kiu Media emerged from 
                the recognition that many businesses struggle to navigate the complex world of 
                online advertising effectively.
              </p>
              <p className="text-lg leading-relaxed">
                Our team combines deep platform expertise with creative innovation, ensuring 
                every campaign not only reaches the right audience but resonates with them. 
                We believe in transparency, accountability, and delivering real ROI.
              </p>
              <p className="text-lg leading-relaxed">
                From startups to enterprise clients, we've helped businesses across industries 
                achieve their growth goals through strategic digital marketing initiatives.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dc5f2c8a-3f40-4412-9c74-3929e28cabf5.png"
                alt="Kiu Media Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-white to-gray-300 text-black p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold">Excellence</div>
              <div className="text-sm">Our Commitment</div>
            </div>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-gray-600 transition-all duration-300"
              >
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-300 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-400">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Meet Our Expert Team
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry veterans with proven track records in digital marketing, 
            creative strategy, and business growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="text-center hover:shadow-2xl transition-all duration-500 bg-gray-900/50 backdrop-blur-sm border-gray-800 hover:border-gray-600">
                <CardContent className="p-6">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">{member.name}</h4>
                  <p className="text-gray-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}