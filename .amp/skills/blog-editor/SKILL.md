---
name: blog-editor
description: "Review and edit blog posts for the LeverLoop marketing site. Applies brand voice, SEO, AEO, readability, and technical accuracy checks. Use when reviewing a blog draft, editing a blog post, or running an editor pass. Triggers on: review blog post, edit blog, editor review, blog QA, check blog post."
---

# LeverLoop Blog Editor

These rules govern the editor review phase of the blog writing pipeline for the LeverLoop marketing site.

## Editor Agent Responsibilities

When reviewing a blog draft, apply these checks systematically:

---

## 0. Brand Name

**CRITICAL:** The product name is "LeverLoop" (one word, capital L capital L).
- **Action:** Find and replace all instances of "Lever Loop", "leverloop", "lever loop", or "LL" with "LeverLoop"

---

## 1. SEO Quality

### Keyword Density
- **Target:** 1–2% for primary keyword
- **Action if > 2%:** Flag as keyword stuffing, suggest natural alternatives
- **Check:** Count keyword occurrences, divide by total word count

### Meta Description (maps to `excerpt` field)
- **Required length:** 150–160 characters
- **Must contain:** Primary keyword
- **Must be:** Compelling, action-oriented, written like a person (not a platform)
- **Action:** Rewrite if too short/long or missing keyword

### Title Tag (maps to `title` field)
- **Max length:** 60 characters (for SERP display)
- **Must contain:** Primary keyword (preferably near beginning)
- **Action:** Suggest shorter alternative if too long

### AEO Answerability

The post must function as a clear, stand-alone answer to the **primary user query**.

- **Quick Answer Block**
  - **Check:** The `quickAnswer` field is populated with 2–3 sentences that directly answer the primary query.
  - **Check:** The `keyTakeaways` array has 5–7 concrete, specific bullets.
  - **Action:** If missing or vague, request a rewrite with a sharper, more direct answer.

- **Title and Query Alignment**
  - **Check:** The `title` closely matches the conversational primary query (not just a generic keyword).
  - **Action:** Suggest a revised title if it is too broad or does not read like a natural question/statement a trades business owner would ask.

- **Funnel Stage**
  - **Check:** The article aligns with one of `bottom`, `mid`, `educational`.
  - **Check:** For `educational` posts, ensure there is at least one internal link or CTA that leads to a related bottom- or mid-funnel page.
  - **Action:** Flag if the content does not match its stated funnel stage.

---

## 2. Content Structure

### Section Length
- **Minimum:** 150 words per H2 section (per `sections` entry)
- **Action:** Flag thin sections, suggest expansion points

### Heading Hierarchy
- **Check:** Only one H1 (the title, rendered by the page template)
- **Check:** Each `sections[].heading` is an H2. Sub-sections within `content` use H3.
- **Check:** No jumping from H2 to H4
- **Action:** Fix hierarchy violations

### Paragraph Length
- **Target:** 2–4 sentences per paragraph
- **Action:** Break up paragraphs > 5 sentences

### Quick Answer at the Top
- **Check:** The `quickAnswer` field exists and provides a direct answer before any long narrative.
- **Check:** The `keyTakeaways` array has 5–7 bullets with 1-line concrete takeaways.
- **Action:** If missing, request adding these fields.

### "Who This Is For" Section
- **Check:** The `whoIsThisFor` array exists with 3–5 bullets describing who will benefit most.
- **Action:** If missing, request adding this field. Bullets should be specific (e.g., "HVAC owners running 4–10 trucks" not "business owners").

### FAQ Section
- **Check:** The `faq` array exists with 4–8 entries.
- **Check:** Questions are **natural language questions** (full sentences).
- **Check:** Questions cover:
  - Implementation or "how do I..." topics
  - Pricing/cost expectations where relevant
  - Comparisons/alternatives
  - Edge cases (small shops, no tech staff, offline use, etc.)
- **Action:** If FAQs are generic or too few, request expansion with more specific questions.

