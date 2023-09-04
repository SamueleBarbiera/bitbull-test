"use client";

import type { Option } from "@/types";
import { getSubcategories, sortOptions } from "@/config/products";
import { toTitleCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ProductCard } from "@/components/cards/product-card";
import { Icons } from "@/components/icons";
import { MultiSelect } from "@/components/multi-select";
import { HTMLAttributes, useState } from "react";
import { useCollectionListingFetch } from "@/services/products/collection.listing.query";
import ProductsLoading from "@/app/(home)/products/loading";
import Pagination from "./pagers/pagination";
import ErrorPageBoundary from "@/app/error";

interface ProductsProps extends HTMLAttributes<HTMLDivElement> {
    category?: string;
    categories?: string[];
}

export function Products({ category, categories, ...props }: ProductsProps) {
    const { isLoading, data: products, isError, error } = useCollectionListingFetch().useGetAllCollectionListing();

    // Category filter
    const [selectedCategories, setSelectedCategories] = useState<Option[] | null>(null);

    // Subcategory filter
    const [selectedSubcategories, setSelectedSubcategories] = useState<Option[] | null>(null);
    const subcategories = getSubcategories(category);

    const itemsPerPage = 2; // Number of items to show per page
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    };

    if (isLoading) {
        return <ProductsLoading />;
    }

    if (isError) {
        return <ErrorPageBoundary error={error as Error} />;
    }

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

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
                            {categories?.length ? (
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium tracking-wide text-foreground">Categories</h3>
                                    <MultiSelect
                                        placeholder="Select categories"
                                        selected={selectedCategories}
                                        setSelected={setSelectedCategories}
                                        options={categories.map((c) => ({
                                            label: toTitleCase(c),
                                            value: c,
                                        }))}
                                    />
                                </div>
                            ) : null}
                            {category ? (
                                <div className="space-y-4">
                                    <h3 className="text-sm font-medium tracking-wide text-foreground">Subcategories</h3>
                                    <MultiSelect
                                        placeholder="Select subcategories"
                                        selected={selectedSubcategories}
                                        setSelected={setSelectedSubcategories}
                                        options={subcategories}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </SheetContent>
                </Sheet>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button aria-label="Sort products" size="sm" disabled={isLoading}>
                            Sort
                            <Icons.chevronDown className="ml-2 h-4 w-4" aria-hidden="true" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-48">
                        <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        {sortOptions.map((option) => (
                            <DropdownMenuItem key={option.label}>{option.label}</DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {!products.collection_listings.length && isError ? (
                <div className="mx-auto flex max-w-xs flex-col space-y-1.5">
                    <h1 className="text-center text-2xl font-bold">No products found</h1>
                    <p className="text-center text-muted-foreground">
                        Try changing your filters, or check back later for new products
                    </p>
                </div>
            ) : null}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.collection_listings.slice(startIndex, endIndex).map((product) => (
                    <ProductCard key={product.default_product_image.product_id} product={product} />
                ))}
            </div>
            {products.collection_listings.length ? (
                <Pagination
                    endIndex={endIndex}
                    products={products}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    isLoading={isLoading}
                />
            ) : null}
        </section>
    );
}
