export interface FeatureDetail {
  label: string;
  headline: string;
  description: string;
  cta: string;
  benefit: string;
  mock:
    | "lead"
    | "pipeline"
    | "customer"
    | "equipment"
    | "estimate"
    | "payments"
    | "dispatch"
    | "mobile"
    | "memberships"
    | "recovery"
    | "inbox"
    | "team"
    | "reliability";
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
  mockup:
    | "lead"
    | "pipeline"
    | "customer"
    | "equipment"
    | "estimate"
    | "payments"
    | "dispatch"
    | "mobile"
    | "memberships"
    | "recovery"
    | "inbox"
    | "team"
    | "reliability";
  metaTitle: string;
  metaDescription: string;
  details: FeatureDetail[];
  relatedFeatureSlugs: string[];
  resources: ResourceLink[];
  faqs: FAQItem[];
}

// ---------------------------------------------------------------------------
// Shared CTA
// ---------------------------------------------------------------------------

const demoCta = {
  ctaLabel: "Book a demo",
  ctaHref: "#demo",
};

// ---------------------------------------------------------------------------
// Resource sets by category
// ---------------------------------------------------------------------------

const leadResources: ResourceLink[] = [
  {
    title: "Speed-to-Lead Playbook",
    description:
      "Response-time benchmarks and message templates that turn inbound leads into booked calls.",
    href: "/resources/speed-to-lead-playbook",
    type: "Playbook",
  },
  {
    title: "Pipeline Follow-Up Checklist",
    description:
      "Daily and weekly follow-up routines to keep estimates and opportunities moving.",
    href: "/resources/pipeline-follow-up-checklist",
    type: "Checklist",
  },
  {
    title: "Lead Response Templates",
    description:
      "Copy-paste text and email templates for first response, follow-up, and re-engagement.",
    href: "/resources/lead-response-templates",
    type: "Template",
  },
];

const estimateResources: ResourceLink[] = [
  {
    title: "Field Estimate Framework",
    description:
      "How to present Good, Better, and Best options on-site and raise your average ticket.",
    href: "/resources/field-estimate-framework",
    type: "Guide",
  },
  {
    title: "Estimate Follow-Up Templates",
    description:
      "Text and email templates for following up on open estimates without being pushy.",
    href: "/resources/estimate-follow-up-templates",
    type: "Template",
  },
  {
    title: "Pricing Strategy Playbook",
    description:
      "How to structure your pricebook and tiers to give customers clear choices.",
    href: "/resources/pricing-strategy-playbook",
    type: "Playbook",
  },
];

const paymentResources: ResourceLink[] = [
  {
    title: "Getting Paid Faster Guide",
    description:
      "Reduce your days-to-payment with text-to-pay, automated reminders, and clear invoicing.",
    href: "/resources/getting-paid-faster",
    type: "Guide",
  },
  {
    title: "Invoice Template Pack",
    description:
      "Professional invoice templates with clear line items and payment instructions.",
    href: "/resources/invoice-templates",
    type: "Template",
  },
  {
    title: "Payment Collection Checklist",
    description:
      "Step-by-step process to reduce outstanding invoices and speed up cash flow.",
    href: "/resources/payment-collection-checklist",
    type: "Checklist",
  },
];

const dispatchResources: ResourceLink[] = [
  {
    title: "Dispatch Efficiency Playbook",
    description:
      "Scheduling strategies that reduce drive time and fit more calls into every day.",
    href: "/resources/dispatch-efficiency-playbook",
    type: "Playbook",
  },
  {
    title: "Tech Onboarding Checklist",
    description:
      "Get new techs up and running on LeverLoop in their first afternoon.",
    href: "/resources/tech-onboarding-checklist",
    type: "Checklist",
  },
  {
    title: "Customer Communication Templates",
    description:
      "On My Way, appointment confirmation, and reschedule text templates.",
    href: "/resources/customer-communication-templates",
    type: "Template",
  },
];

const customerResources: ResourceLink[] = [
  {
    title: "Customer Data Migration Guide",
    description:
      "How to move your customer records into LeverLoop cleanly, with no lost data.",
    href: "/resources/customer-data-migration",
    type: "Guide",
  },
  {
    title: "Equipment Logging Checklist",
    description:
      "A field checklist for capturing make, model, serial, and install date on every call.",
    href: "/resources/equipment-logging-checklist",
    type: "Checklist",
  },
  {
    title: "Maintenance Agreement Templates",
    description:
      "Ready-to-use membership plan templates for HVAC, plumbing, and electrical.",
    href: "/resources/maintenance-agreement-templates",
    type: "Template",
  },
];

