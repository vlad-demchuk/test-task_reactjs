/**
 * Application route paths
 *
 * Centralized location for all application route paths.
 * Use this instead of hardcoding path strings throughout the application.
 */

export const routePaths = {
  // Main routes
  home: '/',
  about: '/about',
  users: '/users',
  userById: 'users/:userId',

  // Fallback routes
  notFound: '*',
} as const;

export const pathToTitle: Record<string, string> = {
  [routePaths.about]: 'About',
  [routePaths.users]: 'Users',
} as const;
