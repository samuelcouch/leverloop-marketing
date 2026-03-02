---
name: blog-writer
description: "Create new blog posts for the LeverLoop marketing site. Use when the user wants to write a blog post, create a blog article, or add a new blog entry. Triggers on: write a blog post, create a blog article, new blog entry, blog about."
---

# LeverLoop Blog Writer

A multi-step pipeline for creating SEO and AEO-optimized blog posts for the LeverLoop marketing site.

## Trigger

Use this skill when the user wants to create a new blog post. Look for phrases like:
- "write a blog post"
- "create a blog article"
- "new blog entry"
- "blog about..."

## Purpose & Competitive Positioning

Every blog post is a marketing asset for LeverLoop. The goal is to educate the reader AND drive them toward LeverLoop as the best option.

- **These are NOT puff pieces.** Write genuinely useful, specific content that a trades business owner would respect and share. The quality of the advice is what earns trust.
- **It IS okay to mention competitors** (DripJobs, ServiceTitan, Housecall Pro, Jobber, etc.) for credibility and SEO. Readers searching for alternatives or comparisons should find us.
- **But LeverLoop must always be the hero.** Every post should leave the reader thinking "I should try LeverLoop," not "I should try [competitor]."
- **Competitor mentions should be brief and factual.** Acknowledge what a competitor does, then pivot to how LeverLoop does it better, more completely, or as part of a full system. Never dedicate entire sections to praising a competitor.
- **Positioning pattern:** "Competitor X proved that [concept] matters. LeverLoop takes it further by [specific advantage]." One or two sentences, not a whole section.
- **Never trash competitors.** Be respectful and factual. Let LeverLoop's breadth and depth speak for itself.
- **The CTA is always LeverLoop.** Every post should end with the reader knowing exactly how LeverLoop solves the problem discussed.

## AEO Focus

Default to content that answers **specific, conversational queries** for bottom- and mid-funnel intents.

- Target distribution over time:
  - ~50% bottom-funnel (comparisons, alternatives, pricing, implementation)
  - ~40% mid-funnel (playbooks, how-tos, use-case guides)
  - ~10% educational (definitions, broad overviews that support the above)
- When a user requests a broad educational topic, consider:
  - Reframing it into 1–3 specific questions and/or
  - Linking it to existing or planned bottom/mid-funnel posts.

## Required Inputs

Before starting, gather these inputs from the user (ask if not provided):

1. **Proposed Blog Title** — The working title for the post
2. **Primary Keyword** — The main SEO keyword to target
3. **Secondary / Long-Tail Keywords** — Additional keywords (comma-separated)
4. **Brief Content Angle / Outline** — Bullet points describing the content direction
5. **Primary User Query (Conversational Question)**
   - The exact natural language question this post should answer.
   - Example: "How much revenue is my HVAC company losing to declined repairs?"
6. **Persona & Context**
   - Who is asking this question and in what situation.
   - Example: "HVAC company owners running 4–10 trucks who suspect they're leaving money on the table but don't have visibility into what's slipping through."
7. **Funnel Stage**
   - One of: `bottom`, `mid`, `educational`.
   - Default bias: Aim for **bottom** or **mid** unless the user explicitly asks for educational content.
8. **Primary Page Type**
   - One of: `comparison`, `how-to`, `checklist/template`, `case-study`, `FAQ-collection`.
   - Choose the type that best matches the primary query and funnel stage.

## Brand Voice (Summary)

Load the `leverloop-brand-voice` skill for full reference. Key rules:

