import { createRouter as createTanStackRouter } from '@tanstack/react-router';
import { routeTree } from './routeTree.gen';
import { Link } from 'lucide-react';
import { QueryClient } from '@tanstack/react-query';

export function getRouter() {
  const router = createTanStackRouter({
    routeTree, // Imported route tree from generated routes
    context: {
      queryClient: new QueryClient(), // TanStack Query client shared across router
    },
    scrollRestoration: true, // Restores scroll position on navigation
    defaultPreload: 'intent', // Preloads routes on hover/focus
    defaultPreloadStaleTime: 0, // Always refetch preloaded data when stale
    defaultNotFoundComponent: () => {
      // Fallback UI for unmatched routes
      return (
        <div>
          <p>Not found!</p>
          <Link to="/">Go home</Link>
        </div>
      );
    },
  });

  return router;
}
