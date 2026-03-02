export type SiteMetadata = {
  defaultTitle: string;
  defaultDescription: string;
};

export const siteMetadata: SiteMetadata = {
  defaultTitle: 'LeverLoop | CRM + Dispatch + Payments for HVAC, Plumbing & Electrical Contractors',
  defaultDescription:
    'Auto-respond to every lead in as fast as 60 seconds, send Good/Better/Best estimates for e-signature, and collect payment by text. Flat monthly pricing with SMS included. Starting at $99/mo.',
};

export type AnnouncementBarData = {
  message: string;
  linkText?: string;
  linkHref?: string;
};

export const announcementBar: AnnouncementBarData = {
  message: 'Two-way SMS included on every plan. Field crew access at no extra cost.',
  linkText: 'See pricing →',
  linkHref: '/pricing',
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
  { label: 'Speed-to-Lead', href: '/features/speed-to-lead' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Blog', href: '/blog' },
];

export const navbarNavigation: NavbarItemConfig[] = [
  {
    label: 'Features',
    type: 'featured',
    features: [],
    categories: [
      {
        heading: 'Sales & Leads',
        links: [
          { label: 'Speed-to-Lead', href: '/features/speed-to-lead' },
          { label: 'Lead Board', href: '/features/lead-board' },
          { label: 'Auto Follow-Up', href: '/features/automatic-follow-up' },
        ],
      },
      {
        heading: 'Estimates & Payments',
        links: [
          { label: 'Estimates', href: '/features/good-better-best-estimates' },
          { label: 'Customer Approvals', href: '/features/customer-approvals' },
          { label: 'Text-to-Pay', href: '/features/text-to-pay' },
        ],
      },
      {
        heading: 'Dispatch & Field',
        links: [
          { label: 'Dispatch Board', href: '/features/dispatch-board' },
          { label: 'Tech App', href: '/features/tech-app' },
          { label: 'On My Way Texts', href: '/features/on-my-way-texts' },
        ],
      },
      {
        heading: 'Customers & Texting',
        links: [
          { label: 'Customer Records', href: '/features/customer-records' },
          { label: 'Equipment Tracking', href: '/features/equipment-tracking' },
          { label: 'Two-Way Texting', href: '/features/two-way-texting' },
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
  badgeText: 'Built for HVAC, plumbing, and electrical contractors',
  headline: 'Win more jobs from the leads you already have',
  subtitle:
    'Auto-respond to every lead in as fast as 60 seconds, send Good/Better/Best estimates for e-signature, and collect payment by text. SMS included on every plan, starting at $99/mo.',
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
            company: 'Water Heater Estimate',
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
  | 'dispatch';

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
      'Set your first response to fire in as fast as 60 seconds. If they go quiet, automatic follow-ups keep going until they book, reply, or opt out. No leads lost to slow callbacks.',
    cta: 'See how it works',
    ctaHref: '/features/speed-to-lead',
    mock: 'speed_to_lead',
  },
  {
    label: 'Estimate & Close',
    headline: 'Build Good / Better / Best options on the customer\'s phone',
    description:
      'Pick a repair from your pricebook and LeverLoop builds three flat-rate tiers. The customer reviews options, picks a tier, and signs from their phone. No printing, no back-and-forth.',
    cta: 'See a Good / Better / Best estimate',
    ctaHref: '/features/good-better-best-estimates',
    mock: 'estimates',
  },
  {
    label: 'Text-to-Pay',
    headline: 'Collect payment before your tech leaves the driveway',
    description:
      'Convert an approved estimate to an invoice in one tap and text the customer a payment link. They pay from their phone on the spot. No paper invoices, no payment chase.',
    cta: 'See text-to-pay',
    ctaHref: '/features/text-to-pay',
    mock: 'payments',
  },
  {
    label: 'Dispatch Board',
    headline: 'Dispatch faster, cut "where is my tech" calls',
    description:
      'Calendar scheduling, one-tap On My Way texts with crew name and ETA, and live job status keep your office and customers in sync all day.',
    cta: 'See dispatch board',
    ctaHref: '/features/dispatch-board',
    mock: 'dispatch',
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
      title: 'Owner & Admin Permissions',
      subtitle: 'Control who sees what',
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
  heading: 'Leads go cold. Estimates sit. Payments lag.',
  subheading:
    'Most shops lose revenue to slow callbacks, forgotten follow-ups, and invoices that take days to collect. LeverLoop closes those gaps automatically.',
  pillars: [
    {
      title: 'Respond First, Win First',
      summary:
        'Auto-text every new lead in as fast as 60 seconds. Automatic follow-ups keep going until they book, reply, or opt out. No leads lost to slow callbacks.',
      highlight: '60-second auto-text',
    },
    {
      title: 'Close and Collect by Text',
      summary:
        'Send Good / Better / Best estimates to the customer\'s phone, get an e-signature, and text a payment link. No printing, no back-and-forth.',
      highlight: 'Estimate to paid. By text.',
    },
    {
      title: 'Keep Crews Moving, No App Required',
      summary:
        'Crew gets a text with a link. No app to download, no password to remember. They see the job details, update status, and add photos right from their phone.',
      highlight: 'No app to download',
    },
  ],
};

export type GrowthMockId =
  | 'customer_intel'
  | 'unified_inbox';

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
  heading: 'Look like the most professional shop in town. Because you will be.',
  subheading:
    'Your techs show up knowing the equipment. Your customers get timely texts, not voicemails. Every conversation tied to the customer record, not lost in someone\'s personal phone.',
  cards: [
    {
      label: 'Equipment Tracking',
      headline: 'Know every unit at every property before your tech knocks',
      description:
        'Track make, model, serial number, and install date for every piece of equipment at every address. Full service history per unit, across every job you\'ve ever done there. Your tech opens the work order and sees it all.',
      bullets: [
        'Search by name, phone, address, or equipment serial number',
        'Full service history per unit. Every job, every visit, all in one place.',
      ],
      mock: 'customer_intel',
    },
    {
      label: 'Two-Way Texting',
      headline: 'Text customers from LeverLoop. Get their replies in one place.',
      description:
        'Every conversation tied to the customer record. No more lost threads in personal phones, no more "who texted them last?" Your whole office sees what happened and what to do next.',
      bullets: [
        'Send and receive texts tied to each customer record',
        'Automatic quiet hours so you never text a customer at 11 PM',
        'Speed-to-lead replies and on-my-way alerts in the same thread',
      ],
      mock: 'unified_inbox',
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
    { name: 'Olivia Reed', subtitle: 'Last service: No-cool call · Jun 2025' },
    { name: 'Marcus Hill', subtitle: 'Panel upgrade estimate open' },
  ],
  detailTitle: 'Equipment profile',
  detailSubtitle: 'Carrier 4-ton split system',
  fields: [
    { label: 'Install date', value: 'May 2014' },
    { label: 'Service calls (12 mo)', value: '4' },
    { label: 'Warranty status', value: 'Expires soon' },
  ],
  alert: 'Your tech sees this before they knock. Make, model, history, everything.',
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
  title: 'Customer texts',
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
  ],
};

export type CtaLink = {
  label: string;
  href: string;
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
  tagline: 'CRM + dispatch + payments for HVAC, plumbing, and electrical contractors.',
  columns: [
    {
      heading: 'Product',
      links: [
        { label: 'Speed-to-Lead', href: '/features/speed-to-lead' },
        { label: 'Estimates', href: '/features/good-better-best-estimates' },
        { label: 'Dispatch Board', href: '/features/dispatch-board' },
        { label: 'Auto Follow-Up', href: '/features/automatic-follow-up' },
      ],
    },
    {
      heading: 'Platform',
      links: [
        { label: 'Two-Way Texting', href: '/features/two-way-texting' },
        { label: 'Text-to-Pay', href: '/features/text-to-pay' },
        { label: 'Equipment Tracking', href: '/features/equipment-tracking' },
        { label: 'Customer Approvals', href: '/features/customer-approvals' },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Blog', href: '/blog' },
        { label: 'Why Contractors Lose Leads', href: '/blog/why-contractors-lose-leads' },
        { label: 'Automated Follow-Up Sequences', href: '/blog/automated-follow-up-sequences-contractors' },
        { label: 'Flat-Rate Pricing', href: '/features/flat-monthly-pricing' },
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
