/**
 * Route constants for the portfolio application
 * Centralized route definitions to avoid magic strings
 */

export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  SKILLS: '/skills',
  EXPERIENCE: '/experience',
  EDUCATION: '/education',
  WORK_EXAMPLES: '/work-examples',
  CERTIFICATIONS: '/certifications',
  REPOSITORIES: '/repositories',
  TESTIMONIALS: '/testimonials',
  AGENT: '/agent',
  CONTACT: '/contact',
} as const;

export type RoutePath = typeof ROUTES[keyof typeof ROUTES];

export const NAV_ITEMS = [
  { name: 'Overview', path: ROUTES.HOME },
  { name: 'About Me', path: ROUTES.ABOUT },
  { name: 'Experience', path: ROUTES.EXPERIENCE },
  { name: 'Work Examples', path: ROUTES.WORK_EXAMPLES },
  { name: 'Education', path: ROUTES.EDUCATION },
  { name: 'Tech Skills', path: ROUTES.SKILLS },
  { name: 'Projects', path: ROUTES.REPOSITORIES },
  { name: 'Certifications', path: ROUTES.CERTIFICATIONS },
  { name: 'Testimonials', path: ROUTES.TESTIMONIALS },
  { name: 'Contact Me', path: ROUTES.CONTACT },
] as const;

export const DEFAULT_REDIRECT = ROUTES.HOME;
