import React, { useState } from 'react';

/**
 * A simplified subscription section with minimal dependencies
 */
const BasicSubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter an email address.');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate submission
    setTimeout(() => {
      setMessage('Thank you for subscribing!');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };
  
  return (
    <section className="py-20 bg-tan-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cursive text-3xl md:text-4xl text-charcoal mb-4">
            Be the First to Know
          </h2>
          
          <p className="text-lg md:text-xl text-charcoal/80 font-light max-w-2xl mx-auto mb-10">
            Step into a deeper journey of faith and purpose. Subscribe to receive exclusive updates, 
            empowering teachings, and first access to all things Priestly Daughters.
          </p>
          
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="h-12 rounded-full px-5 border border-tan-dark/30 flex-1"
                />
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="h-12 bg-tan-dark hover:bg-tan-dark/90 text-white rounded-full px-8"
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
            </form>
            
            {message && (
              <p className="mt-4 text-sm font-medium text-charcoal">{message}</p>
            )}
            
            <p className="text-xs text-charcoal/60 mt-4">
              By subscribing, you agree to our privacy policy. We respect your inbox and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicSubscribeSection;