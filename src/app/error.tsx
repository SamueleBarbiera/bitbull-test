"use client";
import { ErrorCard } from "@/components/cards/error-card";
import { Container } from "@/components/containers/mainContainer";
import { useEffect } from "react";

// This code defines a component that renders an error message.

// The ErrorPageBoundary component is defined using the React.FC type, which
// takes a single prop of type React.PropsWithChildren.

// The ErrorPageBoundary component is a function component that takes a single
// prop, error, which is of type Error. It also takes an optional prop, reset,
// which is a function that takes no arguments and returns nothing.

// The ErrorPageBoundary component renders a Container component with the
// variant centered and a max width of 32em.

// The Container component renders a div with the class max-w-md and two
// children: an ErrorCard component and a div.

// The ErrorCard component renders a div with the class bg-white p-8 rounded
// shadow-lg and two children: a div and a button.

// The first div renders a h2 with the title prop and a p with the
// description prop.

// The button renders a span with the text "Reset" and calls the reset
// function when clicked.

export default function ErrorPageBoundary({ error, reset }: { error: Error; reset?: () => void }) {
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
