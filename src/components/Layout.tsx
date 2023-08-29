import { MenuItemsData } from "../../types/routes";
import { ReactNode } from "react";
import Navbar from "./navigation/Navbar";
import SideBar from "./navigation/SideBar";

interface ILayout {
    children: ReactNode;
    menuItemsData: MenuItemsData[];
}

export default function Layout({ children, menuItemsData }: ILayout) {
    return (
        <div>
            <Navbar menuItemsData={menuItemsData} />
            <main className="pt-14 max-w-full flex ">
                <aside className="md:block hidden md:w-1/5 bg-white h-screen p-4 pt">
                    <SideBar menuItemsData={menuItemsData} />
                </aside>
                <section className="container mx-auto items-center pt-4 bg-slate-200 md:w-4/5">{children}</section>
            </main>
        </div>
    );
}
