'use client';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'art', 'faq'];
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navItems = [
    { id: 'hero', label: 'Home', href: '#hero' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'art', label: 'Art Gallery', href: '#art' },
    { id: 'faq', label: 'FAQ', href: '#faq' }
  ];

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-yellow-400/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Logo */}
        <motion.div 
          className="text-3xl font-black cursor-pointer" 
          style={{ color: '#FBC153' }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => scrollToSection('hero')}
        >
          GRUMPY
        </motion.div>
        
        {/* Navigation Links */}
        <motion.div 
          className="hidden md:flex items-center space-x-1"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400"
                  layoutId="activeIndicator"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="flex items-center space-x-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.button 
            className="px-6 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy $GRUMPY
          </motion.button>
          
          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg bg-yellow-400/10 border border-yellow-400/30 text-yellow-400"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </motion.div>
      </nav>
      
      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-yellow-400/20 ${
          isMobileMenuOpen ? 'block' : 'hidden'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === item.id
                  ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                  : 'text-gray-300 hover:text-yellow-400 hover:bg-yellow-400/5'
              }`}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
      
      {/* Background Glow Effect */}
      {isScrolled && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 via-transparent to-orange-400/5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.header>
  );
} 