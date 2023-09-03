"use client";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Products } from "@/components/products";
import { Container } from "@/components/containers/mainContainer";
import { useCollectionListingFetch } from "@/api/products/collection.listing.query";

interface ProductsPageProps {
    searchParams: Record<string, string | string[] | undefined>;
}

export default function ProductsPage({ searchParams }: ProductsPageProps) {
    const { per_page } = searchParams;
    const limit = typeof per_page === "string" ? parseInt(per_page) : 8;
    const { data: productsTransaction } = useCollectionListingFetch().useGetAllCollectionListing();
    const pageCount = productsTransaction ? Math.ceil(productsTransaction.collection_listings.length / limit) : null;

    return (
        <Container>
            <PageHeader id="products-page-header" aria-labelledby="products-page-header-heading">
                <PageHeaderHeading size="sm">Products</PageHeaderHeading>
                <PageHeaderDescription size="sm">Buy products from our site</PageHeaderDescription>
            </PageHeader>
            <Products
                id="products-page-products"
                aria-labelledby="products-page-products-heading"
                products={productsTransaction ?? { collection_listings: [] }}
                pageCount={pageCount ?? 0}
                categories={[""]}
            />
        </Container>
    );
}
