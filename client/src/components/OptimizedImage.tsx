import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  onLoad?: () => void;
}

/**
 * An optimized image component that handles image loading states and prioritizes critical images
 */
const OptimizedImage = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  onLoad,
  ...props
}: OptimizedImageProps & React.ImgHTMLAttributes<HTMLImageElement>) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Preload the image if it's a priority image
  useEffect(() => {
    if (priority && src) {
      const img = new Image();
      img.src = src;
      
      img.onload = () => {
        setIsLoaded(true);
        if (onLoad) onLoad();
      };
    }
  }, [src, priority, onLoad]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  return (
    <div className="relative overflow-hidden" style={{ width, height }}>
      {/* Loading placeholder */}
      {!isLoaded && (
        <div 
          className={cn(
            "absolute inset-0 bg-gray-100 animate-pulse", 
            className
          )} 
        />
      )}
      
      <img
        src={src}
        alt={alt}
        className={cn(
          className,
          !isLoaded && "opacity-0",
          isLoaded && "opacity-100 transition-opacity duration-300"
        )}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        onLoad={handleImageLoad}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;