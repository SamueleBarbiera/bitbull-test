"use client";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ErrorPageBoundary({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Un è successo un errore, riprova più tardi </p>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Riprova
            </Button>
        </div>
    );
}
