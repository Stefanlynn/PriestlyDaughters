import React from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import { blogPosts } from '../lib/blog-data';

const BlogCard: React.FC<{
  title: string;
  description: string;
  coverImage: string;
  slug: string;
}> = ({ title, description, coverImage, slug }) => {
  return (
    <div className="blog-card bg-white rounded-lg overflow-hidden shadow-md mx-2 flex flex-col h-full">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-lg font-medium mb-3 text-charcoal line-clamp-2 min-h-[3.5rem]">{title}</h3>
        <p className="text-charcoal/80 mb-4 text-sm line-clamp-3 flex-grow">{description}</p>
        <div className="mt-auto pt-3 border-t border-tan-light/30">
          <Link href={`/blog/${slug}`}>
            <span className="inline-flex items-center text-tan-dark hover:text-soft-pink transition-colors cursor-pointer text-sm font-medium">
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-charcoal mb-4 font-light">From the Blog</h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto font-light">Inspiration, encouragement, and wisdom for your journey of faith and purpose.</p>
        </div>
        
        <div className="relative max-w-[90%] mx-auto">
          {/* Subtle indicator that this is scrollable */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-full bg-gradient-to-l from-cream to-transparent pointer-events-none z-10"></div>
          
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex pl-8" style={{ width: 'max-content' }}>
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className={`w-[330px] md:w-[380px] px-3 flex-shrink-0 ${index === 0 ? 'ml-0' : ''}`}
                >
                  <BlogCard
                    title={post.title}
                    description={post.description}
                    coverImage={post.coverImage}
                    slug={post.slug}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/blog">
            <div className="inline-block px-8 py-3 bg-white text-charcoal rounded-full shadow-md hover:shadow-lg transition-all border border-tan-dark/20 cursor-pointer">
              View All Posts
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;