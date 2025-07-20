'use client';
import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { 
  FaRocket,
  FaHome
} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface Artwork {
  id: number | string;
  title: string;
  image: string;
  description: string;
  row: number;
}

export default function ArtGallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: '-50px 0px'
  });

  const artworks: Artwork[] = [
    {
      id: 1,
      title: "Grumpy's Rage",
      image: "/assets/grumpy1.png",
      description: "Grumpy showing his true chaotic nature in the crypto world",
      row: 1
    },
    {
      id: 2,
      title: "Tiger's Den",
      image: "/assets/grumpy2.png",
      description: "Grumpy in his natural habitat - the trading floor",
      row: 1
    },
    {
      id: 3,
      title: "Solana Nights",
      image: "/assets/grumpy3.png",
      description: "Neon-lit Grumpy conquering the Solana blockchain",
      row: 2
    },
    {
      id: 4,
      title: "Chaos Theory",
      image: "/assets/grumpy4.JPG",
      description: "When Grumpy meets market volatility",
      row: 2
    },
    {
      id: 5,
      title: "Tiger's Triumph",
      image: "/assets/grumpy5.JPG",
      description: "Victory pose after a successful trade",
      row: 3
    },
    {
      id: 6,
      title: "Digital Dominion",
      image: "/assets/grumpy6.JPG",
      description: "Grumpy ruling the digital realm",
      row: 3
    },
    {
      id: 7,
      title: "Traditional Tiger",
      image: "/assets/grumpy-vid1.MP4",
      description: "Hand-drawn Grumpy with traditional techniques",
      row: 4
    },
    {
      id: 8,
      title: "Meme Masterpiece",
      image: "/assets/grumpy-vid2.MP4",
      description: "The ultimate Grumpy meme that broke the internet",
      row: 4
    }
  ];

  // Create infinite loop array
  const infiniteArtworks = useMemo(() => {
    const looped = [...artworks, ...artworks, ...artworks, ...artworks];
    return looped;
  }, []);

  // Responsive row grouping based on screen size
  const getResponsiveRows = () => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) return 2; // Mobile: 2 rows
      if (width < 1024) return 3; // Tablet: 3 rows
      return 4; // Desktop: 4 rows
    }
    return 4; // Default to 4 rows
  };

  const [rowCount, setRowCount] = useState(4);

  useEffect(() => {
    const updateRowCount = () => {
      setRowCount(getResponsiveRows());
    };

    updateRowCount();
    const debouncedResize = debounce(updateRowCount, 100);
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, []);

  // Debounce function for performance
  function debounce(func: Function, wait: number) {
    let timeout: NodeJS.Timeout;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // Group artworks by row
  const getRowArtworks = (rowNumber: number) => {
    return infiniteArtworks.filter((_, index) => (index % 4) + 1 === rowNumber);
  };

  return (
    <section id="art" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 pb-32 sm:pb-20">
      {/* Simplified Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-5 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-5 w-28 h-28 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-400/10 to-blue-500/10 rounded-full blur-xl"></div>
      </div>

      <div ref={ref} className="relative">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 sm:mb-6" style={{ color: '#FBC153' }}>
            Art Gallery
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
            Grumpy has a full team of artists behind him, dropping fresh, custom pieces every single day.
            <br />
            <span className="text-yellow-400 font-semibold">Each piece tells a story of chaos, triumph, and pure degen energy.</span>
          </p>
          

        </div>

        {/* Swiper Gallery Container */}
        <div className="relative overflow-hidden min-h-[1000px] sm:min-h-[1200px] md:min-h-[1400px] lg:min-h-[1600px]">
          
          {/* Swiper Rows with Opposite Directions */}
          {Array.from({ length: rowCount }, (_, rowIndex) => {
            const rowNumber = rowIndex + 1;
            const rowArtworks = getRowArtworks(rowNumber);
            const isMovingDown = rowIndex % 2 === 0; // Even rows move down, odd rows move up
            
            return (
              <div 
                key={rowIndex}
                className={`absolute h-full px-2 ${
                  rowCount === 2 ? (rowIndex === 0 ? 'left-0 w-1/2' : 'left-1/2 w-1/2') :
                  rowCount === 3 ? (rowIndex === 0 ? 'left-0 w-1/3' : rowIndex === 1 ? 'left-1/3 w-1/3' : 'left-2/3 w-1/3') :
                  (rowIndex === 0 ? 'left-0 w-1/4' : rowIndex === 1 ? 'left-1/4 w-1/4' : rowIndex === 2 ? 'left-1/2 w-1/4' : 'left-3/4 w-1/4')
                }`}
              >
                <Swiper
                  direction="vertical"
                  slidesPerView="auto"
                  spaceBetween={16}
                  loop={true}
                  autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    reverseDirection: rowIndex % 2 === 1
                  }}
                  speed={isMovingDown ? 3000 : 2500}
                  modules={[Autoplay]}
                  className="h-full"
                  style={{ height: '100%' }}
                >
                  {rowArtworks.map((artwork: Artwork, index: number) => (
                    <SwiperSlide key={`${artwork.id}-${index}`} style={{ height: 'auto' }}>
                      <div className="w-full">
                        <ArtworkCard artwork={artwork} />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}

        </div>



        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 sm:px-10 py-3 sm:py-4 rounded-2xl text-lg sm:text-xl font-bold hover:shadow-2xl transition-all duration-300 shadow-xl hover:shadow-yellow-500/50"
          >
            🎨 View More on Telegram
          </motion.button>
        </div>
      </div>

      {/* Optimized CSS with Glow Effects */}
      <style jsx>{`
        .art-gallery-container {
          will-change: transform;
          transform: translateZ(0);
        }
        
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .glow-effect {
          box-shadow: 0 0 20px rgba(251, 193, 83, 0.4);
        }
        
        .swiper-slide {
          height: auto !important;
        }
        

      `}</style>

      {/* Floating Scroll Buttons for Mobile */}
      <div className="block sm:hidden fixed bottom-6 right-6 z-[99999] flex flex-col gap-3">
        {/* Spacer untuk memastikan button tidak tertutup */}
        <div className="h-32"></div>
        {/* Scroll Down Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 overflow-hidden group"
          onClick={() => window.scrollBy({ top: 500, behavior: 'smooth' })}
        >
          {/* Grumpy Tiger Background */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            <Image
              src="/assets/grumpy_tiger.png"
              alt="Grumpy Scroll"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Scroll Down Icon */}
          <div className="relative z-10 flex flex-col items-center">
            <FaRocket className="text-lg text-black" />
            <span className="text-xs font-bold text-black">Scroll</span>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>

        {/* Scroll Up Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: -5 }}
          whileTap={{ scale: 0.9 }}
          className="relative w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-2 border-white/20 overflow-hidden group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* Grumpy Tiger Background */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
            <Image
              src="/assets/grumpy_tiger.png"
              alt="Grumpy Scroll"
              fill
              className="object-contain"
            />
          </div>
          
          {/* Scroll Up Icon */}
          <div className="relative z-10 flex flex-col items-center">
            <FaHome className="text-lg text-white" />
            <span className="text-xs font-bold text-white">Top</span>
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.button>
      </div>
    </section>
  );
}

// Optimized Artwork Card Component
function ArtworkCard({ artwork }: { artwork: Artwork }) {
  const isVideo = artwork.image.toLowerCase().endsWith('.mp4') || artwork.image.toLowerCase().endsWith('.mov');

  return (
    <motion.div
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="group cursor-pointer"
    >
      <div className="relative w-full bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl border border-gray-700/50 hover:border-yellow-500/60 transition-all duration-300 overflow-hidden shadow-xl group-hover:shadow-2xl group-hover:shadow-yellow-500/30">
        
        {/* Glow Border Effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500"
             style={{
               background: 'linear-gradient(45deg, #FBC153, #F59E0B, #DC2626, #FBC153)',
               backgroundSize: '400% 400%',
               animation: 'gradientShift 3s ease infinite'
             }}>
        </div>
        
        {/* Artwork Container */}
        <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-br from-gray-800/95 to-gray-900/95 m-0.5 group-hover:glow-effect">
          
          {/* Artwork Image/Video */}
          <div className="relative w-full h-48 sm:h-56 overflow-hidden">
            {isVideo ? (
              <video
                src={artwork.image}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/video-poster.jpg"
              />
            ) : (
              <Image
                src={artwork.image}
                alt={artwork.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 25vw, 25vw"
              />
            )}
          </div>
          
          {/* Artwork Info */}
          <div className="p-4">
            <h3 className="text-sm sm:text-base font-bold text-yellow-400 truncate mb-2">{artwork.title}</h3>
            <p className="text-xs sm:text-sm text-gray-400 line-clamp-2 leading-tight">{artwork.description}</p>
          </div>

          {/* Enhanced Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center rounded-xl">
            <div className="text-center text-white transform scale-90 group-hover:scale-100 transition-transform duration-300 p-4">
              <h3 className="text-lg font-bold mb-2 text-yellow-400 drop-shadow-lg">{artwork.title}</h3>
              <p className="text-sm text-gray-200 leading-relaxed drop-shadow-md">{artwork.description}</p>
            </div>
          </div>

          {/* Simple indicator */}
          <div className="absolute top-3 right-3 w-2 h-2 bg-yellow-400/60 rounded-full"></div>
          
          {/* Video indicator */}
          {isVideo && (
            <div className="absolute top-3 left-3 w-6 h-6 bg-red-500/80 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-l-[6px] border-l-white border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
} 