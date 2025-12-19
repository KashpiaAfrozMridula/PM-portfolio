import { LucideIcon } from 'lucide-react';

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  highlights: string[];
}

export interface SkillCategory {
  title: string;
  description?: string;
  skills: string[];
  whyItMatters: string;
  icon: LucideIcon;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  outcome: string;
  content: {
    problem: string;
    approach: string;
    execution: string;
    results: string;
  };
}

export interface WorkflowStep {
  title: string;
  description: string;
}
