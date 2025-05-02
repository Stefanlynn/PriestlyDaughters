import Header from '../components/Header';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl md:text-3xl mb-12 text-charcoal font-light leading-relaxed">
              When you're a woman of faith and purpose, the path isn't always clear.
            </p>
            
            <p className="font-cursive text-3xl md:text-4xl mb-14 text-charcoal">
              Sometimes...
            </p>
            
            <div className="space-y-6 text-lg md:text-xl text-charcoal/80 font-light mb-14">
              <p>…you've been pouring out for everyone else and don't even know what you need anymore.</p>
              <p>…you sense there's more—but you're not sure how to step into it.</p>
              <p>…the pace of life has left you worn, weary, and spiritually dry.</p>
              <p>…the noise around you has drowned out the still, small voice within.</p>
              <p>…circumstances beyond your control have pulled you off course.</p>
            </div>
            
            <div className="mt-14 space-y-8">
              <p className="text-xl md:text-2xl text-charcoal">
                If any of that sounds familiar—you're not broken, and you're not alone.
              </p>
              <p className="text-xl md:text-2xl text-charcoal">
                This space was created for women like you.
              </p>
              <p className="text-xl md:text-2xl text-charcoal font-medium">
                Women called. Chosen. Ready to grow deeper, rise higher, and walk fully in who God created them to be.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
