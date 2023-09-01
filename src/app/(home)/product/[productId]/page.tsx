import { Metadata } from "next";
import { notFound } from "next/navigation";
import { formatPrice, toTitleCase } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Breadcrumbs } from "@/components/pagers/breadcrumbs";
import { Container } from "@/components/shells/shell";
import { ProductImage } from "@/components/product-image";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
    title: "Product",
    description: "Product description",
};

interface ProductPageProps {
    params: {
        productId: string;
    };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const productId = Number(params.productId);

    const product = {
        collection_id: 266329686089,
        updated_at: "2022-05-13T18:33:52+02:00",
        body_html: "",
        default_product_image: {
            id: 29040751411273,
            created_at: "2022-04-20T16:04:42+02:00",
            position: 1,
            updated_at: "2022-04-20T16:04:42+02:00",
            product_id: 6735725133897,
            src: "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
            variant_ids: [],
            width: 925,
            height: 617,
        },
        handle: "home-and-garden",
        image: null,
        title: "Home and Garden",
        sort_order: "best-selling",
        published_at: "2022-05-13T18:33:52+02:00",
    };

    if (!product) {
        notFound();
    }

    return (
        <Container>
            <Breadcrumbs
                segments={[
                    {
                        title: "Products",
                        href: "/products",
                    },
                    {
                        title: toTitleCase(product.sort_order),
                        href: `/products?category=${product.sort_order}`,
                    },
                    {
                        title: product.title,
                        href: `/product/${productId}`,
                    },
                ]}
            />
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                <ProductImage className="w-full md:w-1/2" image={product.default_product_image.src} />
                <Separator className="mt-4 md:hidden" />
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                    <div className="space-y-2">
                        <h2 className="line-clamp-1 text-2xl font-bold">{product.title}</h2>
                        <p className="text-base text-muted-foreground">{formatPrice(product.collection_id)}</p>
                    </div>

                    <Button type="submit" size="sm">
                        Add to cart
                        <span className="sr-only">Add to cart</span>
                    </Button>

                    <Accordion type="single" collapsible className="w-full flex-row-reverse">
                        <AccordionItem value="description">
                            <AccordionTrigger>Description</AccordionTrigger>
                            <AccordionContent>
                                {product.sort_order ?? "No description is available for this product."}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </Container>
    );
}
