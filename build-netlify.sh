#!/bin/bash

# This script is for building only the front-end portion of the application
# specifically for Netlify deployment

# Clean up any existing dist folder
rm -rf dist

# Run Vite build for the frontend only
echo "Building frontend with Vite..."
npx vite build

# Copy Netlify configuration files
echo "Copying Netlify configuration files..."
cp public/_redirects dist/ 2>/dev/null || echo "No _redirects file found"
cp public/404.html dist/ 2>/dev/null || echo "No 404.html file found"
cp public/form-fallback.html dist/ 2>/dev/null || echo "No form-fallback.html file found"

# Copy thank-you pages (important for form submissions)
echo "Copying thank-you pages..."
cp public/thank-you.html dist/ 2>/dev/null || echo "No thank-you.html file found"
cp public/subscribe-thank-you.html dist/ 2>/dev/null || echo "No subscribe-thank-you.html file found"

# Ensure social media preview image is copied (outside of Vite's asset pipeline)
echo "Copying social media preview image..."
if [ -f "client/public/preview.jpg" ]; then
  cp client/public/preview.jpg dist/
  echo "Preview image copied successfully"
else
  echo "Warning: preview.jpg not found in client/public directory"
fi

# Move admin folder to dist
echo "Copying Netlify CMS admin folder..."
if [ -d "public/admin" ]; then
  mkdir -p dist/admin
  cp -r public/admin/* dist/admin/
  echo "Admin folder copied successfully"
else
  echo "No admin folder found in public directory"
fi

# Create content folder if missing (for Netlify CMS)
if [ ! -d "dist/content" ]; then
  echo "Creating content directory for CMS..."
  mkdir -p dist/content/{blog,resources,pages}
fi

echo "Build completed. Contents of dist folder:"
ls -la dist