"use client";

import { toTitleCase } from "@/lib/utils";
import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import { Products } from "@/components/products";
import { Container } from "@/components/shells/shell";
import { useCollectionListingFetch } from "@/api/products/collection.listing.query";

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

    const pageCount = Math.ceil(products?.collection_listings.length ?? 0 / limit);

    return (
        <Container>
            <PageHeader id="category-page-header" aria-labelledby="category-page-header-heading">
                <PageHeaderHeading size="sm">{toTitleCase(category)}</PageHeaderHeading>
            </PageHeader>
            <Products
                id="category-page-products"
                aria-labelledby="category-page-products-heading"
                products={products ?? { collection_listings: [] }}
                pageCount={pageCount}
                category={category}
            />
        </Container>
    );
}
