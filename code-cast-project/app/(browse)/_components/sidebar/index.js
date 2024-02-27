import Wrapper from "./wrapper"
import Toggle from  "./toggle"
import HomepageButton from "./homepageButton";
import CategoriesButton from "./categoriesButton";

function Sidebar() {

    return(
        <Wrapper>
            <Toggle />
            <HomepageButton/>
            <CategoriesButton/>
        </Wrapper>
    )
}

export default Sidebar;