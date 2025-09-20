# Kiu Media - Digital Marketing Agency Landing Page

A modern, dark-themed corporate landing page built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion for a digital marketing agency specializing in Google Ads, TikTok Ads, Meta (Facebook & Instagram) Ads, and Website Development.

## 🚀 Features

- **Modern Dark Theme**: Full dark mode with black background and elegant white/gray text
- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Smooth Animations**: Framer Motion powered animations with fade-in and slide effects
- **Professional Sections**:
  - Hero section with compelling call-to-action
  - Services showcase (Google Ads, TikTok Ads, Meta Ads, Website Development)
  - About Us with team and company stats
  - Portfolio with case studies and testimonials
  - Contact form with validation
  - Comprehensive footer
- **SEO Optimized**: Complete meta tags, semantic HTML, and performance optimized
- **Interactive Elements**: Smooth scrolling navigation, hover effects, and form interactions

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom dark theme
- **Animations**: Framer Motion
- **UI Components**: Custom components with shadcn/ui design patterns
- **Forms**: React Hook Form with Zod validation
- **Fonts**: Inter (Google Fonts)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO and fonts
│   ├── page.tsx           # Main landing page
│   └── globals.css        # Global styles and Tailwind setup
├── components/
│   ├── ui/                # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── textarea.tsx
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx          # Hero section
│   ├── Services.tsx      # Services showcase
│   ├── About.tsx         # About section
│   ├── Portfolio.tsx     # Case studies and testimonials
│   ├── Contact.tsx       # Contact form
│   └── Footer.tsx        # Site footer
├── lib/
│   └── utils.ts          # Utility functions
public/
├── favicon.ico           # Site favicon
└── logo.svg             # Company logo
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/hanzkeren/portal-kiu.git
cd portal-kiu
```

2. Install dependencies:
```bash
pnpm install
# or
npm install
```

3. Run the development server:
```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
pnpm build
pnpm start
# or
npm run build
npm start
```

## 🎨 Design Features

### Color Scheme
- **Primary Background**: Black (`#000000`)
- **Text Colors**: White (`#FFFFFF`), Gray variants (`#E5E5E5`, `#A1A1AA`)
- **Accent Colors**: Subtle gradients from white to gray
- **UI Elements**: Dark gray cards with subtle borders

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300, 400, 500, 600, 700, 800, 900
- **Responsive Typography**: Scales appropriately across devices

### Animations
- **Page Load**: Fade-in animations for initial content
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Subtle scale and color transitions
- **Smooth Scrolling**: Navigation between sections

## 🔧 Customization

### Updating Content

1. **Services**: Edit the `services` array in `src/components/Services.tsx`
2. **Team Members**: Update `teamMembers` in `src/components/About.tsx`
3. **Case Studies**: Modify `caseStudies` in `src/components/Portfolio.tsx`
4. **Contact Info**: Update contact details in `src/components/Contact.tsx`

### Styling

All styles use TailwindCSS classes with a custom dark theme configuration in `tailwind.config.ts`. Key customizations include:

- Custom color palette for dark theme
- Extended font family with Inter
- Custom animations (fade-in, slide-in)
- Responsive breakpoints

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update navigation links in `Header.tsx` if needed

## 🌟 Key Components

### Header
- Responsive navigation with mobile menu
- Smooth scroll to sections
- Animated logo and menu items
- Sticky behavior with backdrop blur

### Hero
- Eye-catching headline with gradient text
- Service highlights
- Dual call-to-action buttons
- Animated background elements
- Company statistics

### Services
- Service cards with hover animations
- Feature lists for each service
- High-quality placeholder images
- Call-to-action integration

### Portfolio
- Case study showcases with metrics
- Client testimonials with ratings
- Before/after project highlights
- Interactive elements

### Contact
- Comprehensive contact form with validation
- Business hours and contact information
- Multiple contact methods
- Success/loading states

## 📱 Responsive Design

The site is fully responsive with breakpoints for:
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

All components adapt gracefully across screen sizes with mobile-first approach.

## ⚡ Performance

- **Next.js 14**: Latest features and optimizations
- **Image Optimization**: Next.js Image component for placeholder images
- **Bundle Optimization**: Tree shaking and code splitting
- **CSS Optimization**: TailwindCSS purging
- **Font Optimization**: Google Fonts with display=swap

## 🔒 SEO & Accessibility

- **Meta Tags**: Comprehensive Open Graph and Twitter Card tags
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Alt Text**: Descriptive alt text for all images
- **Color Contrast**: WCAG compliant contrast ratios
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader**: Proper ARIA labels and descriptions

## 🚀 Deployment

This project can be deployed on any platform that supports Next.js:

### Vercel (Recommended)
```bash
pnpm build
# Deploy to Vercel
```

### Netlify
```bash
pnpm build
# Deploy dist folder
```

### Docker
```bash
# Build Docker image
docker build -t kiu-media .
docker run -p 3000:3000 kiu-media
```

## 📞 Support

For questions or support regarding this landing page:

- **Email**: hello@kiumedia.com
- **Phone**: +1 (555) 123-4567
- **Website**: [www.kiumedia.com](http://www.kiumedia.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ by Kiu Media - Your Digital Marketing Partner