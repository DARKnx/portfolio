import styled from "styled-components";




export const Container = styled.header`
 
* {
    margin: 0;
    padding: 0;
   
}

a {
    color: #fff;
    text-decoration: none; 
    transition: 0.3s;

    &:hover{
        opacity: 0.7;
    }
}

.logo {
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 4px;
}

nav {
display: flex;
justify-content: space-around;
align-items: center;
background: ${({theme}) => theme.colors.navbar};
height: 8vh;
}

.navlist {
    list-style: none;
    display: flex;

    li {
        letter-spacing: 3px;
        margin-left: 32px;
       }
}

.mobilemenu{
cursor: pointer;
display: none;

    div {
    width: 32px;
    height: 2px;
    background: #FFF;
    margin: 8px;
    }
}



@media (max-width: 999px){

 
       
        
    
     .navlist{
         position: absolute;
         top: 8vh;
         right: 0%;
         width: 40vw;
         height: 92vh;
         background: ${({theme}) => theme.colors.navbar};
         flex-direction: column;
         align-items: center;
         justify-content: space-around;
         opacity: 0;
           
           li {
               margin-left: 0;
           }

          
        }

        .navlist.active {
               transition: 0.5s;
               opacity: 1;
           
        }

        .mobilemenu {
            display: block;
        }
}

.mobilemenu.active {

              .line1{
                transition: 0.6s;
                  transform: rotate(-45deg) translate(-8px, 8px) ;
              }
              .line3{
                transition: 0.6s;
                  transform: rotate(45deg) translate(-5px, -7px) ;
              }
              .line2{
                 opacity: 0;
              }
           
        }
`


