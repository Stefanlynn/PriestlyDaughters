import Logo from './Logo';
import { Link } from 'wouter';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-black bg-opacity-30 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo on the left */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12">
              <Logo />
            </div>
            <h1 className="text-2xl font-serif text-white">Priestly Daughters</h1>
          </Link>
          
          {/* Navigation on the right */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-gray-300 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-gray-300 transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;