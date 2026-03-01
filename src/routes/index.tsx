import { ProductCard } from '@/components/ProductCard';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { createFileRoute, Link } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';
import { ArrowRightIcon } from 'lucide-react';

const fetchProductsFn = createServerFn({ method: 'GET' }).handler(async () => {
  const { getRecommendedProducts } = await import('@/data/products');
  const products = await getRecommendedProducts();
  return products;
});

export const Route = createFileRoute('/')({
  component: App,
  loader: async () => {
    // This runs on server during SSR AND on client during navigation
    return fetchProductsFn();
  },
});

async function App() {
  const products = Route.useLoaderData();

  console.log('--client products--', products);
  return (
    <div className="space-y-8">
      <section>
        <Card className="p-8 shadow-md bg-white/80 ">
          <CardTitle>
            <p className="text-sm w-fit font-semibold text-center uppercase tracking-wide text-blue-600">
              Your favourite e-commerce store
            </p>
          </CardTitle>

          <CardDescription className="text-slate-900 dark:text-white max-w-3xl">
            <div className="flex sm:flex-row flex-col gap-7 items-center justify-center sm:justify-start">
              <img
                src="/tanstack-circle-logo.png"
                alt="TanPrime Shop Image"
                className="h-full w-48 object-contain"
                loading="lazy"
              />
              <div className="flex-col space-y-2 text-center sm:text-start">
                <h1 className="text-5xl font-bold leading-tight">
                  <span className="text-amber-700/80 font-black">TAN</span>PRIME SHOP
                </h1>
                <p className="text-lg font-medium">
                  Shop the best deals, discover quality products, and enjoy fast delivery at unbeatable prices!
                </p>

                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Browse products
                  <ArrowRightIcon size={16} />
                </Link>
              </div>
            </div>
          </CardDescription>
        </Card>
      </section>

      <section className="space-y-4 max-w-6xl mx-auto">
        <Card className="p-6 shadow-md bg-white/80">
          <div className="flex items-center justify-between">
            <div>
              <CardHeader className="px-0">
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">Recommended</p>
                <CardTitle className="text-2xl font-semibold text-slate-900">Starter picks from the catalog</CardTitle>
              </CardHeader>
              <CardDescription className="text-sm text-slate-600">
                Curated items to try the cart and detail pages quickly.
              </CardDescription>
            </div>
            <div>
              <Link
                to="/products"
                className="hidden items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 sm:inline-flex transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                View All <ArrowRightIcon size={14} />
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-6">
            {products.map((product, index) => (
              <ProductCard product={product} key={`product-${index}`} />
            ))}
          </div>
        </Card>
      </section>
    </div>
  );
}
