// API Configuration
export const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';
export const CLOUDINARY_URL = import.meta.env.VITE_CLOUDINARY_URL || '';
export const GOOGLE_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID || '';

// Feature Data
export const FEATURES = [
  {
    id: 'mental-health',
    title: 'Mental Health Issues',
    label: 'Understand',
    description: 'Discover more about depression, anxiety, stress, fears, strengths, and heartbreaks',
    theme: 'navy',
    route: '/feature/mental-health',
    heroSubtitle: 'Comprehensive resources to help you understand and navigate mental health challenges',
    expertName: 'Dr. Sarah Mitchell',
    expertTitle: 'Clinical Psychologist'
  },
  {
    id: 'therapy',
    title: 'Virtual Therapy',
    label: 'Connect',
    description: 'Book confidential sessions with licensed mental health professionals',
    theme: 'sage',
    route: '/feature/therapy',
    heroSubtitle: 'Professional, private therapy sessions from the comfort of your space',
    expertName: 'Dr. James Chen',
    expertTitle: 'Licensed Therapist'
  },
  {
    id: 'support-groups',
    title: 'Support Groups & Counseling',
    label: 'Belong',
    description: 'Join communities facing similar challenges and find peer support',
    theme: 'gold',
    route: '/feature/support-groups',
    heroSubtitle: 'Connect with peers who understand your journey',
    expertName: 'Maria Rodriguez',
    expertTitle: 'Group Facilitator'
  },
  {
    id: 'character',
    title: 'Decode Your Character',
    label: 'Discover',
    description: 'Understand your mental wellbeing patterns and personality insights',
    theme: 'lavender',
    route: '/feature/character',
    heroSubtitle: 'AI-powered personality and mental wellbeing analysis',
    expertName: 'Dr. Aisha Patel',
    expertTitle: 'Behavioral Psychologist'
  },
  {
    id: 'self-healing',
    title: 'Self-Healing Resources',
    label: 'Grow',
    description: 'Access meditation, journaling, and mindfulness practices',
    theme: 'sage-light',
    route: '/feature/self-healing',
    heroSubtitle: 'Tools for meditation, journaling, and mindful living',
    expertName: 'David Park',
    expertTitle: 'Mindfulness Coach'
  }
];

// Preference Options
export const PREFERENCES = [
  {
    id: 'clinical',
    title: 'Clinical',
    description: 'Science-backed approaches and professional perspectives',
    icon: '🔬'
  },
  {
    id: 'spiritual',
    title: 'Spiritual',
    description: 'Mindfulness, meditation, and holistic wellness',
    icon: '🧘'
  },
  {
    id: 'inspirational',
    title: 'Inspirational',
    description: 'Motivational stories and uplifting content',
    icon: '✨'
  },
  {
    id: 'research',
    title: 'Research',
    description: 'Data-driven studies and academic findings',
    icon: '📊'
  },
  {
    id: 'leaders',
    title: 'Thought Leaders',
    description: 'Expert opinions and industry insights',
    icon: '💡'
  }
];

// Mood Emojis
export const MOOD_EMOJIS = [
  { score: 1, emoji: '😢', label: 'Very Low' },
  { score: 2, emoji: '😞', label: 'Low' },
  { score: 3, emoji: '😔', label: 'Somewhat Low' },
  { score: 4, emoji: '😕', label: 'Below Average' },
  { score: 5, emoji: '😐', label: 'Neutral' },
  { score: 6, emoji: '🙂', label: 'Okay' },
  { score: 7, emoji: '😊', label: 'Good' },
  { score: 8, emoji: '😄', label: 'Great' },
  { score: 9, emoji: '😁', label: 'Very Good' },
  { score: 10, emoji: '🤩', label: 'Excellent' }
];

// Quiz Questions for Character Decode
export const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: 'How do you typically handle stressful situations?',
    options: [
      'I take time to reflect and analyze',
      'I seek support from friends or family',
      'I focus on finding practical solutions',
      'I engage in creative or physical activities'
    ]
  },
  {
    id: 2,
    question: 'What energizes you the most?',
    options: [
      'Deep one-on-one conversations',
      'Being part of a group or community',
      'Learning something new',
      'Creative expression (art, music, writing)'
    ]
  },
  {
    id: 3,
    question: 'When making important decisions, you primarily rely on:',
    options: [
      'Logic and careful analysis',
      'Intuition and gut feelings',
      'Advice from trusted people',
      'A mix of research and instinct'
    ]
  },
  {
    id: 4,
    question: 'How do you prefer to recharge after a long day?',
    options: [
      'Quiet time alone with a book or music',
      'Socializing with close friends',
      'Exercise or outdoor activities',
      'Watching movies or browsing online'
    ]
  },
  {
    id: 5,
    question: 'What matters most to you in relationships?',
    options: [
      'Trust and honesty',
      'Emotional support and understanding',
      'Shared interests and fun',
      'Independence and mutual respect'
    ]
  }
];

// Navigation Links
export const NAV_LINKS = [
  { label: 'Mental Health', path: '/feature/mental-health' },
  { label: 'Therapy', path: '/feature/therapy' },
  { label: 'Support Groups', path: '/feature/support-groups' },
  { label: 'Character Decode', path: '/feature/character' },
  { label: 'Self-Healing', path: '/feature/self-healing' },
];
