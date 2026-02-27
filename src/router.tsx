import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { Link } from 'lucide-react'
import { QueryClient } from '@tanstack/react-query'

export function getRouter() {
    const router = createTanStackRouter({
        routeTree,
        context: {
            queryClient: new QueryClient(),
        },
        scrollRestoration: true,
        defaultPreload: 'intent',
        defaultPreloadStaleTime: 0,
        defaultNotFoundComponent: () => {
            return (
                <div>
                    <p>Not found!</p>
                    <Link to="/">Go home</Link>
                </div>
            )
        },
    })

    return router
}
