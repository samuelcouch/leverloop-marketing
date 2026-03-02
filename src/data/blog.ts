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
  'Growth & Lead Gen',
  'Operations & Dispatch',
  'Payments & Profitability',
  'Customer Experience',
] as const;

export type Category = (typeof categories)[number];

export const posts: BlogPost[] = [];
