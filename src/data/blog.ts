export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
  };
  gradient: string;
};

export type Author = {
  name: string;
  avatar: string;
  role: string;
  bio: string;
  linkedin?: string;
};

export type ArticleSection = {
  id: string;
  heading: string;
  content: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type BlogArticle = BlogPost & {
  publishedISO: string;
  lastUpdatedISO?: string;
  lastUpdated?: string;
  quickAnswer?: string;
  whoIsThisFor?: string[];
  keyTakeaways: string[];
  faq?: FAQ[];
  sections: ArticleSection[];
  authorDetail: Author;
  relatedSlugs: string[];
};

export const authors: Record<string, Author> = {
  'Sarah Chen': {
    name: 'Sarah Chen',
    avatar: 'SC',
    role: 'Co-founder & CTO',
    bio: 'Sarah leads engineering at LeverLoop. Previously she built ML infrastructure at Stripe and holds a CS degree from Stanford. She writes about AI, databases, and the future of CRM.',
    linkedin: 'https://linkedin.com/in/sarachen',
  },
  'James Park': {
    name: 'James Park',
    avatar: 'JP',
    role: 'Staff Engineer',
    bio: 'James is a staff engineer at LeverLoop focused on performance, scalability, and infrastructure. He previously worked on distributed systems at Google and Cloudflare.',
    linkedin: 'https://linkedin.com/in/jamespark',
  },
  'Maria Gonzalez': {
    name: 'Maria Gonzalez',
    avatar: 'MG',
    role: 'VP of Sales',
    bio: 'Maria leads the sales org at LeverLoop. With 12 years in B2B SaaS sales, she shares practical playbooks and strategies for modern revenue teams.',
    linkedin: 'https://linkedin.com/in/mariagonzalez',
  },
  'Alex Rivera': {
    name: 'Alex Rivera',
    avatar: 'AR',
    role: 'CEO & Co-founder',
    bio: 'Alex is the CEO and co-founder of LeverLoop. He writes about company building, product strategy, and the future of work.',
    linkedin: 'https://linkedin.com/in/alexrivera',
  },
  'Priya Patel': {
    name: 'Priya Patel',
    avatar: 'PP',
    role: 'Head of Developer Relations',
    bio: 'Priya leads DevRel at LeverLoop, creating guides, tutorials, and API documentation. She previously built developer programs at Twilio and Segment.',
    linkedin: 'https://linkedin.com/in/priyapatel',
  },
};

export const categories = [
  'All',
  'Product',
  'Engineering',
  'Sales',
  'Company',
  'Guides',
] as const;

export type Category = (typeof categories)[number];

export const posts: BlogPost[] = [
  {
    slug: 'introducing-ai-assistants',
    title: 'Introducing AI Assistants: Your CRM on Autopilot',
    excerpt:
      'Our new AI-powered assistants automate follow-ups, enrich contacts, and surface the insights that matter most to your pipeline.',
    category: 'Product',
    date: 'Feb 24, 2026',
    readTime: '5 min read',
    author: { name: 'Sarah Chen', avatar: 'SC' },
    gradient: 'from-violet-400 via-indigo-300 to-sky-200',
  },
  {
    slug: 'scaling-postgres-beyond-1b-rows',
    title: 'Scaling Postgres Beyond One Billion Rows',
    excerpt:
      'How we partitioned, indexed, and tuned our Postgres cluster to keep sub-10ms query times at scale.',
    category: 'Engineering',
    date: 'Feb 18, 2026',
    readTime: '12 min read',
    author: { name: 'James Park', avatar: 'JP' },
    gradient: 'from-emerald-400 via-teal-300 to-cyan-200',
  },
  {
    slug: 'pipeline-management-best-practices',
    title: 'Pipeline Management: 7 Practices Top Teams Swear By',
    excerpt:
      'From deal velocity metrics to stage hygiene, here\'s what separates high-performing sales orgs from the rest.',
    category: 'Sales',
    date: 'Feb 12, 2026',
    readTime: '8 min read',
    author: { name: 'Maria Gonzalez', avatar: 'MG' },
    gradient: 'from-amber-400 via-orange-300 to-rose-200',
  },
  {
    slug: 'series-b-announcement',
    title: 'LeverLoop Raises $48M Series B to Redefine CRM',
    excerpt:
      'We\'re thrilled to announce our Series B, led by Acme Ventures, to accelerate product development and expand into new markets.',
    category: 'Company',
    date: 'Feb 5, 2026',
    readTime: '3 min read',
    author: { name: 'Alex Rivera', avatar: 'AR' },
    gradient: 'from-pink-400 via-rose-300 to-red-200',
  },
  {
    slug: 'getting-started-with-leverloop-api',
    title: 'Getting Started with the LeverLoop API',
    excerpt:
      'A step-by-step walkthrough to authenticate, query contacts, and sync deals via our REST and GraphQL APIs.',
    category: 'Guides',
    date: 'Jan 28, 2026',
    readTime: '10 min read',
    author: { name: 'Priya Patel', avatar: 'PP' },
    gradient: 'from-sky-400 via-blue-300 to-indigo-200',
  },
  {
    slug: 'smart-search-deep-dive',
    title: 'How Smart Search Finds Anything in Milliseconds',
    excerpt:
      'A look under the hood at the hybrid search engine that powers instant results across contacts, deals, notes, and emails.',
    category: 'Product',
    date: 'Jan 22, 2026',
    readTime: '7 min read',
    author: { name: 'James Park', avatar: 'JP' },
    gradient: 'from-teal-400 via-emerald-300 to-lime-200',
  },
  {
    slug: 'cold-email-playbook',
    title: 'The Modern Cold Email Playbook for 2026',
    excerpt:
      'Deliverability, personalization, and sequencing strategies that actually get replies in today\'s inbox landscape.',
    category: 'Sales',
    date: 'Jan 15, 2026',
    readTime: '9 min read',
    author: { name: 'Maria Gonzalez', avatar: 'MG' },
    gradient: 'from-orange-400 via-amber-300 to-yellow-200',
  },
  {
    slug: 'real-time-sync-architecture',
    title: 'Building Real-Time Sync with CRDTs',
    excerpt:
      'Why we chose conflict-free replicated data types over operational transforms for our multiplayer editing experience.',
    category: 'Engineering',
    date: 'Jan 8, 2026',
    readTime: '14 min read',
    author: { name: 'Sarah Chen', avatar: 'SC' },
    gradient: 'from-fuchsia-400 via-purple-300 to-violet-200',
  },
  {
    slug: 'custom-fields-workflows',
    title: 'Guide: Custom Fields & Automated Workflows',
    excerpt:
      'Learn how to tailor LeverLoop to your exact process with custom properties, conditional logic, and trigger-based automations.',
    category: 'Guides',
    date: 'Jan 2, 2026',
    readTime: '6 min read',
    author: { name: 'Priya Patel', avatar: 'PP' },
    gradient: 'from-cyan-400 via-sky-300 to-blue-200',
  },
  {
    slug: 'year-in-review-2025',
    title: '2025 Year in Review: What We Shipped',
    excerpt:
      'A retrospective on the features, milestones, and community growth that defined our biggest year yet.',
    category: 'Company',
    date: 'Dec 28, 2025',
    readTime: '4 min read',
    author: { name: 'Alex Rivera', avatar: 'AR' },
    gradient: 'from-rose-400 via-pink-300 to-fuchsia-200',
  },
  {
    slug: 'deal-forecasting-with-ml',
    title: 'Accurate Deal Forecasting with Machine Learning',
    excerpt:
      'How our ML models analyze historical patterns to predict close rates with 92% accuracy — and what that means for your revenue planning.',
    category: 'Product',
    date: 'Dec 20, 2025',
    readTime: '8 min read',
    author: { name: 'James Park', avatar: 'JP' },
    gradient: 'from-indigo-400 via-violet-300 to-purple-200',
  },
  {
    slug: 'migration-guide-salesforce',
    title: 'Migrating from Salesforce to LeverLoop in 30 Minutes',
    excerpt:
      'Our one-click migration tool handles contacts, deals, activities, and custom fields — here\'s how to make the switch.',
    category: 'Guides',
    date: 'Dec 14, 2025',
    readTime: '5 min read',
    author: { name: 'Priya Patel', avatar: 'PP' },
    gradient: 'from-lime-400 via-green-300 to-emerald-200',
  },
];
