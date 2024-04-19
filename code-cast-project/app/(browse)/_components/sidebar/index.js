import Toggle from "./toggle";
import CategoriesButton from "./categoriesButton";
import HomepageButton from "./homepageButton";
import Wrapper from "./wrapper";
import FriendsButton from "./friendsButton";

function Sidebar() {

    return(
        <Wrapper>
             <Toggle/>
             <HomepageButton/>
             <CategoriesButton/>
             <FriendsButton/>
        </Wrapper>
    )
}

export default Sidebar;