const textingResources: ResourceLink[] = [
  {
    title: "Business Texting Best Practices",
    description:
      "How to text customers professionally: timing, tone, compliance, and quiet hours.",
    href: "/resources/business-texting-best-practices",
    type: "Guide",
  },
  {
    title: "Text Message Templates",
    description:
      "Appointment reminders, follow-ups, review requests, and payment nudges. Copy and customize.",
    href: "/resources/text-message-templates",
    type: "Template",
  },
  {
    title: "Customer Texting Playbook",
    description:
      "Build a texting strategy that keeps customers informed and drives five-star reviews.",
    href: "/resources/customer-texting-playbook",
    type: "Playbook",
  },
];

// ---------------------------------------------------------------------------
// Features
// ---------------------------------------------------------------------------

export const features: Feature[] = [
  // -----------------------------------------------------------------------
  // 1. Speed-to-Lead
  // -----------------------------------------------------------------------
  {
    slug: "speed-to-lead",
    badge: "⚡ Speed-to-Lead",
    headline: "New lead? They hear from you in 60 seconds.",
    description:
      "The first company to respond wins the job. LeverLoop texts new leads the moment they come in, then keeps following up until they book or reply.",
    ...demoCta,
    mockup: "lead",
    metaTitle: "Speed-to-Lead | LeverLoop",
    metaDescription:
      "Respond to every new lead in under 60 seconds with an automatic text from your business number. Stop losing jobs to the company that texts back first.",
    details: [
      {
        label: "Instant Response",
        headline: "Reply to every lead before your competitor picks up the phone",
        description:
          "The second a lead hits your system, LeverLoop sends a personalized text from your business number. No dispatcher needed. No delay.",
        cta: "See the instant response flow",
        benefit:
          "Protect your ad spend by reaching leads while they're still thinking about their problem.",
        mock: "lead",
      },
      {
        label: "Automated Follow-Up",
        headline:
          "Keep the conversation going without anyone lifting a finger",
        description:
          "Lead goes quiet? Your follow-up sequence keeps working. Texts go out on a schedule you set until there's a clear outcome: booked, replied, or opted out.",
        cta: "See follow-up automation",
        benefit: "No more warm leads dying in someone's inbox.",
        mock: "inbox",
      },
      {
        label: "Pipeline Visibility",
        headline: "See every lead, every stage, every response",
        description:
          "Stage updates, replies, and booking actions log automatically. Your office always knows which leads are hot, which went cold, and what happened last.",
        cta: "View lead tracking",
        benefit: "Speed and accountability in one place.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "lead-board",
      "automatic-follow-up",
      "two-way-texting",
    ],
    resources: leadResources,
    faqs: [
      {
        question: "Can we customize the first-response message?",
        answer:
          "Yes. You write the copy and choose the merge fields, so it sounds like your business. Not a robot.",
      },
      {
        question: "Does speed-to-lead work after hours?",
        answer:
          "Yes. Automated texts fire around the clock. You set quiet hours for anything that needs them.",
      },
      {
        question: "What if a lead replies right away?",
        answer:
          "Their reply lands in your inbox immediately. Your team can pick up the conversation live, and the automation pauses.",
      },
      {
        question: "Do we need to connect our lead sources?",
        answer:
          "LeverLoop works with web forms, Google LSA, and most lead providers. Setup takes minutes.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 2. Lead Board
  // -----------------------------------------------------------------------
  {
    slug: "lead-board",
    badge: "📋 Lead Board",
    headline: "Every lead on one board. Nothing slips.",
    description:
      "See every lead, where it stands, and what's next. Drag cards between stages, spot stale opportunities, and know exactly what your pipeline is worth.",
    ...demoCta,
    mockup: "pipeline",
    metaTitle: "Lead Board | LeverLoop",
    metaDescription:
      "Track every lead from first contact to closed job on one visual board. See what's hot, what's gone cold, and where your team should focus next.",
    details: [
      {
        label: "Visual Stages",
        headline: "See your whole pipeline at a glance",
        description:
          "Every lead sits in a stage: New, Contacted, Estimate Sent, Won, Lost. Drag a card to move it. Click to see the full history.",
        cta: "See the board in action",
        benefit:
          "Stop asking 'what happened with that lead?' The board answers it.",
        mock: "pipeline",
      },
      {
        label: "Stale Lead Alerts",
        headline: "Know which leads are going cold before you lose them",
        description:
          "Leads sitting too long in one stage get flagged automatically. You see exactly how many days a lead has been idle, so nothing ages out quietly.",
        cta: "See stale lead detection",
        benefit:
          "Catch the leads that would have fallen through the cracks.",
        mock: "lead",
      },
      {
        label: "Pipeline Value",
        headline: "Know what your pipeline is worth right now",
        description:
          "Every lead has an estimated value. The board totals it by stage so you can see how much revenue is sitting in Estimate Sent versus New. Real numbers, not guesses.",
        cta: "See pipeline reporting",
        benefit:
          "Make decisions based on what your pipeline actually looks like today.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "speed-to-lead",
      "automatic-follow-up",
      "good-better-best-estimates",
    ],
    resources: leadResources,
    faqs: [
      {
        question: "Can I customize the stages on the board?",
        answer:
          "Yes. Rename stages and add new ones to match your sales process.",
      },
      {
        question:
          "Does the board update automatically when a lead responds?",
        answer:
          "Yes. When a lead replies or an estimate is sent, the card moves to the right stage without anyone touching it.",
      },
      {
        question: "Can my whole office see the board?",
        answer:
          "Yes. Everyone with dispatcher or admin access sees the same board in real time.",
      },
      {
        question: "How far back does lead history go?",
        answer:
          "Every lead you've ever added stays in the system. Filter by date, stage, or source to find anything.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 3. Automatic Follow-Up
  // -----------------------------------------------------------------------
  {
    slug: "automatic-follow-up",
    badge: "🔄 Auto Follow-Up",
    headline:
      "Follow-up that runs itself. Leads stay warm while you run calls.",
    description:
      "Set your follow-up sequences once. LeverLoop sends the texts and emails on schedule, with pre-built templates for HVAC, plumbing, and electrical ready on day one.",
    ...demoCta,
    mockup: "lead",
    metaTitle: "Automatic Follow-Up | LeverLoop",
    metaDescription:
      "Automated follow-up sequences that text and email your leads on schedule. Pre-built templates for HVAC, plumbing, and electrical ready on day one.",
    details: [
      {
        label: "Pre-Built Templates",
        headline: "Turn on follow-up in five minutes, not five days",
        description:
          "LeverLoop ships with proven follow-up sequences for HVAC, plumbing, and electrical. Pick your trade, customize the wording, and turn it on. Your first sequence can be live before lunch.",
        cta: "Browse trade templates",
        benefit:
          "Skip the blank-page problem. Start with what works and make it yours.",
        mock: "lead",
      },
      {
        label: "Multi-Touch Sequences",
        headline:
          "Text, email, and text again until they book or tell you to stop",
        description:
          "Each sequence mixes texts and emails over days or weeks. You control the timing, the message, and the number of touches. When a lead replies, the sequence pauses automatically.",
        cta: "See sequence builder",
        benefit: "Persistent follow-up without being annoying.",
        mock: "inbox",
      },
      {
        label: "Sequence Performance",
        headline: "See which messages are actually getting replies",
        description:
          "Track open rates, reply rates, and booking rates per sequence. If a message isn't working, you'll know. Swap it out and keep improving.",
        cta: "See performance metrics",
        benefit: "Stop guessing which follow-up works. See the numbers.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "speed-to-lead",
      "lead-board",
      "two-way-texting",
    ],
    resources: leadResources,
    faqs: [
      {
        question: "Can I write my own follow-up messages?",
        answer:
          "Yes. Use our templates as a starting point or write your own from scratch. You control every word.",
      },
      {
        question: "What happens when a lead replies?",
        answer:
          "The sequence pauses immediately. Their reply shows up in your inbox so your team can respond personally.",
      },
      {
        question: "How many follow-ups can I send?",
        answer:
          "As many as you want. Most customers use five to seven touches over two weeks, but you set it up however you like.",
      },
      {
        question: "Do follow-ups go out on weekends?",
        answer:
          "Only if you want them to. You set the days and hours. Quiet hours are built in.",
      },
      {
        question:
          "Are there templates for trades besides HVAC, plumbing, and electrical?",
        answer:
          "We add more all the time. You can also duplicate and edit any template to fit your specific trade.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 4. Good / Better / Best Estimates
  // -----------------------------------------------------------------------
  {
    slug: "good-better-best-estimates",
    badge: "📊 Estimates",
    headline:
      "Three options. One tap. The customer picks from their phone.",
    description:
      "Present Good, Better, and Best options on every call. Your customer chooses what fits, approves with a tap, and you close the job without the back-and-forth.",
    ...demoCta,
    mockup: "estimate",
    metaTitle: "Good/Better/Best Estimates | LeverLoop",
    metaDescription:
      "Build Good, Better, and Best estimates your tech sends from the job site. Customers pick an option, approve, and sign from their phone in one tap.",
    details: [
      {
        label: "Tiered Options",
        headline:
          "Give customers a choice, not a take-it-or-leave-it number",
        description:
          "Your tech builds three tiers right from the job site. Good covers the fix. Better adds peace of mind. Best is the full package. Customers pick what fits their budget without feeling pressured.",
        cta: "See the estimate builder",
        benefit:
          "Average ticket goes up when customers see options. No awkward upselling required.",
        mock: "estimate",
      },
      {
        label: "One-Tap Approval",
        headline:
          "Your customer approves from their phone before your tech leaves the driveway",
        description:
          "Send the estimate by text. Your customer sees all three options, picks one, and signs with their finger. Done. No printing, no scanning, no chasing.",
        cta: "See the approval flow",
        benefit:
          "Close jobs on the spot instead of waiting for callbacks.",
        mock: "estimate",
      },
      {
        label: "Estimate Follow-Up",
        headline:
          "An estimate sitting unanswered? LeverLoop follows up for you.",
        description:
          "Set a follow-up window. If an estimate goes unanswered for 24 or 48 hours (whatever you choose), LeverLoop sends a friendly nudge. Your team doesn't have to remember.",
        cta: "See estimate follow-up",
        benefit:
          "Recover the estimates that would have gone stale.",
        mock: "lead",
      },
    ],
    relatedFeatureSlugs: [
      "customer-approvals",
      "text-to-pay",
      "automatic-follow-up",
    ],
    resources: estimateResources,
    faqs: [
      {
        question: "Can my techs build estimates from the field?",
        answer:
          "Yes. The estimate builder works on any phone or tablet. Your tech builds it on-site and sends it before leaving.",
      },
      {
        question: "Does it pull from our pricebook?",
        answer:
          "Yes. LeverLoop pulls from your flat-rate pricebook so every tech quotes the same prices. No guessing in the field.",
      },
      {
        question: "What if the customer wants to think about it?",
        answer:
          "That's fine. The estimate stays in the system and LeverLoop can send automatic follow-ups until they decide.",
      },
      {
        question:
          "Can we customize the Good / Better / Best labels?",
        answer:
          "Yes. Call them whatever you want. Some shops use Bronze, Silver, and Gold or Basic, Standard, and Premium.",
      },
      {
        question: "Do customers need an app to approve?",
        answer:
          "No. They get a text with a link. It opens in their browser. Tap to approve, sign with their finger, done.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 5. Customer Approvals
  // -----------------------------------------------------------------------
  {
    slug: "customer-approvals",
    badge: "✅ Approvals",
    headline:
      "Your customer says yes from their phone. Signed before you leave the driveway.",
    description:
      "Send estimates by text. Customers see the options, pick one, and sign with their finger. No app to download, no paper to print, no waiting.",
    ...demoCta,
    mockup: "estimate",
    metaTitle: "Customer Approvals & E-Signatures | LeverLoop",
    metaDescription:
      "Customers approve estimates and sign right from their phone. No app to download, no paper to print, no awkward follow-up calls. Signed in seconds.",
    details: [
      {
        label: "Text-to-Approve",
        headline: "One text. The customer opens, reviews, and signs.",
        description:
          "Your tech sends the estimate from the job site. The customer gets a text with a secure link. They see every option, tap to approve, and sign with their finger. The whole thing takes under a minute.",
        cta: "See the approval experience",
        benefit:
          "Close jobs in the driveway instead of waiting days for a callback.",
        mock: "estimate",
      },
      {
        label: "No App Required",
        headline: "Your customer doesn't need to download anything",
        description:
          "The approval link opens right in their phone's browser. No login. No account. No friction. Works on any phone.",
        cta: "See the customer view",
        benefit:
          "Remove every barrier between 'let me think about it' and 'approved.'",
        mock: "mobile",
      },
      {
        label: "Signed Records",
        headline: "Every approval saved. Every signature on file.",
        description:
          "Signed estimates attach to the customer record automatically. If there's ever a question about what was approved, you pull it up in seconds.",
        cta: "See signed record storage",
        benefit:
          "Protect your business with a clear paper trail on every job.",
        mock: "customer",
      },
    ],
    relatedFeatureSlugs: [
      "good-better-best-estimates",
      "text-to-pay",
      "customer-records",
    ],
    resources: estimateResources,
    faqs: [
      {
        question: "Is the e-signature legally binding?",
        answer:
          "Yes. LeverLoop captures the signature, timestamp, and IP address. It meets e-signature requirements for service work.",
      },
      {
        question: "Can I send the estimate by email instead of text?",
        answer:
          "Yes. You can send by text, email, or both. Most customers respond faster to texts.",
      },
      {
        question:
          "What if the customer wants to change the option they picked?",
        answer:
          "They can re-open the link and select a different tier before signing. After signing, your office can update the estimate if needed.",
      },
      {
        question: "Does the signed estimate show up on the job?",
        answer:
          "Yes. Once approved, the selected option attaches to the work order so your tech knows exactly what was agreed to.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 6. Text-to-Pay
  // -----------------------------------------------------------------------
  {
    slug: "text-to-pay",
    badge: "💳 Text-to-Pay",
    headline: "Invoice to cash in minutes, not days.",
    description:
      "Send a payment link by text the moment the job wraps. Your customer taps, pays by card, and the money hits your account. No chasing. No third-party app.",
    ...demoCta,
    mockup: "payments",
    metaTitle: "Text-to-Pay Invoicing | LeverLoop",
    metaDescription:
      "Text a secure payment link after every job. Customers pay by card from their phone in seconds. One-click invoicing with Stripe payments built in.",
    details: [
      {
        label: "One-Tap Payment",
        headline: "Your customer pays from the same text thread",
        description:
          "After the job, LeverLoop sends a secure payment link by text. Your customer taps, enters their card or uses the one on file, and pays. No check to mail, no portal to log into.",
        cta: "See the payment experience",
        benefit:
          "Get paid the same day instead of chasing invoices for weeks.",
        mock: "payments",
      },
      {
        label: "One-Click Invoicing",
        headline: "Job done? One click. Invoice sent.",
        description:
          "When your tech closes out a job, the invoice generates automatically from the approved estimate. One click sends it to the customer with a payment link attached.",
        cta: "See one-click invoicing",
        benefit:
          "No more re-typing line items into a separate invoicing tool.",
        mock: "payments",
      },
      {
        label: "Stripe Built In",
        headline: "Card payments built right in. No extra software.",
        description:
          "LeverLoop uses Stripe for payment processing. Accept credit cards, debit cards, and ACH. Payments sync to your books automatically.",
        cta: "See payment processing",
        benefit:
          "One less vendor, one less login, one less monthly bill.",
        mock: "payments",
      },
    ],
    relatedFeatureSlugs: [
      "good-better-best-estimates",
      "customer-approvals",
      "customer-records",
    ],
    resources: paymentResources,
    faqs: [
      {
        question: "What payment methods can customers use?",
        answer:
          "Credit card, debit card, and ACH bank transfer. All processed through Stripe.",
      },
      {
        question: "Does the payment sync with QuickBooks?",
        answer:
          "Yes. Paid invoices sync to QuickBooks automatically. No double entry.",
      },
      {
        question: "Is there a fee per transaction?",
        answer:
          "Standard Stripe processing fees apply. LeverLoop doesn't add any extra transaction fees on top.",
      },
      {
        question: "Can we send the invoice by email too?",
        answer:
          "Yes. Send by text, email, or both. Text gets faster responses in our experience.",
      },
      {
        question:
          "What if the customer wants to pay with a check?",
        answer:
          "You can mark an invoice as paid manually with any payment method. Text-to-pay is for card and ACH.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 7. Dispatch Board
  // -----------------------------------------------------------------------
  {
    slug: "dispatch-board",
    badge: "📅 Dispatch",
    headline: "Your whole team. One board. Drag, drop, done.",
    description:
      "See every tech, every job, and every open slot on one screen. Schedule calls in seconds. Your crew gets a text with the details, no app to download.",
    ...demoCta,
    mockup: "dispatch",
    metaTitle: "Dispatch Board | LeverLoop",
    metaDescription:
      "Schedule jobs and manage your crew from one drag-and-drop board. Techs get a text with job details. Real-time status updates from the field.",
    details: [
      {
        label: "Drag-and-Drop Scheduling",
        headline: "Assign jobs in two clicks, not twenty minutes",
        description:
          "See your whole crew's schedule on one board. Open slots are obvious. Drag a job to a tech, pick a time, done. The tech gets a text with the address, customer name, and job details.",
        cta: "See the dispatch board",
        benefit:
          "Your dispatcher stops juggling spreadsheets and phone calls.",
        mock: "dispatch",
      },
      {
        label: "Real-Time Status",
        headline:
          "Know where every tech is and what they're working on",
        description:
          "Techs update their status from their phone: on my way, on job, wrapping up. Your office sees it live. When a customer calls to ask about their tech, you actually know.",
        cta: "See live status updates",
        benefit:
          "Answer customer calls with confidence instead of 'let me check.'",
        mock: "dispatch",
      },
      {
        label: "No App for Your Crew",
        headline: "Your crew gets a text with a link. That's it.",
        description:
          "No app store download. No password to remember. No training day. Your tech taps a link, sees the job, updates the status, and moves on.",
        cta: "See the crew experience",
        benefit:
          "New techs are up and running in minutes, not days.",
        mock: "mobile",
      },
    ],
    relatedFeatureSlugs: [
      "tech-app",
      "on-my-way-texts",
      "customer-records",
    ],
    resources: dispatchResources,
    faqs: [
      {
        question:
          "Can multiple dispatchers use the board at the same time?",
        answer:
          "Yes. Changes sync in real time. If one dispatcher assigns a job, everyone sees it instantly.",
      },
      {
        question: "Can I see more than one day at a time?",
        answer:
          "Yes. Toggle between daily, weekly, and monthly views. Most dispatchers live in the daily view.",
      },
      {
        question: "What if a tech calls in sick?",
        answer:
          "Drag their jobs to another tech. The new tech gets a text with the updated assignment. The customer gets notified too.",
      },
      {
        question: "Does the board work on a tablet?",
        answer:
          "Yes. The dispatch board works on any screen. Some shops run it on a wall-mounted monitor in the office.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 8. Tech App
  // -----------------------------------------------------------------------
  {
    slug: "tech-app",
    badge: "📱 Tech App",
    headline: "Everything your tech needs. Even without a signal.",
    description:
      "Job details, customer history, equipment records, estimate builder, and photo uploads. All on your tech's phone. Works offline in basements, attics, and crawlspaces.",
    ...demoCta,
    mockup: "mobile",
    metaTitle: "Tech App | LeverLoop",
    metaDescription:
      "Your techs get job details, customer history, and equipment records on their phone. Build estimates, upload photos, and work offline anywhere.",
    details: [
      {
        label: "Full Job Details",
        headline:
          "Your tech shows up knowing exactly what they're walking into",
        description:
          "Every job shows the customer name, address, job type, and notes. Tap into the customer record to see every past service call, every piece of equipment, and every conversation.",
        cta: "See the tech view",
        benefit:
          "No more calling the office to ask 'what am I doing here?'",
        mock: "mobile",
      },
      {
        label: "Before & After Photos",
        headline: "Document the work. Protect the business.",
        description:
          "Techs snap photos before and after every job. Photos attach to the work order automatically. When a customer calls about a previous job, you pull up the photos in seconds.",
        cta: "See photo documentation",
        benefit:
          "Photo proof on every job protects you from disputes and builds customer trust.",
        mock: "mobile",
      },
      {
        label: "Works Offline",
        headline: "No signal? No problem. Everything still works.",
        description:
          "Basements, crawlspaces, rural properties. Your tech can pull up job details, build estimates, capture photos, and update status with no cell service. Everything syncs when they're back in range.",
        cta: "See offline mode",
        benefit:
          "Your tech never gets stuck because of a dead signal.",
        mock: "mobile",
      },
    ],
    relatedFeatureSlugs: [
      "dispatch-board",
      "good-better-best-estimates",
      "equipment-tracking",
    ],
    resources: dispatchResources,
    faqs: [
      {
        question: "Does my tech need to download an app?",
        answer:
          "For full-time techs, yes, there's a free mobile app. For subs or temporary crew, they can use the web link with no download needed.",
      },
      {
        question: "Does it work on both iPhone and Android?",
        answer: "Yes. The app works on iOS and Android.",
      },
      {
        question: "How does offline mode work?",
        answer:
          "The app stores job data locally. Your tech works normally, and everything syncs automatically when they reconnect. No lost data.",
      },
      {
        question:
          "Can techs see the customer's equipment before they arrive?",
        answer:
          "Yes. The full equipment list (make, model, install date, and service history) shows up on every work order.",
      },
      {
        question: "Can techs add notes to a job?",
        answer:
          "Yes. Techs add notes, photos, and status updates from their phone. Everything attaches to the job record.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 9. On My Way Texts
  // -----------------------------------------------------------------------
  {
    slug: "on-my-way-texts",
    badge: "📍 On My Way",
    headline: 'No more "where\'s my guy?" calls. Ever.',
    description:
      "When your tech heads to the next call, the customer gets a text with their name and ETA. Automatic. Every time.",
    ...demoCta,
    mockup: "dispatch",
    metaTitle: "On My Way Texts | LeverLoop",
    metaDescription:
      "Automatic ETA texts to customers when your tech is en route. Your customer knows who's coming and when. No more 'where's my guy?' calls to your office.",
    details: [
      {
        label: "Automatic ETA Texts",
        headline:
          "Your tech taps 'On My Way.' The customer knows instantly.",
        description:
          "When your tech marks themselves en route, the customer gets a text: 'Hi, Mike from [Your Company] is on the way. Expected arrival: 2:15 PM.' No phone call needed. No dispatcher typing.",
        cta: "See the On My Way flow",
        benefit:
          "Fewer inbound calls for your office. Happier customers at the door.",
        mock: "dispatch",
      },
      {
        label: "Professional First Impression",
        headline: "Look like the most professional shop in town",
        description:
          "Your customer knows exactly who's coming and when. They're not guessing, not waiting, not calling to check. That kind of communication wins five-star reviews.",
        cta: "See customer communication",
        benefit:
          "First impressions start before your tech rings the doorbell.",
        mock: "inbox",
      },
      {
        label: "Branded Messages",
        headline: "Every text goes out under your company name",
        description:
          "On My Way texts use your business name and your tech's first name. Customize the message template to match your tone. It feels personal because it is.",
        cta: "See message templates",
        benefit: "Reinforce your brand on every service call.",
        mock: "inbox",
      },
    ],
    relatedFeatureSlugs: [
      "dispatch-board",
      "tech-app",
      "two-way-texting",
    ],
    resources: dispatchResources,
    faqs: [
      {
        question: "Can we customize the On My Way message?",
        answer:
          "Yes. You write the template. Most shops include the tech name, company name, and arrival window.",
      },
      {
        question: "Does the customer need to do anything?",
        answer:
          "No. They receive a regular text message. No app, no link, nothing to sign up for.",
      },
      {
        question: "Does this work for every job automatically?",
        answer:
          "It triggers when a tech taps 'On My Way' in the app. You can also set it to send automatically based on dispatch status.",
      },
      {
        question: "Can the customer reply to the text?",
        answer:
          "Yes. Their reply comes into your inbox, tied to the customer record. Your office or the tech can respond.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 10. Customer Records
  // -----------------------------------------------------------------------
  {
    slug: "customer-records",
    badge: "👥 Customers",
    headline:
      "Every customer. Every property. Every service call. All in one place.",
    description:
      "Pull up any customer and see their full history: jobs, invoices, equipment, conversations, and properties. Searchable from anywhere.",
    ...demoCta,
    mockup: "customer",
    metaTitle: "Customer Records | LeverLoop",
    metaDescription:
      "Every customer's full history in one record: jobs, equipment, invoices, conversations, and properties. Searchable from the office or the field.",
    details: [
      {
        label: "Full Customer Timeline",
        headline: "Every touchpoint in one scroll",
        description:
          "Open a customer record and see everything: every job, every estimate, every invoice, every text, every photo. Newest first. Your office manager knows what happened last. Your tech knows what to expect.",
        cta: "See a customer timeline",
        benefit:
          "Stop asking 'have we been to this house before?' The record answers it.",
        mock: "customer",
      },
      {
        label: "Multi-Property Support",
        headline:
          "Landlords, property managers, multi-location customers. All handled.",
        description:
          "One customer, multiple properties. Each property has its own address, equipment list, and service history. Perfect for commercial accounts, rental properties, and property managers.",
        cta: "See multi-property records",
        benefit:
          "Track every property without creating duplicate customer records.",
        mock: "customer",
      },
      {
        label: "Search Anything",
        headline: "Find any customer in seconds",
        description:
          "Search by name, address, phone number, or equipment serial number. Results come up instantly. Works on desktop and mobile, in the office or in the field.",
        cta: "See instant search",
        benefit:
          "When a customer calls, you have their whole file before they finish saying their name.",
        mock: "customer",
      },
    ],
    relatedFeatureSlugs: [
      "equipment-tracking",
      "two-way-texting",
      "tech-app",
    ],
    resources: customerResources,
    faqs: [
      {
        question: "Can I import my existing customer list?",
        answer:
          "Yes. Upload a CSV or connect your existing system. Most shops are fully imported within an hour.",
      },
      {
        question: "Can techs see customer records from the field?",
        answer:
          "Yes. The full customer record is available on the tech app, including past jobs, equipment, and notes.",
      },
      {
        question: "Do customer records link to invoices and payments?",
        answer:
          "Yes. Every invoice, payment, and outstanding balance shows up on the customer timeline.",
      },
      {
        question: "Can I store notes about a customer?",
        answer:
          "Yes. Add notes to the customer record or to individual properties. Notes are visible to anyone with access.",
      },
      {
        question: "How does multi-property work?",
        answer:
          "Add as many properties as you need under one customer. Each property gets its own address, equipment list, and service history.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 11. Equipment Tracking
  // -----------------------------------------------------------------------
  {
    slug: "equipment-tracking",
    badge: "🔧 Equipment",
    headline:
      "Know every unit at every property before your tech opens the door.",
    description:
      "Track make, model, serial number, and install date for every piece of equipment. Full service history per unit. Your tech sees it all on the work order.",
    ...demoCta,
    mockup: "equipment",
    metaTitle: "Equipment Tracking | LeverLoop",
    metaDescription:
      "Track every piece of equipment at every property with make, model, serial, and install date. Full service history per unit on every work order.",
    details: [
      {
        label: "Complete Equipment Registry",
        headline: "Make, model, serial number, install date. All logged.",
        description:
          "Every unit at every property lives in LeverLoop. Your tech logs it once, and it's there forever. When they show up for the next call, they already know what they're working on.",
        cta: "See equipment records",
        benefit:
          "No more asking the homeowner 'what kind of unit do you have?' Your tech already knows.",
        mock: "equipment",
      },
      {
        label: "Service History Per Unit",
        headline: "See every job you've ever done on that unit",
        description:
          "Open a piece of equipment and see the full service timeline: every repair, every tune-up, every part replaced. Your tech spots patterns. Your office spots replacement candidates.",
        cta: "See unit service history",
        benefit:
          "Better diagnostics, smarter recommendations, and fewer callbacks.",
        mock: "equipment",
      },
      {
        label: "Equipment on Every Work Order",
        headline: "Your tech sees the equipment list before they knock",
        description:
          "When a job is scheduled, the equipment at that property shows up on the work order automatically. Your tech knows the make, model, age, and last service date before they ring the doorbell.",
        cta: "See work order view",
        benefit: "Techs arrive prepared. Customers notice the difference.",
        mock: "mobile",
      },
    ],
    relatedFeatureSlugs: [
      "customer-records",
      "tech-app",
      "good-better-best-estimates",
    ],
    resources: customerResources,
    faqs: [
      {
        question:
          "Can I import equipment data from another system?",
        answer:
          "Yes. Upload a CSV with your equipment records. We map the fields and import everything.",
      },
      {
        question: "Do techs log equipment from the field?",
        answer:
          "Yes. Techs add or update equipment from the app. Snap a photo of the data plate and fill in the details.",
      },
      {
        question: "Can I track warranty expiration dates?",
        answer:
          "Yes. Log the warranty expiration and LeverLoop flags units approaching the end of coverage.",
      },
      {
        question:
          "Does the equipment list show up on the work order?",
        answer:
          "Yes. Every unit at the job's property appears on the work order automatically.",
      },
      {
        question: "How does this help with replacements?",
        answer:
          "When a unit hits a certain age or service count, you can see it in the equipment record. Use that data for honest conversations about replacement timing.",
      },
    ],
  },

  // -----------------------------------------------------------------------
  // 12. Two-Way Texting
  // -----------------------------------------------------------------------
  {
    slug: "two-way-texting",
    badge: "💬 Texting",
    headline:
      "Text your customers from one place. Get their replies right back.",
    description:
      "Send and receive texts from your business number, all inside LeverLoop. Every conversation ties to the customer record. Automatic quiet hours keep you professional.",
    ...demoCta,
    mockup: "inbox",
    metaTitle: "Two-Way Texting | LeverLoop",
    metaDescription:
      "Text customers from your business number. Every conversation ties to the customer record automatically. Quiet hours keep texts professional.",
    details: [
      {
        label: "One Inbox for Everything",
        headline:
          "Customer texts, automation messages, and replies. All in one thread.",
        description:
          "Every text conversation lives inside LeverLoop, tied to the customer record. Whether it was sent by your dispatcher, your automation, or the customer themselves, it's all in one place.",
        cta: "See the inbox",
        benefit:
          "No more scrolling through personal phones to find what someone said last Tuesday.",
        mock: "inbox",
      },
      {
        label: "Tied to the Customer Record",
        headline: "Every conversation has context",
        description:
          "Open a customer and see every text thread alongside their jobs, invoices, and equipment. When a customer texts 'is my part in yet?', you see their full history without switching screens.",
        cta: "See conversation context",
        benefit:
          "Your team responds faster because they're never starting from zero.",
        mock: "customer",
      },
      {
        label: "Automatic Quiet Hours",
        headline: "No texts at 11 PM. Ever.",
        description:
          "Set your quiet hours once. LeverLoop holds outbound texts until morning. Automated messages, follow-ups, reminders: nothing goes out when your customers are sleeping.",
        cta: "See quiet hours settings",
        benefit:
          "Stay professional without babysitting the automation.",
        mock: "inbox",
      },
    ],
    relatedFeatureSlugs: [
      "speed-to-lead",
      "automatic-follow-up",
      "on-my-way-texts",
    ],
    resources: textingResources,
    faqs: [
      {
        question:
          "Does texting use our existing business phone number?",
        answer:
          "Yes. LeverLoop sends and receives texts from your business number. Customers see your name, not a random number.",
      },
      {
        question:
          "Can multiple people in the office respond to texts?",
        answer:
          "Yes. Any team member with inbox access can read and reply. You see who sent each message.",
      },
      {
        question: "What are quiet hours?",
        answer:
          "Quiet hours block outbound texts during off-hours (for example, 8 PM to 7 AM). You set the window. Inbound texts from customers still come through so you don't miss anything urgent.",
      },
      {
        question: "Can customers opt out of texts?",
        answer:
          "Yes. Standard STOP and unsubscribe handling is built in and fully compliant.",
      },
      {
        question: "Is there a limit on how many texts we can send?",
        answer:
          "Texting is included in your LeverLoop plan. No per-message fees.",
      },
    ],
  },
];
