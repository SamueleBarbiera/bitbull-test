import { useMutation, useQuery } from "@tanstack/react-query";
import { httpCall } from "../../../..";
import { API_ENDPOINTS } from "../../../../end-points";
import { TClientiAll, TCreateClienti, TUpdateClienti } from "./types";

export const useClientiFetch = () => {
    return {
        useGetAllClienti: () => {
            return useQuery({
                queryKey: ["useGetAllClienti"],
                queryFn: () =>
                    httpCall<TClientiAll["data"][]>({
                        genericPath: API_ENDPOINTS.ANAGRAFICO.CLIENTI.GET_ALL,
                        type: "getAll",
                    }),
            });
        },

        useGetAllClientiTariffario: () => {
            return useQuery({
                queryKey: ["useGetAllClientiTariffario"],
                queryFn: () => {
                    return httpCall<TClientiAll[]>({
                        genericPath: API_ENDPOINTS.ANAGRAFICO.CLIENTI.GET_ALL_TARIFFARIO,
                        type: "getAll",

                    });
                },
            });
        },

        useCreateClientiMutation: () => {
            return useMutation({
                mutationKey: ["useCreateClientiMutation"],
                mutationFn: (input: TCreateClienti) => {
                    return httpCall<TClientiAll[], typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.ANAGRAFICO.CLIENTI.CREATE_CLIENTI,
                        type: "post",
                    });
                },
            });
        },

        useCreateImportaClientiMutation: (id: number) => {
            return useMutation({
                mutationKey: ["useCreateImportaClientiMutation"],
                mutationFn: (input: unknown) => {
                    return httpCall<TClientiAll[], typeof input>({
                        input,
                        id,
                        genericPath: API_ENDPOINTS.ANAGRAFICO.CLIENTI.IMPORTA_CLIENTE_BY_ID,
                        type: "post",
                    });
                },
            });
        },

        useManageClientiMutation: (id: number) => {
            return useMutation({
                mutationKey: ["useManageClientiMutation"],
                mutationFn: (input: TUpdateClienti) => {
                    return httpCall<TClientiAll[], typeof input>({
                        input,
                        genericPath: API_ENDPOINTS.ANAGRAFICO.CLIENTI.EDIT_CLIENTI_BY_ID,
                        type: "update",
                        id: id,
                    });
                },
            });
        },

        useDeleteClientiMutation: (id: number) => {
            return useMutation({
                mutationKey: ["useDeleteClientiMutation"],
                mutationFn: () => {
                    return httpCall<TClientiAll[], typeof id>({
                        genericPath: API_ENDPOINTS.ANAGRAFICO.CLIENTI.DELETE_CLIENTI_BY_ID,
                        type: "delete",
                        id: id,
                    });
                },
            });
        },
    };
};
