import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { env } from "@/env.mjs";

import { formatPrice, toTitleCase } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { ProductCard } from "@/components/cards/product-card";

import { Breadcrumbs } from "@/components/pagers/breadcrumbs";

import { Shell } from "@/components/shells/shell";
import { ProductImageCarousel } from "@/components/product-image-carousel";
import { StoredFile } from "@/types";

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
        <Shell>
            <Breadcrumbs
                segments={[
                    {
                        title: "Products",
                        href: "/products",
                    },
                    {
                        title: toTitleCase(product.title),
                        href: `/products?category=${product.title}`,
                    },
                    {
                        title: product.published_at,
                        href: `/product/${product.collection_id}`,
                    },
                ]}
            />
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                <ProductImageCarousel className="w-full md:w-1/2" images={product.default_product_image.src} />
                <Separator className="mt-4 md:hidden" />
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                    <div className="space-y-2">
                        <h2 className="line-clamp-1 text-2xl font-bold">{product.collection_id}</h2>
                        <p className="text-base text-muted-foreground">{formatPrice(Math.random())}</p>
                    </div>
                    <Separator className="my-1.5" />

                    <Separator className="mt-5" />
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="description">
                            <AccordionTrigger>Description</AccordionTrigger>
                            <AccordionContent>
                                {product.title ?? "No description is available for this product."}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </Shell>
    );
}
