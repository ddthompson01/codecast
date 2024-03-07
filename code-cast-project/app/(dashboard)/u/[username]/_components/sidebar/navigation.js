"use client";

import { useUser } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { 
  Fullscreen,
  KeyRound,
  MessageSquare,
  Users,
} from "lucide-react";

import { NavItem } from "./nav-item";

function Navigation() {
  const pathname = usePathname();
  const { user } = useUser();

  const routes = [
    {
      label: "Stream",
      href: `/u/${user?.username}`,
      icon: Fullscreen,
    }
  ];

  return (
    <ul className="space-y-2 px-2 pt-4 lg:pt-0 gap-x-4">
     {routes.map((route) => (
        <NavItem
          key={route.href}
          label={route.label}
          icon={route.icon}
          href={route.href}
          isActive={pathname === route.href}
        />
     ))}
    </ul>
  );
};

export default Navigation;