# PenMerge Design System & Brand Guidelines

## Brand Color Palette (Source of Truth)

These colors are derived from the official PenMerge brand identity and favicon. They form the complete visual foundation for the website.

### Core Brand Colors

```
Deep Green (Primary Anchor):    #12312B
Warm Gold (Refined Accent):     #D8A34E
Warm Ivory (Premium BG):        #EAE0C8
Soft Cream (Light Editorial BG): #F4EEE1
White (Clarity/Contrast):       #FFFFFF
```

### Text & Utility

```
Primary Text:     #10231F
Muted Text:       #53615D
Border/Divider:   #D9D1BC
```

## Design Tokens

All colors are centralized in `tailwind.config.ts` as semantic design tokens. This enables consistent, maintainable styling across the entire website.

### Surface Backgrounds

| Token | Value | Usage |
|-------|-------|-------|
| `surface-base` | #FFFFFF | Primary white surfaces, cards, content areas |
| `surface-elevated` | #F4EEE1 | Elevated backgrounds, secondary sections |
| `surface-warm` | #EAE0C8 | Premium warm backgrounds, featured sections |
| `surface-alt` | #F5F0E5 | Subtle alternating backgrounds |

### Text Hierarchy

| Token | Value | Usage |
|-------|-------|-------|
| `text-primary` | #10231F | Main body text, headings |
| `text-secondary` | #53615D | Secondary/supporting text |
| `text-muted` | #8B9A95 | Metadata, captions, disabled states |
| `text-inverse` | #FFFFFF | Text on dark backgrounds |

### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `primary` | #12312B | Primary actions, links, CTAs, hero elements |
| `primary-dark` | #0A1F1B | Hover/active states |
| `primary-light` | #1A3F38 | Lighter variant |
| `primary-lighter` | #234A42 | Even lighter |
| `primary-pale` | #E8F1F0 | Subtle backgrounds |
| `accent` | #D8A34E | Refined accents, highlights (use sparingly) |
| `accent-dark` | #B8852F | Accent hover states |
| `accent-light` | #E5B866 | Lighter accent variant |
| `accent-lighter` | #F0D4A0 | Lightest accent |
| `accent-pale` | #FAF6F0 | Subtle accent backgrounds |

### Borders & Dividers

| Token | Value | Usage |
|-------|-------|-------|
| `border` | #D9D1BC | Card borders, dividers, subtle lines |
| `border-light` | #E8E3D4 | Lighter borders |
| `border-lighter` | #F0EBE0 | Lightest borders |

### State Colors

| Token | Value | Usage |
|-------|-------|-------|
| `state-success` | #2D6A5F | Success states (green-toned) |
| `state-warning` | #C89A3E | Warning states (warm-toned) |
| `state-error` | #8B4C3A | Error states (warm-toned) |
| `state-info` | #2A4A44 | Info states (green-toned) |

## Visual Direction

### Aesthetic Principles

- **Editorial** - Sophisticated, literary, refined
- **Premium** - High-end publishing house feel
- **Modern** - Contemporary design, clean execution
- **Warm** - Inviting, human, approachable
- **Trustworthy** - Established, reliable, professional
- **Intelligent** - Thoughtful, intentional, deliberate

### What to Avoid

❌ Generic SaaS styling  
❌ Startup/dashboard aesthetics  
❌ Excessive rounded cards  
❌ Excessive gradients  
❌ Neon colors  
❌ Overly futuristic UI  
❌ Childish visuals  
❌ Competing brand colors (blue, purple, bright orange)  
❌ Excessive gold usage  
❌ Excessive dark backgrounds  

## Color Usage Guidelines

### Deep Green (#12312B)

**Primary brand anchor color.** Use as the foundation for your brand presence.

**Appropriate Uses:**
- Primary buttons & CTAs
- Headings & display text
- Navigation elements
- Links (default state)
- Brand anchors & key elements
- Icons

**Hierarchy:**
- Primary actions: `#12312B`
- Hover states: `#1A3F38`
- Active states: `#234A42`
- Subtle backgrounds: `#E8F1F0`

### Warm Gold (#D8A34E)

**Refined accent - use sparingly.** Reserved for thoughtful emphasis and high-impact elements.

**Appropriate Uses:**
- Decorative accent lines
- Special highlights
- Featured section markers
- Emphasis typography (very limited)
- Luxury/premium signals

**Never:**
- Use for large background areas
- Overuse in layouts
- Apply to multiple elements simultaneously
- Use as primary text color

### Warm Ivory & Soft Cream

**Editorial background system.** Creates sophisticated, premium page surfaces.

