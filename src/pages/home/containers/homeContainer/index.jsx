import { Background, ImageContainer, TextContainer , Footer} from './styles';

import programingImage from '../../../../assets/imgs/programing.svg';

import { icons } from '../../../../assets/files/footerIcons';


const HomeContainer = () => {

      return (

      <Background>

        <TextContainer>
          <h2 class="primaryText">Olá, eu sou</h2>
          <h1 class="textName">João Vitor Dutra<span>.</span></h1>
          <h2 class="textAnimated cursorAnimated">Back-end developer.&nbsp;</h2>
        </TextContainer>

        <ImageContainer>
          <img src={programingImage} alt='programing' height={500} width={500} />
        </ImageContainer>

        <Footer>
          <ul>
            {
              icons.map(X => {

                return (
                  <li>
                    <a href={X.link} class="item">
                      <X.icon alt={X.name} size={25}/>
                    </a>
                  </li>
                )
                
                })
            }
          </ul>
        </Footer>
        
      </Background>
      
    )
}

export default HomeContainer;
