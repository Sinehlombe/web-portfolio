/**
 * Theme constants for the portfolio application
 * Centralized design tokens and color definitions
 */

export const COLORS = {
  // Brand Colors
  brand: {
    black: '#0d1117',
    dark: '#010409',
    green: '#2ea44f',
    neon: '#3fb950',
  },
  // Background Colors
  background: {
    primary: '#0d1117',
    secondary: '#161b22',
    tertiary: '#010409',
  },
  // Border Colors
  border: {
    default: '#30363d',
    hover: '#484f58',
  },
  // Text Colors
  text: {
    primary: '#ffffff',
    secondary: '#c9d1d9',
    muted: '#8b949e',
    link: '#58a6ff',
  },
  // Status Colors
  status: {
    success: '#2ea44f',
    warning: '#d29922',
    error: '#f85149',
    info: '#58a6ff',
  },
} as const;

export const SPACING = {
  xs: '0.25rem',
  sm: '0.5rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '3rem',
} as const;

export const FONT_SIZE = {
  xs: '0.75rem',
  sm: '0.875rem',
  base: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
} as const;

export const BORDER_RADIUS = {
  sm: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  full: '9999px',
} as const;

export const SHADOW = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
} as const;

export const TRANSITION = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
} as const;

// Contribution level colors for GitHub-style contribution graph
export const CONTRIBUTION_LEVELS = [
  { level: 0, color: '#161b22', border: '#30363d' },
  { level: 1, color: '#0e4429', border: '#0d2d1d' },
  { level: 2, color: '#006d32', border: '#0d2d1d' },
  { level: 3, color: '#26a641', border: '#0d2d1d' },
  { level: 4, color: '#39d353', border: '#0d2d1d' },
] as const;

export const SKILL_LEVELS = {
  Beginner: 20,
  Intermediate: 40,
  Advanced: 70,
  Expert: 90,
} as const;

export const PROJECT_CATEGORIES = [
  'AI/ML',
  'Web Development',
  'Mobile',
  'Backend',
  'DevOps',
  'Data Science',
] as const;
