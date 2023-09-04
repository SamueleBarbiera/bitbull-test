"use client";

import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { CollectionListingAll } from "@/services/products/types";

interface IPagination {
    currentPage: number;
    onPageChange: (newPage: number) => void;
    isLoading: boolean;
    products: CollectionListingAll;
    endIndex: number;
}
const Pagination = ({ currentPage, onPageChange, isLoading, products, endIndex }: IPagination) => {
    return (
        <div className={"flex flex-wrap items-center justify-center gap-2"}>
            <Button
                aria-label="Go to first page"
                variant="outline"
                size="icon"
                className="hidden h-8 w-8 lg:flex"
                disabled={Number(currentPage) === 1 || isLoading}
                onClick={() => onPageChange(1)}
            >
                <DoubleArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
                aria-label="Go to previous page"
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onPageChange(currentPage - 1)}
                disabled={Number(currentPage) === 1 || isLoading}
            >
                <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button
                aria-label={`Page ${currentPage}`}
                variant={Number(currentPage) === currentPage ? "default" : "outline"}
                size="icon"
                className="h-8 w-8"
                disabled={isLoading}
            >
                {currentPage}
            </Button>

            <Button
                aria-label="Go to next page"
                variant="outline"
                size="icon"
                className="h-8 w-8"
                onClick={() => onPageChange(currentPage + 1)}
                disabled={endIndex >= products.collection_listings.length}
            >
                <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
                aria-label="Go to last page"
                variant="outline"
                size="icon"
                className="hidden h-8 w-8 lg:flex"
                onClick={() => onPageChange(2)}
                disabled={Number(currentPage) === 2 || isLoading}
            >
                <DoubleArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
        </div>
    );
};

export default Pagination;
