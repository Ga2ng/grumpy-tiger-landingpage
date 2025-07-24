'use client';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

export default function MarqueeBanner() {
  return (
    <section className="relative z-10 bg-black/80 backdrop-blur-sm border-y border-white/10 py-4 overflow-hidden">
      <Marquee 
        speed={40}
        gradient={false}
        className="text-white font-bold text-lg md:text-xl"
      >
        <div className="flex items-center space-x-8 px-4">
          {/* Slot 1 */}
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/assets/tigra_drop_cash.gif" 
                alt="Grumpy" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span style={{ color: '#FBC153' }}>THE TICKER IS $GRUMPY</span>
          </div>
          
          <span className="text-white">—</span>
          
          {/* Slot 2 */}
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/assets/tigra_drop_cash.gif" 
                alt="Grumpy" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span style={{ color: '#FBC153' }}>THE TIGER OF SOLANA</span>
          </div>
          
          <span className="text-white">—</span>
          
          {/* Slot 3 */}
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/assets/tigra_drop_cash.gif" 
                alt="Grumpy" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span style={{ color: '#FBC153' }}>BORN IN CHAOS</span>
          </div>
          
          <span className="text-white">—</span>
          
          {/* Slot 4 */}
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/assets/tigra_drop_cash.gif" 
                alt="Grumpy" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span style={{ color: '#FBC153' }}>LIVING ON THE EDGE</span>
          </div>
          
          <span className="text-white">—</span>
          
          {/* Slot 5 - Repeat */}
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/assets/tigra_drop_cash.gif" 
                alt="Grumpy" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span style={{ color: '#FBC153' }}>THE TICKER IS $GRUMPY</span>
          </div>
          
          <span className="text-white">—</span>
          
          {/* Slot 6 - Repeat */}
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/assets/tigra_drop_cash.gif" 
                alt="Grumpy" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span style={{ color: '#FBC153' }}>THE TIGER OF SOLANA</span>
          </div>
          
          <span className="text-white">—</span>
          
          {/* Slot 7 - Repeat */}
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/assets/tigra_drop_cash.gif" 
                alt="Grumpy" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span style={{ color: '#FBC153' }}>BORN IN CHAOS</span>
          </div>
          
          <span className="text-white">—</span>
          
          {/* Slot 8 - Repeat */}
          <div className="flex items-center space-x-3">
            <div className="relative w-6 h-6">
              <Image 
                src="/assets/tigra_drop_cash.gif" 
                alt="Grumpy" 
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <span style={{ color: '#FBC153' }}>LIVING ON THE EDGE</span>
          </div>
          
          <span className="text-white">—</span>
        </div>
      </Marquee>
    </section>
  );
} 