import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useNavigate } from "react-router-dom";
import { useUserFetch } from "../../api/hooks/others/auth/user.query";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";
import { Icons } from "../Icons";
import { toast } from "react-hot-toast";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../ui/form";
import axios, { AxiosError } from "axios";

const UserRegistrationForm = () => {
    const { mutate: registerUser, isLoading: loading } = useUserFetch().useRegisterMutation();

    const FormSchema = z.object({
        name: z.string().min(2, {
            message: "Il nome deve essere almeno di 2 caratteri.",
        }),
        email: z.string().email("form:error-email-format"),
        password: z.string().min(10, {
            message: "La password deve essere almeno di 10 caratteri.",
        }),
    });

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    const router = useNavigate();

    function onSubmit({ name, email, password }: z.infer<typeof FormSchema>) {
        registerUser(
            {
                name,
                email,
                password,
            },
            {
                onSuccess: (data: { token: string }) => {
                    if (data.token) {
                            toast.success("Ti sei registrato con successo!");
                            router("/Report/Dashboard");
                            return;
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
        <>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input
                                        id="name"
                                        placeholder="name"
                                        type="name"
                                        autoCapitalize="none"
                                        autoComplete="name"
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

                    <Button disabled={loading}>
                        {loading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                        Accedi
                    </Button>
                </form>
            </Form>
        </>
    );
};

export default UserRegistrationForm;
