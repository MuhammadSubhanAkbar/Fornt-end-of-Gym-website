import React from 'react'
import { motion } from "motion/react"
import { Link } from 'react-router-dom'

const Cards = () => {
  const cardData = [
  {
    title: 'Strength Training',
    description: 'Build muscle, burn fat, and increase power with our expert-guided strength training programs.'
  },
  {
    title: 'Cardio Conditioning',
    description: 'Improve heart health, endurance, and burn calories with high-intensity cardio routines.'
  },
  {
    title: 'Flexibility & Mobility',
    description: 'Enhance joint movement and prevent injuries with our carefully designed flexibility sessions.'
  },
  {
    title: 'HIIT Workouts',
    description: 'Maximum results in minimal time. Burn fat and build endurance through high-intensity intervals.'
  },
  {
    title: 'Personal Coaching',
    description: 'Get 1-on-1 support, custom plans, and real-time feedback from certified personal trainers.'
  },
  {
    title: 'Nutrition Plans',
    description: 'Fuel your body right with science-backed meal strategies tailored to your goals.'
  }
]

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold tracking-wider gradient-text uppercase">
            Transformative Programs
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Elevate Your <span className="gradient-text">Training</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            Scientifically designed programs to help you achieve your fitness goals faster
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/30 transition-all duration-300 group">
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                  <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
                    <span className="text-gray-600">Program image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mr-3">
                      <span className="text-orange-400 text-sm font-bold">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  </div>
                  
                  <p className="text-gray-400 mb-6">{card.description}</p>
                  
                  <Link to={'/programs'}>
                  <button className="text-orange-400 hover:text-orange-300 flex items-center gap-1 transition-all group-hover:gap-2 duration-300">
                    <span>Discover program</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to={'/programs'}>
          <button className="px-8 py-4 bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-red-500/30 transition-all duration-300 hover:-translate-y-1">
            View All Programs
            <span className="ml-2 inline-block animate-bounce">↓</span>
          </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Cards