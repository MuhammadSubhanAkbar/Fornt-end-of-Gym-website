// pages/HomePage.js
import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from './section/HeroSection';
import OurStory from './section/OurStory';
import Cards from './section/Cards';
import Trainer from './section/Trainer';
import SuccessStories from './section/SuccessStories';
import Contact from './section/Contact';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Homepage = () => {
  return (
    <>
      <motion.div
        id="home"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <OurStory />
      </motion.div>

      <motion.div
        id="programs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Cards />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Trainer />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <SuccessStories />
      </motion.div>

      <motion.div
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={sectionVariants}
      >
        <Contact />
      </motion.div>
    </>
  );
};

export default Homepage;