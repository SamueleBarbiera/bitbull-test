import { type Metadata } from "next";

import { env } from "@/env.mjs";

import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Products } from "@/components/products";
import { Shell } from "@/components/shells/shell";
import { AllProducts } from "@/lib/utils";

export const metadata: Metadata = {
    title: "Products",
    description: "Buy products from our stores",
};

interface ProductsPageProps {
    searchParams: Record<string, string | string[] | undefined>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
    const { page, per_page, sort, categories, subcategories, price_range, store_ids, store_page } = searchParams ?? {};

    // Products transaction
    const limit = typeof per_page === "string" ? parseInt(per_page) : 8;
    const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;

    const productsTransaction = AllProducts;

    const pageCount = Math.ceil(productsTransaction.collection_listings.length / limit);

    // Stores transaction
    const storesLimit = 25;
    const storesOffset = typeof store_page === "string" ? (parseInt(store_page) - 1) * storesLimit : 0;

    return (
        <Shell>
            <PageHeader id="products-page-header" aria-labelledby="products-page-header-heading">
                <PageHeaderHeading size="sm">Products</PageHeaderHeading>
                <PageHeaderDescription size="sm">Buy products from our stores</PageHeaderDescription>
            </PageHeader>
            <Products
                id="products-page-products"
                aria-labelledby="products-page-products-heading"
                products={productsTransaction.collection_listings}
                pageCount={pageCount}
                categories={[""]}
            />
        </Shell>
    );
}
