#!/bin/bash

# Ensure we're in the project directory
cd "$(dirname "$0")"

# Remove previous build artifacts
rm -rf netlify-build site.zip

# Create a directory for the Netlify build if it doesn't exist
mkdir -p netlify-build

# Instead of building the React app, we'll prepare a simplified package
# that includes the key Netlify CMS configuration and files

# Copy the public directory for Netlify CMS admin setup
cp -r public/* netlify-build/ 2>/dev/null || true

# Copy the content directory for CMS content
cp -r content netlify-build/ 2>/dev/null || true

# Copy any attached assets that might be referenced
mkdir -p netlify-build/images
cp -r attached_assets/* netlify-build/images/ 2>/dev/null || true

# Create a form fallback HTML for Netlify forms
cat > netlify-build/form-fallback.html << 'EOL'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Priestly Daughters - Form Submission</title>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 20px; text-align: center; }
    .container { max-width: 600px; margin: 0 auto; }
    h1 { color: #d2afbd; } /* Soft pink color matching site theme */
    .message { background: #f7f3ee; padding: 20px; border-radius: 8px; } /* Cream background */
  </style>
</head>
<body>
  <div class="container">
    <h1>Thank You for Your Submission</h1>
    <div class="message">
      <p>Your form has been received. We'll be in touch soon!</p>
      <p><a href="/">Return to Homepage</a></p>
    </div>
  </div>
</body>
</html>
EOL

# Create a basic index.html that will be replaced by the real build when deployed
cat > netlify-build/index.html << 'EOL'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Priestly Daughters</title>
  <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
  <style>
    body { font-family: sans-serif; margin: 0; padding: 20px; text-align: center; background: #f7f3ee; }
    .container { max-width: 600px; margin: 0 auto; padding-top: 40px; }
    h1 { color: #d2afbd; } /* Soft pink color matching site theme */
    .message { background: white; padding: 20px; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>Priestly Daughters</h1>
    <div class="message">
      <p>This is a placeholder page. The actual website will be built and deployed when connected to Netlify.</p>
      <p><a href="/admin/">Access Admin Panel</a></p>
    </div>
  </div>
  <script>
    // Redirect to admin after successful login
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  </script>
</body>
</html>
EOL

# Create a netlify.toml file in the netlify-build directory
cp netlify.toml netlify-build/

# Add a simple server-side JavaScript file for handling API requests
cat > netlify-build/index.js << 'EOL'
// Simple server-side code for Netlify Functions
exports.handler = async function(event, context) {
  // This will be replaced with actual Netlify Functions code when deployed
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Netlify function placeholder" })
  };
};
EOL

# Create ZIP archive for Netlify deployment
cd netlify-build
zip -r ../site.zip *
cd ..

echo "Netlify deployment files prepared! You can now upload site.zip to Netlify."