import { Navbar } from "./_components/navbar";

const BrowseLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full pt-20">
        {children}
      </div>
    </>
  );
};

export default BrowseLayout;



