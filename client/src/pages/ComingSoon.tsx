import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

const ComingSoon = () => {
  return (
    <div className="min-h-screen pt-20 pb-16 flex flex-col">
      {/* Coming Soon Content */}
      <section className="flex-grow flex flex-col items-center justify-center px-4 py-16 md:py-24 bg-cream/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-cursive text-charcoal mb-8">Coming Soon</h1>
            
            <div className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-xl shadow-sm">
              <p className="text-lg md:text-xl text-charcoal/80 mb-6">
                We're excited to share community stories with you, but this section is still in development.
              </p>
              
              <div className="h-1 w-20 bg-soft-pink mx-auto my-8"></div>
              
              <p className="text-charcoal/70 mb-6">
                Our team is currently gathering stories from our community members to share with you.
                Check back soon or sign up for our newsletter to be notified when this section launches.
              </p>
              
              <div className="mt-10">
                <Link href="/contact">
                  <span className="inline-block bg-soft-pink hover:bg-soft-pink/90 text-white py-3 px-6 rounded-lg transition-colors cursor-pointer">
                    Join Our Newsletter
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Back to Community Link */}
      <div className="bg-white py-10 text-center">
        <Link href="/community">
          <span className="inline-flex items-center text-tan-dark/70 hover:text-tan-dark transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Community
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ComingSoon;