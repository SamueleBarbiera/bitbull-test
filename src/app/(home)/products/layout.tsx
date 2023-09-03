interface ProductsLayoutProps {
    children: React.ReactNode;
    modal: React.ReactNode;
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
    return <>{children}</>;
}
