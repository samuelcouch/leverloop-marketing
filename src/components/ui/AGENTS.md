# UI Primitives — Design System

## Barrel Export

Every primitive in this directory must be exported from `index.ts`. When adding a new component, always add its export to the barrel.

## Available Primitives

`Button`, `IconButton`, `Input`, `Select`, `Section`, `SectionHeader`, `Badge`, `IconBox`, `FeatureRow`

## Button API

`Button` supports:
- **Variants:** `primary`, `secondary`, `accent`, `ghost`
- **Sizes:** `sm`, `md`, `lg`
- **Shapes:** `rounded`, `pill`
- **Props:** `icon` (LucideIcon or ReactNode), `arrow` (adds ArrowRight), `iconPosition` (`left` | `right`), `fullWidth`
- Renders as `<a>` when given an `href` prop.

## Styling Rules

- Use Tailwind utility classes exclusively. No CSS modules or inline `style` objects.
- Use semantic color tokens from the theme — never raw hex or Tailwind palette colors:
  - **Text:** `heading`, `body`, `muted`
  - **Surfaces:** `surface`, `subtle`, `raised`, `warm`
  - **Borders:** `edge`, `edge-light`, `divider`
  - **Brand:** `accent`, `accent-hover`, `accent-soft`
  - **Dark UI:** `ink`, `ink-hover`
  - **Status:** `success`, `success-soft`, `success-dark`, `warning-soft`, `warning-dark`, `danger`, `danger-soft`
- Use `font-display` class for heading/display text (Bricolage Grotesque).

## Template Reusability

Keep primitives completely generic — no product-specific logic. These components should work for any SaaS product without modification.
