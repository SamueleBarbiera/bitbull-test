"use client";
import { ErrorCard } from "@/components/cards/error-card";
import { Container } from "@/components/containers/mainContainer";
import { useEffect } from "react"

export default function ErrorPageBoundary({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <Container variant="centered" className="max-w-md">
            <ErrorCard title={error.name} description={error.message} reset={reset} />
        </Container>
    );
}
