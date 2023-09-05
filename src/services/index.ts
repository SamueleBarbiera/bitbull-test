/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosResponse, AxiosError } from "axios";

interface InstanceUpdate<D> {
    type: "update";
    genericPath: string;
    id: number;
    input: D;
}
interface InstanceSend<D> {
    type: "post";
    input: D;
    id?: number;
}
interface InstanceGet {
    type: "getAll";
}
interface InstanceGetByID {
    type: "getByID";
    id: number;
}
interface InstanceDelete<D> {
    type: "delete";
    id: number;
    input?: D;
}

type HttpInstanceStructure<D = unknown> =
    | InstanceDelete<D>
    | InstanceSend<D>
    | InstanceGetByID
    | InstanceUpdate<D>
    | InstanceGet;

export type HttpInstanceType<D> = HttpInstanceStructure<D> & { genericPath: string };

const httpInstance = axios.create({
    timeout: 5000,
});

httpInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        const errorMessage = error instanceof AxiosError ? error.message : "Unknown error";
        if (error instanceof AxiosError) console.error(`❌ Error message: ${errorMessage}`);
        return Promise.reject(errorMessage);
    },
);

export const httpCall = async <T, D = null>(state: HttpInstanceType<D>): Promise<T> => {
    let data: T;
    switch (state.type) {
        case "getByID":
            ({ data } = await httpInstance.get<T, AxiosResponse<T, D>, D>(`${state.genericPath}/${state.id}`));
            break;
        case "getAll":
            ({ data } = await httpInstance.get<T, AxiosResponse<T>, D>(state.genericPath));
            break;
        case "post":
            ({ data } = await httpInstance.post<T, AxiosResponse<T>, D>(
                state.id ? `${state.genericPath}/${state.id}` : state.genericPath,
                state.input,
            ));
            break;
        case "update":
            ({ data } = await httpInstance.put<T, AxiosResponse<T>, D>(
                `${state.genericPath}/${state.id}`,
                state.input,
            ));
            break;
        case "delete":
            ({ data } = await httpInstance.put<T, AxiosResponse<T>, D>(
                `${state.genericPath}/${state.id}`,
                state.input ? state.input : undefined,
            ));
            break;
        default:
            throw new Error("Invalid HTTP instance type");
    }
    return data;
};

export default httpInstance;