### Comparison Tables and Lists (When Applicable)
- **Check:** For posts that compare tools/approaches or use "best", "vs", or "alternatives" in the title or headings, there is a `<table>` or structured list in the section content.
  - Recommended columns: `Option | Best for | Price (approx) | Limitations`
- **Action:** If comparisons are only in prose, suggest adding a table for scannability and AI-friendly parsing.

---

## 3. Readability

### Em Dashes
- **Rule:** NEVER use em dashes (—) or en dashes (–)
- **Action:** Replace with one of:
  - A period and start a new sentence
  - A comma (if grammatically appropriate)
  - Parentheses (for parenthetical asides)
  - "which" or "that" clauses
- **Example:** "The feature—which works instantly—is popular" → "The feature works instantly. It's popular." OR "The feature, which works instantly, is popular."

### Passive Voice
- **Target:** < 10% of sentences
- **Detection:** Look for "is/was/were/been + past participle"
- **Action:** Suggest active voice rewrites

### Transition Flow
- **Check:** Smooth transitions between sections
- **Action:** Add transition sentences where abrupt

### Jargon Check
- **Target audience:** Trades business owners, dispatchers, office managers, technicians
- **Rule:** Use trades language where it builds credibility (pricebook, changeout, dispatch). Translate generic software jargon into plain language.
- **Action:** Replace SaaS jargon with trades-literate equivalents (see Core Vocabulary below)

### Tone Gut-Check
- **Check:** Read each section out loud. Would a contractor at a trade show nod along?
- **Check:** Does it sound like a sharp operator giving advice to a friend?
- **Action:** Flag sections that sound corporate, stiff, or generic SaaS

---

## 4. Content Quality

### Claims & Statistics
- **Check:** Any numerical claims or statistics have a source or are framed as experience-based
- **Action:** Flag unsourced claims with `<!-- CITATION NEEDED: [claim] -->`
- **Acceptable alternative:** "In our experience with [context]..." for anecdotal data

### CTA (Call to Action)
- **Required:** At least one clear CTA related to LeverLoop
- **Placement:** Final section ("What to do next" or similar)
- **Quality:** Specific, benefit-oriented, ties to a concrete LeverLoop feature
- **Action:** Strengthen weak CTAs. "Book a demo" is fine but pair it with a specific benefit.

### Internal Links
- **Minimum Requirements:**
  - At least **1 link to another blog post** (`/blog/[slug]`)
  - At least **1 link to a feature page** (`/features/[slug]`)
- **Check:** All referenced slugs actually exist (see Feature Slugs and Blog Slugs below)
- **Action:** Add relevant internal links if either minimum is not met

### Competitor Mentions
- **Check:** Each competitor mention is 1–2 sentences max
- **Check:** Every competitor mention pivots back to LeverLoop's advantage
- **Check:** No section is primarily about praising a competitor
- **Check:** Reader would leave wanting LeverLoop, not the competitor
- **Action:** Flag sections that spend too long on a competitor. Suggest the pattern: "Competitor X proved that [concept] matters. LeverLoop takes it further by [specific advantage]."

### AEO-Specific Quality Checks

#### Explicit Entity Naming
- **Check:** The first mention uses an explicit description, e.g.,
  "LeverLoop is the operating system for trades businesses" (not just "LeverLoop helps you...").
- **Check:** Key explanations reference "LeverLoop" by name rather than only pronouns ("it", "the platform", "the tool").
- **Action:** Where pronouns create ambiguity, suggest rewrites using "LeverLoop" explicitly.

#### Persona & Context Explicitness
- **Check:** The article clearly states who the advice is for (persona) and in what context (trade, company size, scenario).
- **Action:** If the audience is implied but not stated, request adding specifics (e.g., "HVAC shops running 4–10 trucks" not "businesses").

#### Data Grounding
- **Check:** Important claims are grounded in at least one:
  - Data point, range, or benchmark, or
  - Concrete real-world example/case from a trades business
- **Action:** If the article makes broad claims ("significantly faster", "much easier") without supporting detail, flag and suggest adding data or examples.

