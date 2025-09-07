import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import DumbbellParticles from '../components/DumbbellParticles';

const HeroSection = () => {
  const [scatter, setScatter] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    // Immediately scroll to top on initial load
    window.scrollTo(0, 0);

    // Initial animation sequence
    const initialAnimation = setTimeout(() => {
      setScatter(true);
      setTimeout(() => setScatter(false), 2000);
    },1000);

    let lastScrollY = window.scrollY;
    let scrollTimeout;
    let animationFrame;

    const handleScroll = () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
        const scrollDistance = Math.abs(currentScrollY - lastScrollY);

        // Only trigger after significant scroll
        if (scrollDistance > 30) {
          setHasScrolled(true);
          if (scrollDirection === 'down' && currentScrollY > 100) {
            setScatter(true);
          } else if (currentScrollY < 50) {
            setScatter(false);
          }
        }

        lastScrollY = currentScrollY;

        // Debounce reset
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          if (currentScrollY < 50) setScatter(false);
        }, 200);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      clearTimeout(initialAnimation);
      clearTimeout(scrollTimeout);
      cancelAnimationFrame(animationFrame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <DumbbellParticles active={true} scatter={scatter} />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/30 z-[1]"></div>

      {/* Content */}
      <motion.div 
        className="z-10 text-center px-4 max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.p 
          className="text-lg md:text-xl text-orange-400 mb-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          TRANSFORM YOUR BODY, ELEVATE YOUR MIND
        </motion.p>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 text-white">
          BE THE <span className="text-white">BETTER</span> VERSION OF{' '}
          <span className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent">
            YOURSELF
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Link 
            to="/membership" 
            className="inline-block"
            onClick={(e) => {
              const target = document.getElementById('pricing');
              if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 rounded-full text-white font-bold text-lg shadow-lg hover:shadow-red-500/30 transition-all duration-300 transform hover:-translate-y-1">
              Join Now
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;