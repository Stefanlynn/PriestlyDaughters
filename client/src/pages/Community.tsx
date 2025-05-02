import React from 'react';
import { Link } from 'wouter';
import { 
  ArrowLeft, 
  Users, 
  Heart, 
  Facebook, 
  BookHeart, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import Header from '../components/Header';
import silhouetteImg from "@assets/silhouette-of-reaching-helping-hand-hope-and-support-each-other-over-sunset-people-han-SBI-349512636.jpg";

const Community = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Intro Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-soft-pink/30 to-soft-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-cursive text-charcoal mb-4">
              Daughters
            </h1>
            <h2 className="text-xl md:text-2xl text-charcoal/70 mb-8">
              You Don't Have to Do This Alone
            </h2>
            <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto mb-6">
              Priestly Daughters is more than a ministry—it's a movement of women who are growing, 
              healing, and walking boldly in their calling. We believe in sisterhood rooted in 
              truth, built through connection, and strengthened by purpose.
            </p>
            <p className="text-lg text-charcoal/80 italic leading-relaxed max-w-3xl mx-auto mb-12">
              This space is where faith becomes family. Whether you're new here or have been walking 
              with us from the beginning, you belong here.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-0.5 bg-soft-pink/60"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ways to Connect Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Title */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-3xl font-cursive text-tan-dark mb-4">Ways to Stay Connected</h2>
              <div className="flex justify-center">
                <div className="w-24 h-0.5 bg-soft-pink/60 mt-4"></div>
              </div>
            </div>
            
            {/* Connection Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              {/* Meetups */}
              <div className="bg-cream/40 p-8 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-soft-pink/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Local & Virtual Meetups</h3>
                <p className="text-charcoal/70 mb-6">
                  We host gatherings—both in-person and online—for prayer, encouragement, and conversation. 
                  These moments are relaxed, real, and focused on growing together in faith and womanhood.
                </p>
                <p className="text-charcoal/80 mb-6">
                  Check our social media for upcoming dates and locations.
                </p>
                <a 
                  href="https://www.facebook.com/share/1DFNGXxVfY/?mibextid=wwXIfr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer text-sm font-medium"
                >
                  Join Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
              
              {/* Coaching */}
              <div className="bg-cream/40 p-8 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-soft-pink/20 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Coaching & Mentorship</h3>
                <p className="text-charcoal/70 mb-6">
                  Need personal guidance? We offer one-on-one coaching and group mentorship opportunities 
                  for women navigating transitions, identity, or spiritual growth.
                  If you're ready for deeper support, we're here.
                </p>
                <Link href="/contact">
                  <span className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer text-sm font-medium">
                    Connect with Elizabeth
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </div>
              
              {/* Prayer Support - Full Width */}
              <div className="bg-cream/40 p-8 md:p-10 rounded-xl hover:shadow-md transition-shadow duration-300 md:col-span-2 mt-6">
                <div className="w-14 h-14 bg-soft-pink/20 rounded-full flex items-center justify-center mb-6">
                  <BookHeart className="w-7 h-7 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Prayer & Support</h3>
                <p className="text-charcoal/70 mb-4 max-w-3xl">
                  Life happens—and we're not meant to face it alone.
                  Share your prayer requests or reach out for encouragement. We'll be here to cover you, lift you up, and walk alongside you.
                </p>
                <p className="text-charcoal/80 italic mb-8 max-w-3xl">
                  A safe space. A strong sisterhood. A shared journey.
                </p>
                <Link href="/contact">
                  <span className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer text-sm font-medium">
                    Submit a Prayer Request
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Divider */}
            <div className="w-full flex justify-center my-16 md:my-20">
              <div className="w-24 h-0.5 bg-soft-pink/60"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Join the Circle - CTA Section */}
      <section className="py-16 md:py-24 bg-soft-pink/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-cursive text-charcoal mb-6">Join the Circle</h2>
            <p className="text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto">
              Want updates about meetups, prayer calls, or upcoming gatherings?
              Join our online community where we keep the conversation going and the community growing.
            </p>
            
            {/* CTA Button */}
            <div className="flex justify-center max-w-md mx-auto mb-12">
              <a 
                href="https://www.facebook.com/share/1DFNGXxVfY/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-soft-pink hover:bg-soft-pink/90 text-white py-3 px-8 rounded-lg transition-colors flex items-center justify-center w-full md:w-auto"
              >
                <Facebook className="w-5 h-5 mr-2" />
                Join Now
              </a>
            </div>
            
            {/* Additional Contact Link */}
            <div className="mt-10">
              <Link href="/contact">
                <span className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Have questions? Contact us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Back to Home Link */}
      <div className="bg-white py-12 text-center">
        <Link href="/">
          <span className="inline-flex items-center text-tan-dark/70 hover:text-tan-dark transition-colors cursor-pointer">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Community;