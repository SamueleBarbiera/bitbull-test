import { Icons } from "../Icons";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/HoverCard";
import { z } from "zod";
import { Button } from "../ui/Button";

const email = z.string().email();
const dateScadenza = z.string().datetime();

interface IMenuBtn {
    username: string;
    email: z.infer<typeof email>;
    dateScadenza: z.infer<typeof dateScadenza>;
}

export default function MenuBtn({ email, username, dateScadenza }: IMenuBtn) {
    return (
        <nav className="flex ">
            <Button variant="sky" className="">
                <Icons.settings />
            </Button>
            <Button variant="sky" className="">
                <Icons.user />
            </Button>
            <HoverCard openDelay={50} closeDelay={50}>
                <HoverCardTrigger asChild>
                    <Button variant="sky" className="">
                        <Icons.info />
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent className="w-40 mr-2">
                    <div className="flex justify-between space-x-4">
                        <p className="text-sm ">
                            <p className="font-medium">
                                Nome utente: <p className="font-normal">{username}</p>
                            </p>
                            <br />
                            <p className="font-medium">
                                Email utente: <p className="font-normal">{email}</p>
                            </p>
                            <br />
                            <p className="font-medium">
                                Data scadenza: <p className="font-normal">{dateScadenza}</p>
                            </p>
                        </p>
                    </div>
                </HoverCardContent>
            </HoverCard>
            <Button variant="sky" className="">
                <Icons.logout />
            </Button>
        </nav>
    );
}