- **Voice:** Direct. Warm. Trades-literate. Specific. Confident.
- **Lead with the outcome**, not the feature.
- **Be specific**, not vague. Use concrete numbers, real scenarios.
- **Write like a person**, not a platform. Read it out loud — if it sounds like something you'd say to a contractor at a trade show, it's right.
- **Respect the trade.** Never patronize. Use their language.
- **Confidence without arrogance.** We know LeverLoop works. We say so plainly. But we never punch down.
- **Brand name:** Always "LeverLoop" (one word, capital L capital L). Never "Lever Loop" or "LL".
- **Avoid:** leverage (verb), solution, utilize, streamline, robust, seamless, end-to-end, stakeholder, empower, disrupt.
- **NEVER use em dashes (—).** Use periods or commas instead.
- **Tone for blog:** Sound like a sharp operator giving advice to a friend. Practical, specific, opinionated. Never generic.

## Pipeline Steps

### Step 1: Build Basic Outline

Create a structured outline that follows an AEO-friendly pattern:

- H1: Directly matches the **primary user query** (incorporate primary keyword naturally)
- **Quick answer block** at the very top (before the standard introduction):
  - 2–3 sentences that directly answer the query
  - 3–5 bullets summarizing the main options/steps/recommendations
- Introduction hook (1–2 short paragraphs giving context)
- H2: "Who this is for"
- 3–5 main H2 sections based on the user's bullet points and selected **page type**
- H2: "How LeverLoop fits into this" (or similar product-role section) for bottom/mid-funnel posts
- H2: "Frequently asked questions" with 4–8 FAQs derived from likely follow-up questions
- H2: "What to do next" with clear CTAs and internal links

Present the outline to the user for approval before proceeding.

### Step 2: Deep Section Planning (Oracle Consultation)

For EACH H2 section in the outline, use the `oracle` tool to:
- Develop detailed subsection structure (H3s)
- Identify key points to cover
- Suggest supporting data, examples, or statistics
- Recommend internal linking opportunities to existing LeverLoop pages
- Ensure each section directly supports the **primary user query** and funnel stage
- Propose the **quick answer** (2–3 sentences + 3–5 bullets) for the top of the article
- Suggest 4–8 **FAQ questions** in natural language, based on likely follow-ups
- Recommend places to use **comparison tables** or structured lists for AI-friendly parsing
- Call out where to use **explicit entity naming** (e.g., "LeverLoop is the operating system for trades businesses" instead of "it")

Example oracle prompt:
```
Expand this blog section for an article about [PRIMARY KEYWORD]:

Primary user query: "[PRIMARY USER QUERY]"
Persona & context: [PERSONA & CONTEXT]
Funnel stage: [bottom | mid | educational]
Page type: [comparison | how-to | checklist/template | case-study | FAQ-collection]

Section: [H2 TITLE]
Context: This is for LeverLoop, the operating system for trades businesses (HVAC, plumbing, electrical, pool & spa).
Target audience: Trades business owners, dispatchers, office managers

Provide:
1. 2-3 H3 subsections with key talking points
2. Suggested examples or use cases (prefer real-world scenarios from HVAC, plumbing, electrical shops)
3. Any statistics or data points to research or insert
4. Internal linking opportunities (blog posts, feature pages at /features/[slug])
5. Suggestions for 1-2 FAQ questions that relate to this section
6. Notes on where explicit entity naming and tables/lists will help AI parsing
```

### Step 3: SEO Metadata Creation

Before writing the full draft, create the SEO metadata:

**Title Tag:**
- Must be ≤60 characters for full SERP display
- Include primary keyword near the beginning
- Make it compelling and click-worthy
- Brand format: `[Title] | LeverLoop` (if space allows)

**Meta Description (maps to `excerpt`):**
- Must be 150-160 characters
- Include primary keyword naturally
- Include a clear value proposition or benefit
- End with implicit or explicit CTA

**URL Slug:**
- Lowercase, hyphenated
- Include primary keyword
- Keep it short and descriptive (3-5 words ideal)
- Example: `declined-repair-revenue-recovery`

**Category:**
- Must be one of: `Growth & Lead Gen`, `Operations & Dispatch`, `Payments & Profitability`, `Customer Experience`

