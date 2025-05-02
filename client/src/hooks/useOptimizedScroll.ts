import { useState, useEffect } from 'react';

/**
 * Hook that provides optimized scroll position with debounce
 * to avoid performance issues on scroll events
 */
export function useOptimizedScroll(delay = 10) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  
  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let rafId: number;
    
    // Throttled scroll handler for better performance
    const handleScroll = () => {
      if (!isScrolling) {
        setIsScrolling(true);
      }
      
      // Cancel any pending setTimeout
      clearTimeout(timeoutId);
      
      // Use requestAnimationFrame for smoother updates
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        setScrollPosition(window.scrollY);
      });
      
      // Set a timeout to mark scrolling as done
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, delay);
    };
    
    // Add event listener with passive option for performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial position
    setScrollPosition(window.scrollY);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [delay, isScrolling]);
  
  return { scrollPosition, isScrolling };
}