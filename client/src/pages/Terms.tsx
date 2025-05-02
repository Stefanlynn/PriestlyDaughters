import React from 'react';
import { Link } from 'wouter';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-cream flex flex-col">
      <Header />
      
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-cursive text-charcoal mb-10">Terms of Use</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-charcoal/80">
                Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
              
              <p className="lead">
                Welcome to the Priestly Daughters website. By using this site, you agree to the following terms and conditions. Please read them carefully.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>1. Use of Website</h2>
              <p>
                This website is intended to provide encouragement, resources, and information related to faith, purpose, and spiritual growth. By accessing or using the site, you agree not to misuse the content or attempt to disrupt the site's functionality.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>2. Intellectual Property</h2>
              <p>
                All content on this site—including blog posts, graphics, logos, downloadable resources, and media—is the property of Priestly Daughters Ministry, Inc. or its content creators. You may not reproduce, distribute, or share any material without written permission.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>3. Coaching & Advice</h2>
              <p>
                Any coaching or mentorship content shared on this site or through related services is for spiritual and personal development purposes only. It is not a substitute for licensed counseling, legal, or professional advice. Always seek qualified help when needed.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>4. User Submissions</h2>
              <p>
                By submitting a form, prayer request, or message through our site, you give Priestly Daughters permission to contact you in response. We will never publish or share your submissions publicly without your consent.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>5. Links to Other Sites</h2>
              <p>
                This site may include links to third-party websites, such as Facebook or event platforms. We are not responsible for the privacy practices or content of those sites.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>6. Termination or Suspension</h2>
              <p>
                We reserve the right to restrict access to the site, remove content, or suspend services at any time, especially if misuse or harmful behavior is identified.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>7. Changes to These Terms</h2>
              <p>
                We may update these terms from time to time. Continued use of the site after changes are made constitutes your agreement to the revised terms.
              </p>
              
              <hr className="my-8 border-t border-gray-300" />
              
              <h2>Contact</h2>
              <p>
                If you have any questions about these terms, please contact us at:
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

export default Terms;