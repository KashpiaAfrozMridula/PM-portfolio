import { Terminal, Shield, Database, LayoutTemplate, Zap, BarChart3, Globe, Cpu } from 'lucide-react';
import { ExperienceItem, SkillCategory, CaseStudy, WorkflowStep } from './types';

export const HERO_CONTENT = {
  name: "Kashpia Afroz Mridula",
  headline: "Product Strategist & AI-Focused Builder.",
  subheadline: "Turning concepts into validated, scalable products by combining an engineering foundation with data-driven execution and user insights.",
  stats: [
    { label: "Experience", value: "4+ Years", sub: "Product & Engineering" },
    { label: "Impact", value: "30K+", sub: "Active Users Scaled" },
    { label: "Capital", value: "$100K+", sub: "Funding Raised" },
  ]
};

export const ABOUT_CONTENT = {
  whoIAm: [
    "I am a Product Strategist with an engineering background (B.Sc., University of Dhaka) and hands-on experience in early-stage startup operations.",
    "My work sits at the intersection of AI technology and human-centered design. I don't just manage backlogs; I translate founder vision into technical reality.",
    "Previously, I co-founded an AI SaaS venture and led applied research with Dalberg and BRAC."
  ],
  philosophy: [
    "A product manager must be bilingual: fluent in both business strategy and engineering constraints.",
    "I believe in 'Delivery over Deliberation'. I structure sprints, milestones, and rituals to reduce friction and increase velocity.",
    "Data informs the direction, but empathy drives the design. I build products that solve real problems for real people."
  ],
  whyMe: [
    "I bridge the gap between 'Founder Vision' and 'Engineering Execution'.",
    "I bring deep technical literacy (RAG, SOC2, APIs) to product decisions.",
    "I have proven experience scaling teams (25+) and products (30K+ users)."
  ]
};

export const SKILLS_CONTENT: SkillCategory[] = [
  {
    title: "AI & Systems",
    icon: Cpu,
    skills: [
      "OpenAI APIs & LLM Productization",
      "RAG Systems & Prompt Engineering",
      "AI Workflow Automation",
      "Scalable Architecture Design"
    ],
    whyItMatters: "I build AI products that are technically feasible and market-ready."
  },
  {
    title: "Backend & Infrastructure",
    icon: Database,
    skills: [
      "MERN Stack, Django, REST APIs",
      "PostgreSQL & Database Design",
      "AWS & DevOps Basics",
      "Infrastructure Scaling"
    ],
    whyItMatters: "I speak the engineers' language, preventing costly scope creep."
  },
  {
    title: "Security & Compliance",
    icon: Shield,
    skills: [
      "SOC 2 Compliance Management",
      "Secure API Design",
      "Authentication & Access Control",
      "Data Privacy Standards"
    ],
    whyItMatters: "I ensure products are enterprise-ready and secure from day one."
  },
  {
    title: "Product Management",
    icon: LayoutTemplate,
    skills: [
      "Product Strategy & Roadmapping",
      "GTM & A/B Testing",
      "Metrics & KPI Alignment",
      "User Research & Insight Generation"
    ],
    whyItMatters: "I focus on outcomes (retention, CAC, velocity) over outputs."
  }
];

export const EXPERIENCE_CONTENT: ExperienceItem[] = [
  {
    role: "AI Product Manager",
    company: "Askturing.ai",
    period: "Sept 2025 – Present",
    highlights: [
      "Own end-to-end product definition by translating founder vision into clear PRDs.",
      "Reduced delivery friction by 40% by bridging design, engineering, and stakeholders.",
      "Increased sprint velocity by 25% through structured delivery rituals.",
      "Scaled a 25-member global AI product team managing SOC2 compliant architecture."
    ]
  },
  {
    role: "Co-Founder & CTO",
    company: "Edvive",
    period: "Feb 2021 – Aug 2023",
    highlights: [
      "Promoted from Intern to CTO in 2 years, leading 20+ engineers.",
      "Led AI roadmap, growing platform to 30K+ active users.",
      "Increased retention by 40% and lowered CAC by 30%.",
      "Raised $100K+ and successfully scaled product operations."
    ]
  },
  {
    role: "External Researcher",
    company: "Dalberg x BRAC",
    period: "2025",
    highlights: [
      "Led research on bridging the Digital Finance Gap for Female RMG Workers.",
      "Conducted 50+ interviews and focus groups to inform financial inclusion strategy.",
      "Designed localized tools to improve data accuracy and engagement."
    ]
  },
  {
    role: "Researcher",
    company: "Userhub — UX Research Lab",
    period: "2022 – 2023",
    highlights: [
      "Revealed an 80% curriculum-language mismatch through mixed-methods research.",
      "Led interviews, surveys, and qualitative coding (Atlas.ti).",
      "Co-authored peer-reviewed paper (DOI: 10.58947/journal.svfz89) shaping UX strategies."
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    title: "Scaling Edvive to 30K Users",
    subtitle: "Growth & Retention",
    outcome: "Retention ↑ 40% | CAC ↓ 30%",
    content: {
      problem: "Initial traction was good, but churn was high due to static learning paths that failed to engage users long-term.",
      approach: "Pivoted to a conversational AI model. We utilized user data to create adaptive learning paths that adjusted to individual proficiency.",
      execution: "Led the engineering team to build the recommendation engine and automated language learning features. Optimized the onboarding flow based on A/B testing.",
      results: "Grew to 30K+ active users, increased retention by 40%, and secured $100K+ in pre-seed funding."
    }
  },
  {
    id: "cs2",
    title: "SOC2 Compliant AI Architecture",
    subtitle: "Askturing.ai Infrastructure",
    outcome: "Velocity ↑ 25% | Friction ↓ 40%",
    content: {
      problem: "Askturing needed to serve enterprise clients requiring Private AI with RAG facilities, but the existing infrastructure wasn't SOC2 compliant or scalable.",
      approach: "Defined a strict technical roadmap focusing on security (Authentication, Access Control) and infrastructure scaling on AWS.",
      execution: "Translated complex compliance requirements into actionable engineering tasks. Structured sprints to handle technical debt alongside new feature development.",
      results: "Successfully delivered a SOC2 compliant platform, reduced delivery friction by 40%, and scaled the team to 25 members."
    }
  },
  {
    id: "cs3",
    title: "Bridging the Digital Gap",
    subtitle: "User Research @ Dalberg x BRAC",
    outcome: "50+ Deep Interviews | Strategic Insight",
    content: {
      problem: "Female RMG workers faced significant barriers to accessing digital financial services, but the specific friction points were unknown.",
      approach: "Adopted a human-centered research methodology involving localized tools and direct engagement to bypass literacy barriers.",
      execution: "Conducted over 50 interviews and focus groups across Nairobi, Mumbai, and Dhaka to gather qualitative data.",
      results: "Delivered key insights that informed the financial inclusion strategy for over 1M+ women, validating the need for voice-assisted interfaces."
    }
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  { title: "Discover", description: "Market needs & User Data" },
  { title: "Define", description: "PRDs & Technical Scope" },
  { title: "Build", description: "Agile Sprints & Unblocking" },
  { title: "Measure", description: "KPIs & User Feedback" },
  { title: "Iterate", description: "Scaling & Optimization" },
];
