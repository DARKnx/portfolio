import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navbar';

import { Background } from './styles';


const Links = () => {
    
    const navigate = useNavigate();

    const handleToHome = () => navigate('/home');



return (
<div>
<Navbar/>

      <Background>
        <ul class='list'>
            <li><a href="https://instagram/darknx.br">Instagram</a></li>
            <li><a href="..">Discord</a></li>
            <li><a onClick={handleToHome}>Portfolio</a></li>
        </ul>
      </Background>
      </div>
  

)

}




export default Links 