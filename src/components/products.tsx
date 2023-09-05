"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ProductCard } from "@/components/cards/product-card";
import { MultiSelect } from "@/components/multi-select";
import { HTMLAttributes, useEffect, useState } from "react";
import { useCollectionListingFetch } from "@/services/products/collection.listing.query";
import ProductsLoading from "@/app/(home)/products/loading";
import Pagination from "./pagers/pagination";
import ErrorPageBoundary from "@/app/error";
import { CollectionListingData } from "@/services/products/types";
import { useSearchParams } from "next/navigation";
import { ProductCardCollection } from "./cards/product-collection-card";
import ProductNotFound from "@/app/(home)/product/[productId]/not-found";

interface ProductsProps extends HTMLAttributes<HTMLDivElement> {
    categories: string[];
}

export function Products({ categories, ...props }: ProductsProps) {
    const { isLoading, data: products, isError, error } = useCollectionListingFetch().useGetAllCollectionListing();
    const searchParams = useSearchParams();

    // Category filter
    const [selectedCategories, setSelectedCategories] = useState(categories);

    const itemsPerPage = 2; // Number of items to show per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    useEffect(() => {
        setSelectedCategories([searchParams.get("category") ?? selectedCategories[0]!]);
    }, [searchParams]);

    if (isLoading) {
        return <ProductsLoading />;
    }

    if (isError) {
        return <ErrorPageBoundary error={error as Error} />;
    }

    return (
        <section className="flex flex-col space-y-6" {...props}>
            <div className="flex items-center space-x-2">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button aria-label="Filter products" size="sm" disabled={isLoading}>
                            Filter
                        </Button>
                    </SheetTrigger>
                    <SheetContent className="flex flex-col">
                        <SheetHeader className="px-1">
                            <SheetTitle>Filters</SheetTitle>
                        </SheetHeader>
                        <Separator />
                        <div className="flex flex-1 flex-col gap-5 overflow-hidden px-1">
                            {categories.length ? (
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium tracking-wide text-foreground">Categories</h3>
                                    <MultiSelect
                                        placeholder="Select categories"
                                        selected={selectedCategories}
                                        setSelectedCategories={setSelectedCategories}
                                        options={categories.map((c) => c)}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
            {!products.collection_listings.length ||
            !products.collection_listings.filter((listing) => selectedCategories.includes(listing.handle)).length ? (
                <ProductNotFound />
            ) : null}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.collection_listings
                    .filter((listing) => selectedCategories.includes(listing.handle))
                    .slice(startIndex, endIndex)
                    .map((product: CollectionListingData) => (
                        <ProductCardCollection key={product.default_product_image.product_id} product={product} />
                    ))}
            </div>
            {products.collection_listings.length ? (
                <Pagination
                    endIndex={endIndex}
                    products={products.collection_listings.filter((listing) =>
                        selectedCategories.includes(listing.handle),
                    )}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    isLoading={isLoading}
                />
            ) : (
                <ProductNotFound />
            )}
        </section>
    );
}
