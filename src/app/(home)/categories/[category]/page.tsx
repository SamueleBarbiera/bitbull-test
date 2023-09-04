"use client";

import { toTitleCase } from "@/lib/utils";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Products } from "@/components/products";
import { Container } from "@/components/containers/mainContainer";
import { useCollectionListingFetch } from "@/services/products/collection.listing.query";

interface CategoryPageProps {
    params: {
        category: string;
    };
    searchParams: Record<string, string | string[] | undefined>;
}

export default function CategoryPage({ params, searchParams }: CategoryPageProps) {
    const { category } = params;
    const { page, per_page, sort, subcategories, price_range } = searchParams;

    // Products transaction
    const limit = typeof per_page === "string" ? parseInt(per_page) : 8;

    const { data: products } = useCollectionListingFetch().useGetAllCollectionListing();
    console.log("🚀 - file: page.tsx:24 - CategoryPage - products:", products);

    return (
        <Container>
            <PageHeader id="category-page-header" aria-labelledby="category-page-header-heading">
                <PageHeaderHeading size="sm">{toTitleCase(category)}</PageHeaderHeading>
            </PageHeader>
            <Products
                id="category-page-products"
                aria-labelledby="category-page-products-heading"
                category={category}
            />
        </Container>
    );
}
