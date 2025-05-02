import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Mail, Instagram, Facebook } from 'lucide-react';
import Header from '../components/Header';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-soft-pink/40">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-cursive text-charcoal mb-8">Connect With Us</h1>
            <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
              We'd love to hear from you. Reach out with questions, prayer requests, or to learn more about Priestly Daughters.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-2xl md:text-3xl font-cursive text-tan-dark mb-8">Get in Touch</h2>
              <p className="text-charcoal/80 mb-12">
                Whether you have questions about our ministry or would like to connect with Elizabeth, 
                we're here to help. Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            {/* Contact options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-soft-pink/10 p-8 rounded-lg text-center">
                <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-charcoal/70 mb-4">For general inquiries and questions</p>
                <a href="mailto:contact@priestlydaughters.com" className="text-tan-dark hover:underline">
                  contact@priestlydaughters.com
                </a>
              </div>
              
              {/* Instagram */}
              <div className="bg-soft-pink/10 p-8 rounded-lg text-center">
                <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-6 h-6 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Instagram</h3>
                <p className="text-sm text-charcoal/70 mb-4">Follow for updates and inspiration</p>
                <a href="https://instagram.com/priestlydaughters" target="_blank" rel="noopener noreferrer" className="text-tan-dark hover:underline">
                  @priestlydaughters
                </a>
              </div>
              
              {/* Facebook */}
              <div className="bg-soft-pink/10 p-8 rounded-lg text-center">
                <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Facebook className="w-6 h-6 text-tan-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Facebook</h3>
                <p className="text-sm text-charcoal/70 mb-4">Join our community on Facebook</p>
                <a href="https://facebook.com/priestlydaughters" target="_blank" rel="noopener noreferrer" className="text-tan-dark hover:underline">
                  Priestly Daughters
                </a>
              </div>
            </div>
            
            {/* Coming soon message */}
            <div className="text-center mt-12">
              <p className="text-tan-dark/60 italic mb-8">
                Our contact form will be available soon. In the meantime, please reach out via email or social media.
              </p>
              
              {/* Back link */}
              <Link href="/">
                <a className="inline-flex items-center text-tan-dark/70 hover:text-tan-dark transition-colors">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;