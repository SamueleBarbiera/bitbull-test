import { useQuery } from "@tanstack/react-query";
import { httpCall } from "..";
import { CollectionListingAll, CollectionListingData, Product } from "./types";
import { env } from "@/env.mjs";

export const useCollectionListingFetch = () => {
    return {
        useGetAllCollectionListing: () => {
            return useQuery({
                keepPreviousData: true,
                suspense: true,
                queryKey: ["useGetAllCollectionListing"],
                queryFn: () =>
                    httpCall<CollectionListingAll>({
                        genericPath: `${env.NEXT_PUBLIC_API}collection_listings.json`,
                        type: "getAll",
                    }),
            });
        },

        useProductByCollectionId: (product_id: CollectionListingData["default_product_image"]["product_id"]) => {
            return useQuery({
                suspense: true,
                queryKey: ["useProductByCollectionId", product_id],
                queryFn: () =>
                    httpCall<Product>({
                        genericPath: `${env.NEXT_PUBLIC_API}products/${product_id}.json`,
                        type: "getAll",
                    }),
            });
        },

        useGetAllCategories: () => {
            return useQuery({
                keepPreviousData: true,
                suspense: true,
                queryKey: ["useGetAllCategories"],
                queryFn: () =>
                    httpCall<CollectionListingAll>({
                        genericPath: `${env.NEXT_PUBLIC_API}collection_listings.json`,
                        type: "getAll",
                    }).then((data) => {
                        const categories = data.collection_listings.map((category) => category.handle);
                        return categories;
                    }),
            });
        },

        useGetProductsByCollectionID: (product: CollectionListingData) => {
            return useQuery({
                suspense: true,
                queryKey: ["useGetProductsByCollectionID"],
                queryFn: () =>
                    httpCall<CollectionListingAll>({
                        genericPath: `${env.NEXT_PUBLIC_API}collections/${product.collection_id}/products.json`,
                        type: "getAll",
                    }),
            });
        },
    };
};
