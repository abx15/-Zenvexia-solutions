# Zenvexia Solutions - Digital Transformation & IT Consulting

A modern, responsive, and high-performance web application built with React, TypeScript, and Tailwind CSS. Zenvexia Solutions is a premier technology partner offering comprehensive digital services including web development, app development, UI/UX design, software solutions, digital transformation, and IT consulting.

## 🚀 Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Fast Performance**: Built with Vite for lightning-fast development and production builds
- **SEO Optimized**: Helmet integration for meta tags and structured data
- **Accessibility**: WCAG compliant with proper semantic HTML
- **Component Library**: Pre-built UI components using shadcn/ui
- **Animation**: Smooth animations with Framer Motion
- **Form Handling**: Built-in form validation and submission
- **Toast Notifications**: User-friendly feedback with Sonner and React-Toastify
- **Dark Mode Ready**: CSS variables for easy theming

## 📱 Responsive Breakpoints

The application is fully responsive across all device sizes:

- **Mobile (320px - 640px)**: Optimized layouts for small screens
- **Tablet (640px - 1024px)**: Medium screen layouts
- **Desktop (1024px+)**: Full desktop experience
- **Extra Large (1280px+)**: Wide screen layouts

### Mobile-First Features
- Hamburger menu navigation on mobile devices
- Scaled down component sizes for touch interactions
- Optimized images and lazy loading
- Touch-friendly button sizes (minimum 44px)
- Responsive typography with fluid scaling
- Optimized spacing and padding for smaller screens

## 🛠 Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **HTTP Client**: TanStack React Query
- **Routing**: React Router
- **SEO**: React Helmet Async
- **Notifications**: Sonner & React-Toastify
- **Icons**: Lucide React
- **Font**: DM Sans (Google Fonts)

## 📦 Project Structure

```
src/
├── components/
│   ├── Header.tsx              # Responsive navigation header
│   ├── Footer.tsx              # Footer with responsive grid
│   ├── NavLink.tsx             # Navigation link component
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx      # Hero section with responsive layout
│   │   ├── AboutSection.tsx     # About section
│   │   ├── ServicesSection.tsx  # Services grid
│   │   ├── WhyChooseUsSection.tsx
│   │   ├── TechnologiesSection.tsx
│   │   ├── PortfolioSection.tsx # Project portfolio
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx   # Contact form
│   └── ui/                      # UI component library
├── pages/
│   ├── Index.tsx                # Main landing page
│   └── NotFound.tsx             # 404 page
├── hooks/
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
├── lib/
│   └── utils.ts                 # Utility functions
├── assets/                      # Static assets
├── App.tsx                      # Main app component
├── main.tsx                     # App entry point
├── index.css                    # Global styles
└── vite-env.d.ts               # Vite environment types
```

## 🎨 Design System

### Colors
- **Primary**: Light Blue (#B3D6F2)
- **Secondary**: Light Grey (#F5F5F5)
- **Foreground**: Black (#000000)
- **Background**: White (#FFFFFF)
- **Muted**: Grey (#989898)

### Typography
- **Font Family**: DM Sans
- **Headings**: Bold, tracked, 
- **Body**: Regular weight, readable line height

### Spacing Scale
- **xs**: 0.25rem
- **sm**: 0.5rem
- **md**: 1rem
- **lg**: 1.5rem
- **xl**: 2rem
- **2xl**: 3rem

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm/yarn/pnpm installed

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd zenvexia-solutions

# Install dependencies
npm i
# or
bun install
```

### Development

```bash
# Start the development server with hot reload
npm run dev
# or
bun run dev
```

The app will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build
# or
bun run build

# Preview production build locally
npm run preview
```

### Linting

```bash
# Run ESLint
npm run lint
```

## 📋 Components Guide

### Header Component
- Sticky navigation with scroll detection
- Responsive hamburger menu for mobile
- Quick access to portfolio and contact sections

### Footer Component
- Responsive grid layout that adapts to screen size
- Social media links
- Service, company, and resource categories
- Contact information

### HeroSection
- Full-screen hero with animated background
- Responsive typography sizing
- Call-to-action buttons
- Statistics display
- Animated visual elements

### ServiceSection
- Responsive grid (1 column mobile, 2 tablet, 3 desktop)
- Service cards with hover effects
- Category filtering on portfolio

### PortfolioSection
- Filterable project showcase
- Responsive project card grid
- Category buttons with mobile optimization

### ContactSection
- Responsive contact form
- Contact information display
- Form validation and submission handling

## 🔧 Configuration

### Tailwind CSS
Custom configuration in `tailwind.config.ts` with:
- Custom color palette
- Glass morphism utilities
- Custom keyframe animations
- Responsive breakpoints

### Vite Configuration
Configured in `vite.config.ts` with:
- React plugin support
- Path alias for cleaner imports (`@/`)
- Optimized build settings

## 🌐 Responsive Testing

Test the application's responsiveness using:

1. **Browser DevTools**
   - F12 or Ctrl+Shift+I
   - Toggle device toolbar (Ctrl+Shift+M)

2. **Manual Testing**
   - Test at 320px (Mobile), 768px (Tablet), 1024px+ (Desktop)
   - Test touch interactions on mobile devices

3. **Common Issues to Check**
   - Text scaling and readability
   - Button click areas (minimum 44px)
   - Image responsiveness
   - Menu accessibility
   - Form input sizes

## 📱 Mobile Optimization Tips

The following optimizations have been implemented:

1. **Fluid Typography**: Font sizes scale smoothly across viewports
2. **Flexible Layouts**: CSS Grid and Flexbox for responsive layouts
3. **Mobile Menu**: Touch-optimized hamburger navigation
4. **Touch Targets**: Minimum 44px height for interactive elements
5. **Image Optimization**: Responsive images with proper sizing
6. **Performance**: Lazy loading and code splitting

## 🔐 SEO & Meta Tags

The application includes:
- Dynamic meta tags with React Helmet
- Open Graph tags for social sharing
- Twitter Card metadata
- Schema.org structured data
- Canonical URLs
- Semantic HTML structure

## 📄 License

This project is created for Zenvexia Solutions.

## 👥 Support

For support, please contact: hello@zenvexia.com

---

**Built with ❤️ by Zenvexia Solutions**
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
