/**
 * Portfolio Data Configuration for Mayank Singh Chauhan
 * All profile data, projects, skills, certifications, and timeline items are centralized here for easy updates.
 */

export const portfolioData = {
  personal: {
    name: "Mayank Singh Chauhan",
    shortName: "Mayank",
    navLogo: "<MS/>",
    role: "B.Tech AI & ML Student | Aspiring AI/ML Developer | Programmer",
    tagline: "Building the Future with AI & Technology.",
    statusBadge: "Currently Learning & Building",
    bio: "I’m a passionate Artificial Intelligence & Machine Learning student who enjoys programming, building real-world projects, exploring AI technologies and continuously improving my problem-solving skills.",
    college: "Axis College / Axis Institute of Technology and Management",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    yearSpan: "2025–Present",
    currentYear: "2nd Year B.Tech AI & ML Student",
    location: "Uttar Pradesh, India",
    email: "mayanksinghchauhan.dev@gmail.com",
    githubUsername: "mayanksinghchauhan",
    githubUrl: "https://github.com/mayanksinghchauhan",
    linkedinUrl: "https://linkedin.com/in/mayanksinghchauhan",
    instagramUrl: "https://instagram.com/mayanksinghchauhan_dev"
  },

  stats: [
    { number: 2, suffix: "+", label: "Years Learning", description: "Dedicated computer science & AI study" },
    { number: 10, suffix: "+", label: "Projects & Experiments", description: "Web apps, AI agents & code models" },
    { number: 8, suffix: "+", label: "Technologies", description: "Languages, frameworks & AI tools" },
    { number: "∞", suffix: "", label: "Curiosity", description: "Driven by passion for innovation" }
  ],

  aboutHighlights: [
    "2nd-year B.Tech AI & ML student",
    "Programming enthusiast (C, C++, Python, Java)",
    "AI/ML learner & practitioner",
    "Web developer creating modern interfaces",
    "Active problem solver on coding platforms",
    "Project builder exploring real-world AI applications",
    "Technology explorer fascinated by LLMs & AI Agents"
  ],

  skillCategories: [
    {
      id: "programming",
      name: "Programming",
      description: "Core computer science languages & data structures",
      skills: [
        { name: "C", level: "Intermediate", icon: "c-lang", desc: "Low-level system concepts, memory management & pointer logic" },
        { name: "C++", level: "Intermediate", icon: "cpp", desc: "Object-oriented programming, STL, and algorithmic problem solving" },
        { name: "Python", level: "Intermediate", icon: "python", desc: "Primary language for AI/ML scripts, automation & data handling" },
        { name: "Java", level: "Learning", icon: "java", desc: "OOP design principles, cross-platform development & syntax" }
      ]
    },
    {
      id: "webdev",
      name: "Web Development",
      description: "Frontend interfaces & web architecture",
      skills: [
        { name: "HTML", level: "Intermediate", icon: "html5", desc: "Semantic structure, accessibility standard & clean markup" },
        { name: "CSS", level: "Intermediate", icon: "css3", desc: "Modern layouts, Flexbox/Grid, animations & glassmorphism" },
        { name: "JavaScript", level: "Intermediate", icon: "javascript", desc: "ES6+, DOM manipulation, async APIs & client-side interactive logic" }
      ]
    },
    {
      id: "aiml",
      name: "AI / ML",
      description: "Artificial Intelligence foundation & intelligent systems",
      skills: [
        { name: "Artificial Intelligence", level: "Learning", icon: "ai", desc: "Core AI concepts, state search, logic & intelligent decision systems" },
        { name: "Machine Learning", level: "Learning", icon: "ml", desc: "Supervised/unsupervised algorithms, regression & classification fundamentals" },
        { name: "Generative AI", level: "Exploring", icon: "genai", desc: "Large language models, prompt workflows & multimodal generation" },
        { name: "AI Agents", level: "Exploring", icon: "agent", desc: "Autonomous task execution, function calling & workflow loops" },
        { name: "Prompt Engineering", level: "Intermediate", icon: "prompt", desc: "System prompting, context optimization & structured LLM outputs" }
      ]
    }
  ],

  projects: [
    {
      id: "study-hub",
      category: "AI/ML",
      title: "AI Digital Study Hub",
      badge: "Featured AI App",
      shortDesc: "An AI-powered study platform designed to help students organize learning resources, improve productivity and interact with intelligent study assistance.",
      longDesc: "The AI Digital Study Hub is a comprehensive smart dashboard crafted specifically for engineering students. It features automated study schedule generation, resource bookmarking, note summarization using AI APIs, interactive flashcards, and an embedded study assistant bot for instant concept clarification.",
      technologies: ["HTML", "CSS", "JavaScript", "AI/API"],
      githubUrl: "https://github.com/mayanksinghchauhan/ai-digital-study-hub",
      liveUrl: "https://mayanksinghchauhan.github.io/ai-digital-study-hub",
      features: [
        "Interactive AI Chat Assistant for homework & concept queries",
        "Smart Resource Categorizer & Bookmark Manager",
        "Pomodoro Focus Timer with ambient sound generator",
        "Automated Summary Generator for long lecture notes"
      ],
      type: "AI / Web Application"
    },
    {
      id: "banking-agent",
      category: "AI/ML",
      title: "AI Banking Agent",
      badge: "Security & NLP Concept",
      shortDesc: "An AI banking assistant concept focused on secure account management, intelligent interaction and policy-based transaction verification.",
      longDesc: "A futuristic AI-driven banking assistant interface designed with conversational NLP and security controls. It simulates fraud detection alerts, natural language query processing for transactions, balance projections, and rule-based verification loops.",
      technologies: ["AI", "NLP", "APIs", "Cybersecurity"],
      githubUrl: "https://github.com/mayanksinghchauhan/ai-banking-agent",
      liveUrl: "https://mayanksinghchauhan.github.io/ai-banking-agent",
      features: [
        "NLP-powered financial inquiry processing",
        "Simulated multi-factor authentication & policy verification",
        "Intelligent spend categorization & predictive analytics dashboard",
        "Role-based security event audit logging"
      ],
      type: "FinTech AI Concept"
    },
    {
      id: "personal-portfolio",
      category: "Web",
      title: "Personal Portfolio",
      badge: "Interactive Web",
      shortDesc: "A modern interactive portfolio showcasing my skills, projects, certifications and learning journey.",
      longDesc: "Built from scratch with modern CSS glassmorphism, native ES Modules, 60fps HTML5 Canvas background visualizer, 3D card tilt physics, dark/light theme engine, and data-driven modular architecture.",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/mayanksinghchauhan/portfolio",
      liveUrl: "#",
      features: [
        "Real-time 2D/3D Canvas Neural Network visualizer",
        "Zero-dependency 3D card tilt & count-up animations",
        "Data-driven centralized JSON configuration",
        "Fully accessible, dark/light mode with localStorage"
      ],
      type: "Frontend Portfolio"
    },
    {
      id: "neural-vision-classifier",
      category: "AI/ML",
      title: "Neural Vision Predictor",
      badge: "ML Vision Concept",
      shortDesc: "Experimental image classification & computer vision playground testing model inference logic in JavaScript & Python.",
      longDesc: "A browser-based demonstration environment testing lightweight image preprocessing pipelines, bounding box visualizers, and confidence score displays for object detection.",
      technologies: ["Python", "JavaScript", "AI/ML", "Canvas"],
      githubUrl: "https://github.com/mayanksinghchauhan/neural-vision-predictor",
      liveUrl: "https://mayanksinghchauhan.github.io/neural-vision-predictor",
      features: [
        "Client-side image canvas preprocessing",
        "Confidence score meter & bounding box rendering",
        "Sample dataset testing panel"
      ],
      type: "Computer Vision Lab"
    },
    {
      id: "algo-code-solver",
      category: "JavaScript",
      title: "Smart Algorithmic Code Visualizer",
      badge: "CS Fundamentals",
      shortDesc: "Interactive visualizer for fundamental C++ and Data Structures algorithms (Sorting, Searching, Node Trees).",
      longDesc: "An educational web tool that animates sorting algorithms step-by-step to visualize memory swaps, pointer movements, and time complexity in real time.",
      technologies: ["JavaScript", "HTML", "CSS", "C++ Logic"],
      githubUrl: "https://github.com/mayanksinghchauhan/algo-visualizer",
      liveUrl: "https://mayanksinghchauhan.github.io/algo-visualizer",
      features: [
        "Step-by-step array sorting animation (Bubble, Quick, Merge)",
        "Adjustable animation speed & array size control",
        "Time & space complexity breakdown side-panel"
      ],
      type: "Web Educational Tool"
    }
  ],

  aiLabCards: [
    {
      id: "ai-core",
      icon: "🤖",
      title: "Artificial Intelligence",
      subtitle: "State Search & Logic Models",
      desc: "Exploring rule-based systems, heuristic search algorithms, decision trees, and intelligent agent architectures.",
      tags: ["Heuristics", "Search Trees", "Decision Logic"]
    },
    {
      id: "ml-foundations",
      icon: "🧠",
      title: "Machine Learning",
      subtitle: "Supervised & Unsupervised Learning",
      desc: "Studying mathematical foundations of ML, gradient descent, linear regression, classification algorithms, and feature engineering.",
      tags: ["Scikit-Learn", "Regression", "Data Cleaning"]
    },
    {
      id: "gen-ai",
      icon: "✨",
      title: "Generative AI",
      subtitle: "LLMs & Prompt Architecture",
      desc: "Experimenting with prompt engineering strategies, zero/few-shot prompting, and integrating Large Language Models into user workflows.",
      tags: ["System Prompts", "LLM APIs", "Structured Outputs"]
    },
    {
      id: "ai-agents",
      icon: "🔗",
      title: "AI Agents",
      subtitle: "Autonomous Reasoning Loops",
      desc: "Investigating agent loop patterns (Plan -> Act -> Observe), tool calling capabilities, and automated task execution pipelines.",
      tags: ["Tool Use", "Reasoning Loops", "Workflows"]
    },
    {
      id: "apis-automation",
      icon: "⚡",
      title: "APIs & Automation",
      subtitle: "Gemini API & System Integration",
      desc: "Building lightweight web bridges to connect frontend applications with cloud AI APIs, RESTful JSON streams, and automation scripts.",
      tags: ["Gemini API", "REST APIs", "Async Fetch"]
    },
    {
      id: "cybersecurity-ai",
      icon: "🔐",
      title: "Cybersecurity & Safety",
      subtitle: "AI Verification & Policy Rules",
      desc: "Exploring safe AI usage, input sanitization, prompt injection defenses, and policy-based transaction verification.",
      tags: ["Input Sanitation", "Policy Guards", "Data Safety"]
    }
  ],

  educationTimeline: [
    {
      year: "2025",
      title: "Started B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Axis College / Axis Institute of Technology and Management",
      desc: "Admitted into 4-year B.Tech program. Built strong foundation in Mathematics, C Programming, Object-Oriented paradigms, and Computer Science core principles."
    },
    {
      year: "2026",
      title: "2nd Year — Building Projects & Expanding Technical Skills",
      institution: "Axis College / Axis Institute of Technology and Management",
      desc: "Deepening knowledge in Data Structures, Python for AI/ML, Web Development, and building real-world AI applications and agent prototypes."
    },
    {
      year: "Future",
      title: "AI/ML Development → Advanced Projects → Industry Experience",
      institution: "Career & Research Roadmap",
      desc: "Aiming to master deep learning frameworks (PyTorch/TensorFlow), deploy production AI microservices, contribute to open source, and secure high-impact AI engineering roles."
    }
  ],

  certifications: [
    {
      id: "cert-python",
      title: "Python Essentials",
      issuer: "Cisco / Python Institute",
      year: "2025",
      status: "Verified",
      icon: "python-cert",
      desc: "Covers Python fundamentals, data structures, functions, file handling, and object-oriented programming.",
      link: "#"
    },
    {
      id: "cert-html",
      title: "HTML & Modern Web Foundations",
      issuer: "FreeCodeCamp / Open Certification",
      year: "2025",
      status: "Verified",
      icon: "web-cert",
      desc: "Semantic HTML5 layout, web accessibility standards (WCAG), responsive design structures, and DOM semantics.",
      link: "#"
    },
    {
      id: "cert-adobe",
      title: "Adobe Digital Marketing / Tech Foundations",
      issuer: "Adobe Certified Foundations",
      year: "2025",
      status: "Completed",
      icon: "adobe-cert",
      desc: "Digital media strategy, UI design principles, typography, visual hierarchy, and interactive web aesthetics.",
      link: "#"
    },
    {
      id: "cert-nptel",
      title: "NPTEL / SWAYAM AI Coursework",
      issuer: "NPTEL Govt. of India",
      year: "2026",
      status: "In Progress / Active",
      icon: "nptel-cert",
      desc: "Academic certification program focusing on Artificial Intelligence search techniques, logic, and problem solving.",
      link: "#"
    },
    {
      id: "cert-future",
      title: "Future AI/ML Specializations",
      issuer: "DeepLearning.AI / Coursera",
      year: "Target 2026",
      status: "Planned",
      icon: "future-cert",
      desc: "Upcoming focus on Machine Learning Specialization, Neural Networks, and Deep Learning applications.",
      link: "#"
    }
  ],

  learningJourney: [
    { step: "01", name: "Programming Fundamentals", desc: "Logic building, flowcharts, variables & loops", status: "completed" },
    { step: "02", name: "C / C++ / Java", desc: "Pointers, memory, OOP & Data Structures", status: "completed" },
    { step: "03", name: "Python", desc: "Data manipulation, OOP, libraries & scripting", status: "completed" },
    { step: "04", name: "Web Development", desc: "HTML5, CSS3 glassmorphic design & ES6+ JS", status: "completed" },
    { step: "05", name: "APIs & GitHub", desc: "Git workflows, REST integration & version control", status: "active" },
    { step: "06", name: "Artificial Intelligence", desc: "Search algorithms, state graphs & heuristic models", status: "active" },
    { step: "07", name: "Machine Learning", desc: "Regression, classification & model evaluation", status: "in-progress" },
    { step: "08", name: "AI Projects", desc: "Building full-stack AI agents & smart study apps", status: "in-progress" },
    { step: "09", name: "Future AI Engineer", desc: "Industry specialization, production LLMs & neural systems", status: "goal" }
  ]
};
