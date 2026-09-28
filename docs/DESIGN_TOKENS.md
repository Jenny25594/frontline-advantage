# Design Tokens: Frontline Advantage

## Token Structure

All design tokens follow this naming convention:
```
{category}-{property}-{variant}
```

---

## Color Tokens

### Primary Colors

```json
{
  "color-primary-base": "#00C48C",
  "color-primary-dark": "#00A86F",
  "color-primary-darker": "#008856",
  "color-primary-light": "#33D4A3",
  "color-primary-lighter": "#66DEBC",
  "color-primary-20": "#CCF3E6",
  "color-primary-10": "#E6F9F2"
}
```

### Secondary Colors

```json
{
  "color-secondary-base": "#0A1F44",
  "color-secondary-dark": "#050E22",
  "color-secondary-light": "#1A3A66",
  "color-secondary-lighter": "#3A5A88",
  "color-secondary-20": "#E6ECFE",
  "color-secondary-10": "#F0F4FB"
}
```

### Accent Colors

```json
{
  "color-accent-base": "#2F80ED",
  "color-accent-dark": "#1F5ACC",
  "color-accent-light": "#5B9FF5",
  "color-accent-lighter": "#87BFFF",
  "color-accent-20": "#E8F1FF",
  "color-accent-10": "#F0F7FF"
}
```

### Neutral Colors

```json
{
  "color-neutral-0": "#FFFFFF",
  "color-neutral-50": "#F8F9FB",
  "color-neutral-100": "#F0F2F7",
  "color-neutral-200": "#E8EDF3",
  "color-neutral-300": "#D9DFEB",
  "color-neutral-400": "#BCCCE0",
  "color-neutral-500": "#8B92A0",
  "color-neutral-600": "#5F6674",
  "color-neutral-700": "#343A40",
  "color-neutral-800": "#1F2329",
  "color-neutral-900": "#0F1217"
}
```

### Semantic Colors

```json
{
  "color-success-base": "#10B981",
  "color-success-light": "#D1FAE5",
  "color-warning-base": "#F59E0B",
  "color-warning-light": "#FEF3C7",
  "color-error-base": "#EF4444",
  "color-error-light": "#FEE2E2",
  "color-info-base": "#06B6D4",
  "color-info-light": "#CFFAFE"
}
```

---

## Typography Tokens

### Font Families

```json
{
  "font-family-heading": "Poppins, sans-serif",
  "font-family-body": "Inter, sans-serif",
  "font-family-mono": "Fira Code, monospace"
}
```

### Font Sizes

```json
{
  "font-size-2xs": "12px",
  "font-size-xs": "14px",
  "font-size-sm": "16px",
  "font-size-base": "18px",
  "font-size-lg": "20px",
  "font-size-xl": "24px",
  "font-size-2xl": "28px",
  "font-size-3xl": "36px",
  "font-size-4xl": "48px"
}
```

### Font Weights

```json
{
  "font-weight-regular": "400",
  "font-weight-medium": "500",
  "font-weight-semibold": "600",
  "font-weight-bold": "700"
}
```

### Line Heights

```json
{
  "line-height-tight": "1.2",
  "line-height-snug": "1.4",
  "line-height-normal": "1.5",
  "line-height-relaxed": "1.6",
  "line-height-loose": "1.8"
}
```

### Letter Spacing

```json
{
  "letter-spacing-tight": "-0.5px",
  "letter-spacing-normal": "0px",
  "letter-spacing-wide": "0.5px"
}
```

---

## Spacing Tokens

```json
{
  "space-0": "0px",
  "space-2xs": "4px",
  "space-xs": "8px",
  "space-sm": "12px",
  "space-md": "16px",
  "space-lg": "24px",
  "space-xl": "32px",
  "space-2xl": "48px",
  "space-3xl": "64px",
  "space-4xl": "96px"
}
```

---

## Border Radius Tokens

