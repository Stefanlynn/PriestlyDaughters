import React from 'react';
import { Link } from 'wouter';
import { Instagram, Facebook, Youtube } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="py-12 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Add Logo above everything else */}
        <div className="flex justify-center mb-10">
          <div className="w-20 h-20">
            <Logo />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} Priestly Daughters. All rights reserved.
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <Link href="/about" className="text-sm text-white/70 hover:text-soft-pink transition-colors">
              About
            </Link>
            <Link href="/terms" className="text-sm text-white/70 hover:text-soft-pink transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-white/70 hover:text-soft-pink transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-white/70 hover:text-soft-pink transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/priestlydaughter?igsh=MnhyY25sbGVxemE3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-soft-pink transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/share/1EdbmNN1zb/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-soft-pink transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UC53UiFAW64n4NvMClDt1-xQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-soft-pink transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;