import React from 'react';
import { Link } from 'wouter';
import { 
  ArrowLeft, 
  Users, 
  Heart, 
  UserPlus, 
  BookHeart, 
  BookOpen, 
  Calendar, 
  ArrowRight,
  MessageCircle
} from 'lucide-react';
import Header from '../components/Header';

const Community = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero Intro Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-soft-pink/30 to-soft-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-cursive text-charcoal mb-8">
              You weren't meant to walk this journey alone.
            </h1>
            <p className="text-lg text-charcoal/80 leading-relaxed max-w-3xl mx-auto mb-10">
              Priestly Daughters is more than a message—it's a movement. We're building a sacred, supportive space 
              where women can grow together in faith, identity, and purpose. Whether you're looking for coaching, 
              meetups, or a moment of encouragement—we're here, walking this with you.
            </p>
            <div className="w-24 h-0.5 bg-soft-pink/60 mx-auto"></div>
          </div>
        </div>
      </section>
      
      {/* Community Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Section Title */}
            <div className="text-center mb-20">
              <h2 className="text-2xl md:text-3xl font-cursive text-tan-dark mb-4">Community Highlights</h2>
              <p className="text-charcoal/70 max-w-2xl mx-auto">
                Discover the different ways you can connect, grow, and thrive with our community of women pursuing 
                holiness and purpose together.
              </p>
            </div>
            
            {/* Features Grid - 2x2 on desktop, 1 column on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-8 lg:gap-12 mb-20">
              
              {/* Feature 1: Meetups */}
              <div className="bg-cream/40 p-8 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-soft-pink/20 rounded-full flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Local & Virtual Meetups</h3>
                <p className="text-charcoal/70 mb-6">
                  Join us for small group gatherings, prayer nights, and live conversations. Whether in person 
                  or online, this is where sisterhood gets real.
                </p>
                <Link href="#">
                  <span className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer text-sm font-medium">
                    Explore Upcoming Meetups
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </div>
              
              {/* Feature 2: Coaching */}
              <div className="bg-cream/40 p-8 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-soft-pink/20 rounded-full flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Coaching & Mentorship</h3>
                <p className="text-charcoal/70 mb-6">
                  Need guidance in a specific season? Explore 1:1 coaching or join group mentorship sessions 
                  designed to help you grow in identity, holiness, and purpose.
                </p>
                <Link href="#">
                  <span className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer text-sm font-medium">
                    Learn About Coaching Options
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </div>
              
              {/* Feature 3: Prayer Support */}
              <div className="bg-cream/40 p-8 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-soft-pink/20 rounded-full flex items-center justify-center mb-6">
                  <BookHeart className="w-7 h-7 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Prayer & Support Circle</h3>
                <p className="text-charcoal/70 mb-6">
                  Have a prayer request or just need a safe space to be heard? Submit a request or join 
                  our prayer thread. You're not in this alone.
                </p>
                <Link href="#">
                  <span className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer text-sm font-medium">
                    Submit a Prayer Request
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </div>
              
              {/* Feature 4: Member Stories */}
              <div className="bg-cream/40 p-8 rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-14 h-14 bg-soft-pink/20 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-charcoal">Member Spotlights & Stories</h3>
                <p className="text-charcoal/70 mb-6">
                  Celebrate the women walking this journey. Read real stories of transformation, purpose, 
                  and growth from our community members.
                </p>
                <Link href="#">
                  <span className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer text-sm font-medium">
                    Read Community Stories
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </span>
                </Link>
              </div>
            </div>
            
            {/* Divider */}
            <div className="w-full h-px bg-soft-pink/20 my-12 md:my-20"></div>
            
            {/* Coming Soon Banner */}
            <div className="bg-soft-pink/10 p-6 md:p-8 rounded-lg mb-16 text-center">
              <p className="text-charcoal/70 text-sm">
                Our community features will be launching soon! Sign up for our newsletter to be notified 
                when these resources become available.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-soft-pink/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-cursive text-charcoal mb-6">Ready to grow with us?</h2>
            <p className="text-lg text-charcoal/80 mb-10 max-w-2xl mx-auto">
              Whether you're just discovering Priestly Daughters or you've been here from the start—there's 
              space for you in this sisterhood.
            </p>
            
            {/* CTA Buttons Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
              <a 
                href="#" 
                className="bg-soft-pink hover:bg-soft-pink/90 text-white py-3 px-5 rounded-lg transition-colors flex items-center justify-center"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Join the Circle
              </a>
              <a 
                href="#" 
                className="bg-white hover:bg-cream transition-colors text-charcoal py-3 px-5 rounded-lg border border-soft-pink/30 flex items-center justify-center"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Sign Up for Meetups
              </a>
              <a 
                href="#" 
                className="bg-white hover:bg-cream transition-colors text-charcoal py-3 px-5 rounded-lg border border-soft-pink/30 flex items-center justify-center"
              >
                <Heart className="w-5 h-5 mr-2" />
                Request Coaching
              </a>
              <a 
                href="#" 
                className="bg-white hover:bg-cream transition-colors text-charcoal py-3 px-5 rounded-lg border border-soft-pink/30 flex items-center justify-center"
              >
                <BookHeart className="w-5 h-5 mr-2" />
                Submit a Prayer
              </a>
            </div>
            
            {/* Have Questions Link */}
            <div className="mt-8">
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