import { SheetTrigger, SheetContent, SheetHeader, SheetTitle, Sheet } from "../ui/sheet";
import { Icons } from "./../Icons";
import SideBar from "./SideBar";
import { Button } from "../ui/Button";
import { MenuItemsData } from "../../../types/routes";

interface ISideBarMenuMobile {
    menuItemsData: MenuItemsData[];
}

export default function SideBarMenuMobile({ menuItemsData }: ISideBarMenuMobile) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="sky" className="-ml-4 pt-4">
                    <Icons.menu />
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader className="m-4">
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <SideBar menuItemsData={menuItemsData} />
            </SheetContent>
        </Sheet>
    );
}
