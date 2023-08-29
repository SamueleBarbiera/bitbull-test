import { useMutation, useQuery } from "@tanstack/react-query";
import { httpCall } from "../../..";
import { API_ENDPOINTS } from "../../../end-points";
import { TRegisterUserInput, TLoginInput, TAuthCallback, TRefreshSession, TChallengeUserApproveAuth, TChallengeUserDenyAuth, TCreateUserClient, TEditUserClient, TCreateUserAccTkn } from "./types";

export const useUserFetch = () => {
    return {
        useGetMe: () => {
            return useQuery({
                queryKey: ["useGetMe"],
                queryFn: () => httpCall({
                    genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.GET_ME, type: "getAll"
                })
            });
        },

        useLogoutMutation: () => {
            return useQuery({ queryKey: ["useLogoutMutation"], queryFn: () => httpCall<true | false, null>({ genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.GET_LOGOUT, type: "getAll" }) });
        },



        useRegisterMutation: () => {
            return useMutation({
                mutationKey: ["useRegisterMutation"],
                mutationFn: (input: TRegisterUserInput) =>
                    httpCall<{ token: string; permissions: string }, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.REGISTER,
                        type: "post",
                    }),
            });
        },

        useLoginCreateTokenMutation: () => {
            return useMutation({
                mutationKey: ["useLoginCreateTokenMutation"],
                mutationFn: (input: TLoginInput) => {
                    return httpCall<{ token: string; permissions: string }, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.LOGIN_CREATE_TOKEN,
                        type: "post",
                    });
                },
            });
        },

        useGetAuthCallback: () => {
            return useMutation({
                mutationKey: ["useGetAuthCallback"],
                mutationFn: (input: TAuthCallback) => {
                    return httpCall<unknown, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.GET_AUTHORIZE_CALLBACK,
                        type: "post",
                    });
                },
            });
        },

        useRefreshSession: (id: number) => {
            return useMutation({
                mutationKey: ["useRefreshSession"],
                mutationFn: (input: TRefreshSession) =>
                    httpCall<unknown, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.REFRESH_SESSION,
                        type: "update",
                        id: id
                    }),
            });
        },

        useChallengeUserApproveAuth: (id: number) => {
            return useMutation({
                mutationKey: ["useChallengeUserApproveAuth"],
                mutationFn: (input: TChallengeUserApproveAuth) =>
                    httpCall<unknown, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.CHALLENGE_USER_APPROVE_AUTH,
                        type: "update",
                        id: id
                    }),
            });
        },

        useChallengeUserDenyAuth: (id: number) => {
            return useMutation({
                mutationKey: ["useChallengeUserDenyAuth"],
                mutationFn: (input: TChallengeUserDenyAuth) =>
                    httpCall<unknown, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.CHALLENGE_USER_DENY_AUTH,
                        type: "delete",
                        id: id
                    }),
            });
        },

        useGetUserAuthTokens: () => {
            return useQuery({
                queryKey: ["useGetUserAuthTokens"],
                queryFn: () => httpCall({
                    genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.GET_USER_AUTH_TOKENS, type: "getAll"
                })
            });
        },

        useDeleteUserAuthTokens: (id: number) => {
            return useMutation({
                mutationKey: ["useDeleteUserAuthTokens"],
                mutationFn: () =>
                    httpCall<unknown, typeof id>({
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.DELETE_USER_AUTH_TOKENS_BY_ID,
                        type: "delete",
                        id: id
                    }),
            });
        },

        useGetUserClient: () => {
            return useQuery({
                queryKey: ["useGetUserClient"],
                queryFn: () => httpCall({
                    genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.GET_USER_CLIENTS, type: "getAll"
                })
            });
        },

        useCreateUsersClients: () => {
            return useMutation({
                mutationKey: ["useCreateUsersClients"],
                mutationFn: (input: TCreateUserClient) => {
                    return httpCall<unknown, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.CREATE_USER_CLIENTS,
                        type: "post",
                    });
                },
            });
        },

        useEditUserClientById: (id: number) => {
            return useMutation({
                mutationKey: ["useEditUserClientById"],
                mutationFn: (input: TEditUserClient) =>
                    httpCall<unknown, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.EDIT_USER_CLIENT_BY_ID,
                        type: "update",
                        id: id
                    }),
            });
        },

        useDeleteUserClientById: (id: number) => {
            return useMutation({
                mutationKey: ["useDeleteUserClientById"],
                mutationFn: () =>
                    httpCall<unknown, typeof id>({
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.DELETE_USER_CLIENT_BY_ID,
                        type: "delete",
                        id: id
                    }),
            });
        },

        useGetUserAvailableAuthScope: () => {
            return useQuery({
                queryKey: ["useGetUserAvailableAuthScope"],
                queryFn: () => httpCall({
                    genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.GET_USER_AVAILABLE_AUTH_SCOPE, type: "getAll"
                })
            });
        },

        useGetUserPersonalAccessToken: () => {
            return useQuery({
                queryKey: ["useGetUserPersonalAccessToken"],
                queryFn: () => httpCall({
                    genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.GET_USER_PERSONAL_ACCESS_TOKEN, type: "getAll"
                })
            });
        },

        useCreateUserPersonalAccessToken: () => {
            return useMutation({
                mutationKey: ["useCreateUserPersonalAccessToken"],
                mutationFn: (input: TCreateUserAccTkn) => {
                    return httpCall<unknown, typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.CREATE_USER_PERSONAL_ACCESS_TOKEN,
                        type: "post",
                    });
                },
            });
        },

        useDeleteUserPersonalAccessTokenById: (id: number) => {
            return useMutation({
                mutationFn: () =>
                    httpCall<unknown, typeof id>({
                        genericPath: API_ENDPOINTS.UTENTE.USER_DATA_AUTH.DELETE_USER_PERSONAL_ACCESS_TOKEN_BY_ID,
                        type: "delete",
                        id: id
                    }),
            });
        }
    }
}
