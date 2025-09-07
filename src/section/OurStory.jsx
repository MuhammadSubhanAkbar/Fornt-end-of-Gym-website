import React from 'react'
import { motion } from "motion/react"

const OurStory = () => {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold tracking-wider gradient-text uppercase">
            Our Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Built on <span className="gradient-text">Excellence</span>
          </h2>
          
          <div className="flex justify-center">
            <div className="h-1 w-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Founded in 2013, we've transformed over 5,000 lives through our science-backed training methodologies.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our 20,000 sq ft facility houses cutting-edge equipment and a team of nationally certified trainers.
              </p>
              <div className="pt-6">
                <button className="px-6 py-3 border border-orange-500/50 text-orange-400 rounded-full hover:bg-orange-500/10 transition-all duration-300 flex items-center gap-2">
                  <span>Our Methodology</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-red-500/20 to-orange-500/10 p-1 rounded-xl"
          >
            <div className="bg-gray-900 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
              {/* Placeholder for video or image */}
              <span className="text-gray-500">Video/Image placeholder</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurStory