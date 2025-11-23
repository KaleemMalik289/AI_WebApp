# Vercel Deployment Guide

## ✅ Pre-Deployment Checklist

Your AI Consultancy website is ready for Vercel deployment! Here's what you need to do:

### Step 1: Prepare Your Repository

1. **Commit all changes**
   ```bash
   git add .
   git commit -m "Prepare for Vercel deployment"
   git push origin main
   ```

2. **Verify no uncommitted changes**
   ```bash
   git status
   ```

### Step 2: Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   - Select `Y` when asked to link to existing project
   - Follow the prompts to connect your GitHub repository

#### Option B: GitHub Integration (Easiest)
1. Go to https://vercel.com
2. Click **"New Project"**
3. Select your **AI_WebApp** repository
4. Click **Import**
5. Configure environment variables (see below)
6. Click **Deploy**

### Step 3: Configure Environment Variables

In your Vercel project settings, add these environment variables:

| Variable | Value | Description |
|----------|-------|-------------|
| `BREVO_API_KEY` | Your Brevo API key | [Get from Brevo](https://app.brevo.com/settings/keys/api) |
| `SENDER_EMAIL` | noreply@yourdomain.com | Email sending from address |
| `ADMIN_EMAIL` | admin@yourdomain.com | Where form submissions are sent |
| `NEXT_PUBLIC_CALENDLY_URL` | Your Calendly URL | [Get from Calendly](https://calendly.com/account/integrations) |

### Step 4: Get Your Brevo API Key

1. Go to https://app.brevo.com
2. Login or create account
3. Navigate to **Settings** → **API Keys**
4. Copy your **API Key**
5. Paste it in Vercel environment variables as `BREVO_API_KEY`

### Step 5: Verify Deployment

Once deployed:
- ✅ Visit your site URL
- ✅ Test the contact form
- ✅ Check email functionality
- ✅ Verify dark mode toggle
- ✅ Test responsive design on mobile

## 📋 Project Configuration

### Already Configured For You:
✅ **package.json** - Dependencies and build scripts
✅ **next.config.ts** - Next.js configuration
✅ **tsconfig.json** - TypeScript configuration
✅ **.gitignore** - Files excluded from Git
✅ **vercel.json** - Vercel deployment settings
✅ **.env.example** - Environment variable template

### Build & Start Commands:
- **Build**: `npm run build`
- **Start**: `npm start`
- **Dev**: `npm run dev`

## 🔧 Troubleshooting

### Issue: "Failed to send email"
**Solution**: 
- Check `BREVO_API_KEY` is correctly set in Vercel environment variables
- Verify the API key is active in Brevo dashboard
- Check that `ADMIN_EMAIL` and `SENDER_EMAIL` are valid

### Issue: "Build fails with TypeScript error"
**Solution**:
- Run locally: `npm run build`
- Check for any TS errors: `npm run lint`
- All should be resolved already!

### Issue: "Contact form not working"
**Solution**:
- Check browser console for errors (F12 → Console)
- Verify environment variables are set in Vercel
- Check Brevo dashboard for email logs

### Issue: "Styles not loading correctly"
**Solution**:
- Clear browser cache (Ctrl+Shift+Del)
- The build automatically compiles Tailwind CSS
- Should work out of the box

## 🚀 After Deployment

### 1. Update Your Domain
- In Vercel project settings, add your custom domain
- Follow DNS configuration instructions
- Can take up to 48 hours to propagate

### 2. Enable Analytics
- Vercel dashboard provides free analytics
- No configuration needed!

### 3. Set Up Automatic Deployments
- Already configured! Pushes to `main` branch auto-deploy
- Disable auto-deploy if needed in project settings

### 4. Monitor Performance
- Use Vercel Analytics to monitor:
  - Page load times
  - User interactions
  - Core Web Vitals

## 💡 Best Practices

✅ **Always test locally first**: `npm run dev`
✅ **Keep secrets secure**: Never commit `.env.local`
✅ **Use preview deployments**: Test before merging to main
✅ **Monitor logs**: Check Vercel logs for any errors
✅ **Regular updates**: Keep dependencies updated

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review build output for errors
3. Test locally with: `npm run build && npm start`
4. Check email service (Brevo) logs
5. Review Next.js documentation: https://nextjs.org/docs

---

## Quick Deploy Summary

```bash
# 1. Commit changes
git add .
git commit -m "Ready for Vercel deployment"
git push origin main

# 2. Go to https://vercel.com
# 3. Import your GitHub repository
# 4. Add environment variables
# 5. Click Deploy!

# That's it! Your site is live! 🎉
```

---

**Your deployment should be error-free! The project is production-ready.**
