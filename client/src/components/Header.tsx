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
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/community" className="text-white hover:text-gray-300 transition-colors">
              Our Community
            </Link>
            <Link href="/blog" className="text-white hover:text-gray-300 transition-colors">
              Blog
            </Link>
            <Link href="/resources" className="text-white hover:text-gray-300 transition-colors">
              Resources
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
      
      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black bg-opacity-90 backdrop-blur-lg"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                <Link href="/" className="text-white hover:text-gray-300 transition-colors py-2">
                  Home
                </Link>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors py-2">
                  About
                </Link>
                <Link href="/community" className="text-white hover:text-gray-300 transition-colors py-2">
                  Our Community
                </Link>
                <Link href="/blog" className="text-white hover:text-gray-300 transition-colors py-2">
                  Blog
                </Link>
                <Link href="/resources" className="text-white hover:text-gray-300 transition-colors py-2">
                  Resources
                </Link>
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors py-2">
                  Contact
                </Link>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;