**Author:**
- Must be one of the existing authors:
  - `Sarah Chen` — Co-founder & CTO (AI, databases, engineering topics)
  - `James Park` — Staff Engineer (performance, infrastructure, deep technical)
  - `Maria Gonzalez` — VP of Sales (sales playbooks, pipeline, revenue strategies)
  - `Alex Rivera` — CEO & Co-founder (company news, product strategy)
  - `Priya Patel` — Head of Developer Relations (guides, tutorials, API docs)

**Gradient:**
- Pick a Tailwind gradient for the blog card. Use existing patterns:
  - `from-violet-400 via-indigo-300 to-sky-200`
  - `from-emerald-400 via-teal-300 to-cyan-200`
  - `from-amber-400 via-orange-300 to-rose-200`
  - `from-pink-400 via-rose-300 to-red-200`
  - `from-sky-400 via-blue-300 to-indigo-200`
  - `from-teal-400 via-emerald-300 to-lime-200`
  - `from-orange-400 via-amber-300 to-yellow-200`
  - `from-fuchsia-400 via-purple-300 to-violet-200`
  - `from-cyan-400 via-sky-300 to-blue-200`
  - `from-rose-400 via-pink-300 to-fuchsia-200`
  - `from-indigo-400 via-violet-300 to-purple-200`
  - `from-lime-400 via-green-300 to-emerald-200`

**Output format for this step:**
```yaml
# SEO Metadata
title: "Your Optimized Title Here"
excerpt: "Your 150-160 character meta description with keyword and CTA."
slug: "your-url-slug-here"
category: "Growth & Lead Gen"
author: "Maria Gonzalez"
readTime: "8 min read"
date: "Feb 28, 2026"
gradient: "from-amber-400 via-orange-300 to-rose-200"
```

Present this to the user for approval before proceeding to the full draft.

### Step 3.5: AEO Structure & FAQ Planning

Before writing the full draft, finalize the AEO-critical elements:

1. **Quick Answer**
   - Write 2–3 sentences that directly answer the primary user query.
   - This maps to the `quickAnswer` field on `BlogArticle`.

2. **Who This Is For**
   - List 3–5 bullets describing who will benefit most.
   - This maps to the `whoIsThisFor` string array on `BlogArticle`.

3. **Key Takeaways**
   - List 5–7 concrete, specific takeaways.
   - This maps to the `keyTakeaways` string array on `BlogArticle`.

4. **LeverLoop's Role**
   - Define where LeverLoop is the best fit (be specific about use cases).
   - Note any honest limitations or cases where another approach is better.

5. **FAQ List**
   - Draft 4–8 FAQs as **natural language questions** (full sentences).
   - Ensure at least some FAQs map to:
     - Pricing/implementation questions (bottom-funnel)
     - Comparison or alternatives questions
     - Edge cases (small shops, no tech staff, offline, etc.)
   - This maps to the `faq` array of `{ question, answer }` on `BlogArticle`.

6. **Schema Candidates**
   - Mark whether this post should support:
     - `FAQPage` schema (auto-generated if `faq` array is present)
     - `HowTo` schema (if the page type is how-to with clear steps)

You will use this plan directly when writing the full draft in Step 4.

### Step 4: Write the Full Draft

Using the expanded outline, approved SEO metadata, and AEO plan, write the article content.

**IMPORTANT: This project does NOT use MDX or content collections.** Blog content is stored as TypeScript data in two places:

1. **`src/data/blog.ts`** — Add a `BlogPost` entry to the `posts` array
2. **`src/data/articles/<slug>.ts`** — Create a new file for the article (one file per article)

Articles live in `src/data/articles/` as individual TypeScript files. The barrel `src/data/articles/index.ts` uses `import.meta.glob` to auto-discover all article files and re-export `articles: Record<string, BlogArticle>`. **Do NOT edit `index.ts` when adding articles.** Just create the new `<slug>.ts` file.

#### BlogPost entry (add to `posts` array in `src/data/blog.ts`):

