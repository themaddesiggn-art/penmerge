# PenMerge

Premium author-services and publishing support company website.

## Project Setup

This is a Next.js 15+ project built with:
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS 3.4
- **Language**: TypeScript 5.3
- **Fonts**: Crimson Text (display), Inter (body)
- **Utilities**: clsx + tailwind-merge for className composition

## Project Structure

```
penmerge/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # Reusable React components
│   ├── Button.tsx          # Primary button component
│   ├── Container.tsx       # Width-constrained container
│   ├── Section.tsx         # Section wrapper with padding
│   ├── SectionHeading.tsx  # Heading with subtitle/description
│   ├── Link.tsx            # Next.js link wrapper
│   ├── Card.tsx            # Card component
│   └── index.ts            # Barrel export
├── lib/                    # Utility functions
│   └── utils.ts            # cn(), formatDate(), slugify(), truncate()
├── constants/              # Configuration constants
│   └── metadata.ts         # SEO metadata configuration
├── data/                   # Content data and fixtures
├── types/                  # TypeScript type definitions
├── public/                 # Static assets
│   └── robots.txt          # SEO robots configuration
├── tailwind.config.ts      # Tailwind configuration with design tokens
├── tsconfig.json           # TypeScript configuration
├── next.config.js          # Next.js configuration
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
└── package.json            # Dependencies & scripts
```

## Components

### Button
```tsx
<Button variant="primary" size="md" isLoading={false}>
  Click me
</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'tertiary' | 'ghost' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `isLoading`: boolean (default: false)
- Standard HTML button attributes

### Container
```tsx
<Container className="custom-class">
  Content constrained to max-width
</Container>
```

Provides a max-width wrapper with responsive padding.

### Section
```tsx
<Section id="about" className="bg-slate-50">
  <SectionHeading title="About Us" />
  Content here
</Section>
```

**Props:**
- `id`: string (optional)
- `className`: string (optional)
- `containerClassName`: string (optional)

### SectionHeading
```tsx
<SectionHeading
  subtitle="Our Story"
  title="About PenMerge"
  description="We help authors bring their stories to life"
  align="center"
/>
```

**Props:**
- `title`: ReactNode
- `subtitle`: ReactNode (optional)
- `description`: ReactNode (optional)
- `align`: 'left' | 'center' (default: 'center')

### Link
```tsx
<Link href="/about" variant="default">
  About
</Link>

<Link href="https://example.com" external variant="button">
  External Link
</Link>
```

**Props:**
- `href`: string (required)
- `variant`: 'default' | 'underline' | 'button' (default: 'default')
- `external`: boolean (default: false)

### Card
```tsx
<Card elevated interactive onClick={() => {}}>
  Card content
</Card>
```

**Props:**
- `elevated`: boolean (default: false)
- `interactive`: boolean (default: false)
- `onClick`: () => void (optional)

## Design System

### Colors
- **Primary**: Deep teal/forest green (#0f2d2c - #f0f7f6)
- **Accent**: Gold (#3d270c - #fffbf0)
- **Neutral**: Slate grays for text and backgrounds
- **Cream**: Off-white backgrounds and accents

### Typography
- **Display**: Crimson Text (serif) for headings
- **Body**: Inter (sans-serif) for body text
- **Scale**: Balanced heading levels with proper line heights

### Spacing Scale
xs (4px) → sm (8px) → md (12px) → lg (16px) → xl (24px) → 2xl (32px) → 3xl (48px) → 4xl (64px) → 5xl (80px) → 6xl (96px) → 7xl (120px)

### Breakpoints
- xs: 320px
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px
- 2xl: 1536px

## Utilities

### cn()
Compose classNames with clsx + tailwind-merge:
```tsx
cn('px-4', { 'bg-red-500': isError }, 'px-8') // → 'bg-red-500 px-8'
```

### formatDate()
```tsx
formatDate(new Date()) // → "September 8, 2026"
formatDate('2026-09-08') // → "September 8, 2026"
```

### slugify()
```tsx
slugify('Hello World!') // → 'hello-world'
```

### truncate()
```tsx
truncate('Long text here', 10) // → 'Long text ...'
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Type check
npm run type-check

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

Visit http://localhost:3000 to view the site.

## Features

✅ Next.js 15 with App Router  
✅ TypeScript strict mode  
✅ Tailwind CSS with custom design tokens  
✅ SEO-ready with metadata  
✅ Image optimization  
✅ Accessibility foundations  
✅ Responsive design system  
✅ Path aliases for clean imports  
✅ Production-ready configuration  
✅ Vercel deployment ready  

## SEO & Performance

- Open Graph metadata
- Twitter card support
- Robots.txt and canonical URLs
- Next.js image optimization
- Font subsetting via Google Fonts
- Minimal dependencies
- Code splitting
- CSS-in-JS with Tailwind

## Accessibility

- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus visible states
- Reduced motion support
- Proper color contrast
- Alt text for images

## Development Status

✅ Foundation setup complete  
✅ Core components created  
✅ Design system established  
✅ Utilities configured  
✅ SEO ready  

Ready for page development and content integration.
