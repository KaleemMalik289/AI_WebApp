# 🚀 Quick Start Guide

Welcome to your AI Consultancy Website! This guide will help you get started in 5 minutes.

## Step 1: Install Dependencies (Already Done!)

All dependencies are installed. The project is ready to use.

## Step 2: Start the Development Server

```bash
npm run dev
```

Then open your browser and go to: **http://localhost:3000**

You should see your website! 🎉

## Step 3: Edit Your Content

All website content is stored in JSON files. You don't need to know coding!

### Quick Edits:

1. **Change the site name:**
   - Open: `/src/content/site-config.json`
   - Change `"name": "AI Consultancy"` to your company name
   - Save (Ctrl+S)
   - Refresh your browser

2. **Change the home page title:**
   - Open: `/src/content/home-content.json`
   - Change the `"title"` value
   - Save and refresh

3. **Update services:**
   - Open: `/src/content/services-content.json`
   - Edit any service details
   - The website updates automatically

### For More Detailed Instructions:
See **CONTENT_MANAGEMENT_GUIDE.md** - Complete guide with images!

## Step 4: Configure Emails (Optional but Recommended)

To receive emails when people contact you:

1. Sign up at **https://brevo.com** (free!)
2. Get your API key
3. Open `.env.local` in the root folder
4. Update `BREVO_API_KEY=your_key_here`
5. Update `ADMIN_EMAIL=your@email.com`

Done! Now you'll receive contact form submissions.

## Step 5: Add Your Calendly Link (Optional)

1. Go to **https://calendly.com** and set up your calendar
2. Copy your Calendly URL
3. Open `.env.local`
4. Update: `NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourname`
5. Now the "Book a Call" buttons work!

## Step 6: Deploy to Production

When you're ready to go live:

```bash
npm run build
npm run start
```

This creates an optimized version ready for hosting.

### Recommended Hosting:
- **Vercel** (easiest - 1-click deployment)
- **Netlify** (also very easy)
- **Any Node.js hosting** (AWS, DigitalOcean, etc.)

---

## 📁 Key Files Reference

| File | What to Edit | Purpose |
|------|-------------|---------|
| `/src/content/site-config.json` | Site name, navigation | General settings |
| `/src/content/home-content.json` | Hero title, subtitle | Home page content |
| `/src/content/services-content.json` | Services list | All 3 services |
| `/src/content/case-studies-content.json` | Testimonials | Client reviews |
| `.env.local` | Email API, Calendly | Integration settings |
| `/public/images/` | Add image files | Store your images here |

---

## 🎨 Making It Yours

### Add Your Logo
1. Save your logo as: `/public/images/logo.png`
2. Edit `/src/components/layout/Navigation.tsx`
3. Import and use your logo

### Add Your Photos
1. Save images to `/public/images/`
2. Reference them in JSON files like: `"/images/my-photo.jpg"`

### Change Colors
1. Edit `/tailwind.config.ts`
2. Change the color values
3. The entire site updates!

---

## 💡 Tips & Tricks

✅ **Always Save (Ctrl+S)** after editing JSON files

✅ **Refresh Browser** if changes don't appear (F5 or Ctrl+R)

✅ **Keep JSON Valid** - Don't delete quotes or commas

✅ **Use Placeholders** - Leave `"image": "placeholder"` if you don't have photos yet

✅ **Test Locally First** - Always test before deploying

---

## ⚠️ Common Issues & Fixes

### Issue: Website not showing updates
**Solution:**
1. Make sure you saved the file (Ctrl+S)
2. Wait 5 seconds
3. Refresh browser (F5)
4. Check browser console (F12) for errors

### Issue: Contact form not working
**Solution:**
1. Check `.env.local` has your email API key
2. Check the email service API key is correct
3. Test on local server first (`npm run dev`)

### Issue: Images not showing
**Solution:**
1. Check image file is in `/public/images/`
2. Check file path is correct in JSON
3. Use forward slashes: `/images/photo.jpg`

---

## 🚀 Next Steps

1. **Customize your content** using CONTENT_MANAGEMENT_GUIDE.md
2. **Add your images** to `/public/images/`
3. **Set up email notifications** (optional)
4. **Set up Calendly** (optional)
5. **Deploy to production** when ready

---

## 📞 Need Help?

1. **Content editing?** → See CONTENT_MANAGEMENT_GUIDE.md
2. **Want to change design?** → See README_FULL.md
3. **Technical questions?** → Check README_FULL.md troubleshooting section
4. **Need code changes?** → Contact your developer

---

## ✨ You're All Set!

Your professional AI consultancy website is ready. Enjoy! 🎉

Start with: `npm run dev`

Then visit: **http://localhost:3000**
