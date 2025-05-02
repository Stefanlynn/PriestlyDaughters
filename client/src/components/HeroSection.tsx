import Logo from './Logo';
import { useEffect, useRef } from 'react';

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
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/background.mov" type="video/quicktime" />
          {/* Fallback to cream background if video fails */}
          <div className="absolute inset-0 bg-cream"></div>
        </video>
      </div>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="flex flex-row items-center gap-8 animate-fade-in">
          <div className="w-40 md:w-48 lg:w-56">
            <Logo />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-wider">
            Priestly Daughters
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
