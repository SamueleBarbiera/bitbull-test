"use client";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ProductCard } from "@/components/cards/product-card";
import { Container } from "@/components/containers/mainContainer";
import { useCollectionListingFetch } from "@/api/products/collection.listing.query";
import { LoadingProductCard } from "@/components/cards/loading-product-card";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

export default function IndexPage() {
    const { data: someProducts } = useCollectionListingFetch().useGetAllCollectionListing();
    console.log("🚀 - file: page.tsx:13 - IndexPage - someProducts:", someProducts);

    return (
        <Container className="gap-12">
            <section
                id="hero"
                aria-labelledby="hero-heading"
                className="mx-auto flex w-full max-w-[64rem] flex-col items-center justify-center gap-4 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28"
            >
                <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
                    A Fake E-Commerce site built with Next.js 13
                </h1>
                <div className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
                    Buy products from brands around the world
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4">
                    <Link href="/products" className={cn(buttonVariants())}>
                        Buy Now
                    </Link>
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
                    {someProducts?.collection_listings.map((product) => (
                        <ProductCard key={product.default_product_image.product_id} product={product} />
                    ))}
                </div>
            </section>
        </Container>
    );
}
