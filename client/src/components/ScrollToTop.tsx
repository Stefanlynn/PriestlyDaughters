import { useEffect } from 'react';
import { useLocation } from 'wouter';

// This component handles scrolling to top when navigation occurs
const ScrollToTop: React.FC = () => {
  const [location] = useLocation();
  
  useEffect(() => {
    // When location changes, scroll to top of page
    window.scrollTo(0, 0);
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;