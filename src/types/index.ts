/**
 * Central TypeScript type definitions for the portfolio application
 */

// Personal Information Types
export interface PersonalInfo {
  name: string;
  username: string;
  title: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  twitter: string;
  website: string;
  summary: string;
  bio: string;
  availability: string;
  stats: Stats;
}

export interface Stats {
  followers: number;
  following: number;
  stars: number;
  repositories: number;
  contributions: number;
}

// Skill Types
export interface Skill {
  name: string;
  level: string;
  years: number;
  projects: string[];
}

export interface Skills {
  languages: Skill[];
  frontend: Skill[];
  backend: Skill[];
  ai_ml: Skill[];
  databases: Skill[];
  cloud: Skill[];
  soft: string[];
}

// Repository Types
export interface RepositoryMetrics {
  commits: number;
  contributors: number;
  issues: number;
}

export interface Repository {
  name: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updated: string;
  url: string;
  topics: string[];
  technologies: string[];
  achievements: string[];
  metrics: RepositoryMetrics;
}

// Experience Types
export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  projects: string[];
}

// Education Types
export interface Education {
  institution: string;
  degree: string;
  period: string;            // time range or year(s) attended/completed
  awarded?: string;          // date when credential was awarded
  score?: string;            // final score or grade
  nqfLevel?: string;
  relevant_coursework: string[];
  achievements: string[];
}

// Portfolio Data Type
export interface PortfolioData {
  personalInfo: PersonalInfo;
  skills: Skills;
  repositories: Repository[];
  experience: Experience[];
  education: Education[];
  certifications: string[];
  interests: string[];
  goals: string[];
}

// Navigation Types
export interface NavItem {
  name: string;
  path: string;
}

// Component Prop Types
export interface PageWrapperProps {
  children: React.ReactNode;
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface IconProps {
  className?: string;
  size?: number;
}

// Route Types
export type RoutePath = '/' | '/about' | '/skills' | '/experience' | '/work-examples' | '/certifications' | '/repositories' | '/testimonials' | '/agent' | '/contact';

// Animation Types
export interface AnimationProps {
  initial?: object;
  animate?: object;
  exit?: object;
  transition?: object;
}
