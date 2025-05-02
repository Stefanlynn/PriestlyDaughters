# Priestly Daughters Website

A compassionate digital platform empowering women through faith-based community support and personal growth.

## Deployment Instructions

### Deploying to Netlify via GitHub

1. **Push this repository to GitHub**
   - Create a new repository on GitHub
   - Push this codebase to your GitHub repository

2. **Connect to Netlify**
   - Log in to your Netlify account
   - Click "New site from Git"
   - Select GitHub and authorize Netlify
   - Choose your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Set up Environment Variables (if needed)**
   - In Netlify dashboard, go to Site settings > Build & deploy > Environment
   - Add any required environment variables

5. **Enable Netlify Identity for CMS Access**
   - Go to Site settings > Identity
   - Click "Enable Identity"
   - Under Registration preferences, select "Invite only"
   - Go to Services > Git Gateway, and click "Enable Git Gateway"

### Manual Deployment

Alternatively, you can build the project locally and deploy the generated files:

```bash
# Build the project
./build-netlify.sh

# This will create a site.zip file that can be uploaded to Netlify
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

## Project Structure

- `client/` - Frontend React application
- `server/` - Backend Express server
- `public/` - Static assets and admin configuration
- `content/` - CMS-managed content (blog posts, resources)
- `shared/` - Shared TypeScript types and schemas

## Content Management

This site uses Netlify CMS for content management. Once deployed:

1. Navigate to `/admin` on your site
2. Log in with your Netlify Identity credentials
3. Create and edit content through the admin interface