```typescript
{
  slug: 'your-slug-here',
  title: 'Your Title Here',
  excerpt: 'Your 150-160 character excerpt here.',
  category: 'Growth & Lead Gen',
  date: 'Feb 28, 2026',
  readTime: '8 min read',
  author: { name: 'Maria Gonzalez', avatar: 'MG' },
  gradient: 'from-amber-400 via-orange-300 to-rose-200',
},
```

#### BlogArticle file (create `src/data/articles/<slug>.ts`):

```typescript
import type { BlogArticle } from '../blog';
import { posts, authors } from '../blog';

function findPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

const article: BlogArticle = {
  ...findPost('your-slug-here'),
  publishedISO: '2026-02-28',
  authorDetail: authors['Maria Gonzalez'],
  relatedSlugs: ['introducing-ai-assistants', 'pipeline-management-best-practices'],
  quickAnswer: 'Your 2-3 sentence quick answer here.',
  whoIsThisFor: [
    'HVAC owners running 4-10 trucks who suspect revenue is slipping through',
    'Office managers tracking estimates manually in spreadsheets',
  ],
  keyTakeaways: [
    'Concrete takeaway one with a specific number or outcome.',
    'Concrete takeaway two.',
  ],
  sections: [
    {
      id: 'section-slug',
      heading: 'Section Heading as a Question or Statement',
      content: `
        <p>Section content as HTML strings.</p>
        <ul>
          <li><strong>Bold label:</strong> Description of the point.</li>
        </ul>
      `,
    },
  ],
  faq: [
    {
      question: 'Full natural language question?',
      answer: 'Concise, direct answer.',
    },
  ],
};

export default article;
```

#### Writing Guidelines

- **Section content is raw HTML** inside template literal strings. Use `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<blockquote>`, `<code>`, and `<table>` tags.
- The `.article-prose` class in `global.css` handles all typography. Do NOT add inline styles.
- Natural keyword integration:
  - Primary keyword in: title, quick answer, first section paragraph, 1–2 H2 headings, and final section
  - Secondary keywords sprinkled throughout (1–2 mentions each)
- Target length: 1,500–2,500 words across all sections
- Short paragraphs (2–4 sentences)
- Use bullet points and numbered lists for scannability
- Include **comparison tables** (`<table>`) when comparing tools or approaches
- Use **explicit entity naming** in key explanations:
  - "LeverLoop tracks every declined repair" instead of "It tracks every declined repair"
- Ground key claims in data and examples:
  - Use realistic ranges or concrete scenarios from trades businesses
  - If an exact number is not available, phrase as "In our experience with [context]..." and flag for citation
- Maintain a neutral-to-positive brand tone:
  - Be candid about when LeverLoop is and is not the best fit
  - Avoid hype and buzzwords. Be specific about capabilities.
- Include a clear CTA related to LeverLoop features
- **NEVER use em dashes (—).** Use periods or commas instead.
- **NEVER use buzzwords.** Be specific and concrete.
- **Competitor mentions:** Keep brief (1-2 sentences max per mention). Always pivot to LeverLoop's advantage. Never dedicate a full section to praising a competitor. The reader should leave wanting LeverLoop, not the competitor.
- **Author avatar** is the author's initials (e.g., `MG` for Maria Gonzalez, `SC` for Sarah Chen)
- **`relatedSlugs`** must reference existing slugs from the `posts` array in `blog.ts`

#### Existing Blog Slugs (for `relatedSlugs`):

No blog posts exist yet. The `posts` array in `src/data/blog.ts` is empty. When you create a new post, it becomes the first entry. For subsequent posts, reference only slugs that have already been added to the `posts` array.

### Step 5: Editor Review

After writing the draft, self-review against these checks. Load the `leverloop-brand-voice` skill for full vocabulary reference.

