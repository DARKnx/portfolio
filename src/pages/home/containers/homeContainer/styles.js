import styled from "styled-components";




export const Background = styled.main`
    background-color: ${({theme}) => theme.colors.primary};
    justify-content: center;
    align-items: center;
    position: relative;
    flex-wrap: wrap;
    height: 91.9vh;
    display: flex;
    width: 100%;
`

export const TextContainer = styled.div`


    animation: moveToTitle 2s ease-in-out;
    white-space: nowrap;
    padding-left: 80px;
    font-weight: 700;
    max-width: 50%;
    height: 200px;
    width: 400px;
    
    .primaryText {
        color: ${({theme}) => theme.colors.white};
        font-size: 30px;
    }
 
    .textName, span {
        color: ${({theme}) => theme.colors.white};
        font-size: 50px;


        span {
            color: ${({theme}) => theme.colors.secondary};
        }
    
    }

    .textAnimated {
        border-right: 2px solid ${({theme}) => theme.colors.secondary};
        color: ${({theme}) => theme.colors.white};
        margin-right:  auto;
        width: min-content;
        text-align: left;
        overflow: hidden;
        font-size: 22px;
       // width: 220px;
    }

    .cursorAnimated {
        animation: blickCursor 500ms  steps(37) infinite normal, typing 2.5s steps(37)  normal;
    }

    @media (max-width: 999px){
        text-align: center;
        max-width: 100%;
        padding: 0 10px; 

        .primaryText {
            font-size: 23px;     
        }
        
        .textName, span {
            font-size: 35px;
        }

        .textAnimated {
            margin-left: auto;
            font-size: 20px;
        }

    }

    @media (max-width: 300px){
        text-align: center;
        overflow: hidden;
        max-width: 100%;
        padding: 0 5px; 
        width: 300px;

        .primaryText {
            
        }
        
        .textName, span {
            font-size: 25px;
        }

        .textAnimated {
            margin-left: auto;
            font-size: 17px;
        }

    }

    @keyframes typing {

        0%, 55% { 
            width: 0;
        } 

        100% {
            width: 220px;
        }

    }

    @keyframes blickCursor {

        from {
            border-right-color: ${({theme}) => theme.colors.secondary};
        } 

        to {
            border-right-color: transparent;
        }

    }

    @keyframes moveToTitle{
            
        0% {
            transform: translateY(-25px);
        }

        50% {
            transform: translateY(5px);
        }

        100% {
            transform: translateY(0px);
        }

    }

`

export const ImageContainer = styled.div`

    animation: flutuar 5s ease-in-out infinite;
    transform: translateY(0px);
    justify-content: center;
    align-items: center;
    padding-left: 140px;
    position: relative;
    max-width: 50%;
    display: flex;


    img {
        max-width: 100%;
    }

    @media (max-width: 1100px){
        padding-left: 0;
        width: 400px;
        height: 400px;
    }

    @media (max-width: 999px){
        display: none;
    }

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

`


export const Footer = styled.div`
    overflow: hidden;
    width: 100%;
    height: 8vh;

    ul {
        justify-content: center;
        list-style: none;
        display: flex;
    }

    .item {
        color: ${({theme}) => theme.colors.white};
        transition: 0.5s;
        margin: 10px;

        &:hover{
            color: ${({theme}) => theme.colors.secondary};
            size: 22px;
        }

    }

    @media (max-width: 300px){

        .item {
            height: 10px;
            margin: 5px;
            width: 10px;
        }

    }

`