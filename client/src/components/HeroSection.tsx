import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen">
      {/* Cream background */}
      <div className="absolute inset-0 bg-cream"></div>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      
      {/* Content */}
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="flex flex-row items-center gap-8 animate-fade-in">
          <div className="w-40 md:w-48 lg:w-56">
            <Logo />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-wider">
            Priestly Daughters
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
