"use client";

import { DoubleArrowLeftIcon, DoubleArrowRightIcon } from "@radix-ui/react-icons";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";
import { CollectionListingData } from "@/services/products/types";

interface IPagination {
    currentPage: number;
    onPageChange: (newPage: number) => void;
    isLoading: boolean;
    products: CollectionListingData[];
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
                disabled={currentPage === 1 || isLoading}
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
                disabled={currentPage === 1 || isLoading}
            >
                <ChevronLeftIcon className="h-4 w-4" aria-hidden="true" />
            </Button>

            <Button
                aria-label={`Page ${currentPage}`}
                variant={currentPage === currentPage ? "default" : "outline"}
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
                disabled={endIndex >= products.length}
            >
                <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
                aria-label="Go to last page"
                variant="outline"
                size="icon"
                className="hidden h-8 w-8 lg:flex"
                onClick={() => onPageChange(2)}
                disabled={currentPage === 2 || endIndex >= products.length || isLoading}
            >
                <DoubleArrowRightIcon className="h-4 w-4" aria-hidden="true" />
            </Button>
        </div>
    );
};

export default Pagination;
