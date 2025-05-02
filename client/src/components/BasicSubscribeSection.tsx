import React, { useState } from 'react';

/**
 * A beautifully designed subscription section with minimal dependencies
 */
const BasicSubscribeSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error'>('success');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setMessage('Please enter an email address.');
      setMessageType('error');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Call our API endpoint
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setMessage(data.message || 'Thank you for subscribing!');
        setMessageType('success');
        setEmail('');
      } else {
        setMessage(data.message || 'Something went wrong. Please try again.');
        setMessageType('error');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      setMessage('Network error. Please try again later.');
      setMessageType('error');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="py-24 bg-soft-pink relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-tan-light/40 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-tan-light/40 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-5">
              {/* Left decorative column */}
              <div className="hidden md:block md:col-span-2 bg-tan-dark/10 p-10 relative">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/powellfam-5.JPG')] bg-cover bg-center"></div>
                <div className="relative z-10 h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-tan-dark/20 rounded-full mb-6 flex items-center justify-center">
                    <div className="w-10 h-10 bg-tan-dark rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-white">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.981V19.5Z" />
                      </svg>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <p className="text-tan-dark/90 font-light italic">
                      "Join our community of women who are stepping into their divine purpose..."
                    </p>
                    <div className="w-12 h-0.5 bg-tan-dark/30"></div>
                    <p className="text-tan-dark/70 text-sm">
                      Priestly Daughters Community
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right content column */}
              <div className="p-8 md:p-10 md:col-span-3">
                <h2 className="font-cursive text-3xl md:text-4xl text-tan-dark mb-4">
                  Be the First to Know
                </h2>
                
                <p className="text-charcoal/80 font-light mb-8">
                  Step into a deeper journey of faith and purpose. Subscribe to receive exclusive updates, 
                  empowering teachings, and first access to all things Priestly Daughters.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      className="w-full h-12 px-5 py-3 border border-tan-dark/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-tan-dark/30 focus:border-transparent transition-all"
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 bg-tan-dark hover:bg-tan-dark/90 text-white rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span>Subscribing...</span>
                      </span>
                    ) : (
                      "Subscribe to Updates"
                    )}
                  </button>
                  
                  {message && (
                    <div className={`p-3 rounded-lg text-sm font-medium ${
                      messageType === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-100' 
                        : 'bg-red-50 text-red-700 border border-red-100'
                    }`}>
                      <div className="flex items-center">
                        {messageType === 'success' ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        )}
                        {message}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-xs text-charcoal/60 mt-4">
                    By subscribing, you agree to our privacy policy. We respect your inbox and will never share your information.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BasicSubscribeSection;