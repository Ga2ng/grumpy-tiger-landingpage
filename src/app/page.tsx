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

// Custom DEXScreener Icon Component
const DEXScreenerIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="100%" 
    height="100%" 
    fillRule="evenodd" 
    viewBox="0 0 252 300" 
    focusable="false"
    className="w-6 h-6"
  >
    {/* Black stroke for outline */}
    <path 
      d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" 
      fill="black" 
      stroke="black" 
      strokeWidth="0.5"
    />
    <path 
      d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" 
      fill="black" 
      stroke="black" 
      strokeWidth="0.5"
    />
    
    {/* White fill */}
    <path 
      d="M151.818 106.866c9.177-4.576 20.854-11.312 32.545-20.541 2.465 5.119 2.735 9.586 1.465 13.193-.9 2.542-2.596 4.753-4.826 6.512-2.415 1.901-5.431 3.285-8.765 4.033-6.326 1.425-13.712.593-20.419-3.197m1.591 46.886l12.148 7.017c-24.804 13.902-31.547 39.716-39.557 64.859-8.009-25.143-14.753-50.957-39.556-64.859l12.148-7.017a5.95 5.95 0 003.84-5.845c-1.113-23.547 5.245-33.96 13.821-40.498 3.076-2.342 6.434-3.518 9.747-3.518s6.671 1.176 9.748 3.518c8.576 6.538 14.934 16.951 13.821 40.498a5.95 5.95 0 003.84 5.845zM126 0c14.042.377 28.119 3.103 40.336 8.406 8.46 3.677 16.354 8.534 23.502 14.342 3.228 2.622 5.886 5.155 8.814 8.071 7.897.273 19.438-8.5 24.796-16.709-9.221 30.23-51.299 65.929-80.43 79.589-.012-.005-.02-.012-.029-.018-5.228-3.992-11.108-5.988-16.989-5.988s-11.76 1.996-16.988 5.988c-.009.005-.017.014-.029.018-29.132-13.66-71.209-49.359-80.43-79.589 5.357 8.209 16.898 16.982 24.795 16.709 2.929-2.915 5.587-5.449 8.814-8.071C69.31 16.94 77.204 12.083 85.664 8.406 97.882 3.103 111.959.377 126 0m-25.818 106.866c-9.176-4.576-20.854-11.312-32.544-20.541-2.465 5.119-2.735 9.586-1.466 13.193.901 2.542 2.597 4.753 4.826 6.512 2.416 1.901 5.432 3.285 8.766 4.033 6.326 1.425 13.711.593 20.418-3.197" 
      fill="white"
    />
    <path 
      d="M197.167 75.016c6.436-6.495 12.107-13.684 16.667-20.099l2.316 4.359c7.456 14.917 11.33 29.774 11.33 46.494l-.016 26.532.14 13.754c.54 33.766 7.846 67.929 24.396 99.193l-34.627-27.922-24.501 39.759-25.74-24.231L126 299.604l-41.132-66.748-25.739 24.231-24.501-39.759L0 245.25c16.55-31.264 23.856-65.427 24.397-99.193l.14-13.754-.016-26.532c0-16.721 3.873-31.578 11.331-46.494l2.315-4.359c4.56 6.415 10.23 13.603 16.667 20.099l-2.01 4.175c-3.905 8.109-5.198 17.176-2.156 25.799 1.961 5.554 5.54 10.317 10.154 13.953 4.48 3.531 9.782 5.911 15.333 7.161 3.616.814 7.3 1.149 10.96 1.035-.854 4.841-1.227 9.862-1.251 14.978L53.2 160.984l25.206 14.129a41.926 41.926 0 015.734 3.869c20.781 18.658 33.275 73.855 41.861 100.816 8.587-26.961 21.08-82.158 41.862-100.816a41.865 41.865 0 015.734-3.869l25.206-14.129-32.665-18.866c-.024-5.116-.397-10.137-1.251-14.978 3.66.114 7.344-.221 10.96-1.035 5.551-1.25 10.854-3.63 15.333-7.161 4.613-3.636 8.193-8.399 10.153-13.953 3.043-8.623 1.749-17.689-2.155-25.799l-2.01-4.175z" 
      fill="white"
    />
  </svg>
);

// Custom DEXTools Icon Component
const DEXToolsIcon = () => (
  <div className="w-6 h-6 flex items-center justify-center">
    <Image
      src="/assets/dextools-logo.png"
      alt="DEXTools Logo"
      width={24}
      height={24}
      className="object-contain"
    />
  </div>
);

export default function GrumpyLandingPage() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText('Contract Address Coming Soon');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-20">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative z-10 max-w-7xl mx-auto px-6 py-12 sm:py-16 text-center">
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
          <div className="mb-8 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-4 bg-gradient-to-r from-white via-yellow-400 to-orange-500 bg-clip-text text-transparent leading-tight">
              GRUMPY
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-6">
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
            {/* <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Born in chaos, built for degeneracy. <span style={{color: '#FBC153'}} className="font-semibold">$GRUMPY</span> doesn't just trade - he conquers.
            </p> */}
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
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-8 sm:py-16">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#FBC153' }}>
            Official Links
          </h2>
          <p className="text-gray-400 text-lg">
            Connect with Grumpy across all platforms
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
                      {[
              { icon: FaTelegram, name: 'Telegram', color: 'bg-blue-500', href: '#' },
              { icon: DEXScreenerIcon, name: 'DEXScreener', color: 'bg-purple-600', href: '#' },
              { icon: DEXToolsIcon, name: 'DEXTools', color: 'bg-white', href: '#' },
              { icon: FaTwitter, name: 'Twitter', color: 'bg-black', href: '#' }
            ].map((link, index) => {
            const IconComponent = link.icon;
            return (
              <a
                key={index}
                href={link.href}
                className={`w-16 h-16 rounded-full ${link.color} flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                title={link.name}
              >
                <IconComponent className="w-6 h-6" />
              </a>
            );
          })}
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