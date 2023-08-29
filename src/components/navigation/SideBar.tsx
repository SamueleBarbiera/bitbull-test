import { MenuItemsData } from "../../../types/routes";
import { useSideBarSelectStore } from "../../hooks/store";
import { useState } from "react";
import { cn } from "../../lib/utils";
import { Icons } from "../Icons";
import { Link, RouteObject } from "react-router-dom";

interface ISideBar {
    menuItemsData: MenuItemsData[];
}

export default function SideBar({ menuItemsData }: ISideBar) {
    const openToggleIndex = useSideBarSelectStore((state) => state.openToggleIndex);
    const selectedItem = useSideBarSelectStore((state) => state.selectedItem);
    const toggleDropdown = useSideBarSelectStore((state) => state.toggleDropdown);
    const setSelectedItem = useSideBarSelectStore((state) => state.setSelectedItem);
    const [isRotated, setIsRotated] = useState(false);

    const onItemClick = (item: RouteObject["path"]) => {
        setSelectedItem(item ?? "");
    };

    return (
        <>
            {menuItemsData.flatMap((dropdownData, index) => (
                <div key={index} className="rounded-md bg-gray-100">
                    {/* Button to toggle the dropdown */}

                    <button
                        className={cn(
                            "flex items-center grow w-full h-12 justify-between rounded-md text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border disabled:pointer-events-none disabled:opacity-50 truncate text-primary-foreground bg-white  hover:bg-primary p-2 mb-2 hover:text-white focus:outline-none",
                            openToggleIndex === index && "bg-primary text-white",
                        )}
                        onClick={() => toggleDropdown(index)}
                        onChange={() => setIsRotated(!isRotated)}
                        type="button"
                        title={dropdownData.label}
                    >
                        <div className="flex flex-row items-center w-full">
                            <p className="mx-2">{dropdownData.btnIcon}</p>
                            <p className="ml-1 mb-0.5 text-start truncate grow shrink">{dropdownData.label}</p>
                            <Icons.dropdown
                                className={`w-4 mx-2 ${openToggleIndex === index ? "rotate-180" : "rotate-0"}`}
                            />
                        </div>
                    </button>

                    {/* Dropdown content */}
                    {openToggleIndex === index && (
                        <div className="top-0 right-0 mt-2 mb-4 grow transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50">
                            {/* Dropdown items */}
                            {dropdownData.route.map((routeItem, idx) => {
                                return (
                                    <Link key={idx} onClick={() => onItemClick(routeItem.path)} to={routeItem.path}>
                                        <div
                                            key={idx}
                                            className={cn(
                                                "pb-3 pt-1 pr-2 pl-11 truncate text-gray-400 hover:text-gray-600 transition-all ease-in-out",
                                                selectedItem === routeItem.path && "text-primary truncate font-bold",
                                            )}
                                        >
                                            {routeItem.path.replace(/^\/\w+\/+/, "")}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            ))}
        </>
    );
}
