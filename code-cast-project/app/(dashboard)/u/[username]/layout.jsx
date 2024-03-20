import { Navbar } from "../../../(browse)/_components/navbar";
import Sidebar from "./_components/sidebar";
import Container from "./_components/container";


const DashboardLayout = async ({params, children}) => {

    return (
        <>
            <Navbar/>
        <div className="flex h-full pt-20">
            <Sidebar/>
            <Container>
                {children}
            </Container>
        </div>
        </>
    )
}

export default DashboardLayout;