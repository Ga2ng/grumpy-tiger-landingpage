'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaTelegram } from 'react-icons/fa';

export default function FooterSection() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const socialLinks = [
    { name: 'Twitter', icon: '𝕏', href: '#' },
    { name: 'Telegram', icon: <FaTelegram />, href: '#' }
  ];

  const footerLinks = [
    { name: 'Whitepaper', href: '#' },
    { name: 'Tokenomics', href: '#' },
    { name: 'Roadmap', href: '#' },
    { name: 'Community', href: '#' }
  ];

  return (
    <footer className="relative z-10 overflow-hidden" style={{ zIndex: 1 }}>
      {/* SECTION 1: Banner Image Section */}
      <div className="relative h-96 sm:h-80 lg:h-96">
        {/* Banner Background */}
        <div className="absolute inset-0">
          <Image 
            src="/assets/BANNER.JPG" 
            alt="Grumpy Banner" 
            fill
            className="object-cover"
            priority
          />
                     {/* Overlay untuk menyatukan dengan theme */}
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/15 via-transparent to-orange-400/15"></div>
        </div>

        {/* Floating Particles pada Banner */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3
              }}
            />
          ))}
        </div>

                 {/* Content pada Banner Section */}
         <div className="relative z-10 h-full flex items-center justify-center py-8 sm:py-0">
           <motion.div 
             className="text-center px-4 sm:px-8 max-w-4xl mx-auto"
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
           >
             <motion.h2 
               className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight"
               whileHover={{ scale: 1.02 }}
               transition={{ type: "spring", stiffness: 300 }}
             >
               <span className="block text-white mb-2">
                 Ready to Get
               </span>
               <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                 GRUMPY?
               </span>
             </motion.h2>
             
             <motion.p 
               className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg px-4"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               viewport={{ once: true }}
             >
               Join the most brutally honest community in crypto. No sugar-coating, just pure grumpiness.
             </motion.p>

             <motion.div 
               className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.4 }}
               viewport={{ once: true }}
             >
               <motion.button
                 className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base"
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
               >
                 Buy GRUMPY Now
               </motion.button>
               
               <motion.button
                 className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/30 text-sm sm:text-base"
                 whileHover={{ scale: 1.05, y: -2 }}
                 whileTap={{ scale: 0.95 }}
               >
                 View Chart
               </motion.button>
             </motion.div>
           </motion.div>
         </div>

        {/* Transition Wave */}
        {/* <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-20 fill-current text-gray-900" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div> */}
      </div>

      {/* SECTION 2: Interactive Footer Content */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div 
            className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-400/6 to-orange-500/6 rounded-full blur-3xl"
            animate={{ 
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-amber-500/4 to-yellow-400/4 rounded-full blur-2xl"
            animate={{ 
              x: [0, -80, 0],
              y: [0, 30, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 sm:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            
            {/* Brand Section - Diperluas */}
            <motion.div 
              className="lg:col-span-2 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 bg-clip-text text-transparent"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                GRUMPY
              </motion.div>
              
              <motion.p 
                className="text-gray-300 mb-6 text-lg leading-relaxed max-w-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Grumpy was born on Bonk.fun, now he’s running wild.
                We back artists, builders, and anyone chasing the fun.
                It’s not just a token. It’s a vibe.
              </motion.p>
              
              
              {/* Token Info */}
              <motion.div 
                className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 text-center lg:text-left mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400/30 rounded-lg p-2 sm:p-3 md:p-4">
                  <div className="text-base sm:text-lg font-bold text-yellow-400 mb-0.5">SUPPLY</div>
                  <div className="text-xs sm:text-sm text-gray-300">1,000,000,000</div>
                  <div className="text-xs text-yellow-400 font-semibold">$GRUMPY</div>
                </div>
                <div className="bg-gradient-to-br from-orange-400/10 to-red-400/10 border border-orange-400/30 rounded-lg p-2 sm:p-3 md:p-4">
                  <div className="text-base sm:text-lg font-bold text-orange-400 mb-0.5">LP BURNT</div>
                  <div className="text-xs sm:text-sm text-gray-300">100%</div>
                  <div className="text-xs text-orange-400 font-semibold">PERMANENT</div>
                </div>
                <div className="bg-gradient-to-br from-red-400/10 to-pink-400/10 border border-red-400/30 rounded-lg p-2 sm:p-3 md:p-4">
                  <div className="text-base sm:text-lg font-bold text-red-400 mb-0.5">MINT & FREEZE</div>
                  <div className="text-xs sm:text-sm text-gray-300">REVOKED</div>
                  <div className="text-xs text-red-400 font-semibold">SECURE</div>
                </div>
              </motion.div>

            </motion.div>

            {/* Social Links - diperluas agar seimbang */}
            <motion.div 
              className="lg:col-span-2 text-center lg:text-left flex flex-col items-center lg:items-start justify-center"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">SOCIALS</h3>
              <h4 className="text-lg font-semibold mb-6 text-gray-300">Join the GRUMPY Community</h4>
              <div className="grid grid-cols-2 gap-3 mb-6 max-w-xs w-full mx-auto lg:mx-0">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="group relative p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-400/30 rounded-xl flex items-center gap-3 hover:from-yellow-400/10 hover:to-orange-400/10 hover:border-yellow-400/60 transition-all duration-300"
                    whileHover={{ 
                      scale: 1.02,
                      y: -2,
                      boxShadow: "0 8px 25px rgba(251, 193, 83, 0.15)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                      {typeof social.icon === 'string' ? social.icon : social.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-yellow-400 transition-colors">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
              
              <motion.div 
                className="text-center lg:text-left"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-yellow-400 font-bold mb-2">Contract Address:</div>
                <div className="text-xs text-gray-400 bg-gray-800/50 p-2 rounded-lg font-mono break-all">
                  Coming Soon...
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div 
            className="pt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {/* <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="text-gray-400 text-sm text-center lg:text-left">
                <div className="mb-2">© 2024 GRUMPY Token. All rights reserved.</div>
                <div className="text-yellow-400/60">Built with spite, coffee, and a lot of grumpiness ☕😤</div>
              </div>
              
              <motion.div 
                className="flex flex-wrap items-center justify-center gap-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Terms of Service
                </motion.a>
                <span className="text-gray-600">|</span>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Privacy Policy
                </motion.a>
                <span className="text-gray-600">|</span>
                <motion.a 
                  href="#" 
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  Disclaimer
                </motion.a>
              </motion.div>
            </div> */}
            
            {/* Final Quote */}
            <motion.div 
              className="text-center mt-8 pt-6 border-t border-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-400 italic text-lg">
                © 2025 GRUMPY Token. All rights reserved.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}