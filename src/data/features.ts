export interface FeatureDetail {
  label: string;
  headline: string;
  description: string;
  cta: string;
  benefit: string;
  mock: "filter" | "instant" | "saved" | "stages" | "forecast" | "activity" | "followup" | "enrich" | "insights";
}

export interface ResourceLink {
  title: string;
  description: string;
  href: string;
  type: "Guide" | "Template" | "Checklist" | "Playbook";
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  slug: string;
  badge?: string;
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  mockup: "search" | "pipeline" | "assistants";
  metaTitle: string;
  metaDescription: string;
  details: FeatureDetail[];
  relatedFeatureSlugs: string[];
  resources: ResourceLink[];
  faqs: FAQItem[];
}

export const features: Feature[] = [
  {
    slug: "search",
    badge: "🔍 Powerful Search",
    headline: "Find exactly what you need",
    description:
      "LeverLoop makes it easy to quickly locate any deal, contact, note, or email. Instant results across your entire CRM — no more digging through tabs.",
    ctaLabel: "Get started free",
    ctaHref: "#demo",
    mockup: "search",
    metaTitle: "Search — LeverLoop CRM",
    metaDescription:
      "Find any deal, contact, note, or email instantly with LeverLoop's powerful universal search.",
    relatedFeatureSlugs: ["pipeline", "assistants"],
    resources: [
      {
        title: "The Ultimate Guide to CRM Search",
        description:
          "Learn how universal search can save your sales team 5+ hours per week by eliminating tab-switching and manual lookups.",
        href: "/resources/crm-search-guide",
        type: "Guide",
      },
      {
        title: "Smart Lists Playbook",
        description:
          "Step-by-step workflows for building automated smart lists that keep your pipeline data clean and actionable.",
        href: "/resources/smart-lists-playbook",
        type: "Playbook",
      },
      {
        title: "CRM Data Organization Checklist",
        description:
          "A 15-point checklist to audit and organize your CRM data so search actually returns useful results.",
        href: "/resources/data-organization-checklist",
        type: "Checklist",
      },
    ],
    details: [
      {
        label: "Filters",
        headline: "Filter by anything, find anyone",
        description:
          "Combine filters for deal stage, company, tag, owner, and date range to narrow millions of records to exactly who you need — in milliseconds.",
        cta: "Learn about filters",
        benefit: "Find the right contact in seconds instead of scrolling through endless lists.",
        mock: "filter",
      },
      {
        label: "Instant",
        headline: "Results as you type",
        description:
          "Universal search indexes contacts, deals, emails, notes, and attachments so you get ranked results before you finish typing.",
        cta: "See it in action",
        benefit: "Stop switching tabs — get answers from one search bar.",
        mock: "instant",
      },
      {
        label: "Saved",
        headline: "Save searches for later",
        description:
          "Pin your most-used queries as smart lists that update automatically. Share them with your team so everyone works from the same data.",
        cta: "Explore smart lists",
        benefit: "Your team always works from the same up-to-date data.",
        mock: "saved",
      },
    ],
    faqs: [
      {
        question: "How does universal search work across my CRM data?",
        answer:
          "Universal search indexes every contact, deal, email, note, and attachment in your CRM. As you type, results are ranked by relevance and recency — so you get the most useful matches instantly without switching tabs.",
      },
      {
        question: "Can I search within email threads and attachments?",
        answer:
          "Yes. LeverLoop indexes the full text of email threads and common attachment formats (PDF, Word, Excel) so you can find information no matter where it lives.",
      },
      {
        question: "What are smart lists and how do they differ from saved searches?",
        answer:
          "Smart lists are dynamic, auto-updating collections powered by saved search criteria. Unlike a static export, a smart list always reflects your latest data — so your team is always working from the freshest results.",
      },
      {
        question: "Is there a limit to the number of filters I can combine?",
        answer:
          "No. You can stack as many filters as you need — deal stage, owner, date range, tags, company size, and more — to zero in on exactly the records you're looking for.",
      },
    ],
  },
  {
    slug: "pipeline",
    badge: "📊 Sales Pipeline",
    headline: "See every deal at a glance",
    description:
      "Drag-and-drop pipeline management that keeps your whole team aligned. Track deal stages, revenue forecasts, and next steps in one view.",
    ctaLabel: "Get started free",
    ctaHref: "#demo",
    mockup: "pipeline",
    metaTitle: "Pipeline — LeverLoop CRM",
    metaDescription:
      "Visual drag-and-drop pipeline management to track every deal from first touch to close.",
    relatedFeatureSlugs: ["search", "assistants"],
    resources: [
      {
        title: "Sales Pipeline Management Guide",
        description:
          "How to design pipeline stages that mirror your actual sales process and improve forecast accuracy by 40%.",
        href: "/resources/pipeline-management-guide",
        type: "Guide",
      },
      {
        title: "Revenue Forecasting Template",
        description:
          "A ready-to-use template for weighted pipeline forecasting with built-in formulas for quarterly planning.",
        href: "/resources/forecasting-template",
        type: "Template",
      },
      {
        title: "Pipeline Health Checklist",
        description:
          "Weekly pipeline review checklist to spot stalled deals, missing data, and conversion bottlenecks early.",
        href: "/resources/pipeline-health-checklist",
        type: "Checklist",
      },
    ],
    details: [
      {
        label: "Stages",
        headline: "Custom stages for every workflow",
        description:
          "Define your own deal stages, add required fields per stage, and set automated actions when deals move — so nothing slips through the cracks.",
        cta: "Learn about stages",
        benefit: "Every deal follows the same proven process automatically.",
        mock: "stages",
      },
      {
        label: "Forecast",
        headline: "Revenue forecasting, built in",
        description:
          "Weighted pipeline values and AI-assisted win-probability scores give you a reliable revenue forecast — updated in real time as deals progress.",
        cta: "Explore forecasting",
        benefit: "Predict revenue accurately without spreadsheet guesswork.",
        mock: "forecast",
      },
      {
        label: "Activity",
        headline: "Full activity timeline on every deal",
        description:
          "Every email, call, meeting, and note is logged automatically. See the complete story of a deal without asking your team to update the CRM.",
        cta: "See deal history",
        benefit: "Never ask your team to manually update the CRM again.",
        mock: "activity",
      },
    ],
    faqs: [
      {
        question: "Can I customize pipeline stages for my sales process?",
        answer:
          "Absolutely. You can create, rename, reorder, and delete stages to match your exact workflow. You can also set required fields per stage and trigger automations when deals move between stages.",
      },
      {
        question: "How does revenue forecasting work?",
        answer:
          "LeverLoop uses weighted pipeline values combined with AI-assisted win-probability scores. As deals progress through stages, your forecast updates in real time — giving you a reliable view of expected revenue.",
      },
      {
        question: "Does LeverLoop automatically log emails and meetings?",
        answer:
          "Yes. Once connected, every email, calendar event, and call is automatically logged to the relevant deal and contact record — no manual data entry required.",
      },
      {
        question: "Can multiple team members manage the same pipeline?",
        answer:
          "Yes. Pipelines are collaborative by default. Team members can drag deals, leave notes, and update stages — with full visibility into who changed what and when.",
      },
    ],
  },
  {
    slug: "assistants",
    badge: "🤖 AI Assistants",
    headline: "Let AI handle the busywork",
    description:
      "LeverLoop Assistants learn from your data to automate follow-ups, enrich contacts, and surface insights — so you can focus on closing.",
    ctaLabel: "Get started free",
    ctaHref: "#demo",
    mockup: "assistants",
    metaTitle: "AI Assistants — LeverLoop CRM",
    metaDescription:
      "AI-powered assistants that automate follow-ups, enrich contacts, and surface deal insights.",
    relatedFeatureSlugs: ["search", "pipeline"],
    resources: [
      {
        title: "Getting Started with AI in Sales",
        description:
          "A practical guide to adopting AI assistants in your sales workflow without disrupting your team's existing processes.",
        href: "/resources/ai-sales-guide",
        type: "Guide",
      },
      {
        title: "Follow-up Email Playbook",
        description:
          "Proven follow-up sequences and timing strategies that AI assistants use to re-engage cold leads and close deals faster.",
        href: "/resources/followup-playbook",
        type: "Playbook",
      },
      {
        title: "Contact Enrichment Checklist",
        description:
          "Ensure your contact data is complete and accurate with this checklist covering 12 critical enrichment fields.",
        href: "/resources/enrichment-checklist",
        type: "Checklist",
      },
    ],
    details: [
      {
        label: "Follow-ups",
        headline: "Perfectly-timed follow-ups",
        description:
          "The assistant monitors your conversations and drafts contextual follow-up emails at the optimal moment — so no lead goes cold.",
        cta: "Explore follow-ups",
        benefit: "Personalized follow-ups land in the inbox, not spam.",
        mock: "followup",
      },
      {
        label: "Enrichment",
        headline: "Contacts enriched automatically",
        description:
          "New contacts are instantly enriched with LinkedIn profiles, company data, job titles, and direct emails — no manual research required.",
        cta: "Explore enrichment",
        benefit: "Complete contact profiles without any manual research.",
        mock: "enrich",
      },
      {
        label: "Insights",
        headline: "Surface insights you'd miss",
        description:
          "AI analyzes engagement patterns across your pipeline and flags deals that need attention, contacts going cold, and upsell opportunities.",
        cta: "Explore insights",
        benefit: "Catch at-risk deals before they slip through the cracks.",
        mock: "insights",
      },
    ],
    faqs: [
      {
        question: "How do AI assistants learn from my data?",
        answer:
          "LeverLoop Assistants analyze your email history, deal activity, and contact interactions to understand communication patterns. They use this context to draft relevant follow-ups and surface timely insights — all without sharing your data externally.",
      },
      {
        question: "Can I review messages before they're sent?",
        answer:
          "Always. AI-drafted emails are presented as suggestions for you to review, edit, and approve. Nothing is sent without your explicit confirmation.",
      },
      {
        question: "What data sources does contact enrichment pull from?",
        answer:
          "Enrichment draws from public business profiles, company databases, and social networks to fill in job titles, company info, LinkedIn URLs, and verified email addresses.",
      },
      {
        question: "Will AI assistants work with my existing email provider?",
        answer:
          "Yes. LeverLoop integrates with Gmail, Outlook, and any IMAP-compatible email provider — so the assistant works seamlessly with your current setup.",
      },
    ],
  },
];
