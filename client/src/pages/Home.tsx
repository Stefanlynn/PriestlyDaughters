import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import BlogSection from '../components/BlogSection';
import { Link } from 'wouter';

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
            
            <div className="mt-16">
              <p className="text-xl md:text-2xl text-charcoal mb-6 font-light">
                If any of that sounds familiar—
              </p>
              <p className="text-2xl md:text-3xl text-charcoal mb-10 font-cursive">
                you're not broken, and you're not alone.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quote and Connect Section */}
      <section className="py-16 bg-soft-pink">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="mb-10">
              <p className="text-xl md:text-2xl text-charcoal mb-8 font-light">
                This space was created for women like you.
              </p>
              <p className="text-xl md:text-2xl text-charcoal font-light italic">
                Women called. Chosen. Ready to grow deeper, rise higher, and walk fully in who God created them to be.
              </p>
            </div>
            
            <div className="mt-12">
              <button className="px-8 py-3 bg-white text-charcoal rounded-full shadow-md hover:shadow-lg transition-all border border-tan-dark/20">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-offwhite">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
            {/* Left side - Text */}
            <div className="md:w-1/2 max-w-lg">
              <p className="font-cursive text-3xl md:text-4xl text-charcoal mb-6">
                Hey there
              </p>
              <p className="text-xl md:text-2xl font-light mb-8 text-charcoal">
                I'm Elizebeth Powell. A woman probably a lot like you.
              </p>
              <div className="space-y-6 text-lg text-charcoal/80 font-light mb-10">
                <p>
                  For years, I served in leadership—at work, in ministry, and in my home—without fully calling myself a leader. But deep down, I've always known I was called to more.
                </p>
                <p>
                  I'm a wife, a mom, and a woman of faith who sees the beauty and complexity in women like you.
                </p>
                <p>
                  And I'm here to help you walk in the purpose God already placed inside you.
                </p>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="md:w-1/2">
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden w-full max-w-md mx-auto shadow-xl">
                  <img 
                    src="/images/powellfam-16.JPG" 
                    alt="Elizabeth Powell" 
                    className="w-full"
                  />
                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-black opacity-20 mix-blend-multiply"></div>
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-5 -right-5 w-1/3 h-1/3 bg-tan-light rounded-lg -z-10"></div>
                <div className="absolute -top-5 -left-5 w-1/4 h-1/4 border-2 border-tan-dark rounded-lg -z-10"></div>
              </div>
            </div>
          </div>
          
          {/* Centered button below content */}
          <div className="mt-16 text-center">
            <Link href="/about">
              <div className="inline-block px-8 py-3 bg-white text-charcoal rounded-full shadow-md hover:shadow-lg transition-all border border-tan-dark/20 cursor-pointer">
                Meet Elizabeth
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <BlogSection />
    </>
  );
};

export default Home;
