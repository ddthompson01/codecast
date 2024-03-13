import { create } from "zustand";

 export const useSidebar = create((set) => ({
   collapsed: true,
   onExpand: () => set(() => ({ collapsed: false })),
   onCollapse: () => set(() => ({ collapsed: true })),
 }));