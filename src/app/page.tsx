/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import Layout from "@/components/Layout";
import { menuItemsData } from "../../types/routes";
import { cn } from "../lib/utils";
import { Toaster } from "react-hot-toast";
import { Fragment, ReactNode, useState } from "react";
import { useClientiFetch } from "@/api/hooks/SectionPages/anagrafiche/clienti/clienti.query";
import SignIn from "./(auth)/sign-in/page";

interface IProps {
    children?: ReactNode;
}

const AppSettings = (props: IProps) => {
    const { isLoading: loading } = useClientiFetch().useGetAllClienti();
    return loading ? (
        <div className={cn("flex h-screen w-full flex-col items-center justify-center")}>
            <div className="relative flex">
                <div
                    className={cn("flex w-full flex-col items-center justify-center")}
                    style={{ height: "calc(100vh - 200px)" }}
                >
                    <div className="loading" />
                    <h3 className="text-lg font-semibold italic text-body"> {"Caricamento"}</h3>
                </div>
            </div>
        </div>
    ) : (
        <Fragment>{props.children}</Fragment>
    );
};

export default function Home() {
    const [loggedIn, _setLoggenIn] = useState<boolean>(true); // TODO: change to false

    return (
        <AppSettings>
            <Toaster />
            <div>
                {!loggedIn ? (
                    <SignIn />
                ) : (
                    <Layout menuItemsData={menuItemsData}>
                        {menuItemsData.map((item) => {
                            return item.route.map((routeItem) => {
                                return routeItem.element;
                            });
                        })}
                    </Layout>
                )}
            </div>
        </AppSettings>
    );
}
