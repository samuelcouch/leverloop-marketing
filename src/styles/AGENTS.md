# Styles & Theming

## Tailwind CSS v4

Tailwind is configured via the **Vite plugin** in `astro.config.mjs` — NOT PostCSS. Do not add Tailwind to a PostCSS config.

## Theme Tokens

All semantic color tokens are defined in `global.css` under `@theme {}`. Always use these tokens in components — **never raw hex values or default Tailwind palette colors**.

| Group | Tokens |
|-------|--------|
| Text | `heading`, `body`, `muted` |
| Surfaces | `surface`, `subtle`, `raised`, `warm` |
| Borders | `edge`, `edge-light`, `divider` |
| Brand | `accent`, `accent-hover`, `accent-soft` |
| Dark UI | `ink`, `ink-hover` |
| Success | `success`, `success-soft`, `success-dark` |
| Warning | `warning-soft`, `warning-dark` |
| Danger | `danger`, `danger-soft` |

## Typography

- **Headings/display:** Bricolage Grotesque via the `.font-display` CSS class (defined in `Layout.astro`).
- **Body text:** Plus Jakarta Sans, set on `<body>` in `Layout.astro`.

## Article Prose

The `.article-prose` class in `global.css` styles all long-form blog/article content: `h2`, `h3`, `p`, `strong`, `a`, lists, blockquotes, code/pre, tables, images, figures, and `hr`. When editing these styles, maintain visual consistency with the existing typographic scale.

---

# Colour System Reference

