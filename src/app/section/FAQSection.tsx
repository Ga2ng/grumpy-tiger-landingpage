import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const EnhancedFAQSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Grumpy?",
      answer: "Grumpy is a bold, chaotic character on Solana, a tiger with attitude, built for the degen world."
    },
    {
      question: "What does Grumpy aim to be?",
      answer: "Grumpy's goal is to become one of the most iconic and recognizable characters on Solana."
    },
    {
      question: "What's the purpose of $GRUMPY?",
      answer: "$GRUMPY fuels the ecosystem around the character, a token for the fans, traders, and gamblers who live on the edge just like him."
    },
    {
      question: "Who's behind Grumpy?",
      answer: "A passionate group of crypto traders with years of experience and success in past projects. Now, their full focus is on taking Grumpy to the top."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 10
      }
    }
  };

  return (
    <section id="faq" className="relative z-10 max-w-4xl mx-auto px-6 py-20" style={{ zIndex: 1 }}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/20 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 1.3,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          />
        ))}
      </div>

      {/* Header with animation */}
      <motion.div
        className="text-center mb-16"
        variants={headerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 sm:gap-3 mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <HelpCircle className="text-yellow-400 w-6 h-6 sm:w-8 sm:h-8" />
          <Sparkles className="text-yellow-400 w-5 h-5 sm:w-6 sm:h-6" />
        </motion.div>
        
        <motion.h2 
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent"
          animate={{ 
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{
            backgroundSize: "200% 200%"
          }}
        >
          Questions & Answers
        </motion.h2>
        
        <motion.p
          className="text-gray-400 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Find answers to commonly asked questions
        </motion.p>
      </motion.div>
      
      {/* FAQ Items */}
      <motion.div 
        className="space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            className="group"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            layout
          >
            <motion.div 
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{
                borderColor: "rgba(251, 193, 83, 0.5)",
                boxShadow: "0 20px 40px rgba(251, 193, 83, 0.1)"
              }}
              animate={{
                borderColor: openFaq === index ? "rgba(251, 193, 83, 0.6)" : "rgba(75, 85, 99, 0.5)"
              }}
            >
              <motion.button
                className="w-full text-left p-8 flex justify-between items-center group-hover:bg-gray-700/30 transition-colors relative overflow-hidden"
                onClick={() => toggleFaq(index)}
                whileHover={{ backgroundColor: "rgba(55, 65, 81, 0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Hover effect background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                
                <span className="relative z-10 text-xl font-bold text-yellow-400 group-hover:text-yellow-300 transition-colors pr-4">
                  {faq.question}
                </span>
                
                <motion.div
                  className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-yellow-400/20 group-hover:bg-yellow-400/30 transition-colors"
                  animate={{ 
                    rotate: openFaq === index ? 180 : 0,
                    scale: openFaq === index ? 1.1 : 1
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200, 
                    damping: 15 
                  }}
                  whileHover={{ scale: 1.15 }}
                >
                  <ChevronDown className="text-yellow-400 w-6 h-6" />
                </motion.div>
              </motion.button>
              
              <AnimatePresence>
                {openFaq === index && (
                  <motion.div
                    initial={{ 
                      height: 0, 
                      opacity: 0,
                      y: -10
                    }}
                    animate={{ 
                      height: "auto", 
                      opacity: 1,
                      y: 0
                    }}
                    exit={{ 
                      height: 0, 
                      opacity: 0,
                      y: -10
                    }}
                    transition={{ 
                      type: "spring",
                      stiffness: 100,
                      damping: 15,
                      opacity: { duration: 0.2 }
                    }}
                    className="overflow-hidden"
                  >
                    <motion.div 
                      className="px-8 pb-8 border-t border-gray-700/30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <motion.div
                        className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mb-6 mt-6"
                        initial={{ width: 0 }}
                        animate={{ width: 64 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      />
                      <p className="text-gray-300 leading-relaxed text-lg">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        className="flex justify-center mt-16"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
      >
        <motion.div
          className="w-2 h-2 bg-yellow-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="w-2 h-2 bg-yellow-400 rounded-full mx-2"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3
          }}
        />
        <motion.div
          className="w-2 h-2 bg-yellow-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6
          }}
        />
      </motion.div>
    </section>
  );
};

export default EnhancedFAQSection;