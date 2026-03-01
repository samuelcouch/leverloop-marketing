import fs from 'node:fs';
import path from 'node:path';

const roots = [
  path.resolve('src/components'),
  path.resolve('src/layouts'),
  path.resolve('src/pages'),
];

const allowedExtensions = new Set(['.ts', '.tsx', '.astro', '.css']);

const hexColorRegex = /#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})\b/g;
const forbiddenTailwindColorRegex =
  /\b(?:bg|text|border|from|to|via|ring|stroke|fill)-(?:white|black)(?:\/[0-9]{1,3})?\b|\b(?:bg|text|border|from|to|via|ring|stroke|fill)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-[0-9]{1,3}(?:\/[0-9]{1,3})?\b/g;

function walk(dir, collector) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(abs, collector);
      continue;
    }
    if (!allowedExtensions.has(path.extname(entry.name))) {
      continue;
    }
    collector.push(abs);
  }
}

function findLineNumber(source, index) {
  let line = 1;
  for (let i = 0; i < index; i += 1) {
    if (source[i] === '\n') line += 1;
  }
  return line;
}

const files = [];
for (const root of roots) {
  if (fs.existsSync(root)) walk(root, files);
}

const violations = [];

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');

  for (const match of source.matchAll(hexColorRegex)) {
    if (!match[0]) continue;
    violations.push({
      file,
      line: findLineNumber(source, match.index ?? 0),
      rule: 'hex',
      value: match[0],
    });
  }

  for (const match of source.matchAll(forbiddenTailwindColorRegex)) {
    if (!match[0]) continue;
    violations.push({
      file,
      line: findLineNumber(source, match.index ?? 0),
      rule: 'tailwind-palette',
      value: match[0],
    });
  }
}

if (violations.length > 0) {
  console.error('Color lint failed. Use semantic theme tokens/classes instead of raw hex or default Tailwind palettes.');
  for (const v of violations) {
    const relative = path.relative(process.cwd(), v.file);
    console.error(`- ${relative}:${v.line} [${v.rule}] ${v.value}`);
  }
  process.exit(1);
}

console.log(`Color lint passed (${files.length} files scanned).`);
