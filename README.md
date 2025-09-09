# Scribr Landing Website

A production-ready static website for Scribr - the recurring economy, simplified. Built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Landing Page** with hero section, features showcase, and call-to-action
- **Legal Pages** - Privacy Policy and Terms & Conditions (India-compliant)
- **Developer Preview Badge** - Prominently displayed status indicator
- **Responsive Design** - Mobile-first approach with dark mode support
- **SEO Optimized** - Meta tags, OpenGraph, Twitter cards, sitemap, robots.txt
- **PWA Ready** - Web app manifest and favicon
- **Accessible** - WCAG compliant with semantic HTML

## 🛠️ Tech Stack

- **Framework**: Vite + React 18 + TypeScript
- **Styling**: Tailwind CSS with custom theme
- **Routing**: React Router v6
- **Code Quality**: ESLint + Prettier
- **Build Tool**: Vite with optimized production builds

## 📁 Project Structure

```
/
│  index.html              # Main HTML with SEO meta tags
│  robots.txt              # Search engine directives
│  sitemap.xml             # Site structure for SEO
│  manifest.webmanifest    # PWA manifest
│  favicon.svg             # Minimal "S" logo
│
└─ src/
   │  main.tsx             # React app entry point
   │  index.css            # Tailwind imports and base styles
   │  vite-env.d.ts        # Vite type definitions
   │
   ├─ app/
   │   App.tsx             # Main app component with layout
   │   routes.tsx          # Route definitions
   │
   ├─ components/
   │   Navbar.tsx          # Navigation with logo and links
   │   Footer.tsx          # Footer with legal links and contact
   │   Badge.tsx           # Developer preview status badge
   │   Hero.tsx            # Landing page hero section
   │   Features.tsx        # Three feature cards
   │   CTA.tsx             # Call-to-action section
   │
   └─ pages/
       Home.tsx            # Landing page composition
       Privacy.tsx         # Privacy policy (India-compliant)
       Terms.tsx           # Terms & conditions (India jurisdiction)
       NotFound.tsx        # 404 error page
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Opens at `http://localhost:3000`

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🎨 Design System

### Colors & Theme
- **System-driven dark mode** using `prefers-color-scheme`
- **Color palette**: Slate grays with amber accents for developer preview
- **Typography**: System UI font stack for optimal performance

### Components
- **Rounded corners**: `rounded-2xl` for modern card design
- **Soft shadows**: Custom shadow utilities for depth
- **Smooth transitions**: Hover effects and micro-interactions
- **Responsive grid**: Mobile-first with Tailwind breakpoints

## 📧 Contact & Branding

- **Brand**: Scribr
- **Tagline**: "The recurring economy—simplified"
- **Contact**: contact@scribr.app
- **Copyright**: © 2025 Scribr Technologies Pvt. Ltd.

## 🔒 Legal Compliance

- **Jurisdiction**: India
- **Privacy Policy**: GDPR-inspired, India-compliant
- **Terms & Conditions**: Indian law, clear developer preview disclaimers
- **Last Updated**: September 10, 2025

## 🌟 Key Features Highlighted

1. **Merchant Portal** - Create subscription plans, connect Razorpay via OAuth, manage webhooks
2. **UPI AutoPay** - Daily/weekly/monthly mandates in supported UPI apps
3. **Pause & Cancel Control** - Full customer control with clear cut-offs

## 🚧 Developer Preview Status

This website represents a **developer preview** of the Scribr platform:
- No live payment processing
- Sandbox environment only
- For testing and feedback purposes
- Contact: contact@scribr.app for early access

## 📈 Performance & SEO

- **Lighthouse Score**: Optimized for 90+ scores
- **Core Web Vitals**: Fast loading with Vite's optimizations
- **SEO**: Complete meta tags, structured data, sitemap
- **Accessibility**: Semantic HTML, proper contrast ratios, keyboard navigation

## 🚀 Deployment

The site is optimized for static hosting on:
- Netlify
- Vercel
- GitHub Pages
- Any static hosting provider

Build output is in the `dist/` directory after running `npm run build`.

## 📝 License

© 2025 Scribr Technologies Pvt. Ltd. All rights reserved.

---

**Made in India 🇮🇳**
