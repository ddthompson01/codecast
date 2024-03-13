import CategoriesButton from "./categoriesButton";
import HomepageButton from "./homepageButton";
import Toggle from "./toggle";
import Wrapper from "./wrapper";

function Sidebar() {

    return(
        <Wrapper>
             <Toggle/>
            <HomepageButton/>
            <CategoriesButton/>
        </Wrapper>
    )
}

export default Sidebar;