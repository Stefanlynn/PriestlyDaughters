import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Menu } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header 
      className={`w-full fixed top-0 z-10 transition duration-300 ${
        scrolled ? 'bg-tan shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link 
                href="/" 
                className="font-serif text-charcoal hover:text-tan-dark transition duration-300 text-sm uppercase tracking-widest"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about" 
                className="font-serif text-charcoal hover:text-tan-dark transition duration-300 text-sm uppercase tracking-widest"
              >
                About
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          aria-label="Toggle Menu"
          onClick={toggleMobileMenu}
        >
          <Menu className="w-6 h-6" />
        </button>
        
        {/* Right side navigation */}
        <div className="hidden md:block">
          <ul className="flex space-x-10">
            <li>
              <Link 
                href="/collections" 
                className="font-serif text-charcoal hover:text-tan-dark transition duration-300 text-sm uppercase tracking-widest"
              >
                Collections
              </Link>
            </li>
            <li>
              <Link 
                href="/contact" 
                className="font-serif text-charcoal hover:text-tan-dark transition duration-300 text-sm uppercase tracking-widest"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-tan-light absolute w-full py-4 shadow-md transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <li>
            <Link 
              href="/" 
              className="font-serif text-charcoal hover:text-tan-dark transition duration-300 text-sm uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              href="/about" 
              className="font-serif text-charcoal hover:text-tan-dark transition duration-300 text-sm uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              href="/collections" 
              className="font-serif text-charcoal hover:text-tan-dark transition duration-300 text-sm uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Collections
            </Link>
          </li>
          <li>
            <Link 
              href="/contact" 
              className="font-serif text-charcoal hover:text-tan-dark transition duration-300 text-sm uppercase tracking-widest"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
