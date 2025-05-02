import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';
import Header from '../components/Header';

const Resources = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-soft-pink/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-cursive text-charcoal mb-8">Resources</h1>
            <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              Tools, guides, and materials to help you grow in your spiritual journey and walk in your divine purpose.
            </p>
          </div>
        </div>
      </section>
      
      {/* Coming Soon section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-cursive text-tan-dark mb-8">Coming Soon</h2>
            <p className="text-charcoal/80 mb-12">
              We're preparing a collection of resources to support your spiritual growth and help you understand 
              your identity in Christ. Soon this page will feature devotionals, prayer guides, book recommendations, 
              and study materials.
            </p>
            
            {/* Placeholder for future content */}
            <div className="w-full h-48 bg-soft-pink/10 rounded-lg flex items-center justify-center mb-12">
              <p className="text-tan-dark/60 font-cursive text-xl">Resources Library Coming Soon...</p>
            </div>
            
            {/* Back link */}
            <Link href="/">
              <span className="inline-flex items-center text-tan-dark/70 hover:text-tan-dark transition-colors cursor-pointer">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resources;