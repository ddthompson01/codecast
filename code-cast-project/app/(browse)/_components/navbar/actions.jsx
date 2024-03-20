import { SignInButton, UserButton, currentUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Clapperboard } from "lucide-react";
import Link from "next/link";

export const Actions = async () => {
    const user = await currentUser();
    return (
        <div className="flex items-center">
            {!user && (
                <SignInButton>
                    <Button size="sm" variant="primary">
                        Log in/Sign Up
                    </Button>
                </SignInButton>
            )}
            {!!user && (
                <div className="flex items-center gap-x-4">
                    <Button
                    size="sm"
                    variant="ghost"
                    className="text-muted-foreground hover:text-primary"
                    asChild
                    >
                        <Link href={`/u/${user.username}`}>
                            <Clapperboard className="h-5 w-5 lg:mr-2"/>
                            <span className="hidden lg:block">
                                Dashboard
                            </span>
                        </Link>
                    </Button>
                    <UserButton
                        afterSignOutUrl="/"
                    />

                </div>

            )}
        </div>
    );
};