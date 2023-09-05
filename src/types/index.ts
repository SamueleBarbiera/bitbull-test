export interface NavItem {
    title: string;
    items: {
        title: string;
        href: string;
        description: string;
    }[];
}

export interface Option {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
}

export interface FooterItem {
    title: string;
    items: {
        title: string;
        href: string;
        external?: boolean;
    }[];
}

export type MainNavItem = NavItem;

export type SidebarNavItem = NavItem;

export interface StoredFile {
    id: string;
    name: string;
    url: string;
}