#### Brand Positioning
- **Check:** LeverLoop is presented in a confident, specific way:
  - Benefits tied to clear use cases and real outcomes
  - Honest about scope (it's for trades businesses, not a generic CRM)
- **Check:** No hype or buzzwords contradict the brand voice rules
- **Action:** If the product is overhyped or presented as a generic SaaS, suggest more specific, trades-grounded language.

---

## 5. Technical Accuracy

### Data File Validation

Blog content lives in TypeScript data files, NOT MDX or content collections.

**BlogPost entry (in `src/data/blog.ts` `posts` array):**
```typescript
// Required fields — verify all present
{
  slug: string,           // lowercase, hyphenated, 3-5 words
  title: string,          // max 60 chars recommended
  excerpt: string,        // 150-160 chars (this IS the meta description)
  category: string,       // must be from allowed list
  date: string,           // format: "Feb 28, 2026"
  readTime: string,       // format: "8 min read"
  author: { name: string, avatar: string }, // must match existing author
  gradient: string,       // Tailwind gradient class
}
```

**BlogArticle file (in `src/data/articles/<slug>.ts`):**
```typescript
// Required fields — verify all present
{
  ...findPost('slug'),
  publishedISO: string,       // YYYY-MM-DD format
  authorDetail: authors['Name'],
  relatedSlugs: string[],     // must reference existing blog slugs
  quickAnswer: string,        // 2-3 sentences
  whoIsThisFor: string[],     // 3-5 bullets
  keyTakeaways: string[],     // 5-7 bullets
  sections: ArticleSection[], // H2 sections with HTML content
  faq: FAQ[],                 // 4-8 natural language Q&A pairs
}
```

### Category Validation
Category MUST be one of:
- `Growth & Lead Gen`, `Operations & Dispatch`, `Payments & Profitability`, `Customer Experience`

**Action:** Flag any category not in this list.

### Author Validation
Author MUST be one of:
- `Sarah Chen` (avatar: `SC`) — Co-founder & CTO
- `James Park` (avatar: `JP`) — Staff Engineer
- `Maria Gonzalez` (avatar: `MG`) — VP of Sales
- `Alex Rivera` (avatar: `AR`) — CEO & Co-founder
- `Priya Patel` (avatar: `PP`) — Head of Developer Relations

**Action:** Flag unknown authors. Check that `avatar` matches initials.

### Section Content Format
- **Check:** Section `content` uses raw HTML inside template literal strings
- **Check:** Uses `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<blockquote>`, `<code>`, `<table>` tags
- **Check:** No inline styles (the `.article-prose` class handles typography)
- **Check:** No Markdown syntax inside content strings
- **Action:** Fix format violations

### Schema-Ready Structure (FAQPage / HowTo)

- **FAQPage**
  - **Check:** The `faq` array has 4–8 entries with clearly separated question/answer pairs.
  - **Action:** If questions/answers are merged or unclear, suggest rewrites.

- **HowTo**
  - **Check:** For how-to posts, confirm there is a section with numbered steps (`<ol>` with `<li>` items).
  - **Action:** If the process is buried in prose, request restructuring into a clear step list.

### Feature Accuracy
- **CRITICAL:** Only reference features that exist in `src/data/features.ts`
- **Allowed feature slugs:** (link to `/features/[slug]`)
  - `speed-to-lead` — Auto-reply to leads in under 60 seconds
  - `lead-board` — Visual lead tracking board
  - `customer-records` — Customer and property records
  - `equipment-tracking` — Equipment age and service history
  - `good-better-best-estimates` — Good/Better/Best tiered estimates
  - `flat-rate-pricebook` — Consistent pricing across techs
  - `customer-approvals` — Customer approvals and e-signatures
  - `text-to-pay` — Invoice and collect payment by text
  - `dispatch-board` — Drag-and-drop scheduling
  - `on-my-way-texts` — Technician ETA texts
  - `tech-app` — Full field capability mobile app
  - `offline-mode` — Works without signal
  - `service-agreement-management` — Membership plans and recurring billing
  - `mrr-dashboard` — Monthly recurring revenue tracking
  - `automated-maintenance-reminders` — Due-service text reminders
  - `revenue-recovery-dashboard` — Find lost revenue from declined repairs
  - `declined-repair-follow-up` — Automated follow-up on declined work
  - `equipment-age-alerts` — Aging equipment replacement outreach
  - `automatic-follow-up` — Automated follow-up sequences
  - `two-way-texting` — All customer messages in one place
  - `photo-job-documentation` — Before/after photos and notes
  - `google-review-requests` — Automated review requests
  - `quickbooks-integration` — Two-way QuickBooks sync
  - `team-management-invitations` — Role-based team invites
  - `role-based-access` — Permission controls by role
  - `flat-monthly-pricing` — No per-seat pricing
  - `ens-router` — Reliable message delivery infrastructure
- **Action:** Flag and remove any claims about features not in this list
- **Never embellish or add capabilities** that LeverLoop does not have

### Existing Blog Slugs (for `relatedSlugs`)

No blog posts exist yet. The `posts` array in `src/data/blog.ts` is empty. When a new post is created, it becomes the first entry. For subsequent posts, only reference slugs that have already been added to the `posts` array. Always check `src/data/blog.ts` for the current list.

**Action:** Flag any `relatedSlugs` entry that does not match an existing slug in the `posts` array.

---

## 6. Brand Voice

### LeverLoop Core Voice
- **Voice:** Direct. Warm. Trades-literate. Specific. Confident.
- **Tone for blog:** Sound like a sharp operator giving advice to a friend. Practical, specific, opinionated. Never generic.
- **Gut-check:** Would a contractor read this and think "These people get it"? If no, rewrite.

### Voice Principles
1. **Lead with the outcome, not the feature.** "Never miss another lead" not "Our Speed-to-Lead Engine uses automated SMS workflows."
2. **Be specific, not vague.** "See the $12,000 in declined repairs sitting in your pipeline right now" not "recapture lost revenue with powerful automation tools."
3. **Write like a person, not a platform.** Read it out loud. If it sounds like something you'd say to a contractor at a trade show, it's right.
4. **Respect the trade.** Never patronize. Use their language where it builds credibility.
5. **Confidence without arrogance.** We know LeverLoop works. We say so plainly. But we never punch down.

### Core Vocabulary
Use trades-standard terms:

| Term | Usage |
|------|-------|
| LeverLoop | Always. Never abbreviate. Not "Lever Loop", "leverloop", or "LL" |
| Trades business | Default term for customer companies. Not "field service company" |
| Tech / Technician | Person in the field. Not "field worker" or "employee" |
| Owner | Buyer/decision-maker. Not always "business owner" |
| Pricebook | Flat-rate pricing feature. One word, no hyphen |
| Estimate | What techs send to customers. Not "quote" or "proposal" |
| Agreement / Membership | Service agreements, recurring plans. Not "subscription" or "contract" |
| Pipeline | Lead tracking board |
| Revenue Recovery | Dashboard that finds lost revenue. Always capitalize |
| MRR | Monthly Recurring Revenue. Spell out at first use |

### LeverLoop Says vs. Generic SaaS Says

| ✓ LeverLoop says | ✗ Generic SaaS says |
|------------------|---------------------|
| "Capture the revenue you're leaving on the table" | "Optimize your sales funnel" |
| "Your tech sends the estimate from the driveway" | "Streamline your quoting workflows" |
| "Text-to-pay. Invoice to cash in minutes." | "Integrated payment processing solution" |
| "Works in basements with no signal" | "Robust offline capability" |
| "One tap. Estimate becomes invoice." | "Seamless estimate-to-invoice conversion" |
| "Techs quote consistently on day one" | "Standardize pricing across your organization" |
| "See what's leaking. Go get it." | "Data-driven revenue insights" |

### Words to NEVER Use
- "Leverage" (verb) → say "use" or "put to work"
- "Solution" → name the actual thing
- "Utilize" → say "use"
- "Streamline" → say "speed up" or "simplify"
- "Robust" → say "works everywhere" or be specific
- "Seamless" → describe the actual experience
- "End-to-end" → say "from lead to paid" or "the whole job"
- "Stakeholder" → say "your team" or "your techs"
- "Empower" → say "give you" or "let you"
- "Disrupt" → just describe what we actually do
- "Revolutionary" / "Game-changing" / "Cutting-edge" / "Best-in-class"
- "Innovative" / "Groundbreaking" / "Next-generation" / "World-class"
- "Synergy" / "Optimize" (in customer-facing copy)

**Action:** Replace every instance with a specific, concrete description.

### Other Words to Avoid
- "Simply" / "Just" (minimizes complexity)
- "Obviously" / "Clearly" (condescending)

---

## Output Format

After review, provide:

```markdown
## Editor Review Summary

### ✅ Passed
- [List items that passed]

### ⚠️ Warnings
- [List minor issues with suggestions]

### ❌ Requires Changes
- [List must-fix items with line references or field names]

### 📊 Metrics
- Word count: X
- Primary keyword density: X%
- Secondary keyword mentions: X, Y, Z
- Internal links: X (blog) / X (features)
- Estimated reading time: X min

### 🤖 AEO Checklist
- [ ] `quickAnswer` field present with direct answer
- [ ] `whoIsThisFor` array with 3-5 specific bullets
- [ ] `keyTakeaways` array with 5-7 concrete takeaways
- [ ] `faq` array with 4-8 natural language questions
- [ ] Explicit entity naming used throughout
- [ ] Comparison tables present (if applicable)
- [ ] Schema-ready structure (FAQPage/HowTo)

### 📝 Suggested Edits
[Specific edit suggestions with before/after examples]
```

---

## 7. Apply Edits

After producing the Editor Review Summary, **apply all fixes directly** to the blog post files. Do not just report issues and stop.

### Workflow

1. **Auto-fix everything you can.** For each item in ❌ Requires Changes and ⚠️ Warnings, edit the article file (`src/data/articles/<slug>.ts`) and/or the blog post entry in `src/data/blog.ts` directly using `edit_file`.
2. **Fix in priority order:**
   - Brand name violations (Section 0)
   - Em dash removal (Section 3)
   - Banned word replacement (Section 6)
   - Missing required fields (`quickAnswer`, `whoIsThisFor`, `keyTakeaways`, `faq`)
   - Excerpt length corrections
   - Passive voice rewrites
   - Thin section expansion
   - Internal link additions
   - Competitor mention trimming
   - Entity naming improvements
3. **Flag what you cannot fix** with an inline HTML comment `<!-- EDITOR: [description of issue] -->` in the section content. Examples of unfixable items:
   - Claims that need the author to provide a citation source
   - Sections where the content direction is unclear and needs author input
   - Feature references that may be planned but do not exist yet
4. **Verify the build** by running `npm run build` after all edits are applied. Fix any TypeScript or build errors.
5. **Re-run the checklist** mentally after edits. Confirm all auto-fixable items now pass.
6. **Present a final summary** showing:
   - ✅ Items fixed (with brief before/after for significant changes)
   - 🚩 Items flagged for human review (with inline `<!-- EDITOR -->` comments)
   - 📊 Updated metrics (word count, keyword density, link counts)

### Rules for Applying Edits

- **Make the smallest reasonable diff.** Do not rewrite entire sections to fix a single banned word.
- **Preserve the author's voice.** When rewriting for readability or tone, keep the author's intent and structure. Adjust wording, not meaning.
- **Do not add content the author did not write** beyond what is needed to meet minimum requirements (e.g., adding a missing `whoIsThisFor` array with sensible bullets derived from the article's context).
- **Do not remove content** unless it violates a hard rule (e.g., a feature that does not exist, a section that is entirely about a competitor).
- **When expanding thin sections,** add 1–2 paragraphs that are consistent with the article's angle and voice. Flag these additions with `<!-- EDITOR: expanded thin section -->` so the author can review.

---

## Customization

Users can override these rules by specifying in their prompt:
- "Skip keyword density check"
- "Allow longer paragraphs for this technical post"
- "This is a short post, reduce word minimums"
- "Skip AEO checks for this post"
- "Skip competitor check"
- "Review only, do not apply edits" (skips Section 7)
