"use client";
import { Icons } from "../src/components/Icons";
import IndexPage from "../src/app/(SectionPages)/page";
import * as React from "react";

const PATHS = [
    {
        route: "/Home",
        values: ["Categorie", "Prodotti"],
    },
] as const;

type CapitalizeFirstLetter<S extends string> = S extends `${infer First}${infer Rest}`
    ? `${Uppercase<First>}${Rest}`
    : S;

type RemoveEmptySpace<T extends string> = T extends `${infer L}${" "}${infer R}`
    ? `${L}${CapitalizeFirstLetter<R>}`
    : T;

type RouteValues<T extends typeof PATHS> = T extends typeof PATHS
    ? `${RemoveEmptySpace<T[number]["route"]>}/${RemoveEmptySpace<T[number]["values"][number]>}`
    : never;

export type URoutePath = RouteValues<typeof PATHS>;

type RemoveParentRoute<T extends string> = T extends `/${infer _}${"/"}${infer R}` ? `${R}` : T;
type AllowedElementNames = RemoveParentRoute<URoutePath>;

// Create a type that expects JSX elements with the specified names
type CustomElement = React.JSX.Element & { type: { displayName: AllowedElementNames } };

interface RouteObject {
    element: CustomElement;
    path: URoutePath;
}

export interface MenuItemsData {
    id: number;
    btnIcon: React.JSX.Element;
    label: string;
    route: RouteObject[];
    values: string[];
}

export const menuItemsData: MenuItemsData[] = [
    {
        btnIcon: <Icons.info className="w-4" />,
        id: 1,
        label: "Home",
        route: [
            { path: "/Home/Categorie", element: <IndexPage /> },
            { path: "/Home/Prodotti", element: <IndexPage /> },
        ],
        values: ["Categorie", "Prodotti"],
    },
];
