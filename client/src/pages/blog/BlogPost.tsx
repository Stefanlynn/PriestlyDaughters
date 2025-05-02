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
          <Link href="/" className="text-tan-dark hover:text-tan font-medium">
            &larr; Back to Home
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
      
      {/* Hero section with blog image */}
      <div className="relative w-full h-[60vh] overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-light text-white mb-4">{post.title}</h1>
          </div>
        </div>
      </div>
      
      {/* Content section */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link href="/" className="inline-flex items-center text-tan-dark hover:text-tan-light mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          
          <div className="prose prose-lg max-w-none">
            {formattedContent}
          </div>
          
          <div className="mt-12 pt-8 border-t border-tan-light/20">
            <Link href="/" className="inline-flex items-center text-tan-dark hover:text-tan-light transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;