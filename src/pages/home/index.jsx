import {  BackgroundContainer } from "./styles";

import AboutContainer from "./containers/aboutContainer";
import HomeContainer from "./containers/homeContainer";
import Navbar from "../../components/navbar";


const Home = () => {

return(
<BackgroundContainer>
<Navbar/>
<HomeContainer/>
</BackgroundContainer>

)

}




export default Home;
