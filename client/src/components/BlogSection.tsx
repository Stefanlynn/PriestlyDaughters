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
    <div className="blog-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden">
        <img 
          src={coverImage} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-medium mb-2 text-charcoal line-clamp-2 min-h-[3.5rem]">{title}</h3>
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
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -350,
        behavior: 'smooth'
      });
    }
  };
  
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 350,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl text-charcoal mb-4 font-light">From the Blog</h2>
            <p className="text-lg text-charcoal/80 font-light">Inspiration, encouragement, and wisdom for your journey of faith and purpose.</p>
          </div>
          
          {/* Navigation arrows for desktop */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={scrollLeft} 
              className="p-2 rounded-full bg-white shadow-md text-charcoal hover:bg-tan-light transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={scrollRight} 
              className="p-2 rounded-full bg-white shadow-md text-charcoal hover:bg-tan-light transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="relative mx-auto">
          {/* Left and right gradients to show there's more content */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-full bg-gradient-to-l from-cream to-transparent pointer-events-none z-10"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-8 h-full bg-gradient-to-r from-cream to-transparent pointer-events-none z-10"></div>
          
          {/* Mobile navigation */}
          <div className="md:hidden flex items-center justify-between mb-4 px-2">
            <button 
              onClick={scrollLeft} 
              className="p-2 rounded-full bg-white shadow-md text-charcoal"
              aria-label="Previous blog post"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <span className="text-sm text-charcoal/60">Swipe for more</span>
            
            <button 
              onClick={scrollRight} 
              className="p-2 rounded-full bg-white shadow-md text-charcoal animate-pulse"
              aria-label="Next blog post"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-6 hide-scrollbar"
          >
            <div className="flex pl-4 pr-16" style={{ width: 'max-content' }}>
              {blogPosts.map((post, index) => (
                <div 
                  key={post.id} 
                  className={`w-[85%] md:w-[340px] px-2 flex-shrink-0 ${index === 0 ? 'ml-0' : ''}`}
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
          
          {/* Visual scroll indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {blogPosts.slice(0, Math.min(5, blogPosts.length)).map((_, index) => (
              <div 
                key={index} 
                className={`h-1.5 rounded-full ${index === 0 ? 'w-6 bg-tan-dark' : 'w-2 bg-tan-light'}`}
              ></div>
            ))}
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