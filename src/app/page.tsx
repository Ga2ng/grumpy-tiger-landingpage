"use client"
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  FaTwitter, 
  FaTelegram, 
  FaDiscord, 
  FaInstagram, 
  FaReddit,
  FaMedium,
  FaTiktok,
  FaAt,
  FaFileAlt,
  FaGithub,
  FaYoutube,
  FaLinkedin,
  FaGlobe,
  FaHeart
} from 'react-icons/fa';
import { SiSolana } from 'react-icons/si';
import Navbar from './components/Navbar';
import MarqueeBanner from './components/MarqueeBanner';
import ArtGallery from './section/ArtGallery';
import FAQSection from './section/FAQSection';
import AboutSection from './section/AboutSection';
import FooterSection from './section/FooterSection';

export default function GrumpyLandingPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('Contract Address Coming Soon');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const officialLinks = [
    { icon: FaTwitter, name: 'Twitter', color: 'bg-black', href: '#' },
    { icon: FaGlobe, name: 'Website', color: 'bg-purple-600', href: '#' },
    { icon: FaTelegram, name: 'Telegram', color: 'bg-blue-500', href: '#' },
    { icon: FaMedium, name: 'Medium', color: 'bg-white text-black', href: '#' },
    { icon: FaGithub, name: 'GitHub', color: 'bg-green-400', href: '#' },
    { icon: FaAt, name: 'Email', color: 'bg-white text-black', href: '#' },
    { icon: FaYoutube, name: 'YouTube', color: 'bg-black', href: '#' },
    { icon: FaInstagram, name: 'Instagram', color: 'bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500', href: '#' },
    { icon: FaTiktok, name: 'TikTok', color: 'bg-white text-black', href: '#' },
    { icon: FaDiscord, name: 'Discord', color: 'bg-blue-600', href: '#' },
    { icon: FaLinkedin, name: 'LinkedIn', color: 'bg-gradient-to-br from-orange-500 to-blue-800', href: '#' },
    { icon: FaReddit, name: 'Reddit', color: 'bg-orange-500', href: '#' },
    { icon: FaHeart, name: 'Support', color: 'bg-black', href: '#' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-center">
        {/* Simplified Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-40 right-16 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-red-500/20 rounded-full blur-xl"></div>
        </div>

        <div className="relative">
          {/* Tiger Character */}
          <div className="mb-8">
            <div className="relative mx-auto w-80 h-80 md:w-96 md:h-96">
              {/* Glowing backdrop */}
              <div className="absolute inset-0 rounded-full blur-2xl scale-110" style={{background: 'radial-gradient(circle, #FBC153 0%, rgba(251,193,83,0.3) 50%, rgba(59,130,246,0.2) 100%)'}}></div>
              
              {/* Main character container */}
              <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 shadow-2xl flex items-center justify-center overflow-hidden">
                {/* Tiger Image */}
                <div className="relative w-72 h-72 md:w-80 md:h-80">
                  <Image 
                    src="/assets/grumpy_tiger.png" 
                    alt="Grumpy Tiger"
                    fill
                    className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
              
              {/* Simplified floating particles */}
              <div className="absolute -top-4 -left-4 w-3 h-3 rounded-full animate-bounce" style={{backgroundColor: '#FBC153', animationDelay: '0s'}}></div>
              <div className="absolute -top-8 right-8 w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -right-4 w-4 h-4 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
              <div className="absolute -bottom-8 left-12 w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '1.5s'}}></div>
            </div>
          </div>
          
          {/* Title */}
          <div className="mb-8">
            <h1 className="text-7xl md:text-9xl font-black mb-4 bg-gradient-to-r from-white via-yellow-400 to-orange-500 bg-clip-text text-transparent">
              GRUMPY
            </h1>
            <div className="text-2xl md:text-3xl mb-6">
              <span className="text-gray-300">The Tiger of </span>
              <div className="inline-flex items-center gap-3">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <SiSolana className="w-8 h-8 md:w-10 md:h-10 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-green-400 blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                </motion.div>
                <span className="bg-gradient-to-r from-purple-400 via-blue-500 to-green-400 bg-clip-text text-transparent font-bold">Solana</span>
              </div>
            </div>
            
            {/* Elegant Built on Solana Badge */}
            {/* <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-green-500/10 border border-purple-400/20 rounded-2xl backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02, y: -2 }}
            >
              <div className="flex items-center gap-3">
                <motion.div 
                  className="w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="text-sm font-medium text-gray-300 tracking-wide">Built on</span>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <SiSolana className="w-5 h-5 text-purple-400" />
                  <div className="absolute inset-0 bg-purple-400 blur-sm opacity-30"></div>
                </motion.div>
                <span className="text-sm font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent tracking-wide">Solana</span>
              </div>
            </motion.div> */}
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Born in chaos, built for degeneracy. <span style={{color: '#FBC153'}} className="font-semibold">$GRUMPY</span> doesn't just trade - he conquers.
            </p>
          </div>

          {/* Contract Address */}
          <div className="bg-gradient-to-r from-gray-800/90 via-gray-900/90 to-gray-800/90 backdrop-blur-lg rounded-2xl p-8 mb-10 max-w-3xl mx-auto border border-white/10 shadow-2xl">
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
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="group text-black px-10 py-5 rounded-2xl text-xl font-black hover:scale-110 transition-all duration-300 shadow-2xl relative overflow-hidden"
              style={{background: 'linear-gradient(135deg, #FBC153 0%, #F59E0B 50%, #DC2626 100%)'}}
            >
              <span className="relative z-10">BUY $GRUMPY</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{background: 'linear-gradient(135deg, #FDE047 0%, #F59E0B 50%, #DC2626 100%)'}}></div>
            </button>
            
            <button className="group bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 border-2 border-white/20 hover:scale-105 shadow-xl hover:border-yellow-500">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">View Chart</span>
            </button>
            
            <button className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-105 shadow-xl">
              <span className="text-white">Join Telegram</span>
            </button>
          </div>
        </div>
      </section>
      
      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* Official Links Section */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-left">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#FBC153' }}>
              Official Links
            </h2>
            <p className="text-gray-400 text-lg">
              Connect with Grumpy across all platforms
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {officialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  className={`w-12 h-12 rounded-full ${link.color} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  title={link.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Art Gallery Section */}
      <ArtGallery />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
    </div>
  );
}