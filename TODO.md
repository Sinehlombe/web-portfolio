# Clean Code Implementation Plan

## Phase 1: Type Definitions and Constants
- [ ] Create `src/types/index.ts` - Central TypeScript interfaces
- [ ] Create `src/constants/routes.ts` - Route constants
- [ ] Create `src/constants/theme.ts` - Theme constants

## Phase 2: Extract Inline Components
- [ ] Extract `PageWrapper` from App.tsx to `src/components/common/PageWrapper.tsx`
- [ ] Extract Contact page content from App.tsx to `src/components/Contact.tsx` (replace inline)

## Phase 3: Component Improvements
- [ ] Add prop types/interfaces to Navbar.tsx
- [ ] Add prop types/interfaces to Hero.tsx
- [ ] Add prop types/interfaces to ProfileSidebar.tsx

## Phase 4: Data Organization
- [ ] Create `src/types/data.ts` - Data type definitions
- [ ] Keep data.ts but add proper typing

## Phase 5: Custom Hooks and Utilities
- [ ] Create `src/hooks/usePortfolioData.ts` - Custom hook for data access
- [ ] Create `src/utils/helpers.ts` - Utility functions

## Phase 6: Error Handling
- [ ] Create `src/components/common/ErrorBoundary.tsx`
- [ ] Add ErrorBoundary to App.tsx

## Phase 7: Code Organization
- [ ] Create `src/components/common/` directory for shared components
- [ ] Organize exports with index files

## Implementation Order:
1. Create types and constants first (foundation)
2. Extract PageWrapper component
3. Extract Contact component
4. Add TypeScript interfaces to components
5. Add error boundary
6. Create custom hooks
