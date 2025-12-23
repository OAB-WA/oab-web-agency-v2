# AnuTech Next.js Application

A modern, high-performance Next.js application converted from an HTML template, optimized for SEO and performance.

## Features

- ✅ **Next.js 16** with App Router
- ✅ **TypeScript** for type safety
- ✅ **CSS Modules** with SCSS support
- ✅ **Optimized Images** with Next.js Image component
- ✅ **SEO Optimized** with structured data (JSON-LD), sitemap, and robots.txt
- ✅ **Contact Form** with Resend email integration
- ✅ **Dynamic Content** via JSON data files
- ✅ **Responsive Design** for all devices

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Add your Resend API key to `.env.local`:
```
RESEND_API_KEY=re_your_api_key_here
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Project Structure

```
anutech-nextjs/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   └── contact/      # Contact form endpoint
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── portfolio/        # Portfolio page
│   ├── services/         # Services page
│   ├── team/             # Team page
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   ├── sitemap.ts        # Dynamic sitemap
│   └── robots.ts         # Robots.txt
├── components/           # React components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections
│   └── ui/              # Reusable UI components
├── lib/                  # Utilities and data
│   ├── data/            # JSON data files
│   ├── seo/             # SEO helpers
│   └── types/           # TypeScript types
├── public/              # Static assets
│   └── images/          # Image files
└── styles/              # Global styles and SCSS variables
```

## Configuration

### Resend Email Setup

1. Sign up at [Resend](https://resend.com)
2. Create an API key
3. Add it to `.env.local` as `RESEND_API_KEY`
4. Update the `from` email in `app/api/contact/route.ts` with your verified domain

### Site Configuration

Edit `lib/data/site-config.json` to update:
- Site name and description
- Social media links
- Company information
- Site URL

### Content Management

All content is managed through JSON files in `lib/data/`:
- `services.json` - Service offerings
- `team.json` - Team members
- `portfolio.json` - Portfolio projects
- `testimonials.json` - Customer testimonials
- `stats.json` - Statistics
- `partners.json` - Partner logos
- `contact.json` - Contact information

## SEO Features

- **Structured Data**: JSON-LD schemas for Organization, WebSite, BreadcrumbList
- **Sitemap**: Automatically generated at `/sitemap.xml`
- **Robots.txt**: Configured at `/robots.txt`
- **Metadata**: Optimized meta tags for all pages
- **Open Graph**: Social media sharing optimization

## Performance Optimizations

- **Image Optimization**: Automatic WebP/AVIF conversion
- **Font Optimization**: Self-hosted fonts with `next/font`
- **Code Splitting**: Automatic route-based code splitting
- **Static Generation**: All pages pre-rendered at build time

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy!

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Self-hosted with Node.js

## License

Copyright © 2025 AnuTech Agency. All rights reserved.
