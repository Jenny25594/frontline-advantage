# Design System: Core Components

## Button Component Variations

### Primary Button
**Purpose:** Main call-to-action  
**Default state:** Emerald green (#00C48C)

```
Label: Learn Now
Background: #00C48C
Text: White, 600 weight
Padding: 12px 24px
Border radius: 8px
States:
- Hover: #00A86F (darken 10%)
- Active: #008856 (darken 20%)
- Disabled: 50% opacity
- Loading: spinner overlay
```

### Secondary Button
**Purpose:** Alternative actions  
**Default state:** Navy outline

```
Label: Cancel
Background: Transparent
Border: 2px solid #0A1F44
Text: #0A1F44, 600 weight
Padding: 12px 24px
Border radius: 8px
States:
- Hover: Light navy background (#F0F4FB)
- Active: Darker navy (#050E22)
- Disabled: 50% opacity
```

### Tertiary Button
**Purpose:** Tertiary or less prominent actions  
**Default state:** Electric blue ghost

```
Label: Learn More
Background: Transparent
Text: #2F80ED, 600 weight
Padding: 12px 24px
Border radius: 8px
States:
- Hover: #F0F7FF background
- Active: Darker blue (#1F5ACC)
- Disabled: 50% opacity
```

---

## Input Components

### Text Input
```
Padding: 12px 16px
Height: 40px
Border: 1px solid #E8EDF3
Border radius: 8px
Font: Inter, 16px, 400
Placeholder text: #8B92A0 (medium gray)
Focus state: 2px solid #2F80ED border
Error state: 1px solid #EF4444 border
Disabled: 50% opacity, no interaction
```

### Checkbox
```
Size: 20x20px
Border: 2px solid #E8EDF3
Border radius: 4px
Checked: #00C48C background, white checkmark
Focus: 2px solid #2F80ED outline
Disabled: 50% opacity
```

### Radio Button
```
Size: 20x20px
Outer circle: 2px solid #E8EDF3
Inner circle (checked): 8px #00C48C
Focus: 2px solid #2F80ED outline
Disabled: 50% opacity
```

### Toggle Switch
```
Size: 48x28px
Background (off): #E8EDF3
Background (on): #00C48C
Knob: White, 4px border radius
Transition: 200ms ease-in-out
Disabled: 50% opacity
```

### Dropdown/Select
```
Padding: 12px 16px
Height: 40px
Border: 1px solid #E8EDF3
Border radius: 8px
Chevron icon: Right-aligned
Open state: 2px solid #2F80ED border
Options background: White
Hover option: #F8F9FB background
```

---

## Card Component

### Standard Card
```
Background: White or #F8F9FB
Border: 1px solid #E8EDF3
Padding: 24px
Border radius: 12px
Shadow: 0 1px 3px rgba(0, 0, 0, 0.05)
Hover shadow: 0 4px 12px rgba(0, 0, 0, 0.08)
Transition: 200ms ease-in-out
```

### Interactive Card
```
Cursor: pointer
On hover: Scale up 2px, shadow increases
On click: Provides feedback (color change or border highlight)
```

---

## Badge Component

### Success Badge
```
Background: #D1FAE5 (10% success color)
Text: #10B981 (success), 500 weight, 12px
Padding: 4px 12px
Border radius: 20px
```

### Primary Badge
```
Background: #E6F9F2 (10% primary color)
Text: #00C48C, 500 weight, 12px
Padding: 4px 12px
Border radius: 20px
```

### Warning Badge
```
Background: #FEF3C7 (10% warning color)
Text: #F59E0B, 500 weight, 12px
Padding: 4px 12px
Border radius: 20px
```

### Error Badge
```
Background: #FEE2E2 (10% error color)
Text: #EF4444, 500 weight, 12px
Padding: 4px 12px
Border radius: 20px
```

---

## Progress Indicators

### Linear Progress Bar
```
Height: 4px
Background (track): #E8EDF3
Fill color: #00C48C
Border radius: 2px
Indeterminate: Animated gradient slide
```

### Circular Progress
```
Size: 48px (adjustable)
Stroke width: 4px
Track: #E8EDF3
Fill: #00C48C
Percentage text: Center, 14px, 600 weight
```

### Step Indicator
```
Completed step:
- Circle background: #00C48C
- Circle checkmark: White
Current step:
- Circle border: 2px #2F80ED
- Circle background: White
Future step:
- Circle border: 2px #E8EDF3
- Circle background: White
Connector line:
- Completed: #00C48C
- Incomplete: #E8EDF3
```

---

## Typography Components

### Heading H1
```
Font: Poppins, 48px, 700
Line height: 1.2 (57.6px)
Letter spacing: -0.5px
Color: #0A1F44 (navy)
Margin bottom: 24px
```

### Heading H2
```
Font: Poppins, 36px, 700
Line height: 1.3 (46.8px)
Letter spacing: -0.5px
Color: #0A1F44
Margin bottom: 20px
```

### Body Text
```
Font: Inter, 16px, 400
Line height: 1.6 (25.6px)
Color: #343A40 (dark gray)
Margin bottom: 16px
```

### Helper Text
```
Font: Inter, 12px, 400
Line height: 1.4 (16.8px)
Color: #8B92A0 (medium gray)
```

---

## Alert/Toast Components

### Info Alert
```
Background: #CFFAFE (10% info)
Border: 1px solid #06B6D4
Border radius: 8px
Padding: 16px
Icon: Info circle, #06B6D4
Text: #0A1F44, 14px
```

### Success Toast
```
Background: #D1FAE5 (10% success)
Border: 1px solid #10B981
Border radius: 8px
Padding: 16px
Icon: Checkmark, #10B981
Text: #0A1F44, 14px
Position: Bottom right
Auto-dismiss: 4 seconds
```

### Error Alert
```
Background: #FEE2E2 (10% error)
Border: 1px solid #EF4444
Border radius: 8px
Padding: 16px
Icon: Alert circle, #EF4444
Text: #0A1F44, 14px
Action: Dismiss button
```

### Warning Alert
```
Background: #FEF3C7 (10% warning)
Border: 1px solid #F59E0B
Border radius: 8px
Padding: 16px
Icon: Warning triangle, #F59E0B
Text: #0A1F44, 14px
```

---

## Modal/Dialog Component

### Standard Modal
```
Backdrop: rgba(0, 0, 0, 0.5)
Modal background: White
Border radius: 12px
Padding: 24px
Max width: 500px (sm), 768px (md), 1024px (lg)
Shadow: 0 20px 25px rgba(0, 0, 0, 0.1)

Header:
- Title: H4 (24px, 600)
- Close button: X icon, top right

Body:
- Content: 16px line height 1.6
- Padding: 24px 0

Footer:
- Primary button (right): Emerald
- Secondary button (left): Navy outline
- Spacing: 8px gap
```

---

## Breadcrumb Component

```
Style: Icon + text
Font: Inter, 14px, 400
Color: #2F80ED (active), #8B92A0 (inactive)
Separator: / (slash)
Spacing: 4px around separator
Last item: No slash
Hover state: #1F5ACC (darker blue)

Example:
Home / Dashboard / Learning / Course Title
```

---

## Pagination Component

```
Style: Numbered buttons with next/prev arrows
Button size: 36x36px
Button style: Square, 4px radius
Active page:
- Background: #00C48C
- Text: White, 600 weight
Inactive page:
- Background: #E8EDF3
- Text: #343A40
- Hover: #00C48C 20% opacity background
Disabled:
- Opacity: 50%
- Cursor: not-allowed
```

---

## Loading Skeleton Component

```
Background: #E8EDF3
Animation: Shimmer effect (left to right)
Border radius: Match component (4px for text, 8px for cards)
Duration: 2 seconds
Easing: ease-in-out

Variants:
- Text line: Height 12px
- Paragraph: 3-4 lines, last line 60% width
- Avatar: 40x40px circle
- Card: Full card outline
```

---

## Tooltip Component

```
Background: #0A1F44 (navy)
Text: White, 12px, 400
Padding: 8px 12px
Border radius: 4px
Arrow: 4px triangle pointing to trigger
Max width: 200px
Word wrap: enabled
Appearance: On hover (200ms delay)
Z-index: 1070
```

---

## Avatar Component

### User Avatar
```
Default size: 40x40px
Border radius: 50% (circle)
Border: 2px solid #E8EDF3
Background: #00C48C if no image
Initials: User first + last name
Font: Poppins, 14px, 600, White
Alternative sizes: 24px, 32px, 48px, 56px
```

### Avatar Group
```
Layout: Overlapping circles (left aligned)
Overlap: -8px
Max visible: 3 (show +N for remainder)
Border: 2px white between avatars
```

---

## Divider Component

### Horizontal Divider
```
Height: 1px
Color: #E8EDF3
Margin: 24px 0
Variant: Solid (default), dashed, dotted
With label:
- Text: #8B92A0, 12px
- Centered over line
```

---

## Tab Component

```
Style: Underline tabs (default), pill tabs, enclosed tabs
Font: Inter, 14px, 600
Color: #8B92A0 (inactive), #0A1F44 (active)
Active indicator: 3px solid #00C48C underline
Padding: 12px 16px
Gap between tabs: 0px (underline), 8px (pill)
Border radius (pill): 20px
Hover: #F8F9FB background (underline style)
```

---

## Menu Component

### Dropdown Menu
```
Background: White
Border: 1px solid #E8EDF3
Border radius: 8px
Shadow: 0 4px 6px rgba(0, 0, 0, 0.07)
Padding: 8px 0
Menu item:
- Padding: 12px 16px
- Font: 14px, 400
- Color: #343A40
- Hover: #F8F9FB background
- Disabled: 50% opacity
Divider: 1px solid #E8EDF3
Z-index: 1000
```

---

**Last Updated:** 2026-09-28  
**Version:** 1.0  
**Status:** Ready for implementation
