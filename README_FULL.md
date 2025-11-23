# AI Consultancy Website

A modern, premium, and maintainable website for an AI consultancy built with Next.js, TypeScript, and Tailwind CSS.

## 🌟 Features

- ✨ **Modern Design** - Clean, minimal, Apple-style aesthetic
- 📱 **Fully Responsive** - Works perfectly on all devices
- ⚡ **Fast & Optimized** - Built with Next.js for optimal performance
- 🔧 **Easy Content Management** - Edit content through simple JSON files
- 📧 **Contact Form** - Integrated email notifications
- 📅 **Calendly Integration** - Seamless meeting scheduling
- 🎨 **Tailwind CSS** - Modern utility-first styling
- 📊 **SEO Friendly** - Optimized for search engines
- 🔐 **Secure** - Built with best security practices
- 🎯 **Scalable** - Easy to add new features and integrations

## 📁 Project Structure

```
ai-webapp/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/              # About Us page
│   │   ├── contact/            # Contact page
│   │   ├── services/           # Services pages
│   │   ├── case-studies/       # Case studies & testimonials
│   │   ├── api/                # API routes
│   │   │   └── contact/        # Contact form endpoint
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── layout/             # Navigation & Footer
│   │   ├── home/               # Home page components
│   │   └── common/             # Reusable components
│   ├── content/                # Content management (JSON files)
│   ├── lib/
│   │   ├── types.ts            # TypeScript types
│   │   └── api/                # API utilities
│   └── styles/                 # Additional stylesheets
├── public/                     # Static assets
│   └── images/                 # Image files
├── .env.local                  # Local environment variables (add to .gitignore)
├── .env.example                # Example environment variables
├── package.json                # Project dependencies
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
├── next.config.ts              # Next.js configuration
└── CONTENT_MANAGEMENT_GUIDE.md # User guide for editing content
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**
```bash
cd ai-webapp
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
# Copy the example file
cp .env.example .env.local

# Edit .env.local with your settings
# - Add your email service API key
# - Add your Calendly URL
# - Update admin email address
```

4. **Run the development server**
```bash
npm run dev
```

5. **Open your browser**
Navigate to `http://localhost:3000`

## 📝 Content Management

All website content is managed through JSON files in `/src/content/`. No coding knowledge required!

### Quick Content Edits

1. **Site Settings** - Edit `/src/content/site-config.json`
2. **Home Page** - Edit `/src/content/home-content.json`
3. **Services** - Edit `/src/content/services-content.json`
4. **Case Studies** - Edit `/src/content/case-studies-content.json`

For detailed instructions, see [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)

## ⚙️ Configuration

### Environment Variables (.env.local)

```env
# Email Service Configuration
BREVO_API_KEY=your_api_key_here
SENDER_EMAIL=noreply@yourdomain.com
ADMIN_EMAIL=admin@yourdomain.com

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-calendly-link

# Site Config
NEXT_PUBLIC_SITE_NAME=AI Consultancy
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Available Email Services

- **Brevo** (recommended) - Free up to 300 emails/day
- **SendGrid** - Free up to 100 emails/day
- **Mailgun** - Free up to 5,000 emails/month

## 🎨 Customization

### Changing Colors

Colors are defined in Tailwind CSS configuration. To change the primary color scheme:

1. Edit `tailwind.config.ts`
2. Modify the color values
3. The entire site will automatically update

### Adding New Pages

1. Create a new folder in `/src/app/` (e.g., `/src/app/blog/`)
2. Create a `page.tsx` file inside
3. Add the route to navigation in `/src/content/site-config.json`

### Adding New Components

1. Create a new file in `/src/components/`
2. Follow the existing component structure
3. Import and use in your pages

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `.next` folder.

### Run Production Build Locally

```bash
npm run build
npm run start
```

### Deployment Options

The site can be deployed to:

- **Vercel** (recommended) - Optimized for Next.js
- **Netlify** - Easy setup with CLI
- **AWS** - For enterprise deployments
- **Any Node.js hosting** - Self-managed

## 🔧 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Run production build
npm run start

# Lint code
npm run lint

# Format code
npm run format
```

## 📧 Email Integration

### Contact Form Flow

1. User submits form on `/contact`
2. Frontend validates the data
3. API endpoint processes the request
4. Admin receives notification email
5. User receives confirmation email

### Troubleshooting Email

- **Emails not sending?** Check `.env.local` has correct API key
- **Check spam folder** - Add your domain to email whitelist
- **Test with** - SendGrid's test email feature

## 🔐 Security Best Practices

1. **Environment Variables** - Never commit `.env.local` to git
2. **API Keys** - Store securely in environment variables
3. **CORS** - Configure origin settings for external APIs
4. **Rate Limiting** - Consider adding rate limiting to contact form
5. **Form Validation** - Always validate on both client and server

## 📊 Performance Optimization

The site is already optimized with:

- ⚡ Next.js static generation
- 🖼️ Automatic image optimization
- 🗜️ CSS minification
- 📦 Code splitting
- 🔄 Caching strategies

## 🧪 Testing

Add tests for critical functionality:

```bash
# Install testing library
npm install --save-dev jest @testing-library/react

# Create tests in __tests__ folder
# Run tests with: npm test
```

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf .next node_modules
npm install
npm run build
```

### Styling Issues

- Clear browser cache (Ctrl+Shift+Delete)
- Check Tailwind CSS classes are spelled correctly
- Verify `globals.css` is imported in layout.tsx

### Contact Form Not Working

1. Check `.env.local` has required variables
2. Check email service API key is valid
3. Check browser console for errors (F12)
4. Test with simpler message first

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [React Patterns](https://react.dev/learn)

## 🤝 Contributing

To maintain code quality:

1. Follow existing code patterns
2. Use TypeScript for new features
3. Test changes locally before committing
4. Keep components small and reusable

## 📄 License

This project is created for the AI Consultancy. All rights reserved.

## 💬 Support

For issues or questions:

1. Check [CONTENT_MANAGEMENT_GUIDE.md](./CONTENT_MANAGEMENT_GUIDE.md)
2. Review troubleshooting section above
3. Contact your development team

---

## 🚢 Deployment Checklist

- [ ] Update `.env.local` with production values
- [ ] Test all pages in production mode (`npm run build && npm run start`)
- [ ] Set up email service
- [ ] Configure Calendly link
- [ ] Test contact form
- [ ] Update domain DNS records
- [ ] Set up SSL certificate
- [ ] Configure analytics (Google Analytics, etc.)
- [ ] Set up backups
- [ ] Create monitoring alerts
- [ ] Document deployment process

## Version

**v1.0.0** - Initial Release

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
