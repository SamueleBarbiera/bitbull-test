"use client";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Link from "next/link"

interface IErrorLoginPage {
    isAuth: boolean;
}

export default function ErrorLoginPage(props: IErrorLoginPage) {
    return (
        <section className="bg-white dark:bg-sky-900 ">
            <div className="container flex justify-center items-center min-h-screen px-6 py-12 mx-auto">
                <div>
                    <p className="text-6xl font-medium text-sky-900 dark:text-sky-700">401 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl"></h1>
                    <p className="mt-4 pb-8 text-gray-500 dark:text-gray-400">
                        C&apos;è stato un errore, riprova ad accedere al tuo account
                    </p>
                    <Link
                        href={props.isAuth ? "/Accedi" : "/Report/Dashboard"}
                        className={cn(
                            buttonVariants({ variant: "default" }),
                            "drop-shadow-md  right-4 top-4 md:right-8 md:top-8",
                        )}
                    >
                        Accedi
                    </Link>
                </div>
            </div>
        </section>
    );
}
