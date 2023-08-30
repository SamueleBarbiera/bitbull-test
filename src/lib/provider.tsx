"use client";
import { PropsWithChildren, useState } from "react";
import { QueryClientProvider, QueryClient, MutationCache, QueryCache, QueryErrorResetBoundary } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ReactQueryStreamedHydration } from "@tanstack/react-query-next-experimental";
import toast from "react-hot-toast";

const queryCache = new QueryCache({
    onError: (error) => {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        if (error instanceof Error) console.log(`❌ Error message: ${errorMessage}`);
        toast.error(errorMessage);
    },
});

const mutationCache = new MutationCache({
    onError: (error) => {
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        if (error instanceof Error) console.log(`❌ Error message: ${errorMessage}`);

        toast.error(errorMessage);
    },
});

function Providers({ children }: PropsWithChildren) {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                queryCache,
                mutationCache,
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false, // default: true
                    },
                },
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryStreamedHydration>{children}</ReactQueryStreamedHydration>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default Providers;
