# Priestly Daughters Website

A compassionate digital platform empowering women through faith-based community support and personal growth, creating a nurturing online space for meaningful connections.

## Deployment Instructions

### Deploying to Netlify via GitHub (Recommended)

1. **Push this repository to GitHub**
   - Create a new repository on GitHub
   - Push this codebase to your GitHub repository using:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git branch -M main
     git remote add origin https://github.com/yourusername/priestly-daughters.git
     git push -u origin main
     ```

2. **Connect to Netlify**
   - Log in to your Netlify account at [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub and authorize Netlify
   - Choose your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Under "Advanced build settings", add the following environment variables if needed:
     - `NODE_VERSION`: `20`
   - Click "Deploy site"

4. **Set up Environment Variables (if needed)**
   - In Netlify dashboard, go to Site settings > Build & deploy > Environment
   - Add any required environment variables

5. **Enable Netlify Identity for CMS Access**
   - Go to Site settings > Identity
   - Click "Enable Identity"
   - Under Registration preferences, select "Invite only"
   - Go to Services > Git Gateway, and click "Enable Git Gateway"
   - Invite yourself as an admin user via the Identity tab

6. **Configure Your Domain (Optional)**
   - Go to Site settings > Domain management
   - Add your custom domain or use the Netlify subdomain

### Manual Deployment

Alternatively, you can build the project locally and deploy the generated files:

```bash
# Install dependencies
npm install

# Build the project
./build-netlify.sh

# Deploy the dist folder
cd dist
# Use Netlify CLI or drag and drop to Netlify's manual deploy section
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The development server will start at [http://localhost:5000](http://localhost:5000)

## Project Structure

- `client/` - Frontend React application
  - `src/` - Source code
    - `components/` - Reusable UI components
    - `pages/` - Page components
    - `hooks/` - Custom React hooks
    - `lib/` - Utility functions and data
- `server/` - Backend Express server
- `public/` - Static assets and admin configuration
- `content/` - CMS-managed content (blog posts, resources)
- `shared/` - Shared TypeScript types and schemas
- `attached_assets/` - Images and media files

## Forms Integration

This site uses Netlify Forms for contact and subscription forms. No additional setup is required as the forms are already configured with:

- `data-netlify="true"` attribute
- Hidden input `<input type="hidden" name="form-name" value="form-name">`

Form submissions will appear in your Netlify dashboard under the Forms tab.

## Content Management

This site uses Netlify CMS for content management. Once deployed:

1. Navigate to `/admin` on your site
2. Log in with your Netlify Identity credentials
3. Create and edit content through the admin interface

Available content types:
- Blog posts
- Resources
- Static pages (Home, About, Contact)

## Technology Stack

- React with TypeScript
- Vite build system
- Tailwind CSS for styling
- Radix UI components
- React Query for data fetching
- Netlify for hosting and forms

## Support

For any questions or issues, please contact the developer or refer to the documentation for each technology used in this project.