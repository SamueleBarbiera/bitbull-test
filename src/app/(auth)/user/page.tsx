import { useLogoutMutation } from '@/api/auth/auth.query'
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";

export default function UserPage( ) {
    const { mutate: logout } = useLogoutMutation();
    return (
        <Button variant="default" onClick={() => logout()}>
            Esci dall`&apos;`account
            <Icons.logout className="ml-2 h-4 w-4" />
        </Button>
    );
}
