# UI Primitives — Design System

## Barrel Export

Every primitive in this directory must be exported from `index.ts`. When adding a new component, always add its export to the barrel.

## Available Primitives

`Button`, `IconButton`, `Input`, `Select`, `Section`, `SectionHeader`, `Badge`, `IconBox`, `FeatureRow`

## Button API

`Button` supports:
- **Variants:** `primary`, `secondary`, `accent`, `ghost`, `none`
- **Sizes:** `sm`, `md`, `lg`
- **Shapes:** `rounded`, `pill`
- **Props:** `icon` (LucideIcon or ReactNode), `arrow` (adds ArrowRight), `iconPosition` (`left` | `right`), `fullWidth`, `iconBubble`, `iconBubbleClassName`
- Renders as `<a>` when given an `href` prop.

### Icon Bubble

Set `iconBubble` to wrap the icon/arrow in a circular container with a hover scale effect. Use this for prominent CTAs (e.g., navbar, hero). When active:
- Padding becomes asymmetric (more left, tight right) to visually balance the bubble.
- The bubble defaults to `bg-white/20 text-white`. Override with `iconBubbleClassName`.
- Requires `arrow` or `icon` to be set — ignored otherwise.

### Variant `none`

Use `variant="none"` when the button's appearance is fully controlled via `className` (e.g., scroll-dependent or state-dependent styling). No background, color, or hover styles are applied.

### When to use which variant

| Variant | Use for |
|---------|---------|
| `primary` | Main actions — dark `ink` background, white text |
| `secondary` | Secondary actions — bordered, subtle |
| `accent` | Brand-colored actions — `accent` background |
| `ghost` | Tertiary/inline links — text-only, no background |
| `none` | Dynamic styling controlled entirely via `className` |

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
