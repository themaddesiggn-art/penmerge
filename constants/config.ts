export const SITE_NAME = 'PenMerge'
export const SITE_DESCRIPTION = 'Premium author-services and publishing support. Everything your book needs from manuscript to market.'
export const SITE_URL = 'https://penmerge.com'
export const TWITTER_HANDLE = '@penmerge'

export const NAV_LINKS = [
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

export const SERVICE_CATEGORIES = [
  {
    id: 'writing',
    name: 'Writing & Book Development',
    slug: 'writing-book-development',
    description: 'Comprehensive support for manuscript development and writing guidance',
    icon: '✍️',
  },
  {
    id: 'editing',
    name: 'Editing & Editorial',
    slug: 'editing-editorial',
    description: 'Professional editorial services from assessment to final quality control',
    icon: '📝',
  },
  {
    id: 'design',
    name: 'Book Design & Production',
    slug: 'book-design-production',
    description: 'Cover design, formatting, and production for all book formats',
    icon: '🎨',
  },
  {
    id: 'publishing',
    name: 'Publishing',
    slug: 'publishing',
    description: 'Publishing strategy and setup across all major platforms',
    icon: '📚',
  },
  {
    id: 'distribution',
    name: 'Distribution',
    slug: 'distribution',
    description: 'Strategic distribution and retail placement guidance',
    icon: '🌍',
  },
  {
    id: 'branding',
    name: 'Author Branding',
    slug: 'author-branding',
    description: 'Build your author brand and professional identity',
    icon: '🏷️',
  },
  {
    id: 'website',
    name: 'Author Websites',
    slug: 'author-websites',
    description: 'Custom author websites and digital platforms',
    icon: '💻',
  },
  {
    id: 'marketing',
    name: 'Marketing',
    slug: 'marketing',
    description: 'Comprehensive book marketing and reader funnel strategy',
    icon: '📢',
  },
  {
    id: 'pr',
    name: 'PR & Media',
    slug: 'pr-media',
    description: 'Press relations, media outreach, and publicity strategy',
    icon: '📰',
  },
  {
    id: 'launch',
    name: 'Book Launch',
    slug: 'book-launch',
    description: 'Strategic planning and execution for book launches',
    icon: '🚀',
  },
]

export const AUTHOR_JOURNEY = [
  { step: 1, label: 'Idea', description: 'Conceptualize and develop your book idea' },
  { step: 2, label: 'Write', description: 'Write your manuscript with support' },
  { step: 3, label: 'Refine', description: 'Edit and refine your work' },
  { step: 4, label: 'Design', description: 'Professional design and production' },
  { step: 5, label: 'Publish', description: 'Publishing setup and strategy' },
  { step: 6, label: 'Launch', description: 'Strategic book launch execution' },
  { step: 7, label: 'Grow', description: 'Long-term author platform growth' },
]

export const PACKAGES = [
  {
    id: 'essential',
    name: 'Essential',
    description: 'For authors who need the essential foundation',
    price: null,
    tier: 1,
    features: [
      'Manuscript assessment',
      'Copy editing',
      'Cover design',
      'eBook formatting',
      'Basic author branding',
    ],
    cta: 'Explore Essential',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'For authors preparing for a serious publication',
    price: null,
    tier: 2,
    features: [
      'Everything in Essential, plus:',
      'Developmental editing',
      'Interior layout & design',
      'Print & eBook production',
      'Publishing consultation',
      'Author website',
    ],
    cta: 'Explore Professional',
  },
  {
    id: 'growth',
    name: 'Author Growth',
    description: 'For authors building a long-term platform',
    price: null,
    tier: 3,
    features: [
      'Everything in Professional, plus:',
      'Book marketing strategy',
      'Social media marketing',
      'Email marketing setup',
      'Media kit & author positioning',
      'Launch campaign',
    ],
    cta: 'Explore Author Growth',
  },
  {
    id: 'complete',
    name: 'Complete',
    description: 'For authors who want the most comprehensive partnership',
    price: null,
    tier: 4,
    features: [
      'Everything in Author Growth, plus:',
      'Full PR & media outreach',
      'Press release writing',
      'Podcast & interview outreach',
      'Ongoing marketing support',
      'Dedicated account management',
    ],
    cta: 'Explore Complete',
  },
]

export const PROCESS_STEPS = [
  {
    step: '01',
    label: 'Discover',
    description: 'We learn about your book, goals, audience, and vision for your author journey.',
  },
  {
    step: '02',
    label: 'Assess',
    description: 'We evaluate your manuscript, current positioning, and identify opportunities.',
  },
  {
    step: '03',
    label: 'Plan',
    description: 'We create a comprehensive strategy across all aspects of your book journey.',
  },
  {
    step: '04',
    label: 'Create',
    description: 'Our team executes across editing, design, branding, and platform development.',
  },
  {
    step: '05',
    label: 'Publish',
    description: 'We handle publishing setup, distribution, and retail placement.',
  },
  {
    step: '06',
    label: 'Promote',
    description: 'We execute your launch campaign with marketing, PR, and media strategy.',
  },
  {
    step: '07',
    label: 'Grow',
    description: 'We support your ongoing author growth and long-term platform development.',
  },
]

export const PORTFOLIO_FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'fiction', label: 'Fiction' },
  { id: 'nonfiction', label: 'Nonfiction' },
  { id: 'memoir', label: 'Memoir' },
  { id: 'business', label: 'Business' },
  { id: 'selfhelp', label: 'Self-Help' },
  { id: 'childrens', label: "Children's" },
  { id: 'poetry', label: 'Poetry' },
  { id: 'branding', label: 'Author Branding' },
  { id: 'websites', label: 'Websites' },
  { id: 'marketing', label: 'Marketing' },
]

export const RESOURCE_CATEGORIES = [
  { id: 'writing', name: 'Writing' },
  { id: 'editing', name: 'Editing' },
  { id: 'publishing', name: 'Publishing' },
  { id: 'design', name: 'Book Design' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'branding', name: 'Author Branding' },
  { id: 'launch', name: 'Book Launch' },
]
