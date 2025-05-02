import React from 'react';
import { Link } from 'wouter';
import { Instagram, Facebook, Youtube, Heart, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top Section with Logo and Email Signup */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between mb-12 gap-8">
            {/* Logo and Tagline */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="w-16 h-16 mb-4">
                <Logo />
              </div>
              <h3 className="text-xl md:text-2xl font-cursive mb-3">Priestly Daughters</h3>
              <p className="text-gray-300 max-w-xs leading-relaxed">
                Empowering women to walk boldly in purpose and faith through community and grace.
              </p>
            </div>
            
            {/* Newsletter Sign-up - can be integrated with Netlify Forms */}
            <div className="w-full max-w-md">
              <h4 className="text-lg font-semibold mb-3">Join Our Community</h4>
              <p className="text-gray-300 mb-4">
                Stay updated with events, resources, and words of encouragement.
              </p>
              <form name="newsletter" method="POST" data-netlify="true" className="flex flex-col sm:flex-row gap-2">
                <input type="hidden" name="form-name" value="newsletter" />
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-soft-pink/40 flex-grow"
                  required
                />
                <button 
                  type="submit"
                  className="px-4 py-2 bg-soft-pink hover:bg-soft-pink/90 rounded-lg transition-colors"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
          
          {/* Middle Section with Quick Links */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8 border-t border-b border-gray-700/50">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Pages</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-soft-pink transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-soft-pink transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="text-gray-300 hover:text-soft-pink transition-colors">
                    Daughters
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-soft-pink transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-soft-pink transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            
            {/* Community Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="https://www.facebook.com/share/1DFNGXxVfY/?mibextid=wwXIfr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-soft-pink transition-colors inline-flex items-center"
                  >
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook Group
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.instagram.com/priestlydaughter?igsh=MnhyY25sbGVxemE3" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-soft-pink transition-colors inline-flex items-center"
                  >
                    <Instagram className="w-4 h-4 mr-2" />
                    Instagram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.youtube.com/channel/UC53UiFAW64n4NvMClDt1-xQ" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-soft-pink transition-colors inline-flex items-center"
                  >
                    <Youtube className="w-4 h-4 mr-2" />
                    YouTube Channel
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <a 
                href="mailto:Priestlydaughter12@gmail.com"
                className="flex items-start text-gray-300 hover:text-soft-pink transition-colors mb-4"
              >
                <Mail className="w-5 h-5 mr-2 mt-0.5 shrink-0" />
                <span>Priestlydaughter12@gmail.com</span>
              </a>
              <p className="text-gray-300 text-sm leading-relaxed">
                For speaking engagements, coaching requests, or prayer needs, please use our contact form.
              </p>
              <Link href="/contact" className="inline-block mt-3 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm">
                Get in Touch
              </Link>
            </div>
          </div>
          
          {/* Bottom Copyright Section */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <div className="mb-4 md:mb-0">
              © {new Date().getFullYear()} Priestly Daughters. All rights reserved.
            </div>
            <div className="flex items-center">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-soft-pink" />
              <span>for women of faith</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;