**Warm Ivory (#EAE0C8):**
- Featured sections
- Premium content backgrounds
- Elevated surfaces
- Visual anchors

**Soft Cream (#F4EEE1):**
- Light editorial backgrounds
- Alternating sections
- Supporting surfaces
- Subtle depth

### White (#FFFFFF)

**Clarity and contrast.** Used for content areas and clear distinction.

**Appropriate Uses:**
- Card backgrounds
- Main content areas
- Clear white space
- High contrast elements

### Text Colors

**Primary Text (#10231F):**
- All headings (h1-h6)
- Body paragraphs
- Primary labels
- Main navigation text

**Secondary Text (#53615D):**
- Supporting paragraphs
- Descriptions
- Secondary labels
- Contextual information

**Muted Text (#8B9A95):**
- Metadata
- Captions
- Timestamps
- Disabled states
- Helper text

### Borders & Dividers

**Primary Border (#D9D1BC):**
- Card edges
- Form inputs
- Subtle dividers
- UI element separators

**Principle:** Borders should be warm and subtle, never harsh gray (#CCCCCC or similar).

## Sophistication Through Restraint

The website's premium feel comes from:

✓ **Typography** - Serif headings (Crimson Text), clean body (Inter)  
✓ **Spacing** - Generous whitespace, editorial rhythm  
✓ **Photography** - High-quality, purposeful imagery  
✓ **Composition** - Intentional layout, visual hierarchy  
✓ **Restrained Color** - Limited palette, purposeful application  
✓ **Subtle Details** - Minimal shadows, soft transitions  
✓ **Contrast** - Clear hierarchy, readable text  
✓ **Consistency** - Reliable pattern language  

## Component Token Usage

### Buttons

**Primary:**
- Background: `brand-green` (#12312B)
- Text: `brand-white` (#FFFFFF)
- Hover: `brand-green-light` (#1A3F38)
- Focus: Outline using `brand-green`

**Secondary:**
- Background: `surface-elevated` (#F4EEE1)
- Border: `brand-border` (#D9D1BC)
- Text: `text-primary` (#10231F)
- Hover: `brand-ivory` (#EAE0C8)

**Tertiary:**
- Background: Transparent
- Border: `brand-green` (#12312B)
- Text: `brand-green` (#12312B)
- Hover: `primary-pale` (#E8F1F0)

**Ghost:**
- Background: Transparent
- Text: `text-secondary` (#53615D)
- Hover: Background `surface-elevated`, text `text-primary`

### Cards

- Background: `surface-base` (#FFFFFF)
- Border: `brand-border` (#D9D1BC), 1px
- Shadow: Minimal, soft
- Hover: Subtle shadow increase

### Forms

- Input Border: `brand-border` (#D9D1BC)
- Input Background: `brand-white` (#FFFFFF)
- Focus Border: `brand-green` (#12312B)
- Focus Ring: `primary-pale` (#E8F1F0)
- Label: `text-primary` (#10231F)
- Placeholder: `text-muted` (#8B9A95)

### Dividers

- Color: `brand-border` (#D9D1BC)
- Weight: 1px
- No harsh contrasts

## Accent Line Component

A signature design element for PenMerge.

```html
<div class="accent-line"></div>
```

Usage:
- Pair with section subtitles
- Highlight key sections
- Use no more than 2-3 times per page
- Color: `brand-gold` (#D8A34E)

## Dark Mode Considerations

The PenMerge brand palette is designed for light mode. If dark mode is required in the future, it should:

1. Invert text colors (light text on dark backgrounds)
2. Use dark tints of green for backgrounds
3. Maintain the warm gold accent (it works in both)
4. Preserve the warm ivory/cream feel with dark equivalents
5. Keep the sophisticated, editorial tone

## Updating the Design System

**All color tokens are defined in one place:**

📄 `tailwind.config.ts` - Design token configuration

To update colors site-wide:
1. Edit the color values in `tailwind.config.ts`
2. Rebuild the site
3. All components automatically reflect the change

**No hardcoded colors in component files.**

## Typography Pairing

### Display Hierarchy

```
Headings (h1, h2, h3): Crimson Text (serif)
Body Headings (h4, h5, h6): Inter (sans-serif)
Body Text: Inter (sans-serif)
Metadata: Inter (sans-serif, smaller size, muted color)
```

### Font Weights

- Crimson Text: 400 (regular), 600, 700 (bold)
- Inter: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

## Responsive Design

The design system maintains visual consistency across all screen sizes:

- **Mobile (320px+):** Full functionality, touch-friendly spacing
- **Tablet (768px+):** Optimized layout, increased spacing
- **Desktop (1024px+):** Full feature display, generous whitespace

## Accessibility

All color choices meet WCAG AA contrast requirements:

✓ Dark text (#10231F, #53615D) on light backgrounds  
✓ White text on dark green backgrounds  
✓ Focus states clearly visible with brand green outlines  
✓ No color-only information (patterns, text, icons also used)  

---

**Last Updated:** 2026-09-08  
**Version:** 1.0 - Brand Foundation  
