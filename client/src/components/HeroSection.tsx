import { useEffect, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [activeVideo, setActiveVideo] = useState(1);
  
  useEffect(() => {
    const video1 = videoRef1.current;
    const video2 = videoRef2.current;
    if (!video1 || !video2) return;
    
    // Set initial state
    video1.style.opacity = '1';
    video2.style.opacity = '0';
    
    // Play the first video immediately and prepare the second one
    const playVideos = () => {
      // Start the first video playing immediately
      video1.play().catch(err => console.error("Video 1 play failed:", err));
      
      // Also load the second video, get it buffered and ready, but keep it paused initially
      video2.load();
      video2.currentTime = 0;
      
      // Start its buffering by briefly playing it
      video2.play()
        .then(() => {
          // Then immediately pause it until needed
          setTimeout(() => {
            video2.pause();
          }, 100);
        })
        .catch(err => console.error("Video 2 play failed:", err));
    };
    
    video1.addEventListener('canplay', playVideos);
    
    // When video1 reaches halfway, prepare video2 to be ready
    const handleTimeUpdate1 = () => {
      // Start preparing much earlier - at 1/3 of the way through the video
      if (activeVideo === 1 && video1.currentTime > video1.duration / 3) {
        // Reset and preload the second video
        video2.currentTime = 0;
        video2.play();
        
        // Keep it hidden until needed
        video2.style.opacity = '0';
      }
      
      // Actual switch happens when 3 seconds from the end
      if (activeVideo === 1 && video1.currentTime > video1.duration - 3) {
        // Immediately make the switch
        video2.style.opacity = '1';
        video1.style.opacity = '0';
        
        // Switch active video
        setActiveVideo(2);
      }
    };
    
    // Same process for video2 to video1 transition
    const handleTimeUpdate2 = () => {
      // Start preparing much earlier - at 1/3 of the way through the video
      if (activeVideo === 2 && video2.currentTime > video2.duration / 3) {
        // Reset and preload the first video
        video1.currentTime = 0;
        video1.play();
        
        // Keep it hidden until needed
        video1.style.opacity = '0';
      }
      
      // Actual switch happens when 3 seconds from the end
      if (activeVideo === 2 && video2.currentTime > video2.duration - 3) {
        // Immediately make the switch
        video1.style.opacity = '1';
        video2.style.opacity = '0';
        
        // Switch active video
        setActiveVideo(1);
      }
    };
    
    video1.addEventListener('timeupdate', handleTimeUpdate1);
    video2.addEventListener('timeupdate', handleTimeUpdate2);
    
    // Cleanup
    return () => {
      video1.removeEventListener('canplay', playVideos);
      video1.removeEventListener('timeupdate', handleTimeUpdate1);
      video2.removeEventListener('timeupdate', handleTimeUpdate2);
    };
  }, [activeVideo]);
  
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Video background - First video */}
      <div className="absolute inset-0">
        <video
          ref={videoRef1}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
        >
          <source src="/videos/background.mov" type="video/quicktime" />
          {/* Fallback to cream background if video fails */}
          <div className="absolute inset-0 bg-cream"></div>
        </video>
        
        {/* Second identical video for smooth looping */}
        <video
          ref={videoRef2}
          className="absolute w-full h-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
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
          <div className="animate-bounce-slow" style={{opacity: 1}}>
            <ChevronDown className="h-12 w-12 text-white" strokeWidth={2} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
