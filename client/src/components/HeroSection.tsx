import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Handle video loading and start playback
    const handleCanPlay = () => {
      video.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    };
    
    // Force video to restart playback after loop
    const handleLoop = () => {
      if (video.paused) {
        video.play();
      }
    };
    
    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('seeking', handleLoop);
    video.addEventListener('loop', handleLoop);
    video.addEventListener('pause', handleLoop); // Prevent any pausing
    
    // Cleanup event listeners
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('seeking', handleLoop);
      video.removeEventListener('loop', handleLoop);
      video.removeEventListener('pause', handleLoop);
    };
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
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          x-webkit-airplay="deny"
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
        <div className="text-center mt-16 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-cursive text-white tracking-wider handwriting mb-8">
            Priestly Daughters
          </h1>
          <div className="animate-bounce-slow" style={{opacity: 1}}>
            <ChevronDown className="h-12 w-12 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
