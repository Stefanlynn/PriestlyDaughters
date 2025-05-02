#!/bin/bash

# Ensure we're in the project directory
cd "$(dirname "$0")"

# Remove previous build artifacts
rm -rf dist site.zip

# Build the client-side application with our Netlify-specific config
echo "Building client application for Netlify..."
npx vite build --config vite.config.netlify.js

# Check if build was successful
if [ ! -d "dist" ]; then
  echo "Build failed! Check the error messages above."
  exit 1
fi

# Copy Netlify configuration if it exists
if [ -f "netlify.toml" ]; then
  cp netlify.toml dist/
fi

# Copy public admin files if they exist
if [ -d "public/admin" ]; then
  mkdir -p dist/admin
  cp -r public/admin/* dist/admin/
fi

# Copy content directory if it exists (for CMS content)
if [ -d "content" ]; then
  cp -r content dist/
fi

# Create ZIP archive for Netlify deployment
cd dist
zip -r ../site.zip *
cd ..

echo "Build completed successfully!"
echo "Netlify deployment files prepared! You can now upload site.zip to Netlify."