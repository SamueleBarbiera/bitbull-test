import { ErrorCard } from "@/components/cards/error-card";
import { Container } from "@/components/shells/shell";

export default function ProductNotFound() {
    return (
        <Container variant="centered" className="max-w-md">
            <ErrorCard
                title="Product not found"
                description="The product may have expired or you may have already updated your product"
                retryLink="/"
                retryLinkText="Go to Home"
            />
        </Container>
    );
}
