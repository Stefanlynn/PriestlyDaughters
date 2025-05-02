import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Cream background */}
      <div className="absolute inset-0 bg-cream"></div>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative min-h-screen flex flex-col items-center justify-center">
        <div className="w-48 md:w-64 lg:w-72 animate-fade-in">
          <Logo />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
