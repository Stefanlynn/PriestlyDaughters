import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Blog data with real images
const blogPosts = [
  {
    id: 1,
    title: "When You Feel Called, But Unqualified",
    description: "You feel it in your spirit—this pull toward more. Maybe it's starting that thing God's been whispering to you about. Maybe it's stepping into a new level of leadership, purpose, or influence.",
    coverImage: "/images/blog/blog-1.jpg",
    slug: "when-you-feel-called-but-unqualified"
  },
  {
    id: 2,
    title: "The Sacred Work of Slowing Down",
    description: "Let's be honest: as women, we carry a lot. We manage homes, raise children, lead teams, care for communities, support our spouses, show up for our churches—and still try to carve out time for ourselves.",
    coverImage: "/images/blog/blog-2.jpg",
    slug: "the-sacred-work-of-slowing-down"
  },
  {
    id: 3,
    title: "Becoming Her: The Journey Between Who You Were and Who You're Becoming",
    description: "There's a version of you that God is shaping—strong, steady, full of wisdom, confident in your identity, and clear about your calling. But between who you've been and who you're becoming… there's a gap.",
    coverImage: "/images/blog/blog-3.jpg",
    slug: "becoming-her"
  },
  {
    id: 4,
    title: "The Pressure to Be Everything, All at Once",
    description: "There's this unspoken pressure many women carry—to be everything, to everyone, all at once. The perfect mom. The loving wife. The prayer warrior. The helper. The planner. The fixer.",
    coverImage: "/images/blog/blog-4.jpg",
    slug: "the-pressure-to-be-everything"
  },
  {
    id: 5,
    title: "You're Not Behind—You're Being Prepared",
    description: "Have you ever looked around and felt like everyone else is further ahead? They're launching things, writing books, raising perfect kids, building empires—and you're just trying to survive the week.",
    coverImage: "/images/blog/blog-5.jpg",
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
          <a href={`/blog/${slug}`} className="text-tan-dark hover:text-tan-light font-medium text-sm transition-colors">
            Read More &rarr;
          </a>
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
          <a href="/blog" className="inline-block px-8 py-3 bg-white text-charcoal rounded-full shadow-md hover:shadow-lg transition-all border border-tan-dark/20">
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;