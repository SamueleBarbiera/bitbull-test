/**
 * This code defines the following interfaces:
 * - NavItem
 * - Option
 * - FooterItem
 * - MainNavItem
 * - SidebarNavItem
 *
 * It also defines the following types:
 * - Option
 * - MainNavItem
 * - SidebarNavItem
 *
 * The NavItem interface is used to define the structure of the navigation bar in the app.
 * It has a title and a list of items. Each item has a title, a link, and a description.
 *
 * The Option interface is used to define the structure of the dropdown menus in the app.
 * It has a label and a value. It also has an optional icon.
 *
 * The FooterItem interface is used to define the structure of the footer in the app.
 * It has a title and a list of items. Each item has a title and a link.
 *
 * The MainNavItem type is used to define the type of the main navigation bar in the app.
 * It has a title and a list of items. Each item has a title, a link, and a description.
 *
 * The SidebarNavItem type is used to define the type of the sidebar navigation bar in the app.
 * It has a title and a list of items. Each item has a title, a link, and a description.
 *
 */

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
