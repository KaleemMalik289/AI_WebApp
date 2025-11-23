# AI Consultancy Website - Content Management Guide

Welcome! This guide will help you edit content on your website without needing to know how to code.

## 📋 Table of Contents

1. [Quick Start](#quick-start)
2. [Editing Text Content](#editing-text-content)
3. [Adding Images](#adding-images)
4. [Editing Pages](#editing-pages)
5. [Managing Services](#managing-services)
6. [Calendly Integration](#calendly-integration)
7. [Email Configuration](#email-configuration)
8. [Frequently Asked Questions](#frequently-asked-questions)

---

## Quick Start

All website content is stored in simple **JSON files** (text files with structured data). You don't need to touch any code—just edit the JSON files and the website will automatically update.

### File Locations (Important!)

All content files are located in: `/src/content/`

The main files you'll need to edit are:
- `site-config.json` - General site information and navigation
- `home-content.json` - Home page content
- `services-content.json` - Services and pricing information
- `case-studies-content.json` - Testimonials and case studies

---

## Editing Text Content

### Step 1: Open the File
1. Open VS Code or your preferred text editor
2. Navigate to the file you want to edit (in `/src/content/`)
3. Find the text you want to change

### Step 2: Edit the Content
Simply find the text between the quotation marks `" "` and replace it with your new content.

**Example:**
```json
"title": "AI Solutions for Real Business Results"
```

Change to:
```json
"title": "Your New Title Here"
```

### Step 3: Save
Press `Ctrl+S` (or `Cmd+S` on Mac) to save. The website will automatically reload!

---

## Adding Images

### Where to Store Images

Save all your images in: `/public/images/`

### How to Use Images in Content

In the JSON files, you'll see image references like:
```json
"image": "placeholder"
```

Replace `"placeholder"` with your image filename:
```json
"image": "/images/my-photo.jpg"
```

### Supported Image Formats
- `.jpg` or `.jpeg`
- `.png`
- `.webp` (recommended - smallest file size)
- `.gif`

### Tip: Optimizing Images
For best performance, use WebP format or compress your images before uploading. Tools like:
- TinyPNG (https://tinypng.com)
- CloudConvert (https://cloudconvert.com)

---

## Editing Pages

### Site Configuration (`site-config.json`)

This file controls:
- Site name and description
- Navigation menu items
- Social media links
- Contact email

**Example - Changing the Site Name:**
```json
"name": "AI Consultancy"
```
Change to:
```json
"name": "Your Company Name"
```

**Example - Adding a New Navigation Item:**
Find the `"navigation"` array and add:
```json
{
  "label": "New Page",
  "href": "/new-page"
}
```

### Home Page (`home-content.json`)

Contains:
- Hero section title and subtitle
- Call-to-action buttons
- Featured services preview

**Edit the hero title:**
```json
"hero": {
  "title": "Your new title here"
}
```

---

## Managing Services

### Editing Service Information

File: `/src/content/services-content.json`

Each service has:
- `id` - Unique identifier (don't change this)
- `title` - Service name
- `description` - Short description
- `long_description` - Full details
- `benefits` - List of benefits (array)
- `pricing` - Price information
- `duration` - Timeline

**Example - Updating a Service:**
```json
{
  "id": "consultation",
  "title": "AI Consultation",
  "description": "Strategic guidance to identify AI opportunities",
  "long_description": "Detailed explanation here...",
  "benefits": [
    "Benefit 1",
    "Benefit 2"
  ],
  "pricing": "Starting from $5,000",
  "duration": "4-6 weeks"
}
```

### Adding a New Service

1. Open `/src/content/services-content.json`
2. Copy an existing service block
3. Paste it before the closing bracket
4. Change the `id`, `title`, and other details
5. Save the file

**The website will automatically:**
- Create a new service page at `/services/your-service-id`
- Add the service to the services listing
- Show it on the home page

---

## Calendly Integration

### Setting Up Calendly

1. Create a Calendly account at https://calendly.com
2. Set up your availability and meeting types
3. Copy your Calendly link

### Adding Your Calendly Link

1. Open `.env.local` file in the root directory
2. Find: `NEXT_PUBLIC_CALENDLY_URL=`
3. Replace with your Calendly link:
```
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/yourname
```

4. Save the file
5. The "Book a Discovery Call" buttons will now link to your calendar

---

## Email Configuration

### Setting Up Email Notifications

When someone submits the contact form, you'll receive an email notification. To enable this:

#### Option 1: Using Brevo (Recommended - Free!)

1. Sign up at https://brevo.com
2. Get your API key from Settings → SMTP & API
3. Open `.env.local` and add:
```
BREVO_API_KEY=your_api_key_here
SENDER_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=your@email.com
```

#### Option 2: Using SendGrid

1. Sign up at https://sendgrid.com
2. Get your API key
3. Add to `.env.local`:
```
SENDGRID_API_KEY=your_api_key_here
```

#### Option 3: Using Mailgun

1. Sign up at https://mailgun.com
2. Get your API key and domain
3. Add to `.env.local`:
```
MAILGUN_API_KEY=your_api_key_here
MAILGUN_DOMAIN=yourdomain.com
```

### Testing Email Submissions

1. Go to `/contact` page on your website
2. Fill out and submit the form
3. Check your email for the notification

---

## Editing Testimonials and Case Studies

File: `/src/content/case-studies-content.json`

### Adding a Testimonial

```json
{
  "id": 4,
  "name": "Client Name",
  "company": "Their Company",
  "role": "Their Position",
  "content": "What they said about working with you...",
  "image": "/images/client-photo.jpg"
}
```

### Adding a Case Study

```json
{
  "id": 2,
  "title": "Project Name",
  "description": "Brief description of the project and results",
  "image": "/images/case-study-image.jpg",
  "featured": true
}
```

---

## Frequently Asked Questions

### Q: I edited a file but the website didn't update. What do I do?

**A:** Try these steps:
1. Make sure you saved the file (Ctrl+S)
2. Wait 10-15 seconds
3. Refresh your browser (Ctrl+R or F5)
4. If still not working, stop the development server and run `npm run dev` again

### Q: Can I add a completely new page?

**A:** Yes! You'll need to:
1. Create a new folder in `/src/app/` (e.g., `/src/app/blog/`)
2. Add a `page.tsx` file inside it
3. Add it to the navigation in `site-config.json`

For this, you might want to ask a developer for help, or contact support.

### Q: How do I add more images to a section?

**A:** Depending on the section:
- **Hero Section:** Edit `home-content.json` and add an `backgroundImage` property
- **Testimonials:** Add the image path to each testimonial object
- **Case Studies:** Add an `image` property with the file path

### Q: Can I change the design/colors?

**A:** Yes, but it requires editing CSS. The main styles are in `/src/app/globals.css` and Tailwind configuration. For design changes, it's best to contact a developer.

### Q: How do I add a new service?

**A:** See the "Managing Services" section above. It's very straightforward!

### Q: What if I accidentally delete something important?

**A:** Don't worry! You can:
1. Press Ctrl+Z to undo recent changes
2. Use Git to revert changes (if you know Git)
3. Contact your developer for a backup

### Q: Can I hide/show sections without deleting them?

**A:** Yes! In the JSON files, you can:
1. Remove items from arrays to hide them
2. The sections will automatically disappear

For example, to hide a service, remove that service object from the services array.

---

## Need More Help?

If you need to make more complex changes:
1. Contact your web developer
2. Record a video of what you're trying to do
3. Send screenshots of the error messages

---

## Summary of Key Files

| File | Purpose | Edit For |
|------|---------|----------|
| `site-config.json` | General settings | Site name, navigation, contact info |
| `home-content.json` | Home page | Hero section, featured services |
| `services-content.json` | Services | Service details, pricing, benefits |
| `case-studies-content.json` | Case studies & testimonials | Client stories and reviews |
| `.env.local` | Environment variables | Email setup, Calendly link |

Happy editing! 🚀
