import { Actions } from "./actions";
import { Search } from "./search";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-20 z-[49] px-4 lg:px-10 flex justify-between items-center shadow-sm text-white text-xl font-semibold" style={{ backgroundColor: '#131F2F' }}>
      <div className="ml-6 lg:ml-20"> 
        CodeCast - A Live Learning Platform for Programmers
      </div>
      <div className="flex items-center space-x-4"> 
        <Search />
        <Actions />
      </div>
    </nav>
  );
};