'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const textContent = [
    {
      highlight: "$GRUMPY",
      text: "was born in the chaos. He trades wild, bets big, and laughs at the risk.",
      emotion: "😤"
    },
    {
      highlight: "living",
      text: "Some call it reckless. He calls it living.",
      emotion: "🔥"
    },
    {
      highlight: "more",
      text: "Memecoins made him. Now he's out for more.",
      emotion: "💎"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % textContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="relative z-10 max-w-7xl mx-auto px-6 py-20 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-blue-500/20 rounded-full blur-xl"></div>
        
        {/* Floating Money Symbols */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl opacity-20"
            style={{
              left: `${15 + i * 10}%`,
              top: `${25 + (i % 3) * 15}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
              duration: 6 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
          >
            {['💰', '💎', '🚀', '⚡', '🔥', '💪', '🎯', '💫'][i]}
          </motion.div>
        ))}
      </div>

      {/* Main Content Container */}
      <motion.div 
        className="relative bg-gradient-to-br from-gray-800/60 via-gray-800/40 to-gray-900/60 backdrop-blur-lg rounded-3xl border border-gray-600/50 overflow-hidden"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Inner glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-orange-500/5 pointer-events-none" />
        
        <div className="relative p-8 lg:p-16">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              className="text-5xl lg:text-7xl font-black mb-8 relative inline-block" 
              style={{ color: '#FBC153' }}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
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
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Character Glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-orange-500/30 rounded-full blur-2xl scale-150"
                  animate={{
                    scale: isHovered ? 1.8 : 1.5,
                    opacity: isHovered ? 0.6 : 0.3
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Character Container */}
                <motion.div
                  className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-gray-700/90 to-gray-800/90 backdrop-blur-sm rounded-full border-4 border-yellow-400/60 overflow-hidden cursor-pointer shadow-2xl"
                  onHoverStart={() => setIsHovered(true)}
                  onHoverEnd={() => setIsHovered(false)}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: '#FBC153',
                    boxShadow: '0 0 40px rgba(251, 193, 83, 0.4)'
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{ 
                    y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                    scale: { duration: 0.3 }
                  }}
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
                  
                  {/* Enhanced Hover Effects */}
                  {isHovered && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.div>

                {/* Speech Bubble */}
                <motion.div
                  className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 lg:-top-8 lg:-right-12 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-3 py-1 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-2xl font-bold text-xs sm:text-sm lg:text-base whitespace-nowrap shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1.0
                  }}
                >
                  <span className="mr-2">{textContent[currentTextIndex].emotion}</span>
                  Let me tell you...
                  <div className="absolute bottom-0 left-6 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-orange-500 transform translate-y-full" />
                </motion.div>
              </div>
            </motion.div>

            {/* Text Content */}
            <div className="order-2 lg:order-2 flex-1">
              <motion.div 
                className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-600/40 relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Content Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-orange-500/5 rounded-2xl" />
                
                <div className="relative z-10">
                  {/* Animated Text Content */}
                  <motion.div
                    key={currentTextIndex}
                    className="text-xl lg:text-2xl leading-relaxed text-gray-300 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
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
                      {textContent[currentTextIndex].highlight}
                    </motion.span>{' '}
                    {textContent[currentTextIndex].text.replace(textContent[currentTextIndex].highlight, '')}
                  </motion.div>

                  {/* Enhanced Progress Dots */}
                  <div className="flex justify-center space-x-3 mb-8">
                    {textContent.map((_, i) => (
                      <motion.div
                        key={i}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          i === currentTextIndex ? 'bg-yellow-400' : 'bg-gray-600'
                        }`}
                        animate={{
                          scale: i === currentTextIndex ? [1, 1.3, 1] : 1,
                          opacity: i === currentTextIndex ? 1 : 0.5
                        }}
                        transition={{ duration: 0.3 }}
                      />
                    ))}
                  </div>

                  {/* Enhanced CTA Section */}
                  <div className="text-center">
                    <motion.button
                      className="group px-10 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold text-lg rounded-full shadow-2xl relative overflow-hidden"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 20px 40px rgba(251, 193, 83, 0.3)'
                      }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        Join the Chaos! 
                        <motion.span
                          animate={{ x: [0, 3, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          🚀
                        </motion.span>
                      </span>
                      
                      {/* Button glow effect */}
                      <motion.div
                        className="absolute inset-0 bg-white/20 rounded-full"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
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