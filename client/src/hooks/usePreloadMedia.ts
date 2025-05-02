import { useEffect } from 'react';

/**
 * Hook to preload image assets
 * @param imagePaths Array of image paths to preload
 */
export function usePreloadImages(imagePaths: string[]) {
  useEffect(() => {
    // Create an array to hold all image preload promises
    const imagePromises = imagePaths.map(path => {
      return new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve();
        img.onerror = () => reject(new Error(`Failed to preload image: ${path}`));
      });
    });

    // Load all images in parallel
    Promise.all(imagePromises).catch(error => {
      console.warn('Image preloading error:', error);
    });
  }, [imagePaths]);
}

/**
 * Hook to preload video assets
 * @param videoPaths Array of video paths to preload
 */
export function usePreloadVideos(videoPaths: string[]) {
  useEffect(() => {
    // Create an array to hold all video preload promises
    const videoPromises = videoPaths.map(path => {
      return new Promise<void>((resolve, reject) => {
        const video = document.createElement('video');
        video.preload = 'auto';
        video.muted = true;
        
        // Add source to video element
        const source = document.createElement('source');
        source.src = path;
        source.type = path.includes('.mov') ? 'video/quicktime' : 
                      path.includes('.mp4') ? 'video/mp4' : 
                      'video/webm';
        video.appendChild(source);
        
        // Define event handlers
        video.onloadeddata = () => resolve();
        video.onerror = () => reject(new Error(`Failed to preload video: ${path}`));
        
        // Start loading the video
        video.load();
      });
    });

    // Load all videos in parallel
    Promise.all(videoPromises).catch(error => {
      console.warn('Video preloading error:', error);
    });
  }, [videoPaths]);
}