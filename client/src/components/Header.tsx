import Logo from './Logo';
import { Link } from 'wouter';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
              Our Community
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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 md:hidden bg-black bg-opacity-95 backdrop-blur-md flex flex-col items-center justify-center"
          >
            <div className="relative w-full h-full flex flex-col">
              {/* Close button */}
              <div className="absolute top-4 right-4 z-50">
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
                    className="w-7 h-7"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Logo on top center */}
              <div className="mt-10 mb-8 flex justify-center">
                <Link href="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
                  <div className="w-16 h-16">
                    <Logo />
                  </div>
                </Link>
              </div>
              
              {/* Centered Navigation Links */}
              <div className="flex-grow flex items-center justify-center">
                <nav className="flex flex-col items-center space-y-6 text-center px-4 -mt-8">
                  <Link 
                    href="/about" 
                    className="text-white hover:text-soft-pink text-xl transition-colors py-2 font-light tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    href="/community" 
                    className="text-white hover:text-soft-pink text-xl transition-colors py-2 font-light tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Community
                  </Link>
                  <Link 
                    href="/blog" 
                    className="text-white hover:text-soft-pink text-xl transition-colors py-2 font-light tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Blog
                  </Link>

                  <Link 
                    href="/contact" 
                    className="text-white hover:text-soft-pink text-xl transition-colors py-2 font-light tracking-wide"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
              
              {/* Footer with social links - optional */}
              <div className="mb-10 text-center">
                <div className="flex justify-center space-x-5 text-white/60">
                  <a 
                    href="https://www.instagram.com/priestlydaughter?igsh=MnhyY25sbGVxemE3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-soft-pink transition-colors"
                  >
                    Instagram
                  </a>
                  <a 
                    href="https://www.facebook.com/share/1DFNGXxVfY/?mibextid=wwXIfr" 
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