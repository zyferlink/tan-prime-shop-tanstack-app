import { Button } from '@/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
    return (
        <main className="bg-white px-4 pb-8 pt-14">
            <section className="text-black">
                Main Page <Button className="bg-amber-400">Click me</Button>
            </section>
        </main>
    )
}
