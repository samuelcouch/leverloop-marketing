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
    slug: 'automated-follow-up-sequences-contractors',
    title: 'Automated Follow-Up Sequences for Contractors',
    excerpt:
      'Map out automated follow-up sequences for new leads, unsold estimates, completed jobs, and dormant customers. Includes exact copy, timing, and channel strategy.',
    category: 'Guides',
    date: 'Mar 1, 2026',
    readTime: '14 min read',
    author: { name: 'Maria Gonzalez', avatar: 'MG' },
    gradient: 'from-amber-400 via-orange-300 to-rose-200',
  },
  {
    slug: 'why-contractors-lose-leads',
    title: 'Why Home Service Contractors Lose 60% of Leads (And How to Fix It)',
    excerpt:
      'Most contractors take 24-48 hours to respond to a lead. By then, the homeowner has already called 3 competitors. Here\'s the data on why speed and automation separate growing shops from struggling ones.',
    category: 'Sales',
    date: 'Feb 28, 2026',
    readTime: '9 min read',
    author: { name: 'Maria Gonzalez', avatar: 'MG' },
    gradient: 'from-orange-400 via-rose-300 to-pink-200',
  },
  {
    slug: 'win-more-home-service-jobs',
    title: 'The Complete Guide to Winning More Home Service Jobs in 2026',
    excerpt:
      '63% of contractors are growing, but most still lose winnable jobs to slow follow-up. Master the four-step system from lead capture to five-star reviews.',
    category: 'Guides',
    date: 'Feb 28, 2026',
    readTime: '8 min read',
    author: { name: 'Maria Gonzalez', avatar: 'MG' },
    gradient: 'from-emerald-400 via-teal-300 to-cyan-200',
  },
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

];
