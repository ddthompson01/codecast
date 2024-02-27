"use client"
import SideBarMessage from "/components/SideBarMessage"
import {Button} from "/components/ui/button"
import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import {useSidebar} from "./use-sidebar"


function Toggle() {

    const {
        collapsed,
        onExpand,
        onCollapse
    } = useSidebar((state) => state);

    const label = collapsed ? "Expand" : "Collapse";

    return (
        <>
            {!collapsed && (
                <div className="p-3 pl-6 mb-2 flex items-center w-full">
                    <div>
                        SideBar
                    </div>
                    <SideBarMessage label={label} side="right" asChild>
                        <Button 
                        onClick={onCollapse}
                        className="h-auto p-2 ml-auto" 
                        variant="ghost">
                            <ArrowLeftFromLine className="h-4 w-4" />
                        </Button>
                    </SideBarMessage>
                </div>
            )}

            {collapsed && (
                <div className="hidden lg:flex w-full items-center justify-center pt-4 mb-4">
                    <SideBarMessage label={label} side="right" asChild>
                        <Button 
                        onClick={onExpand}
                        variant="ghost" 
                        className="h-auto p-2">
                            <ArrowRightFromLine className="h-4 w-4"/>
                        </Button>
                    </SideBarMessage>
                </div>
            )}
        </>
    )
}

export default Toggle;