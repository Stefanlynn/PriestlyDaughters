import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

// Array of attached family images to use for the rotating gallery
const images = [
  '/images/powellfam-4.JPG',
  '/images/powellfam-16.JPG',
  '/images/powellfam-29.JPG',
  '/images/powellfam-38.JPG',
];

const About: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Image rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero section with pink background and rotating images - inspired by katieobrien.com */}
      <section className="bg-soft-pink py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image gallery with rotation effect */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 relative overflow-hidden" style={{ height: '500px' }}>
              <div className="rounded-xl overflow-hidden shadow-xl h-full relative">
                {/* Main image with animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={images[currentImageIndex]} 
                      alt={`Elizabeth and family - Image ${currentImageIndex + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
                
                {/* Subtle overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-30"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-1/4 h-1/4 bg-white/10 rounded-lg"></div>
              <div className="absolute -top-4 -left-4 w-1/4 h-1/4 border-2 border-white/20 rounded-lg"></div>
            </div>
            
            {/* Bio text - first part */}
            <div className="w-full md:w-1/2 md:pl-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-cursive text-charcoal mb-10">Meet Elizabeth</h1>
              
              <div className="prose prose-lg">
                <p className="mb-6 text-charcoal/90 leading-relaxed">
                  Hi! I'm a proud mother of three incredible children and a devoted Army wife, walking boldly in the calling God has placed on our family. After years of faithfully serving in the marketplace, I recently stepped away from my career in banking—where I culminated my journey as an Assistant Branch Manager—to follow the Lord's leading into a new season with the military.
                </p>
                <p className="mb-6 text-charcoal/90 leading-relaxed">
                  For over a decade, my husband and I poured our hearts into ministry as Co-Pastors at Vision Church Fort Walton Beach, a daughter ministry of Vision Church Santa Rosa Beach under the leadership of Apostles Tom and Jane Hamon, founded by Bishop Bill Hamon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Second section with the rest of the bio */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Decorative element at top */}
            <div className="flex justify-center mb-12">
              <div className="h-px w-20 bg-tan-dark/20"></div>
              <div className="mx-4 text-tan-dark/40 text-sm">✦</div>
              <div className="h-px w-20 bg-tan-dark/20"></div>
            </div>
            
            {/* Quote highlight */}
            <p className="text-xl md:text-2xl text-tan-dark font-cursive text-center mx-auto mb-14 max-w-2xl">
              Though our beloved church closed its doors in December 2024, the seeds sown continue to bear fruit in our lives and community.
            </p>
            
            <div className="prose prose-lg mx-auto">
              <p className="mb-8 text-charcoal/90 leading-relaxed">
                Today, I embrace my role as a stay-at-home mom with joy and intentionality, raising my children to know, love, and walk in the ways of the Lord. I'm passionate about fashion, blogging, and inspiring women—young and old—to step into their God-given identities with confidence and grace.
              </p>
              
              <p className="mb-8 text-charcoal/90 leading-relaxed">
                I'm also the founder of Priestly Daughters Ministry, Inc., a vision the Lord entrusted to me to equip, encourage, and empower women to embrace holiness, discover their divine calling, and walk boldly in their purpose. Teaching God's Word and helping others grasp foundational truths is my heart's delight.
              </p>
              
              <p className="mb-8 text-charcoal/90 leading-relaxed">
                My family is currently transitioning to beautiful Colorado Springs, eagerly anticipating all that God has in store for this next chapter. I invite you to journey with me as we grow deeper in faith, family, and purpose.
              </p>
            </div>
            
            {/* Decorative element at bottom */}
            <div className="flex justify-center mt-16">
              <div className="h-px w-20 bg-tan-dark/20"></div>
              <div className="mx-4 text-tan-dark/40 text-sm">✧</div>
              <div className="h-px w-20 bg-tan-dark/20"></div>
            </div>
            
            {/* Back to home link */}
            <div className="mt-12 text-center">
              <Link href="/">
                <span className="inline-flex items-center text-tan-dark/70 hover:text-tan-dark transition-colors cursor-pointer text-sm">
                  <ArrowLeft className="w-3 h-3 mr-2" />
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;