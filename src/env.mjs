import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
    shared: {
        NODE_ENV: z.enum(["development", "test", "production"]),
    },
    client: {
        NEXT_PUBLIC_COLLECTION_LIST: z.string().url(),
        NEXT_PUBLIC_PRODUCTS_COLLECTION: z.string().url(),
        NEXT_PUBLIC_PRODUCT_DETAILS: z.string().url(),
    },
    experimental__runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_COLLECTION_LIST: process.env.NEXT_PUBLIC_COLLECTION_LIST,
        NEXT_PUBLIC_PRODUCTS_COLLECTION: process.env.NEXT_PUBLIC_PRODUCTS_COLLECTION,
        NEXT_PUBLIC_PRODUCT_DETAILS: process.env.NEXT_PUBLIC_PRODUCT_DETAILS,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    onValidationError: (error) => {
        console.error("❌ Invalid environment variables:", error.flatten().fieldErrors);
        throw new Error("Invalid environment variables", error.flatten().fieldErrors);
    },
    // Called when server variables are accessed on the client.
    onInvalidAccess: (variable) => {
        console.log("🚀 - file: env.ts:27 - variable:", variable);
        throw new Error("❌ Attempted to access a server-side environment variable on the client");
    },

    isServer: typeof window === "undefined",
});
