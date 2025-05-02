#!/bin/bash

# Ensure we're in the project directory
cd "$(dirname "$0")"

# Remove previous build artifacts
rm -rf dist netlify-build site.zip

# Build the client-side application
cd client
npx vite build --base=./ --outDir=../dist

# Return to the root directory
cd ..

# Create a directory for the Netlify build if it doesn't exist
mkdir -p netlify-build

# Copy the dist directory to netlify-build
cp -r dist/* netlify-build/

# Copy the public directory for additional assets
cp -r public/* netlify-build/ 2>/dev/null || true

# Copy the content directory for CMS content
cp -r content netlify-build/ 2>/dev/null || true

# Create a netlify.toml file in the netlify-build directory
cp netlify.toml netlify-build/

# Create ZIP archive for Netlify deployment
cd netlify-build
zip -r ../site.zip *
cd ..

echo "Netlify deployment files prepared! You can now upload site.zip to Netlify."