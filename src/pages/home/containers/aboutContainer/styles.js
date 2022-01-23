import styled from 'styled-components';

export const Background = styled.main`
background-color: ${({theme}) => theme.colors.darkGrey};
border-top: 1px solid rgba(255, 255, 255, 0.096);
justify-content: center;
align-items: center;
position: relative;
flex-wrap: wrap;
height: 99.9vh;
display: flex;
width: 100%;
`
export const TextContainer = styled.div`
color: ${({theme}) => theme.colors.white};
text-align: center;
width: 800px;
height: 400px;
display: flex;
align-items: center;
justify-content: center;
h1 {
font-size: 40px;
font-weight: 700px;
padding-bottom: 40px;
}

h2, span {
font-size: 20px;

span {
color: ${({theme}) => theme.colors.secondary}; 
}

}

`