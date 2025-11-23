# 🌍 Deployment Guide

Complete guide to deploy your AI Consultancy website to production.

## Quick Deployment Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and provides the easiest deployment.

#### Steps:

1. **Create a Vercel account**
   - Go to https://vercel.com/signup
   - Sign up with GitHub, GitLab, or Bitbucket
   - Or just email

2. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

3. **Import on Vercel**
   - Go to https://vercel.com/new
   - Select your repository
   - Click "Import"
   - Vercel will auto-detect Next.js settings

4. **Add Environment Variables**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add all variables from `.env.local`:
     ```
     BREVO_API_KEY=your_key
     SENDER_EMAIL=noreply@yourdomain.com
     ADMIN_EMAIL=admin@yourdomain.com
     NEXT_PUBLIC_CALENDLY_URL=your_url
     NEXT_PUBLIC_SITE_NAME=AI Consultancy
     NEXT_PUBLIC_SITE_URL=https://yourdomain.com
     ```

5. **Connect Your Domain**
   - Go to Settings → Domains
   - Add your domain (yourdomain.com)
   - Update your domain DNS settings (Vercel provides instructions)

6. **Deploy**
   - Click "Deploy"
   - Done! Your site is live! 🚀

#### Cost: **Free** (plus optional domain)

---

### Option 2: Netlify

Easy deployment platform with great Next.js support.

#### Steps:

1. **Push to GitHub** (same as above)

2. **Connect to Netlify**
   - Go to https://netlify.com
   - Click "Add new site" → "Import existing project"
   - Select your GitHub repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

4. **Add Environment Variables**
   - In Netlify, go to Site Settings → Build & Deploy → Environment
   - Add all your `.env.local` variables

5. **Connect Domain**
   - Go to Domain Settings
   - Add your domain
   - Update DNS records (Netlify provides instructions)

6. **Deploy**
   - Done! 🚀

#### Cost: **Free** (plus optional domain)

---

### Option 3: AWS Amplify

For more control and enterprise features.

#### Steps:

1. **Create AWS Account**
   - Go to https://aws.amazon.com
   - Create free tier account

2. **Connect Repository**
   - Go to AWS Amplify
   - Choose "Host your web app"
   - Connect GitHub account

3. **Build Settings**
   - Select your repository
   - Amplify auto-detects Next.js

4. **Add Environment Variables**
   - Add all `.env.local` variables

5. **Deploy**
   - Click "Save and deploy"

#### Cost: **Varies** (free tier available)

---

### Option 4: Self-Hosted (DigitalOcean, Linode, etc.)

For maximum control.

#### Steps:

1. **Create Server**
   - Sign up for DigitalOcean, Linode, or similar
   - Create Ubuntu server

2. **Install Dependencies**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Upload Your Code**
   ```bash
   git clone your-repo.git
   cd ai-webapp
   npm install
   npm run build
   ```

4. **Run with PM2** (keep server running)
   ```bash
   npm install -g pm2
   pm2 start npm --name "ai-webapp" -- start
   pm2 startup
   pm2 save
   ```

5. **Set Up Nginx** (reverse proxy)
   ```bash
   sudo apt install nginx
   # Configure nginx to forward to port 3000
   ```

