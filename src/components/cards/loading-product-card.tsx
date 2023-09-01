"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Icons } from "@/components/icons";
import { Skeleton } from "../ui/skeleton";
import { Fragment } from "react";

export function LoadingProductCard() {
    return (
        <Fragment>
            {Array.from({ length: 3 }).map((_, i) => (
                <Card key={i} className="min-w-[260px] rounded-sm">
                    <CardHeader className="border-b p-0">
                        <AspectRatio ratio={4 / 3}>
                            <div className="flex h-full items-center justify-center bg-secondary">
                                <Icons.placeholder className="h-9 w-9 text-muted-foreground" aria-hidden="true" />
                            </div>
                        </AspectRatio>
                    </CardHeader>
                    <CardContent className="grid gap-2.5 p-4">
                        <Skeleton className="h-4 w-1/2" />
                        <Skeleton className="h-4 w-1/4" />
                    </CardContent>
                    <CardFooter className="p-4">
                        <div className="flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between">
                            <Skeleton className="h-8 w-full rounded-sm" />
                        </div>
                    </CardFooter>
                </Card>
            ))}
        </Fragment>
    );
}
