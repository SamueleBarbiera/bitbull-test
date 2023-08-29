import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface State {
    openToggleIndex: number | null;
    selectedItem: string | null;
    toggleDropdown: (index: number) => void;
    setSelectedItem: (item: string) => void;
}

interface LoggedInState {
    logged: boolean;
    setLogged: (item: boolean) => void;
}

export const useSideBarSelectStore = create<State>()(
    persist(
        (set) => ({
            openToggleIndex: null,
            selectedItem: null,
            toggleDropdown: (index) =>
                set((state) => ({ ...state, openToggleIndex: state.openToggleIndex === index ? null : index })),
            setSelectedItem: (item) => set((state) => ({ ...state, selectedItem: item })),
        }),
        {
            name: "side-menu-storage", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
);

export const useLoggedInStore = create<LoggedInState>()(
    persist(
        (set) => ({
            logged: true,
            setLogged: (item) => set((state) => ({ ...state, selectedItem: item })),
        }),
        {
            name: "logged-in-storage", // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
        },
    ),
);
