import {useNavigate } from 'react-router-dom';
import {useState} from 'react';

import { Background } from "./styles";


const Navbar = () => {

    const [state, setState] = useState(false);

    const navigate = useNavigate();

    const handleToProjects = () => navigate('/projects');
    const handleToContact = () => navigate('/contact');
    const handleToAbout = () => navigate('/about');
    const handleToHome = () => navigate('/home');
     
    const toggleMode = () => {
     setState(!state)
    }
    
    


return (
  
<Background>
    <body>
    <header>
        <nav> 
             <a class="logo" onClick={handleToHome} >DARK</a>
            <div class="mobileMenu" onClick={toggleMode}>
             <div class="one"></div>
             <div class="two"></div>
             <div class="three"></div>
            </div>
            <ul class={state ? 'navlist active' : 'navlist' }>
             <li><a onClick={handleToHome}>Inicio</a></li>
             <li><a onClick={handleToAbout}>Sobre</a></li>
             <li><a onClick={handleToProjects}>Projetos</a></li>
             <li><a onClick={handleToContact}>Contato</a></li>
            </ul>
        </nav>
    </header> 
    </body>
    
</Background>

)


}




export default Navbar;
