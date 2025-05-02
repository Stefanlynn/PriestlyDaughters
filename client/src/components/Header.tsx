import Logo from './Logo';
import { Link } from 'wouter';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    const newMenuState = !isMenuOpen;
    setIsMenuOpen(newMenuState);
    
    // Simpler way to handle overflow that allows smoother transitions
    if (newMenuState) {
      // Just prevent scrolling without fixed positioning to allow smoother animation
      document.body.style.overflow = 'hidden';
      
      // Apply a class for additional styling
      document.documentElement.classList.add('mobile-menu-open');
    } else {
      // Reset styles when menu closes
      document.body.style.overflow = '';
      
      document.documentElement.classList.remove('mobile-menu-open');
    }
  };
  
  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <div className="w-16 h-16 -my-2">
              <Logo />
            </div>
          </Link>
          
          {/* Navigation on the right - desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/community" className="text-white hover:text-gray-300 transition-colors">
              Daughters
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </Link>

            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Menu button - mobile */}
          <button 
            className="text-white md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor" 
              className="w-6 h-6"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Full-screen Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mobile-menu fixed inset-0 top-0 left-0 w-screen h-screen z-[1000] md:hidden bg-black flex flex-col items-center justify-center"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, width: '100vw', height: '100vh', zIndex: 9999 }}
          >
            <div className="relative w-full h-full flex flex-col">
              {/* Close button */}
              <div className="absolute top-6 right-6 z-50">
                <button 
                  onClick={toggleMenu}
                  className="text-white p-2 focus:outline-none"
                  aria-label="Close menu"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    className="w-8 h-8"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Logo on top center */}
              <div className="pt-16 flex justify-center">
                <Link href="/" className="flex items-center" onClick={toggleMenu}>
                  <div className="w-20 h-20">
                    <Logo />
                  </div>
                </Link>
              </div>
              
              {/* Centered Navigation Links - vertically centered between logo and footer */}
              <div className="flex-1 flex items-center justify-center">
                <nav className="flex flex-col items-center space-y-10 text-center px-4">
                  <Link 
                    href="/about" 
                    className="text-white hover:text-soft-pink text-2xl transition-colors py-2 font-light tracking-wide"
                    onClick={toggleMenu}
                  >
                    About
                  </Link>
                  <Link 
                    href="/community" 
                    className="text-white hover:text-soft-pink text-2xl transition-colors py-2 font-light tracking-wide"
                    onClick={toggleMenu}
                  >
                    Daughters
                  </Link>
                  <Link 
                    href="/blog" 
                    className="text-white hover:text-soft-pink text-2xl transition-colors py-2 font-light tracking-wide"
                    onClick={toggleMenu}
                  >
                    Blog
                  </Link>

                  <Link 
                    href="/contact" 
                    className="text-white hover:text-soft-pink text-2xl transition-colors py-2 font-light tracking-wide"
                    onClick={toggleMenu}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
              
              {/* Footer with social links */}
              <div className="pb-16 text-center">
                <div className="flex justify-center space-x-8 text-white/70 text-sm">
                  <a 
                    href="https://www.instagram.com/priestlydaughter?igsh=MnhyY25sbGVxemE3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-soft-pink transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/share/15Hf4dfwKT/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-soft-pink transition-colors"
                  >
                    Facebook
                  </a>
                  <a 
                    href="https://www.youtube.com/channel/UC53UiFAW64n4NvMClDt1-xQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-soft-pink transition-colors"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;