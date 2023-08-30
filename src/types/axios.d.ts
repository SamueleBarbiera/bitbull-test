declare module "axios" {
    interface AxiosStatic {
        isAxiosError<T = unknown, D = unknown>(payload: unknown): payload is AxiosError<T, D>;
    }
}

export {};
