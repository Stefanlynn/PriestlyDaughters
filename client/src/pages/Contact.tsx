import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Mail, Instagram, Facebook, Calendar } from 'lucide-react';
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
      
      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="mb-16 text-center">
              <h2 className="text-2xl md:text-3xl font-cursive text-tan-dark mb-8">Get in Touch</h2>
              <p className="text-charcoal/80 mb-12">
                Whether you have questions about our ministry or would like to connect with Elizabeth, 
                we're here to help. Send us a message and we'll get back to you soon.
              </p>
            </div>
            
            {/* Contact form integrated with Netlify */}
            <div className="bg-cream/50 p-8 md:p-12 rounded-xl shadow-sm mb-20">
              <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="recipient" value="Priestlydaughter12@gmail.com" />
                
                <div>
                  <label htmlFor="name" className="block text-charcoal font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-charcoal font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-charcoal font-medium mb-2">Subject</label>
                  <select 
                    name="subject" 
                    id="subject" 
                    className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="prayer">Prayer Request</option>
                    <option value="speaking">Speaking Engagement</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-charcoal font-medium mb-2">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={6} 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                  ></textarea>
                </div>
                
                <div className="pt-4">
                  <button 
                    type="submit" 
                    className="px-8 py-3 rounded-lg bg-soft-pink hover:bg-soft-pink/80 text-white font-medium transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Other contact options */}
            <h3 className="text-xl md:text-2xl font-cursive text-tan-dark text-center mb-10">Other Ways to Connect</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Email */}
              <div className="bg-soft-pink/10 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-tan-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <p className="text-sm text-charcoal/70 mb-4">For general inquiries</p>
                <span className="text-tan-dark">
                  Priestlydaughter12@gmail.com
                </span>
              </div>
              
              {/* Book for Speaking */}
              <div className="bg-soft-pink/10 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-tan-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Book Elizabeth</h3>
                <p className="text-sm text-charcoal/70 mb-4">For speaking engagements</p>
                <span className="text-tan-dark">
                  Priestlydaughter12@gmail.com
                </span>
              </div>
              
              {/* Social Media */}
              <div className="bg-soft-pink/10 p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-soft-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-6 h-6 text-tan-dark" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Social Media</h3>
                <p className="text-sm text-charcoal/70 mb-4">Connect with us online</p>
                <span className="text-tan-dark">
                  @priestlydaughters
                </span>
              </div>
            </div>
            
            {/* Back link */}
            <div className="text-center mt-16">
              <Link href="/">
                <span className="inline-flex items-center text-tan-dark/70 hover:text-tan-dark transition-colors cursor-pointer">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;