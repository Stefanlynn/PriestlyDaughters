#!/bin/bash

# Ensure we're in the project directory
cd "$(dirname "$0")"

# Build the project
npm run build

# Create a directory for the Netlify build if it doesn't exist
mkdir -p netlify-build

# Copy the dist directory to netlify-build
cp -r dist/* netlify-build/

# Create a netlify.toml file in the netlify-build directory if needed
cp netlify.toml netlify-build/

# Create ZIP archive for Netlify deployment
cd netlify-build
zip -r ../site.zip *
cd ..

echo "Netlify deployment files prepared! You can now upload site.zip to Netlify."