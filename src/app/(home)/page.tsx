import Image from "next/image";
import Link from "next/link";
import { AllProducts, cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { buttonVariants } from "@/components/ui/button";
import { ProductCard } from "@/components/cards/product-card";
import { Shell } from "@/components/shells/shell";

export const dynamic = "force-dynamic";

export default async function IndexPage() {
    const someProducts = AllProducts;

    return (
        <Shell className="gap-12">
            <section
                id="hero"
                aria-labelledby="hero-heading"
                className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
            >
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                    A Fake E-Commerce site built with Next.js 13
                </h1>
                <div className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
                    Buy products from brands and stores around the world
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link href="/products" className={cn(buttonVariants())}>
                        Buy Now
                    </Link>
                </div>
            </section>
            <section id="categories" aria-labelledby="categories-heading" className="space-y-6 py-6 md:pt-10 lg:pt-24">
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <h2 className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl">Categories</h2>
                    <div className="max-w-[46rem] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
                        Explore our categories and find the best products for you
                    </div>
                </div>
            </section>

            <section id="featured-products" aria-labelledby="featured-products-heading" className="space-y-6">
                <div className="flex items-center">
                    <h2 className="flex-1 text-2xl font-medium sm:text-3xl">Featured products</h2>
                    <Link aria-label="Products" href="/products">
                        <div
                            className={cn(
                                buttonVariants({
                                    size: "sm",
                                }),
                            )}
                        >
                            View all
                        </div>
                    </Link>
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {someProducts.collection_listings.map((product) => (
                        <ProductCard key={product.collection_id} product={product} />
                    ))}
                </div>
            </section>
        </Shell>
    );
}
