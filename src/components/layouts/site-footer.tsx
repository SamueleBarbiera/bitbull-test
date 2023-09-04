import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Container } from "@/components/containers/mainContainer";

export function SiteFooter() {
    return (
        <footer className="w-full border-t bg-background">
            <Container as="div">
                <section
                    id="footer-content"
                    aria-labelledby="footer-content-heading"
                    className="flex flex-col gap-10 lg:flex-row lg:gap-20"
                >
                    <section
                        id="footer-links"
                        aria-labelledby="footer-links-heading"
                        className="grid flex-1 grid-cols-1 flex-row-reverse sm:grid-cols-2"
                    >
                        {siteConfig.footerNav.map((item) => (
                            <div key={item.title} className="space-y-3">
                                <h4 className="text-base font-medium">{item.title}</h4>
                                <ul className="space-y-3">
                                    {item.items.map((link) => (
                                        <li key={link.title}>
                                            <Link
                                                href={link.href}
                                                target={link.external ? "_blank" : undefined}
                                                rel={link.external ? "noreferrer" : undefined}
                                                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                                            >
                                                {link.title}
                                                <span className="sr-only">{link.title}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </section>
                </section>
                <section
                    id="footer-bottom"
                    aria-labelledby="footer-bottom-heading"
                    className="flex items-center space-x-4"
                >
                    <div className="flex-1 text-left text-sm leading-loose text-muted-foreground">
                        Built by{" "}
                        <a
                            aria-label="Kickflip tutorial on YouTube"
                            href="https://twitter.com/example"
                            target="_blank"
                            rel="noreferrer"
                            className="font-semibold transition-colors hover:text-foreground"
                        >
                            Samuele Barbiera
                        </a>
                        .
                    </div>
                </section>
            </Container>
        </footer>
    );
}
