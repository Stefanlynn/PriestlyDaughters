import { usePreloadImages, usePreloadVideos } from '../hooks/usePreloadMedia';

// Define common image and video assets that are used frequently across the site
const commonImages = [
  '/images/powellfam-16.JPG',
  // Add other common images here
];

const heroVideos = [
  '/videos/background.mov',
  // Add other videos here
];

/**
 * A component that preloads media assets as soon as it's mounted.
 * This should be included early in the application tree.
 */
const MediaPreloader: React.FC = () => {
  // Preload common images
  usePreloadImages(commonImages);
  
  // Preload hero video
  usePreloadVideos(heroVideos);
  
  // This component doesn't render anything
  return null;
};

export default MediaPreloader;