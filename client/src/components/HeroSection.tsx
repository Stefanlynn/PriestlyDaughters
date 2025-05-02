import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  
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
      {/* Background with simple styling */}
      <div className="absolute inset-0 bg-tan-dark/20"></div>
      
      {/* Simple Image Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-[url('/images/powellfam-5.JPG')] bg-cover bg-center opacity-20"
          style={{ filter: 'blur(2px)' }}
        ></div>
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center z-10">
        <div className="text-center flex flex-col items-center px-4">
          {/* Main Title */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-cursive text-white tracking-wider mb-8 drop-shadow-lg">
            Priestly Daughters
          </h1>
          
          {/* Scroll Button */}
          <button 
            onClick={scrollToFirstSection}
            className="animate-bounce-slow bg-transparent border-none cursor-pointer relative mt-8 group"
            aria-label="Scroll to content"
          >
            <div className="absolute inset-0 bg-white/10 rounded-full scale-110 group-hover:scale-125 opacity-30 group-hover:opacity-50 transition-all duration-300"></div>
            <ChevronDown className="h-12 w-12 text-white group-hover:text-soft-pink transition-colors duration-300" strokeWidth={2.5} />
            <span className="sr-only">Scroll down</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
