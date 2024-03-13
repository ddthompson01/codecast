import { Actions } from "./actions";
import { Search } from "./search";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-24 z-[49] px-10 lg:px-12 flex justify-between items-center shadow-sm text-white font-semibold" style={{ backgroundColor: '#131F2F' }}>
      <div className="flex items-center"> {}
        <img src="/logo3.svg" alt="CodeCast Logo" className="mr-4 h-12 sm:h-16" />
        <span className="text-lg font-semibold">A Live Learning Platform for Programmers</span>
      </div>
      <div className="flex items-center space-x-6">
        <Search />
        <Actions />
      </div>
    </nav>
  );
};
