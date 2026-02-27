import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/products/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div className="flex flex-col">
            Hello "/products/"!{' '}
            <Button className="bg-amber-400">Click me</Button>
        </div>
    )
}
