import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn, formatPrice } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { CollectionListingData } from "@/api/products/types";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
    product: CollectionListingData;
}

export function ProductCard({ product, className, ...props }: ProductCardProps) {
    return (
        <Card className={cn("h-full overflow-hidden rounded-sm", className)} {...props}>
            <Link
                aria-label={`View ${product.title} details`}
                href={`/product/${product.default_product_image.product_id}`}
            >
                <CardHeader className="border-b p-0">
                    <AspectRatio ratio={4 / 3}>
                        {product.default_product_image.id ? (
                            <Image
                                src={product.default_product_image.src}
                                alt={product.default_product_image.src}
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                fill
                                className="object-cover"
                                loading="lazy"
                            />
                        ) : (
                            <div
                                aria-label="Placeholder"
                                role="img"
                                aria-roledescription="placeholder"
                                className="flex h-full w-full items-center justify-center bg-secondary"
                            >
                                <Icons.placeholder className="h-9 w-9 text-muted-foreground" aria-hidden="true" />
                            </div>
                        )}
                    </AspectRatio>
                </CardHeader>
            </Link>
            <Link
                aria-label={`View ${product.default_product_image.product_id} details`}
                href={`/product/${product.default_product_image.product_id}`}
            >
                <CardContent className="grid gap-2.5 p-4">
                    <CardTitle className="line-clamp-1">{product.title}</CardTitle>
                    <CardDescription className="line-clamp-2">{formatPrice("30")}</CardDescription>
                </CardContent>
            </Link>
            <CardFooter className="p-4">
                <Button aria-label="Add to cart" size="sm" className="h-8 w-full rounded-sm">
                    Add to cart
                </Button>
            </CardFooter>
        </Card>
    );
}
