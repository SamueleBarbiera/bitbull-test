import { useMutation, useQuery } from "@tanstack/react-query";
import { httpCall } from "..";
import { CollectionListingAll } from "./types";
import { env } from "@/env.mjs";

export const useCollectionListingFetch = () => {
    return {
        useGetAllCollectionListing: () => {
            return useQuery({
                queryKey: ["useGetAllCollectionListing"],
                queryFn: () =>
                    httpCall<CollectionListingAll>({
                        genericPath: `${env.NEXT_PUBLIC_COLLECTION_LIST}collection_listings.json`,
                        type: "getAll",
                    }),
            });
        },
    };
};
