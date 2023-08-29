import { useMutation, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { httpCall } from "..";

export type ApiServiceErr<T = unknown> = AxiosError<T, unknown>;
type TDataInput<D = Record<string, unknown>> = D;
type DataResponse<T = Record<string, unknown>> = T;

export const UseCreate = <T = DataResponse, D = TDataInput>({
    genericPath,
    inputData,
}: {
    genericPath: string;
    inputData: D;
}) =>
    useMutation({
        mutationFn: () => httpCall<T, D>({ type: "post", genericPath: genericPath, input: inputData }),
    });

export const UseUpdate = <T = DataResponse, D = TDataInput>({
    genericPath,
    inputData,
    id,
}: {
    genericPath: string;
    inputData: D;
    id: number;
}) =>
    useMutation({
        mutationFn: () => httpCall<T, D>({ type: "update", genericPath: genericPath, input: inputData, id: id }),
    });


export const UseDeleteById = <T = DataResponse, D = TDataInput>({
    genericPath,
    id,
}: {
    genericPath: string;
    id: number;
}) =>
    useMutation({
        mutationFn: () => httpCall<T, D>({ type: "delete", genericPath: genericPath, id: id }),
    });

export const UseFindById = <T = DataResponse, D = TDataInput>({
    genericPath,
    id,
}: {
    genericPath: string;
    id: number;
}) =>
    useQuery({ queryFn: () => httpCall<T, D>({ type: "getByID", genericPath: genericPath, id: id }) })


export const UseFindAll = <T = DataResponse, D = TDataInput>({
    genericPath,
}: {
    genericPath: string;

}) =>
    useQuery({ queryKey: [genericPath], queryFn: () => httpCall<T, D>({ type: "getAll", genericPath: genericPath }) })