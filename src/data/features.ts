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

const salesResources: ResourceLink[] = [
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
    title: "Field Estimate Framework",
    description:
      "How to present Good / Better / Best options clearly on-site and raise average ticket value.",
    href: "/resources/field-estimate-framework",
    type: "Guide",
  },
];

const operationsResources: ResourceLink[] = [
  {
    title: "Dispatch Optimization Guide",
    description:
      "Best practices for assignment, routing, and reducing idle drive time across your team.",
    href: "/resources/dispatch-optimization-guide",
    type: "Guide",
  },
  {
    title: "Job Documentation SOP",
    description:
      "A step-by-step process for before/after photos, notes, and customer sign-offs.",
    href: "/resources/job-documentation-sop",
    type: "Template",
  },
  {
    title: "Field Readiness Checklist",
    description:
      "What every tech needs before leaving the shop: schedule, history, assets, and pricing.",
    href: "/resources/field-readiness-checklist",
    type: "Checklist",
  },
];

const revenueResources: ResourceLink[] = [
  {
    title: "Service Agreement Growth Guide",
    description:
      "How to enroll more members from completed jobs and build predictable monthly revenue.",
    href: "/resources/service-agreement-growth-guide",
    type: "Guide",
  },
  {
    title: "MRR Forecast Template",
    description:
      "Track enrollments, churn, and recurring revenue trends with one operator-friendly sheet.",
    href: "/resources/mrr-forecast-template",
    type: "Template",
  },
  {
    title: "Revenue Recovery Playbook",
    description:
      "Processes to reactivate stale leads, declined repairs, and aging-equipment opportunities.",
    href: "/resources/revenue-recovery-playbook",
    type: "Playbook",
  },
];

const communicationResources: ResourceLink[] = [
  {
    title: "Customer Messaging Guide",
    description:
      "Message examples for lead replies, ETA updates, estimate nudges, and review requests.",
    href: "/resources/customer-messaging-guide",
    type: "Guide",
  },
  {
    title: "Drip Sequence Library",
    description:
      "Copy-and-customize lifecycle campaigns built for home service customer journeys.",
    href: "/resources/drip-sequence-library",
    type: "Playbook",
  },
  {
    title: "TCPA Compliance Checklist",
    description:
      "A practical checklist for opt-ins, quiet hours, opt-outs, and message audit trails.",
    href: "/resources/tcpa-compliance-checklist",
    type: "Checklist",
  },
];

const managementResources: ResourceLink[] = [
  {
    title: "Team Onboarding Template",
    description:
      "A repeatable onboarding checklist for dispatchers, techs, admins, and owners.",
    href: "/resources/team-onboarding-template",
    type: "Template",
  },
  {
    title: "Role Permission Matrix",
    description:
      "A starter matrix for assigning access by role without overexposing sensitive data.",
    href: "/resources/role-permission-matrix",
    type: "Guide",
  },
  {
    title: "Growth Planning Checklist",
    description:
      "How to scale headcount, workflows, and software adoption without adding chaos.",
    href: "/resources/growth-planning-checklist",
    type: "Checklist",
  },
];

const platformResources: ResourceLink[] = [
  {
    title: "QuickBooks Sync Guide",
    description:
      "Set up two-way sync and reduce double-entry between operations and accounting.",
    href: "/resources/quickbooks-sync-guide",
    type: "Guide",
  },
  {
    title: "Automation Trigger Map",
    description:
      "A visual map of event triggers you can use to run follow-up and booking workflows.",
    href: "/resources/automation-trigger-map",
    type: "Template",
  },
  {
    title: "Reliability & Compliance Brief",
    description:
      "How communication failover, deliverability logs, and compliance safeguards protect growth.",
    href: "/resources/reliability-compliance-brief",
    type: "Playbook",
  },
];

const demoCta = {
  ctaLabel: "Book a demo",
  ctaHref: "#demo",
};

