import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    // Handle video loading and playback
    const handleCanPlay = () => {
      setIsVideoLoaded(true);
      video.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    };
    
    // Improve looping by handling the timeupdate event
    const handleTimeUpdate = () => {
      // When the video is near the end, start a fade transition
      // This helps create a smoother loop transition
      if (video.currentTime > video.duration - 0.5) {
        video.style.opacity = '0.95';
      } else {
        video.style.opacity = '1';
      }
    };
    
    // Reset the opacity when the video loops
    const handleEnded = () => {
      // This timeout creates a small delay before showing the video again
      // which can help create a smoother loop transition
      setTimeout(() => {
        video.style.opacity = '1';
      }, 50);
    };
    
    // Add event listeners
    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);
    
    // Apply initial video settings
    video.playbackRate = 0.98; // Very slightly slower playback can help with loop transitions
    
    // Cleanup event listeners
    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="absolute w-full h-full object-cover transition-opacity duration-300"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
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
