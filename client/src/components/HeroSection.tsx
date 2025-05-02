import { motion } from 'framer-motion';
import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="bg-tan min-h-screen flex flex-col items-center justify-center relative">
      <div className="container mx-auto px-6 pt-16 pb-24">
        {/* Logo centered in the page */}
        <motion.div 
          className="flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="w-48 md:w-64 lg:w-72 relative">
            <Logo />
          </div>
        </motion.div>
      </div>
      
      {/* Subtle decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-tan-dark/10 to-transparent"></div>
    </section>
  );
};

export default HeroSection;