6. **Set Up SSL Certificate** (Free with Let's Encrypt)
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

#### Cost: **~$5-20/month**

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All content is updated (site name, description, services)
- [ ] Images are in `/public/images/` and referenced correctly
- [ ] Email service is configured (API key ready)
- [ ] Calendly link is added
- [ ] Domain name is registered
- [ ] All environment variables are ready
- [ ] You've tested locally: `npm run build && npm run start`
- [ ] No console errors (check with `npm run dev`)

---

## Step-by-Step Deployment (Vercel - Recommended)

### 1. Prepare Your Code

```bash
# Make sure everything is committed
git status

# Add all files
git add .

# Commit
git commit -m "Ready for production"

# Push to GitHub
git push origin main
```

### 2. Create Vercel Account

- Go to https://vercel.com
- Click "Sign Up"
- Use GitHub account (recommended)

### 3. Import Project

- Click "Add New..." → "Project"
- Select your repository
- Click "Import"

### 4. Configure Project

The build and output settings should auto-detect. If not:

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

### 5. Add Environment Variables

Click "Environment Variables" and add:

```
BREVO_API_KEY = your_key_here
SENDER_EMAIL = noreply@yourdomain.com
ADMIN_EMAIL = admin@yourdomain.com
NEXT_PUBLIC_CALENDLY_URL = https://calendly.com/your-link
NEXT_PUBLIC_SITE_NAME = AI Consultancy
NEXT_PUBLIC_SITE_URL = https://yourdomain.com
```

### 6. Deploy

- Click "Deploy"
- Wait for build to complete
- You'll get a preview URL

### 7. Test Deployment

- Visit your preview URL
- Test all pages
- Test contact form
- Test Calendly link

### 8. Connect Domain

- In Vercel, go to "Domains"
- Add your domain
- Update DNS records:

  For most registrars:
  - Go to DNS settings
  - Add CNAME record
  - Point to Vercel's nameserver
  - Wait 24-48 hours for propagation

- Once DNS is configured, your site is live!

---

## Post-Deployment

### Update Environment Variables

```bash
# Update .env.local with production URLs
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Monitor Your Site

- Set up uptime monitoring (Uptime Robot - free)
- Set up error tracking (Sentry - free tier)
- Monitor analytics (Google Analytics - free)

### Backups

- Keep your GitHub repository updated
- Regularly backup your code
- Use git branches for testing changes

### Updates

To deploy updates:

```bash
# Make changes locally
# Test with: npm run dev

# Commit and push
git add .
git commit -m "Description of changes"
git push origin main

# Vercel auto-deploys on push!
```

---

## Troubleshooting

### Build Fails on Vercel

1. Check build logs (Vercel shows detailed errors)
2. Ensure all environment variables are set
3. Run `npm run build` locally to test
4. Check for missing dependencies

### Site Shows 404 Error

1. Check if domain is configured correctly
2. Wait for DNS propagation (can take 24-48 hours)
3. Clear browser cache
4. Check Vercel deployment was successful

### Contact Form Not Working in Production

1. Verify email API key is correct
2. Check environment variables are set in Vercel
3. Check email service is working (test send)
4. Check spam folder for test emails

### Images Not Loading

1. Check image files are in `/public/images/`
2. Verify image paths in JSON start with `/images/`
3. Ensure image filenames match exactly
4. Check file size (optimize if >5MB)

---

## Production Monitoring

### Google Analytics Setup

1. Create Google Analytics account
2. Get your Tracking ID
3. Add to environment variables
4. Install `@next/third-parties`:
   ```bash
   npm install @next/third-parties
   ```
5. Add to `layout.tsx`

### Sentry Setup (Error Tracking)

1. Create Sentry account (free)
2. Create Next.js project
3. Install Sentry package
4. Follow Sentry's setup instructions

---

## Database (Optional Future Addition)

If you later want to store submissions or add blog:

- **Recommended**: Supabase (PostgreSQL - free tier)
- **Alternative**: MongoDB (NoSQL)
- **Simple**: Firebase (Realtime DB)

---

## Cost Summary

| Platform | Cost | Best For |
|----------|------|----------|
| **Vercel** | Free-$20/mo | Most projects |
| **Netlify** | Free-$19/mo | Easy setup |
| **AWS** | Free-$100+/mo | Enterprise |
| **DigitalOcean** | $5-20/mo | Full control |
| **GoDaddy** | $5-15/mo | Bundled hosting |

---

## Need Help?

1. Check Vercel docs: https://vercel.com/docs
2. Next.js deployment: https://nextjs.org/docs/app/building-your-application/deploying
3. Contact your development team

---

**Your site is ready to go live!** 🚀
