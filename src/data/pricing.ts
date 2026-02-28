export type BillingInterval = 'monthly' | 'annual';

export type PricingPlan = {
  name: string;
  description: string;
  monthlyPrice?: number;
  annualPrice?: number;
  includedUsers?: number;
  highlighted?: boolean;
  badge?: string;
  enterprise?: boolean;
  enterpriseFeatures?: string[];
  cta: {
    label: string;
    href: string;
  };
};

export type FeatureTierValue = 'included' | 'included_advanced' | false;

export type FeatureRow = {
  label: string;
  starter: FeatureTierValue;
  pro: FeatureTierValue;
};

export type FeatureGroup = {
  name: string;
  rows: FeatureRow[];
};

export type AddOn = {
  icon: string;
  title: string;
  description: string;
};

export type PricingFaq = {
  question: string;
  answer: string;
};

export type PricingPageData = {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    heading: string;
    subheading: string;
  };
  billingToggle: {
    monthly: string;
    annual: string;
    annualSavings: string;
  };
  plans: PricingPlan[];
  extraUserRate: string;
  featureGroups: FeatureGroup[];
  addOns: {
    heading: string;
    subheading: string;
    items: AddOn[];
  };
  faqs: {
    heading: string;
    items: PricingFaq[];
  };
  bottomCta: {
    heading: string;
    subheading: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
};

export const pricingPageData: PricingPageData = {
  meta: {
    title: 'Pricing | LeverLoop — Simple Plans for Every Crew Size',
    description:
      'Transparent, flat-rate pricing for home service teams. Start at $49/mo for solo operators, scale to $299/mo for established crews. No hidden fees.',
  },
  hero: {
    badge: 'Simple, transparent pricing',
    heading: 'One price. Everything included.',
    subheading:
      'Pick the plan that fits your crew today. No hidden fees, no per-feature charges — just straightforward pricing that scales with your team.',
  },
  billingToggle: {
    monthly: 'Monthly',
    annual: 'Annual',
    annualSavings: 'Save 20%',
  },
  plans: [
    {
      name: 'Starter',
      description: 'Solo operators and one-tech shops',
      monthlyPrice: 49,
      annualPrice: 39,
      includedUsers: 1,
      cta: { label: 'Start free trial', href: '/#demo' },
    },
    {
      name: 'Pro',
      description: 'Growing teams that need automation',
      monthlyPrice: 149,
      annualPrice: 119,
      includedUsers: 5,
      highlighted: true,
      badge: 'Most popular',
      cta: { label: 'Start free trial', href: '/#demo' },
    },
    {
      name: 'Enterprise',
      description: 'Established teams scaling recurring revenue',
      enterprise: true,
      enterpriseFeatures: [
        'Everything in Pro',
        'Unlimited users',
        'Service agreements + MRR dashboard',
        'Maintenance reminders + revenue recovery',
        'Equipment tracking + age alerts',
        'Advanced role-based access & permissions',
        'SSO/SAML + dedicated support',
        'Custom onboarding & data migration',
      ],
      cta: { label: 'Contact sales', href: '/#demo' },
    },
  ],
  extraUserRate: '$25/user/mo',
  featureGroups: [
    {
      name: 'Core Platform',
      rows: [
        { label: 'CRM, lead pipeline, customer database', starter: 'included', pro: 'included' },
        { label: 'Estimate builder (Good/Better/Best), approvals & signatures', starter: 'included', pro: 'included' },
        { label: 'Flat-rate pricebook', starter: 'included', pro: 'included' },
        { label: 'Invoicing + text-to-pay', starter: 'included', pro: 'included' },
        { label: 'Mobile app + offline mode + photo/docs', starter: 'included', pro: 'included' },
        { label: 'Basic dispatch', starter: 'included', pro: 'included' },
      ],
    },
    {
      name: 'Automation & Communication',
      rows: [
        { label: 'Speed-to-lead + drip campaigns', starter: false, pro: 'included' },
        { label: 'Unified inbox, on-my-way texts', starter: false, pro: 'included' },
        { label: 'QuickBooks sync, Google review requests', starter: false, pro: 'included' },
        { label: 'Team management + role-based access', starter: false, pro: 'included' },
      ],
    },
  ],
  addOns: {
    heading: 'Optional add-ons',
    subheading: 'Pay only for what you need — no required extras.',
    items: [
      {
        icon: '👤',
        title: 'Extra users',
        description: '$25/user/month beyond your plan\u2019s included seats.',
      },
      {
        icon: '💬',
        title: 'SMS overage package',
        description: 'Additional text messages beyond your included monthly usage.',
      },
      {
        icon: '🚀',
        title: 'White-glove onboarding',
        description: 'One-time data migration and hands-on setup assistance.',
      },
      {
        icon: '🤖',
        title: 'AI voice & phone tools',
        description: 'Optional AI-powered call handling and voice assistant features.',
      },
    ],
  },
  faqs: {
    heading: 'Frequently asked questions',
    items: [
      {
        question: 'Can I switch plans later?',
        answer: 'Yes. Upgrade or downgrade anytime — changes take effect on your next billing cycle with prorated credits applied automatically.',
      },
      {
        question: 'Is there a contract?',
        answer: 'No long-term contracts on monthly plans. Annual plans are billed yearly and save you 20% compared to monthly pricing.',
      },
      {
        question: 'What happens if I need more users?',
        answer: 'Additional users beyond your plan\u2019s included seats are $25/user/month. Add or remove users anytime from your account settings.',
      },
      {
        question: 'Do all plans include the mobile app?',
        answer: 'Yes. Every plan includes the full mobile app with offline mode, photo/document capture, and real-time sync.',
      },
      {
        question: 'Is my data secure?',
        answer: 'Absolutely. LeverLoop uses bank-level encryption, SOC 2 compliance practices, and automatic daily backups for all accounts.',
      },
      {
        question: 'Can I try before I buy?',
        answer: 'Yes — every plan comes with a 14-day free trial. No credit card required to get started.',
      },
    ],
  },
  bottomCta: {
    heading: 'Ready to streamline your operation?',
    subheading:
      'Join thousands of home service teams running their business on LeverLoop. Start your free trial today — no credit card required.',
    primaryCta: { label: 'Start free trial', href: '/#demo' },
    secondaryCta: { label: 'Book a demo', href: '/#demo' },
  },
};
