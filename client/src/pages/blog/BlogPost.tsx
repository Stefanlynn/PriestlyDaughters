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

  // Format content with enhanced styling
  const formattedContent = post.content
    .split('\n\n')
    .map((paragraph, index) => {
      // Skip empty paragraphs
      if (!paragraph.trim()) return null;
      
      // Skip the title paragraph (first non-empty paragraph) as we're displaying it separately
      if (index === 0) return null;
      
      // Check if paragraph is a short one (could be a callout or quote)
      const isShortParagraph = paragraph.trim().length < 100 && paragraph.trim().length > 10;
      
      // Check if paragraph ends with a question mark (potential question)
      const isQuestion = paragraph.trim().endsWith('?');
      
      if (isShortParagraph && !isQuestion) {
        // Style short paragraphs as callouts/emphasis text
        return (
          <p key={index} className="my-10 text-xl md:text-2xl text-tan-dark font-cursive text-center px-4">
            {paragraph.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < paragraph.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      } else if (isQuestion) {
        // Style questions with emphasis
        return (
          <p key={index} className="mb-6 text-charcoal/90 leading-relaxed font-medium italic">
            {paragraph.split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < paragraph.split('\n').length - 1 && <br />}
              </React.Fragment>
            ))}
          </p>
        );
      } else {
        // Regular paragraphs
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
      }
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
          
          <div className="prose prose-lg max-w-none prose-p:text-charcoal/90 prose-headings:text-charcoal prose-headings:font-light">
            {/* Initial quotation mark for visual appeal */}
            <div className="text-tan-dark/20 text-8xl font-cursive leading-none mb-6">"</div>
            
            {formattedContent}
            
            {/* Closing quotation mark for visual appeal */}
            <div className="text-tan-dark/20 text-8xl font-cursive leading-none text-right mt-6">"</div>
          </div>
          
          <div className="mt-16 pt-10 flex flex-col items-center">
            {/* Decorative element */}
            <div className="flex justify-center mb-10">
              <div className="h-px w-20 bg-tan-dark/20"></div>
              <div className="mx-4 text-tan-dark/40 text-sm">✧</div>
              <div className="h-px w-20 bg-tan-dark/20"></div>
            </div>
            
            <Link href="/blog">
              <div className="inline-block mb-12 px-10 py-4 bg-white text-charcoal rounded-full shadow-sm hover:shadow-md transition-all border border-tan-dark/30 cursor-pointer font-light tracking-wide">
                View All Posts
              </div>
            </Link>

            <div className="flex flex-wrap gap-6 w-full mt-4 justify-center">
              <Link href="/">
                <span className="inline-flex items-center text-tan-dark/70 hover:text-tan-dark transition-colors cursor-pointer text-sm">
                  <ArrowLeft className="w-3 h-3 mr-2" />
                  Back to Home
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;