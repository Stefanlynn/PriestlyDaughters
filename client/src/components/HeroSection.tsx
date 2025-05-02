import React, { useEffect, useRef } from 'react';

const HeroSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    // Autoplay the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);
  
  // Function to scroll to the first section
  const scrollToFirstSection = () => {
    // Get the first section that follows the hero
    const firstSection = document.querySelector('section.bg-cream');
    
    if (firstSection) {
      firstSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        {/* Placeholder background while video loads */}
        <div className="absolute inset-0 bg-cream z-0"></div>
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover z-10"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/background.mov" type="video/quicktime" />
        </video>
      </div>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-20"></div>
      
      {/* Content */}
      <div className="relative z-30 min-h-screen flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cursive text-white tracking-wider mb-8 drop-shadow-lg">
            Priestly Daughters
          </h1>
          
          <button 
            onClick={scrollToFirstSection}
            className="animate-bounce-slow bg-transparent border-none cursor-pointer"
            aria-label="Scroll to content"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="48" 
              height="48" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-12 w-12 text-white hover:text-white/80 transition-colors"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;