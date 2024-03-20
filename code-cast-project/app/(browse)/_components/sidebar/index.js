import Navigation from "./navigation";
import Toggle from "./toggle";
import CategoriesButton from "./categoriesButton";
import HomepageButton from "./homepageButton";
import Wrapper from "./wrapper";

function Sidebar() {

    return(
        <Wrapper>
             <Toggle/>
             <HomepageButton/>
             <CategoriesButton/>
             <Navigation/>
        </Wrapper>
    )
}

export default Sidebar;