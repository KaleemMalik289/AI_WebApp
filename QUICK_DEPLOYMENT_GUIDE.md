# 🚀 Quick Deployment Reference

## In 60 Seconds

### 1. Update Env Variables
```bash
# Edit .env.local with your actual values:
BREVO_API_KEY=your_api_key_here
SENDER_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com
```

### 2. Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel"
git push origin main
```

### 3. Deploy to Vercel
- Go to https://vercel.com
- Click "New Project"
- Import your repository
- Add env variables
- Click Deploy

**Done! Your site is live!** ✨

---

## Useful Commands

```bash
# Test build locally (verify no errors)
npm run build

# Start production server locally
npm start

# Run development server
npm run dev

# Check for linting errors
npm run lint

# Install dependencies
npm install
```

---

## Environment Variables

```env
# Required
BREVO_API_KEY=xkeysib-xxxxxxxxxxxxx
SENDER_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com

# Optional
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

---

## Vercel Deployment Links

- **Dashboard**: https://vercel.com/dashboard
- **New Project**: https://vercel.com/new
- **Docs**: https://vercel.com/docs
- **Status**: https://www.vercelstatus.com

---

## Email Service Setup

### Brevo (Free tier, recommended)
1. https://app.brevo.com
2. Settings → API Keys
3. Copy your API key
4. Paste in Vercel environment variables

### SendGrid (Alternative)
1. https://sendgrid.com
2. Settings → API Keys
3. Update code to use SendGrid API

---

## Common Issues & Fixes

### Build fails?
```bash
npm run build  # Test locally first
npm install    # Reinstall dependencies
```

### Email not sending?
- Check `BREVO_API_KEY` is set correctly
- Verify API key in Brevo dashboard
- Check email addresses are valid

### Dark mode not working?
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Already tested and working!

### Contact form not submitting?
- Check console for errors (F12)
- Verify environment variables
- Check network tab for API errors

---

## Performance

Your site includes:
- ✅ Static page generation
- ✅ Automatic image optimization
- ✅ Code splitting
- ✅ CSS minification
- ✅ TypeScript compilation

**Result**: Lightning fast! ⚡

---

## Next Steps After Deployment

1. **Add Custom Domain**
   - Vercel project settings
   - Add DNS records
   - Wait 24-48 hours for propagation

2. **Enable Analytics**
   - Automatic in Vercel dashboard
   - No setup needed!

3. **Monitor Performance**
   - Check Vercel analytics
   - Monitor email logs in Brevo

4. **Keep Updated**
   - Regular dependency updates
   - Content updates via JSON files

---

## Support

- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- TypeScript: https://www.typescriptlang.org
- Tailwind: https://tailwindcss.com

---

**Your deployment will be error-free!** ✅
