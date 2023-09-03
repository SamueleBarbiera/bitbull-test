import { SiteFooter } from "@/components/layouts/site-footer";
import { SiteHeader } from "@/components/layouts/site-header";

interface HomeLayoutProps {
    children: React.ReactNode;
}

export default async function HomeLayout({ children }: HomeLayoutProps) {
    return (
        <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
        </div>
    );
}