**Editor Checklist:**
- [ ] Brand name is "LeverLoop" (one word, capital L capital L) everywhere
- [ ] No em dashes (—) anywhere. Replaced with periods or commas.
- [ ] No buzzwords from the avoid list (leverage, solution, utilize, streamline, robust, seamless, end-to-end, stakeholder, empower, disrupt)
- [ ] Keyword density is under 2%
- [ ] Every H2 section has at least 150 words of content
- [ ] Excerpt is 150-160 characters
- [ ] Passive voice under 10%
- [ ] CTA is compelling and specific
- [ ] Transition sentences between sections are smooth
- [ ] Claims that need citations are flagged with `<!-- CITATION NEEDED -->`
- [ ] At least 1 internal link to another blog post (use `/blog/[slug]`)
- [ ] At least 1 internal link to a feature page (use `/features/[slug]`)
- [ ] All referenced features actually exist (see feature slugs below)
- [ ] Quick answer block exists (`quickAnswer` field)
- [ ] "Who this is for" section exists (`whoIsThisFor` field)
- [ ] FAQ section has 4–8 natural language questions (`faq` array)
- [ ] Explicit entity naming is used (say "LeverLoop" not "it" or "the platform")
- [ ] Comparison tables exist where appropriate
- [ ] Tone sounds like a sharp operator, not a corporate SaaS blog
- [ ] Content respects the trade. No patronizing language.
- [ ] Competitor mentions are brief (1-2 sentences) and always pivot back to LeverLoop
- [ ] No section is primarily about praising a competitor. LeverLoop is the hero of every post.
- [ ] Reader would leave wanting to try LeverLoop, not a competitor

### Step 6: Final Output

After editor review, produce:

1. The **BlogPost** entry added to the `posts` array in `src/data/blog.ts`
2. A new **`src/data/articles/<slug>.ts`** file with the `BlogArticle` (do NOT edit `index.ts`)
3. A summary of:
   - Word count
   - Keyword density report
   - Internal links added (blog + feature pages)
   - AEO elements present (quick answer, FAQ count, schema candidates)
   - Any items flagged for human review

Verify the build passes by running `npm run build`.

## LeverLoop Feature Slugs (for internal linking)

Only reference features that exist in `src/data/features.ts`. Link to `/features/[slug]`:

- `speed-to-lead` — Auto-reply to leads in under 60 seconds
- `lead-board` — Visual lead tracking board
- `automatic-follow-up` — Automated follow-up sequences
- `good-better-best-estimates` — Good/Better/Best tiered estimates
- `customer-approvals` — Customer approvals and e-signatures
- `text-to-pay` — Invoice and collect payment by text
- `dispatch-board` — Drag-and-drop scheduling
- `tech-app` — Full field capability mobile app
- `on-my-way-texts` — Technician ETA texts
- `customer-records` — Customer and property records
- `equipment-tracking` — Equipment age and service history
- `two-way-texting` — All customer messages in one place

## LeverLoop Context

LeverLoop is the operating system for trades businesses (HVAC, plumbing, electrical, pool & spa). It covers lead capture, dispatch, estimates, invoicing, payments, memberships, and revenue recovery.

**Never embellish or invent features.** Only reference features listed above. Check `src/data/features.ts` for details.

See `src/pages/features/` for feature page structure and `src/data/features.ts` for feature descriptions to reference accurately.

## Example Usage

User prompt:
```
Create a blog post:
- Title: "How Much Revenue Is Your HVAC Company Losing to Declined Repairs?"
- Primary Keyword: declined repair revenue
- Secondary Keywords: HVAC revenue recovery, follow up declined repairs, lost revenue trades
- Primary Query: "How do I recover revenue from repairs my customers declined?"
- Persona: HVAC company owners running 4-10 trucks who know they're leaving money on the table
- Funnel Stage: bottom
- Page Type: how-to
- Outline:
  • Why declined repairs are the biggest hidden revenue leak
  • How to calculate your declined repair number
  • The follow-up timing that actually works
  • What to say in the follow-up message
  • How LeverLoop automates the entire process
```
