import styled from "styled-components";




export const Background = styled.main`


    margin: 0;
    padding: 0;



a {
    z-index: 5000;
    color: #fff;
    text-decoration: none;
    transition: 0.3s;

     &:hover {
         opacity: 0.7;

     }
}

.logo {
    font-size: 24px;
    text-trasform: uppercase;
    letter-spacing: 4px;
}


nav {

    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
    background: ${({theme}) => theme.colors.navbar};
    height: 8vh;
}

.navlist {
 cursor: pointer;
 list-style: none;
 display: flex;
}

.navlist li {
    letter-spacing: 3px;
    margin-left: 32px;
}

.mobileMenu {
    display: none;
    cursor: pointer;
}

.mobileMenu div {
    width: 32px;
    height: 2px;
    background: #FFF;
    margin: 8px;
}

@media (max-width: 999px){

body{ 
    background-color: red;
    overflow-x: hidden !important;
}
 
    .navlist {
        position: absolute;
        width: 40vw;
        height: 92vh;
        top: 8vh;
        right: 0;
        background: ${({theme}) => theme.colors.navbar};
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        transform: translateX(100%);
        transition: transform 0.3s ease-in;
     
    }

    .navlist  li {
    opacity: 0;
    margin-left: 0;
        }

    .mobileMenu {
        display: block;
    }
 .navlist.active {
     transform: translateX(0);
 }

}


@keyframes navLinkFade {
    from {
         opacity: 0;
         transform: traslateX(50px);
    } to { 
      opacity: 1;
      transform: traslateX(0);
    } 
}
`