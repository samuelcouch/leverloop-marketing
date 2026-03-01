import fs from 'node:fs';
import path from 'node:path';

const cssPath = path.resolve('src/styles/global.css');
const css = fs.readFileSync(cssPath, 'utf8');

function fail(message) {
  console.error(message);
  process.exit(1);
}

const rootMatch = css.match(/:root\s*\{([\s\S]*?)\n\}/);
if (!rootMatch) {
  fail('Could not find :root token block in src/styles/global.css');
}

const vars = new Map();
for (const match of rootMatch[1].matchAll(/--([\w-]+)\s*:\s*([^;]+);/g)) {
  vars.set(`--${match[1]}`, match[2].trim());
}

function parseHex(hex) {
  const value = hex.replace('#', '').trim();
  if (value.length === 3) {
    return {
      r: parseInt(value[0] + value[0], 16),
      g: parseInt(value[1] + value[1], 16),
      b: parseInt(value[2] + value[2], 16),
      a: 1,
    };
  }
  if (value.length === 6) {
    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16),
      a: 1,
    };
  }
  if (value.length === 8) {
    return {
      r: parseInt(value.slice(0, 2), 16),
      g: parseInt(value.slice(2, 4), 16),
      b: parseInt(value.slice(4, 6), 16),
      a: parseInt(value.slice(6, 8), 16) / 255,
    };
  }
  throw new Error(`Unsupported hex format: ${hex}`);
}

function parseRgb(input) {
  const match = input
    .replace(/\s+/g, ' ')
    .match(/^rgba?\(([^)]+)\)$/i);
  if (!match) {
    throw new Error(`Unsupported rgb/rgba format: ${input}`);
  }

  const parts = match[1].split(',').map((part) => part.trim());
  if (parts.length < 3 || parts.length > 4) {
    throw new Error(`Unsupported rgb component count: ${input}`);
  }

  return {
    r: Number(parts[0]),
    g: Number(parts[1]),
    b: Number(parts[2]),
    a: parts[3] !== undefined ? Number(parts[3]) : 1,
  };
}

function resolveColor(rawValue, depth = 0) {
  if (depth > 10) {
    throw new Error('Exceeded variable resolution depth');
  }

  const value = rawValue.trim();

  const varMatch = value.match(/^var\((--[\w-]+)\)$/);
  if (varMatch) {
    const next = vars.get(varMatch[1]);
    if (!next) {
      throw new Error(`Unknown variable reference: ${varMatch[1]}`);
    }
    return resolveColor(next, depth + 1);
  }

  if (value.startsWith('#')) {
    return parseHex(value);
  }

  if (/^rgba?\(/i.test(value)) {
    return parseRgb(value);
  }

  throw new Error(`Unsupported color value: ${value}`);
}

function blend(foreground, background) {
  const a = foreground.a + background.a * (1 - foreground.a);
  if (a === 0) {
    return { r: 0, g: 0, b: 0, a: 0 };
  }

  return {
    r: (foreground.r * foreground.a + background.r * background.a * (1 - foreground.a)) / a,
    g: (foreground.g * foreground.a + background.g * background.a * (1 - foreground.a)) / a,
    b: (foreground.b * foreground.a + background.b * background.a * (1 - foreground.a)) / a,
    a,
  };
}

function srgbToLinear(channel) {
  const c = channel / 255;
  return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
}

function luminance(color) {
  return (
    0.2126 * srgbToLinear(color.r) +
    0.7152 * srgbToLinear(color.g) +
    0.0722 * srgbToLinear(color.b)
  );
}

function contrastRatio(foreground, background) {
  const fg = foreground.a < 1 ? blend(foreground, background) : foreground;
  const bg = background.a < 1 ? blend(background, { r: 255, g: 255, b: 255, a: 1 }) : background;

  const l1 = luminance(fg);
  const l2 = luminance(bg);
  const lighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return (lighter + 0.05) / (darker + 0.05);
}

const color = (token) => {
  const value = vars.get(token);
  if (!value) {
    throw new Error(`Token not found in :root: ${token}`);
  }
  return resolveColor(value);
};

const whiteBackground = color('--ll-background-screen');
const neutralLayer = color('--ll-background-neutral');
const neutralBackground = neutralLayer.a < 1 ? blend(neutralLayer, whiteBackground) : neutralLayer;

const checks = [
  {
    name: 'Content Primary on Background Neutral',
    fg: '--ll-content-primary',
    bg: neutralBackground,
    min: 7,
    expectation: 'AAA',
  },
  {
    name: 'Content Secondary on Background Neutral',
    fg: '--ll-content-secondary',
    bg: neutralBackground,
    min: 7,
    expectation: 'AAA',
  },
  {
    name: 'Content Tertiary on Background Neutral',
    fg: '--ll-content-tertiary',
    bg: neutralBackground,
    maxExclusive: 4.7,
    expectation: 'Do not use',
  },
  {
    name: 'Content Link on Background Neutral',
    fg: '--ll-content-link',
    bg: neutralBackground,
    min: 7,
    expectation: 'AAA',
  },
  {
    name: 'Content Primary on White',
    fg: '--ll-content-primary',
    bg: '--ll-background-screen',
    min: 7,
    expectation: 'AAA',
  },
  {
    name: 'Content Secondary on White',
    fg: '--ll-content-secondary',
    bg: '--ll-background-screen',
    min: 7,
    expectation: 'AAA',
  },
  {
    name: 'Content Tertiary on White',
    fg: '--ll-content-tertiary',
    bg: '--ll-background-screen',
    min: 4.5,
    maxExclusive: 7,
    expectation: 'AA',
  },
  {
    name: 'Content Link on White',
    fg: '--ll-content-link',
    bg: '--ll-background-screen',
    min: 7,
    expectation: 'AAA',
  },
];

const failures = [];

for (const check of checks) {
  const fg = color(check.fg);
  const bg = typeof check.bg === 'string' ? color(check.bg) : check.bg;
  const ratio = contrastRatio(fg, bg);

  const isAboveMin = check.min === undefined || ratio >= check.min;
  const isBelowMax = check.maxExclusive === undefined || ratio < check.maxExclusive;

  if (!isAboveMin || !isBelowMax) {
    failures.push({
      name: check.name,
      ratio,
      expectation: check.expectation,
      detail: [
        check.min !== undefined ? `>= ${check.min.toFixed(1)}` : null,
        check.maxExclusive !== undefined ? `< ${check.maxExclusive.toFixed(1)}` : null,
      ]
        .filter(Boolean)
        .join(' and '),
    });
  }
}

if (failures.length > 0) {
  console.error('Color accessibility check failed.');
  for (const failure of failures) {
    console.error(
      `- ${failure.name}: ${failure.ratio.toFixed(2)} (expected ${failure.expectation}${failure.detail ? `, ${failure.detail}` : ''})`,
    );
  }
  process.exit(1);
}

console.log('Color accessibility check passed.');
for (const check of checks) {
  const fg = color(check.fg);
  const bg = typeof check.bg === 'string' ? color(check.bg) : check.bg;
  const ratio = contrastRatio(fg, bg);
  console.log(`- ${check.name}: ${ratio.toFixed(2)} (${check.expectation})`);
}
