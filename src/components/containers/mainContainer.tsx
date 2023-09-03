import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const mainContainerVariants = cva("grid items-center gap-8 pb-8 pt-6 md:py-8", {
    variants: {
        variant: {
            default: "container",
            sidebar: "",
            centered: "container flex h-[100dvh] max-w-2xl flex-col justify-center",
            markdown: "container max-w-3xl gap-0 py-8 md:py-10 lg:py-10",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

interface MainContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof mainContainerVariants> {
    as?: React.ElementType;
}

function Container({ className, as: Comp = "section", variant, ...props }: MainContainerProps) {
    return <Comp className={cn(mainContainerVariants({ variant }), className)} {...props} />;
}

export { Container, mainContainerVariants };
