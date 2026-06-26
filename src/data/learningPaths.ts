import type { LearningPath } from '@/types';
export const learningPaths: LearningPath[] = [
  {
    slug: "ai-beginner",
    title: "AI Beginner Roadmap",
    level: "Beginner",
    icon: "🚀",
    description: "Zero to confident.",
    steps: [
      {
        title: "Understand AI",
        courseSlug: "ai-fundamentals",
        note: "Mental model."
      },
      {
        title: "ChatGPT",
        courseSlug: "chatgpt-productivity",
        note: "Daily wins."
      },
      {
        title: "Prompts",
        courseSlug: "prompt-engineering",
        note: "Quality."
      }
    ]
  },
  {
    slug: "prompt",
    title: "Prompt Engineering",
    level: "Beginner",
    icon: "✨",
    description: "Production prompts.",
    steps: [
      {
        title: "Why prompts",
        courseSlug: "prompt-engineering",
        note: "Intuition."
      },
      {
        title: "RTCF",
        courseSlug: "prompt-engineering",
        note: "Framework."
      }
    ]
  },
  {
    slug: "ml",
    title: "Machine Learning",
    level: "Intermediate",
    icon: "📊",
    description: "Concept to model.",
    steps: [
      {
        title: "Python",
        courseSlug: "python-for-ai",
        note: "Minimum."
      },
      {
        title: "ML basics",
        courseSlug: "machine-learning-basics",
        note: "Concepts."
      }
    ]
  },
  {
    slug: "agents",
    title: "AI Agent Builder",
    level: "Advanced",
    icon: "🤖",
    description: "Real agents.",
    steps: [
      {
        title: "Prompts",
        courseSlug: "prompt-engineering",
        note: "Foundation."
      },
      {
        title: "Agents",
        courseSlug: "ai-agents",
        note: "Tools, memory."
      }
    ]
  },
  {
    slug: "business",
    title: "AI for Business",
    level: "Intermediate",
    icon: "💼",
    description: "P&L impact.",
    steps: [
      {
        title: "Fundamentals",
        courseSlug: "ai-fundamentals",
        note: "Language."
      },
      {
        title: "Business",
        courseSlug: "ai-for-business",
        note: "Strategy."
      }
    ]
  },
  {
    slug: "python",
    title: "Python for AI",
    level: "Beginner",
    icon: "🐍",
    description: "Zero to script.",
    steps: [
      {
        title: "Setup",
        courseSlug: "python-for-ai",
        note: "Basics."
      },
      {
        title: "First ML",
        courseSlug: "python-for-ai",
        note: "End to end."
      }
    ]
  }
];
