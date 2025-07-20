'use client';
import Marquee from 'react-fast-marquee';

export default function MarqueeBanner() {
  return (
    <section className="relative z-10 bg-black/80 backdrop-blur-sm border-y border-white/10 py-4 overflow-hidden">
      <Marquee 
        speed={40}
        gradient={false}
        className="text-white font-bold text-lg md:text-xl"
      >
        <div className="flex items-center space-x-8 px-4">
          <span style={{ color: '#FBC153' }}>THE TICKER IS $GRUMPY</span>
          <span className="text-white">—</span>
          <span style={{ color: '#FBC153' }}>THE TIGER OF SOLANA</span>
          <span className="text-white">—</span>
          <span style={{ color: '#FBC153' }}>BORN IN CHAOS</span>
          <span className="text-white">—</span>
          <span style={{ color: '#FBC153' }}>LIVING ON THE EDGE</span>
          <span className="text-white">—</span>
          <span style={{ color: '#FBC153' }}>THE TICKER IS $GRUMPY</span>
          <span className="text-white">—</span>
          <span style={{ color: '#FBC153' }}>THE TIGER OF SOLANA</span>
          <span className="text-white">—</span>
          <span style={{ color: '#FBC153' }}>BORN IN CHAOS</span>
          <span className="text-white">—</span>
          <span style={{ color: '#FBC153' }}>LIVING ON THE EDGE</span>
          <span className="text-white">—</span>
        </div>
      </Marquee>
    </section>
  );
} 