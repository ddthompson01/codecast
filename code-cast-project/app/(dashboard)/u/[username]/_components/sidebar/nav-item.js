"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useDashboardSidebar } from "@/store/use-dashboard-sidebar";

const NavItem = ({
  icon: Icon,
  label,
  href,
}) => {
  const { collapsed } = useDashboardSidebar((state) => state);

  return (
    <Button
      asChild
      variant="ghost"
      className={cn(
        "w-full h-12",
        collapsed ? "justify-center" : "justify-start",
      )}
    >
      <Link href={href}>
        <div className="flex items-center gap-x-6">
          <Icon className={cn(
            "h-4 w-4",
            collapsed ? "mr-0" : "mr-2"
          )} />
          {!collapsed && (
            <span>
              {label}
            </span>
          )}
        </div>
      </Link>
    </Button>
  );
};



export {NavItem};
