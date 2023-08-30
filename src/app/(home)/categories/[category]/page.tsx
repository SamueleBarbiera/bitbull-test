import { toTitleCase } from "@/lib/utils";
import { PageHeader, PageHeaderDescription, PageHeaderHeading } from "@/components/page-header";
import { Products } from "@/components/products";
import { Shell } from "@/components/shells/shell";

interface CategoryPageProps {
    params: {
        category: string;
    };
    searchParams: Record<string, string | string[] | undefined>;
}

export function generateMetadata({ params }: CategoryPageProps) {
    return {
        title: toTitleCase(params.category),
        description: `Buy products from the ${params.category} category`,
    };
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
    const { category } = params;
    const { page, per_page, sort, subcategories, price_range } = searchParams;

    // Products transaction
    const limit = typeof per_page === "string" ? parseInt(per_page) : 8;
    const offset = typeof page === "string" ? (parseInt(page) - 1) * limit : 0;

    const productsTransaction =null

    const pageCount = Math.ceil(productsTransaction.total / limit);

    return (
        <Shell>
            <PageHeader id="category-page-header" aria-labelledby="category-page-header-heading">
                <PageHeaderHeading size="sm">{toTitleCase(category)}</PageHeaderHeading>
            </PageHeader>
            <Products
                id="category-page-products"
                aria-labelledby="category-page-products-heading"
                products={productsTransaction.items}
                pageCount={pageCount}
                category={category}
            />
        </Shell>
    );
}
