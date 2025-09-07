import React from 'react'
import { Instagram, Facebook, Mail, Phone, Youtube } from 'lucide-react'
import { Music2 } from 'lucide-react' // TikTok is represented by Music2 in Lucide

const Footer = () => {
  return (
    <div className="bg-black/10 text-white px-6 py-12 overflow-hidden relative">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-8 md:gap-12">
        {/* Address Section */}
        <section className="flex-1">
          <h2 className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent text-xl font-bold mb-3">
            THE GYM
          </h2>
          <div className="space-y-1">
            <p className="flex items-start">
              <span className="inline-block mr-2 mt-0.5">🏋️</span>
              <span>123 Fitness Street<br/>New York, NY 10001</span>
            </p>
          </div>
        </section>

        {/* Hours Section */}
        <section className="flex-1">
          <h2 className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent text-xl font-bold mb-3">
            Hours
          </h2>
          <div className="space-y-1">
            <p>Mon-Fri: 5AM - 11PM</p>
            <p>Sat-Sun: 7AM - 9PM</p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="flex-1">
          <h2 className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent text-xl font-bold mb-3">
            Contact
          </h2>
          <div className="space-y-2">
            <a href="mailto:info@thegym.com" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Mail className="w-5 h-5" />
              info@thegym.com
            </a>
            <a href="tel:+11234567890" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
              <Phone className="w-5 h-5" />
              +1 (123) 456-7890
            </a>
          </div>
        </section>

        {/* Social Media Section (Now with YouTube & TikTok) */}
        <section className="flex-1">
          <h2 className="bg-gradient-to-r from-red-600 to-orange-400 bg-clip-text text-transparent text-xl font-bold mb-3">
            Follow Us
          </h2>
          <div className="flex gap-3 mt-2 flex-wrap">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full p-2 text-white transition duration-300 ease-in-out hover:text-white hover:bg-gradient-to-br hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600"
            >
              <Instagram className="w-6 h-6" />
            </a>          

            {/* Facebook */}
            <a 
              href="#" 
              aria-label="Facebook" 
              className="rounded-full p-2 hover:bg-blue-600 transition-all duration-300"
            >
              <Facebook className="w-6 h-6" />
            </a>

            {/* YouTube */}
            <a 
              href="#" 
              aria-label="YouTube" 
              className="rounded-full p-2 hover:bg-red-600 transition-all duration-300"
            >
              <Youtube className="w-6 h-6" />
            </a>

            {/* TikTok (using Music2 icon as a placeholder) */}
            <a 
              href="#" 
              aria-label="TikTok" 
              className="rounded-full p-2 hover:bg-black hover:text-pink-500 transition-all duration-300"
            >
              <Music2 className="w-6 h-6" />
            </a>
          </div>
        </section>
      </div>

      {/* Gradient Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent my-10"></div>
      
      {/* Copyright */}
      <div className="text-center text-sm text-white/70">
        <p>&copy; {new Date().getFullYear()} THE GYM. All rights reserved.</p>
        <p className="mt-1">Built with 💪 by fitness enthusiasts</p>
      </div>
    </div>
  )
}

export default Footer