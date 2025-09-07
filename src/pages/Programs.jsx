import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Programs = () => {
  const cardData = [
    {
      title: 'Strength Training',
      description: 'Build muscle, burn fat, and increase power with our expert-guided strength training programs.',
      icon: '🏋️‍♂️'
    },
    {
      title: 'Cardio Conditioning',
      description: 'Improve heart health, endurance, and burn calories with high-intensity cardio routines.',
      icon: '🏃‍♂️'
    },
    {
      title: 'Flexibility & Mobility',
      description: 'Enhance joint movement and prevent injuries with our carefully designed flexibility sessions.',
      icon: '🧘‍♀️'
    },
    {
      title: 'HIIT Workouts',
      description: 'Maximum results in minimal time. Burn fat and build endurance through high-intensity intervals.',
      icon: '⚡'
    },
    {
      title: 'Personal Coaching',
      description: 'Get 1-on-1 support, custom plans, and real-time feedback from certified personal trainers.',
      icon: '👤'
    },
    {
      title: 'Nutrition Plans',
      description: 'Fuel your body right with science-backed meal strategies tailored to your goals.',
      icon: '🥗'
    }
  ];

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
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 text-white pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent"
          >
            Our Programs
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-300 max-w-3xl mx-auto"
          >
            Scientifically designed training programs to help you achieve your fitness goals
          </motion.p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {cardData.map((program, index) => (
            <motion.div
              key={program.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              custom={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/50 transition-all p-6"
            >
              <div className="flex items-start mb-4">
                <span className="text-4xl mr-4">{program.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400">{program.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trainers Section */}
        <div className="py-16 border-t border-gray-800/50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-sm font-semibold tracking-wider text-orange-400 uppercase">
              Meet The Experts
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
              Our <span className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">Trainers</span>
            </h2>
            <p className="max-w-2xl mx-auto text-gray-400">
              Certified professionals dedicated to helping you achieve your fitness goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TrainerCard.map((trainer, index) => (
              <motion.div
                key={trainer.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-orange-500/30 transition-all"
              >
                <div className="relative h-48 bg-gray-700 flex items-center justify-center">
                  <span className="text-gray-500">Trainer Photo</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white">{trainer.name}</h3>
                  <p className="text-orange-400 text-sm mb-3">{trainer.position}</p>
                  <p className="text-gray-400 text-sm mb-4">{trainer.detail}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-red-900/50 to-orange-900/30 border border-red-800/30 rounded-xl p-8 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Transform?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join today and get a free personal training session with our expert coaches
          </p>
          <Link 
            to="/membership" 
            className="inline-block bg-white text-gray-900 hover:bg-gray-200 font-bold py-3 px-8 rounded-full transition-all"
          >
            Get Started Now
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Programs;