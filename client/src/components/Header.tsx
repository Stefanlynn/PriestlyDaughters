import Logo from './Logo';
import { Link } from 'wouter';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-cream bg-opacity-70 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center">
            <div className="w-16 h-16 -my-2">
              <Logo />
            </div>
          </Link>
          
          {/* Navigation on the right */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-charcoal hover:text-gray-500 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-charcoal hover:text-gray-500 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-charcoal hover:text-gray-500 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-charcoal hover:text-gray-500 transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Menu button (2 lines) */}
          <button className="text-charcoal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;