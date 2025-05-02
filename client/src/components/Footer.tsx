import React from 'react';
import { Link } from 'wouter';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-sm text-charcoal/70">
            © {new Date().getFullYear()} Priestly Daughters. All rights reserved.
          </div>
          
          {/* Links */}
          <div className="flex items-center space-x-6 md:space-x-8">
            <Link href="/about" className="text-sm text-charcoal/70 hover:text-soft-pink transition-colors">
              About
            </Link>
            <Link href="/terms" className="text-sm text-charcoal/70 hover:text-soft-pink transition-colors">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-charcoal/70 hover:text-soft-pink transition-colors">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-charcoal/70 hover:text-soft-pink transition-colors">
              Contact
            </Link>
          </div>
          
          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.instagram.com/priestlydaughter?igsh=MnhyY25sbGVxemE3" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-soft-pink transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://www.facebook.com/share/1EdbmNN1zb/?mibextid=wwXIfr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-soft-pink transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UC53UiFAW64n4NvMClDt1-xQ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal/70 hover:text-soft-pink transition-colors"
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