import { formatPrice, toTitleCase } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Breadcrumbs } from "@/components/pagers/breadcrumbs";
import { Container } from "@/components/containers/mainContainer";
import { ProductImage } from "@/components/product-image";
import { Button } from "@/components/ui/button";
import { httpCall } from "@/services";
import { Product } from "@/services/products/types";
import { env } from "@/env.mjs";
import { Metadata } from "next";

interface ProductPageProps {
    params: {
        productId: string;
    };
}

export const generateMetadata = ({ params }: ProductPageProps): Metadata => {
    return {
        title: `Product - ${params.productId}`,
    };
};

async function getData(id: string) {
    const res = await httpCall<{ product: Product }>({
        genericPath: `${env.NEXT_PUBLIC_API}/products/${id}.json`,
        type: "getAll",
    });
    console.log("🚀 - file: page.tsx:23 - getData - res:", res.product);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    return res.product;
}

export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getData(params.productId);

    return (
        <Container>
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
                        title: product.title,
                        href: `/product/${product.id}`,
                    },
                ]}
            />
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                <ProductImage className="w-full md:w-1/2" image={product.image.src} />
                <Separator className="mt-4 md:hidden" />
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                    <div className="space-y-2">
                        <h2 className="line-clamp-1 text-2xl font-bold">{product.title}</h2>
                        <p className="text-base text-muted-foreground">
                            {formatPrice(product.variants[0]?.price.toString() ?? "0.00")}
                        </p>
                    </div>

                    <Button type="submit" size="sm">
                        Add to cart
                        <span className="sr-only">Add to cart</span>
                    </Button>

                    <Accordion type="single" collapsible className="w-full flex-row-reverse">
                        <AccordionItem value="description">
                            <AccordionTrigger>Description</AccordionTrigger>
                            <AccordionContent>{product.variants[0]?.sku}</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </Container>
    );
}
