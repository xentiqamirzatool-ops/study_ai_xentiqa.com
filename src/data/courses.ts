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
        summary: "What AI, ML, and Deep Learning actually mean — and how they fit together.",
        whatYouLearn: [
          "The difference between AI, ML, and Deep Learning",
          "Why ML learns rules from data instead of being hand-coded",
          "How modern AI differs from traditional rule-based software"
        ],
        content: "Artificial Intelligence (AI) is the field of building software that performs tasks we normally associate with human intelligence — understanding language, recognising images, making decisions, and generating content.\nThree nested ideas are often confused. **AI** is the broad goal. **Machine Learning (ML)** is the main technique: instead of hand-coding rules, we show a program many examples and let it discover the patterns. **Deep Learning (DL)** is a powerful kind of ML built on large **neural networks** with many layers.\nThe key shift: traditional software follows rules a human wrote, while ML writes its own rules by learning from data. That is why modern AI can handle messy real-world inputs like speech and photos that are almost impossible to capture with fixed `if/else` rules.",
        code: undefined,
        realWorld: "When Netflix recommends a show, an ML model has learned patterns from millions of viewing histories — no engineer wrote a rule that says 'if the user watched X, suggest Y'.",
        commonMistakes: [
          "Assuming a chatbot 'understands' meaning the way a person does — it predicts likely text.",
          "Using 'AI' and 'ML' as if they were the same thing."
        ],
        quiz: [
          {
            q: "Which statement best describes Machine Learning?",
            options: [
              "A program that only follows rules written by a human",
              "A program that learns patterns from example data",
              "A faster type of database",
              "A fixed set of if/else statements"
            ],
            answer: 1
          },
          {
            q: "Deep Learning is best described as...",
            options: [
              "Something unrelated to ML",
              "A type of ML that uses large neural networks",
              "A spreadsheet tool",
              "A programming language"
            ],
            answer: 1
          }
        ],
        practice: "In your own words, write a one-sentence definition of AI, ML, and DL, and give one everyday example of each."
      },
      {
        slug: "history",
        title: "History of AI",
        duration: "7 min",
        isPro: false,
        summary: "From the 1956 Dartmouth workshop to the deep-learning boom.",
        whatYouLearn: [
          "Key milestones that shaped AI",
          "What the 'AI winters' were and why they happened",
          "Why 2012 was a turning point"
        ],
        content: "The term 'Artificial Intelligence' was coined in **1956** at the Dartmouth workshop, where researchers believed human-level intelligence was a few decades away.\nProgress came in waves. Early excitement was followed by **AI winters** — periods in the 1970s and late 1980s when funding dried up because the technology over-promised and under-delivered.\nThe modern era began in **2012**, when a deep neural network called **AlexNet** crushed an image-recognition competition. Cheap GPUs, huge datasets, and better algorithms suddenly made deep learning practical. The 2017 **Transformer** architecture then unlocked today's large language models.",
        code: undefined,
        realWorld: "The jump from 2012 (AlexNet) to today's chatbots took roughly a decade — a reminder of how fast the field now moves once the right pieces (data, compute, architecture) line up.",
        commonMistakes: [
          "Believing AI progress is smooth — it has historically come in boom-and-bust cycles."
        ],
        quiz: [
          {
            q: "What were the 'AI winters'?",
            options: [
              "Annual AI conferences",
              "Periods of reduced funding and interest in AI",
              "A type of neural network",
              "Cold-climate data centres"
            ],
            answer: 1
          }
        ],
        practice: "Build a 5-point timeline of AI from 1956 to today and label one milestone you find most surprising."
      },
      {
        slug: "types",
        title: "Types of AI",
        duration: "9 min",
        isPro: false,
        summary: "Narrow vs general AI, and the capability levels in between.",
        whatYouLearn: [
          "The difference between Narrow AI and General AI (AGI)",
          "Capability levels: reactive and limited-memory systems",
          "Where today's systems actually sit"
        ],
        content: "AI is grouped by **capability**. **Narrow (or weak) AI** does one task well — spam filtering, translation, recommendations. Every system in use today is narrow AI, even very impressive ones.\n**General AI (AGI)** would match a human across any task. It does not exist yet and remains a research goal.\nResearchers also describe levels: **Reactive** machines respond only to the current input (like a chess engine), while **Limited Memory** systems use recent history (like a self-driving car tracking nearby cars). 'Theory of Mind' and self-aware AI are still theoretical.",
        code: undefined,
        realWorld: "A voice assistant feels general, but it is a bundle of narrow models — speech-to-text, intent detection, and text-to-speech — stitched together.",
        commonMistakes: [
          "Thinking today's chatbots are 'general AI' — they are very capable narrow systems."
        ],
        quiz: [
          {
            q: "Which best describes today's AI systems?",
            options: [
              "General AI (AGI)",
              "Narrow AI focused on specific tasks",
              "Self-aware AI",
              "None are in use yet"
            ],
            answer: 1
          }
        ],
        practice: "List three apps you used today and label each as narrow AI or not."
      },
      {
        slug: "learning",
        title: "How AI Learns",
        duration: "10 min",
        isPro: false,
        summary: "Weights, loss, and gradient descent — the training loop in plain English.",
        whatYouLearn: [
          "What 'weights' are inside a model",
          "How a loss function measures error",
          "How gradient descent improves the model step by step"
        ],
        content: "Underneath, a model is a large math function with millions of adjustable numbers called **weights**. Learning means finding good values for those weights.\nDuring **training**, the model makes a prediction, and a **loss function** measures how wrong it was. A bigger loss means a worse prediction.\n**Gradient descent** then nudges every weight a tiny amount in the direction that reduces the loss. Repeat this over millions of examples and the model gradually gets better. The size of each nudge is the **learning rate** — too big and training is unstable, too small and it crawls.",
        code: {
          language: "python",
          code: "for batch in dataset:\n    pred = model(batch.x)            # forward pass\n    loss = loss_fn(pred, batch.y)    # how wrong?\n    loss.backward()                  # compute gradients\n    optimizer.step()                 # nudge the weights\n    optimizer.zero_grad()            # reset for next batch"
        },
        realWorld: "Training a large model can mean repeating this loop billions of times across thousands of GPUs — which is why frontier models are so expensive to train.",
        commonMistakes: [
          "Setting the learning rate too high, which makes the loss bounce around instead of going down."
        ],
        quiz: [
          {
            q: "What does a loss function measure?",
            options: [
              "The model's speed",
              "How wrong the model's prediction is",
              "The number of weights",
              "How much memory is used"
            ],
            answer: 1
          },
          {
            q: "Gradient descent works by...",
            options: [
              "Randomly guessing weights",
              "Nudging weights to reduce the loss",
              "Deleting bad data",
              "Adding more layers automatically"
            ],
            answer: 1
          }
        ],
        practice: "Explain the training loop (predict → measure loss → adjust) to a friend using a non-technical analogy."
      },
      {
        slug: "real-world",
        title: "Where AI Is Used",
        duration: "8 min",
        isPro: false,
        summary: "A quick tour of AI across industries.",
        whatYouLearn: [
          "Concrete AI use cases in major industries",
          "How to spot AI in products you already use",
          "Why some industries adopt AI faster than others"
        ],
        content: "AI is already woven into daily life. In **healthcare**, models flag tumours in scans and speed up drug discovery. In **finance**, they detect fraud in real time and assess risk.\nIn **education**, adaptive tutors (like this one) personalise practice. In **creative** work, generative tools draft text, images, and music. In **customer support**, assistants resolve common questions instantly.\nIn **software**, AI pair-programmers suggest and review code. The common thread: AI shines wherever there is lots of data and a repetitive judgement to automate.",
        code: undefined,
        realWorld: "Your bank likely ran several ML models on your last card transaction — fraud scoring, spend categorisation, and personalisation — in under a second.",
        commonMistakes: [
          "Assuming AI only lives in 'tech' products — it is embedded in finance, health, and logistics too."
        ],
        quiz: [
          {
            q: "AI tends to add the most value where there is...",
            options: [
              "No data at all",
              "Lots of data and a repetitive decision to automate",
              "Only one example to learn from",
              "A task that never repeats"
            ],
            answer: 1
          }
        ],
        practice: "Pick one industry and list three specific AI use cases, noting what data each would need."
      },
      {
        slug: "ethics",
        title: "AI Ethics & Safety",
        duration: "9 min",
        isPro: false,
        summary: "Bias, hallucination, privacy — and how to use AI responsibly.",
        whatYouLearn: [
          "Why models inherit bias from their training data",
          "What 'hallucination' is and how to guard against it",
          "Privacy basics when working with AI"
        ],
        content: "AI learns from human data, so it can absorb and amplify human **bias** — for example, favouring one group if the training data was skewed.\nLanguage models also **hallucinate**: they can produce fluent, confident answers that are simply wrong, because they predict plausible text rather than look up facts.\nThe practical response is to **verify important outputs**, keep a human in the loop for high-stakes decisions, and protect **privacy** by never pasting sensitive personal data into tools you do not control. Responsible AI is less about fear and more about good habits.",
        code: undefined,
        realWorld: "A résumé-screening model once down-ranked candidates from certain backgrounds because it learned from biased historical hiring data — a textbook example of inherited bias.",
        commonMistakes: [
          "Treating confident AI output as automatically true.",
          "Pasting private or sensitive data into tools without checking their policy."
        ],
        quiz: [
          {
            q: "Why can an AI model be biased?",
            options: [
              "It chooses to be unfair",
              "It learns patterns from biased training data",
              "It runs on slow hardware",
              "It has too few weights"
            ],
            answer: 1
          },
          {
            q: "A 'hallucination' in an LLM is...",
            options: [
              "A visual glitch",
              "A confident but incorrect answer",
              "A type of training data",
              "A hardware failure"
            ],
            answer: 1
          }
        ],
        practice: "Find one AI answer online, fact-check it against a reliable source, and note whether it held up."
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
        summary: "The same model gives very different answers depending on how you ask.",
        whatYouLearn: [
          "Why phrasing changes model output so much",
          "The difference between a vague and a specific prompt",
          "A simple habit for writing better prompts"
        ],
        content: "A language model predicts the most likely continuation of your text, so the words you choose steer it heavily. Two prompts asking for the 'same' thing can produce wildly different quality.\nVague in, vague out: 'write about marketing' gives generic fluff. A specific prompt — audience, goal, length, tone — gives something useful.\nThe core habit: **be explicit**. State who the answer is for, what you want, and what the output should look like. You are not chatting with a mind-reader; you are programming with words.",
        code: {
          language: "text",
          code: "Weak:   Write about email marketing.\nStrong: Write 5 subject-line ideas for a SaaS free-trial\n        reminder email. Audience: busy founders.\n        Tone: friendly, under 8 words each."
        },
        realWorld: "Support teams cut reply time by giving the model a precise template prompt instead of free-typing each request.",
        commonMistakes: [
          "Writing one-word prompts and blaming the model for generic answers."
        ],
        quiz: [
          {
            q: "Why does phrasing matter so much to a language model?",
            options: [
              "It changes the hardware used",
              "The model predicts text based on your wording",
              "It encrypts the request",
              "It does not actually matter"
            ],
            answer: 1
          }
        ],
        practice: "Take a vague prompt you used recently and rewrite it with audience, goal, length, and tone."
      },
      {
        slug: "rtcf",
        title: "The RTCF Framework",
        duration: "8 min",
        isPro: false,
        summary: "A reliable structure: Role, Task, Context, Format.",
        whatYouLearn: [
          "The four parts of a strong prompt",
          "How each part changes the output",
          "A reusable template you can apply anywhere"
        ],
        content: "A dependable way to structure prompts is **RTCF**.\n**Role** — tell the model who to act as ('a senior data analyst'). This sets vocabulary and depth.\n**Task** — state exactly what to do, with a verb ('summarise', 'compare', 'draft').\n**Context** — give the background it needs: audience, constraints, source material.\n**Format** — describe the output shape: bullets, a table, JSON, word count. Specifying format is the single biggest quality boost most people miss.",
        code: {
          language: "text",
          code: "Role: You are a senior data analyst.\nTask: Summarise this quarter's sales.\nContext: Audience is the CFO; focus on trends and risks.\nFormat: 5 bullet points, each under 15 words."
        },
        realWorld: "Teams save RTCF prompts as reusable templates so anyone gets consistent, on-brand output.",
        commonMistakes: [
          "Skipping Format and then being surprised the answer is a wall of text."
        ],
        quiz: [
          {
            q: "Which RTCF element most improves output structure?",
            options: [
              "Role",
              "Task",
              "Context",
              "Format"
            ],
            answer: 3
          },
          {
            q: "The 'Role' part of a prompt mainly sets...",
            options: [
              "The output file type",
              "The tone, depth, and vocabulary",
              "The model's speed",
              "The number of tokens"
            ],
            answer: 1
          }
        ],
        practice: "Write an RTCF prompt that turns a messy meeting note into a clean action-item list."
      },
      {
        slug: "few-shot",
        title: "Few-Shot Prompting",
        duration: "7 min",
        isPro: false,
        summary: "Teach the model by example instead of by description.",
        whatYouLearn: [
          "Zero-shot vs few-shot prompting",
          "When examples beat instructions",
          "How to format examples clearly"
        ],
        content: "**Zero-shot** means asking with no examples. **Few-shot** means showing the model 2–5 examples of the input-output pattern you want, then giving it a new input.\nExamples are powerful when the task is hard to describe but easy to demonstrate — classification, formatting, tone matching. The model copies the pattern.\nKeep examples consistent and clearly separated, and make sure they cover the variety you expect (e.g. include a tricky case).",
        code: {
          language: "text",
          code: "Classify sentiment.\nInput: 'I love this!'  -> positive\nInput: 'It is awful.'  -> negative\nInput: 'It is fine.'   -> neutral\nInput: 'Best purchase ever' ->",
        },
        realWorld: "Few-shot prompts let teams standardise outputs (like tagging tickets) without training a custom model.",
        commonMistakes: [
          "Giving examples that are inconsistent in format, which confuses the pattern."
        ],
        quiz: [
          {
            q: "Few-shot prompting means...",
            options: [
              "Asking with no examples",
              "Showing a few example input/output pairs",
              "Using a smaller model",
              "Limiting the answer length"
            ],
            answer: 1
          }
        ],
        practice: "Write a 3-example few-shot prompt that rewrites blunt sentences into polite ones."
      },
      {
        slug: "cot",
        title: "Chain-of-Thought",
        duration: "8 min",
        isPro: false,
        summary: "Ask the model to reason step by step for harder problems.",
        whatYouLearn: [
          "What chain-of-thought prompting is",
          "When it helps (and when it is overkill)",
          "How to combine it with format instructions"
        ],
        content: "For multi-step problems — maths, logic, planning — asking the model to **reason step by step** before answering improves accuracy. The phrase 'Let's work through this step by step' is a classic trigger.\nThe idea is that forcing intermediate steps gives the model 'room to think', reducing careless jumps to a wrong final answer.\nFor simple lookups it is unnecessary and just adds length. A practical combo: ask it to reason, then give the final answer in a clearly labelled, structured format.",
        code: {
          language: "text",
          code: "Question: A shirt is $40 with a 25% discount, then 8% tax.\nThink step by step, then give the final price as 'Total: $X'."
        },
        realWorld: "Analysts use chain-of-thought to make models show their working, which makes answers easier to trust and check.",
        commonMistakes: [
          "Using chain-of-thought for trivial questions, which wastes tokens and time."
        ],
        quiz: [
          {
            q: "Chain-of-thought prompting helps most with...",
            options: [
              "Simple one-word lookups",
              "Multi-step reasoning problems",
              "Reducing model size",
              "Image generation"
            ],
            answer: 1
          }
        ],
        practice: "Give the model a word problem twice — once plainly, once with 'think step by step' — and compare the answers."
      },
      {
        slug: "system",
        title: "System Prompts",
        duration: "9 min",
        isPro: false,
        summary: "Set persistent rules for tone, behaviour, and safety.",
        whatYouLearn: [
          "What a system prompt is and why it is special",
          "Locking tone, persona, and refusal rules",
          "Requesting structured output reliably"
        ],
        content: "Most chat APIs let you set a **system prompt** — instructions that apply to the whole conversation, separate from the user's messages. It is where you fix the persona, rules, and boundaries.\nUse it to lock **tone** ('always professional and concise'), define **refusals** ('never give medical diagnoses'), and require a consistent **format** ('always reply in valid JSON with keys answer and confidence').\nBecause it persists, the system prompt is how products keep an assistant on-brand and on-task across many user turns.",
        code: {
          language: "text",
          code: "System: You are StudyAI's HR assistant. Be warm and concise.\nNever give legal advice. If unsure, ask a clarifying question.\nAlways end with one suggested next step."
        },
        realWorld: "Every AI product you use has a hidden system prompt shaping its personality and guardrails.",
        commonMistakes: [
          "Putting rules in each user message instead of once in the system prompt."
        ],
        quiz: [
          {
            q: "What makes a system prompt different from a normal message?",
            options: [
              "It runs faster",
              "It sets persistent rules for the whole conversation",
              "It is shown to other users",
              "It cannot include formatting rules"
            ],
            answer: 1
          }
        ],
        practice: "Write a system prompt for an HR assistant that stays friendly, refuses legal advice, and always suggests a next step."
      },
      {
        slug: "advanced",
        title: "Advanced Patterns",
        duration: "10 min",
        isPro: true,
        summary: "ReAct, self-critique, and strict structured output.",
        whatYouLearn: [
          "The ReAct (Reason + Act) pattern for tools",
          "Self-critique to catch the model's own mistakes",
          "Forcing strict JSON for reliable automation"
        ],
        content: "**ReAct** interleaves **Reason**ing and **Act**ions: the model thinks, calls a tool, reads the result, then thinks again. It is the backbone of AI agents (covered in the Agents course).\n**Self-critique** asks the model to review and improve its own draft ('List 3 weaknesses in the answer above, then rewrite it'). This often raises quality noticeably.\nFor automation, demand **strict JSON** so your code can parse the output. Specify the exact schema and add 'Respond with only valid JSON, no prose.'",
        code: {
          language: "text",
          code: "Respond with ONLY valid JSON in this schema:\n{ \"summary\": string, \"risk\": \"low\" | \"medium\" | \"high\" }\nNo explanation, no markdown."
        },
        realWorld: "Production pipelines rely on strict JSON output so the model's response can flow straight into other software.",
        commonMistakes: [
          "Asking for JSON but allowing prose, so the output cannot be parsed reliably."
        ],
        quiz: [
          {
            q: "The ReAct pattern combines...",
            options: [
              "Reading and Acting",
              "Reasoning and Acting (tool use)",
              "Recording and Acting",
              "Reacting and Coding"
            ],
            answer: 1
          },
          {
            q: "Why request strict JSON output?",
            options: [
              "It looks nicer",
              "So other software can parse it reliably",
              "It uses fewer tokens always",
              "It is required by all models"
            ],
            answer: 1
          }
        ],
        practice: "Write a prompt that returns a product review as strict JSON with keys 'summary' and 'rating' (1-5)."
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
        summary: "Install Python and use a clean virtual environment.",
        whatYouLearn: [
          "Why virtual environments matter",
          "Creating and activating a venv",
          "Installing AI libraries with pip"
        ],
        content: "Python is the default language for AI because of its huge library ecosystem. First, install Python 3 from python.org.\nAlways work inside a **virtual environment** (venv) — an isolated folder of packages for each project. This stops one project's library versions from breaking another's.\nCreate one, activate it, then install the core data libraries. You will see `(.venv)` in your terminal when it is active.",
        code: {
          language: "bash",
          code: "python -m venv .venv\nsource .venv/bin/activate     # Windows: .venv\\Scripts\\activate\npip install numpy pandas scikit-learn"
        },
        realWorld: "Every professional Python project uses isolated environments — it is the difference between 'works on my machine' and reproducible setups.",
        commonMistakes: [
          "Installing packages globally and later hitting version conflicts between projects."
        ],
        quiz: [
          {
            q: "Why use a virtual environment?",
            options: [
              "It makes Python run faster",
              "It isolates each project's packages and versions",
              "It is required to open Python",
              "It encrypts your code"
            ],
            answer: 1
          }
        ],
        practice: "Create a venv, activate it, and install numpy. Confirm with `pip list`."
      },
      {
        slug: "vars",
        title: "Variables & Loops",
        duration: "8 min",
        isPro: false,
        summary: "The core Python you need: variables, types, loops, and functions.",
        whatYouLearn: [
          "Variables and basic types",
          "for loops and f-strings",
          "Writing a simple function"
        ],
        content: "Python uses **indentation** (4 spaces) instead of braces to group code — this trips up newcomers from other languages.\nVariables need no type declaration: `name = 'Mirza'`, `score = 95`. Loops and **f-strings** make output easy.\nFunctions are defined with `def` and keep your code reusable. Master these basics and most AI tutorials become readable.",
        code: {
          language: "python",
          code: "def greet(name):\n    return f'Hello, {name}!'\n\nfor i in range(3):\n    print(greet(f'Lesson {i + 1}'))"
        },
        realWorld: "Most AI scripts are mostly ordinary Python — loops, functions, and data wrangling — with a few model calls sprinkled in.",
        commonMistakes: [
          "Mixing tabs and spaces, which causes IndentationError."
        ],
        quiz: [
          {
            q: "How does Python group a block of code?",
            options: [
              "Curly braces { }",
              "Indentation (whitespace)",
              "Semicolons",
              "Parentheses"
            ],
            answer: 1
          }
        ],
        practice: "Write a function that takes a list of names and prints a greeting for each."
      },
      {
        slug: "lists",
        title: "Lists & Dicts",
        duration: "8 min",
        isPro: false,
        summary: "Python's two workhorse data structures, plus comprehensions.",
        whatYouLearn: [
          "Lists vs dictionaries",
          "List comprehensions",
          "When to use each"
        ],
        content: "A **list** is an ordered collection: `[82, 95, 71]`. A **dictionary** maps keys to values: `{'name': 'Mirza', 'score': 95}` — perfect for labelled data.\n**List comprehensions** transform or filter a list in one readable line, which you will see constantly in data code.\nThese two structures cover most everyday data handling before you reach NumPy and Pandas.",
        code: {
          language: "python",
          code: "scores = [82, 95, 71, 60]\nhigh = [s for s in scores if s >= 80]   # [82, 95]\n\nstudent = {'name': 'Mirza', 'score': 95}\nprint(student['name'], student['score'])"
        },
        realWorld: "Cleaning a dataset often starts as plain list/dict work before you load it into a DataFrame.",
        commonMistakes: [
          "Using a list when a dictionary (key lookup) would be far clearer and faster."
        ],
        quiz: [
          {
            q: "Which structure is best for labelled key/value data?",
            options: [
              "List",
              "Dictionary",
              "String",
              "Integer"
            ],
            answer: 1
          },
          {
            q: "What does [s for s in scores if s >= 80] do?",
            options: [
              "Sorts the scores",
              "Keeps only scores 80 and above",
              "Adds 80 to each score",
              "Deletes the list"
            ],
            answer: 1
          }
        ],
        practice: "Given a list of prices, use a comprehension to keep only those under 50."
      },
      {
        slug: "numpy",
        title: "NumPy",
        duration: "9 min",
        isPro: false,
        summary: "Fast numerical arrays — the foundation of ML in Python.",
        whatYouLearn: [
          "Creating NumPy arrays",
          "Vectorised math (no loops)",
          "Why NumPy is fast"
        ],
        content: "**NumPy** provides the `ndarray`, a fast, typed array. Almost every ML library is built on it.\nIts superpower is **vectorisation**: you do math on whole arrays at once instead of looping element by element, which is far faster and cleaner.\nThink of NumPy arrays as the numbers your models actually consume.",
        code: {
          language: "python",
          code: "import numpy as np\n\nx = np.array([1, 2, 3, 4])\nprint(x.mean())      # 2.5\nprint(x * 10)        # [10 20 30 40]  (no loop needed)"
        },
        realWorld: "When a model takes an image as input, that image is a NumPy array of pixel numbers.",
        commonMistakes: [
          "Looping over a NumPy array in pure Python instead of using vectorised operations."
        ],
        quiz: [
          {
            q: "What is NumPy's main advantage for ML?",
            options: [
              "It draws charts",
              "Fast vectorised math on arrays",
              "It connects to databases",
              "It writes HTML"
            ],
            answer: 1
          }
        ],
        practice: "Create a NumPy array of 5 numbers and print its mean, max, and the array doubled."
      },
      {
        slug: "pandas",
        title: "Pandas",
        duration: "10 min",
        isPro: false,
        summary: "Work with tables (DataFrames) — load, filter, and group data.",
        whatYouLearn: [
          "Loading data into a DataFrame",
          "Selecting and filtering rows",
          "Grouping and summarising"
        ],
        content: "**Pandas** gives you the `DataFrame` — a spreadsheet in code. It is where most real-world data work happens before modelling.\nYou can read a CSV, filter rows, create columns, and `groupby` to summarise — for example, average sales per region.\nGetting comfortable here pays off more than almost any other skill, because real ML projects are mostly data preparation.",
        code: {
          language: "python",
          code: "import pandas as pd\n\ndf = pd.read_csv('sales.csv')\ntop = df[df['amount'] > 1000]\nby_region = df.groupby('region')['amount'].mean()\nprint(by_region)"
        },
        realWorld: "Data scientists often spend 70-80% of a project in Pandas, cleaning and shaping data before any model is trained.",
        commonMistakes: [
          "Editing a filtered slice of a DataFrame and expecting the original to change (use .loc or .copy())."
        ],
        quiz: [
          {
            q: "What is a Pandas DataFrame most like?",
            options: [
              "A single number",
              "A spreadsheet table in code",
              "An image file",
              "A web page"
            ],
            answer: 1
          }
        ],
        practice: "Load any CSV, filter rows by one condition, and print the average of a numeric column."
      },
      {
        slug: "ml-script",
        title: "Your First ML Script",
        duration: "11 min",
        isPro: false,
        summary: "Train and evaluate a model in a few lines with scikit-learn.",
        whatYouLearn: [
          "The fit / predict pattern",
          "Splitting data before training",
          "Reading an accuracy score"
        ],
        content: "**scikit-learn** is the friendliest way to do classic ML. Every model follows the same pattern: create it, `.fit(X, y)` to train, then `.predict(...)` on new data.\nAlways split your data into **train** and **test** sets first, so you measure performance on data the model has not seen.\nThe example trains a simple classifier and prints its accuracy on held-out data — your first real model.",
        code: {
          language: "python",
          code: "from sklearn.linear_model import LogisticRegression\nfrom sklearn.model_selection import train_test_split\n\nXtr, Xte, ytr, yte = train_test_split(X, y, test_size=0.2)\nmodel = LogisticRegression().fit(Xtr, ytr)\nprint('Test accuracy:', model.score(Xte, yte))"
        },
        realWorld: "This exact fit/predict pattern scales from a 10-line demo to production fraud-detection systems.",
        commonMistakes: [
          "Reporting accuracy on the training data instead of the held-out test set."
        ],
        quiz: [
          {
            q: "Why split data into train and test sets?",
            options: [
              "To make training faster",
              "To measure performance on unseen data",
              "To reduce file size",
              "It is optional and rarely done"
            ],
            answer: 1
          },
          {
            q: "In scikit-learn, what does .fit(X, y) do?",
            options: [
              "Saves the data to disk",
              "Trains the model on the data",
              "Draws a chart",
              "Deletes the model"
            ],
            answer: 1
          }
        ],
        practice: "Use scikit-learn to train a LogisticRegression on any small dataset and print the test accuracy."
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
        summary: "Machine Learning is programming by example instead of by rules.",
        whatYouLearn: [
          "How ML differs from traditional programming",
          "The three broad families of ML",
          "What 'features' and 'labels' mean"
        ],
        content: "In normal programming, a human writes the rules. In **Machine Learning**, you give the computer examples and it learns the rules itself.\nThe data has **features** (the inputs, e.g. square footage, location) and often a **label** (the answer, e.g. house price). The model learns the relationship between them.\nThere are three families: **supervised** (learn from labelled examples), **unsupervised** (find structure in unlabelled data), and **reinforcement** (learn from reward and trial-and-error).",
        code: undefined,
        realWorld: "A spam filter is ML: instead of hand-writing rules for every spam phrase, it learns from millions of emails labelled spam or not-spam.",
        commonMistakes: [
          "Thinking ML 'figures things out' on its own — it only learns patterns present in the data you give it."
        ],
        quiz: [
          {
            q: "How is ML different from traditional programming?",
            options: [
              "It runs without electricity",
              "It learns rules from examples instead of being hand-coded",
              "It never makes mistakes",
              "It does not use data"
            ],
            answer: 1
          }
        ],
        practice: "Pick a task (e.g. predicting if an email is spam) and list its likely features and label."
      },
      {
        slug: "supervised",
        title: "Supervised Learning",
        duration: "9 min",
        isPro: false,
        summary: "Learning from labelled examples — classification vs regression.",
        whatYouLearn: [
          "What labelled data is",
          "Classification vs regression",
          "Common algorithms for each"
        ],
        content: "**Supervised learning** uses data where each example has a known answer (label). The model learns to map inputs to those answers.\nThere are two kinds. **Classification** predicts a category — spam/not-spam, cat/dog, fraud/legit. **Regression** predicts a number — house price, temperature, sales.\nA quick test: if the answer is a label, it is classification; if it is a quantity, it is regression.",
        code: undefined,
        realWorld: "Predicting whether a transaction is fraud is classification; predicting how much a customer will spend next month is regression.",
        commonMistakes: [
          "Using a regression model when the target is actually a category (or vice versa)."
        ],
        quiz: [
          {
            q: "Predicting next month's revenue (a number) is...",
            options: [
              "Classification",
              "Regression",
              "Clustering",
              "Unsupervised"
            ],
            answer: 1
          },
          {
            q: "Supervised learning requires...",
            options: [
              "No data",
              "Labelled examples with known answers",
              "A human watching it constantly",
              "Only images"
            ],
            answer: 1
          }
        ],
        practice: "List five prediction tasks and label each as classification or regression."
      },
      {
        slug: "unsupervised",
        title: "Unsupervised Learning",
        duration: "8 min",
        isPro: false,
        summary: "Finding structure in data that has no labels.",
        whatYouLearn: [
          "What unsupervised learning is for",
          "Clustering with K-Means",
          "Dimensionality reduction with PCA"
        ],
        content: "**Unsupervised learning** works on data with no answers attached — the goal is to discover hidden structure.\n**Clustering** (e.g. K-Means) groups similar items together, like segmenting customers by behaviour. **Dimensionality reduction** (e.g. PCA) compresses many features into a few, useful for visualisation and speed.\nBecause there is no label, you judge results by usefulness, not accuracy.",
        code: undefined,
        realWorld: "Retailers cluster shoppers into segments (bargain hunters, loyalists, etc.) to target promotions — without anyone labelling the groups in advance.",
        commonMistakes: [
          "Expecting a single 'correct' answer — unsupervised results are interpretations, not exact truths."
        ],
        quiz: [
          {
            q: "K-Means is an example of...",
            options: [
              "Classification",
              "Clustering (unsupervised)",
              "Regression",
              "Reinforcement learning"
            ],
            answer: 1
          }
        ],
        practice: "Describe a dataset you could cluster and what useful groups you'd hope to find."
      },
      {
        slug: "split",
        title: "Train / Test Split",
        duration: "8 min",
        isPro: false,
        summary: "Why you must evaluate on data the model has never seen.",
        whatYouLearn: [
          "Why a test set is essential",
          "Typical split ratios",
          "What data leakage is"
        ],
        content: "If you test a model on the same data it trained on, it can simply memorise and look perfect — but fail on new data. So you **split** the data first.\nA common split is 80% **train**, 20% **test**. The model never sees the test set during training, so its test score estimates real-world performance.\nWatch out for **data leakage** — accidentally letting test information influence training (e.g. scaling using the whole dataset). It produces falsely high scores.",
        code: {
          language: "python",
          code: "from sklearn.model_selection import train_test_split\n\nXtr, Xte, ytr, yte = train_test_split(\n    X, y, test_size=0.2, random_state=42\n)"
        },
        realWorld: "A model that scores 99% on training data but 60% on the test set is overfitting — the split is what reveals it.",
        commonMistakes: [
          "Reporting the training-set score and calling it the model's accuracy."
        ],
        quiz: [
          {
            q: "Why hold out a test set?",
            options: [
              "To speed up training",
              "To measure performance on unseen data",
              "To save disk space",
              "Because the library forces it"
            ],
            answer: 1
          }
        ],
        practice: "Split any dataset 80/20 and note how the train and test accuracies differ."
      },
      {
        slug: "overfit",
        title: "Overfitting & Underfitting",
        duration: "9 min",
        isPro: false,
        summary: "The two ways a model fails — and how to fix each.",
        whatYouLearn: [
          "What overfitting and underfitting look like",
          "How to diagnose each",
          "Fixes like more data and regularisation"
        ],
        content: "**Overfitting** is memorising the training data, including its noise — great train score, poor test score. **Underfitting** is being too simple to capture the pattern — poor on both.\nDiagnose by comparing train vs test performance: a big gap means overfitting; both low means underfitting.\nFixes for overfitting: more data, a simpler model, or **regularisation** (penalising complexity). Fix for underfitting: a more capable model or better features.",
        code: undefined,
        realWorld: "A student who memorises past exam answers (overfit) aces practice papers but struggles with new questions — exactly how overfitting behaves.",
        commonMistakes: [
          "Judging a model only by training accuracy and missing that it overfit."
        ],
        quiz: [
          {
            q: "A model scores 99% on train but 65% on test. This is...",
            options: [
              "Underfitting",
              "Overfitting",
              "Perfect",
              "Data leakage only"
            ],
            answer: 1
          },
          {
            q: "Which helps reduce overfitting?",
            options: [
              "A more complex model",
              "More training data or regularisation",
              "Removing the test set",
              "Training for longer always"
            ],
            answer: 1
          }
        ],
        practice: "Explain overfitting vs underfitting using a real-life analogy of your own."
      },
      {
        slug: "eval",
        title: "Evaluation Metrics",
        duration: "9 min",
        isPro: false,
        summary: "Why accuracy can mislead — precision, recall, and the confusion matrix.",
        whatYouLearn: [
          "Why accuracy fails on imbalanced data",
          "Precision vs recall",
          "Reading a confusion matrix"
        ],
        content: "**Accuracy** (percent correct) is fine when classes are balanced, but misleading when they are not. If 99% of transactions are legit, a model that always says 'legit' is 99% accurate and totally useless.\n**Precision** asks: of the items flagged positive, how many really were? **Recall** asks: of all the real positives, how many did we catch? There is usually a trade-off between them.\nThe **confusion matrix** lays out true/false positives and negatives so you can see exactly where the model errs.",
        code: undefined,
        realWorld: "For cancer screening you favour high recall (catch every real case) even at the cost of some false alarms — accuracy alone would hide that.",
        commonMistakes: [
          "Trusting high accuracy on imbalanced data without checking precision and recall."
        ],
        quiz: [
          {
            q: "Why can accuracy mislead on imbalanced data?",
            options: [
              "It is always wrong",
              "A model can score high by ignoring the rare class",
              "It is slow to compute",
              "It needs images"
            ],
            answer: 1
          },
          {
            q: "Recall measures...",
            options: [
              "How fast the model runs",
              "Of all real positives, how many were caught",
              "The number of features",
              "Training time"
            ],
            answer: 1
          }
        ],
        practice: "For a fraud detector, argue whether precision or recall matters more and why."
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
        summary: "AI that creates new content rather than just classifying it.",
        whatYouLearn: [
          "How generative AI differs from predictive AI",
          "The main output types",
          "Why it exploded recently"
        ],
        content: "Traditional ML mostly **predicts or classifies** ('is this spam?'). **Generative AI** creates brand-new content — text, images, audio, video, and code.\nThe same core idea powers all of it: learn the patterns in a huge dataset, then sample new examples that fit those patterns.\nIt exploded because Transformers + massive data + cheap compute made the output genuinely useful, not just novel.",
        code: undefined,
        realWorld: "ChatGPT (text), Midjourney (images), and GitHub Copilot (code) are all generative AI built on the same underlying breakthrough.",
        commonMistakes: [
          "Assuming GenAI 'knows' facts — it generates plausible content and can be confidently wrong."
        ],
        quiz: [
          {
            q: "Generative AI is different because it...",
            options: [
              "Only classifies inputs",
              "Creates new content",
              "Cannot use neural networks",
              "Runs only offline"
            ],
            answer: 1
          }
        ],
        practice: "List three generative AI tools you've used and what type of content each creates."
      },
      {
        slug: "tokens",
        title: "Tokens & Embeddings",
        duration: "8 min",
        isPro: false,
        summary: "How models turn words into numbers they can compute on.",
        whatYouLearn: [
          "What a token is",
          "What embeddings represent",
          "Why this matters for cost and search"
        ],
        content: "Models do not see words — they see numbers. Text is first split into **tokens** (roughly word-pieces; 'studying' might be 'study' + 'ing').\nEach token is mapped to an **embedding**: a list of numbers (a vector) that captures meaning, so similar words sit close together in that number-space.\nTokens matter practically: APIs charge **per token**, and context limits are measured in tokens. Embeddings power semantic search and RAG.",
        code: undefined,
        realWorld: "Search that understands meaning ('cheap laptop' matching 'budget notebook') uses embeddings, not keyword matching.",
        commonMistakes: [
          "Confusing tokens with words — a token is usually smaller than a whole word."
        ],
        quiz: [
          {
            q: "An embedding is...",
            options: [
              "A picture of the text",
              "A vector of numbers capturing meaning",
              "A type of password",
              "The model's speed"
            ],
            answer: 1
          },
          {
            q: "Why do tokens matter practically?",
            options: [
              "They are decorative",
              "APIs charge per token and limit context by tokens",
              "They encrypt data",
              "They have no effect"
            ],
            answer: 1
          }
        ],
        practice: "Estimate how many tokens a 100-word paragraph is (hint: ~1.3 tokens per word)."
      },
      {
        slug: "transformers",
        title: "Transformers & Attention",
        duration: "10 min",
        isPro: false,
        summary: "The 2017 architecture behind every modern LLM.",
        whatYouLearn: [
          "What self-attention does",
          "Why Transformers beat older models",
          "The intuition, without the maths"
        ],
        content: "The **Transformer** (2017) is the architecture behind GPT, Claude, and Gemini. Its key idea is **self-attention**: when processing a word, the model looks at every other word in the input and weighs how relevant each is.\nThat lets it handle long-range context — understanding that 'it' refers to something mentioned ten words earlier.\nUnlike older sequential models, Transformers process all tokens in parallel, which is why they train so efficiently on modern hardware.",
        code: undefined,
        realWorld: "When a model correctly resolves 'The trophy didn't fit in the suitcase because it was too big' — knowing 'it' = trophy — that's attention at work.",
        commonMistakes: [
          "Thinking the model reads strictly left-to-right — attention lets it consider the whole context at once."
        ],
        quiz: [
          {
            q: "Self-attention lets a model...",
            options: [
              "Run without data",
              "Weigh the relevance of every other token",
              "Skip training",
              "Only read one word at a time"
            ],
            answer: 1
          }
        ],
        practice: "Write a sentence with an ambiguous pronoun and explain which words 'attention' must connect to resolve it."
      },
      {
        slug: "llm",
        title: "Inside an LLM",
        duration: "8 min",
        isPro: false,
        summary: "How a raw model becomes a helpful assistant: pretraining → SFT → RLHF.",
        whatYouLearn: [
          "What pretraining produces",
          "Supervised fine-tuning (SFT)",
          "Alignment with RLHF"
        ],
        content: "An LLM is built in stages. **Pretraining** on a huge chunk of the internet teaches it to predict the next token — giving broad knowledge but no manners.\n**Supervised fine-tuning (SFT)** then trains it on example conversations so it follows instructions. **RLHF** (Reinforcement Learning from Human Feedback) uses human preference ratings to make answers more helpful, honest, and safe.\nSo the 'personality' you talk to is the result of alignment layered on top of raw prediction.",
        code: undefined,
        realWorld: "The difference between a raw base model and ChatGPT is mostly SFT + RLHF — the alignment that makes it follow instructions politely.",
        commonMistakes: [
          "Believing the model 'looks up' answers — it generates them from learned patterns."
        ],
        quiz: [
          {
            q: "What does pretraining teach an LLM?",
            options: [
              "Good manners",
              "To predict the next token from huge text data",
              "To browse the web live",
              "To run on phones"
            ],
            answer: 1
          },
          {
            q: "RLHF is used to...",
            options: [
              "Compress the model",
              "Align answers using human preferences",
              "Translate languages only",
              "Speed up training"
            ],
            answer: 1
          }
        ],
        practice: "Summarise the three training stages of an LLM in one sentence each."
      },
      {
        slug: "diffusion",
        title: "Diffusion (Image Models)",
        duration: "8 min",
        isPro: false,
        summary: "How AI image generators turn noise into pictures.",
        whatYouLearn: [
          "The denoising idea behind diffusion",
          "How text guides the image",
          "Why prompts and seeds matter"
        ],
        content: "Image models like Stable Diffusion work by **denoising**. During training they learn to remove noise from images step by step.\nTo generate, they start from pure random **noise** and iteratively clean it up, guided by your text prompt, until a coherent image emerges.\nThe text prompt steers the direction, and a random **seed** sets the starting noise — same prompt + same seed gives the same image, which is handy for reproducibility.",
        code: undefined,
        realWorld: "When you tweak a prompt and the image changes dramatically, you're steering that denoising process toward a different result.",
        commonMistakes: [
          "Expecting identical images from the same prompt — the random seed changes the output unless you fix it."
        ],
        quiz: [
          {
            q: "Diffusion image models generate by...",
            options: [
              "Copying existing images",
              "Starting from noise and denoising toward the prompt",
              "Looking up images online",
              "Drawing pixel by pixel left to right"
            ],
            answer: 1
          }
        ],
        practice: "Write the same image prompt two ways (vague vs detailed) and predict which gives a more controlled result."
      },
      {
        slug: "rag",
        title: "RAG (Retrieval-Augmented Generation)",
        duration: "9 min",
        isPro: true,
        summary: "Give an LLM your own up-to-date, private knowledge.",
        whatYouLearn: [
          "Why RAG beats fine-tuning for facts",
          "The retrieve-then-generate flow",
          "What a vector database does"
        ],
        content: "LLMs only know what they were trained on, and they can't cite your private documents. **RAG** fixes this without retraining.\nThe flow: store your documents as **embeddings** in a **vector database**; when a question comes in, retrieve the most relevant chunks; paste them into the prompt; let the LLM answer using that context.\nRAG is how 'chat with your PDFs/company docs' products work — accurate, current, and grounded in sources.",
        code: undefined,
        realWorld: "A support bot that answers from your latest help-centre articles almost always uses RAG, not a fine-tuned model.",
        commonMistakes: [
          "Reaching for expensive fine-tuning when RAG would add fresh knowledge far more cheaply."
        ],
        quiz: [
          {
            q: "RAG works by...",
            options: [
              "Retraining the model on your data",
              "Retrieving relevant docs and adding them to the prompt",
              "Making the model bigger",
              "Deleting old knowledge"
            ],
            answer: 1
          },
          {
            q: "A vector database stores...",
            options: [
              "Raw images only",
              "Embeddings for fast semantic search",
              "Passwords",
              "The model's weights"
            ],
            answer: 1
          }
        ],
        practice: "Sketch a RAG pipeline for a chatbot that answers from your company's policy PDFs."
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
        summary: "An LLM that can take actions in a loop, not just chat.",
        whatYouLearn: [
          "How an agent differs from a chatbot",
          "The think-act-observe loop",
          "When agents are (and aren't) the right tool"
        ],
        content: "A chatbot only talks. An **agent** is an LLM wired to **tools** and run in a **loop**: it decides an action, takes it, observes the result, and decides again — until the goal is met.\nThis loop (think → act → observe) lets it do real work: search the web, query a database, send an email, run code.\nAgents shine for multi-step tasks with tools, but they add cost and unpredictability — for a single answer, a plain prompt is better.",
        code: undefined,
        realWorld: "A 'book me a flight' assistant that searches, compares, and fills a form is an agent; one that just lists tips is a chatbot.",
        commonMistakes: [
          "Building an agent for a task a single prompt could solve — it adds cost and failure modes."
        ],
        quiz: [
          {
            q: "What makes an AI system an 'agent'?",
            options: [
              "It is bigger than a chatbot",
              "It takes actions with tools in a loop",
              "It runs offline",
              "It only answers once"
            ],
            answer: 1
          }
        ],
        practice: "Describe a task you'd give an agent and list the tools it would need."
      },
      {
        slug: "tools",
        title: "Tool Use",
        duration: "8 min",
        isPro: false,
        summary: "How LLMs call functions via JSON schemas.",
        whatYouLearn: [
          "How tools are described to a model",
          "The request/response flow",
          "Designing good tool definitions"
        ],
        content: "You give the model a list of **tools**, each described as a JSON schema (name, what it does, and its parameters). The model can then choose to 'call' a tool by outputting structured arguments.\nYour code runs the actual function (e.g. fetch the weather), returns the result to the model, and the model uses it to answer.\nClear names and descriptions matter — the model decides when to use a tool based entirely on how you describe it.",
        code: {
          language: "json",
          code: "{\n  \"name\": \"get_weather\",\n  \"description\": \"Get current weather for a city\",\n  \"parameters\": {\n    \"city\": { \"type\": \"string\", \"description\": \"City name\" }\n  }\n}"
        },
        realWorld: "Every 'AI that can browse / run code / check your calendar' feature is built on tool calling like this.",
        commonMistakes: [
          "Writing vague tool descriptions, so the model calls the wrong tool or skips it."
        ],
        quiz: [
          {
            q: "How does an LLM know what a tool does?",
            options: [
              "It guesses randomly",
              "From the tool's name, description, and parameter schema",
              "By reading your source code",
              "It cannot use tools"
            ],
            answer: 1
          }
        ],
        practice: "Write a JSON tool definition for a function that sends an email (to, subject, body)."
      },
      {
        slug: "memory",
        title: "Memory",
        duration: "8 min",
        isPro: false,
        summary: "How agents remember within a task and across sessions.",
        whatYouLearn: [
          "Short-term vs long-term memory",
          "Why context windows fill up",
          "Using a vector store for recall"
        ],
        content: "**Short-term memory** is the conversation kept in the model's context window — but that window is limited, so long chats eventually drop older details.\n**Long-term memory** stores information outside the model, usually in a **vector store**, and retrieves the relevant bits when needed (the same idea as RAG).\nGood agents summarise old turns and pull back only what's relevant, instead of stuffing everything into the prompt.",
        code: undefined,
        realWorld: "An assistant that 'remembers' your preferences across days is using long-term memory, not just the current chat.",
        commonMistakes: [
          "Cramming the entire history into every prompt, blowing the context limit and the cost."
        ],
        quiz: [
          {
            q: "Long-term agent memory usually lives in...",
            options: [
              "The model's weights",
              "An external vector store, retrieved when needed",
              "The user's browser cache only",
              "Nowhere — agents can't remember"
            ],
            answer: 1
          }
        ],
        practice: "Decide which facts in a long support chat belong in short-term vs long-term memory."
      },
      {
        slug: "planning",
        title: "Planning (ReAct & Reflection)",
        duration: "9 min",
        isPro: false,
        summary: "How agents break big goals into steps and self-correct.",
        whatYouLearn: [
          "The ReAct pattern",
          "Reflection / self-critique",
          "Why planning reduces errors"
        ],
        content: "**ReAct** interleaves **Reason**ing and **Act**ions: the agent thinks about what to do, takes one step, reads the outcome, then re-plans. This beats trying to do everything in one shot.\n**Reflection** adds a self-check: after acting, the agent critiques its own progress and adjusts ('that search failed, try different terms').\nTogether these make agents more reliable on long tasks, though each extra step costs tokens and time.",
        code: undefined,
        realWorld: "A research agent that searches, notices a gap, and searches again is using ReAct + reflection rather than one giant guess.",
        commonMistakes: [
          "Letting an agent loop forever — always set a max-step limit."
        ],
        quiz: [
          {
            q: "The ReAct pattern combines...",
            options: [
              "Reading and Acting",
              "Reasoning and Acting in a loop",
              "Recording and Acting",
              "Reacting and Compiling"
            ],
            answer: 1
          }
        ],
        practice: "Outline the ReAct steps an agent would take to 'find and summarise three recent AI news stories'."
      },
      {
        slug: "copilot",
        title: "Building Agents in Practice",
        duration: "10 min",
        isPro: false,
        summary: "Frameworks and no-code platforms for shipping real agents.",
        whatYouLearn: [
          "Common agent frameworks",
          "No-code options like Copilot Studio",
          "How to choose an approach"
        ],
        content: "You rarely build an agent from scratch. **Code frameworks** (LangChain, the OpenAI Agents SDK, LlamaIndex) handle the loop, tool calling, and memory plumbing.\n**No-code platforms** like Microsoft **Copilot Studio** let teams build enterprise assistants visually with 'topics' (what to handle) and 'actions' (what to do), connected to business systems.\nChoose code for flexibility and control; choose no-code for speed and non-developers.",
        code: undefined,
        realWorld: "Many companies prototype an agent in a no-code tool, then rebuild the winning ones in code for control and cost.",
        commonMistakes: [
          "Reinventing the loop, tool-calling, and memory by hand when a framework already does it."
        ],
        quiz: [
          {
            q: "Why use an agent framework?",
            options: [
              "It writes your whole product for you",
              "It handles the loop, tool calling, and memory plumbing",
              "It removes all costs",
              "It is required by law"
            ],
            answer: 1
          }
        ],
        practice: "Decide whether a small internal HR assistant should be built code-first or no-code, and justify it."
      },
      {
        slug: "safety",
        title: "Agent Safety & Guardrails",
        duration: "8 min",
        isPro: true,
        summary: "Keeping autonomous agents from doing harm.",
        whatYouLearn: [
          "Prompt injection risks",
          "Human-in-the-loop approvals",
          "Limiting an agent's blast radius"
        ],
        content: "Agents act in the real world, so safety is essential. **Prompt injection** is the top risk: malicious text in a web page or document tricks the agent into ignoring its instructions.\nDefend with **least privilege** (give tools only the access they need), **human approval** for risky actions (sending money, deleting data), and input/output **validation**.\nAlways cap steps and scope so a confused agent can't cause large damage — limit the blast radius.",
        code: undefined,
        realWorld: "An agent reading emails could be hijacked by a hidden instruction in one message — which is why high-impact actions should require human sign-off.",
        commonMistakes: [
          "Giving an agent broad permissions and full autonomy on high-impact actions with no human check."
        ],
        quiz: [
          {
            q: "Prompt injection is when...",
            options: [
              "The model runs out of memory",
              "Malicious input tricks the agent into ignoring its instructions",
              "The agent is too slow",
              "Two agents talk to each other"
            ],
            answer: 1
          },
          {
            q: "A good guardrail for risky actions is...",
            options: [
              "Full autonomy",
              "Requiring human approval before executing",
              "Removing all tools",
              "Ignoring the risk"
            ],
            answer: 1
          }
        ],
        practice: "List three actions an agent should never take without explicit human approval."
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
        title: "Setup & Custom Instructions",
        duration: "5 min",
        isPro: false,
        summary: "Configure ChatGPT once so every answer fits you.",
        whatYouLearn: [
          "What custom instructions do",
          "What to put in them",
          "Why this beats repeating yourself"
        ],
        content: "Before prompting, set up **Custom Instructions** (Settings → Personalisation). They apply to every chat, so you stop repeating context.\nUse the first box to say who you are and what you do; use the second to set how you want answers — tone, length, format ('be concise, use bullet points, skip disclaimers').\nThis one-time setup quietly improves every future response.",
        code: undefined,
        realWorld: "A consultant who sets 'answer for a non-technical executive, max 5 bullets' gets boardroom-ready output by default.",
        commonMistakes: [
          "Leaving custom instructions blank and re-explaining your context in every single chat."
        ],
        quiz: [
          {
            q: "What do Custom Instructions do?",
            options: [
              "Apply your preferences to every chat automatically",
              "Make the model run faster",
              "Delete chat history",
              "Only work once"
            ],
            answer: 0
          }
        ],
        practice: "Write a 2-line custom instruction describing who you are and how you want answers."
      },
      {
        slug: "email",
        title: "Email Faster",
        duration: "7 min",
        isPro: false,
        summary: "Draft, reply to, and summarise email in seconds.",
        whatYouLearn: [
          "Controlling tone and length",
          "Summarising long threads",
          "Reusable email prompts"
        ],
        content: "Email is the easiest big win. Paste a message and ask for a reply with a clear spec: tone, length, and intent.\nFor long threads, ask for a summary plus the decision needed from you. For drafts, give bullet points and let it write the prose.\nThe trick is being specific — 'reply politely declining, under 60 words, offer to reconnect next quarter.'",
        code: {
          language: "text",
          code: "Reply to the email below. Tone: warm but firm.\nGoal: decline the meeting, suggest async notes instead.\nLength: under 70 words. Sign off as 'Mirza'."
        },
        realWorld: "Teams build a small library of email prompts (decline, follow-up, intro) and reuse them daily.",
        commonMistakes: [
          "Sending AI-drafted email without a quick read for accuracy and tone."
        ],
        quiz: [
          {
            q: "What makes an email prompt effective?",
            options: [
              "Keeping it vague",
              "Specifying tone, length, and goal",
              "Using all caps",
              "Asking for the longest reply"
            ],
            answer: 1
          }
        ],
        practice: "Take a real email and prompt for a reply specifying tone, goal, and a word limit."
      },
      {
        slug: "writing",
        title: "Writing & Editing",
        duration: "8 min",
        isPro: false,
        summary: "Use AI as a co-writer that keeps your voice.",
        whatYouLearn: [
          "Drafting vs editing with AI",
          "Preserving your voice",
          "Targeted edit prompts"
        ],
        content: "AI is strongest as an **editor**, not a ghost-writer. Write a rough draft yourself, then ask it to tighten, clarify, or restructure — while keeping your voice.\nTargeted instructions beat 'improve this': try 'cut 20%, keep my casual tone, fix only grammar' or 'make the opening punchier.'\nFor a blank page, ask for an outline first, then write into it.",
        code: {
          language: "text",
          code: "Tighten the text below by ~20%. Keep my casual voice,\nkeep all facts, and only fix grammar. Return just the edit."
        },
        realWorld: "Writers use AI to break writer's block with an outline, then do the real writing themselves and let AI polish.",
        commonMistakes: [
          "Letting AI rewrite everything until it sounds generic and loses your voice."
        ],
        quiz: [
          {
            q: "AI tends to be most reliable as a...",
            options: [
              "Full ghost-writer with no input",
              "Co-writer/editor that refines your draft",
              "Fact database",
              "Spell-checker only"
            ],
            answer: 1
          }
        ],
        practice: "Write a short paragraph, then prompt AI to cut it by 20% while keeping your tone."
      },
      {
        slug: "research",
        title: "Research Smartly",
        duration: "8 min",
        isPro: false,
        summary: "Speed up research without trusting blindly.",
        whatYouLearn: [
          "Structuring a research prompt",
          "Asking for sources and uncertainty",
          "Verifying key claims"
        ],
        content: "AI is great for getting oriented fast — overviews, pros/cons, what to ask next. But it can be confidently wrong, so treat it as a starting point.\nAlways ask it to **flag uncertainty** and, where possible, point you to source types to verify. Then check anything important against a reliable source.\nA good pattern: 'Give a balanced overview, list what's debated, and mark anything you're unsure about.'",
        code: undefined,
        realWorld: "Analysts use AI to draft a first map of a topic, then verify the load-bearing facts before relying on them.",
        commonMistakes: [
          "Trusting AI research output without verifying the important claims."
        ],
        quiz: [
          {
            q: "Why ask AI to mark uncertainty in research?",
            options: [
              "It speeds up the model",
              "It can be confidently wrong, so flagging helps you verify",
              "It is required by the API",
              "It reduces token cost"
            ],
            answer: 1
          }
        ],
        practice: "Research a topic with AI and fact-check its three main claims against reliable sources."
      },
      {
        slug: "plan",
        title: "Planning & Goals",
        duration: "7 min",
        isPro: false,
        summary: "Turn fuzzy goals into a concrete, scheduled plan.",
        whatYouLearn: [
          "Breaking goals into steps",
          "Using SMART criteria",
          "Getting a realistic schedule"
        ],
        content: "Give AI a goal and a deadline, and it will break it into steps. Make it useful with constraints: hours per week, your current level, and a deadline.\nAsk for a **week-by-week plan** with milestones, and have it apply **SMART** criteria (specific, measurable, achievable, relevant, time-bound).\nThen ask it to flag the riskiest step so you tackle it first.",
        code: {
          language: "text",
          code: "Goal: learn the basics of data analysis in 6 weeks.\nI have 5 hours/week and no background.\nGive a week-by-week SMART plan with one milestone each week."
        },
        realWorld: "People use this to turn vague resolutions ('get fit', 'learn AI') into a dated, step-by-step plan they actually follow.",
        commonMistakes: [
          "Asking for a plan with no constraints, so it's generic and unrealistic."
        ],
        quiz: [
          {
            q: "What makes an AI-generated plan more useful?",
            options: [
              "Giving constraints like time, level, and deadline",
              "Asking for as many steps as possible",
              "Leaving out the goal",
              "Requesting no milestones"
            ],
            answer: 0
          }
        ],
        practice: "Pick a goal and prompt AI for a 4-week SMART plan given your real weekly hours."
      },
      {
        slug: "meet",
        title: "Meeting Notes",
        duration: "6 min",
        isPro: false,
        summary: "Turn a transcript into a recap and action items.",
        whatYouLearn: [
          "Summarising transcripts",
          "Extracting action items with owners",
          "A reusable meeting prompt"
        ],
        content: "Paste a transcript (from your notes app or recorder) and ask for a structured recap: a short summary, key decisions, and **action items with owners and due dates**.\nThe value is in the structure — decisions and tasks pulled out so nothing slips. Ask for it in a format you can paste into Slack or a task tool.\nSave the prompt and reuse it after every meeting.",
        code: {
          language: "text",
          code: "Summarise the transcript below as:\n1) 3-bullet summary\n2) Decisions made\n3) Action items as 'owner - task - due date'"
        },
        realWorld: "Managers turn a messy 45-minute transcript into a clean recap and task list in under a minute.",
        commonMistakes: [
          "Asking only for a summary and missing the action items that drive follow-through."
        ],
        quiz: [
          {
            q: "The most valuable part of an AI meeting recap is usually...",
            options: [
              "A long paragraph summary",
              "Clear action items with owners and dates",
              "The word count",
              "Emojis"
            ],
            answer: 1
          }
        ],
        practice: "Take any meeting notes and prompt AI for a summary plus action items with owners."
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
        title: "AI Strategy",
        duration: "8 min",
        isPro: false,
        summary: "Find where AI actually creates value in your business.",
        whatYouLearn: [
          "Mapping your value chain for AI",
          "Spotting high-volume, error-tolerant tasks",
          "Avoiding 'AI for AI's sake'"
        ],
        content: "Good AI strategy starts with the business, not the technology. Map your **value chain** and look for steps that are **high-volume**, repetitive, and **tolerant of small errors** (where 90% accuracy with a human check is fine).\nThose are where AI pays off fastest — support triage, document summarising, drafting, lead scoring. Avoid high-stakes, zero-tolerance steps for early projects.\nThe goal is measurable business impact, not a flashy demo.",
        code: undefined,
        realWorld: "A company that automated first-line support replies (high volume, human-reviewed) saw faster wins than one chasing a moonshot autonomous agent.",
        commonMistakes: [
          "Adopting AI because it's trendy rather than because it solves a costly, repetitive problem."
        ],
        quiz: [
          {
            q: "Which task is the best early AI candidate?",
            options: [
              "Rare, zero-error-tolerance decisions",
              "High-volume, repetitive, error-tolerant work",
              "A task done once a year",
              "Anything, it doesn't matter"
            ],
            answer: 1
          }
        ],
        practice: "List three repetitive tasks in your work and rank them by volume and error tolerance."
      },
      {
        slug: "usecase",
        title: "Your First Use Case",
        duration: "8 min",
        isPro: false,
        summary: "Pick a narrow, measurable, safe project you can ship fast.",
        whatYouLearn: [
          "Criteria for a strong first project",
          "Why narrow beats ambitious",
          "Defining success up front"
        ],
        content: "Your first AI project should be **narrow, measurable, and safe**. Narrow so you can finish it; measurable so you can prove value; safe so a mistake won't be catastrophic.\nAim to ship something useful in about **6 weeks**. Define the success metric before you start (e.g. 'cut average reply time by 30%').\nA quick win builds momentum and credibility for bigger projects later.",
        code: undefined,
        realWorld: "Teams that ship one small, measurable win in 6 weeks get budget for the next project; teams that attempt a giant platform often stall.",
        commonMistakes: [
          "Starting with a huge, vague project instead of a narrow, shippable one."
        ],
        quiz: [
          {
            q: "A good first AI use case is...",
            options: [
              "Broad, vague, and long-term",
              "Narrow, measurable, and safe",
              "The riskiest possible task",
              "Whatever takes longest"
            ],
            answer: 1
          }
        ],
        practice: "Define one AI use case with a clear success metric you could ship in 6 weeks."
      },
      {
        slug: "roi",
        title: "Measuring ROI",
        duration: "7 min",
        isPro: false,
        summary: "Prove value with a baseline and a simple ROI formula.",
        whatYouLearn: [
          "Why you must baseline first",
          "The ROI formula",
          "Counting hidden costs"
        ],
        content: "You can't show improvement without a **baseline** — measure the current cost or time before you deploy AI.\nThen ROI is simple: **(value gained − cost) ÷ cost**. Value might be hours saved, revenue gained, or errors avoided.\nDon't forget hidden costs: API usage, integration, and ongoing oversight. A project that looks cheap can be costly once you count maintenance.",
        code: undefined,
        realWorld: "If an AI tool saves 200 hours/month at $40/hour ($8,000) and costs $2,000 to run, ROI = (8000-2000)/2000 = 300%.",
        commonMistakes: [
          "Skipping the baseline, so you can't actually prove the AI helped."
        ],
        quiz: [
          {
            q: "Why measure a baseline before deploying AI?",
            options: [
              "To slow the project down",
              "So you can prove the improvement afterward",
              "It is legally required",
              "It reduces API cost"
            ],
            answer: 1
          }
        ],
        practice: "Pick a task and estimate its current monthly cost (the baseline) in hours or dollars."
      },
      {
        slug: "vendors",
        title: "Choosing Vendors",
        duration: "8 min",
        isPro: false,
        summary: "How to compare AI providers and tools.",
        whatYouLearn: [
          "Build vs buy",
          "Key vendor criteria",
          "Data residency and lock-in"
        ],
        content: "Most companies should **buy or build on** existing models (OpenAI, Anthropic, Microsoft, Google) rather than train their own.\nCompare on: capability for your task, **price per use**, integrations with your stack, **data residency/privacy** (where data is processed), and reliability/SLAs.\nWatch for lock-in — prefer an abstraction layer so you can switch providers as prices and quality change.",
        code: undefined,
        realWorld: "A bank may pick a vendor offering EU data residency and enterprise contracts over a cheaper one that can't meet compliance.",
        commonMistakes: [
          "Choosing on price alone and ignoring data residency, integrations, and lock-in."
        ],
        quiz: [
          {
            q: "Which is a key vendor criterion beyond price?",
            options: [
              "Logo colour",
              "Data residency and privacy",
              "Office location only",
              "Number of employees"
            ],
            answer: 1
          }
        ],
        practice: "List the top three criteria you'd use to choose an AI vendor for your context."
      },
      {
        slug: "change",
        title: "Driving Adoption",
        duration: "7 min",
        isPro: false,
        summary: "Technology is easy; getting people to use it is the hard part.",
        whatYouLearn: [
          "Why adoption fails",
          "Using champions per team",
          "Training and feedback loops"
        ],
        content: "Most AI projects fail on **adoption**, not technology. People keep their old habits unless change is made easy and valuable to them.\nFind a **champion** in each team who'll model the new way and answer questions. Provide short, role-specific training, and create a feedback loop so users shape the tool.\nCelebrate early wins publicly — social proof drives adoption more than mandates.",
        code: undefined,
        realWorld: "A rollout with enthusiastic team champions reaches far higher usage than a top-down mandate with no support.",
        commonMistakes: [
          "Shipping a tool and assuming people will adopt it without training or champions."
        ],
        quiz: [
          {
            q: "What most often causes AI projects to fail?",
            options: [
              "The model is too smart",
              "Poor adoption by people",
              "Too much documentation",
              "Servers being too fast"
            ],
            answer: 1
          }
        ],
        practice: "Name one team in your org and who the AI 'champion' could be, and why."
      },
      {
        slug: "policy",
        title: "Governance & Policy",
        duration: "7 min",
        isPro: false,
        summary: "Set clear rules so AI is used safely and responsibly.",
        whatYouLearn: [
          "What an AI usage policy covers",
          "Data and privacy guardrails",
          "Keeping an audit trail"
        ],
        content: "An **AI usage policy** tells staff what's allowed: which tools are approved, what data may and may not be entered, and where human review is required.\nKey guardrails: never paste confidential or personal data into unapproved tools, label AI-generated content where appropriate, and require sign-off on high-stakes outputs.\nKeep an **audit trail** of important AI-assisted decisions so you can review and improve.",
        code: undefined,
        realWorld: "After an employee pasted source code into a public chatbot, many firms published clear AI policies listing approved tools and banned data types.",
        commonMistakes: [
          "Having no policy, so staff quietly use unapproved tools with sensitive data."
        ],
        quiz: [
          {
            q: "A core rule in most AI usage policies is...",
            options: [
              "Use any tool with any data",
              "Don't enter confidential data into unapproved tools",
              "Never use AI at all",
              "Hide all AI use"
            ],
            answer: 1
          }
        ],
        practice: "Draft three rules you'd include in an AI usage policy for your team."
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
        summary: "How a computer 'sees' a picture: pixels and channels.",
        whatYouLearn: [
          "What a pixel actually is",
          "RGB channels",
          "Why images are 3D grids of numbers"
        ],
        content: "To a computer, an image is just numbers. Each **pixel** holds a brightness value, and colour images have three **channels** — Red, Green, Blue — stacked together.\nSo an image is a **3D grid**: height × width × channels. A 224×224 colour photo is 224×224×3 numbers.\nEverything in computer vision is math on these grids (often stored as NumPy arrays or tensors).",
        code: undefined,
        realWorld: "When you crop or brighten a photo, an app is just doing arithmetic on this grid of pixel numbers.",
        commonMistakes: [
          "Forgetting that colour images have 3 channels, not 1."
        ],
        quiz: [
          {
            q: "A colour image is best described as...",
            options: [
              "A single number",
              "A 3D grid: height × width × colour channels",
              "A list of words",
              "An audio file"
            ],
            answer: 1
          }
        ],
        practice: "Work out how many numbers are in a 100×100 RGB image."
      },
      {
        slug: "filters",
        title: "Filters & Convolution",
        duration: "8 min",
        isPro: false,
        summary: "The core operation that detects edges and patterns.",
        whatYouLearn: [
          "What a convolution kernel is",
          "How filters detect features",
          "Why this is the building block of CNNs"
        ],
        content: "A **filter** (or kernel) is a small grid of numbers that slides across the image, multiplying and summing as it goes — this is **convolution**.\nDifferent kernels detect different things: one finds vertical edges, another blurs, another sharpens. The output highlights wherever that pattern appears.\nClassic vision hand-designed these filters; modern deep learning **learns** them from data instead.",
        code: undefined,
        realWorld: "The 'edge detect' and 'sharpen' options in photo editors are literally convolution filters.",
        commonMistakes: [
          "Thinking the network is hand-programmed with filters — in CNNs the filters are learned."
        ],
        quiz: [
          {
            q: "What does a convolution do?",
            options: [
              "Deletes the image",
              "Slides a small kernel across the image to detect patterns",
              "Compresses audio",
              "Sorts pixels alphabetically"
            ],
            answer: 1
          }
        ],
        practice: "Describe what an edge-detection filter would highlight in a photo of a building."
      },
      {
        slug: "cnns",
        title: "CNNs",
        duration: "9 min",
        isPro: false,
        summary: "Convolutional Neural Networks — the workhorse of image AI.",
        whatYouLearn: [
          "How CNNs stack convolution layers",
          "What pooling does",
          "Why early vs late layers differ"
        ],
        content: "A **CNN** stacks many convolution layers, each learning its own filters. **Pooling** layers shrink the image between steps, keeping the important signal and cutting computation.\nA beautiful pattern emerges: **early layers** learn simple features (edges, colours), **middle layers** learn parts (eyes, wheels), and **final layers** recognise whole objects.\nThis hierarchy is why CNNs are so effective at image classification.",
        code: undefined,
        realWorld: "AlexNet, the 2012 model that kicked off the deep-learning boom, was a CNN.",
        commonMistakes: [
          "Assuming every layer detects whole objects — early layers only see simple edges."
        ],
        quiz: [
          {
            q: "In a CNN, early layers typically detect...",
            options: [
              "Whole objects",
              "Simple features like edges",
              "Audio",
              "Nothing useful"
            ],
            answer: 1
          },
          {
            q: "Pooling layers mainly...",
            options: [
              "Add colour",
              "Shrink the data while keeping key signal",
              "Translate text",
              "Slow training down on purpose"
            ],
            answer: 1
          }
        ],
        practice: "Explain the early-to-late layer hierarchy of a CNN in your own words."
      },
      {
        slug: "detect",
        title: "Object Detection",
        duration: "9 min",
        isPro: false,
        summary: "Not just 'what' is in the image, but 'where'.",
        whatYouLearn: [
          "Classification vs detection",
          "Bounding boxes",
          "Why real-time detection matters"
        ],
        content: "Image **classification** says what an image contains. **Object detection** goes further: it locates each object with a **bounding box** and a label.\nModels like **YOLO** ('You Only Look Once') do this fast enough for video, drawing boxes around people, cars, and more in real time.\nThis powers self-driving perception, security cameras, and retail analytics.",
        code: undefined,
        realWorld: "A self-driving car uses object detection to box and track every nearby pedestrian and vehicle, frame by frame.",
        commonMistakes: [
          "Confusing classification (one label per image) with detection (boxes for many objects)."
        ],
        quiz: [
          {
            q: "Object detection adds what over classification?",
            options: [
              "Nothing",
              "The location (bounding box) of each object",
              "Sound",
              "A summary"
            ],
            answer: 1
          }
        ],
        practice: "List three products that rely on real-time object detection and why."
      },
      {
        slug: "clip",
        title: "CLIP (Text + Image)",
        duration: "9 min",
        isPro: false,
        summary: "Connecting images and language in one shared space.",
        whatYouLearn: [
          "How CLIP links text and images",
          "Zero-shot classification",
          "Why it powers image search and generators"
        ],
        content: "**CLIP** trains an image encoder and a text encoder together so that a picture and its description land near each other in the same **embedding** space.\nThat enables **zero-shot** classification — you can ask 'is this a cat or a dog?' without training on those specific labels — and powers text-to-image search.\nCLIP-style models are a key ingredient behind image generators and multimodal search.",
        code: undefined,
        realWorld: "Searching your photo library by typing 'beach sunset' uses CLIP-style image-text embeddings, not filenames.",
        commonMistakes: [
          "Thinking you must retrain for every new label — CLIP enables zero-shot recognition."
        ],
        quiz: [
          {
            q: "CLIP's key idea is to...",
            options: [
              "Only process text",
              "Put images and their text descriptions in one shared space",
              "Compress video",
              "Replace CNNs entirely"
            ],
            answer: 1
          }
        ],
        practice: "Describe how CLIP would let you search a photo album by a typed phrase."
      },
      {
        slug: "vision-llm",
        title: "Multimodal LLMs",
        duration: "7 min",
        isPro: false,
        summary: "Modern models that read images and text together.",
        whatYouLearn: [
          "What 'multimodal' means",
          "Common vision tasks for LLMs",
          "Practical uses like OCR and Q&A"
        ],
        content: "**Multimodal** LLMs (like GPT-4o and Gemini) accept images alongside text, so you can paste a screenshot, chart, or photo and ask questions about it.\nThey handle **OCR** (reading text in images), describing scenes, explaining diagrams, and answering visual questions — no separate vision pipeline needed.\nFor many everyday tasks, a multimodal LLM has replaced building a custom vision model.",
        code: undefined,
        realWorld: "Snapping a photo of a broken appliance and asking an AI what the part is — that's a multimodal LLM doing vision.",
        commonMistakes: [
          "Building a custom model for a simple task a multimodal LLM could already do."
        ],
        quiz: [
          {
            q: "A multimodal LLM can...",
            options: [
              "Only read text",
              "Understand images and text together",
              "Only generate audio",
              "Not use neural networks"
            ],
            answer: 1
          }
        ],
        practice: "List three tasks where pasting an image into a multimodal AI would save you time."
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
        summary: "How machines process human language — understanding vs generation.",
        whatYouLearn: [
          "What NLP covers",
          "NLU vs NLG",
          "Common NLP tasks"
        ],
        content: "**Natural Language Processing (NLP)** is the field of getting computers to work with human language — text and speech.\nIt splits into **NLU** (Natural Language Understanding): figuring out meaning, sentiment, and intent; and **NLG** (Natural Language Generation): producing fluent text.\nEveryday NLP tasks include translation, sentiment analysis, summarisation, search, and chatbots. Modern LLMs do many of these at once.",
        code: undefined,
        realWorld: "When your email flags a message as 'important' or drafts a smart reply, that's NLP at work.",
        commonMistakes: [
          "Assuming NLP only means chatbots — it also covers search, translation, and classification."
        ],
        quiz: [
          {
            q: "NLU and NLG refer to...",
            options: [
              "Two programming languages",
              "Understanding language vs generating language",
              "Two databases",
              "Network protocols"
            ],
            answer: 1
          }
        ],
        practice: "List three apps you use and label whether each leans on NLU, NLG, or both."
      },
      {
        slug: "tokens",
        title: "Tokenisation",
        duration: "7 min",
        isPro: false,
        summary: "Breaking text into the pieces a model actually processes.",
        whatYouLearn: [
          "Why text must be tokenised",
          "Sub-word tokenisation (BPE)",
          "How tokens affect cost and limits"
        ],
        content: "Before any NLP model can work, text is split into **tokens**. Splitting on whole words struggles with rare words and typos, so modern models use **sub-word** tokenisation like **BPE** (Byte-Pair Encoding).\nBPE breaks rare words into common pieces — 'tokenisation' might become 'token' + 'isation' — so the model handles anything, even new words.\nTokens are also the unit of cost and context limits in LLM APIs.",
        code: undefined,
        realWorld: "Emoji and rare names still 'work' in chatbots because sub-word tokenisers break them into known pieces.",
        commonMistakes: [
          "Assuming one token equals one word — sub-word tokens are usually smaller."
        ],
        quiz: [
          {
            q: "Why use sub-word tokenisation (BPE)?",
            options: [
              "It is slower on purpose",
              "It handles rare and new words by splitting them into common pieces",
              "It removes all punctuation",
              "It encrypts text"
            ],
            answer: 1
          }
        ],
        practice: "Guess how 'unbelievably' might be split into sub-word tokens."
      },
      {
        slug: "embed",
        title: "Word Embeddings",
        duration: "8 min",
        isPro: false,
        summary: "Turning words into vectors that capture meaning.",
        whatYouLearn: [
          "What embeddings represent",
          "How similarity is measured",
          "The famous king-queen analogy"
        ],
        content: "An **embedding** maps each word (or token) to a vector of numbers so that similar meanings sit close together in that space.\nThis lets you measure **similarity** mathematically — 'happy' is near 'glad', far from 'tractor'. Early methods like **word2vec** even captured analogies: king − man + woman ≈ queen.\nEmbeddings are the foundation of semantic search, recommendation, and RAG.",
        code: undefined,
        realWorld: "Product search that understands 'budget phone' matches 'cheap smartphone' thanks to embeddings.",
        commonMistakes: [
          "Treating embeddings as exact word lists rather than positions in a meaning-space."
        ],
        quiz: [
          {
            q: "Word embeddings place similar words...",
            options: [
              "Randomly",
              "Close together in a vector space",
              "In alphabetical order",
              "In separate files"
            ],
            answer: 1
          }
        ],
        practice: "Name two word pairs that should be close in embedding space and two that should be far apart."
      },
      {
        slug: "classify",
        title: "Text Classification",
        duration: "8 min",
        isPro: false,
        summary: "Sorting text into categories — the most common NLP task.",
        whatYouLearn: [
          "The classify pipeline",
          "Examples like spam and sentiment",
          "Why a labelled dataset matters"
        ],
        content: "**Text classification** assigns a label to a piece of text — spam/not-spam, positive/negative, ticket category.\nThe classic pipeline is: **tokenise → embed → classifier** (e.g. logistic regression). You train it on labelled examples.\nIt's everywhere because it's simple, fast, and useful — and you can often do it with a small model instead of a costly LLM.",
        code: {
          language: "python",
          code: "# sentiment classifier sketch\ntokens = tokenize(text)\nvector = embed(tokens)\nlabel = classifier.predict(vector)   # 'positive' or 'negative'"
        },
        realWorld: "Support desks auto-route tickets to the right team using text classification on the message body.",
        commonMistakes: [
          "Reaching for an LLM when a small, cheap classifier would handle high-volume sorting."
        ],
        quiz: [
          {
            q: "Spam detection is an example of...",
            options: [
              "Text generation",
              "Text classification",
              "Image detection",
              "Clustering"
            ],
            answer: 1
          }
        ],
        practice: "Pick a text-classification task and list the categories and the labelled data you'd need."
      },
      {
        slug: "ner",
        title: "Named Entity Recognition",
        duration: "7 min",
        isPro: false,
        summary: "Pulling structured facts (names, dates, places) out of text.",
        whatYouLearn: [
          "What NER extracts",
          "Classic tools vs LLM extraction",
          "Where it's used"
        ],
        content: "**Named Entity Recognition (NER)** finds and labels key items in text — people, organisations, dates, money, locations.\nClassic libraries like **spaCy** do this well and cheaply. Today you can also prompt an LLM to extract entities into a **JSON schema**, which is flexible for custom fields.\nNER turns unstructured text into structured data you can store and search.",
        code: {
          language: "text",
          code: "Extract entities as JSON: { people: [], orgs: [], dates: [] }\nText: 'Mirza joined StudyAI on 3 June 2026.'"
        },
        realWorld: "Resume parsers use NER to pull names, employers, and dates into a structured profile automatically.",
        commonMistakes: [
          "Using a huge LLM for simple, high-volume NER when a fast library would do."
        ],
        quiz: [
          {
            q: "NER is used to...",
            options: [
              "Generate new stories",
              "Extract entities like names, dates, and places from text",
              "Compress images",
              "Translate audio"
            ],
            answer: 1
          }
        ],
        practice: "Write one sentence and list the entities (people, orgs, dates) an NER system should extract."
      },
      {
        slug: "modern",
        title: "Modern NLP: Small Models vs LLMs",
        duration: "8 min",
        isPro: false,
        summary: "Choosing the right tool for cost, speed, and complexity.",
        whatYouLearn: [
          "When a small model wins",
          "When to use an LLM",
          "Balancing cost, speed, and accuracy"
        ],
        content: "LLMs are powerful but slow and costly. Many NLP tasks don't need them.\nFor **high-volume, well-defined** tasks (spam, sentiment, routing), a small fine-tuned model is faster and far cheaper. For **complex, open-ended** tasks (summarising nuanced text, answering varied questions), an LLM shines.\nA smart system often **routes**: a cheap model handles the easy 90%, and an LLM handles the hard cases.",
        code: undefined,
        realWorld: "A support tool might classify tickets with a tiny model and only call an LLM to draft replies for tricky ones — cutting cost dramatically.",
        commonMistakes: [
          "Defaulting to an expensive LLM for every task, including ones a small model handles cheaply."
        ],
        quiz: [
          {
            q: "For a high-volume, simple task you should usually prefer...",
            options: [
              "The largest LLM available",
              "A small, fast, cheaper model",
              "No model at all",
              "A different programming language"
            ],
            answer: 1
          },
          {
            q: "When does an LLM make most sense?",
            options: [
              "Simple, repetitive sorting",
              "Complex, open-ended language tasks",
              "Never",
              "Only for images"
            ],
            answer: 1
          }
        ],
        practice: "List two NLP tasks best done by a small model and two best done by an LLM, with reasons."
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
