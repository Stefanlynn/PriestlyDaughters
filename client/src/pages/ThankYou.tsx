import React, { useEffect } from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ThankYou = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="flex-grow pt-32 md:pt-40 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 md:p-12 text-center">
            <div className="font-cursive text-2xl text-tan-dark mb-6">Priestly Daughters</div>
            
            <h1 className="font-cursive text-4xl md:text-5xl text-tan-dark mb-6">Thank You!</h1>
            
            <p className="text-lg text-charcoal/80 mb-8">
              Your message has been received. We appreciate you reaching out and will respond to you as soon as possible.
            </p>
            
            <Link href="/">
              <a className="inline-block px-8 py-3 rounded-lg bg-tan-dark hover:bg-tan-dark/90 text-white font-medium transition-colors duration-200 shadow-md">
                Return to Homepage
              </a>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThankYou;