import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

import { Container, BurguerContainer } from './styles.js';



const Navbar = () => {
   
    const [state, setState] = useState(false);
    const navigate = useNavigate();

    const modifyState = () => setState(!state);
    
    const handlerToHome = () => navigate('/home') 

    return (
       <Container>
            <body>
                <header> 
                    <nav>
                        <a class="logo" onClick={handlerToHome}>DARK</a>
                        
                            <div class={state ? 'mobilemenu active' : 'mobilemenu'} onClick={modifyState}>
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="line3"></div>
                            </div>
                  
                        <ul class={state ? 'navlist active' : 'navlist'}>
                            <li><a>Inicio   <span></span> </a></li>
                            <li><a>Sobre    <span></span> </a></li>
                            <li><a>Projetos <span></span> </a></li>
                            <li><a>Contato  <span></span> </a></li>
                        </ul>
                    </nav>
                </header>
            </body>
       </Container>
    )

}


export default Navbar

