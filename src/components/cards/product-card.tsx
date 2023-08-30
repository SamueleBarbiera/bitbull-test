"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { cn, formatPrice } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Product } from "@/types";

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
    product: Product;
    variant?: "default" | "switchable";
    isAddedToCart?: boolean;
    onSwitch?: () => Promise<void>;
}

export function ProductCard({
    product,
    variant = "default",
    isAddedToCart = false,
    onSwitch,
    className,
    ...props
}: ProductCardProps) {
    const [isPending, startTransition] = React.useTransition();

    return (
        <Card className={cn("h-full overflow-hidden rounded-sm", className)} {...props}>
            <Link aria-label={`View ${product.title} details`} href={`/product/${product.collection_id}`}>
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
            <Link aria-label={`View ${product.collection_id} details`} href={`/product/${product.collection_id}`}>
                <CardContent className="grid gap-2.5 p-4">
                    <CardTitle className="line-clamp-1">{product.collection_id}</CardTitle>
                    <CardDescription className="line-clamp-2">{formatPrice(Math.random())}</CardDescription>
                </CardContent>
            </Link>
            <CardFooter className="p-4">
                {variant === "default" ? (
                    <Button
                        aria-label="Add to cart"
                        size="sm"
                        className="h-8 w-full rounded-sm"
                        onClick={() => {}}
                        disabled={isPending}
                    >
                        {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />}
                        Add to cart
                    </Button>
                ) : (
                    <Button
                        aria-label={isAddedToCart ? "Remove from cart" : "Add to cart"}
                        size="sm"
                        className="h-8 w-full rounded-sm"
                        onClick={() => {
                            startTransition(async () => {
                                await onSwitch?.();
                            });
                        }}
                        disabled={isPending}
                    >
                        {isPending ? (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
                        ) : isAddedToCart ? (
                            <Icons.check className="mr-2 h-4 w-4" aria-hidden="true" />
                        ) : (
                            <Icons.add className="mr-2 h-4 w-4" aria-hidden="true" />
                        )}
                        {isAddedToCart ? "Added" : "Add to cart"}
                    </Button>
                )}
            </CardFooter>
        </Card>
    );
}