> Source: [LeverLoop Design — Colour](https://wise.design/foundations/colour)

Green means go. It's energetic and vibrant, just like the world we live in. And it's our primary colour, supported by a lively secondary palette that's as at home on buttons as it is on billboards.

---

## Core Colours

As far as the public's concerned, LeverLoop is green. But to us, it's Bright Green, Forest Green, and white with an 8% Forest Green tint thrown in.

| Name | HEX | RGB | CMYK | PMS |
|------|------|-----|------|-----|
| **Bright Green** | `#9FE870` | 159 / 232 / 112 | 47 / 0 / 72 / 0 | PANTONE 7487 |
| **Forest Green** | `#163300` | 22 / 51 / 0 | 54 / 0 / 100 / 80 | PANTONE 2411 |

---

## Secondary Colours

Being the global business that we are, our secondary palette is inspired by the vibrant and energetic colours found around the world.

The more we get to know people, the more we show our secondary palette. Think of it as a visual metaphor for getting closer, and more comfortable.

| Name | HEX | RGB | CMYK | PMS |
|------|------|-----|------|-----|
| **Bright Orange** | `#FFC091` | 255 / 192 / 145 | 0 / 40 / 50 / 0 | PANTONE 163 |
| **Bright Yellow** | `#FFEB69` | 255 / 235 / 105 | 2 / 0 / 65 / 0 | PANTONE 113 |
| **Bright Blue** | `#A0E1E1` | 160 / 225 / 225 | 45 / 0 / 10 / 0 | PANTONE 310 |
| **Bright Pink** | `#FFD7EF` | 255 / 215 / 239 | 0 / 30 / 0 / 0 | PANTONE 671 |
| **Dark Purple** | `#260A2F` | 38 / 10 / 47 | 100 / 100 / 0 / 59 | PANTONE 5255 |
| **Dark Gold** | `#3A341C` | 58 / 52 / 28 | 33 / 43 / 80 / 66 | PANTONE 448 |
| **Dark Charcoal** | `#21231D` | 33 / 35 / 29 | 54 / 27 / 36 / 82 | PANTONE 446 |
| **Dark Maroon** | `#320707` | 50 / 7 / 7 | 47 / 85 / 55 / 59 | PANTONE 4975 |

### Using Secondary Colours

Always start and end with green. It's our first impression and our bye for now.

But introduce the secondary palette when green is nicely established. So the further someone gets through say, an Instagram story, the more you can dial it up.

### Logos in Secondary Colours

When deep into a marketing application, you can also apply our secondary palette to our logo — if it feels appropriate.

---

## Type and Colour

Our colour combos are purposefully complementary, striking, and accessible. They were made to match up, so let's keep them that way.

### Good Combinations

The following background/text pairings are approved:

| Background | Text |
|------------|------|
| Bright Green | Forest Green |
| Bright Pink | Dark Maroon |
| Bright Orange | Dark Maroon |
| Bright Yellow | Dark Gold |
| Bright Blue | Forest Green |
| Forest Green | Bright Green |
| Dark Maroon | Bright Pink |
| Dark Purple | Bright Pink |
| Dark Gold | Bright Yellow |
| Dark Charcoal | Bright Blue |

### Bad Combinations

Do **not** pair colours that lack sufficient contrast or clash visually. Always validate pairings against the good-combination list above.

---

## Product Colours

### Content Colours

Our content colours are based on neutral greys, with a small percentage of green. This creates a clear and accessible visual hierarchy, and makes us distinct by adding hints of our brand colours.

| Name | HEX | RGB | Usage |
|------|------|-----|-------|
| **Content Primary** | `#0E0F0C` | 14 / 15 / 12 | Use to emphasise primary content in relation to other elements nearby. |
| **Content Secondary** | `#454745` | 69 / 71 / 69 | Use for most body text, and in supportive elements that give context to content that's close to it. |
| **Content Tertiary** | `#6A6C6A` | 106 / 108 / 106 | Use in form inputs for placeholders, and for the label that says a field is 'Optional'. Avoid using elsewhere. |
| **Content Link** | `#163300` | 22 / 51 / 0 | Use for links and for external link icons that appear in line with link text. |

### Interactive Colours

Our interactive colours are used in interactive components and icons.

Primary and accent colours use the core brand colours to stand out. The secondary and tertiary colours are more neutral, to support the visual hierarchy of the screen.

| Name | HEX | RGB | Usage |
|------|------|-----|-------|
| **Interactive Primary** | `#163300` | 22 / 51 / 0 | Conveys interactivity. Use for neutral interactive elements, or for emphasising active items within an interactive list. |
| **Interactive Accent** | `#9FE870` | 159 / 232 / 112 | Use sparingly as a pop of accent colour in interactive elements. For example, the background for primary buttons. |
| **Interactive Secondary** | `#868685` | 134 / 134 / 133 | Use for de-emphasised interactivity, like the borders on inputs and checkboxes, and the clear button on a search input. Do not use on text. |
| **Interactive Control** | `#163300` | 22 / 51 / 0 | Use in components for text and icons that sit on a Bright Green Interactive Accent surface colour. This keeps them visible when users switch to dark mode. Can also be used for surfaces if needed. |
| **Interactive Contrast** | `#9FE870` | 159 / 232 / 112 | Use in components for text and icons that sit on a Forest Green Interactive Primary surface colour. This keeps them visible when users switch to dark mode. |

### Background Colours

Background colours are used for larger surface areas that are light enough to be overlayed with content and other components.

| Name | HEX | RGBA | Usage |
|------|------|------|-------|
| **Background Screen** | `#FFFFFF` | 255 / 255 / 255 | The lowest level background used in most screens. |
| **Background Elevated** | `#FFFFFF` | 255 / 255 / 255 | Use for elevated surfaces that partially show the content behind it, like bottom sheets and sidebars. |
| **Background Neutral** | `#163300` at 8% opacity | 22 / 51 / 0 / 0.08 | Use for delineating areas without using borders, like neutral alerts and avatars. |
| **Background Overlay** | `#163300` at 8% opacity | 22 / 51 / 0 / 0.08 | Use for faintly darkening an area, for example on loading shimmers. |

### Border Colours

We use border colours to subtly separate different blocks of content.

| Name | HEX | RGBA | Usage |
|------|------|------|-------|
| **Border Neutral** | `#0E0F0C` at 12% opacity | 14 / 15 / 12 / 0.12 | Use in most separators, for example in the section header and tabs components. |
| **Border Overlay** | `#0E0F0C` at 12% opacity | 14 / 15 / 12 / 0.12 | Use on the edges of images to differentiate them from the background, such as flags in avatars. |

### Sentiment Colours

Our sentiment colours are used to indicate positive, negative, or warning.

They're needed in components like alerts and error messages. But it's best to avoid using them elsewhere on screens where possible. If you need to emphasise text, it's better to use bold and the Content Primary instead.

| Name | HEX | RGB | Usage |
|------|------|-----|-------|
| **Sentiment Negative** | `#A8200D` | 168 / 32 / 13 | Indicates negative sentiment, for example on error states or destructive actions. Can be used as text or as a background. |
| **Sentiment Positive** | `#2F5711` | 47 / 87 / 17 | Indicates positive sentiment, for example in positive alerts. Can be used as text or as a background. |
| **Sentiment Warning** | `#EDC843` | 237 / 200 / 67 | Indicates warning sentiment, for example on alerts. Should only be used as a background colour and is **not accessible as text**. |

### Base Colours

Base colours are useful colours that we can use in several different scenarios.

| Name | HEX | RGB | Usage |
|------|------|-----|-------|
| **Base Contrast** | `#FFFFFF` | 255 / 255 / 255 | Use for copy on negative buttons. Turns dark on dark mode to keep elements visible. |
| **Base Light** | `#FFFFFF` | 255 / 255 / 255 | Use in informational or interactive elements where white is needed, or where other colours would be too prominent in the hierarchy. |
| **Base Dark** | `#121511` | 18 / 21 / 17 | Use in informational or interactive elements where a dark colour is needed. |

### Colour Balance in Product Screens

We're not afraid of white space. White is the most prominent colour in our UI and we use it to let screens breathe. We complement the white with our neutral colour, which we use to add warmth and separate elements.

Next up are the content greys, followed by a smaller proportion of Forest Green for interactivity, plus an occasional pop of Bright Green as an accent.

Treat these proportions as a guide, not as hard and fast rules. There's always a degree of flexibility.

---

## Theming

Our colours work equally well in dark mode.

---

## Colour Accessibility

### Colours on Background Neutral

| Name | Accessible | WCAG Score | APCA Score |
|------|------------|------------|------------|
| Content Primary | ✅ | AAA | 95.5 |
| Content Secondary | ✅ | AAA | 81.6 |
| Content Tertiary | ❌ | Don't use | Don't use |
| Link | ✅ | AAA | 90.30 |

### Colours on White

| Name | Accessible | WCAG Score | APCA Score |
|------|------------|------------|------------|
| Content Primary | ✅ | AAA | 105.6 |
| Content Secondary | ✅ | AAA | 91.7 |
| Content Tertiary | ⚠️ | AA | 105.6 |
| Link | ✅ | AAA | 100.35 |

---

# Markup Reference

> Source: [LeverLoop Design — Markup](https://wise.design/foundations/markup)

Markup is LeverLoop's way to visually emphasise parts of a text. It can be applied on standalone texts or inside several components. Use it sparingly.

---

## When to Use

### Use markup

- To visually emphasise certain words to draw attention
- To inject links to your text
- To convey the sentiment of a word visually

### Don't use markup

- Abusively — our product is not a colouring book
- On full text — only tag one or two words
- Just to make something pretty without a good reason

---

## Effects

### Visual

Most tags only apply visual emphasis on words by increasing font weight and/or changing colour.

### Functional

Special tags can also add extra functionality by making the text interactive to support actions like opening a URL.

---

## Accessibility

The visual effects that a tag applies don't need to be translated to screen readers, unless they change the meaning of the content.

When a tag changes the meaning or adds functionality to the marked words, it might require some extra information to work seamlessly with screen readers. Find out more about them in the attribute list of each tag.

---

## Tags

### Important

`<important></important>`

Applies primary content colour and increases the font weight to semibold.

---

### Positive

`<positive></positive>`

Applies positive sentiment colour and increases the font weight to semibold.

---

### Negative

`<negative></negative>`

Applies negative sentiment colour and increases the font weight to semibold.

---

### Strikethrough

`<strikethrough></strikethrough>`

Applies strikethrough text style. By default, text with strikethrough tags will be omitted from screen readers.

| Attribute | Required | Documentation |
|-----------|----------|---------------|
| `accessibilityShown` | | A boolean attribute to override the default behaviour. When it's set to `true` the content will be annotated with "[strikethrough starts]" and "[strikethrough ends]". |

---

### Link

`<link url=""></link>`

Allows injecting a URL into the text that will be opened when the user interacts with the tagged words. Applies primary interactive colour, increases the font weight to semibold, and underlines the text by default on web (and only when "accessibility shapes" are enabled on mobile).

| Attribute | Required | Documentation |
|-----------|----------|---------------|
| `url` | | Link requires a valid URL that will be opened when the user taps or clicks on the tagged words. |
| `accessibilityLabel` | | When present, it's used as an action name when a screen reader iterates through the available user interactions of the text. Use it when the tagged content doesn't articulate the result of the action properly. When missing, screen reader will read out the wrapped words as the action name. |

---

## How to Use

### Tags

You can add markup to your text by simply wrapping the words you'd like to emphasise with the supported tags using XML syntax.

**Example**

`You save up to <positive>17.20 GBP</positive>`

### Attributes

A tag can have additional attributes that may be required for its functionality or to enhance accessibility.

**Example**

`By proceeding you accept our <link url="https://leverloop.com/t&c" accessibilityLabel="Open terms and conditions">terms and conditions</link>.`

---

## Markup vs HTML

Even though the syntax is the same, Markup intentionally avoids using existing HTML tags. Defining our own LeverLoop-specific tags allows us to have full control over the supported tags and attributes, which comes with its own set of benefits.

### Expressive

Declaring our own tags allows us to be more expressive with our naming, making them more accessible for colleagues with varying technical backgrounds.

**Example**

`<link>` vs `<a>` or `<strikethrough>` vs `<s>`

### Flexible

It helps us be more flexible by adding attributes that fit, yet equally strict by limiting available attributes for any given tag.

**Example**

`<link url="https://leverloop.com" accessibilityLabel="Open LeverLoop home page">`

### Safe

Last but not least, it increases safety, by forcing us to parse our own tags, without lazily letting the browser handle it, which would allow for potential injections.

---

## Markup vs Markdown

Markup helps to better convey the sentiment of words in a text by applying visual changes. It should be used sparingly in shorter texts or labels.

Markdown, however, helps to structure a long block of text (e.g. article or post) by adding hierarchical structure to it. It supports different levels of headings, lists, quotes, etc. Given that they're used for different purposes, they should not be mutually exclusive. In the future we'll explore the possibility of mixing them.

### Usage Examples

- **Money Input** — Information field uses the `<important>` markup tag to emphasise the available amount the user has to spend from their balance.
- **Help Centre Article** — Article using markdown elements like headings on the top and multiple lists inside of the content.

---

## Availability

| Platform | Available | Developer Documentation |
|----------|-----------|------------------------|
| Android | ✅ | — |
| iOS | ✅ | — |
| Web | ✅ | — |

---

# Padding Reference

> Source: [LeverLoop Design — Padding](https://wise.design/foundations/padding)

Padding is the internal spacing in components that separates content from external boundaries.

Padding helps content breathe, so places with lots of information don't feel so crowded — making that content easier to consume.

---

## Tokens

### Do

- Use tokens coming from the design system.
- Use semantic tokens instead of token values.

### Don't

- Don't use custom or hard-coded values.

| Name | Value |
|------|-------|
| `padding-x-small` | 8px |
| `padding-small` | 16px |
| `padding-medium` | 24px |
| `padding-large` | 32px |

---

## Usage Patterns

### Compact Data

Components that are usually part of a set, and that need to contain distinct information in a small area.

**Tokens:** `padding-small` (16px)

**Examples:**

- Accounts
- Stacked components

---

### Variable Height Content

Components that have a varying amount of content inside use paddings that give content space to breathe, make it easier to read and digest.

**Tokens:** `padding-medium` (24px)

**Examples:**

- Alert
- Nudge
- Popover

---

### Card-Based Content

Content that goes inside a card (for example, with a background) may have a small padding area if the amount of information you need to fit inside cannot afford bigger space.

**Tokens:** `padding-small` (16px)

**Examples:**

- Graphs and banners

---

### Footers

Footers have padding around to separate components from the rest of the content. Mobile has tighter paddings due to screen size, whereas it's bigger on desktop.

**Tokens:** `padding-small` (16px), `padding-medium` (24px)

| Breakpoint | Padding |
|------------|---------|
| Mobile | 16px (`padding-small`) |
| Desktop | 24px (`padding-medium`) |

---

# Spacing Reference

> Source: [LeverLoop Design — Spacing](https://wise.design/foundations/spacing)

Spacing tokens separate elements inside components and layout blocks — both horizontally, and vertically.

Our spacing scale helps make things consistent, while also making content easier to scan in a screen layout.

---

## Foundational Tokens

We use foundational tokens to set up all of our components and templates. They are used as a base for our semantic tokens.

| Name | Value |
|------|-------|
| `size-4` | 4px |
| `size-8` | 8px |
| `size-12` | 12px |
| `size-16` | 16px |
| `size-24` | 24px |
| `size-32` | 32px |
| `size-40` | 40px |
| `size-48` | 48px |
| `size-56` | 56px |
| `size-64` | 64px |
| `size-72` | 72px |
| `size-80` | 80px |
| `size-88` | 88px |
| `size-96` | 96px |
| `size-104` | 104px |
| `size-112` | 112px |
| `size-120` | 120px |
| `size-128` | 128px |

---

## Accessibility Scaling

We have a defined scale for accessibility so that when screens are increased in size our content dynamically grows. This ensures customers continue to get an incredible experience no matter what settings they have switched on.

| 100% | 85% | 130% | 155% |
|------|------|------|------|
| 4px | 3px | 5px | 6px |
| 8px | 7px | 10px | 12px |
| 12px | 10px | 16px | 19px |
| 16px | 14px | 21px | 25px |
| 24px | 20px | 31px | 37px |
| etc... | | | |

---

## Semantic Tokens

So you know what space to use, and where, we use semantic tokens. These tokens are linked to our foundational tokens so that you don't need to remember that component default is `size-16`.

### Usage

#### Do

- Use semantic tokens from the design system.
- Use semantic tokens, not foundational tokens in your work.

#### Don't

- Don't use custom or hard-coded values.

---

## Horizontal

Horizontal spacing refers to elements that go next to each other.

| Name | Value | Accessibility scaling |
|------|-------|----------------------|
| `between-cards` | `size-12` | ✅ |
| `between-chips` | `size-8` | ✅ |
| `screen-mobile` | `size-24` | ✅ |
| `component-default` | `size-16` | ✅ |

### Between Cards

Cards are self-contained blocks of content. In product these can be placed next to one another and scroll off screen.

**Examples:**

- Balance cards
- Promotional cards
- Others

### Between Chips

Chips allow us to filter content and are typically placed next to one another and scroll off screen.

**Examples:**

- Chips

### Screen Mobile

This is the overarching spacing that contains our mobile designs.

**Examples:**

- Mobile screens

### Component Default (Horizontal)

When there are no other specific spacing tokens for components, use `component-default`.

**Examples:**

- Buttons

---

## Vertical

Vertical spacing refers to how sections of a screen are separated. It also applies to the spacing between components.

| Name | Value | Accessibility scaling |
|------|-------|----------------------|
| `between-text` | `size-8` | ✅ |
| `image-bottom` | `size-8` | ✅ |
| `display-text-bottom` | `size-16` | ✅ |
| `text-to-component` | `size-16` | ✅ |
| `content-to-button` | `size-24` | ✅ |
| `between-sections` | `size-32` | ✅ |
| `between-options` | `size-0` | ✅ |
| `component-default` | `size-16` | ✅ |

### Between Text

Text is any copy that isn't using a display style.

It's built into our text styles, but you'll need to add it in when they're not in the same block of content.

**Examples:**

- Screen title to body
- Body copy paragraph spacing

### Image Bottom

Our 3D assets contain built-in padding, but sometimes require a little bit of extra breathing room.

**Examples:**

- Image to title

### Display Text Bottom

Display text requires a bit of extra space before other text due to their tight line height, uppercase and bold format.

**Examples:**

- Display bottom

### Text to Component

This refers to any text style that isn't using a display style to any component.

**Examples:**

- Title to component
- Body copy to component

### Content to Button

When a button is displayed directly below the content or form and not in a footer.

**Examples:**

- Form field to button

### Between Sections

Sections are groups of content that we need stronger proximity between so that it's evident they're separate.

**Examples:**

- Launchpad sections
- Between option sections

### Between Options

Spacing is built in to all option components due to the large touch area. This means spacing between options is set to 0px by default.

**Examples:**

- Between activity options

### Component Default (Vertical)

When there are no other specific component spacing tokens, use `component-default`.

**Examples:**

- Below section header
- Between form fields
- Between buttons

---

# Transitions Reference

> Source: [LeverLoop Design — Transitions](https://wise.design/foundations/transitions)

Transitions occur when users move between screens starting a new flow or navigating within a journey. They help users navigate through the app creating a sense of continuation. These transitions should always be unobtrusive and natural.

---

## When to Use and Types

Currently, we support two main kinds of page transitions:

- **Upwards**
- **Sideways**

And two supplementary modal transitions:

- **Modals**
- **Bottom sheets**

| Type | Purpose |
|------|---------|
| **Upwards** | Indicate the start of a new action. Use it for the opening of a new flow like Send or Request Money. |
| **Sideways** | Indicate the continuation of a flow. Use it for consecutive pages within the same flow. |
| **Modal** | Use it as a quick supplementary task like selectors or filters during an activity. It should always be dismissible. |
| **Bottom Sheet** | Use it as a small supplementary action or content display during a flow or activity. |

---

## Upwards

This pattern indicates the start of a new flow/action in the app, such as send or receive money. Its purpose is to communicate that a new user journey or action starts from that point. It must always contain a dismissal button on its top left corner.

Upcoming screen comes in from the bottom fully covering the previous screen.

| Platform | Behaviour |
|----------|-----------|
| iOS | Screen slides in from the bottom |
| Android | Screen slides in from the bottom |

---

## Sideways

This pattern indicates the continuation of a flow whenever an action has already been started. It allows the user to navigate forward and backward between pages at consecutive levels within the same hierarchy.

Sideways are lateral transitions used for consecutive screens on the same hierarchy level.

| Platform | Behaviour |
|----------|-----------|
| iOS | An overlay is shown below the upcoming page |
| Android | Android doesn't use overlay |
| Web | The content moves from forward to backward and disappears quickly with a transparency effect. |

---

## Modals

A Modal is a container to display supporting content such as selectors or a short supplementary task on mobile experiences and it should always have a dismiss button on the top left corner. For more information on this topic, check the Modals page in the Components section.

A modal is an overlay that interrupts the user's task to show an important message, disabling the rest of the screen.

| Platform | Behaviour |
|----------|-----------|
| iOS | A full page bottom sheet is available and recommended to be used for selectors and single page actions. |
| Android | Bottom sheets are displayed as full pages but serve the same purpose as iOS. |

---

## Bottom Sheets

A bottom sheet is a container you can use to display supporting content or a short, supplementary task on mobile and web experiences, also known as Modals or Pop-ups. For more information on this topic, check the Bottom Sheets page in the Components section.

Bottom Sheets support supplementary tasks on mobile and web experiences.

| Platform | Behaviour |
|----------|-----------|
| iOS | Container comes in from the bottom. |
| Android | Container comes in from the bottom. |
| Web | Container comes in from the bottom and disappears with a fade when dismissed. |

---

## Best Practices

- **Do not** use consecutive modals to replace typical page-to-page user flows.
- Designers should always specify which kind of transition should be used when handing off flows to Engineers.
- Transitions should always be intentional. Avoid using different transition patterns for similar needs.
