'use client';
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/25 via-transparent to-orange-400/25"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content pada Banner Section */}
        <div className="relative z-10 h-full flex items-center justify-center py-8 sm:py-0">
          <div className="text-center px-4 sm:px-8 max-w-4xl mx-auto animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mb-4 sm:mb-6 text-white drop-shadow-2xl leading-tight hover:scale-105 transition-transform duration-300 animate-fade-in-up">
              <span className="block text-white mb-2">
                Ready to Get
              </span>
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 bg-clip-text text-transparent">
                GRUMPY?
              </span>
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-6 sm:mb-8 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-lg px-4 animate-fade-in-up animation-delay-200">
              Join the most brutally honest community in crypto. No sugar-coating, just pure grumpiness.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 animate-fade-in-up animation-delay-400">
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm sm:text-base">
                Buy GRUMPY Now
              </button>
              
              <button className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-yellow-400 text-yellow-400 font-bold rounded-xl hover:bg-yellow-400 hover:text-black transition-all duration-300 backdrop-blur-sm bg-black/30 text-sm sm:text-base">
                View Chart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Interactive Footer Content */}
      <div className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-black">
        
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-yellow-400/6 to-orange-500/6 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-amber-500/4 to-yellow-400/4 rounded-full blur-2xl animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 py-12 sm:py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Brand Section dengan GIF berdampingan */}
            <div className="lg:col-span-2 animate-fade-in-up animation-delay-100">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
                {/* GIF Section */}
                <div className="flex-shrink-0 animate-fade-in-up animation-delay-300">
                  <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 group">              
                    {/* Main Container */}
                    <div className="relative w-full h-full ">
                      {/* GIF Container */}
                      <div className="relative w-full h-full">
                        <Image 
                          src="/assets/tigra_ferrarri.gif" 
                          alt="Grumpy Animation" 
                          fill
                          className="object-cover rounded-3xl"
                          unoptimized
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Brand Content */}
                <div className="flex-1 text-center lg:text-left animate-fade-in-up animation-delay-500">
                  <div className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
                    GRUMPY
                  </div>
                  
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                    Grumpy was born on Bonk.fun, now he's running wild.
                    We back artists, builders, and anyone chasing the fun.
                    It's not just a token. It's a vibe.
                  </p>
                  
                  {/* Token Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-center lg:text-left mt-6 animate-fade-in-up animation-delay-700">
                    <div className="bg-gradient-to-br from-yellow-400/10 to-orange-400/10 border border-yellow-400/30 rounded-lg p-2 sm:p-3 md:p-4 backdrop-blur-sm hover:border-yellow-400/60 transition-all duration-300">
                      <div className="text-base sm:text-lg font-bold text-yellow-400 mb-0.5">SUPPLY</div>
                      <div className="text-xs sm:text-sm text-gray-300">1,000,000,000</div>
                      <div className="text-xs text-yellow-400 font-semibold">$GRUMPY</div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-400/10 to-red-400/10 border border-orange-400/30 rounded-lg p-2 sm:p-3 md:p-4 backdrop-blur-sm hover:border-orange-400/60 transition-all duration-300">
                      <div className="text-base sm:text-lg font-bold text-orange-400 mb-0.5">LP BURNT</div>
                      <div className="text-xs sm:text-sm text-gray-300">100%</div>
                      <div className="text-xs text-orange-400 font-semibold">PERMANENT</div>
                    </div>
                    <div className="bg-gradient-to-br from-red-400/10 to-pink-400/10 border border-red-400/30 rounded-lg p-2 sm:p-3 md:p-4 backdrop-blur-sm hover:border-red-400/60 transition-all duration-300">
                      <div className="text-base sm:text-lg font-bold text-red-400 mb-0.5">MINT & FREEZE</div>
                      <div className="text-xs sm:text-sm text-gray-300">REVOKED</div>
                      <div className="text-xs text-red-400 font-semibold">SECURE</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="lg:col-span-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center animate-fade-in-up animation-delay-600">
              <h3 className="text-2xl font-bold mb-6 text-yellow-400">SOCIALS</h3>
              <h4 className="text-lg font-semibold mb-6 text-gray-300">Join the GRUMPY Community</h4>
              <div className="grid grid-cols-1 gap-3 mb-6 max-w-xs w-full mx-auto lg:mx-0">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="group relative p-4 bg-gradient-to-br from-gray-800 to-gray-900 border border-yellow-400/30 rounded-xl flex items-center gap-3 hover:from-yellow-400/10 hover:to-orange-400/10 hover:border-yellow-400/60 transition-all duration-300 backdrop-blur-sm hover:scale-105 hover:-translate-y-1 hover:shadow-lg animate-fade-in-up"
                    style={{ animationDelay: `${800 + index * 100}ms` }}
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                      {typeof social.icon === 'string' ? social.icon : social.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-yellow-400 transition-colors">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
              
              <div className="text-center lg:text-left animate-fade-in-up animation-delay-1000">
                <div className="text-yellow-400 font-bold mb-2">Contract Address:</div>
                <div className="text-xs text-gray-400 bg-gray-800/50 p-2 rounded-lg font-mono break-all backdrop-blur-sm border border-gray-700/50">
                  Coming Soon...
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-8 text-center animate-fade-in-up animation-delay-1200">            
            {/* Final Quote */}
            <div className="text-center mt-8 pt-6 border-t border-gray-800">
              <p className="text-gray-400 italic text-lg">
                © 2025 GRUMPY Token. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animation-delay-100 {
          animation-delay: 100ms;
        }
        
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-400 {
          animation-delay: 400ms;
        }
        
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        
        .animation-delay-800 {
          animation-delay: 800ms;
        }
        
        .animation-delay-1000 {
          animation-delay: 1000ms;
        }
        
        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
      `}</style>
    </footer>
  );
}