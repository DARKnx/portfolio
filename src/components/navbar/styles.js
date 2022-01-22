import styled from "styled-components";




export const Container = styled.header`
 
    * {
        margin: 0;
        padding: 0;
    
    }

    a {
        color: ${({theme}) => theme.colors.white};
        text-decoration: none; 
        display: inline-block;
        position: relative;
        transition: 0.3s;
        opacity: 0.8;

    &::after{
        background: linear-gradient(90deg,transparent, ${({theme}) => theme.colors.secondary});
        transition: 0.37s ease-in-out;
        position: absolute;
        bottom: -5.5px;
        height: 0.7px;
        content:"";
        width: 0%;
        left: 0;
    }

        &:hover{
            color: #FFF;
                ::after{
                    width: 100%;
                }
        }
        
    } 

    .logo {
        text-transform: uppercase;
        letter-spacing: 4px;
        font-size: 26px;
        cursor: pointer;

        &::after {
            display: none;
        }

    }

    nav {
        border-bottom: 1px solid rgba(255, 255, 255, 0.096);
        background: ${({theme}) => theme.colors.primary};
        justify-content: space-between;
        align-items: center;
        padding: 0 25px;
        display: flex;
        height: 8vh;

        @media (max-width: 999px){
            padding: 0 10px;
        }

        @media (max-width: 300px){
            padding: 0 5px;
        }

    }

    .navlist {
        list-style: none;
        display: flex;

        li {
            letter-spacing: 3px;
            margin-left: 32px;
            font-weight: 500;
        }

    }

    .mobilemenu {
        cursor: pointer;
        display: none;

        div {
            background: #FFF;
            width: 32px;
            height: 2px;
            margin: 8px;
        }
    }

    .mobilemenu.active {

    .line1 {
    transform: rotate(-45deg) translate(-8px, 8px);
    transition: 0.6s;
    }

    .line3 { 
    transform: rotate(45deg) translate(-5px, -7px);
    transition: 0.6s;
    }

    .line2{
    opacity: 0;
    }
                        
    }

//mobile configs 
@media (max-width: 999px){
 
    .navlist {
        background: ${({theme}) => theme.colors.primary};
        border: 1px solid rgba(255, 255, 255, 0.030);
        justify-content: space-around;
        flex-direction: column;
        align-items: center;
        position: absolute;
        height: 60vh;
        width: 40vw;
        opacity: 0;
        right: 0%;
        top: 8vh;
            
        li {
            margin-left: 0;
        }
            
    }

    .navlist.active {
        transition: 0.5s;
        z-index: 5000;
        opacity: 1;
    }

    .mobilemenu {
        display: block;
    }

}

`
