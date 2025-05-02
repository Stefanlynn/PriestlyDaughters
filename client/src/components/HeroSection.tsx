import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
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
      // Add a little delay to make the animation feel more intentional
      setTimeout(() => {
        firstSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100);
      
      // Add the scroll-smooth class to html to ensure smooth scrolling
      document.documentElement.classList.add('scroll-smooth');
      
      // Optional: Remove the class after scrolling is complete to avoid affecting other interactions
      setTimeout(() => {
        document.documentElement.classList.remove('scroll-smooth');
      }, 1000);
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
          poster="/images/video-poster.jpg" // Optional: Add a poster image
        >
          <source src="/videos/background.mov" type="video/quicktime" />
        </video>
      </div>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center mt-16 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cursive text-white tracking-wider handwriting mb-8">
            Priestly Daughters
          </h1>
          <button 
            onClick={scrollToFirstSection}
            className="animate-bounce-slow bg-transparent border-none cursor-pointer relative mt-6 group"
            aria-label="Scroll to content"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-30 transition-all duration-300"></div>
            <ChevronDown className="h-12 w-12 text-white group-hover:text-soft-pink transition-colors duration-300" strokeWidth={2.5} />
            <span className="sr-only">Scroll down</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
