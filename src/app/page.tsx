"use client";

import Layout from "@/components/Layout";
import { menuItemsData } from "../../types/routes";
import ErrorPage from "./(Errors)/GeneralError/page";
import SignUp from "./(auth)/sign-up/page";
import SignIn from "./(auth)/sign-in/page";
import RouterError from "./(Errors)/routes/page";
import ErrorLoginPage from "./(Errors)/ErrorLogin/page";
import { cn } from "../lib/utils";

import { AxiosError } from "axios";
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster, toast } from "react-hot-toast";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Fragment, ReactNode, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useClientiFetch } from "@/api/hooks/SectionPages/anagrafiche/clienti/clienti.query";

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
    const [loggedIn, setLoggenIn] = useState<boolean>(true); // TODO: change to false
    const navigate = useNavigate();

    const queryCache = new QueryCache({
        onError: (error) => {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            if (error instanceof Error) console.log(`❌ Error message: ${errorMessage}`);
            if (error instanceof AxiosError && error.response?.status === 401) {
                setLoggenIn(false);
                navigate("/Accedi");
            }
            toast.error(errorMessage);
        },
    });

    const mutationCache = new MutationCache({
        onError: (error) => {
            const errorMessage = error instanceof Error ? error.message : "Unknown error";
            if (error instanceof Error) console.log(`❌ Error message: ${errorMessage}`);
            if (error instanceof AxiosError && error.response?.status === 401) {
                setLoggenIn(false);
                navigate("/Accedi");
            }
            toast.error(errorMessage);
        },
    });

    const [queryClient] = useState(
        () =>
            new QueryClient({
                queryCache,
                mutationCache,
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false, // default: true
                    },
                },
            }),
    );

    return (
        <QueryClientProvider client={queryClient}>
            <AppSettings>
                <Toaster />
                <div>
                    {!loggedIn ? (
                        <Routes>
                            <Route path="/Accedi" element={<SignIn />} />
                            <Route path="/Registrazione" element={<SignUp />} />
                            <Route
                                path={"*"}
                                errorElement={<RouterError />}
                                element={<ErrorLoginPage isAuth={loggedIn} />}
                            />
                        </Routes>
                    ) : (
                        <Layout menuItemsData={menuItemsData}>
                            <Routes>
                                <Route
                                    path={"*"}
                                    errorElement={<RouterError />}
                                    element={<ErrorPage isAuth={loggedIn} />}
                                />
                                {menuItemsData.map((item) => {
                                    return item.route.map((routeItem) => {
                                        return (
                                            <Route
                                                key={routeItem.id}
                                                path={routeItem.path}
                                                element={routeItem.element}
                                            />
                                        );
                                    });
                                })}
                            </Routes>
                        </Layout>
                    )}
                </div>
            </AppSettings>

            <ReactQueryDevtools />
        </QueryClientProvider>
    );
}
