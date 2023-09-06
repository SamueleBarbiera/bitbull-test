import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

// https://env.t3.gg/ for more information on how to use this package.

// Create an environment that will validate and expose environment variables.
export const env = createEnv({
    shared: {
        NODE_ENV: z.enum(["development", "test", "production"]),
    },
    client: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        NEXT_PUBLIC_APP_URL: z.string().url(),
        NEXT_PUBLIC_API: z.string().url(),
    },
    server: {
        NODE_ENV: z.enum(["development", "test", "production"]),
        NEXT_PUBLIC_APP_URL: z.string().url(),
        NEXT_PUBLIC_API: z.string().url(),
    },
    experimental__runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
        NEXT_PUBLIC_API: process.env.NEXT_PUBLIC_API,
    },
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
    onValidationError: (error) => {
        console.error("❌ Invalid environment variables:", error.flatten().fieldErrors);
        throw new Error("Invalid environment variables", error.flatten().fieldErrors);
    },
    // Called when server variables are accessed on the client.
    onInvalidAccess: (variable) => {
        console.error("❌ Invalid access variable:", variable);
        throw new Error("❌ Attempted to access a server-side environment variable on the client");
    },

    isServer: typeof window === "undefined",
});
