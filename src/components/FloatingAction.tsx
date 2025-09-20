'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function FloatingAction() {
  const [isVisible, setIsVisible] = useState(false)
  const [showOptions, setShowOptions] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
        setShowOptions(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setShowOptions(false)
  }

  const contactOptions = [
    {
      icon: '💬',
      label: 'Chat Now',
      action: () => scrollToSection('contact'),
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      icon: '📞',
      label: 'Call Us',
      action: () => window.open('tel:+15551234567'),
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      icon: '✉️',
      label: 'Email',
      action: () => window.open('mailto:hello@kiumedia.com'),
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative">
            {/* Main FAB */}
            <motion.button
              onClick={() => setShowOptions(!showOptions)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl flex items-center justify-center text-white text-2xl hover:shadow-3xl transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: showOptions ? 45 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {showOptions ? '✕' : '🚀'}
              </motion.div>
            </motion.button>

            {/* Options */}
            <AnimatePresence>
              {showOptions && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  className="absolute bottom-20 right-0 space-y-3"
                >
                  {contactOptions.map((option, index) => (
                    <motion.button
                      key={option.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={option.action}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-full ${option.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group`}
                    >
                      <span className="text-lg">{option.icon}</span>
                      <span className="text-sm font-medium whitespace-nowrap">{option.label}</span>
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Pulse ring */}
            <motion.div
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.7, 0, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-blue-500 rounded-full -z-10"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}