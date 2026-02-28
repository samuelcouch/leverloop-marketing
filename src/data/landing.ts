export type SiteMetadata = {
  defaultTitle: string;
  defaultDescription: string;
};

export const siteMetadata: SiteMetadata = {
  defaultTitle: 'LeverLoop | CRM + Dispatch + Payments for Home Service Teams',
  defaultDescription:
    'Auto-respond to every lead in 60 seconds, build estimates on-site, and collect payment by text. Flat crew-size pricing for HVAC, plumbing, and electrical shops.',
};

export type AnnouncementBarData = {
  message: string;
  linkText?: string;
  linkHref?: string;
};

export const announcementBar: AnnouncementBarData = {
  message: 'The next version of LeverLoop is coming soon!',
  linkText: 'Be the first to try it →',
  linkHref: '#',
};

export type NavbarLink = {
  label: string;
  href: string;
};

export type NavbarFeature = {
  title: string;
  description: string;
  href: string;
  gradient?: string;
  icon?: string;
};

export type NavbarCategory = {
  heading: string;
  links: NavbarLink[];
};

export type NavbarItemConfig =
  | {
      label: string;
      type: 'featured';
      features: NavbarFeature[];
      categories?: NavbarCategory[];
    }
  | {
      label: string;
      type: 'simple';
      links: NavbarLink[];
    }
  | {
      label: string;
      type: 'highlight';
      features: NavbarFeature[];
    }
  | {
      label: string;
      type: 'link';
      href: string;
    };

export type NavbarCta = {
  label: string;
  href: string;
};

export type NavbarAuth = {
  label: string;
  href: string;
};

