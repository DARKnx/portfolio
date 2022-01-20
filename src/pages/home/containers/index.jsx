import React from 'react';

import { Background, ImageContainer, TextContainer } from './styles';

import svgImage from '../../../assets/imgs/programing.svg'

const HomeContainer = () => {
  return (

<Background>

<TextContainer>
<h2 class="primaryText">Olá, eu sou</h2>
<h1 class="textName">João Vitor Dutra<span>.</span></h1>
<h2 class="textAnimated cursorAnimated">Back-end developer.&nbsp;</h2>
</TextContainer>
<ImageContainer>
<img src={svgImage}  alt='programing' height={500} width={500} />
</ImageContainer>


</Background>
  
  );
};

export default HomeContainer;
