import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Mock blog data
const blogPosts = [
  {
    id: 1,
    title: "When You Feel Called, But Unqualified",
    description: "You feel it in your spirit—this pull toward more. Maybe it's starting that thing God's been whispering to you about. Maybe it's stepping into a new level of leadership, purpose, or influence.",
    coverImage: "/images/blog-1.jpg",
    slug: "when-you-feel-called-but-unqualified"
  },
  {
    id: 2,
    title: "The Sacred Work of Slowing Down",
    description: "Let's be honest: as women, we carry a lot. We manage homes, raise children, lead teams, care for communities, support our spouses, show up for our churches—and still try to carve out time for ourselves.",
    coverImage: "/images/blog-2.jpg",
    slug: "the-sacred-work-of-slowing-down"
  },
  {
    id: 3,
    title: "Becoming Her: The Journey Between Who You Were and Who You're Becoming",
    description: "There's a version of you that God is shaping—strong, steady, full of wisdom, confident in your identity, and clear about your calling. But between who you've been and who you're becoming… there's a gap.",
    coverImage: "/images/blog-3.jpg",
    slug: "becoming-her"
  },
  {
    id: 4,
    title: "The Pressure to Be Everything, All at Once",
    description: "There's this unspoken pressure many women carry—to be everything, to everyone, all at once. The perfect mom. The loving wife. The prayer warrior. The helper. The planner. The fixer.",
    coverImage: "/images/blog-4.jpg",
    slug: "the-pressure-to-be-everything"
  },
  {
    id: 5,
    title: "You're Not Behind—You're Being Prepared",
    description: "Have you ever looked around and felt like everyone else is further ahead? They're launching things, writing books, raising perfect kids, building empires—and you're just trying to survive the week.",
    coverImage: "/images/blog-5.jpg",
    slug: "youre-not-behind"
  }
];

const BlogCard: React.FC<{
  title: string;
  description: string;
  coverImage: string;
  slug: string;
}> = ({ title, description, coverImage, slug }) => {
  return (
    <div className="blog-card bg-white rounded-lg overflow-hidden shadow-md mx-1 flex flex-col h-full">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-tan-light flex items-center justify-center text-charcoal">
          {/* Placeholder for actual images */}
          <div className="w-full h-full bg-gradient-to-br from-tan-light to-cream flex items-center justify-center">
            <span className="font-cursive text-lg text-center px-4 opacity-80">Priestly Daughters</span>
          </div>
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-sm font-medium mb-2 text-charcoal line-clamp-2 min-h-[2.5rem]">{title}</h3>
        <p className="text-charcoal/80 mb-3 text-xs line-clamp-3 flex-grow">{description}</p>
        <div className="mt-auto">
          <a href={`/blog/${slug}`} className="text-tan-dark hover:text-tan-light font-medium text-xs transition-colors">
            Read More &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const [startIndex, setStartIndex] = React.useState(0);
  const visiblePosts = 5; // Number of cards shown at once - showing all 5 blog posts

  const showNext = () => {
    setStartIndex(prev => Math.min(prev + 1, blogPosts.length - visiblePosts));
  };

  const showPrev = () => {
    setStartIndex(prev => Math.max(prev - 1, 0));
  };

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-charcoal mb-4 font-light">From the Blog</h2>
          <p className="text-lg text-charcoal/80 max-w-3xl mx-auto font-light">Inspiration, encouragement, and wisdom for your journey of faith and purpose.</p>
        </div>
        
        <div className="relative">
          {/* Carousel controls */}
          <button 
            onClick={showPrev} 
            disabled={startIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white h-10 w-10 rounded-full shadow-md flex items-center justify-center 
              ${startIndex === 0 ? 'opacity-40 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
            aria-label="Previous blogs"
          >
            <ChevronLeft className="h-6 w-6 text-charcoal" />
          </button>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-all duration-300 ease-in-out"
              style={{ transform: `translateX(-${startIndex * (100 / visiblePosts)}%)` }}
            >
              {blogPosts.map(post => (
                <div key={post.id} className="w-full min-w-[calc(100%/5)] px-2 md:min-w-[calc(100%/5)]">
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
          
          <button 
            onClick={showNext} 
            disabled={startIndex >= blogPosts.length - visiblePosts}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white h-10 w-10 rounded-full shadow-md flex items-center justify-center 
              ${startIndex >= blogPosts.length - visiblePosts ? 'opacity-40 cursor-not-allowed' : 'opacity-100 cursor-pointer'}`}
            aria-label="Next blogs"
          >
            <ChevronRight className="h-6 w-6 text-charcoal" />
          </button>
        </div>
        
        <div className="mt-12 text-center">
          <a href="/blog" className="inline-block px-8 py-3 bg-white text-charcoal rounded-full shadow-md hover:shadow-lg transition-all border border-tan-dark/20">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;