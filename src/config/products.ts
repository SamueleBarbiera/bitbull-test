import { Option } from "@/types";

export const sortOptions = [
    { label: "Date: Old to new", value: "createdAt.asc" },
    {
        label: "Date: New to old",
        value: "createdAt.desc",
    },
    { label: "Price: Low to high", value: "price.asc" },
    { label: "Price: High to low", value: "price.desc" },
    {
        label: "Alphabetical: A to Z",
        value: "name.asc",
    },
    {
        label: "Alphabetical: Z to A",
        value: "name.desc",
    },
];

export const productCategories = [
    {
        title: "Collections",
        subcategories: [
            {
                title: "---",
                description: "---",
                slug: "---",
            },
        ],
    },
] satisfies {
    title: string;
    subcategories: {
        title: string;
        description?: string;
        image?: string;
        slug: string;
    }[];
}[];

export function getSubcategories(category?: string): Option[] {
    if (!category) return [];

    const subcategories =
        productCategories
            .find((c) => c.title === category)
            ?.subcategories.map((s) => ({
                label: s.title,
                value: s.slug,
            })) ?? [];

    return subcategories;
}
