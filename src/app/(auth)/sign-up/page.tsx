import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import UserRegistrationForm from "@/components/auth/UserRegistrationForm";
import { buttonVariants } from "@/components/ui/Button"

export default function SignUp() {
    return (
        <>
            <div className="container  h-screen flex flex-row items-center justify-center max-w-full ">
                <Link
                    to="/Accedi"
                    className={cn(buttonVariants({ variant: "default" }), "absolute right-4 top-4 md:right-8 md:top-8")}
                >
                    Accedi
                </Link>

                <div className="p-8 mx-auto container items-center justify-center drop-shadow-md">
                    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] rounded-2xl border-2 py-14 px-8 outline-1 outline-gray-300">
                        <div className="flex flex-col space-y-2 text-center">
                            <h1 className="text-2xl font-semibold tracking-tight">Registrati</h1>
                            <p className="text-sm text-muted-foreground">Aggiungi la tua email per iscriverti</p>
                        </div>
                        <UserRegistrationForm />
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            Continuando, accetterai i nostri{" "}
                            <Link to="/terms" className="underline underline-offset-4 hover:text-primary">
                                Terms of Service
                            </Link>{" "}
                            e{" "}
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
