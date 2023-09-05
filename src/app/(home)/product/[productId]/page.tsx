import { formatPrice, toTitleCase } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Breadcrumbs } from "@/components/pagers/breadcrumbs";
import { Container } from "@/components/containers/mainContainer";
import { ProductImage } from "@/components/product-image";
import { Button } from "@/components/ui/button";
import { httpCall } from "@/services";
import { CollectionListingAll, Product } from "@/services/products/types";
import { env } from "@/env.mjs";
import { Metadata } from "next";
import { ProductCard } from "@/components/cards/product-card";

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
    const resSingleProd = await httpCall<{ product: Product }>({
        genericPath: `${env.NEXT_PUBLIC_API}products/${id}.json`,
        type: "getAll",
    });
    const findProductByProductID = await httpCall<CollectionListingAll>({
        genericPath: `${env.NEXT_PUBLIC_API}collection_listings.json`,
        type: "getAll",
    }).then((res) => {
        return res.collection_listings.find((product) => product.default_product_image.product_id.toString() === id);
    });

    const resAllProdByCollectionID =
        findProductByProductID !== undefined
            ? await httpCall<{ products: Product[] }>({
                  genericPath: `${env.NEXT_PUBLIC_API}collections/${findProductByProductID.collection_id}/products.json`,
                  type: "getAll",
              })
            : { products: [] };

    return { product: resSingleProd.product, productsByCollectionID: resAllProdByCollectionID.products };
}

export default async function ProductPage({ params }: ProductPageProps) {
    const { product, productsByCollectionID: products } = await getData(params.productId);

    return (
        <Container>
            <Breadcrumbs
                segments={[
                    {
                        title: "Products",
                        href: "/products",
                    },
                    {
                        title: toTitleCase(product.handle),
                        href: `/products?category=${product.handle}`,
                    },
                    {
                        title: product.id.toString(),
                        href: `/product/${product.id}`,
                    },
                ]}
            />
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                <ProductImage className="w-full md:w-1/2 h-full relative" image={product.image.src} />
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
                            <AccordionContent>
                                <div dangerouslySetInnerHTML={{ __html: product.body_html }} />
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>{" "}
                    <Accordion type="single" collapsible className="w-full flex-row-reverse">
                        <AccordionItem value="description">
                            <AccordionTrigger>Tags</AccordionTrigger>
                            <AccordionContent>{product.tags}</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
            {products.length > 0 ? (
                <div className="overflow-hidden md:pt-6">
                    <h3 className="line-clamp-1 flex-1 text-lg font-semibold">More products</h3>
                    <div className="overflow-x-auto pb-2 pt-6">
                        <div className="flex w-fit gap-4">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} className="min-w-[260px]" />
                            ))}
                        </div>
                    </div>
                </div>
            ) : null}
        </Container>
    );
}
