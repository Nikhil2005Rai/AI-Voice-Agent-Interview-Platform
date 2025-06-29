"use client";

import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions/auth.action";

const LogoutButton = () => {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await signOut(auth);  // Step 1: Firebase client logout
            await logout();       // Step 2: Server-side cookie removal
            router.push("/sign-in");  // Step 3: Redirect user
        } catch (error) {
            console.error("Logout failed", error);
            // Optionally, show an error toast here
        }
    };

    return (
        <Button className="btn-primary" onClick={handleLogout}>
            Logout
        </Button>
    );
};

export default LogoutButton;
