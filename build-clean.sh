#!/bin/bash

# Clean up any existing dist folder
rm -rf dist

# Run a clean Vite build
npx vite build

# Verify the build created the dist folder and index.html
if [ -f "dist/index.html" ]; then
  echo "Build successful! The dist folder has been created with index.html"
  ls -la dist
else
  echo "Build failed or dist/index.html was not created."
fi