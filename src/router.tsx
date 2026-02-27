import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { Link } from 'lucide-react'

export function getRouter() {
    const router = createTanStackRouter({
        routeTree,

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
