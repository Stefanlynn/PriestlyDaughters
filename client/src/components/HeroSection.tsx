import Logo from './Logo';

const HeroSection = () => {
  return (
    <section className="bg-tan min-h-screen flex flex-col items-center justify-center">
      <div className="w-48 md:w-64 lg:w-72 animate-fade-in">
        <Logo />
      </div>
    </section>
  );
};

export default HeroSection;
