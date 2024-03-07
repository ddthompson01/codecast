"use client";

import { useEffect } from "react";
import { useMediaQuery } from "usehooks-ts";

import { cn } from "@/lib/utils";
import { useDashboardSidebar } from "@/store/use-dashboard-sidebar";

const Container = ({ children }) => {
  const {
    collapsed,
    onCollapse,
    onExpand,
  } = useDashboardSidebar((state) => state);
  const matches = useMediaQuery(`(max-width: 1024px)`);
  
  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return (
    <div className={cn(
      "flex-1",
      collapsed ? "ml-[70px]" : "ml-[70px] lg:ml-[280px]"
    )}>
      {children}
    </div>
  );
};

export default Container;
