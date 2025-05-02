import React from 'react';
import { Link } from 'wouter';
import { blogPosts } from '../../lib/blog-data';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const BlogIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Hero section with soft background */}
      <div className="w-full bg-gradient-to-b from-tan-light/30 to-cream py-24 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-light text-charcoal mb-10 font-cursive">Blog</h1>
            
            {/* Introduction text */}
            <div className="space-y-6 text-center">
              <p className="text-charcoal/90 text-lg leading-relaxed">
                Welcome to the Priestly Daughters blog—a space created for women walking through real life with real purpose.
              </p>
              
              <p className="text-charcoal/80 text-lg leading-relaxed">
                Here, you'll find reflections on identity, faith, motherhood, leadership, and everything in between.
                <br />
                These are not just devotionals—they're honest conversations.
                <br />
                Written to encourage, equip, and remind you that you are not alone on the journey.
              </p>
              
              <p className="text-charcoal/90 text-lg leading-relaxed">
                So whether you're leading from the front or quietly rebuilding in the background—there's something here for you.
              </p>
              
              <p className="text-charcoal font-medium text-xl mt-8 font-cursive italic">
                Let's grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Decorative element */}
          <div className="flex justify-center mb-10">
            <div className="h-px w-16 bg-tan-dark/30"></div>
            <div className="mx-4 text-tan-dark opacity-50">✦</div>
            <div className="h-px w-16 bg-tan-dark/30"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
            {blogPosts.map(post => (
              <div key={post.id} className="group block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-7">
                    <h2 className="text-xl font-medium mb-3 text-charcoal">{post.title}</h2>
                    <p className="text-charcoal/80 line-clamp-3 mb-4">{post.description}</p>
                    <div className="text-tan-dark text-sm font-medium group-hover:text-tan transition-colors">Read More →</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Link href="/">
              <div className="inline-block px-8 py-3 bg-white text-charcoal rounded-full shadow-md hover:shadow-lg transition-all border border-tan-dark/20">
                Back to Home
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BlogIndex;