#!/bin/bash

# This script is for building only the front-end portion of the application
# specifically for Netlify deployment

# Clean up any existing dist folder
rm -rf dist

# Run Vite build for the frontend only
echo "Building frontend with Vite..."
npx vite build

# Copy Netlify configuration files if needed
if [ -f "_redirects" ]; then
  echo "Copying _redirects file to dist folder..."
  cp _redirects dist/
fi

# Move admin folder to dist if it exists
if [ -d "public/admin" ]; then
  echo "Copying admin folder to dist..."
  mkdir -p dist/admin
  cp -r public/admin/* dist/admin/
fi

echo "Build completed. Contents of dist folder:"
ls -la dist