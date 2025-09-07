import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Programs', path: '/programs' },
    { name: 'Pricing', path: '/membership' },
    { name: 'Contact', path: '/contacts' }
  ]

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
  }

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
      className="fixed w-full top-0 z-50 backdrop-blur-md bg-black/50 border-b border-gray-800/50 "
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-600 to-orange-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">TG</span>
              </div>
              <span className="text-xl font-bold gradient-text tracking-tight">THE GYM</span>
            </motion.div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link 
                  to={item.path}
                  className="px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-all relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 h-0.5 bg-orange-500 w-0 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 'auto' }}
              exit={{ height: 0 }}
              className="md:hidden overflow-hidden bg-black/90"
            >
              <div className="px-4 py-4 flex flex-col space-y-2">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className="block px-4 py-2 text-sm text-gray-300 hover:text-white transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navbar