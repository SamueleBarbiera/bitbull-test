"use client";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Products } from "@/components/products";
import { Container } from "@/components/containers/mainContainer";
import { useCollectionListingFetch } from "@/services/products/collection.listing.query";

export default function CategoryPage() {
    const { data: categoriesData } = useCollectionListingFetch().useGetAllCategories();

    return (
        <Container>
            <PageHeader id="category-page-header" aria-labelledby="category-page-header-heading">
                <PageHeaderHeading size="sm">Categories</PageHeaderHeading>
                <PageHeaderDescription size="sm">Buy products from our site</PageHeaderDescription>
            </PageHeader>
            <Products
                id="category-page-products"
                aria-labelledby="category-page-products-heading"
                categories={categoriesData ?? []}
            />
        </Container>
    );
}
