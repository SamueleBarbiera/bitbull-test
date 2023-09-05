"use client";
import { siteConfig } from "@/config/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { MainNav } from "@/components/layouts/main-nav";
import { MobileNav } from "@/components/layouts/mobile-nav";
import { useCollectionListingFetch } from "@/services/products/collection.listing.query";
import { slugify } from "@/lib/utils";

export function SiteHeader() {
    const { data: categoriesData } = useCollectionListingFetch().useGetAllCategories();

    const productCategories = categoriesData
        ? [
              {
                  title: "Categories",
                  subcategories: categoriesData
                      .map((category) => ({
                          slug: category,
                      }))
                      .map((category) => category.slug),
              },
          ]
        : [];

    const result = productCategories.map((category) => ({
        title: category.title,
        items: [
            {
                title: "All",
                href: `/categories/${slugify(category.title)}`,
                description: `All ${category.title}.`,
            },
            ...category.subcategories.map((subcategory) => ({
                title: subcategory,
                href: `products?category=${subcategory}`,
                description: subcategory,
            })),
        ],
    }));

    const siteConfigCategoriesAdded = [...siteConfig.mainNav, ...result];


    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center">
                <MainNav items={siteConfigCategoriesAdded} />
                <MobileNav mainNavItems={siteConfigCategoriesAdded} />
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-2">
                        <Button
                            className={buttonVariants({
                                size: "sm",
                            })}
                        >
                            Sign In
                            <span className="sr-only">Sign In</span>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    );
}
