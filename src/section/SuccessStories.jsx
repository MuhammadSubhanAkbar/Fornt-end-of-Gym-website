import React from 'react'
import { motion } from 'motion/react'

const SuccessStories = () => {
    //Stories
  const stories = [
    {
      story: "The Gym completely transformed my body in just 3 months. The trainers are knowledgeable and the community is so supportive!",
      name: 'James Wilson',
      trans: 'Lost 28lbs and gained muscle'
    },
    {
      story: "I've tried many gyms before, but The Gym's classes are next level. The HIIT Blast class is my absolute favorite!",
      name: 'Lisa Thompson',
      trans: 'Increased endurance by 40%'  
    },
    {
      story: "As someone who was intimidated by gyms, The Gym made me feel welcome from day one. Now I'm hooked on fitness!",
      name: 'David Park',
      trans: 'Gained 15lbs of muscle'  
    }
  ]

  return (

    <div className='bg-black overflow-hidden'>
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-10"></div>
      <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Success <span className="gradient-text">Stories</span>
        </h2>
      </motion.div>          

        {/* Stories Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((storyItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300"
          >
            <p className="text-gray-400 mb-6">"{storyItem.story}"</p>
            <div className="flex items-center justify-between">
              <h3 className="text-white font-bold text-lg">-{storyItem.name}</h3>
              <span className="text-orange-400 text-sm font-semibold">{storyItem.trans}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default SuccessStories
