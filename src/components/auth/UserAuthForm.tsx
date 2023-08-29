"use client";
import { Input } from "../ui/Input";
import { Icons } from "../Icons";
import { z } from "zod";
import { useUserFetch } from "../../api/hooks/others/auth/user.query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-hot-toast";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import axios, { AxiosError } from "axios";
import { Button } from "../ui/Button";
import { useRouter } from "next/navigation"

export function UserAuthForm() {
    const { mutate: login, isLoading: loading } = useUserFetch().useLoginCreateTokenMutation();

    const router = useRouter();

    const FormSchema = z.object({
        email: z.string().email(),
        password: z.string().min(10, {
            message: "La password deve essere almeno di 10 caratteri.",
        }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    function onSubmit({ email, password }: z.infer<typeof FormSchema>) {
        login(
            {
                email,
                password,
            },
            {
                onSuccess: (data: { token: string }) => {
                    if (data.token) {
                        toast.success("Login effettuato con successo");
                        router.push("/Report/Dashboard");
                    } else {
                        toast.error("Errore, le tue credenziali non sono corrette");
                    }
                },
                onError: (error) => {
                    if (axios.isAxiosError(error) && error instanceof AxiosError) {
                        toast.error(`Errore, ${error.message}`);
                    } else {
                        toast.error(`Errore, ${JSON.stringify(error)}`);
                    }
                },
            },
        );
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input
                                    id="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    autoCapitalize="none"
                                    autoComplete="email"
                                    autoCorrect="off"
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input
                                    id="password"
                                    placeholder="password"
                                    type="password"
                                    autoCapitalize="none"
                                    autoComplete="password"
                                    autoCorrect="off"
                                    disabled={loading}
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button disabled={loading} variant={"default"}>
                    {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                    Accedi
                </Button>
            </form>
        </Form>
    );
}
