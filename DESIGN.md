---
name: Premium Editorial Beauty
colors:
  surface: '#fdf8f8'
  surface-dim: '#ddd9d8'
  surface-bright: '#fdf8f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3f2'
  surface-container: '#f1edec'
  surface-container-high: '#ebe7e6'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f4f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#735c00'
  on-secondary: '#ffffff'
  secondary-container: '#fed65b'
  on-secondary-container: '#745c00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#211a1b'
  on-tertiary-container: '#8d8183'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffe088'
  secondary-fixed-dim: '#e9c349'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#574500'
  tertiary-fixed: '#eedfe1'
  tertiary-fixed-dim: '#d1c3c5'
  on-tertiary-fixed: '#211a1b'
  on-tertiary-fixed-variant: '#4e4446'
  background: '#fdf8f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
  charcoal: '#1A1A1A'
  champagne-gold: '#D4AF37'
  soft-blush: '#F5E6E8'
  cream-bg: '#FCF9F9'
  gold-leaf: '#B8932D'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.15em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  section-padding: 120px
  section-padding-mobile: 64px
  gutter: 24px
  container-max: 1200px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

This design system is built upon a foundation of **Minimalist Luxury**. It targets a high-end clientele seeking both professional makeup artistry and elite educational training. The visual language moves away from the previous high-saturation, cluttered layout toward a sophisticated, editorial-inspired aesthetic.

The brand personality is authoritative yet inviting—a mix of high-fashion glamor and professional academic rigor. The emotional response should be one of immediate trust, aspiration, and calm. To achieve this, we utilize:
- **Generous Whitespace:** Providing room for high-resolution imagery to breathe.
- **Subtle Modernism:** A blend of classical serif foundations with contemporary functional surfaces.
- **Accented Opulence:** Using gold not as a primary fill, but as a precise instrument for highlights and interactive elements.

## Colors

The palette is anchored by **Deep Charcoal (#1A1A1A)**, which provides the necessary weight and authority for a premium brand. It is used primarily for typography and deep-contrast backgrounds in section transitions.

**Champagne Gold (#D4AF37)** is our "glamor" anchor. It must be used sparingly to maintain its perceived value—specifically for icons, hairline borders, and primary calls to action. **Soft Blush (#F5E6E8)** serves as the transitional neutral, softening the interface and providing a subtle, skin-tone adjacent backdrop for cards and secondary sections.

The default mode is `light`, utilizing a near-white **Cream (#FCF9F9)** for the main body background to avoid the harshness of pure hex white.

## Typography

The typographic strategy relies on the contrast between the "Art" (Serif) and the "Utility" (Sans-Serif). 

**Playfair Display** handles all editorial moments. Large display sizes should use tighter letter spacing to feel like a high-end magazine header. **Montserrat** provides the functional clarity required for body copy and navigation. 

A specific `label-caps` style is introduced for sub-headers and category tags, using wide letter-spacing and uppercase transformations to evoke the branding of luxury cosmetic houses. Avoid using bold weights for body text; instead, use color shifts or the Serif font for emphasis.

## Layout & Spacing

This design system utilizes a **Fixed Grid** model for desktop to ensure imagery and editorial layouts remain perfectly composed. The central container is capped at 1200px.

Layout rhythm is dictated by "Vertical Breathing Room." Sections are separated by a minimum of 120px of whitespace. On mobile, this scales down to 64px. Elements within cards and components follow an 8px base grid, but external layout components should prioritize visual balance over strict mathematical increments. Use asymmetrical layouts (e.g., text offset against images) to reinforce the sophisticated, non-template feel of the studio.

## Elevation & Depth

To maintain a minimalist luxury feel, we avoid heavy, traditional shadows. Instead, we use **Tonal Layers** and **Ambient Glows**:

1.  **Surfaces:** The primary surface is the Cream background. Cards use the Soft Blush or pure White with a 1px Gold-tinted border (#D4AF37 at 20% opacity).
2.  **Shadows:** When depth is required (such as on hover or for primary modals), use an extremely diffused "Ambient Shadow": `0px 20px 40px rgba(26, 26, 26, 0.05)`. This creates a lifted effect without looking "techy."
3.  **Gold Accents:** Use 1px champagne gold lines to separate header navigation or to frame featured portfolio pieces.

## Shapes

The shape language is primarily **Soft (0.25rem)**. While a luxury brand often leans into sharp corners, a beauty studio needs to feel approachable and "human." 

A subtle 4px radius on buttons and cards takes the edge off the "Brutalist" sharpness while maintaining a disciplined, professional structure. Images, however, should remain sharp-edged or use extremely large "pill" crops (circle crops) for profile photos of the "Glam Squad" to create a signature look.

## Components

### Buttons
- **Primary:** Deep Charcoal background, White text, 4px radius. On hover, the background transitions to Champagne Gold.
- **Secondary:** Transparent background, 1px Champagne Gold border, Charcoal text.
- **Text Link:** Charcoal text with a 1px Gold underline that expands on hover.

### Cards (Services & Courses)
- Cards should have no visible border by default. They use the Soft Blush background.
- Typography within cards should be center-aligned for a formal, "menu-style" appearance.
- Icons within cards must be rendered in Champagne Gold.

### Input Fields
- Underline-only style or very light 1px borders. 
- Focus state should change the bottom border to Champagne Gold.
- Labels use the `label-caps` typography style.

### Portfolio / Our Work
- Images should use a "Masonry" or staggered grid to feel like an editorial lookbook rather than a standard gallery.
- Captions use Playfair Display Small Italic for a poetic touch.