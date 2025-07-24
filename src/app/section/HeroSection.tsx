'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { SiSolana } from 'react-icons/si';

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('Coming Soon...');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 text-center">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-16 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full blur-xl"></div>
      </div>

      <div className="relative">
        {/* Tiger Character */}
        <motion.div 
          className="mb-8 mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
            {/* Glowing backdrop */}
            <motion.div 
              className="absolute inset-0 rounded-full blur-2xl scale-110" 
              style={{background: 'radial-gradient(circle, #FBC153 0%, rgba(251,193,83,0.3) 50%, rgba(59,130,246,0.2) 100%)'}}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1.1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            />
            
            {/* Main character container */}
            <motion.div
              className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            >
              {/* Tiger Image */}
              <motion.div 
                className="relative w-72 h-72 md:w-80 md:h-80 mt-5"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
              >
                <Image 
                  src="/assets/tigra_money.gif" 
                  alt="Grumpy Tiger"
                  fill
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  priority
                />
              </motion.div>
            </motion.div>
            
            {/* Simplified floating particles */}
            <motion.div 
              className="absolute -top-4 -left-4 w-3 h-3 rounded-full animate-bounce" 
              style={{backgroundColor: '#FBC153', animationDelay: '0s'}}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            />
            <motion.div 
              className="absolute -top-8 right-8 w-2 h-2 bg-orange-500 rounded-full animate-bounce" 
              style={{animationDelay: '0.5s'}}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-4 h-4 bg-blue-400 rounded-full animate-bounce" 
              style={{animationDelay: '1s'}}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.4 }}
            />
            <motion.div 
              className="absolute -bottom-8 left-12 w-2 h-2 bg-purple-500 rounded-full animate-bounce" 
              style={{animationDelay: '1.5s'}}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.6 }}
            />
          </div>
        </motion.div>
        
        {/* Title */}
        <motion.div 
          className="mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
        >
          <motion.h1 
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 bg-gradient-to-r from-white via-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          >
            GRUMPY
          </motion.h1>
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
          >
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">The Tiger of</span>
            <div className="flex items-center gap-2 sm:gap-3">
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <SiSolana className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-green-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </motion.div>
              <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent font-bold">Solana</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Contract Address */}
        <motion.div 
          className="bg-gradient-to-r from-gray-800/90 via-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 mb-10 max-w-3xl mx-auto border border-white/10 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.4 }}
        >
          <p className="text-sm text-gray-400 mb-4 font-medium">Contract Address:</p>
          <div className="flex flex-col sm:flex-row items-center justify-between bg-black/40 rounded-xl p-4 gap-4">
            <span className="text-lg font-mono font-medium" style={{color: '#FBC153'}}>
              Coming Soon...
            </span>
            <button 
              onClick={copyToClipboard}
              className="text-black px-6 py-2 rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{background: 'linear-gradient(135deg, #FBC153 0%, #F59E0B 100%)'}}
            >
              {copied ? '✓ Copied!' : 'Copy Address'}
            </button>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.6 }}
        >
          <motion.button 
            className="group text-black px-10 py-5 rounded-2xl text-xl font-black hover:scale-110 transition-all duration-300 shadow-2xl relative overflow-hidden"
            style={{background: 'linear-gradient(135deg, #FBC153 0%, #F59E0B 50%, #DC2626 100%)'}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">BUY $GRUMPY</span>
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(135deg, #FDE047 0%, #F59E0B 50%, #DC2626 100%)'}}></div>
          </motion.button>
          
          <motion.button 
            className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 border-2 border-white/20 hover:scale-105 shadow-xl hover:border-yellow-500"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">View Chart</span>
          </motion.button>
          
          <motion.button 
            className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white">Join Telegram</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 