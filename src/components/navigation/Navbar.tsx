"use client";
import LogoHeader from "../../assets/LogoHeader.png";
import SideBarMenuMobile from "./SideBarMenuMobile";
import MenuBtn from "./MenuBtn";
import { MenuItemsData } from "../../../types/routes";
import Image from "next/image";

interface INavBar {
    menuItemsData: MenuItemsData[];
}

export default function Navbar({ menuItemsData }: INavBar) {
    return (
        <header className="fixed top-0 left-0 right-0 bg-gray-50 h-14 flex mx-auto justify-between items-center px-4 border-b-2 border-b-sky-600 text-sky-600">
            <Image src={LogoHeader} className="w-18 h-10 hidden md:block" alt="logo-header" />
            <div className="block md:hidden ">
                <SideBarMenuMobile menuItemsData={menuItemsData} />
            </div>
            <MenuBtn username={"Test"} email={"test@gmail.com"} dateScadenza={"2023-12-01"} />
        </header>
    );
}
