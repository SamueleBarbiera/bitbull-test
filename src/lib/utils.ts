import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatPrice(
    price: number | string,
    currency: "USD" | "EUR" | "GBP" | "BDT" = "EUR",
    notation: "compact" | "engineering" | "scientific" | "standard" = "standard",
) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        notation,
    }).format(Number(price));
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

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
}
