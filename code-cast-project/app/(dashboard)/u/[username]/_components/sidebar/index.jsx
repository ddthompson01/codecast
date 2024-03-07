import Navigation from "./navigation";
import Toggle from "./toggle";
import Wrapper from "./wrapper";

function Sidebar() {

    return(
        <Wrapper>
             <Toggle/>
             <Navigation/>
        </Wrapper>
    )
}

export default Sidebar;