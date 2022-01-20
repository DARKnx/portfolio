import styled from "styled-components";




export const Background = styled.main`
width: 100%;
height: 91.9vh;
position: relative;
background-color: ${({theme}) => theme.colors.primary};
display: flex;
align-items: center;
`

export const TextContainer = styled.div`

margin-left: 80px;
width: 500px;
height: 200px;
font-weight: 700;
white-space: nowrap;
 .primaryText {
    font-size: 30px;
    color: ${({theme}) => theme.colors.white};
 }
 
 .textName, span {
    font-size: 50px;
    color: ${({theme}) => theme.colors.white};
    span {
        color: ${({theme}) => theme.colors.secondary};
    }
 }

 .textAnimated {
   margin-right: 0 auto;
   border-right: 2px solid ${({theme}) => theme.colors.secondary};
   font-size: 22px;
   width: min-content;
  
   color: ${({theme}) => theme.colors.white};
   overflow: hidden;
   
 }

 .cursorAnimated {

    animation: blickCursor 500ms  steps(37) infinite normal, typing 2.5s steps(37) 1s normal;
 }

@keyframes typing {
    from {
        width: 0;
    } to {
width: 220px;
    }
}
 @keyframes blickCursor {
     from {
    border-right-color: ${({theme}) => theme.colors.secondary};
     } to {
    border-right-color: transparent;
     }
 }
`

export const ImageContainer = styled.div`
 overflow: hidden;
position: relative;
display: flex;
justify-content: center;
align-items: center;
padding-left: 140px;





transform: translateY(0px);
animation: flutuar 5s ease-in-out infinite;



@keyframes flutuar{

    0% {
        transform: translateY(0px);
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0px);
    }

}

@media (max-width: 1100px){
 
 padding-left: 0;

}

@media (max-width: 999px){

 display: none;

}
`