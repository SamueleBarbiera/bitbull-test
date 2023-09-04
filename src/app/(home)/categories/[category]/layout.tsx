import { env } from "@/env.mjs";
import { Metadata } from "next";

interface CategoriesLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    metadataBase: new URL(env.NEXT_PUBLIC_APP_URL),
    title: "Categories page",
    description: "All available categories",
};

export default function CategoriesLayout({ children }: CategoriesLayoutProps) {
    return <>{children}</>;
}
