"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Icons } from "@/components/icons";
import { Container } from "@/components/shells/shell";

export default function ProductLoading() {
    return (
        <Container>
            <div className="flex items-center space-x-2">
                <Skeleton className="h-6 w-14" />
                <Skeleton className="h-6 w-14" />
                <Skeleton className="h-6 w-14" />
            </div>
            <div className="flex flex-col gap-8 md:flex-row md:gap-16">
                <div className="w-full md:w-1/2">
                    <div className="flex flex-col gap-2">
                        <div
                            aria-label="Placeholder"
                            role="img"
                            aria-roledescription="placeholder"
                            className="flex aspect-square h-full flex-1 items-center justify-center bg-secondary"
                        >
                            <Icons.placeholder className="h-9 w-9 text-muted-foreground" aria-hidden="true" />
                        </div>
                        <div className="flex w-full items-center justify-center gap-2">
                            <Skeleton className="h-7 w-7 rounded-none" />
                            {Array.from({ length: 3 }).map((_, i) => (
                                <Skeleton key={i} className="aspect-square h-full w-full max-w-[100px] rounded-none" />
                            ))}
                            <Skeleton className="h-7 w-7 rounded-none" />
                        </div>
                    </div>
                </div>
                <Separator className="mt-4 md:hidden" />
                <div className="flex w-full flex-col gap-4 md:w-1/2">
                    <div className="space-y-2">
                        <Skeleton className="h-9 w-16" />
                        <Skeleton className="h-6 w-10" />
                        <Skeleton className="h-6 w-14" />
                    </div>
                    <Separator className="my-1.5" />
                    <div className="flex items-center space-x-2">
                        <Skeleton className="h-8 w-[7.5rem]" />
                        <Skeleton className="h-8 w-24" />
                    </div>
                    <Separator className="mb-2.5 mt-5" />
                    <div className="flex items-center">
                        <Skeleton className="h-7 w-16" />
                        <Skeleton className="ml-auto h-4 w-4" />
                    </div>
                    <Separator className="mt-2.5" />
                </div>
            </div>
        </Container>
    );
}
