import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import { motion, AnimatePresence } from 'framer-motion';

// Array of attached images to use for the rotating gallery
const images = [
  '/images/blog/blog-1.jpg',
  '/images/blog/blog-2.jpg',
  '/images/blog/blog-3.jpg',
  '/images/blog/blog-4.jpg',
  '/images/blog/blog-5.jpg',
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
      
      {/* Hero section with pink background and rotating images */}
      <section className="bg-pink-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            {/* Image gallery with rotation effect */}
            <div className="w-full md:w-1/2 mb-8 md:mb-0 relative overflow-hidden" style={{ height: '450px' }}>
              <div className="rounded-xl overflow-hidden shadow-xl h-full relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={images[currentImageIndex]} 
                      alt={`Elizabeth - Image ${currentImageIndex + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Bio text - first part */}
            <div className="w-full md:w-1/2 md:pl-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-cursive text-charcoal mb-8">Meet Elizabeth</h1>
              
              <div className="prose prose-lg">
                <p className="mb-6">
                  Hi! I'm a proud mother of three incredible children and a devoted Army wife, walking boldly in the calling God has placed on our family. After years of faithfully serving in the marketplace, I recently stepped away from my career in banking—where I culminated my journey as an Assistant Branch Manager—to follow the Lord's leading into a new season with the military.
                </p>
                <p className="mb-6">
                  For over a decade, my husband and I poured our hearts into ministry as Co-Pastors at Vision Church Fort Walton Beach, a daughter ministry of Vision Church Santa Rosa Beach under the leadership of Apostles Tom and Jane Hamon, founded by Bishop Bill Hamon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Second section with the rest of the bio */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <p className="mb-6">
                Though our beloved church closed its doors in December 2024, the seeds sown continue to bear fruit in our lives and community.
              </p>
              
              <p className="mb-6">
                Today, I embrace my role as a stay-at-home mom with joy and intentionality, raising my children to know, love, and walk in the ways of the Lord. I'm passionate about fashion, blogging, and inspiring women—young and old—to step into their God-given identities with confidence and grace.
              </p>
              
              <p className="mb-6">
                I'm also the founder of Priestly Daughters Ministry, Inc., a vision the Lord entrusted to me to equip, encourage, and empower women to embrace holiness, discover their divine calling, and walk boldly in their purpose. Teaching God's Word and helping others grasp foundational truths is my heart's delight.
              </p>
              
              <p className="mb-6">
                My family is currently transitioning to beautiful Colorado Springs, eagerly anticipating all that God has in store for this next chapter. I invite you to journey with me as we grow deeper in faith, family, and purpose.
              </p>
            </div>
            
            {/* Decorative element */}
            <div className="flex justify-center mt-12">
              <div className="h-px w-20 bg-tan-dark/20"></div>
              <div className="mx-4 text-tan-dark/40 text-sm">✧</div>
              <div className="h-px w-20 bg-tan-dark/20"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;