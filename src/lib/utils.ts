import { env } from "@/env.mjs";
import { clsx, type ClassValue } from "clsx";
import { toast } from "react-hot-toast";
import { twMerge } from "tailwind-merge";
import * as z from "zod";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(
    price: number | string,
    currency: "USD" | "EUR" | "GBP" | "BDT" = "USD",
    notation: "compact" | "engineering" | "scientific" | "standard" = "standard",
) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        notation,
    }).format(Number(price));
}

export function formatBytes(bytes: number, decimals = 0, sizeType: "accurate" | "normal" = "normal") {
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const accurateSizes = ["Bytes", "KiB", "MiB", "GiB", "TiB"];
    if (bytes === 0) return "0 Byte";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    return `${(bytes / Math.pow(1024, i)).toFixed(decimals)} ${
        sizeType === "accurate" ? accurateSizes[i] ?? "Bytest" : sizes[i] ?? "Bytes"
    }`;
}

export function slugify(str: string) {
    return str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");
}

export function unslugify(str: string) {
    return str.replace(/-/g, " ");
}

export function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}

export function toSentenceCase(str: string) {
    return str.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase());
}

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
}

export function isArrayOfFile(files: unknown): files is File[] {
    const isArray = Array.isArray(files);
    if (!isArray) return false;
    return files.every((file) => file instanceof File);
}

export function absoluteUrl(path: string) {
    return `${env.NEXT_PUBLIC_COLLECTION_LIST}${path}`;
}

export function catchError(err: unknown) {
    if (err instanceof z.ZodError) {
        const errors = err.issues.map((issue) => {
            return issue.message;
        });
        return toast(errors.join("\n"));
    } else if (err instanceof Error) {
        return toast(err.message);
    } else {
        return toast("Something went wrong, please try again later.");
    }
}

export function isMacOs() {
    if (typeof window === "undefined") return false;

    return window.navigator.userAgent.includes("Mac");
}

export const AllProducts = {
    collection_listings: [
        {
            collection_id: 266329686089,
            updated_at: "2022-05-13T18:33:52+02:00",
            body_html: "",
            default_product_image: {
                id: 29040751411273,
                created_at: "2022-04-20T16:04:42+02:00",
                position: 1,
                updated_at: "2022-04-20T16:04:42+02:00",
                product_id: 6735725133897,
                src: "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/dark-wall-bedside-table_925x_1e444a82-4f58-4f20-af70-052b4d8e171a.jpg?v=1650463482",
                variant_ids: [],
                width: 925,
                height: 617,
            },
            handle: "home-and-garden",
            image: null,
            title: "Home and Garden",
            sort_order: "best-selling",
            published_at: "2022-05-13T18:33:52+02:00",
        },
        {
            collection_id: 266329391177,
            updated_at: "2022-05-13T18:33:51+02:00",
            body_html: "",
            default_product_image: {
                id: 29040744038473,
                created_at: "2022-04-20T16:03:51+02:00",
                position: 1,
                updated_at: "2022-04-20T16:03:51+02:00",
                product_id: 6735723987017,
                src: "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/putting-on-your-shoes_925x_7ce52c2b-b958-4538-8a1e-fbb9fa51f483.jpg?v=1650463431",
                variant_ids: [],
                width: 925,
                height: 617,
            },
            handle: "apparel",
            image: null,
            title: "Apparel",
            sort_order: "best-selling",
            published_at: "2022-05-13T18:33:51+02:00",
        },
        {
            collection_id: 266329161801,
            updated_at: "2022-05-13T18:33:51+02:00",
            body_html: "",
            default_product_image: {
                id: 29040761339977,
                created_at: "2022-04-20T16:05:43+02:00",
                position: 1,
                updated_at: "2022-04-20T16:05:43+02:00",
                product_id: 6735726608457,
                src: "https://cdn.shopify.com/s/files/1/0569/3315/4889/products/stylish-summer-necklace_925x_596cf996-c842-492a-9922-29749585aa52.jpg?v=1650463543",
                variant_ids: [],
                width: 925,
                height: 617,
            },
            handle: "jewelry",
            image: null,
            title: "Jewelry",
            sort_order: "best-selling",
            published_at: "2022-05-13T18:33:51+02:00",
        },
    ],
};
