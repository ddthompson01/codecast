"use client";


import { useSidebar } from "./use-sidebar";

function Wrapper({ children }) {
  const { collapsed } = useSidebar((state) => state);

  return (
    <aside className={`fixed left-0 flex flex-col ${collapsed ? 'w-[70px]' : 'w-[280px]'} h-full border-r border-[#2D2E35] z-50 p-4`} style={{ backgroundColor: '#131F2F' }}>
      <div className="space-y-6">
        {children}
      </div>
    </aside>
  );
}

export default Wrapper;
