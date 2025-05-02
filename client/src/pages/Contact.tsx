import React from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Mail, Instagram, Facebook, Calendar, Youtube, MapPin, Send } from 'lucide-react';
import Header from '../components/Header';
import backgroundImage from '@assets/silhouette-of-reaching-helping-hand-hope-and-support-each-other-over-sunset-people-han-SBI-349512636.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero section with background image */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" 
          style={{ 
            backgroundImage: `url(${backgroundImage})` 
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-soft-pink/40 to-soft-pink/60"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-cursive text-charcoal mb-8">Let's Connect</h1>
            <p className="text-lg text-charcoal/90 leading-relaxed max-w-2xl mx-auto">
              We're here to answer your questions, listen to your prayer requests, 
              and help you join our community of faithful women.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Two column layout for form and contact info */}
            <div className="flex flex-col md:flex-row gap-10 lg:gap-16">
              
              {/* Contact form column */}
              <div className="w-full md:w-7/12">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-cursive text-tan-dark mb-4">Send a Message</h2>
                  <div className="w-20 h-1 bg-soft-pink mb-6"></div>
                  <p className="text-charcoal/80">
                    Have a question or want to connect? Fill out the form below and we'll 
                    get back to you as soon as possible.
                  </p>
                </div>
                
                {/* Contact form integrated with Netlify */}
                <div className="bg-cream/30 p-8 rounded-xl shadow-sm border border-soft-pink/10">
                  <form name="contact" method="POST" data-netlify="true" className="space-y-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <input type="hidden" name="recipient" value="Priestlydaughter12@gmail.com" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-charcoal font-medium mb-2 text-sm">Name</label>
                        <input 
                          type="text" 
                          name="name" 
                          id="name" 
                          required 
                          className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-charcoal font-medium mb-2 text-sm">Email</label>
                        <input 
                          type="email" 
                          name="email" 
                          id="email" 
                          required 
                          className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          placeholder="Your email address"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-charcoal font-medium mb-2 text-sm">Reason for Contact</label>
                      <select 
                        name="subject" 
                        id="subject" 
                        className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                      >
                        <option value="">Select a reason</option>
                        <option value="general">General Inquiry</option>
                        <option value="prayer">Prayer Request</option>
                        <option value="speaking">Speaking Engagement</option>
                        <option value="community">Join Our Community</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-charcoal font-medium mb-2 text-sm">Message</label>
                      <textarea 
                        name="message" 
                        id="message" 
                        rows={5} 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                        placeholder="Your message here..."
                      ></textarea>
                    </div>
                    
                    <div className="pt-2">
                      <button 
                        type="submit" 
                        className="px-8 py-3 rounded-lg bg-soft-pink hover:bg-soft-pink/90 text-white font-medium transition-colors duration-200 flex items-center"
                      >
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              {/* Contact info column */}
              <div className="w-full md:w-5/12">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-cursive text-tan-dark mb-4">Contact Information</h2>
                  <div className="w-20 h-1 bg-soft-pink mb-6"></div>
                  <p className="text-charcoal/80">
                    We'd love to hear from you. You can reach out to us directly through 
                    any of the following ways:
                  </p>
                </div>
                
                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="bg-cream/30 p-6 rounded-lg border-l-4 border-soft-pink/40 flex items-start">
                    <div className="w-10 h-10 bg-soft-pink/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Mail className="w-5 h-5 text-tan-dark" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Email Us</h3>
                      <p className="text-sm text-charcoal/70 mb-2">For general inquiries:</p>
                      <a 
                        href="mailto:Priestlydaughter12@gmail.com" 
                        className="text-tan-dark hover:text-tan-dark/70 transition-colors text-sm"
                      >
                        Priestlydaughter12@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Book for Speaking */}
                  <div className="bg-cream/30 p-6 rounded-lg border-l-4 border-soft-pink/40 flex items-start">
                    <div className="w-10 h-10 bg-soft-pink/20 rounded-full flex items-center justify-center mr-4 shrink-0">
                      <Calendar className="w-5 h-5 text-tan-dark" />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold mb-1">Book Elizabeth</h3>
                      <p className="text-sm text-charcoal/70 mb-2">For speaking engagements:</p>
                      <a 
                        href="mailto:Priestlydaughter12@gmail.com?subject=Speaking%20Engagement%20Request" 
                        className="text-tan-dark hover:text-tan-dark/70 transition-colors text-sm"
                      >
                        Priestlydaughter12@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Social Media Card */}
                  <div className="bg-soft-pink/10 p-6 rounded-lg border-l-4 border-soft-pink/40">
                    <h3 className="text-base font-semibold mb-3">Connect on Social Media</h3>
                    <div className="flex items-center gap-5 mt-4">
                      {/* Instagram */}
                      <a 
                        href="https://www.instagram.com/priestlydaughter?igsh=MnhyY25sbGVxemE3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="Instagram"
                      >
                        <div className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                          <Instagram className="w-5 h-5 text-tan-dark" />
                        </div>
                      </a>
                      
                      {/* Facebook */}
                      <a 
                        href="https://www.facebook.com/share/1DFNGXxVfY/?mibextid=wwXIfr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="Facebook"
                      >
                        <div className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                          <Facebook className="w-5 h-5 text-tan-dark" />
                        </div>
                      </a>
                      
                      {/* YouTube */}
                      <a 
                        href="https://www.youtube.com/channel/UC53UiFAW64n4NvMClDt1-xQ" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group"
                        aria-label="YouTube"
                      >
                        <div className="w-10 h-10 bg-white/60 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                          <Youtube className="w-5 h-5 text-tan-dark" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial or Quote Card */}
                <div className="bg-soft-pink/20 p-6 rounded-lg mt-8 relative">
                  <div className="text-4xl text-soft-pink/30 absolute top-4 left-4">"</div>
                  <blockquote className="text-charcoal/90 italic text-sm pt-4 px-3 relative z-10">
                    God hears every prayer and sees every tear. Reach out, connect, and let's journey together in faith.
                  </blockquote>
                  <div className="text-right text-tan-dark/80 mt-3 text-sm">- Elizabeth Powell</div>
                </div>
              </div>
            </div>
            
            {/* Back link */}
            <div className="text-center mt-20">
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