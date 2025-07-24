'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-20 overflow-hidden">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/10 to-blue-500/10 rounded-full blur-lg"></div>
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-lg rounded-3xl border border-gray-600/50 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-orange-500/5 pointer-events-none" />
        
        <div className="relative p-6 sm:p-8 lg:p-16">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <motion.h2 
              className="text-5xl lg:text-7xl font-black mb-8 relative inline-block" 
              style={{ color: '#FBC153' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.05 }}
              viewport={{ once: true }}
            >
              WHO IS GRUMPY?
            </motion.h2>
          </div>

          {/* Integrated Character and Content Layout */}
          <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
            {/* Grumpy Character */}
            <motion.div
              className="relative z-20 order-1 lg:order-1"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Character Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl scale-125" />
                
                {/* Character Container */}
                <motion.div
                  className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-gray-700/90 to-gray-800/90 backdrop-blur-sm rounded-full border-4 border-yellow-400/60 overflow-hidden cursor-pointer shadow-2xl"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ 
                    scale: 1.02,
                    borderColor: '#FBC153'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Grumpy Image */}
                  <div className="relative w-full h-full">
                    <Image
                      src="/assets/grumpy_tiger.png"
                      alt="Grumpy Tiger"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                  
                  {/* Simple Hover Effect */}
                  {isHovered && (
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full" />
                  )}
                </motion.div>

                {/* Speech Bubble */}
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-2xl font-bold text-xs sm:text-sm lg:text-base whitespace-nowrap shadow-xl">
                  <span className="mr-2">😤</span>
                  Let me tell you...
                  <div className="absolute bottom-0 left-6 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-orange-500 transform translate-y-full" />
                </div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="order-2 lg:order-2 flex-1">
              <motion.div 
                className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-600/40 relative overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.15 }}
                viewport={{ once: true }}
              >
                {/* Content Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Static Text Content */}
                  <motion.div
                    className="text-xl lg:text-2xl leading-relaxed text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.1, ease: "easeOut" }}
                  >
                    <motion.span 
                      className="text-yellow-400 font-bold text-2xl lg:text-3xl"
                      animate={{ 
                        textShadow: [
                          '0 0 10px rgba(251, 193, 83, 0.3)',
                          '0 0 20px rgba(251, 193, 83, 0.6)',
                          '0 0 10px rgba(251, 193, 83, 0.3)'
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      $GRUMPY
                    </motion.span>{' '}
                    was born in the chaos. He trades wild, bets big, and laughs at the risk. Some call it reckless. He calls it living. Memecoins made him. Now he's out for more.
                  </motion.div>

                  {/* Enhanced CTA Section */}
                  <div className="text-center">
                    <motion.button
                      className="group relative px-12 py-5 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 text-gray-900 font-bold text-xl rounded-full shadow-2xl overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 25px 50px rgba(251, 193, 83, 0.4)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {/* Animated Background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400"
                        animate={{
                          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        style={{ backgroundSize: '200% 200%' }}
                      />
                      
                      {/* Content */}
                      <span className="relative z-10 flex items-center gap-3">
                        <motion.span
                          animate={{ 
                            rotate: [0, 10, -10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          🚀
                        </motion.span>
                        JOIN OUR TELEGRAM COMMUNITY!
                        <motion.span
                          animate={{ 
                            rotate: [0, -10, 10, 0],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          🚀
                        </motion.span>
                      </span>
                      
                      {/* Glow Effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Particle Effects */}
                      <div className="absolute inset-0 pointer-events-none">
                        <motion.div
                          className="absolute top-2 left-4 w-1 h-1 bg-white/60 rounded-full"
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
                        />
                        <motion.div
                          className="absolute top-4 right-6 w-1.5 h-1.5 bg-white/60 rounded-full"
                          animate={{
                            y: [0, -15, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.div
                          className="absolute bottom-3 left-8 w-1 h-1 bg-white/60 rounded-full"
                          animate={{
                            y: [0, -25, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                        />
                      </div>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}