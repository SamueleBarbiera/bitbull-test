import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


// This code is used to merge the "cn" function with the "clsx" function.
// This is necessary because the "cn" function is used to merge class names,
// but the "clsx" function is used to add class names to an element.
// The "cn" function is also used to merge class names with other class names,

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Format the price of a product for display in the UI

export function formatPrice(
    price: number | string,
    currency: "USD" | "EUR" | "GBP" | "BDT" = "EUR",
    notation: "compact" | "engineering" | "scientific" | "standard" = "standard",
) {
    return new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency,
        notation,
    }).format(Number(price));
}

// This function takes a string and returns a slugified version of it.

export function slugify(str: string) {
    return str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "")
        .replace(/--+/g, "-");
}

// Function to capitalize the first letter of every word in a string.

export function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase());
}

// truncate() takes a string and a length, and returns a truncated version of the string if it is longer than the length

export function truncate(str: string, length: number) {
    return str.length > length ? `${str.substring(0, length)}...` : str;
}
