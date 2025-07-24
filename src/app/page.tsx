"use client"
import MarqueeBanner from './components/MarqueeBanner';
import Navbar from './components/Navbar';
import HeroSection from './section/HeroSection';
import AboutSection from './section/AboutSection';
import ArtGallery from './section/ArtGallery';
import FAQSection from './section/FAQSection';
import FooterSection from './section/FooterSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background Effects */}
      {/* <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400/5 via-transparent to-orange-500/5"></div>
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-red-400/5 to-pink-500/5 rounded-full blur-2xl"></div>
      </div> */}

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Marquee Banner */}
      <MarqueeBanner />

      {/* About Section */}
      <AboutSection />

      {/* Art Gallery */}
      <ArtGallery />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}