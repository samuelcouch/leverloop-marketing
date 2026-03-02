import type { BlogArticle } from '../blog';
import { posts, authors } from '../blog';

function findPost(slug: string) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) throw new Error(`Post not found: ${slug}`);
  return post;
}

const article: BlogArticle = {
  ...findPost('introducing-ai-assistants'),
  publishedISO: '2026-02-24',
  authorDetail: authors['Sarah Chen'],
  relatedSlugs: [
    'scaling-postgres-beyond-1b-rows',
  ],
  quickAnswer:
    'LeverLoop AI Assistants are built-in CRM agents that automate follow-up emails, enrich new contacts from LinkedIn and Clearbit in under 30 seconds, and flag at-risk deals 6 days before manual review. They require human approval for every action and are available on all Team and Enterprise plans at no extra cost.',
  whoIsThisFor: [
    'Sales reps spending too much time on manual follow-ups and data entry',
    'RevOps teams looking to automate contact enrichment and pipeline monitoring',
    'Sales leaders who want earlier visibility into at-risk deals',
  ],
  keyTakeaways: [
    'LeverLoop AI Assistants automate three key workflows: follow-ups, contact enrichment, and pipeline insights.',
    'Follow-up emails are drafted from meeting transcripts and CRM context with 94% relevance scores in early testing.',
    'New contacts are enriched in under 30 seconds from LinkedIn, Clearbit, and Apollo — no manual research.',
    'AI surfaces at-risk deals an average of 6 days before manual review would catch them.',
    'All AI actions require human approval — nothing sends without your explicit confirmation.',
    'Available today on all Team and Enterprise plans at no additional cost.',
  ],
  sections: [
    {
      id: 'what-are-leverloop-ai-assistants',
      heading: 'What are LeverLoop AI Assistants?',
      content: `
          <p>LeverLoop AI Assistants are intelligent agents that live inside your CRM and handle repetitive sales tasks automatically. They learn from your email history, deal activity, and contact interactions to take action on your behalf — while always keeping you in control.</p>
          <p>In practice, this means three things happen without you lifting a finger:</p>
          <ul>
            <li><strong>Follow-ups get drafted and queued</strong> based on meeting outcomes and deal stage.</li>
            <li><strong>New contacts are enriched</strong> with job titles, company data, LinkedIn profiles, and verified emails.</li>
            <li><strong>Pipeline insights surface automatically</strong> — flagging at-risk deals, cold contacts, and upsell opportunities.</li>
          </ul>
          <p>AI Assistants are not a separate product. They're built into the LeverLoop you already use, and they work alongside your existing workflows rather than replacing them.</p>
        `,
    },
    {
      id: 'how-do-ai-follow-ups-work',
      heading: 'How do AI-powered follow-ups work?',
      content: `
          <p>The follow-up assistant monitors your conversations — emails, meeting transcripts, and call notes — and identifies moments when a follow-up is warranted. It then drafts a contextual message and queues it for your review.</p>
          <p>Here's what the process looks like in practice:</p>
          <ol>
            <li><strong>Trigger detection:</strong> The assistant identifies signals like a completed demo, an unanswered question, or a stalled conversation.</li>
            <li><strong>Context assembly:</strong> It pulls in relevant CRM data — deal stage, previous conversations, contact preferences — to personalize the draft.</li>
            <li><strong>Draft generation:</strong> A follow-up email is written in your tone, referencing specific details from the interaction.</li>
            <li><strong>Human review:</strong> The draft appears in your queue. You can edit, approve, or dismiss it. Nothing sends automatically.</li>
          </ol>
          <p>In our beta program with 200+ sales teams, AI-drafted follow-ups achieved a <strong>94% relevance score</strong> — meaning reps approved them with minimal or no edits 94% of the time.</p>
          <blockquote>
            <p>"We went from spending 45 minutes a day on follow-ups to about 5 minutes reviewing AI drafts. The quality is genuinely good — it picks up on details I would have missed."</p>
            <p><strong>— Director of Sales, Series C SaaS company (beta tester)</strong></p>
          </blockquote>
          <p>Timing matters as much as content. The assistant uses engagement data — email opens, link clicks, response patterns — to suggest the optimal send time for each recipient.</p>
        `,
    },
    {
      id: 'automatic-contact-enrichment',
      heading: 'Automatic contact enrichment in under 30 seconds',
      content: `
          <p>Every time a new contact enters your CRM — whether from a form submission, email sync, or manual entry — the enrichment assistant fills in the gaps automatically. The average enrichment completes in under 30 seconds.</p>
          <p>Data is pulled from multiple sources and cross-referenced for accuracy:</p>
          <ul>
            <li><strong>LinkedIn:</strong> Job title, company, location, profile URL.</li>
            <li><strong>Clearbit:</strong> Company size, industry, revenue range, tech stack.</li>
            <li><strong>Apollo:</strong> Verified email addresses, direct phone numbers.</li>
          </ul>
          <p>When sources conflict, the assistant flags the discrepancy and lets you choose. It never silently overwrites data you've entered manually.</p>
          <p>Enrichment runs continuously in the background. When a contact changes jobs or a company raises a new round, the assistant detects the change and surfaces an update for your review.</p>
        `,
    },
    {
      id: 'pipeline-insights',
      heading: "Pipeline insights that surface what you'd miss",
      content: `
          <p>The insights assistant analyzes engagement patterns across your entire pipeline and proactively flags situations that need attention. In testing, it identified at-risk deals an average of <strong>6 days before manual review</strong> would have caught them.</p>
          <p>The three categories of insights it surfaces:</p>
          <ul>
            <li><strong>At-risk deals:</strong> Deals where engagement has dropped, response times have slowed, or stakeholders have gone silent.</li>
            <li><strong>Cold contacts:</strong> Leads that haven't been touched in a configurable period, prioritized by deal value and stage.</li>
            <li><strong>Upsell opportunities:</strong> Existing customers showing expansion signals — increased usage, new team members, or contract renewal dates approaching.</li>
          </ul>
          <p>Each insight includes a recommended action and a one-click path to take it. For example, an at-risk deal insight might suggest a specific follow-up message and offer to draft it immediately.</p>
        `,
    },
    {
      id: 'getting-started',
      heading: 'How to get started with AI Assistants',
      content: `
          <p>AI Assistants are available today on all Team and Enterprise plans at no additional cost. Here's how to enable them:</p>
          <ol>
            <li><strong>Open Settings → AI Assistants</strong> in your LeverLoop workspace.</li>
            <li><strong>Choose which assistants to enable:</strong> Follow-ups, Enrichment, Insights, or all three.</li>
            <li><strong>Connect your email</strong> if you haven't already (Gmail, Outlook, or IMAP).</li>
            <li><strong>Set your preferences:</strong> Review frequency, tone of voice, and approval workflow.</li>
            <li><strong>Start reviewing suggestions</strong> in your AI queue. The assistant improves with every approval or edit.</li>
          </ol>
          <p>Most teams are fully up and running in under 10 minutes. The assistant begins learning immediately and typically starts producing useful suggestions within the first 24 hours.</p>
        `,
    },
    {
      id: 'privacy-security',
      heading: 'Privacy, security, and human oversight',
      content: `
          <p>We designed AI Assistants with a simple principle: <strong>your data stays yours, and the AI never acts without your permission.</strong></p>
          <ul>
            <li><strong>No external data sharing:</strong> Your CRM data is processed within LeverLoop's infrastructure. It is never sent to third-party AI providers for training.</li>
            <li><strong>Human-in-the-loop:</strong> Every AI action — emails, enrichment updates, insight recommendations — requires explicit human approval before execution.</li>
            <li><strong>Audit trail:</strong> Every AI suggestion, approval, edit, and dismissal is logged. Admins can review AI activity across the team at any time.</li>
            <li><strong>Granular controls:</strong> Workspace admins can enable or disable individual assistants, set approval policies, and restrict AI access to specific pipeline stages or data fields.</li>
          </ul>
          <p>AI Assistants are SOC 2 Type II compliant and covered under LeverLoop's existing DPA. For Enterprise customers, we offer additional configuration options including custom data retention policies and dedicated processing environments.</p>
        `,
    },
  ],
  faq: [
    {
      question: 'Do AI Assistants send emails automatically?',
      answer:
        'No. Every AI-drafted email requires your explicit approval before it is sent. You can edit, approve, or dismiss any suggestion.',
    },
    {
      question: 'Is my CRM data shared with third-party AI providers?',
      answer:
        'No. All data is processed within LeverLoop\'s own infrastructure and is never sent to external AI providers for training.',
    },
    {
      question: 'Which plans include AI Assistants?',
      answer:
        'AI Assistants are available on all Team and Enterprise plans at no additional cost.',
    },
    {
      question: 'How long does it take for the AI to start producing useful suggestions?',
      answer:
        'Most teams are up and running in under 10 minutes. The assistant begins learning immediately and typically produces useful suggestions within the first 24 hours.',
    },
    {
      question: 'What data sources are used for contact enrichment?',
      answer:
        'The enrichment assistant pulls from LinkedIn, Clearbit, and Apollo — cross-referencing sources for accuracy and flagging any discrepancies for your review.',
    },
  ],
};

export default article;