export const features: Feature[] = [
  {
    slug: "speed-to-lead-engine",
    badge: "⚡ Speed-to-Lead",
    headline: "The first company to respond wins. Make it yours every time.",
    description:
      "Auto-reply to every new lead in under 60 seconds, then keep follow-up moving until they book, reply, or opt out.",
    ...demoCta,
    mockup: "lead",
    metaTitle: "Speed-to-Lead Engine | LeverLoop",
    metaDescription:
      "Auto-text every new lead in under 60 seconds so your team stays first to respond and first to win.",
    details: [
      {
        label: "Instant Response",
        headline: "Reply to every lead before your competitor does",
        description:
          "The second a lead enters your system, LeverLoop sends a personalized business text and marks the record as contacted.",
        cta: "See instant response flow",
        benefit: "Protect ad spend by converting inquiries while intent is highest.",
        mock: "lead",
      },
      {
        label: "Automated Follow-Up",
        headline: "Keep conversations alive without dispatcher effort",
        description:
          "If a lead goes quiet, your configured drip sequence continues follow-up automatically until there is a clear outcome.",
        cta: "See follow-up automation",
        benefit: "No more warm leads getting lost in inbox backlog.",
        mock: "inbox",
      },
      {
        label: "Pipeline Visibility",
        headline: "Track response outcomes across your whole funnel",
        description:
          "Stage updates, replies, and booking actions are logged in real time so the office always knows what happened next.",
        cta: "View lead tracking",
        benefit: "Your team gets speed and accountability in one workflow.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "lead-pipeline-visual-board",
      "drip-campaigns",
      "unified-inbox",
    ],
    resources: salesResources,
    faqs: [
      {
        question: "Can we customize the first-response message?",
        answer:
          "Yes. You control the copy, tone, and merge fields so messages sound like your business, not a robot.",
      },
      {
        question: "Does speed-to-lead still work after hours?",
        answer:
          "Yes. Automated lead replies fire around the clock, with compliance rules like quiet hours applied where required.",
      },
    ],
  },
  {
    slug: "lead-pipeline-visual-board",
    badge: "📊 Lead Pipeline",
    headline: "See every opportunity at a glance so nothing slips.",
    description:
      "Run your sales process on a visual board from New to Won, with timestamps, aging indicators, and real-time team updates.",
    ...demoCta,
    mockup: "pipeline",
    metaTitle: "Lead Pipeline Visual Board | LeverLoop",
    metaDescription:
      "Track every lead from first contact to closed deal with a visual pipeline built for home service sales workflows.",
    details: [
      {
        label: "Stage Clarity",
        headline: "Track leads through clear, operational stages",
        description:
          "Every card moves through a practical home-service funnel so the team always knows what needs action next.",
        cta: "Explore stage setup",
        benefit: "You get one shared source of pipeline truth.",
        mock: "pipeline",
      },
      {
        label: "Aging Alerts",
        headline: "Find stalled opportunities before they go cold",
        description:
          "Visual aging markers highlight opportunities that have sat too long and should be followed up today.",
        cta: "See aging indicators",
        benefit: "Your best opportunities stay active instead of forgotten.",
        mock: "recovery",
      },
      {
        label: "One-Click Conversion",
        headline: "Turn Won leads into jobs without double entry",
        description:
          "Close the deal and create customer plus job records immediately from the same board.",
        cta: "See conversion workflow",
        benefit: "Sales handoff to operations is fast and clean.",
        mock: "dispatch",
      },
    ],
    relatedFeatureSlugs: [
      "speed-to-lead-engine",
      "estimate-builder-good-better-best",
      "drip-campaigns",
    ],
    resources: salesResources,
    faqs: [
      {
        question: "Can we filter pipeline views by rep or job type?",
        answer:
          "Yes. Filter by assignee, stage, date range, and job type to run focused pipeline reviews.",
      },
      {
        question: "Does moving a stage trigger automations?",
        answer:
          "Yes. Stage transitions can automatically enroll leads in follow-up campaigns and notify the right team members.",
      },
    ],
  },
  {
    slug: "customer-database",
    badge: "🗂️ Customer Records",
    headline: "Every customer, property, and service record in seconds.",
    description:
      "Search by name, phone, address, or equipment and pull up the full relationship history instantly.",
    ...demoCta,
    mockup: "customer",
    metaTitle: "Customer Database | LeverLoop",
    metaDescription:
      "Access complete customer and property history instantly, including jobs, equipment, invoices, and messages.",
    details: [
      {
        label: "Unified Profile",
        headline: "See complete customer context on one screen",
        description:
          "Timeline view combines jobs, estimates, invoices, notes, photos, and communications in order.",
        cta: "View unified timeline",
        benefit: "Dispatchers answer confidently without searching multiple systems.",
        mock: "customer",
      },
      {
        label: "Multi-Property Support",
        headline: "Handle landlords and portfolios without confusion",
        description:
          "One customer record can include many service addresses, each with its own equipment and job history.",
        cta: "See property mapping",
        benefit: "Commercial and rental customers stay organized as they scale.",
        mock: "equipment",
      },
      {
        label: "Compliance Built-In",
        headline: "Track consent and communication status automatically",
        description:
          "Opt-in source, timestamp, and messaging status are captured with each profile for audit-ready records.",
        cta: "See consent tracking",
        benefit: "Your growth workflows stay compliant without extra admin work.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "equipment-asset-tracking",
      "photo-job-documentation",
      "unified-inbox",
    ],
    resources: operationsResources,
    faqs: [
      {
        question: "Can techs access customer history before arriving?",
        answer:
          "Yes. Techs can view service history, notes, and equipment records from the mobile app before they knock.",
      },
      {
        question: "Can we search by serial number or address?",
        answer:
          "Yes. Global search supports customer info, property details, and equipment identifiers.",
      },
    ],
  },
  {
    slug: "equipment-asset-tracking",
    badge: "🏷️ Asset Tracking",
    headline: "Turn every service call into data you can sell from.",
    description:
      "Log make, model, serial, install date, warranty, photos, and service history for every unit at every property.",
    ...demoCta,
    mockup: "equipment",
    metaTitle: "Equipment & Asset Tracking | LeverLoop",
    metaDescription:
      "Track equipment records, warranty timelines, and service history to uncover proactive replacement opportunities.",
    details: [
      {
        label: "Fast Capture",
        headline: "Create equipment records in under two minutes",
        description:
          "Techs add units from the field with data plate photos and key attributes while details are fresh.",
        cta: "See in-field capture",
        benefit: "Institutional knowledge gets stored in your business, not in one tech's memory.",
        mock: "equipment",
      },
      {
        label: "Lifecycle History",
        headline: "Attach every visit to the exact unit worked on",
        description:
          "Completed jobs automatically build service history per asset for cleaner diagnostics and better recommendations.",
        cta: "See service history",
        benefit: "Future jobs start with complete context.",
        mock: "customer",
      },
      {
        label: "Proactive Alerts",
        headline: "Surface aging and warranty risk before failure",
        description:
          "Automatic age and warranty logic flags units that should trigger maintenance or replacement conversations.",
        cta: "See replacement signals",
        benefit: "You create opportunities before competitors do.",
        mock: "recovery",
      },
    ],
    relatedFeatureSlugs: [
      "equipment-age-alerts",
      "revenue-recovery-dashboard",
      "mobile-tech-app",
    ],
    resources: operationsResources,
    faqs: [
      {
        question: "Does asset history remain if property ownership changes?",
        answer:
          "Yes. Equipment records are tied to service locations so history remains intact through ownership transitions.",
      },
      {
        question: "Can we report on units older than a certain age?",
        answer:
          "Yes. Filter and search by age, service frequency, and warranty windows to find high-priority opportunities.",
      },
    ],
  },
  {
    slug: "estimate-builder-good-better-best",
    badge: "🧾 Good / Better / Best",
    headline: "Send option-based proposals from the field in minutes.",
    description:
      "Give every customer clear choices on their phone, with digital approval and one-tap conversion to invoice.",
    ...demoCta,
    mockup: "estimate",
    metaTitle: "Estimate Builder (Good / Better / Best) | LeverLoop",
    metaDescription:
      "Create and send Good / Better / Best estimates from the field to increase close rates and average ticket size.",
    details: [
      {
        label: "Three-Tier Quotes",
        headline: "Present options that increase ticket value naturally",
        description:
          "Pre-configured service bundles help techs quote consistently with Good, Better, and Best recommendations.",
        cta: "See option builder",
        benefit: "Customers choose value levels instead of rejecting a single number.",
        mock: "estimate",
      },
      {
        label: "Phone-First Experience",
        headline: "Deliver polished proposals by text in one tap",
        description:
          "Customers open the proposal link, compare tiers, sign, and approve without app downloads or PDFs.",
        cta: "See customer approval view",
        benefit: "Approvals happen while urgency is highest.",
        mock: "mobile",
      },
      {
        label: "Fast Handoff",
        headline: "Convert approved options to jobs and invoices instantly",
        description:
          "Approved tier details flow directly into operations and billing so the office does not re-enter anything.",
        cta: "See estimate-to-invoice flow",
        benefit: "Faster fulfillment and fewer data errors.",
        mock: "payments",
      },
    ],
    relatedFeatureSlugs: [
      "flat-rate-pricebook",
      "digital-approvals-signatures",
      "invoicing-text-to-pay",
    ],
    resources: salesResources,
    faqs: [
      {
        question: "Can inexperienced techs still quote confidently?",
        answer:
          "Yes. The structured option flow and pricebook mappings guide newer techs through consistent, profitable quoting.",
      },
      {
        question: "Can we mark one option as recommended?",
        answer:
          "Yes. You can highlight a preferred tier so customers clearly understand your professional recommendation.",
      },
    ],
  },
  {
    slug: "flat-rate-pricebook",
    badge: "💵 Flat-Rate Pricing",
    headline: "Consistent, profitable pricing in every tech's pocket.",
    description:
      "Standardize service pricing by trade and keep field quotes aligned with your target margins.",
    ...demoCta,
    mockup: "estimate",
    metaTitle: "Flat-Rate Pricebook | LeverLoop",
    metaDescription:
      "Deploy consistent flat-rate pricing for every tech and every job to protect margins and build customer trust.",
    details: [
      {
        label: "Pre-Seeded Catalog",
        headline: "Start with trade-specific services out of the box",
        description:
          "HVAC, plumbing, and electrical line items are preloaded so teams can quote quickly from day one.",
        cta: "See catalog structure",
        benefit: "You launch faster without building a pricebook from scratch.",
        mock: "estimate",
      },
      {
        label: "Owner Control",
        headline: "Set margins once and enforce everywhere",
        description:
          "Admins own pricing rules while techs can search and select items but cannot alter approved rates.",
        cta: "See admin controls",
        benefit: "No more margin leakage from inconsistent field pricing.",
        mock: "team",
      },
      {
        label: "GBB Mapping",
        headline: "Auto-build estimate tiers from selected services",
        description:
          "Map line items to Good / Better / Best bundles so quote creation stays fast and consistent.",
        cta: "See tier mappings",
        benefit: "Every tech can quote like your best closer.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "estimate-builder-good-better-best",
      "digital-approvals-signatures",
      "mobile-tech-app",
    ],
    resources: salesResources,
    faqs: [
      {
        question: "Can we customize prices by local market?",
        answer:
          "Yes. Owners and admins can adjust every line item to match local pricing and target gross margin.",
      },
      {
        question: "Can we disable seasonal or outdated services?",
        answer:
          "Yes. Any item can be activated or archived so the field only sees current offerings.",
      },
    ],
  },
  {
    slug: "digital-approvals-signatures",
    badge: "✍️ Digital Signatures",
    headline: "Approve estimates and completed work from any phone.",
    description:
      "Capture legally auditable signatures in seconds, without paper packets, scans, or follow-up chasing.",
    ...demoCta,
    mockup: "payments",
    metaTitle: "Digital Approvals & Signatures | LeverLoop",
    metaDescription:
      "Get estimate and job sign-offs quickly with secure mobile approval links and full legal audit trails.",
    details: [
      {
        label: "Mobile Approval",
        headline: "Send secure links that customers can sign immediately",
        description:
          "Customers open a tokenized link, review terms, draw a signature, and approve in under 90 seconds.",
        cta: "See signature flow",
        benefit: "Jobs move forward while customer attention is still high.",
        mock: "mobile",
      },
      {
        label: "Legal Trail",
        headline: "Store timestamped proof for every approval",
        description:
          "Signed records include selection details, IP metadata, and timestamp history for every accepted proposal.",
        cta: "See audit details",
        benefit: "You can confidently resolve approval disputes.",
        mock: "reliability",
      },
      {
        label: "Workflow Trigger",
        headline: "Push approved work straight into dispatch and billing",
        description:
          "Approvals notify the office immediately and can trigger downstream job or invoice actions automatically.",
        cta: "See approval triggers",
        benefit: "No lag between customer yes and operational next step.",
        mock: "dispatch",
      },
    ],
    relatedFeatureSlugs: [
      "estimate-builder-good-better-best",
      "invoicing-text-to-pay",
      "photo-job-documentation",
    ],
    resources: communicationResources,
    faqs: [
      {
        question: "Do customers need to create an account to sign?",
        answer:
          "No. Customers sign directly from a secure link in their text or email.",
      },
      {
        question: "How long are approval links valid?",
        answer:
          "Links are time-limited for security and can be resent when needed.",
      },
    ],
  },
  {
    slug: "invoicing-text-to-pay",
    badge: "💳 Text-to-Pay",
    headline: "Send an invoice by text and get paid before the truck leaves.",
    description:
      "Turn approved work into secure payment links instantly with card, ACH, and partial payment support.",
    ...demoCta,
    mockup: "payments",
    metaTitle: "Invoicing & Text-to-Pay | LeverLoop",
    metaDescription:
      "Convert approved work into invoices and collect payment by text in minutes instead of weeks.",
    details: [
      {
        label: "One-Tap Conversion",
        headline: "Create invoices directly from approved estimates",
        description:
          "Line items, taxes, and customer details flow into invoice drafts automatically for fast send-out.",
        cta: "See estimate conversion",
        benefit: "The office avoids repetitive data entry and billing lag.",
        mock: "payments",
      },
      {
        label: "Secure Collection",
        headline: "Collect payment with trusted Stripe processing",
        description:
          "Customers pay from their phone by card or ACH through a secure branded link.",
        cta: "See payment experience",
        benefit: "Shorter receivables cycle and stronger cash flow.",
        mock: "mobile",
      },
      {
        label: "Real-Time Confirmation",
        headline: "Notify field and office when payment clears",
        description:
          "Webhook updates mark jobs paid, issue receipts, and keep accounting and operations aligned.",
        cta: "See payment events",
        benefit: "Everyone works from accurate payment status in real time.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "digital-approvals-signatures",
      "quickbooks-integration",
      "mobile-tech-app",
    ],
    resources: revenueResources,
    faqs: [
      {
        question: "Can we take deposits or partial payments?",
        answer:
          "Yes. Partial invoicing supports deposits, progress billing, and staged collections.",
      },
      {
        question: "How quickly do funds settle?",
        answer:
          "Settlement timing follows your Stripe payout schedule, typically within one to two business days.",
      },
    ],
  },
  {
    slug: "dispatch-board",
    badge: "📅 Dispatch",
    headline: "Run your entire service day from one drag-and-drop board.",
    description:
      "See every tech, every job, and every open slot in real time so dispatch can optimize instead of firefight.",
    ...demoCta,
    mockup: "dispatch",
    metaTitle: "Dispatch Board | LeverLoop",
    metaDescription:
      "Schedule and reassign jobs in real time with a dispatcher-friendly board built for field service operations.",
    details: [
      {
        label: "Visual Scheduling",
        headline: "Assign by drag-and-drop across techs and time slots",
        description:
          "Move jobs between technicians and windows in seconds, with instant updates to the field.",
        cta: "See schedule controls",
        benefit: "Less time managing logistics and fewer assignment errors.",
        mock: "dispatch",
      },
      {
        label: "Capacity View",
        headline: "Know exactly where you can add work today",
        description:
          "Booked hours and unscheduled queues make bottlenecks and open capacity visible at a glance.",
        cta: "See capacity planning",
        benefit: "You fit more jobs into the same team day.",
        mock: "pipeline",
      },
      {
        label: "Live Status",
        headline: "Track field progress without constant phone calls",
        description:
          "Status updates from the tech app feed the board automatically, including on-my-way and completion events.",
        cta: "See live updates",
        benefit: "Dispatchers stay proactive and customers stay informed.",
        mock: "mobile",
      },
    ],
    relatedFeatureSlugs: [
      "on-my-way-notifications",
      "mobile-tech-app",
      "unified-inbox",
    ],
    resources: operationsResources,
    faqs: [
      {
        question: "Can dispatchers use the board from mobile devices?",
        answer:
          "Yes. The board is responsive so dispatchers can reassign and update jobs when away from desk.",
      },
      {
        question: "Can unscheduled jobs stay in a queue?",
        answer:
          "Yes. Jobs can remain unscheduled until ready, then be dragged directly onto a tech's timeline.",
      },
    ],
  },
  {
    slug: "on-my-way-notifications",
    badge: "📲 ETA Texts",
    headline: "One tap tells customers who is coming and when.",
    description:
      "Reduce inbound status calls with automatic on-my-way messages including technician name, photo, and ETA.",
    ...demoCta,
    mockup: "dispatch",
    metaTitle: "On My Way Notifications | LeverLoop",
    metaDescription:
      "Send technician ETA updates in one tap to reduce where-is-my-tech calls and improve customer experience.",
    details: [
      {
        label: "One-Tap Send",
        headline: "Notify customers directly from the job card",
        description:
          "Techs trigger on-my-way messages without calling the office, so communication stays fast and consistent.",
        cta: "See notification action",
        benefit: "Dispatch time is freed for higher-value work.",
        mock: "mobile",
      },
      {
        label: "Branded Context",
        headline: "Include technician name, photo, and arrival window",
        description:
          "Messages provide enough context for customers to feel prepared and confident before arrival.",
        cta: "View customer message",
        benefit: "A more professional arrival experience on every job.",
        mock: "inbox",
      },
      {
        label: "Delivery Logging",
        headline: "Track every notification in one communication timeline",
        description:
          "Delivery status and send history are visible to office staff for complete communication accountability.",
        cta: "See notification logs",
        benefit: "No uncertainty about whether key customer updates were sent.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "dispatch-board",
      "mobile-tech-app",
      "unified-inbox",
    ],
    resources: communicationResources,
    faqs: [
      {
        question: "Can ETA be adjusted by the technician?",
        answer:
          "Yes. Techs can send either a mapped estimate or a manually chosen arrival window.",
      },
      {
        question: "Can dispatch see if the message was sent?",
        answer:
          "Yes. The office sees message status and timing in the communication history.",
      },
    ],
  },
  {
    slug: "mobile-tech-app",
    badge: "📱 Mobile App",
    headline: "Everything techs need to run the job, in one app.",
    description:
      "Schedule, customer history, estimates, payments, photos, notes, and signatures all live on the technician's phone.",
    ...demoCta,
    mockup: "mobile",
    metaTitle: "Mobile Tech App | LeverLoop",
    metaDescription:
      "Give technicians full field capability from one mobile app: jobs, estimates, documentation, and payments.",
    details: [
      {
        label: "Daily Command Center",
        headline: "Start every day with schedule and job context ready",
        description:
          "Techs see their route, notes, and customer history in one workflow before leaving the first stop.",
        cta: "See tech home view",
        benefit: "Fewer calls back to office for basic context.",
        mock: "mobile",
      },
      {
        label: "Field Sales & Collection",
        headline: "Build estimates and collect payment before leaving site",
        description:
          "Pricebook access, GBB quoting, digital approvals, and payment workflows are available in the same app.",
        cta: "See in-field close flow",
        benefit: "Higher close rates and faster cash collection.",
        mock: "payments",
      },
      {
        label: "Live Documentation",
        headline: "Capture photos and notes where work happens",
        description:
          "Before/after media and job notes attach instantly to the customer record and office timeline.",
        cta: "See documentation tools",
        benefit: "Cleaner records with less end-of-day paperwork.",
        mock: "customer",
      },
    ],
    relatedFeatureSlugs: [
      "offline-mode",
      "dispatch-board",
      "photo-job-documentation",
    ],
    resources: operationsResources,
    faqs: [
      {
        question: "Do techs need to install from an app store?",
        answer:
          "No. LeverLoop runs as a progressive web app and can be added to the phone home screen.",
      },
      {
        question: "Can techs collect signatures and payments from mobile?",
        answer:
          "Yes. Both approval and payment workflows are built directly into the job flow.",
      },
    ],
  },
  {
    slug: "offline-mode",
    badge: "📡 Offline Mode",
    headline: "Keep working in attics and basements with no signal.",
    description:
      "Technicians can access key job data, document work, and queue actions offline, then auto-sync when service returns.",
    ...demoCta,
    mockup: "mobile",
    metaTitle: "Offline Mode | LeverLoop",
    metaDescription:
      "Run field workflows without connectivity and sync automatically when internet service returns.",
    details: [
      {
        label: "Local Cache",
        headline: "Preload schedule, customers, and pricebook each day",
        description:
          "Core job data is stored locally so techs can continue critical workflows with zero bars.",
        cta: "See offline readiness",
        benefit: "No work stoppage in low-signal environments.",
        mock: "mobile",
      },
      {
        label: "Queued Actions",
        headline: "Capture notes, photos, and signatures offline",
        description:
          "Offline events are queued in order and synced automatically once connectivity returns.",
        cta: "See sync queue",
        benefit: "Field documentation stays complete and accurate.",
        mock: "reliability",
      },
      {
        label: "Conflict Handling",
        headline: "Resolve edit collisions with clear prompts",
        description:
          "If overlapping edits happen, technicians and office users get simple resolution choices.",
        cta: "See conflict workflow",
        benefit: "Data stays trustworthy across teams.",
        mock: "team",
      },
    ],
    relatedFeatureSlugs: [
      "mobile-tech-app",
      "photo-job-documentation",
      "dispatch-board",
    ],
    resources: operationsResources,
    faqs: [
      {
        question: "What can techs do without connectivity?",
        answer:
          "They can view cached jobs, access customer context, build estimates, capture notes and photos, and collect signatures.",
      },
      {
        question: "Does syncing require manual steps?",
        answer:
          "No. Sync runs automatically in the background when service returns.",
      },
    ],
  },
  {
    slug: "service-agreement-management",
    badge: "🔁 Memberships",
    headline: "Turn completed jobs into recurring revenue in three minutes.",
    description:
      "Create plans, enroll customers in the field, and automate recurring billing and renewals without extra admin.",
    ...demoCta,
    mockup: "memberships",
    metaTitle: "Service Agreement Management | LeverLoop",
    metaDescription:
      "Enroll and manage service agreements with digital signatures and automated recurring billing.",
    details: [
      {
        label: "Plan Builder",
        headline: "Define membership offerings your techs can sell confidently",
        description:
          "Configure pricing, billing cycle, visits, and member benefits once and deploy across the team.",
        cta: "See plan setup",
        benefit: "Consistent member offers across every job.",
        mock: "memberships",
      },
      {
        label: "In-Field Enrollment",
        headline: "Enroll customers right after a successful visit",
        description:
          "Techs present plans, capture signature, and start recurring billing from the same mobile workflow.",
        cta: "See enrollment flow",
        benefit: "Higher close rate at the point of maximum trust.",
        mock: "mobile",
      },
      {
        label: "Autopay Lifecycle",
        headline: "Automate recurring charges and renewal communication",
        description:
          "Subscription events update member status and trigger renewal or failed-payment workflows.",
        cta: "See billing automation",
        benefit: "Reliable recurring revenue with less back-office effort.",
        mock: "payments",
      },
    ],
    relatedFeatureSlugs: [
      "mrr-dashboard",
      "automated-maintenance-reminders",
      "flat-monthly-pricing",
    ],
    resources: revenueResources,
    faqs: [
      {
        question: "Can we offer monthly, quarterly, and annual plans?",
        answer:
          "Yes. Plan templates support multiple billing cadences and configurable included services.",
      },
      {
        question: "How are failed membership payments handled?",
        answer:
          "Failed payments are flagged automatically so teams can trigger update-payment outreach and recovery workflows.",
      },
    ],
  },
  {
    slug: "mrr-dashboard",
    badge: "📈 Recurring Revenue",
    headline: "See your membership business clearly on one screen.",
    description:
      "Track active members, MRR, churn, renewals, and at-risk accounts without exporting reports.",
    ...demoCta,
    mockup: "memberships",
    metaTitle: "MRR Dashboard | LeverLoop",
    metaDescription:
      "Monitor recurring revenue health with visibility into members, churn, renewals, and at-risk payments.",
    details: [
      {
        label: "Core Metrics",
        headline: "Monitor MRR, active members, and churn daily",
        description:
          "A daily snapshot model keeps membership metrics fast, current, and easy to read.",
        cta: "See MRR metrics",
        benefit: "Leaders can make proactive recurring-revenue decisions.",
        mock: "memberships",
      },
      {
        label: "Renewal Forecast",
        headline: "Project upcoming renewals and maintenance load",
        description:
          "Forward-looking trends reveal workload and retention risk before it impacts cash flow.",
        cta: "See renewal forecast",
        benefit: "You can plan staffing and outreach earlier.",
        mock: "pipeline",
      },
      {
        label: "At-Risk Actions",
        headline: "Recover at-risk members with one-click outreach",
        description:
          "Drill into failing autopay and send update requests directly from the dashboard.",
        cta: "See member recovery",
        benefit: "Lower churn without extra reporting burden.",
        mock: "recovery",
      },
    ],
    relatedFeatureSlugs: [
      "service-agreement-management",
      "automated-maintenance-reminders",
      "revenue-recovery-dashboard",
    ],
    resources: revenueResources,
    faqs: [
      {
        question: "How often does dashboard data refresh?",
        answer:
          "Dashboard metrics update on a daily snapshot cadence and drill-down records reflect the latest synced events.",
      },
      {
        question: "Can we drill into each metric?",
        answer:
          "Yes. Every headline metric links to the underlying customer or agreement list for action.",
      },
    ],
  },
  {
    slug: "automated-maintenance-reminders",
    badge: "🛠️ Maintenance Reminders",
    headline: "Send due-service texts automatically and book from replies.",
    description:
      "Trigger maintenance outreach by schedule, equipment history, or agreement terms and convert replies into booked work.",
    ...demoCta,
    mockup: "memberships",
    metaTitle: "Automated Maintenance Reminders | LeverLoop",
    metaDescription:
      "Automatically remind customers when maintenance is due and convert replies into scheduled jobs.",
    details: [
      {
        label: "Configurable Timing",
        headline: "Set reminder cadence around your service model",
        description:
          "Run reminders at 30, 14, or 3 days out, or define custom timing windows per plan.",
        cta: "See schedule controls",
        benefit: "Outreach happens consistently without dispatcher task lists.",
        mock: "pipeline",
      },
      {
        label: "Reply-to-Book",
        headline: "Create jobs from simple customer replies",
        description:
          "Reply handling can detect booking intent and create office-ready follow-up tasks immediately.",
        cta: "See booking automation",
        benefit: "More appointments from fewer manual touchpoints.",
        mock: "inbox",
      },
      {
        label: "Deduplication",
        headline: "Prevent over-messaging with smart suppression rules",
        description:
          "Quiet hours, prior-send windows, and period matching prevent duplicate reminders.",
        cta: "See reminder safeguards",
        benefit: "Higher response rates with less customer fatigue.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "service-agreement-management",
      "drip-campaigns",
      "mrr-dashboard",
    ],
    resources: revenueResources,
    faqs: [
      {
        question: "Can reminders run for non-members too?",
        answer:
          "Yes. Reminders can be triggered from service intervals and equipment records, not only agreements.",
      },
      {
        question: "Can reminder copy match our brand voice?",
        answer:
          "Yes. Templates are fully editable, including merge fields for customer and company details.",
      },
    ],
  },
  {
    slug: "revenue-recovery-dashboard",
    badge: "💰 Revenue Recovery",
    headline: "See every recoverable dollar and act in one click.",
    description:
      "Unify stale estimates, cold leads, declined repairs, and aging-equipment opportunities in one actionable queue.",
    ...demoCta,
    mockup: "recovery",
    metaTitle: "Revenue Recovery Dashboard | LeverLoop",
    metaDescription:
      "Find and recover missed revenue opportunities with one dashboard for stale leads, estimates, and repair follow-up.",
    details: [
      {
        label: "Opportunity Buckets",
        headline: "Aggregate missed revenue by category and value",
        description:
          "Rows are grouped into clear categories so owners can prioritize the biggest recoverable dollars first.",
        cta: "See recovery categories",
        benefit: "You focus team effort where ROI is highest.",
        mock: "recovery",
      },
      {
        label: "One-Tap Actions",
        headline: "Launch follow-up from the same dashboard row",
        description:
          "Send texts, enroll sequences, or schedule callbacks without opening multiple screens.",
        cta: "See action controls",
        benefit: "Recovery becomes a daily workflow, not a monthly scramble.",
        mock: "inbox",
      },
      {
        label: "Nightly Recalculation",
        headline: "Keep queue quality high without manual reporting",
        description:
          "Automated refresh logic updates opportunities and hides dismissed rows until they are relevant again.",
        cta: "See refresh logic",
        benefit: "Teams spend time acting, not rebuilding lists.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "declined-repair-follow-up",
      "equipment-age-alerts",
      "drip-campaigns",
    ],
    resources: revenueResources,
    faqs: [
      {
        question: "Can we filter by opportunity type and value?",
        answer:
          "Yes. Filter controls let you prioritize specific opportunity classes and dollar thresholds.",
      },
      {
        question: "Do dismissed items disappear forever?",
        answer:
          "Dismissed rows are hidden until recalculation surfaces them again based on fresh data.",
      },
    ],
  },
  {
    slug: "declined-repair-follow-up",
    badge: "🔁 Declined Repair",
    headline: "When customers say no, follow-up starts automatically.",
    description:
      "Log objection reasons at decline time and trigger tailored message sequences that reopen the conversation later.",
    ...demoCta,
    mockup: "recovery",
    metaTitle: "Declined Repair Follow-Up | LeverLoop",
    metaDescription:
      "Capture declined-repair reasons and run objection-specific follow-up sequences automatically.",
    details: [
      {
        label: "Reason Capture",
        headline: "Turn a decline into structured follow-up data",
        description:
          "Techs select a reason at the point of decline so messaging can address customer concerns directly.",
        cta: "See decline logging",
        benefit: "No more vague notes that never lead to action.",
        mock: "recovery",
      },
      {
        label: "Tailored Sequences",
        headline: "Send objection-specific follow-up automatically",
        description:
          "Price, timing, and indecision can each trigger different messaging cadence and content.",
        cta: "See sequence logic",
        benefit: "Follow-up feels relevant instead of generic.",
        mock: "inbox",
      },
      {
        label: "Auto Exit",
        headline: "Stop campaigns once customers reply or book",
        description:
          "Conversion and response events immediately remove customers from active decline sequences.",
        cta: "See exit conditions",
        benefit: "You stay persistent without over-messaging.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "revenue-recovery-dashboard",
      "drip-campaigns",
      "estimate-builder-good-better-best",
    ],
    resources: revenueResources,
    faqs: [
      {
        question: "Can we customize decline reason options?",
        answer:
          "Yes. Reason lists can be tailored to your sales process while still supporting automation triggers.",
      },
      {
        question: "Will the sequence stop if the customer books another service?",
        answer:
          "Yes. Booking and response triggers can automatically unenroll the customer.",
      },
    ],
  },
  {
    slug: "equipment-age-alerts",
    badge: "⏳ Age Alerts",
    headline: "Spot replacement opportunities before systems fail.",
    description:
      "Flag units by age, repair frequency, and warranty windows so techs can present the right option at the right time.",
    ...demoCta,
    mockup: "equipment",
    metaTitle: "Equipment Age Alerts | LeverLoop",
    metaDescription:
      "Automatically identify aging-equipment replacement opportunities before emergency failures occur.",
    details: [
      {
        label: "Smart Thresholds",
        headline: "Trigger alerts from practical replacement indicators",
        description:
          "Rules monitor age, repeat service frequency, and warranty expiration to surface high-likelihood opportunities.",
        cta: "See alert rules",
        benefit: "Replacement conversations happen earlier and with better context.",
        mock: "equipment",
      },
      {
        label: "Job Brief Context",
        headline: "Give techs proactive talking points before arrival",
        description:
          "Job brief flags include actionable notes so the tech can frame repair-versus-replace clearly onsite.",
        cta: "See job brief cues",
        benefit: "Teams present upgrades confidently and consistently.",
        mock: "mobile",
      },
      {
        label: "Recovery Integration",
        headline: "Pipe alerts directly into revenue recovery workflows",
        description:
          "Aging-equipment opportunities are tracked alongside other recoverable revenue categories.",
        cta: "See dashboard tie-in",
        benefit: "High-margin replacement work stays visible and actionable.",
        mock: "recovery",
      },
    ],
    relatedFeatureSlugs: [
      "equipment-asset-tracking",
      "revenue-recovery-dashboard",
      "estimate-builder-good-better-best",
    ],
    resources: revenueResources,
    faqs: [
      {
        question: "Can alert thresholds be adjusted by trade?",
        answer:
          "Yes. Alert logic can be configured to reflect your service standards and replacement strategy.",
      },
      {
        question: "Do techs see alerts before arriving at the property?",
        answer:
          "Yes. Alerts are included in job context so techs can prepare recommendations before the visit.",
      },
    ],
  },
  {
    slug: "drip-campaigns",
    badge: "💬 Drip Campaigns",
    headline: "Lifecycle messaging that runs while your team runs jobs.",
    description:
      "Automate prebuilt trade-specific sequences across lead nurture, estimate follow-up, reactivation, and renewals.",
    ...demoCta,
    mockup: "inbox",
    metaTitle: "Drip Campaigns | LeverLoop",
    metaDescription:
      "Automate customer follow-up with trigger-based drip campaigns built for home service lifecycle stages.",
    details: [
      {
        label: "Trigger-Based Entry",
        headline: "Enroll customers automatically from real system events",
        description:
          "Campaigns can start from new leads, sent estimates, completed jobs, inactivity, and membership milestones.",
        cta: "See trigger library",
        benefit: "Follow-up happens by design, not memory.",
        mock: "pipeline",
      },
      {
        label: "Trade-Specific Templates",
        headline: "Launch proven sequences without writing from scratch",
        description:
          "Prebuilt messaging gives teams a fast starting point, then can be customized to match local brand voice.",
        cta: "See campaign templates",
        benefit: "You deploy automation faster with better copy quality.",
        mock: "inbox",
      },
      {
        label: "Exit Conditions",
        headline: "Stop campaigns as soon as goals are met",
        description:
          "Replies, approvals, and bookings can automatically remove customers from active sequences.",
        cta: "See campaign exits",
        benefit: "Customers receive timely follow-up without unnecessary noise.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "speed-to-lead-engine",
      "automated-maintenance-reminders",
      "declined-repair-follow-up",
    ],
    resources: communicationResources,
    faqs: [
      {
        question: "Can we build our own custom sequences?",
        answer:
          "Yes. You can clone templates or build custom multi-step workflows with your own timing and copy.",
      },
      {
        question: "How do merge fields work in messages?",
        answer:
          "Templates support dynamic fields like customer name, company, and technician so each message feels personal.",
      },
    ],
  },
  {
    slug: "unified-inbox",
    badge: "📥 Unified Inbox",
    headline: "See every customer text and email in one thread.",
    description:
      "Centralize human and automated communication so dispatchers always have context before they reply.",
    ...demoCta,
    mockup: "inbox",
    metaTitle: "Unified Inbox | LeverLoop",
    metaDescription:
      "Centralize customer communication across SMS and email with complete thread history and live reply handling.",
    details: [
      {
        label: "Single Timeline",
        headline: "Keep automated and manual messages in one place",
        description:
          "Outbound reminders, lead texts, and dispatcher replies are threaded by customer for full visibility.",
        cta: "See conversation view",
        benefit: "No more dropped context across tools and personal phones.",
        mock: "inbox",
      },
      {
        label: "Real-Time Routing",
        headline: "Surface inbound replies the moment they arrive",
        description:
          "Inbound message events post directly to the inbox and flag unread state for quick dispatcher action.",
        cta: "See inbound routing",
        benefit: "Customers get faster response and fewer handoff misses.",
        mock: "lead",
      },
      {
        label: "Search & Status",
        headline: "Find conversations and consent state instantly",
        description:
          "Search by contact, phone, or message content while keeping opt-in context visible to responders.",
        cta: "See inbox search",
        benefit: "Faster service with safer communication handling.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "drip-campaigns",
      "speed-to-lead-engine",
      "on-my-way-notifications",
    ],
    resources: communicationResources,
    faqs: [
      {
        question: "Can dispatchers see which messages were automated?",
        answer:
          "Yes. Message metadata indicates whether each send came from a person or automation.",
      },
      {
        question: "Do replies send from our business number?",
        answer:
          "Yes. Inbox replies use your configured business communication channel, not a personal device.",
      },
    ],
  },
  {
    slug: "photo-job-documentation",
    badge: "📸 Job Documentation",
    headline: "Capture proof of work while the job is happening.",
    description:
      "Store before/after photos, data plates, and notes with every job record for future service and dispute protection.",
    ...demoCta,
    mockup: "customer",
    metaTitle: "Photo & Job Documentation | LeverLoop",
    metaDescription:
      "Capture and store before/after photos and job notes directly from the field, permanently attached to service records.",
    details: [
      {
        label: "In-App Capture",
        headline: "Take and tag photos directly in the job workflow",
        description:
          "Techs capture media inside the app, attach context tags, and keep documentation tied to the right record.",
        cta: "See photo capture flow",
        benefit: "No more missing images trapped on personal camera rolls.",
        mock: "mobile",
      },
      {
        label: "Permanent History",
        headline: "Attach media and notes to customer timeline forever",
        description:
          "Documentation propagates from job records into long-term customer history for future visits.",
        cta: "See record timeline",
        benefit: "Any team member can understand prior work instantly.",
        mock: "customer",
      },
      {
        label: "Risk Protection",
        headline: "Use evidence to resolve quality and damage disputes",
        description:
          "Timestamped visual proof strengthens communication and reduces ambiguity after job completion.",
        cta: "See evidence trail",
        benefit: "Clearer accountability for both team and customer.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "mobile-tech-app",
      "customer-database",
      "digital-approvals-signatures",
    ],
    resources: operationsResources,
    faqs: [
      {
        question: "Can photos be tagged by type?",
        answer:
          "Yes. Common tags include before, after, data plate, issue, and other.",
      },
      {
        question: "Can the office review uploaded photos immediately?",
        answer:
          "Yes. New uploads appear in the job record in near real time when connectivity is available.",
      },
    ],
  },
  {
    slug: "google-review-requests",
    badge: "⭐ Reviews",
    headline: "Ask for Google reviews at the moment satisfaction peaks.",
    description:
      "Automatically send review requests after completed jobs using your direct listing link and smart suppression rules.",
    ...demoCta,
    mockup: "inbox",
    metaTitle: "Google Review Requests | LeverLoop",
    metaDescription:
      "Automatically send Google review requests after completed jobs to grow trust and local lead conversion.",
    details: [
      {
        label: "Automatic Trigger",
        headline: "Send review requests after job completion",
        description:
          "Completion status can start a timed review request without dispatcher reminders or manual outreach.",
        cta: "See trigger setup",
        benefit: "Review generation becomes consistent across every job.",
        mock: "pipeline",
      },
      {
        label: "Direct Link",
        headline: "Take customers straight to your review page",
        description:
          "One-tap links reduce friction so satisfied customers can leave feedback immediately.",
        cta: "See message template",
        benefit: "Higher review completion with less effort.",
        mock: "mobile",
      },
      {
        label: "Send Controls",
        headline: "Prevent duplicate asks and respect quiet hours",
        description:
          "Suppression windows and routing rules ensure requests remain timely and customer-friendly.",
        cta: "See send safeguards",
        benefit: "Protects brand trust while still increasing volume.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "drip-campaigns",
      "unified-inbox",
      "speed-to-lead-engine",
    ],
    resources: communicationResources,
    faqs: [
      {
        question: "Can we set our own request delay window?",
        answer:
          "Yes. Delay timing is configurable so you can choose the right post-job window for your brand.",
      },
      {
        question: "Can duplicate requests be prevented?",
        answer:
          "Yes. Deduplication rules can suppress repeat sends within a chosen timeframe.",
      },
    ],
  },
  {
    slug: "quickbooks-integration",
    badge: "📚 QuickBooks",
    headline: "Keep operations and accounting in sync without double entry.",
    description:
      "Sync customers, invoices, and payments between LeverLoop and QuickBooks Online with transparent event logs.",
    ...demoCta,
    mockup: "reliability",
    metaTitle: "QuickBooks Integration | LeverLoop",
    metaDescription:
      "Sync invoices, payments, and customer records with QuickBooks Online to reduce bookkeeping overhead.",
    details: [
      {
        label: "Two-Way Sync",
        headline: "Propagate invoice and payment events automatically",
        description:
          "Operational events in LeverLoop are pushed to QuickBooks, reducing duplicate data entry.",
        cta: "See sync events",
        benefit: "Bookkeeping becomes faster and less error-prone.",
        mock: "reliability",
      },
      {
        label: "Connection Flow",
        headline: "Connect accounts with secure OAuth setup",
        description:
          "Owners can authorize QuickBooks in minutes without manual API configuration.",
        cta: "See connection steps",
        benefit: "Integrations launch quickly with low technical overhead.",
        mock: "team",
      },
      {
        label: "Error Visibility",
        headline: "Review sync logs and retry failed events",
        description:
          "A detailed event log surfaces what synced, when, and what needs attention.",
        cta: "See sync monitoring",
        benefit: "No silent failures in your accounting pipeline.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "invoicing-text-to-pay",
      "service-agreement-management",
      "revenue-recovery-dashboard",
    ],
    resources: platformResources,
    faqs: [
      {
        question: "How does duplicate customer handling work?",
        answer:
          "Sync logic attempts matching based on existing customer identifiers before creating new records.",
      },
      {
        question: "Do sync errors require support intervention?",
        answer:
          "Most issues can be retried directly from the sync log with guided error details.",
      },
    ],
  },
  {
    slug: "team-management-invitations",
    badge: "👥 Team Management",
    headline: "Invite, onboard, and offboard team members in minutes.",
    description:
      "Send role-based invites by email, speed up new-hire setup, and disable access instantly when needed.",
    ...demoCta,
    mockup: "team",
    metaTitle: "Team Management & Invitations | LeverLoop",
    metaDescription:
      "Invite and manage technicians, dispatchers, and admins quickly with role-based onboarding.",
    details: [
      {
        label: "Fast Invites",
        headline: "Add new users with email and role in one step",
        description:
          "Owners assign role at invite time so new team members land in the right workspace immediately.",
        cta: "See invite flow",
        benefit: "Day-one productivity without IT bottlenecks.",
        mock: "team",
      },
      {
        label: "Lifecycle Control",
        headline: "Resend, revoke, or disable access anytime",
        description:
          "Account lifecycle controls keep access clean as staffing changes.",
        cta: "See account controls",
        benefit: "Reduced security risk from stale accounts.",
        mock: "reliability",
      },
      {
        label: "Role Landing",
        headline: "Drop each user into role-appropriate workflows",
        description:
          "Dispatchers, techs, and admins each see the tools they need from first login.",
        cta: "See role experiences",
        benefit: "Lower training overhead across growing teams.",
        mock: "mobile",
      },
    ],
    relatedFeatureSlugs: [
      "role-based-access",
      "flat-monthly-pricing",
      "mobile-tech-app",
    ],
    resources: managementResources,
    faqs: [
      {
        question: "Can pending invites be revoked?",
        answer:
          "Yes. Owners can revoke or resend pending invitations directly from team settings.",
      },
      {
        question: "Do role updates require users to log out and back in?",
        answer:
          "Role changes apply immediately, so users can continue without a full re-login cycle.",
      },
    ],
  },
  {
    slug: "role-based-access",
    badge: "🔐 Access Control",
    headline: "Show each role exactly what they need, nothing more.",
    description:
      "Protect sensitive business data while keeping field and office workflows simple and focused.",
    ...demoCta,
    mockup: "team",
    metaTitle: "Role-Based Access | LeverLoop",
    metaDescription:
      "Control platform visibility by role so owners, admins, dispatchers, and techs only access what they need.",
    details: [
      {
        label: "Role Design",
        headline: "Align access with real home-service responsibilities",
        description:
          "Owner, admin, dispatcher, and tech roles reflect actual operational needs and avoid permission sprawl.",
        cta: "See role model",
        benefit: "Cleaner workflows and less accidental exposure of sensitive data.",
        mock: "team",
      },
      {
        label: "Server Enforcement",
        headline: "Protect data beyond UI-level hiding",
        description:
          "Authorization policies enforce access rules at the backend, not just on visible navigation.",
        cta: "See policy protections",
        benefit: "Security remains strong even on direct URL attempts.",
        mock: "reliability",
      },
      {
        label: "Instant Updates",
        headline: "Apply permission changes as org structure evolves",
        description:
          "Role updates propagate quickly, so access stays aligned during hiring and reorganization.",
        cta: "See role update flow",
        benefit: "Admin overhead stays low while governance stays tight.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "team-management-invitations",
      "flat-monthly-pricing",
      "ens-router",
    ],
    resources: managementResources,
    faqs: [
      {
        question: "Can technicians access financial dashboards?",
        answer:
          "No. Role permissions limit financial visibility to the roles you define for that access.",
      },
      {
        question: "Are permissions enforced on API and backend routes?",
        answer:
          "Yes. Access policies are enforced server-side to prevent unauthorized data access.",
      },
    ],
  },
  {
    slug: "flat-monthly-pricing",
    badge: "🧮 Flat Pricing",
    headline: "One monthly price for your whole team. No per-seat tax.",
    description:
      "Add dispatchers, techs, and managers without pricing penalties so adoption can scale with your business.",
    ...demoCta,
    mockup: "team",
    metaTitle: "Flat Monthly Pricing | LeverLoop",
    metaDescription:
      "Scale your team on LeverLoop with one predictable monthly price and no per-user penalties.",
    details: [
      {
        label: "Growth-Aligned",
        headline: "Hire without triggering a software bill spike",
        description:
          "Flat pricing removes per-seat friction so owners can onboard the full team by default.",
        cta: "See pricing philosophy",
        benefit: "Adoption decisions follow operations, not billing anxiety.",
        mock: "team",
      },
      {
        label: "Full-Team Adoption",
        headline: "Unlock stronger data when everyone participates",
        description:
          "Field, office, and leadership workflows connect better when every role uses the same system.",
        cta: "See team-wide workflow",
        benefit: "Platform value compounds as usage broadens.",
        mock: "pipeline",
      },
      {
        label: "Predictable Spend",
        headline: "Keep software costs stable as you grow",
        description:
          "Flat monthly billing keeps budgets cleaner and avoids surprise invoices tied to hiring cycles.",
        cta: "See billing model",
        benefit: "Simpler forecasting for owners and finance teams.",
        mock: "reliability",
      },
    ],
    relatedFeatureSlugs: [
      "team-management-invitations",
      "role-based-access",
      "service-agreement-management",
    ],
    resources: managementResources,
    faqs: [
      {
        question: "Does pricing change when we add more technicians?",
        answer:
          "No. Flat monthly pricing is designed to support full-team growth without per-seat increases.",
      },
      {
        question: "Can we onboard seasonal staff without plan changes?",
        answer:
          "Yes. Team changes do not require per-user plan adjustments.",
      },
    ],
  },
  {
    slug: "ens-router",
    badge: "🛰️ ENS Router",
    headline: "Reliable, compliant delivery for every business message.",
    description:
      "Route SMS and email through provider-agnostic infrastructure with failover, audit logs, and compliance controls built in.",
    ...demoCta,
    mockup: "reliability",
    metaTitle: "ENS Router | LeverLoop",
    metaDescription:
      "Deliver customer messages reliably with multi-provider failover, compliance checks, and full communication audit trails.",
    details: [
      {
        label: "Automatic Failover",
        headline: "Route around provider outages without disruption",
        description:
          "If one downstream provider degrades, routing can shift traffic to healthy channels automatically.",
        cta: "See failover behavior",
        benefit: "Critical workflows like speed-to-lead keep firing.",
        mock: "reliability",
      },
      {
        label: "Compliance Guardrails",
        headline: "Enforce opt-ins, quiet hours, and stop handling",
        description:
          "Every send passes through policy checks before dispatch, and opt-out updates are applied immediately.",
        cta: "See compliance controls",
        benefit: "Lower regulatory risk across automated communication volume.",
        mock: "inbox",
      },
      {
        label: "Audit Visibility",
        headline: "Track message status end-to-end",
        description:
          "Delivery metadata, provider logs, and event timestamps create a complete communication trail.",
        cta: "See routing logs",
        benefit: "Operators can debug and verify message outcomes quickly.",
        mock: "pipeline",
      },
    ],
    relatedFeatureSlugs: [
      "speed-to-lead-engine",
      "drip-campaigns",
      "unified-inbox",
    ],
    resources: platformResources,
    faqs: [
      {
        question: "Why does provider failover matter for service businesses?",
        answer:
          "Because lead response, ETA texts, and payment reminders are operationally critical and should not depend on a single provider.",
      },
      {
        question: "How are STOP and opt-out requests handled?",
        answer:
          "Opt-out events are processed immediately and reflected across communication workflows to prevent further sends.",
      },
    ],
  },
];
