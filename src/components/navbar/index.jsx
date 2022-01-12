import { useState } from 'react';

import { Container, BurguerContainer } from './styles.js';



const Navbar = () => {
   
    const [state, setState] = useState(false);

    const modifyState = () => setState(!state);

    return (
       <Container>
            <body>
                <header> 
                    <nav>
                        <a class="logo">DARK</a>
                        
                            <div class={state ? 'mobilemenu active' : 'mobilemenu'} onClick={modifyState}>
                                <div class="line1"></div>
                                <div class="line2"></div>
                                <div class="line3"></div>
                            </div>
                    
                        <ul class={state ? 'navlist active' : 'navlist'}>
                            <li><a>Inicio</a></li>
                            <li><a>Sobre</a></li>
                            <li><a>Projetos</a></li>
                            <li><a>Contato</a></li>
                        </ul>
                    </nav>
                </header>
            </body>
       </Container>
    )

}


export default Navbar

