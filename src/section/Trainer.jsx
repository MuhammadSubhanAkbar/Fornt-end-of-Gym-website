import React from 'react'
import { motion } from 'motion/react'

const Trainer = () => {
  const TrainerCard = [
    {
      name: "Alex Johnson",
      position: "Head Strength Coach",
      detail: "Specializes in powerlifting, muscle hypertrophy, and personalized strength programs. Over 10 years of experience."
    },
    {
      name: "Samantha Lee",
      position: "Certified Nutrition & Fitness Trainer",
      detail: "Combines dietary planning with fitness routines for optimal body transformation. Certified by NASM."
    },
    {
      name: "Carlos Mendes",
      position: "HIIT and Functional Training Coach",
      detail: "Expert in high-intensity interval training and mobility drills. Former professional athlete."
    },
    {
      name: "Priya Kapoor",
      position: "Yoga & Flexibility Instructor",
      detail: "Focuses on improving flexibility, posture, and mental clarity through dynamic yoga flows."
    },
    {
      name: "Marcus Brown",
      position: "Boxing & Conditioning Specialist",
      detail: "Trains clients in boxing fundamentals and cardio conditioning. Works with both beginners and competitors."
    }
  ]

  return (
    <section className="relative py-24 bg-black overflow-hidden">
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-10"></div>
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
            Elite Coaches
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Train With the <span className="gradient-text">Best</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400">
            From strength and conditioning to mobility and mindset, our trainers are here to guide every rep, every step.
          </p>
        </motion.div>

        

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TrainerCard.map((trainer, index) => (
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
                    <span className="text-gray-600">Trainer image</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mr-3">
                      <span className="text-orange-400 text-sm font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                      <p className="text-orange-400 text-sm">{trainer.position}</p>
                    </div>
                  </div>

                  <p className="text-gray-400 mb-6">{trainer.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Trainer
