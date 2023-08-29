import { useMutation } from "@tanstack/react-query";
import { httpCall } from "..";


export interface LoginInputType {
    email: string;
    password: string;
}

export interface RegisterUserInputType {
    name: string;
    email: string;
    password: string;
}

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (input: LoginInputType) => {
            return httpCall<{ token: string; permissions: string }, LoginInputType>({
                input,
                genericPath: "",
                type: "post",
            });
        },
    });
};

export const useLogoutMutation = () => {
    return useMutation({ mutationFn: () => httpCall<true | false, null>({ genericPath: "", type: "getAll" }) });
};

export const useRegisterMutation = () => {
    return useMutation({
        mutationFn: (input: RegisterUserInputType) =>
            httpCall<{ token: string; permissions: string }, RegisterUserInputType>({
                input,
                genericPath: "",
                type: "post",
            }),
    });
};
