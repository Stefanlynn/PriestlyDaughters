import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Mail, Instagram, Facebook, Calendar, Youtube, MapPin, Send, Heart } from 'lucide-react';
import Header from '../components/Header';

const Contact = () => {
  const [reasonForContact, setReasonForContact] = useState('');
  
  const handleReasonChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setReasonForContact(e.target.value);
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero section with elegant design */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-soft-pink/30 to-soft-pink/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="relative pb-14">
              {/* Decorative elements */}
              <div className="absolute w-16 h-16 top-0 left-0 border-t-2 border-l-2 border-soft-pink opacity-40"></div>
              <div className="absolute w-16 h-16 top-0 right-0 border-t-2 border-r-2 border-soft-pink opacity-40"></div>
              <div className="absolute w-16 h-16 bottom-0 left-0 border-b-2 border-l-2 border-soft-pink opacity-40"></div>
              <div className="absolute w-16 h-16 bottom-0 right-0 border-b-2 border-r-2 border-soft-pink opacity-40"></div>
              
              {/* Content */}
              <div className="text-center px-6 md:px-12 py-10">
                <h1 className="text-3xl md:text-5xl font-cursive text-charcoal mb-6">Let's Connect</h1>
                
                <div className="flex justify-center mb-8">
                  <Heart className="text-soft-pink w-6 h-6 mx-2 opacity-70" />
                  <div className="w-16 h-0.5 bg-soft-pink/40 self-center"></div>
                  <Heart className="text-soft-pink w-6 h-6 mx-2 opacity-70" />
                </div>
                
                <p className="text-lg text-charcoal/80 leading-relaxed max-w-2xl mx-auto">
                  We're here to answer your questions, listen to your prayer requests, 
                  and help you join our community of faithful women.
                </p>
              </div>
            </div>
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
                    Have a question, prayer request, or want to join our community? Fill out the form below 
                    and we'll get back to you as soon as possible. Please select the appropriate reason 
                    so we know what you're reaching out about.
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
                      <div className="relative">
                        <select 
                          name="subject" 
                          id="subject" 
                          value={reasonForContact}
                          onChange={handleReasonChange}
                          className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                        >
                          <option value="">Select a reason</option>
                          <option value="general">General Inquiry</option>
                          <option value="prayer">Prayer Request</option>
                          <option value="coaching">Request Coaching</option>
                          <option value="speaking">Speaking Engagement</option>
                          <option value="other">Other</option>
                        </select>
                        {reasonForContact && (
                          <div className="absolute right-3 top-3 text-soft-pink/70 animate-pulse-once text-xs">
                            Additional fields available
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* Dynamic fields based on reason for contact */}
                    {reasonForContact === 'speaking' && (
                      <div className="space-y-6 border-l-4 border-soft-pink/40 pl-4 py-2 bg-cream/20 rounded-r-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="eventName" className="block text-charcoal font-medium mb-2 text-sm">Event Name / Title</label>
                            <input 
                              type="text" 
                              name="eventName" 
                              id="eventName" 
                              className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                              placeholder="e.g. Women's Conference 2025"
                            />
                          </div>
                          <div>
                            <label htmlFor="eventDate" className="block text-charcoal font-medium mb-2 text-sm">Date(s) of the Event</label>
                            <input 
                              type="text" 
                              name="eventDate" 
                              id="eventDate" 
                              className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                              placeholder="Single date or date range"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="eventLocation" className="block text-charcoal font-medium mb-2 text-sm">Event Location</label>
                            <input 
                              type="text" 
                              name="eventLocation" 
                              id="eventLocation" 
                              className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                              placeholder="City, State, or 'Virtual' if online"
                            />
                          </div>
                          <div>
                            <label htmlFor="organizationName" className="block text-charcoal font-medium mb-2 text-sm">Organization / Church Name</label>
                            <input 
                              type="text" 
                              name="organizationName" 
                              id="organizationName" 
                              className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                              placeholder="Your organization's name"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="eventType" className="block text-charcoal font-medium mb-2 text-sm">Type of Event</label>
                            <select 
                              name="eventType" 
                              id="eventType" 
                              className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                            >
                              <option value="">Select event type</option>
                              <option value="Conference">Conference</option>
                              <option value="Church Service">Church Service</option>
                              <option value="Panel">Panel</option>
                              <option value="Workshop">Workshop</option>
                              <option value="Retreat">Retreat</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="audienceSize" className="block text-charcoal font-medium mb-2 text-sm">Estimated Audience Size</label>
                            <input 
                              type="text" 
                              name="audienceSize" 
                              id="audienceSize" 
                              className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                              placeholder="Approximate number of attendees"
                            />
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="speakerRole" className="block text-charcoal font-medium mb-2 text-sm">Expected Role</label>
                            <select 
                              name="speakerRole" 
                              id="speakerRole" 
                              className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                            >
                              <option value="">Select role</option>
                              <option value="Keynote Speaker">Keynote Speaker</option>
                              <option value="Workshop Facilitator">Workshop Facilitator</option>
                              <option value="Panelist">Panelist</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                          <div>
                            <label htmlFor="budget" className="block text-charcoal font-medium mb-2 text-sm">Budget / Honorarium (optional)</label>
                            <input 
                              type="text" 
                              name="budget" 
                              id="budget" 
                              className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                              placeholder="Available budget for the speaker"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="topicTheme" className="block text-charcoal font-medium mb-2 text-sm">Topic or Theme</label>
                          <input 
                            type="text" 
                            name="topicTheme" 
                            id="topicTheme" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                            placeholder="What you'd like Elizabeth to speak on"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="contactPersonDetails" className="block text-charcoal font-medium mb-2 text-sm">Contact Person's Details</label>
                          <input 
                            type="text" 
                            name="contactPersonDetails" 
                            id="contactPersonDetails" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                            placeholder="Full Name, Email, and Phone Number"
                          />
                        </div>
                      </div>
                    )}
                    
                    {reasonForContact === 'prayer' && (
                      <div className="space-y-6 border-l-4 border-soft-pink/40 pl-4 py-2 bg-cream/20 rounded-r-lg">
                        <div>
                          <label htmlFor="prayerType" className="block text-charcoal font-medium mb-2 text-sm">Type of Prayer Request</label>
                          <select 
                            name="prayerType" 
                            id="prayerType" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="">Select a prayer type</option>
                            <option value="Personal">Personal</option>
                            <option value="Family">Family</option>
                            <option value="Healing">Healing</option>
                            <option value="Guidance">Guidance</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="prayerUrgency" className="block text-charcoal font-medium mb-2 text-sm">Urgency</label>
                          <select 
                            name="prayerUrgency" 
                            id="prayerUrgency" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="">Select urgency level</option>
                            <option value="Immediate">Immediate (within 24 hours)</option>
                            <option value="This Week">This Week</option>
                            <option value="Ongoing">Ongoing</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="shareWithCommunity" className="block text-charcoal font-medium mb-2 text-sm">Share With Community?</label>
                          <select 
                            name="shareWithCommunity" 
                            id="shareWithCommunity" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="No">No - Keep private</option>
                            <option value="Yes, Anonymous">Yes, but keep me anonymous</option>
                            <option value="Yes, With Name">Yes, can share my name</option>
                          </select>
                        </div>
                      </div>
                    )}
                    
                    {reasonForContact === 'general' && (
                      <div className="space-y-6 border-l-4 border-soft-pink/40 pl-4 py-2 bg-cream/20 rounded-r-lg">
                        <div>
                          <label htmlFor="inquiryTopic" className="block text-charcoal font-medium mb-2 text-sm">Topic of Inquiry</label>
                          <select 
                            name="inquiryTopic" 
                            id="inquiryTopic" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="">Select topic</option>
                            <option value="Ministry Information">Ministry Information</option>
                            <option value="Events">Upcoming Events</option>
                            <option value="Resources">Resources</option>
                            <option value="Volunteer">Volunteer Opportunities</option>
                            <option value="Community">Community Engagement</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="preferredResponseMethod" className="block text-charcoal font-medium mb-2 text-sm">Preferred Response Method</label>
                          <select 
                            name="preferredResponseMethod" 
                            id="preferredResponseMethod" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="Email">Email</option>
                            <option value="Phone">Phone</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="phoneForGeneral" className="block text-charcoal font-medium mb-2 text-sm">Phone Number (if preferred contact method)</label>
                          <input 
                            type="tel" 
                            name="phoneForGeneral" 
                            id="phoneForGeneral" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                    )}
                    
                    {reasonForContact === 'other' && (
                      <div className="space-y-6 border-l-4 border-soft-pink/40 pl-4 py-2 bg-cream/20 rounded-r-lg">
                        <div>
                          <label htmlFor="otherTopic" className="block text-charcoal font-medium mb-2 text-sm">What is this regarding?</label>
                          <input 
                            type="text" 
                            name="otherTopic" 
                            id="otherTopic" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                            placeholder="Brief description of your inquiry"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="preferredResponseOther" className="block text-charcoal font-medium mb-2 text-sm">Preferred Response Method</label>
                          <select 
                            name="preferredResponseOther" 
                            id="preferredResponseOther" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="Email">Email</option>
                            <option value="Phone">Phone</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="phoneForOther" className="block text-charcoal font-medium mb-2 text-sm">Phone Number (if preferred contact method)</label>
                          <input 
                            type="tel" 
                            name="phoneForOther" 
                            id="phoneForOther" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                    )}
                    
                    {reasonForContact === 'coaching' && (
                      <div className="space-y-6 border-l-4 border-soft-pink/40 pl-4 py-2 bg-cream/20 rounded-r-lg">
                        <div>
                          <label htmlFor="coachingType" className="block text-charcoal font-medium mb-2 text-sm">Type of Coaching Interest</label>
                          <select 
                            name="coachingType" 
                            id="coachingType" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="">Select coaching type</option>
                            <option value="Individual">Individual Coaching</option>
                            <option value="Group">Group Coaching</option>
                            <option value="Workshop">Workshop</option>
                            <option value="Not Sure">Not Sure Yet</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="topicArea" className="block text-charcoal font-medium mb-2 text-sm">Area of Focus</label>
                          <select 
                            name="topicArea" 
                            id="topicArea" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="">Select focus area</option>
                            <option value="Spiritual Growth">Spiritual Growth</option>
                            <option value="Leadership">Leadership</option>
                            <option value="Personal Development">Personal Development</option>
                            <option value="Ministry">Ministry</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="timeframe" className="block text-charcoal font-medium mb-2 text-sm">Preferred Timeframe</label>
                          <select 
                            name="timeframe" 
                            id="timeframe" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="">Select timeframe</option>
                            <option value="ASAP">As Soon As Possible</option>
                            <option value="Next 30 Days">Within the Next 30 Days</option>
                            <option value="Next 3 Months">Within the Next 3 Months</option>
                            <option value="Flexible">Flexible / Not Sure Yet</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="preferredContact" className="block text-charcoal font-medium mb-2 text-sm">Best Way to Contact You</label>
                          <select 
                            name="preferredContact" 
                            id="preferredContact" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                          >
                            <option value="Email">Email</option>
                            <option value="Phone">Phone</option>
                          </select>
                        </div>
                        
                        <div>
                          <label htmlFor="phoneNumber" className="block text-charcoal font-medium mb-2 text-sm">Phone Number (if preferred contact method)</label>
                          <input 
                            type="tel" 
                            name="phoneNumber" 
                            id="phoneNumber" 
                            className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                            placeholder="Your phone number"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="message" className="block text-charcoal font-medium mb-2 text-sm">
                        {reasonForContact === 'speaking' ? 'Additional Notes or Comments' : 'Message'}
                      </label>
                      <textarea 
                        name="message" 
                        id="message" 
                        rows={5} 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-tan-dark/20 focus:outline-none focus:ring-2 focus:ring-soft-pink/40 bg-white/80"
                        placeholder={reasonForContact === 'speaking' ? 'Any additional details or requirements...' : 'Your message here...'}
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