export const navbarNavLinks: NavbarLink[] = [
  { label: 'Product', href: '/#features' },
  { label: 'Speed-to-Lead', href: '/features/speed-to-lead-engine' },
  { label: 'Estimates & Payments', href: '/features/estimate-builder-good-better-best' },
  { label: 'Dispatch & Mobile', href: '/features/dispatch-board' },
  { label: 'Revenue Growth', href: '/features/service-agreement-management' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export const navbarNavigation: NavbarItemConfig[] = [
  {
    label: 'Product',
    type: 'featured',
    features: [
      {
        title: 'Speed-to-Lead Engine',
        description: 'Auto-text every new lead in 60 seconds so you stay first to respond',
        href: '/features/speed-to-lead-engine',
        gradient: 'from-sky-300 via-blue-200 to-emerald-200',
      },
      {
        title: 'Good / Better / Best Estimates',
        description: 'Build option-based quotes on-site using your flat-rate pricebook',
        href: '/features/estimate-builder-good-better-best',
        gradient: 'from-amber-300 via-yellow-200 to-lime-200',
      },
      {
        title: 'Dispatch + Field Mobile App',
        description: 'Schedule jobs, alert customers, and run every service call from the field',
        href: '/features/dispatch-board',
        gradient: 'from-emerald-400 via-green-300 to-lime-200',
      },
    ],
    categories: [
      {
        heading: 'Sales & Leads',
        links: [
          { label: 'Speed-to-Lead Engine', href: '/features/speed-to-lead-engine' },
          { label: 'Pipeline Board', href: '/features/lead-pipeline-visual-board' },
          { label: 'Customer Database', href: '/features/customer-database' },
        ],
      },
      {
        heading: 'Estimates & Payments',
        links: [
          { label: 'Estimate Builder', href: '/features/estimate-builder-good-better-best' },
          { label: 'Text-to-Pay Invoicing', href: '/features/invoicing-text-to-pay' },
          { label: 'Digital Approvals', href: '/features/digital-approvals-signatures' },
        ],
      },
      {
        heading: 'Field Operations',
        links: [
          { label: 'Dispatch Board', href: '/features/dispatch-board' },
          { label: 'Mobile Tech App', href: '/features/mobile-tech-app' },
          { label: 'Job Documentation', href: '/features/photo-job-documentation' },
        ],
      },
      {
        heading: 'Revenue Growth',
        links: [
          { label: 'Service Agreements', href: '/features/service-agreement-management' },
          { label: 'Revenue Recovery', href: '/features/revenue-recovery-dashboard' },
          { label: 'Drip Campaigns', href: '/features/drip-campaigns' },
        ],
      },
      {
        heading: 'Communication',
        links: [
          { label: 'Unified Inbox', href: '/features/unified-inbox' },
          { label: 'Google Reviews', href: '/features/google-review-requests' },
          { label: 'ETA Notifications', href: '/features/on-my-way-notifications' },
        ],
      },
      {
        heading: 'Platform',
        links: [
          { label: 'QuickBooks Integration', href: '/features/quickbooks-integration' },
          { label: 'Team Management', href: '/features/team-management-invitations' },
          { label: 'Flat Monthly Pricing', href: '/features/flat-monthly-pricing' },
        ],
      },
    ],
  },
  { label: 'Pricing', type: 'link', href: '/pricing' },
  { label: 'Blog', type: 'link', href: '/blog' },
];

export const navbarPrimaryCta: NavbarCta = {
  label: 'Book a demo',
  href: '/#demo',
};

export const navbarAuthLink: NavbarAuth = {
  label: 'Log in',
  href: '#login',
};

export type HeroSelectOption = {
  label: string;
  value: string;
};

export type HeroSidebarItem = {
  icon: string;
  label: string;
  active?: boolean;
};

export type HeroPipelineCard = {
  name: string;
  company: string;
  email: string;
  color: string;
};

export type HeroPipelineColumnTone = 'blue' | 'amber' | 'green';

export type HeroPipelineColumn = {
  stage: string;
  total: string;
  tone: HeroPipelineColumnTone;
  cards: HeroPipelineCard[];
};

export type HeroUpcomingTone = 'blue' | 'amber';

export type HeroUpcomingItem = {
  icon: string;
  title: string;
  time: string;
  tone: HeroUpcomingTone;
};

export type HeroMockProfile = {
  initials: string;
  name: string;
  tag: string;
  tagColor: string;
  actions: string[];
  upcoming: HeroUpcomingItem[];
  recent: string[];
};

export type HeroCopy = {
  badgeHref: string;
  badgeEmoji: string[];
  badgeText: string;
  headline: string;
  subtitle: string;
  emailLabel: string;
  emailPlaceholder: string;
  teamLabel: string;
  teamPlaceholder: string;
  teamOptions: HeroSelectOption[];
  ctaLabel: string;
  mock: {
    companyName: string;
    sidebarItems: HeroSidebarItem[];
    groupsLabel: string;
    groups: string[];
    boardTitle: string;
    controls: string[];
    columns: HeroPipelineColumn[];
    profile: HeroMockProfile;
  };
};

export const heroCopy: HeroCopy = {
  badgeHref: '#features',
  badgeEmoji: ['🔧', '⚡', '💧'],
  badgeText: 'For HVAC, plumbing, electrical, and every trade',
  headline: 'Win more jobs from the leads you already have',
  subtitle:
    'Auto-respond in 60 seconds, build estimates on-site, and collect payment by text. One system for your whole crew, starting at $49/mo.',
  emailLabel: "What's your work email?",
  emailPlaceholder: 'owner@yourcompany.com',
  teamLabel: 'How many people are on your team?',
  teamPlaceholder: 'Select team size',
  teamOptions: [
    { label: '1-3', value: '1-3' },
    { label: '4-10', value: '4-10' },
    { label: '11-25', value: '11-25' },
    { label: '26+', value: '26+' },
  ],
  ctaLabel: 'Book a demo',
  mock: {
    companyName: 'Apex Home Services',
    sidebarItems: [
      { icon: '📥', label: 'Leads' },
      { icon: '📅', label: 'Dispatch' },
      { icon: '🧾', label: 'Invoices' },
      { icon: '🔁', label: 'Memberships' },
      { icon: '💬', label: 'Inbox' },
      { icon: '📊', label: 'Dashboard', active: true },
    ],
    groupsLabel: 'Views',
    groups: ['New Leads', 'Today Jobs', 'Due for Service'],
    boardTitle: 'Lead pipeline',
    controls: ['Today', 'Open'],
    columns: [
      {
        stage: 'New Leads',
        total: '$12.4K',
        tone: 'blue',
        cards: [
          {
            name: 'Olivia Reed',
            company: 'No-Cool Call',
            email: 'olivia.reed@email.com',
            color: '#023e8a',
          },
          {
            name: 'Marcus Hill',
            company: 'Water Heater Quote',
            email: 'marcushill@email.com',
            color: '#f59e0b',
          },
        ],
      },
      {
        stage: 'Estimate Sent',
        total: '$18.9K',
        tone: 'amber',
        cards: [
          {
            name: 'Diana Flores',
            company: 'Panel Upgrade',
            email: 'diana.f@email.com',
            color: '#10b981',
          },
          {
            name: 'Evan Lee',
            company: 'Furnace Repair',
            email: 'evan.lee@email.com',
            color: '#ec4899',
          },
        ],
      },
      {
        stage: 'Won This Week',
        total: '$26.3K',
        tone: 'green',
        cards: [
          {
            name: 'Nina Patel',
            company: 'Spring Tune-Up Plan',
            email: 'nina.patel@email.com',
            color: '#3b82f6',
          },
        ],
      },
    ],
    profile: {
      initials: 'OR',
      name: 'Olivia Reed',
      tag: 'No-Cool Service Call',
      tagColor: '#023e8a',
      actions: ['🧾 Build Estimate', '💬 Text Customer'],
      upcoming: [
        {
          icon: '📅',
          title: 'Tech assigned: Mike R.',
          time: 'Today at 2:30 PM',
          tone: 'blue',
        },
        {
          icon: '⏰',
          title: 'Follow-up text scheduled',
          time: 'Tomorrow at 8:00 AM',
          tone: 'amber',
        },
      ],
      recent: [
        'Replied YES to service text · 14m ago',
        'Approved estimate from phone · Yesterday',
      ],
    },
  },
};

export type LandingFeatureMockId =
  | 'speed_to_lead'
  | 'estimates'
  | 'payments'
  | 'dispatch'
  | 'memberships';

export type LandingFeatureRow = {
  label: string;
  headline: string;
  description: string;
  cta: string;
  ctaHref: string;
  mock: LandingFeatureMockId;
};

export const landingFeatureRows: LandingFeatureRow[] = [
  {
    label: 'Speed-to-Lead',
    headline: 'Reply in 60 seconds. Follow up until they book.',
    description:
      'Every new lead gets an automatic text within a minute. If they go quiet, your drip sequence keeps following up until they book, reply, or opt out. No leads lost to slow callbacks.',
    cta: 'See lead automation',
    ctaHref: '/features/speed-to-lead-engine',
    mock: 'speed_to_lead',
  },
  {
    label: 'Estimate & Close',
    headline: 'Build Good / Better / Best options on the customer\'s phone',
    description:
      'Pick a repair from your pricebook and LeverLoop builds three flat-rate tiers. The customer reviews options, picks a tier, and signs from their phone. Your tech closes the job without calling the office.',
    cta: 'See a Good / Better / Best estimate',
    ctaHref: '/features/estimate-builder-good-better-best',
    mock: 'estimates',
  },
  {
    label: 'Text-to-Pay',
    headline: 'Collect payment before your tech leaves the driveway',
    description:
      'Convert an approved estimate to an invoice in one tap and text the customer a payment link. They pay from their phone on the spot. No paper invoices, no payment chase.',
    cta: 'See text-to-pay',
    ctaHref: '/features/invoicing-text-to-pay',
    mock: 'payments',
  },
  {
    label: 'Dispatch Board',
    headline: 'Dispatch faster, cut "where is my tech" calls',
    description:
      'Drag-and-drop scheduling, one-tap On My Way texts with tech name and ETA, and live job status keep dispatchers, techs, and customers in sync all day.',
    cta: 'See dispatch board',
    ctaHref: '/features/dispatch-board',
    mock: 'dispatch',
  },
  {
    label: 'Service Agreements',
    headline: 'Turn one-time jobs into monthly recurring revenue',
    description:
      'Enroll service agreements from the field, auto-collect monthly dues, and trigger maintenance reminders that fill your calendar year-round. Track enrollments, renewals, and MRR in one dashboard.',
    cta: 'See membership tools',
    ctaHref: '/features/service-agreement-management',
    mock: 'memberships',
  },
];

export type SpeedToLeadField = {
  label: string;
  value: string;
  highlight?: boolean;
};

export type SpeedToLeadMock = {
  browserUrl: string;
  name: string;
  title: string;
  location: string;
  initials: string;
  panelTitle: string;
  status: string;
  fields: SpeedToLeadField[];
  buttonLabel: string;
};

export const speedToLeadMock: SpeedToLeadMock = {
  browserUrl: 'newlead.leverloop.com/olivia-reed',
  name: 'Olivia Reed',
  title: 'Homeowner · No cooling issue',
  location: 'Westfield, NJ',
  initials: 'OR',
  panelTitle: 'Instant lead reply',
  status: 'Sent in 23 sec',
  fields: [
    {
      label: 'Message',
      value: 'Hi Olivia, thanks for reaching out. We can help today. What time works best?',
    },
    {
      label: 'Next follow-up',
      value: 'Tomorrow at 8:00 AM',
    },
    {
      label: 'Pipeline stage',
      value: 'Contacted',
      highlight: true,
    },
  ],
  buttonLabel: 'Open lead',
};

export type EstimateOptionTone = 'good' | 'better' | 'best';

export type EstimateOption = {
  tier: string;
  service: string;
  price: string;
  tone: EstimateOptionTone;
};

export type EstimateMock = {
  title: string;
  subtitle: string;
  options: EstimateOption[];
  noteLabel: string;
  note: string;
  tags: string[];
};

export const estimateMock: EstimateMock = {
  title: 'Good / Better / Best estimate',
  subtitle: 'Apex Home Services · No-cool diagnosis',
  options: [
    {
      tier: 'Good',
      service: 'Capacitor replacement',
      price: '$289',
      tone: 'good',
    },
    {
      tier: 'Better',
      service: 'Capacitor + contactor',
      price: '$449',
      tone: 'better',
    },
    {
      tier: 'Best',
      service: 'Hard-start kit + tune-up',
      price: '$699',
      tone: 'best',
    },
  ],
  noteLabel: 'Digital approval note',
  note: 'Customer can review options, choose one, and sign from their phone before the tech leaves.',
  tags: ['Flat-rate pricebook', 'Signature ready'],
};

export type PaymentMock = {
  title: string;
  badge: string;
  recipient: string;
  subject: string;
  bodyLines: string[];
  status: string;
  step: string;
  actions: [string, string];
};

export const paymentMock: PaymentMock = {
  title: 'Invoice ready to send',
  badge: 'Text-to-Pay',
  recipient: 'Olivia Reed <olivia.reed@email.com>',
  subject: 'Your service invoice from Apex Home Services',
  bodyLines: [
    'Hi Olivia, thanks for approving your repair.',
    'Tap this secure link to pay from your phone now:',
    'leverloop.pay/4028',
  ],
  status: 'Payment link opened 1 min ago',
  step: 'Invoice #4028',
  actions: ['Preview', 'Send link'],
};

export type DispatchTechCard = {
  name: string;
  icon: string;
  status: string;
  active: boolean;
};

export type DispatchUpdate = {
  text: string;
  time: string;
  icon: string;
};

export type DispatchMock = {
  title: string;
  techCards: DispatchTechCard[];
  updatesTitle: string;
  updates: DispatchUpdate[];
};

export const dispatchMock: DispatchMock = {
  title: 'Dispatch board',
  techCards: [
    { name: 'Mike R.', icon: '🛠️', status: 'On job: Reed home', active: true },
    { name: 'Jen P.', icon: '🚚', status: 'On my way: Lane call', active: true },
    { name: 'Chris T.', icon: '✅', status: 'Available in 25 min', active: false },
    { name: 'Nora B.', icon: '🔧', status: 'Finishing invoice', active: true },
    { name: 'Eli S.', icon: '📍', status: 'Awaiting dispatch', active: false },
    { name: 'Sam K.', icon: '📞', status: 'Calling next lead', active: true },
  ],
  updatesTitle: 'Live job updates',
  updates: [
    { text: 'On My Way text sent to Olivia Reed', time: '2m ago', icon: '📲' },
    { text: 'Estimate approved by Marcus Hill', time: '14m ago', icon: '✅' },
    { text: 'Tech checked in at Lane property', time: '21m ago', icon: '📍' },
  ],
};

export type MembershipStat = {
  label: string;
  value: string;
  change: string;
  positive: boolean;
};

export type MembershipMock = {
  title: string;
  range: string;
  stats: MembershipStat[];
};

export const membershipMock: MembershipMock = {
  title: 'Membership growth',
  range: 'Last 90 days',
  stats: [
    { label: 'Enrolled members', value: '428', change: '+19', positive: true },
    { label: 'Monthly recurring revenue', value: '$57,340', change: '+11%', positive: true },
    { label: 'Renewals due', value: '34', change: 'This week', positive: false },
  ],
};

export type SecurityIcon = 'shield-check' | 'lock' | 'list-check';

export type SecurityBadge = {
  title: string;
  subtitle: string;
  icon: SecurityIcon;
};

export type SecurityCopy = {
  heading: string;
  badges: SecurityBadge[];
};

export const securityCopy: SecurityCopy = {
  heading: 'Your data stays protected, your messages stay compliant',
  badges: [
    {
      title: 'Role-Based Access',
      subtitle: 'Owner, admin, tech',
      icon: 'shield-check',
    },
    {
      title: 'Messaging Compliance',
      subtitle: 'Opt-in + quiet hours',
      icon: 'lock',
    },
    {
      title: 'Full Audit Trail',
      subtitle: 'Jobs, payments, messages',
      icon: 'list-check',
    },
  ],
};

export type OutcomePillar = {
  title: string;
  summary: string;
  highlight: string;
};

export type OutcomesSectionCopy = {
  heading: string;
  subheading: string;
  pillars: OutcomePillar[];
};

export const outcomesSectionCopy: OutcomesSectionCopy = {
  heading: 'Revenue leaks are costing you jobs every week',
  subheading:
    'Leads sit unanswered. Estimates never get followed up. Techs finish work but payment comes later, or never. LeverLoop closes those gaps automatically.',
  pillars: [
    {
      title: 'Respond First, Win First',
      summary:
        'Auto-text every new lead in under 60 seconds and keep follow-up running until they book or opt out.',
      highlight: '60-second auto-response',
    },
    {
      title: 'Close and Collect On-Site',
      summary:
        'Build tiered estimates on the customer\'s phone, get a signature, and send a text-to-pay link before your tech leaves.',
      highlight: 'Same-visit payment',
    },
    {
      title: 'Grow Monthly Revenue',
      summary:
        'Enroll service agreements from the field, auto-collect dues, and trigger maintenance reminders year-round.',
      highlight: 'Recurring revenue from day one',
    },
  ],
};

export type GrowthMockId =
  | 'customer_intel'
  | 'unified_inbox'
  | 'revenue_recovery'
  | 'mobile_offline';

export type GrowthSystemCard = {
  label: string;
  headline: string;
  description: string;
  bullets: string[];
  mock: GrowthMockId;
};

export type GrowthSystemsCopy = {
  heading: string;
  subheading: string;
  cards: GrowthSystemCard[];
};

export const growthSystemsCopy: GrowthSystemsCopy = {
  heading: 'Find money hiding in your existing customer base',
  subheading:
    'Most shops leave revenue on the table in stale estimates, missed follow-ups, and aging equipment. These tools help you capture it.',
  cards: [
    {
      label: 'Customer Intelligence',
      headline: 'Know every property, unit, and warranty before your tech arrives',
      description:
        'Full customer context in seconds. Techs see equipment age, service history, and open opportunities so every visit is informed and professional.',
      bullets: [
        'Search by name, phone, address, or equipment serial number',
        'Track make, model, install date, and warranty status for every unit',
        'Surface aging-equipment replacement opportunities automatically',
      ],
      mock: 'customer_intel',
    },
    {
      label: 'Unified Inbox',
      headline: 'Every text, follow-up, and update in one shared timeline',
      description:
        'Speed-to-lead replies, on-my-way alerts, and customer messages all live in one place. The whole office sees what happened and what to do next.',
      bullets: [
        'See automated and manual messages in a single timeline',
        'Send on-my-way alerts with tech name and ETA in one tap',
        'Trigger Google review requests after completed jobs automatically',
      ],
      mock: 'unified_inbox',
    },
    {
      label: 'Revenue Recovery',
      headline: 'See recoverable dollars and act on them in one click',
      description:
        'Stale estimates, declined repairs, aging equipment, and at-risk memberships all surface in one dashboard. Turn missed revenue into booked work.',
      bullets: [
        'Prioritize recovery opportunities by dollar value',
        'Launch follow-up sequences from the same screen',
        'Keep your pipeline active without spreadsheets or manual tracking',
      ],
      mock: 'revenue_recovery',
    },
    {
      label: 'Mobile + Offline',
      headline: 'Your techs keep working, even without signal',
      description:
        'Basements, attics, rural properties. Your team builds estimates, captures photos, and collects signatures without needing cell service.',
      bullets: [
        'Build estimates and collect signatures from the job site',
        'Capture before/after photos with notes attached to the job record',
        'Auto-sync all queued activity when signal returns',
      ],
      mock: 'mobile_offline',
    },
  ],
};

export type CustomerIntelListItem = {
  name: string;
  subtitle: string;
  flag?: string;
};

export type CustomerIntelField = {
  label: string;
  value: string;
};

export type CustomerIntelMock = {
  customersTitle: string;
  customers: CustomerIntelListItem[];
  detailTitle: string;
  detailSubtitle: string;
  fields: CustomerIntelField[];
  alert: string;
};

export const customerIntelMock: CustomerIntelMock = {
  customersTitle: 'Recent customers',
  customers: [
    { name: 'Olivia Reed', subtitle: '2 properties · Member', flag: 'VIP' },
    { name: 'Marcus Hill', subtitle: 'Panel upgrade estimate open' },
    { name: 'Diana Flores', subtitle: 'Warranty expiring in 21 days', flag: 'Alert' },
  ],
  detailTitle: 'Equipment profile',
  detailSubtitle: 'Carrier 4-ton split system',
  fields: [
    { label: 'Install date', value: 'May 2014' },
    { label: 'Service calls (12 mo)', value: '4' },
    { label: 'Warranty status', value: 'Expires soon' },
  ],
  alert: 'Replacement conversation recommended on next visit',
};

export type InboxThreadItem = {
  sender: string;
  message: string;
  time: string;
  tag: string;
  tone: 'auto' | 'human';
};

export type UnifiedInboxMock = {
  title: string;
  contact: string;
  status: string;
  thread: InboxThreadItem[];
};

export const unifiedInboxMock: UnifiedInboxMock = {
  title: 'Unified inbox',
  contact: 'Olivia Reed · No-cool call',
  status: '2 unread',
  thread: [
    {
      sender: 'LeverLoop Auto',
      message: 'Thanks for reaching out. We can get you scheduled today.',
      time: '2:01 PM',
      tag: 'Speed-to-Lead',
      tone: 'auto',
    },
    {
      sender: 'Customer',
      message: 'Yes please. Anytime after 4 works.',
      time: '2:04 PM',
      tag: 'Reply',
      tone: 'human',
    },
    {
      sender: 'Dispatcher',
      message: 'Perfect. Mike is on the way and ETA is 4:20 PM.',
      time: '4:01 PM',
      tag: 'On My Way',
      tone: 'human',
    },
    {
      sender: 'LeverLoop Auto',
      message: 'Thanks again today. Mind leaving a quick Google review?',
      time: '6:15 PM',
      tag: 'Review Request',
      tone: 'auto',
    },
  ],
};

export type RevenueOpportunity = {
  label: string;
  amount: string;
  action: string;
};

export type RevenueRecoveryMock = {
  title: string;
  subtitle: string;
  opportunities: RevenueOpportunity[];
  footer: string;
};

export const revenueRecoveryMock: RevenueRecoveryMock = {
  title: 'Revenue recovery dashboard',
  subtitle: 'Recoverable this week',
  opportunities: [
    { label: 'Stale estimates', amount: '$8,450', action: 'Send reminder' },
    { label: 'Declined repairs', amount: '$6,120', action: 'Start sequence' },
    { label: 'Aging equipment', amount: '$24,900', action: 'Flag for techs' },
    { label: 'At-risk memberships', amount: '$1,960', action: 'Update payment' },
  ],
  footer: 'One tap actions turn missed opportunities into booked revenue',
};

export type MobileQueueItem = {
  icon: string;
  text: string;
};

export type MobileOfflineMock = {
  title: string;
  mode: string;
  customer: string;
  task: string;
  queueLabel: string;
  queue: MobileQueueItem[];
  syncStatus: string;
};

export const mobileOfflineMock: MobileOfflineMock = {
  title: 'Tech mobile app',
  mode: 'Offline mode active',
  customer: 'Job: Reed Residence',
  task: 'Built estimate + captured signature',
  queueLabel: 'Queued until signal returns',
  queue: [
    { icon: '🧾', text: 'Estimate update saved' },
    { icon: '📷', text: '2 before/after photos attached' },
    { icon: '✍️', text: 'Customer sign-off captured' },
  ],
  syncStatus: 'Auto-sync ready',
};

export type CtaLink = {
  label: string;
  href: string;
};

export type PricingSectionCopy = {
  badge: string;
  heading: string;
  subheading: string;
  bullets: string[];
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
};

export const pricingSectionCopy: PricingSectionCopy = {
  badge: 'Flat pricing by crew size',
  heading: 'No per-user fees. No add-on surprises.',
  subheading:
    'Pick the plan that fits your crew today. Add techs or office staff without triggering a bill spike. Every plan includes the full platform.',
  bullets: [
    'Starter: $49/mo for solo operators',
    'Pro: $149/mo for crews up to 5',
    'Enterprise: custom pricing for 6+ users or multiple locations',
    'CRM, dispatch, estimates, text-to-pay, and memberships included in every plan',
  ],
  primaryCta: {
    label: 'Book a demo',
    href: '/#demo',
  },
  secondaryCta: {
    label: 'See full pricing',
    href: '/pricing',
  },
};

export type FooterLink = {
  label: string;
  href: string;
};

export type FooterColumn = {
  heading: string;
  links: FooterLink[];
};

export type FooterCopy = {
  tagline: string;
  columns: FooterColumn[];
  bottomLinks: FooterLink[];
  copyright: string;
};

export const footerCopy: FooterCopy = {
  tagline: 'CRM + dispatch + payments for home service teams.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'Speed-to-Lead Engine', href: '/features/speed-to-lead-engine' },
        { label: 'Estimate Builder', href: '/features/estimate-builder-good-better-best' },
        { label: 'Dispatch Board', href: '/features/dispatch-board' },
        { label: 'Service Agreements', href: '/features/service-agreement-management' },
      ],
    },
    {
      heading: 'Platform',
      links: [
        { label: 'Unified Inbox', href: '/features/unified-inbox' },
        { label: 'Mobile Tech App', href: '/features/mobile-tech-app' },
        { label: 'Text-to-Pay', href: '/features/invoicing-text-to-pay' },
        { label: 'QuickBooks Integration', href: '/features/quickbooks-integration' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'AI Assistants Launch', href: '/blog/introducing-ai-assistants' },
        {
          label: 'Scaling Postgres',
          href: '/blog/scaling-postgres-beyond-1b-rows',
        },
        { label: 'Revenue Recovery Workflows', href: '/features/revenue-recovery-dashboard' },
      ],
    },
    {
      heading: 'Get Started',
      links: [
        { label: 'Use Cases', href: '/#use-cases' },
        { label: 'Security & Compliance', href: '/#resources' },
        { label: 'Book a Demo', href: '/#demo' },
      ],
    },
  ],
  bottomLinks: [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'Blog', href: '/blog' },
  ],
  copyright: '© 2026 LeverLoop. All rights reserved.',
};
