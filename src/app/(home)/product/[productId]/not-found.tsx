import { ErrorCard } from "@/components/cards/error-card";
import { Container } from "@/components/containers/mainContainer";

export default function ProductNotFound() {
    return (
        <Container variant="centered" className="max-w-md">
            <ErrorCard
                title="Product not found"
                description="The product may have expired or does not exist."
                retryLink="/"
                retryLinkText="Go to Home"
            />
        </Container>
    );
}
