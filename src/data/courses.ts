import type { Course } from '@/types';

export const courses: Course[] = [
  {
    slug: "ai-fundamentals",
    title: "AI Fundamentals",
    tagline: "Understand the core ideas behind modern Artificial Intelligence.",
    description: "A beginner-friendly path through what AI is, how it learns, and where it is used today.",
    level: "Beginner",
    categories: [
      "Fundamentals",
      "AI Tools"
    ],
    hours: 6,
    cover: "🧠",
    color: "from-indigo-500 to-purple-600",
    author: "StudyAI Team",
    rating: 4.9,
    students: 18420,
    lessons: [
      {
        slug: "what-is-ai",
        title: "What is AI?",
        duration: "8 min",
        isPro: false,
        summary: "Clear definition.",
        whatYouLearn: [
          "AI",
          "ML",
          "DL"
        ],
        content: "AI is building systems that need human intelligence. **ML** learns from data. **DL** uses neural networks.",
        code: undefined,
        realWorld: "Netflix recommendations use ML on your history.",
        commonMistakes: [
          "Thinking ChatGPT understands like a human"
        ],
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "history",
        title: "History of AI",
        duration: "7 min",
        isPro: false,
        summary: "From 1950s to today.",
        whatYouLearn: [
          "AI winters",
          "Milestones"
        ],
        content: "AI began in 1956. Modern era started 2012 with AlexNet.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "types",
        title: "Types of AI",
        duration: "9 min",
        isPro: false,
        summary: "Capability and function.",
        whatYouLearn: [
          "Reactive",
          "Limited memory"
        ],
        content: "By capability: Reactive, Limited Memory, Theory of Mind.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "learning",
        title: "How AI Learns",
        duration: "10 min",
        isPro: false,
        summary: "Training simply.",
        whatYouLearn: [
          "Training",
          "Loss",
          "Gradient descent"
        ],
        content: "An AI model is math with millions of **weights**. Training adjusts weights to reduce error.",
        code: {
          language: "python",
          code: "for batch in dataset:\n    pred = model(batch.x)\n    loss = loss_fn(pred, batch.y)\n    loss.backward()\n    optimizer.step()"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "real-world",
        title: "Where AI Is Used",
        duration: "8 min",
        isPro: false,
        summary: "Industry tour.",
        whatYouLearn: [
          "Healthcare",
          "Finance",
          "Education"
        ],
        content: "AI is in healthcare, finance, education, creative, support, software.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: "Pick one industry. List 3 AI use cases."
      },
      {
        slug: "ethics",
        title: "AI Ethics",
        duration: "9 min",
        isPro: false,
        summary: "Bias, hallucination.",
        whatYouLearn: [
          "Bias",
          "Hallucination",
          "Privacy"
        ],
        content: "AI inherits training bias. It can **hallucinate**.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: [
          "Treating AI output as truth"
        ],
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "prompt-engineering",
    title: "Prompt Engineering",
    tagline: "Get dramatically better results from any AI model.",
    description: "Frameworks and patterns to design prompts that work.",
    level: "Beginner",
    categories: [
      "Prompt Engineering",
      "AI Tools"
    ],
    hours: 5,
    cover: "✨",
    color: "from-pink-500 to-rose-600",
    author: "StudyAI Team",
    rating: 4.95,
    students: 24210,
    lessons: [
      {
        slug: "intro",
        title: "Why Prompts Matter",
        duration: "6 min",
        isPro: false,
        summary: "Same model, better answers.",
        whatYouLearn: [
          "Structure",
          "Phrasing"
        ],
        content: "Models are sensitive to phrasing.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "rtcf",
        title: "The RTCF Framework",
        duration: "8 min",
        isPro: false,
        summary: "Role · Task · Context · Format.",
        whatYouLearn: [
          "Role",
          "Task",
          "Context",
          "Format"
        ],
        content: "**Role** — who AI acts as. **Task** — what. **Context** — background. **Format** — output shape.",
        code: {
          language: "text",
          code: "Role: Senior data analyst.\nTask: Summarise sales.\nContext: CFO audience.\nFormat: 5 bullets."
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "few-shot",
        title: "Few-Shot",
        duration: "7 min",
        isPro: false,
        summary: "Teach with examples.",
        whatYouLearn: [
          "Zero-shot",
          "Few-shot"
        ],
        content: "Give 2-5 examples first, then ask.",
        code: {
          language: "text",
          code: "Input: 'I love this!' -> positive\nInput: 'awful' -> negative"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "cot",
        title: "Chain-of-Thought",
        duration: "8 min",
        isPro: false,
        summary: "Step-by-step.",
        whatYouLearn: [
          "Reasoning"
        ],
        content: "Adding 'Let's think step by step' improves logic.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "system",
        title: "System Prompts",
        duration: "9 min",
        isPro: false,
        summary: "Lock tone, safety.",
        whatYouLearn: [
          "Refusal",
          "Schemas"
        ],
        content: "System prompt sets rules.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: "Write a system prompt for an HR assistant."
      },
      {
        slug: "advanced",
        title: "Advanced Patterns",
        duration: "10 min",
        isPro: true,
        summary: "ReAct, JSON.",
        whatYouLearn: [
          "ReAct",
          "Self-critique"
        ],
        content: "**ReAct** = Reason+Act. **JSON** = strict output.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "python-for-ai",
    title: "Python for AI",
    tagline: "Minimum Python for AI work.",
    description: "Practical Python aimed at AI.",
    level: "Beginner",
    categories: [
      "Coding",
      "Fundamentals"
    ],
    hours: 7,
    cover: "🐍",
    color: "from-amber-500 to-orange-600",
    author: "StudyAI Team",
    rating: 4.85,
    students: 15710,
    lessons: [
      {
        slug: "setup",
        title: "Setup Python",
        duration: "6 min",
        isPro: false,
        summary: "Install Python, venv.",
        whatYouLearn: [
          "Install",
          "venv"
        ],
        content: "Use a virtual environment.",
        code: {
          language: "bash",
          code: "python -m venv .venv\nsource .venv/bin/activate\npip install numpy pandas"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "vars",
        title: "Variables",
        duration: "8 min",
        isPro: false,
        summary: "Core Python.",
        whatYouLearn: [
          "Variables",
          "Functions"
        ],
        content: "Use 4-space indentation.",
        code: {
          language: "python",
          code: "for i in range(5):\n    print(f'Lesson {i+1}')"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "lists",
        title: "Lists & Dicts",
        duration: "8 min",
        isPro: false,
        summary: "Data structures.",
        whatYouLearn: [
          "Lists",
          "Comprehensions"
        ],
        content: "List comprehensions transform in one line.",
        code: {
          language: "python",
          code: "scores = [82, 95, 71]\nhigh = [s for s in scores if s >= 80]"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "numpy",
        title: "NumPy",
        duration: "9 min",
        isPro: false,
        summary: "Arrays.",
        whatYouLearn: [
          "np.array",
          "Math"
        ],
        content: "NumPy is fast typed array.",
        code: {
          language: "python",
          code: "import numpy as np\nx = np.array([1,2,3,4])\nprint(x.mean())"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "pandas",
        title: "Pandas",
        duration: "10 min",
        isPro: false,
        summary: "Tabular data.",
        whatYouLearn: [
          "DataFrames",
          "groupby"
        ],
        content: "DataFrames are Excel sheets in code.",
        code: {
          language: "python",
          code: "import pandas as pd\ndf = pd.read_csv('sales.csv')"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "ml-script",
        title: "First ML Script",
        duration: "11 min",
        isPro: false,
        summary: "Train a model.",
        whatYouLearn: [
          "fit",
          "predict"
        ],
        content: "scikit-learn is simplest ML.",
        code: {
          language: "python",
          code: "from sklearn.linear_model import LogisticRegression\nmodel = LogisticRegression().fit(X, y)\nprint(model.score(X, y))"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "machine-learning-basics",
    title: "Machine Learning Basics",
    tagline: "Core ML concepts.",
    description: "Supervised, unsupervised, training, overfitting.",
    level: "Intermediate",
    categories: [
      "Machine Learning",
      "Fundamentals"
    ],
    hours: 8,
    cover: "📊",
    color: "from-emerald-500 to-teal-600",
    author: "StudyAI Team",
    rating: 4.8,
    students: 12340,
    lessons: [
      {
        slug: "what-is-ml",
        title: "What is ML?",
        duration: "7 min",
        isPro: false,
        summary: "Programming with examples.",
        whatYouLearn: [
          "Definition"
        ],
        content: "ML learns rules from data.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "supervised",
        title: "Supervised Learning",
        duration: "9 min",
        isPro: false,
        summary: "Labelled examples.",
        whatYouLearn: [
          "Classification",
          "Regression"
        ],
        content: "Classification = category. Regression = number.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "unsupervised",
        title: "Unsupervised",
        duration: "8 min",
        isPro: false,
        summary: "No labels.",
        whatYouLearn: [
          "Clustering",
          "PCA"
        ],
        content: "K-Means clusters. PCA reduces dimensions.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "split",
        title: "Train/Test",
        duration: "8 min",
        isPro: false,
        summary: "Split data.",
        whatYouLearn: [
          "Train",
          "Test"
        ],
        content: "Never test on training data.",
        code: {
          language: "python",
          code: "from sklearn.model_selection import train_test_split\nXtr, Xte, ytr, yte = train_test_split(X, y)"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "overfit",
        title: "Overfitting",
        duration: "9 min",
        isPro: false,
        summary: "Two failures.",
        whatYouLearn: [
          "Overfitting",
          "Regularisation"
        ],
        content: "Overfitting = memorises. Fix: more data, simpler model.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: [
          "Judging by training accuracy"
        ],
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "eval",
        title: "Evaluation",
        duration: "9 min",
        isPro: false,
        summary: "Precision, recall.",
        whatYouLearn: [
          "Confusion matrix"
        ],
        content: "Precision/Recall measure quality on imbalanced data.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "generative-ai",
    title: "Generative AI",
    tagline: "How LLMs work.",
    description: "Tokens, transformers, diffusion.",
    level: "Intermediate",
    categories: [
      "Generative AI"
    ],
    hours: 6,
    cover: "🎨",
    color: "from-fuchsia-500 to-purple-600",
    author: "StudyAI Team",
    rating: 4.9,
    students: 21090,
    lessons: [
      {
        slug: "what",
        title: "What is GenAI?",
        duration: "6 min",
        isPro: false,
        summary: "New content.",
        whatYouLearn: [
          "Output types"
        ],
        content: "GenAI creates new text, images, audio, code.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "tokens",
        title: "Tokens & Embeddings",
        duration: "8 min",
        isPro: false,
        summary: "Text to numbers.",
        whatYouLearn: [
          "Tokens",
          "Embeddings"
        ],
        content: "Text → tokens → embeddings (vectors).",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "transformers",
        title: "Transformers",
        duration: "10 min",
        isPro: false,
        summary: "Attention.",
        whatYouLearn: [
          "Self-attention"
        ],
        content: "Every token attends to every other token.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "llm",
        title: "Inside an LLM",
        duration: "8 min",
        isPro: false,
        summary: "Pretraining, RLHF.",
        whatYouLearn: [
          "SFT",
          "RLHF"
        ],
        content: "Pretrained, fine-tuned, aligned with RLHF.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "diffusion",
        title: "Diffusion",
        duration: "8 min",
        isPro: false,
        summary: "Image generators.",
        whatYouLearn: [
          "Noise"
        ],
        content: "Starts from noise, iteratively denoises.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "rag",
        title: "RAG",
        duration: "9 min",
        isPro: true,
        summary: "Your knowledge.",
        whatYouLearn: [
          "Vector DB"
        ],
        content: "Search docs, paste in prompt, ask LLM.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "ai-agents",
    title: "AI Agents",
    tagline: "AI that takes actions.",
    description: "Tools, memory, planning.",
    level: "Advanced",
    categories: [
      "Agents"
    ],
    hours: 7,
    cover: "🤖",
    color: "from-cyan-500 to-blue-600",
    author: "StudyAI Team",
    rating: 4.88,
    students: 9830,
    lessons: [
      {
        slug: "what-agent",
        title: "What is an Agent?",
        duration: "6 min",
        isPro: false,
        summary: "LLM + tools + loop.",
        whatYouLearn: [
          "Definition"
        ],
        content: "Agent = LLM that calls tools in a loop.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "tools",
        title: "Tool Use",
        duration: "8 min",
        isPro: false,
        summary: "Functions.",
        whatYouLearn: [
          "JSON schemas"
        ],
        content: "LLMs accept tools as JSON schemas.",
        code: {
          language: "json",
          code: "{\"name\": \"get_weather\", \"parameters\": {\"city\": {\"type\": \"string\"}}}"
        },
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "memory",
        title: "Memory",
        duration: "8 min",
        isPro: false,
        summary: "Short, long.",
        whatYouLearn: [
          "Context",
          "Vector memory"
        ],
        content: "Short = chat history. Long = vector store.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "planning",
        title: "Planning",
        duration: "9 min",
        isPro: false,
        summary: "ReAct.",
        whatYouLearn: [
          "ReAct",
          "Reflection"
        ],
        content: "ReAct interleaves reasoning and action.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "copilot",
        title: "Copilot Studio",
        duration: "10 min",
        isPro: false,
        summary: "Microsoft.",
        whatYouLearn: [
          "Topics",
          "Actions"
        ],
        content: "Copilot Studio ships enterprise agents.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "safety",
        title: "Safety",
        duration: "8 min",
        isPro: true,
        summary: "Guardrails.",
        whatYouLearn: [
          "Injection",
          "Approval"
        ],
        content: "Validate inputs, require human approval.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "chatgpt-productivity",
    title: "ChatGPT for Productivity",
    tagline: "Save 10+ hours a week.",
    description: "Email, writing, research, planning.",
    level: "Beginner",
    categories: [
      "AI Tools",
      "Prompt Engineering"
    ],
    hours: 4,
    cover: "⚡",
    color: "from-yellow-500 to-orange-500",
    author: "StudyAI Team",
    rating: 4.92,
    students: 33450,
    lessons: [
      {
        slug: "setup",
        title: "Setup",
        duration: "5 min",
        isPro: false,
        summary: "Custom instructions.",
        whatYouLearn: [
          "Instructions"
        ],
        content: "Settings → Personalisation → Custom Instructions.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "email",
        title: "Email",
        duration: "7 min",
        isPro: false,
        summary: "Reply, summarise.",
        whatYouLearn: [
          "Tone"
        ],
        content: "Paste email, ask 'Reply professionally, under 60 words.'",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "writing",
        title: "Writing",
        duration: "8 min",
        isPro: false,
        summary: "Co-writer.",
        whatYouLearn: [
          "Editing"
        ],
        content: "Write draft, then 'tighten this, keep my voice'.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "research",
        title: "Research",
        duration: "8 min",
        isPro: false,
        summary: "Faster.",
        whatYouLearn: [
          "Sources"
        ],
        content: "Always ask: 'Cite sources, mark uncertainties.'",
        code: undefined,
        realWorld: undefined,
        commonMistakes: [
          "Trusting without verifying"
        ],
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "plan",
        title: "Planning",
        duration: "7 min",
        isPro: false,
        summary: "Goals to tasks.",
        whatYouLearn: [
          "SMART"
        ],
        content: "Give goal, deadline. Ask for week-by-week plan.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "meet",
        title: "Meetings",
        duration: "6 min",
        isPro: false,
        summary: "Transcript to recap.",
        whatYouLearn: [
          "Action items"
        ],
        content: "Ask for 5-bullet summary + actions.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "ai-for-business",
    title: "AI for Business",
    tagline: "Ship AI that moves P&L.",
    description: "Strategy, ROI, vendors.",
    level: "Intermediate",
    categories: [
      "Business AI"
    ],
    hours: 5,
    cover: "💼",
    color: "from-blue-500 to-indigo-600",
    author: "StudyAI Team",
    rating: 4.78,
    students: 7820,
    lessons: [
      {
        slug: "strategy",
        title: "Strategy",
        duration: "8 min",
        isPro: false,
        summary: "Where AI wins.",
        whatYouLearn: [
          "Value map"
        ],
        content: "Map value chain. Mark high-volume, 90%-tolerant.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "usecase",
        title: "First Use Case",
        duration: "8 min",
        isPro: false,
        summary: "Narrow + safe.",
        whatYouLearn: [
          "Quick wins"
        ],
        content: "Pick narrow, measurable, safe. Ship in 6 weeks.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "roi",
        title: "ROI",
        duration: "7 min",
        isPro: false,
        summary: "Numbers.",
        whatYouLearn: [
          "Baseline"
        ],
        content: "Baseline first. ROI = (value - cost) / cost.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "vendors",
        title: "Vendors",
        duration: "8 min",
        isPro: false,
        summary: "Microsoft, OpenAI.",
        whatYouLearn: [
          "Pricing"
        ],
        content: "Check residency, integrations.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "change",
        title: "Change",
        duration: "7 min",
        isPro: false,
        summary: "Adoption.",
        whatYouLearn: [
          "Champions"
        ],
        content: "Identify champions per team.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "policy",
        title: "Governance",
        duration: "7 min",
        isPro: false,
        summary: "Policy.",
        whatYouLearn: [
          "Audit"
        ],
        content: "Publish AI policy.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "computer-vision",
    title: "Computer Vision",
    tagline: "Teach machines to see.",
    description: "Pixels, CNNs, detection.",
    level: "Intermediate",
    categories: [
      "Computer Vision"
    ],
    hours: 6,
    cover: "👁️",
    color: "from-rose-500 to-pink-600",
    author: "StudyAI Team",
    rating: 4.7,
    students: 6420,
    lessons: [
      {
        slug: "images",
        title: "Images as Data",
        duration: "6 min",
        isPro: false,
        summary: "Pixels.",
        whatYouLearn: [
          "RGB",
          "Tensors"
        ],
        content: "3D grid: height × width × channels.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "filters",
        title: "Filters",
        duration: "8 min",
        isPro: false,
        summary: "Classical.",
        whatYouLearn: [
          "Convolution"
        ],
        content: "Kernel slides across image.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "cnns",
        title: "CNNs",
        duration: "9 min",
        isPro: false,
        summary: "Architecture.",
        whatYouLearn: [
          "Conv",
          "Pooling"
        ],
        content: "Early layers = edges, final = objects.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "detect",
        title: "Detection",
        duration: "9 min",
        isPro: false,
        summary: "YOLO.",
        whatYouLearn: [
          "Boxes"
        ],
        content: "YOLO finds objects + draws boxes.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "clip",
        title: "CLIP",
        duration: "9 min",
        isPro: false,
        summary: "Text + image.",
        whatYouLearn: [
          "Embeddings"
        ],
        content: "CLIP trains image + text encoders together.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "vision-llm",
        title: "GPT-4o Vision",
        duration: "7 min",
        isPro: false,
        summary: "Multimodal.",
        whatYouLearn: [
          "OCR"
        ],
        content: "Modern LLMs accept images directly.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  },
  {
    slug: "nlp-basics",
    title: "NLP Basics",
    tagline: "How machines read.",
    description: "Tokenisation, embeddings, NER.",
    level: "Intermediate",
    categories: [
      "NLP"
    ],
    hours: 6,
    cover: "🗣️",
    color: "from-violet-500 to-fuchsia-600",
    author: "StudyAI Team",
    rating: 4.82,
    students: 8120,
    lessons: [
      {
        slug: "what-nlp",
        title: "What is NLP?",
        duration: "6 min",
        isPro: false,
        summary: "Language.",
        whatYouLearn: [
          "NLU",
          "NLG"
        ],
        content: "NLU = understanding. NLG = generation.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "tokens",
        title: "Tokenisation",
        duration: "7 min",
        isPro: false,
        summary: "Splitting.",
        whatYouLearn: [
          "BPE"
        ],
        content: "Sub-word tokenisers like BPE.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "embed",
        title: "Embeddings",
        duration: "8 min",
        isPro: false,
        summary: "Vectors.",
        whatYouLearn: [
          "word2vec"
        ],
        content: "Compute similarity between words.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "classify",
        title: "Classification",
        duration: "8 min",
        isPro: false,
        summary: "Spam.",
        whatYouLearn: [
          "Logistic"
        ],
        content: "Tokenise → embed → classifier.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "ner",
        title: "NER",
        duration: "7 min",
        isPro: false,
        summary: "Entities.",
        whatYouLearn: [
          "spaCy"
        ],
        content: "Prompt LLM with JSON schema.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      },
      {
        slug: "modern",
        title: "Modern NLP",
        duration: "8 min",
        isPro: false,
        summary: "Small vs LLMs.",
        whatYouLearn: [
          "Cost"
        ],
        content: "High volume → small model. Complex → LLM.",
        code: undefined,
        realWorld: undefined,
        commonMistakes: undefined,
        quiz: undefined,
        practice: undefined
      }
    ],
    lessonsCount: 6
  }
];
export function getCourse(slug: string) { return courses.find(c => c.slug === slug); }
export function getLesson(courseSlug: string, lessonSlug: string) {
  const course = getCourse(courseSlug); if (!course) return undefined;
  const idx = course.lessons.findIndex(l => l.slug === lessonSlug);
  if (idx === -1) return undefined;
  return { course, lesson: course.lessons[idx], prev: course.lessons[idx-1], next: course.lessons[idx+1], index: idx };
}
