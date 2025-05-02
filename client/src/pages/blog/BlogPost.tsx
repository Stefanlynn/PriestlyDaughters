import React from 'react';
import { useRoute } from 'wouter';
import { getBlogPostBySlug } from '../../lib/blog-data';
import Header from '../../components/Header';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

const BlogPost: React.FC = () => {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || '';
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-cream">
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl font-light text-charcoal mb-4">Blog Post Not Found</h1>
          <p className="mb-8">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link href="/">
            <span className="text-tan-dark hover:text-tan font-medium">
              &larr; Back to Home
            </span>
          </Link>
        </div>
      </div>
    );
  }

  // Format content by replacing line breaks with <br> tags and adding paragraph breaks
  const formattedContent = post.content
    .split('\n\n')
    .map((paragraph, index) => {
      // Skip empty paragraphs
      if (!paragraph.trim()) return null;
      
      return (
        <p key={index} className="mb-6 text-charcoal/90 leading-relaxed">
          {paragraph.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < paragraph.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      );
    })
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      {/* Full-width hero section with blog image */}
      <div className="relative w-full h-[70vh] overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        {/* No text overlay on the image */}
      </div>
      
      {/* Content section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Title displayed underneath the image, styled for emphasis */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-charcoal mb-10 text-center font-cursive">{post.title}</h1>
          
          {/* Decorative element */}
          <div className="flex justify-center mb-12">
            <div className="h-px w-16 bg-tan-dark/30"></div>
            <div className="mx-4 text-tan-dark opacity-50">✦</div>
            <div className="h-px w-16 bg-tan-dark/30"></div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {formattedContent}
          </div>
          
          <div className="mt-12 pt-8 border-t border-tan-light/20 flex flex-col items-center">
            <div className="flex flex-wrap gap-6 w-full mb-8">
              <Link href="/">
                <span className="inline-flex items-center text-tan-dark hover:text-tan-light transition-colors cursor-pointer">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </span>
              </Link>
            </div>
            
            <Link href="/blog">
              <div className="inline-block px-8 py-3 bg-white text-charcoal rounded-full shadow-md hover:shadow-lg transition-all border border-tan-dark/20 cursor-pointer">
                View All Posts
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;