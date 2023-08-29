import { Link } from "react-router-dom";
import { UserAuthForm } from "@/components/auth/UserAuthForm";
import { buttonVariants } from "@/components/ui/Button";
import { cn } from "@/lib/utils";



export default function SignIn() {
    return (
        <>
            <div className="container  h-screen flex flex-row items-center justify-center max-w-full ">
                <Link
                    to="/Registrazione"
                    className={cn(
                        buttonVariants({ variant: "default" }),
                        "drop-shadow-md absolute right-4 top-4 md:right-8 md:top-8",
                    )}
                >
                    Registrati
                </Link>

                <div className="p-8 mx-auto container items-center justify-center drop-shadow-md">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] rounded-2xl border-2 py-14 px-8 outline-1 outline-gray-300">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight ">Accedi</h1>
                            <p className="text-sm ">
                                Inserisci la tua email per fare l&apos;accesso
                            </p>
                        </div>
                        <UserAuthForm />
                        <p className="px-8 text-center text-sm ">
                            Continuando, accetterai i nostri{" "}
                            <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
                                Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link to="/privacy" className="underline underline-offset-4 hover:text-primary">
                                Privacy Policy
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
