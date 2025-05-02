import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

// Array of attached family images to use for the rotating gallery
const images = [
  '/images/powellfam-4.JPG',
  '/images/powellfam-16.JPG',
  '/images/powellfam-20.JPG',
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
      {/* Header is fixed positioned */}
      <Header />
      
      {/* Empty div to create space between header and content */}
      <div className="h-[90px] md:h-[90px]"></div>
      
      {/* Hero section with pink background and rotating images */}
      <section className="bg-soft-pink py-16 md:py-28">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Image gallery with rotation effect */}
            <div className="w-full md:w-1/2 mb-12 md:mb-0 relative overflow-hidden" style={{ height: '500px' }}>
              <div className="rounded-xl overflow-hidden shadow-xl h-full relative">
                {/* Main image with animation */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4 }}
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
      <section className="pt-20 pb-10 md:pt-24 md:pb-10 bg-white">
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
          </div>
        </div>
      </section>
      
      {/* Family photo section */}
      <section className="pt-0 pb-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img 
                src="/images/powellfam-5.JPG" 
                alt="Elizabeth and family together by a fountain" 
                className="w-full h-auto" 
              />
              {/* Subtle decorative elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-40"></div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 bg-soft-pink/20 rounded-full"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 border border-soft-pink/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Priestly Daughters Section */}
      <section className="py-20 md:py-28 bg-soft-pink/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-cursive text-charcoal text-center mb-16">About Priestly Daughters</h2>
            
            <div className="prose prose-lg mx-auto relative">
              {/* Subtle decorative element */}
              <div className="absolute -left-4 md:-left-16 top-0 h-full w-px bg-tan-dark/10"></div>
              
              <p className="mb-8 text-charcoal/90 leading-relaxed">
                Priestly Daughters is more than a ministry—it's a spiritual sanctuary. A space where women are set apart, strengthened, and empowered to walk boldly in their God-given identity.
              </p>
              
              <p className="mb-8 text-charcoal/90 leading-relaxed">
                Rooted in the call to "be holy, for I am holy," this movement exists to guide women into deeper spiritual maturity, helping them discover their divine purpose and embrace the beauty of consecrated living.
              </p>
              
              <p className="mb-8 text-charcoal/90 leading-relaxed">
                We believe every daughter of God carries a unique mantle—marked by grace, set apart in worship, and designed to reflect His presence in the earth. At Priestly Daughters, we equip women to walk in that mantle with confidence, clarity, and conviction.
              </p>
              
              <p className="mb-8 text-charcoal/90 leading-relaxed">
                Through teaching, prayer, community, and prophetic encouragement, women are not only transformed—they become vessels through which God's presence flows. This is a place to grow, to rise, and to become everything He has destined you to be.
              </p>
              
              <div className="my-14 text-center">
                <p className="text-xl md:text-2xl text-tan-dark font-cursive mb-2">Welcome to Priestly Daughters.</p>
                <p className="text-lg text-charcoal/80 italic">A place of holiness, identity, and purpose.</p>
              </div>
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
      
      <Footer />
    </div>
  );
};

export default About;