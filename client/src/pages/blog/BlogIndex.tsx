import React from 'react';
import { Link } from 'wouter';
import { blogPosts } from '../../lib/blog-data';
import Header from '../../components/Header';

const BlogIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light text-charcoal mb-12 text-center">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="block bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <Link href={`/blog/${post.slug}`}>
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.coverImage} 
                      alt={post.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-medium mb-3 text-charcoal">{post.title}</h2>
                    <p className="text-charcoal/80 line-clamp-3">{post.description}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/">
              <div className="inline-block px-8 py-3 bg-white text-charcoal rounded-full shadow-md hover:shadow-lg transition-all border border-tan-dark/20">
                Back to Home
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;