```json
{
  "radius-none": "0px",
  "radius-sm": "4px",
  "radius-md": "8px",
  "radius-lg": "12px",
  "radius-xl": "16px",
  "radius-2xl": "20px",
  "radius-full": "9999px"
}
```

---

## Shadow Tokens

### Elevation Shadows

```json
{
  "shadow-none": "none",
  "shadow-xs": "0 1px 2px rgba(0, 0, 0, 0.05)",
  "shadow-sm": "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
  "shadow-md": "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.06)",
  "shadow-lg": "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
  "shadow-xl": "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)"
}
```

---

## Motion Tokens

```json
{
  "transition-fast": "150ms ease-in-out",
  "transition-base": "200ms ease-in-out",
  "transition-slow": "300ms ease-in-out",
  "easing-ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "easing-ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "easing-ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}
```

---

## Breakpoints

```json
{
  "breakpoint-xs": "320px",
  "breakpoint-sm": "640px",
  "breakpoint-md": "768px",
  "breakpoint-lg": "1024px",
  "breakpoint-xl": "1280px",
  "breakpoint-2xl": "1536px"
}
```

---

## Z-Index Scale

```json
{
  "z-base": "0",
  "z-dropdown": "1000",
  "z-sticky": "1020",
  "z-fixed": "1030",
  "z-modal-backdrop": "1040",
  "z-modal": "1050",
  "z-popover": "1060",
  "z-tooltip": "1070"
}
```

---

## Component Specific Tokens

### Button Tokens

```json
{
  "button-padding-sm": "8px 16px",
  "button-padding-md": "12px 24px",
  "button-padding-lg": "16px 32px",
  "button-height-sm": "36px",
  "button-height-md": "40px",
  "button-height-lg": "48px",
  "button-border-radius": "8px",
  "button-font-size": "14px",
  "button-font-weight": "600"
}
```

### Input Tokens

```json
{
  "input-padding": "12px 16px",
  "input-height": "40px",
  "input-border-radius": "8px",
  "input-border-width": "1px",
  "input-border-color": "#E8EDF3",
  "input-focus-border-width": "2px",
  "input-focus-border-color": "#2F80ED"
}
```

### Card Tokens

```json
{
  "card-padding": "24px",
  "card-border-radius": "12px",
  "card-border-width": "1px",
  "card-border-color": "#E8EDF3",
  "card-background": "#FFFFFF",
  "card-shadow": "0 1px 3px rgba(0, 0, 0, 0.05)"
}
```

---

## CSS Variables (Tailwind Config)

```css
:root {
  /* Primary Colors */
  --color-primary: #00C48C;
  --color-primary-dark: #00A86F;
  --color-primary-light: #33D4A3;
  
  /* Secondary Colors */
  --color-secondary: #0A1F44;
  --color-secondary-dark: #050E22;
  
  /* Accent Colors */
  --color-accent: #2F80ED;
  --color-accent-dark: #1F5ACC;
  
  /* Neutral Colors */
  --color-neutral-50: #F8F9FB;
  --color-neutral-100: #F0F2F7;
  --color-neutral-200: #E8EDF3;
  --color-neutral-500: #8B92A0;
  --color-neutral-700: #343A40;
  --color-neutral-900: #0F1217;
  
  /* Semantic Colors */
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
  --color-info: #06B6D4;
  
  /* Spacing */
  --space-xs: 8px;
  --space-sm: 12px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  
  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-full: 9999px;
  
  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

---

## Implementation Notes

### Tailwind CSS
Tokens are integrated into `tailwind.config.ts` for automatic availability across the application.

### React Components
Tokens imported as constants from `src/lib/tokens.ts` for JavaScript usage.

### Figma
Tokens synced with Figma design file via Tokens Studio plugin.

### Version Control
Token updates trigger design system documentation regeneration.

---

**Last Updated:** 2026-09-28  
**Version:** 1.0
