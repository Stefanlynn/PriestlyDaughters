import React from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-cursive text-charcoal mb-10">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-charcoal/80">
                Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <p className="lead">
                Priestly Daughters values your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website.
              </p>
              
              <h2>What We Collect</h2>
              <p>
                When you visit our site, fill out a form, or sign up for emails, we may collect:
              </p>
              <ul>
                <li>Your name and email address</li>
                <li>Your message or form responses</li>
                <li>Event or coaching inquiry details</li>
                <li>Your IP address (automatically collected for analytics purposes)</li>
              </ul>
              
              <h2>How We Use Your Information</h2>
              <p>
                We use your information to:
              </p>
              <ul>
                <li>Respond to inquiries or prayer requests</li>
                <li>Send community updates, blog posts, or event info (if you opt in)</li>
                <li>Improve the experience of our website</li>
              </ul>
              <p>
                We do not sell, share, or trade your personal information.
              </p>
              
              <h2>Your Rights</h2>
              <p>
                You can request to view, update, or delete your personal information at any time by contacting us at <a href="mailto:Priestlydaughter12@gmail.com" className="text-soft-pink hover:underline">Priestlydaughter12@gmail.com</a>.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>Cookies Policy</h2>
              <p>
                This site uses cookies—small data files stored on your device—to help us analyze traffic and improve the site's performance.
              </p>
              
              <h3>What Cookies Do</h3>
              <p>
                Cookies help us:
              </p>
              <ul>
                <li>Understand how visitors use the site</li>
                <li>Remember your preferences</li>
                <li>Offer a better browsing experience</li>
              </ul>
              
              <p>
                By using this site, you agree to our use of cookies. You can disable cookies anytime in your browser settings, though some site features may not function as expected.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>Contact</h2>
              <p>
                If you have questions about this policy or how your data is handled, please reach out to us at:
                <a href="mailto:Priestlydaughter12@gmail.com" className="text-soft-pink hover:underline ml-1">
                  Priestlydaughter12@gmail.com
                </a>
              </p>
            </div>
            
            <div className="mt-12">
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
      
      <Footer />
    </div>
  );
};

export default Privacy;